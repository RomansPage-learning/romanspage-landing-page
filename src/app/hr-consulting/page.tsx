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
    "Romanspage Advisory: HR services for SMEs, recruitment and talent placement, organisational assessment, and capacity building — a professional advisory practice.",
};

export default function HrConsultingPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-consulting">
        <PageHero
          eyebrow="Romanspage Advisory"
          title="A professional HR and organisation advisory practice, not just HR support"
          description="Whether you employ a few people or several hundred, we help you design practical people systems across recruitment, HR documentation, payroll, compliance, and organisational capacity."
          variant="consulting"
          imageSrc="/brand/banners/banner-1.png"
          highlights={[
            "HR4SMEs",
            "Recruitment & talent placement",
            "Organisational assessment",
            "Capacity building & HR outsourcing",
            "Agri-SME enablement support",
          ]}
        />
        <ServiceList
          title="Core consulting services"
          intro="Our consulting backbone — talent management, recruitment, capacity and governance — delivered as a professional advisory practice."
          items={[
            "HR Services for SMEs (HR4SMEs) — recruitment, onboarding, HR documentation, payroll and statutory compliance",
            "Performance management, KPIs, employee relations and staff policies",
            "Recruitment & Talent Placement, with a distinctive specialism in the agriculture value chain",
            "Organisational Assessment — structure review, capacity assessment, and governance review",
            "Capacity Building & HR Outsourcing — staff training, leadership development, and SOP development",
            "Acting as the HR partner for SMEs without an in-house HR department",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Productised Packages</p>
            <h2>Three flagship packages built for this practice area</h2>
            <div className="pillars-grid">
              <article className="pillar-card">
                <h3>HR4SMEs</h3>
                <p>
                  For small businesses needing HR structure: HR audit, employee
                  handbook, job descriptions, recruitment support, performance
                  template, payroll &amp; statutory compliance, and a monthly HR
                  retainer.
                </p>
              </article>
              <article className="pillar-card">
                <h3>Organisation Capacity Assessment</h3>
                <p>
                  For NGOs, SMEs, agri-SMEs and programme partners: governance,
                  HR/staffing, operations and financial/admin reviews, a
                  capacity-gap report, and an improvement roadmap.
                </p>
              </article>
              <article className="pillar-card">
                <h3>Recruitment & Talent Placement</h3>
                <p>
                  Sourcing, screening and placing talent — with a distinctive
                  specialism in the agriculture value chain, from agribusiness
                  specialists to field officers and technical experts.
                </p>
              </article>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="Consulting outcomes"
          metrics={[
            { label: "HR Foundations", value: "Structured", detail: "Documentation, policy systems and onboarding standards in place." },
            { label: "Operational Efficiency", value: "Higher", detail: "Reduced friction in HR and people-operations delivery." },
            { label: "Adoption Enablement", value: "Practical", detail: "Clear implementation support for teams and Agri-SMEs." },
          ]}
        />
        <CtaBand
          title="Need HR and organisation advisory support now?"
          description="Book a focused consultation and get a clear action plan for HR structure, recruitment, and organisational capacity."
          action={{ label: "Book a Strategy Call", href: "/contact" }}
          theme="consulting"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
