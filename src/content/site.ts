import type { NavigationItem } from "@/types/landing";
import { siteConfig } from "@/lib/site-config";

export const siteName = siteConfig.siteName;

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavigationItem[] = [
  { label: "HR Advisory", href: "/services" },
  { label: "Enterprise Development", href: "/services" },
  { label: "Digital & Technology", href: "/services" },
  { label: "Payroll Management", href: "/services" },
];

export const contactDetails = {
  phoneDisplay: siteConfig.contact.phoneDisplay,
  phoneHref: siteConfig.contact.phoneHref,
  phoneSecondaryDisplay: "+234 912 452 3153",
  phoneSecondaryHref: "tel:+2349124523153",
  email: siteConfig.contact.email,
  address: siteConfig.contact.address,
  addressSecondary: "Ibadan, Oyo State",
};
