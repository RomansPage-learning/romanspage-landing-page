import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "SME & Agri-SME Growth Advisory",
  description:
    "Business diagnostics, agri-SME support, business development services, and access-to-finance readiness for SMEs and agri-SMEs, including our Agri-SME Growth Clinic.",
};

export default function SmeHrSupportPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-sme">
        <PageHero
          eyebrow="Enterprise & Agri-SME Growth Advisory"
          title="Structured growth and access-to-finance support built for SMEs and Agri-SMEs"
          description="Romanspage offers business development, access-to-finance and agri-SME growth support — the natural home for agribusinesses, mechanisation and solar-irrigation providers, youth-in-agriculture models, and enterprise support programmes."
          variant="sme"
          imageSrc="/brand/images/about-1.jpg"
          highlights={[
            "SME business diagnostics",
            "Agri-SME support",
            "Access-to-finance readiness",
            "Business development services",
            "Operational improvement",
          ]}
        />
        <ServiceList
          title="Enterprise & Agri-SME support areas"
          intro="Modular support that scales with your business, including our flagship Growth-Hack Series."
          items={[
            "SME Business Diagnostics — business model, operations, staffing, and financial readiness review",
            "Agri-SME Support — for agribusinesses, processors, mechanisation providers, solar-irrigation service providers, and cooperatives",
            "Business Development Services — business plans, investment readiness, market access, and proposal development",
            "Access-to-Finance Readiness — investor documentation, financial-model support, and grant, loan, and equity linkages",
            "Operational Improvement — SOPs, process mapping, reporting systems, and field-operations support",
            "The Growth-Hack Series — enterprise diagnostics, business plan development, and funding facilitation",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Support Matrix</p>
            <h2>The Agri-SME Growth Clinic</h2>
            <div className="badge-matrix">
              <span>Business Diagnostics</span>
              <span>Market & Operations Review</span>
              <span>Business Development Support</span>
              <span>Access-to-Finance Readiness</span>
              <span>Business Case Development</span>
              <span>Growth Plan</span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Selected Impact</p>
            <h2>Recent Agri-SME and enterprise growth engagements</h2>
            <ol className="timeline-list">
              <li>
                <strong>Kwara SME Finance &amp; Capacity Development Project</strong>
                <span>Mastercard Foundation and T.A Community — tailored business development support to 200 SMEs to unlock over US$5 million in financing.</span>
              </li>
              <li>
                <strong>AGRA Investment-Readiness Programme</strong>
                <span>AGRA and Welcome2Africa International — investment readiness, operational restructuring, and financial-compliance support to 100 SMEs across Niger, Kaduna and Nasarawa, including rice SMEs.</span>
              </li>
              <li>
                <strong>Market Women Financial Literacy &amp; Mentorship</strong>
                <span>Mastercard Foundation — financial literacy and record-keeping training to improve women&apos;s financial capacity and access to finance.</span>
              </li>
            </ol>
          </div>
        </section>
        <OutcomeMetrics
          title="Enterprise growth outcomes"
          metrics={[
            { label: "SMEs Built via Growth-Hack", value: "2,700+", detail: "Enterprise diagnostics, business plans, and funding linkages." },
            { label: "Financing Unlocked", value: "US$5M+", detail: "Grant, loan, and equity linkages facilitated for SMEs and agri-SMEs." },
            { label: "Digital Readiness", value: "Improved", detail: "Practical platform and operational support for consistency." },
          ]}
        />
        <CtaBand
          title="Build a stronger growth and financing foundation for your SME"
          description="Tell us your business stage and growth goals, and we will recommend the right support model across diagnostics, business development, and access-to-finance."
          action={{ label: "Get a Growth Plan", href: "/contact" }}
          theme="sme"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
