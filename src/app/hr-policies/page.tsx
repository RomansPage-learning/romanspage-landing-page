import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "Payroll and HR Policies",
  description:
    "Payroll management and HR policy support including statutory compliance and documentation standards.",
};

export default function HrPoliciesPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-policies">
        <PageHero
          eyebrow="Payroll and HR Policies"
          title="Spend less time administering payroll"
          description="We help employers design payroll structures, process remittances, and maintain compliance with statutory obligations and labour standards."
          variant="policies"
          imageSrc="/brand/banners/banner-1.jpg"
          highlights={[
            "Payroll setup",
            "Statutory remittance",
            "Policy implementation",
            "Compliance documentation",
          ]}
        />
        <ServiceList
          title="Coverage areas"
          intro="Practical policy and payroll support for day-to-day operations."
          items={[
            "Payroll structure design",
            "Tax, pension, NSITF, and NHF remittance guidance",
            "Policy drafting and implementation support",
            "Compliance-aligned documentation",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Operating Model</p>
            <h2>Payroll and policy operations that reduce risk</h2>
            <ol className="timeline-list">
              <li><strong>Baseline Audit</strong><span>Assess current payroll structure, policy artifacts, and compliance exposure.</span></li>
              <li><strong>Framework Setup</strong><span>Define policy controls, remittance schedules, and documentation standards.</span></li>
              <li><strong>Operational Rollout</strong><span>Implement practical routines with internal HR and finance teams.</span></li>
              <li><strong>Governance Review</strong><span>Maintain compliance with periodic review checkpoints and updates.</span></li>
            </ol>
          </div>
        </section>
        <OutcomeMetrics
          title="Payroll and policy outcomes"
          metrics={[
            { label: "Compliance Posture", value: "Stronger", detail: "Documented controls across payroll and policy workflows." },
            { label: "Risk Exposure", value: "Lower", detail: "Routine governance reviews and statutory process discipline." },
            { label: "Operational Continuity", value: "Stable", detail: "Consistent payroll and documentation standards." },
          ]}
        />
        <CtaBand
          title="Need payroll and policy support?"
          description="Get practical guidance to improve compliance, reduce risk, and stabilize payroll operations."
          action={{ label: "Talk to a Payroll Advisor", href: "/contact" }}
          theme="policies"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
