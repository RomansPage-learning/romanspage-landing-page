import type { HomePageContent } from "@/types/landing";
import { siteConfig } from "@/lib/site-config";

export const homePageContent: HomePageContent = {
  siteName: siteConfig.siteName,
  navigation: [
    { label: "About", href: "/about" },
    { label: "HR Consulting", href: "/hr-consulting" },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Contact", href: "/contact" },
  ],
  hero: {
    eyebrow: "Executive HR Consultancy",
    title: "The right HR solutions for your business growth.",
    subtitle:
      "Founded in 2014, Romanspage Global helps employers hire top talent, streamline HR operations, and improve workforce performance through practical and cost-efficient support.",
    primaryCta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Discover Recruitment", href: "/recruitment" },
  },
  valuePoints: [
    {
      title: "Recruitment",
      description:
        "From interns to C-suite leaders, we identify and attract qualified candidates with the right skills and attitude.",
    },
    {
      title: "Payroll Management",
      description:
        "Reduce administrative load and ensure tax and statutory remittance in line with local labour requirements.",
    },
    {
      title: "SME HR Support",
      description:
        "Get tailored templates, policy support, employee documentation, and ongoing advisory for small and growing teams.",
    },
  ],
  ctaBand: {
    title: "Get a practical HR plan in one consultation",
    description:
      "Speak with Romanspage to map your immediate priorities across recruitment, payroll, consulting, and workforce support.",
    action: { label: "Book a Consultation", href: "/contact" },
  },
  footer: {
    copyrightOwner: siteConfig.siteName,
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/hr-consulting" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
