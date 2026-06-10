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
    "BDSP and HR consulting services including technology advisory, platform implementation, payroll support, and workforce optimization.",
};

export default function HrConsultingPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-consulting">
        <PageHero
          eyebrow="BDSP and HR Consulting"
          title="End-to-end business and people consulting for growing organizations"
          description="Whether you employ a few people or several hundred, we help you design practical operating systems across technology, payroll, compliance, and workforce execution."
          variant="consulting"
          imageSrc="/brand/banners/banner-1.png"
          highlights={[
            "Platform strategy",
            "Payroll governance",
            "Staff outsourcing",
            "Operational compliance",
            "Agri-SME enablement support",
          ]}
        />
        <ServiceList
          title="Core consulting services"
          intro="Integrated BDSP and HR support to improve operational reliability, adoption, and growth outcomes."
          items={[
            "Technology advisory and platform requirement mapping",
            "Business platform implementation and process digitization",
            "Payroll management and statutory remittance support",
            "Staff outsourcing and employee performance support",
            "Professional development for leadership and technical teams",
            "Agri-SME capability support and implementation coaching",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Consulting Pillars</p>
            <h2>How we deliver HR transformation</h2>
            <div className="pillars-grid">
              <article className="pillar-card">
                <h3>Digital Foundation</h3>
                <p>Define platform architecture, process flows, and capability requirements from day one.</p>
              </article>
              <article className="pillar-card">
                <h3>People Performance Systems</h3>
                <p>Align goals, accountability, and talent capability to business and technology outcomes.</p>
              </article>
              <article className="pillar-card">
                <h3>Operational Clarity</h3>
                <p>Introduce simple, scalable operating models that reduce friction and improve adoption.</p>
              </article>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="Consulting outcomes"
          metrics={[
            { label: "Digital Readiness", value: "Improved", detail: "Platform, process, and people systems aligned to delivery." },
            { label: "Operational Efficiency", value: "Higher", detail: "Reduced friction in HR and business support operations." },
            { label: "Adoption Enablement", value: "Practical", detail: "Clear implementation support for teams and Agri-SMEs." },
          ]}
        />
        <CtaBand
          title="Need BDSP and consulting support now?"
          description="Book a focused consultation and get a clear action plan for platform development, people systems, and growth execution."
          action={{ label: "Book a Strategy Call", href: "/contact" }}
          theme="consulting"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
