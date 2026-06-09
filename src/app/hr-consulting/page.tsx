import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "HR Consulting",
  description:
    "Payroll management, staff outsourcing, professional development, and recruitment consulting services by Romanspage.",
};

export default function HrConsultingPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-consulting">
        <PageHero
          eyebrow="HR Consulting"
          title="End-to-end HR consulting for growing organizations"
          description="Whether you employ a few people or several hundred, we help reduce time spent on payroll administration and ensure compliance with labour laws."
          variant="consulting"
          imageSrc="/brand/banners/banner-1.png"
          highlights={[
            "Payroll governance",
            "Staff outsourcing",
            "Operational compliance",
            "Leadership capability support",
          ]}
        />
        <ServiceList
          title="Core consulting services"
          intro="Integrated support to improve workforce outcomes and operational reliability."
          items={[
            "Payroll management and statutory remittance support",
            "Staff outsourcing and employee performance support",
            "Professional development for leadership and technical teams",
            "Recruitment advisory and hiring process optimization",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Consulting Pillars</p>
            <h2>How we deliver HR transformation</h2>
            <div className="pillars-grid">
              <article className="pillar-card">
                <h3>Compliance by Design</h3>
                <p>Embed statutory and policy requirements into daily workflows from day one.</p>
              </article>
              <article className="pillar-card">
                <h3>People Performance Systems</h3>
                <p>Align goals, accountability, and talent capability to business outcomes.</p>
              </article>
              <article className="pillar-card">
                <h3>Operational Clarity</h3>
                <p>Introduce simple, scalable HR operating models that reduce friction.</p>
              </article>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="Consulting outcomes"
          metrics={[
            { label: "Compliance Readiness", value: "Always-On", detail: "Policy, payroll, and process controls built into workflows." },
            { label: "Operational Efficiency", value: "Higher", detail: "Reduced friction in HR delivery and support operations." },
            { label: "Leadership Enablement", value: "Practical", detail: "Management systems aligned to execution and growth." },
          ]}
        />
        <CtaBand
          title="Need expert HR consulting support now?"
          description="Book a focused consultation and get a clear action plan aligned to your team structure and business goals."
          action={{ label: "Book a Consulting Call", href: "/contact" }}
          theme="consulting"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
