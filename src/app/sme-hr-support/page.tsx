import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "SME HR Support",
  description:
    "Tailored HR and BDSP support for startups and SMEs including recruitment, payroll, platform enablement, and capability development.",
};

export default function SmeHrSupportPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-sme">
        <PageHero
          eyebrow="HR For Startups"
          title="Structured HR and BDSP support built for SMEs and Agri-SMEs"
          description="Romanspage offers tailored support for small and medium businesses covering recruitment, payroll, compliance, and practical technology enablement."
          variant="sme"
          imageSrc="/brand/images/about-1.jpg"
          highlights={[
            "Offer letter templates",
            "Compensation planning",
            "Platform enablement support",
            "Dedicated HR experts",
            "Scalable team support",
          ]}
        />
        <ServiceList
          title="SME support areas"
          intro="Modular support packages that can scale as your team grows."
          items={[
            "Offer letter templates and compensation planning",
            "Job description drafting and KPI support",
            "Payroll templates, administration, and remittance support",
            "Employee handbook and onboarding SOP guidance",
            "Platform onboarding and digital workflow support",
            "Agri-SME implementation coaching",
            "Dedicated HR expert advisory",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Support Matrix</p>
            <h2>Built for startups and scaling teams</h2>
            <div className="badge-matrix">
              <span>Offer Letter Templates</span>
              <span>Compensation Planning</span>
              <span>Payroll Administration</span>
              <span>Statutory Remittance</span>
              <span>Employee Handbook Guidance</span>
              <span>Platform Enablement Support</span>
              <span>Virtual HR Expert Support</span>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="SME support outcomes"
          metrics={[
            { label: "HR Foundations", value: "Structured", detail: "Templates, policy systems, and onboarding standards." },
            { label: "Compliance Confidence", value: "Improved", detail: "Clear statutory routines and documented controls." },
            { label: "Digital Readiness", value: "Improved", detail: "Practical platform support for operational consistency." },
          ]}
        />
        <CtaBand
          title="Build a stronger HR and technology foundation for your SME"
          description="Tell us your team size and growth stage, and we will recommend the right support model across people, process, and platform needs."
          action={{ label: "Get an SME Support Plan", href: "/contact" }}
          theme="sme"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
