import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { sendContactNotification } from "@/lib/mailer";

type ContactRequest = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedServices = new Set([
  "recruitment",
  "hr-consulting",
  "sme-hr-support",
  "training",
  "payroll",
  "general",
]);
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

function normalizePayload(payload: Record<string, unknown>): ContactRequest {
  return {
    name: readString(payload, "name"),
    email: readString(payload, "email").toLowerCase(),
    company: readString(payload, "company"),
    service: readString(payload, "service") || "general",
    message: readString(payload, "message"),
    website: readString(payload, "website"),
  };
}

function validate(payload: ContactRequest): string | null {
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

  if (payload.company.length > 120) {
    return "Company name is too long.";
  }

  if (!allowedServices.has(payload.service)) {
    return "Please select a valid service.";
  }

  if (payload.message.length < 20 || payload.message.length > 2000) {
    return "Please provide a message between 20 and 2000 characters.";
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

    const existing = await db.collection("contact_submissions").findOne({
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
          message: `Please wait ${cooldownMinutes} minutes before sending another message.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(cooldownMinutes * 60),
          },
        },
      );
    }

    await db.collection("contact_submissions").insertOne({
      submittedAt: now,
      name: payload.name,
      email: payload.email,
      company: payload.company,
      service: payload.service,
      message: payload.message,
      ipAddress: clientIp,
      userAgent,
      source: "website-contact-form",
    });

    try {
      await sendContactNotification({
        submittedAt: now,
        name: payload.name,
        email: payload.email,
        company: payload.company,
        service: payload.service,
        message: payload.message,
      });
    } catch (error) {
      console.error("[contact_notification_email_failed]", error);
    }
  } catch (error) {
    console.error("[contact_lead_insert_failed]", error);
    return NextResponse.json(
      {
        message: "We could not save your message right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Thanks. Your message has been received and our team will contact you shortly.",
    },
    { status: 200 },
  );
}
