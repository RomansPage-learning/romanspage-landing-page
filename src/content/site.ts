import type { NavigationDropdownItem, NavigationItem } from "@/types/landing";
import { siteConfig } from "@/lib/site-config";
import { practiceAreas } from "@/content/services";

export const siteName = siteConfig.siteName;

export const primaryNavigation: NavigationDropdownItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: practiceAreas.map((area) => ({
      label: area.navLabel,
      href: `/services#${area.id}`,
    })),
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavigationItem[] = practiceAreas.map((area) => ({
  label: area.navLabel,
  href: `/services#${area.id}`,
}));

export const contactDetails = {
  phoneDisplay: siteConfig.contact.phoneDisplay,
  phoneHref: siteConfig.contact.phoneHref,
  phoneSecondaryDisplay: "+234 912 452 3153",
  phoneSecondaryHref: "tel:+2349124523153",
  email: siteConfig.contact.email,
  address: siteConfig.contact.address,
  addressSecondary: "Ibadan, Oyo State",
};

export const coursademiaUrl = "https://coursademia.com";
