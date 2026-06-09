const fallbackSiteUrl = "https://romanspage.com";
const fallbackPhone = "+2347060532104";

function normalizeSiteUrl(value: string | undefined): string {
  if (!value) return fallbackSiteUrl;
  return value.replace(/\/+$/, "");
}

function normalizePhone(phone: string): string {
  const cleaned = phone.trim().replace(/[^\d+]/g, "");
  if (!cleaned) return fallbackPhone;

  if (cleaned.startsWith("+")) {
    return `+${cleaned.slice(1).replace(/\D/g, "")}`;
  }

  return cleaned.replace(/\D/g, "");
}

function toPhoneDisplay(phone: string): string {
  const normalized = normalizePhone(phone);
  const digits = normalized.replace(/\D/g, "");

  if (digits.startsWith("234") && digits.length === 13) {
    return `+234 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }

  return normalized;
}

function toTelHref(phone: string): string {
  return `tel:${normalizePhone(phone)}`;
}

export const siteConfig = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Romanspage Global",
  siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE || "Roman's Page",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "romanspage@romanspage.com",
    phoneDisplay: toPhoneDisplay(
      process.env.NEXT_PUBLIC_CONTACT_PHONE || fallbackPhone,
    ),
    phoneHref: toTelHref(process.env.NEXT_PUBLIC_CONTACT_PHONE || fallbackPhone),
    address:
      process.env.NEXT_PUBLIC_CONTACT_ADDRESS ||
      "Edo Innovation Hub 59, I.C.E Road, Edo State.",
  },
};
