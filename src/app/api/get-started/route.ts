import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { sendGetStartedNotification } from "@/lib/mailer";
import { nigeriaStates } from "@/content/nigeria-locations";

type GetStartedRequest = {
  name: string;
  email: string;
  phone: string;
  company: string;
  streetAddress: string;
  state: string;
  lga: string;
  staffRange: string;
  packageInterest: string;
  proposedStartDate: string;
  notes: string;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedStaffRanges = new Set(["1–20 staff", "20–50 staff", "50+ staff"]);
const allowedPackages = new Set(["Startup Plan", "SME Plan", "Not sure yet"]);
const stateLgaMap = new Map(nigeriaStates.map((item) => [item.name, new Set(item.lgas)]));
const defaultCooldownMinutes = 15;

function getCooldownMinutes(): number {
  const configured = Number(process.env.CONTACT_SUBMISSION_COOLDOWN_MINUTES || defaultCooldownMinutes);

  if (!Number.isFinite(configured)) {
    return defaultCooldownMinutes;
  }

  return Math.min(Math.max(Math.floor(configured), 1), 1440);
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for") || "";
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function readString(payload: Record<string, unknown>, key: string): string {
  const value = payload[key];
  return typeof value === "string" ? value.trim() : "";
}

function normalizePayload(payload: Record<string, unknown>): GetStartedRequest {
  return {
    name: readString(payload, "name"),
    email: readString(payload, "email").toLowerCase(),
    phone: readString(payload, "phone"),
    company: readString(payload, "company"),
    streetAddress: readString(payload, "streetAddress"),
    state: readString(payload, "state"),
    lga: readString(payload, "lga"),
    staffRange: readString(payload, "staffRange"),
    packageInterest: readString(payload, "packageInterest"),
    proposedStartDate: readString(payload, "proposedStartDate"),
    notes: readString(payload, "notes"),
    website: readString(payload, "website"),
  };
}

function validate(payload: GetStartedRequest): string | null {
  if (payload.website.length > 0) {
    return "Invalid submission.";
  }

  if (payload.name.length < 2 || payload.name.length > 80) {
    return "Please provide a valid name.";
  }

  if (!/[a-zA-Z]/.test(payload.name)) {
    return "Please provide a valid name.";
  }

  if (!emailPattern.test(payload.email) || payload.email.length > 120) {
    return "Please provide a valid email address.";
  }

  if (payload.phone.length < 7 || payload.phone.length > 30) {
    return "Please provide a valid phone number.";
  }

  if (payload.company.length < 2 || payload.company.length > 120) {
    return "Please provide a valid company name.";
  }

  if (payload.streetAddress.length < 5 || payload.streetAddress.length > 200) {
    return "Please provide a valid company street address.";
  }

  const lgasForState = stateLgaMap.get(payload.state);

  if (!lgasForState) {
    return "Please select a valid state.";
  }

  if (!lgasForState.has(payload.lga)) {
    return "Please select a valid Local Government Area for the selected state.";
  }

  if (!allowedStaffRanges.has(payload.staffRange)) {
    return "Please select a valid staff range.";
  }

  if (!allowedPackages.has(payload.packageInterest)) {
    return "Please select a valid package.";
  }

  if (payload.notes.length > 2000) {
    return "That note is too long.";
  }

  return null;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { message: "Unsupported content type. Use application/json." },
      { status: 415 },
    );
  }

  let rawPayload: unknown;

  try {
    rawPayload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON payload." }, { status: 400 });
  }

  if (!rawPayload || typeof rawPayload !== "object" || Array.isArray(rawPayload)) {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const payload = normalizePayload(rawPayload as Record<string, unknown>);
  const validationError = validate(payload);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  try {
    const db = await getDb();
    const cooldownMinutes = getCooldownMinutes();
    const now = new Date();
    const threshold = new Date(now.getTime() - cooldownMinutes * 60 * 1000);
    const clientIp = getClientIp(request);
    const userAgent = request.headers.get("user-agent") || "unknown";

    const existing = await db.collection("get_started_submissions").findOne({
      submittedAt: { $gte: threshold },
      $or: [
        { email: payload.email },
        { $and: [{ name: payload.name }, { company: payload.company }] },
        { ipAddress: clientIp },
      ],
    });

    if (existing) {
      return NextResponse.json(
        {
          message: `Please wait ${cooldownMinutes} minutes before sending another request.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(cooldownMinutes * 60),
          },
        },
      );
    }

    const companyAddress = `${payload.streetAddress}, ${payload.lga} LGA, ${payload.state} State`;

    await db.collection("get_started_submissions").insertOne({
      submittedAt: now,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      company: payload.company,
      streetAddress: payload.streetAddress,
      state: payload.state,
      lga: payload.lga,
      companyAddress,
      staffRange: payload.staffRange,
      packageInterest: payload.packageInterest,
      proposedStartDate: payload.proposedStartDate,
      notes: payload.notes,
      ipAddress: clientIp,
      userAgent,
      source: "website-get-started-form",
    });

    try {
      await sendGetStartedNotification({
        submittedAt: now,
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        company: payload.company,
        companyAddress,
        staffRange: payload.staffRange,
        packageInterest: payload.packageInterest,
        proposedStartDate: payload.proposedStartDate,
        notes: payload.notes,
      });
    } catch (error) {
      console.error("[get_started_notification_email_failed]", error);
    }
  } catch (error) {
    console.error("[get_started_lead_insert_failed]", error);
    return NextResponse.json(
      {
        message: "We could not save your request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Thanks. Your request has been received and our team will contact you shortly.",
    },
    { status: 200 },
  );
}
