import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "Recruitment",
  description:
    "Romanspage recruitment services for contract, full-time, project staffing, and intern placement.",
};

export default function RecruitmentPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-recruitment">
        <PageHero
          eyebrow="Recruitment"
          title="Hire the right candidates with confidence"
          description="We help organizations identify and attract qualified professionals from internship level to C-suite roles across sectors."
          variant="recruitment"
          imageSrc="/brand/banners/banner-2.jpg"
          highlights={[
            "Contract hiring",
            "Full-time placement",
            "Project staffing",
            "Intern pipeline support",
          ]}
        />
        <ServiceList
          title="We support your hiring needs for"
          intro="Flexible recruitment support based on business stage and role complexity."
          items={[
            "Contract staff",
            "Full-time engagement",
            "Project staffing",
            "Intern placement",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Recruitment Process</p>
            <h2>A disciplined hiring pipeline from brief to onboarding</h2>
            <ol className="timeline-list">
              <li><strong>Role Calibration</strong><span>Align scope, competencies, and success criteria with your leadership team.</span></li>
              <li><strong>Sourcing and Screening</strong><span>Targeted outreach plus competency-based shortlisting.</span></li>
              <li><strong>Assessment and Validation</strong><span>Interview support, reference checks, and fit validation.</span></li>
              <li><strong>Offer and Onboarding Support</strong><span>Close top talent faster with coordinated hiring operations.</span></li>
            </ol>
          </div>
        </section>
        <OutcomeMetrics
          title="Hiring performance markers"
          metrics={[
            { label: "Candidate Fit", value: "High", detail: "Role-calibrated shortlists aligned with outcomes." },
            { label: "Hiring Velocity", value: "Faster", detail: "Structured process reduces delays and decision cycles." },
            { label: "Placement Range", value: "Intern to C-Suite", detail: "Coverage across levels, functions, and industries." },
          ]}
        />
        <CtaBand
          title="Need to fill critical roles faster?"
          description="Share your hiring brief and we will launch a structured recruitment pipeline with clear timelines."
          action={{ label: "Start a Hiring Brief", href: "/contact" }}
          theme="recruitment"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
