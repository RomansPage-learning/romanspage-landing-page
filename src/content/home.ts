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
    eyebrow: "BDSP + HR Technology Partner",
    title: "Build better businesses with practical people and technology systems.",
    subtitle:
      "Founded in 2014, Romanspage Global supports organizations as a Business Development Service Provider, building digital platforms, strengthening HR operations, and enabling Agri-SMEs with practical technology training.",
    primaryCta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Explore Technology Services", href: "/hr-consulting" },
  },
  valuePoints: [
    {
      title: "Recruitment",
      description:
        "From interns to C-suite leaders, we identify and attract qualified candidates with the right skills and attitude.",
    },
    {
      title: "BDSP Technology Enablement",
      description:
        "Design and build practical business platforms, digital workflows, and operating systems that improve execution and visibility.",
    },
    {
      title: "Agri-SME Tech Training",
      description:
        "Support Agri-SMEs with hands-on digital skills training, implementation coaching, and tools that strengthen market readiness and growth.",
    },
  ],
  ctaBand: {
    title: "Get a practical BDSP and HR growth plan in one consultation",
    description:
      "Speak with Romanspage to map priorities across platform development, Agri-SME tech training, recruitment, and workforce support.",
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
