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
    eyebrow: "Consulting · Learning · Enterprise Development",
    title: "Empowering people, building businesses.",
    subtitle:
      "Since 2014, Romanspage Consulting Group has helped SMEs, agri-SMEs, and young people across Nigeria build stronger organisations, better talent, and scalable enterprises through consulting, learning, and enterprise technology.",
    primaryCta: { label: "Book Appointment", href: "/contact" },
    secondaryCta: { label: "Explore Our Services", href: "/hr-consulting" },
  },
  valuePoints: [
    {
      title: "People, HR & Organisation Advisory",
      description:
        "Recruitment and talent placement, HR services for SMEs, organisational assessment, and capacity building — a professional advisory practice, not just HR support.",
    },
    {
      title: "Enterprise & Agri-SME Growth Advisory",
      description:
        "Business diagnostics, agri-SME support, business development services, and access-to-finance readiness for agribusinesses and growing enterprises.",
    },
    {
      title: "Skills, Employability & Entrepreneurship Programmes",
      description:
        "Donor- and employer-facing programmes covering employability, entrepreneurship, career development, and job matching for youth and women.",
    },
    {
      title: "Digital Learning & Technology Solutions",
      description:
        "Coursademia, our online learning platform, and Bickford Technology Solutions, our IT and AI-skills training arm, scale learning and embed technology and practical AI adoption across industries.",
    },
  ],
  ctaBand: {
    title: "Get a practical people, business, and growth plan in one consultation",
    description:
      "Speak with Romanspage to map priorities across HR advisory, enterprise growth, workforce programmes, and technology enablement.",
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
