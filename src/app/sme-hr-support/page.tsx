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
    "Tailored HR support for startups and SMEs including recruitment, payroll, policies, and employee documentation.",
};

export default function SmeHrSupportPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-sme">
        <PageHero
          eyebrow="HR For Startups"
          title="Structured HR support built for SMEs"
          description="Romanspage offers tailored HR solutions for small and medium-sized businesses covering recruitment, engagement, payroll and compliance."
          variant="sme"
          imageSrc="/brand/images/about-1.jpg"
          highlights={[
            "Offer letter templates",
            "Compensation planning",
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
              <span>Virtual HR Expert Support</span>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="SME support outcomes"
          metrics={[
            { label: "HR Foundations", value: "Structured", detail: "Templates, policy systems, and onboarding standards." },
            { label: "Compliance Confidence", value: "Improved", detail: "Clear statutory routines and documented controls." },
            { label: "Team Productivity", value: "Boosted", detail: "Guided engagement practices and people-process alignment." },
          ]}
        />
        <CtaBand
          title="Build a stronger HR foundation for your SME"
          description="Tell us your team size and growth stage, and we will recommend the right support model."
          action={{ label: "Get an SME HR Plan", href: "/contact" }}
          theme="sme"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
