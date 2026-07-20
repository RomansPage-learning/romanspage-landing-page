import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRightIcon,
  ChartIcon,
  CheckIcon,
  ChipIcon,
  DashIcon,
  PeopleIcon,
} from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HR advisory, enterprise development and business support, and digital & technology solutions — three connected practices that take work off your plate and set you up to scale.",
};

const serviceDetails = [
  {
    title: "HR Advisory Services",
    cta: "Talk to an HR advisor",
    body: "Dependable, end-to-end people operations for growing businesses — from a fully outsourced HR function to compliant payroll and flexible staffing.",
    icon: <PeopleIcon />,
    subs: [
      {
        name: "HR4SMEs",
        desc: "A complete outsourced HR function for small and growing teams.",
      },
      {
        name: "HR Outsourcing",
        desc: "Hand off day-to-day HR administration so you can focus on your core.",
      },
      {
        name: "Contract Staffing",
        desc: "Flexible, compliant staffing that scales with your workload.",
      },
      {
        name: "Payroll Management",
        desc: "Accurate payroll with tax, pension, NSITF and NHF all handled.",
      },
    ],
  },
  {
    title: "Enterprise Development & Business Support",
    cta: "Explore business support",
    body: "Practical support that strengthens your operations and prepares your business to grow, raise capital and perform at the next level.",
    icon: <ChartIcon />,
    subs: [
      {
        name: "Organizational Assessment",
        desc: "Diagnose structure, processes and gaps to unlock performance.",
      },
      {
        name: "Investment Readiness Support",
        desc: "Get investor-ready with the right systems, controls and story.",
      },
      {
        name: "Capacity Building Support",
        desc: "Build the internal capability your team needs to scale.",
      },
      {
        name: "Finance Linkages",
        desc: "Connect to funding partners and financing that fit your stage.",
      },
    ],
  },
  {
    title: "Digital & Technology Solutions",
    cta: "Start a digital project",
    body: "Modern digital capability for your business — from your website to AI-enabled workflows and the skills to run them confidently.",
    icon: <ChipIcon />,
    subs: [
      {
        name: "Website Development",
        desc: "Fast, modern websites that represent your brand well.",
      },
      {
        name: "Technology Integration",
        desc: "Connect your tools into one seamless, efficient stack.",
      },
      {
        name: "AI Optimization Support",
        desc: "Put AI to work to streamline and speed up your operations.",
      },
      {
        name: "Training & Capacity Building",
        desc: "Upskill your team to use technology with confidence.",
      },
    ],
  },
];

const compareRows = [
  { label: "Employee engagement", startup: true, sme: true },
  { label: "Payroll (Tax, Pension, NSITF, NHF)", startup: true, sme: true },
  { label: "Policies & documentation", startup: true, sme: true },
  { label: "Unlimited HR support", startup: true, sme: true },
  { label: "Recruitment", startup: false, sme: true },
  { label: "Training", startup: false, sme: true },
];

function CompareMark({ included }: { included: boolean }) {
  return included ? (
    <span style={{ color: "#1e3a8a" }}>
      <CheckIcon size={16} />
    </span>
  ) : (
    <span style={{ color: "#c4c4c4" }}>
      <DashIcon size={16} />
    </span>
  );
}

export default function ServicesPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero" style={{ paddingBottom: 56 }}>
          <div className="kicker">Our services</div>
          <h1>Everything your business needs to grow.</h1>
          <p className="page-lede">
            Three connected practices — HR advisory, enterprise development,
            and digital &amp; technology — that take work off your plate and
            set you up to scale. Pick what you need, or let us run it all.
          </p>
        </section>

        <section className="container detail-stack" aria-label="Service details">
          {serviceDetails.map((service) => (
            <article key={service.title} className="detail-card">
              <div>
                <div className="icon-box">{service.icon}</div>
                <h2>{service.title}</h2>
                <p>{service.body}</p>
                <Link href="/contact" className="btn btn-dark" style={{ height: 46, padding: "0 22px" }}>
                  {service.cta} <ArrowRightIcon />
                </Link>
              </div>
              <div className="subs-grid">
                {service.subs.map((sub) => (
                  <div key={sub.name} className="sub-card">
                    <div className="sub-card-head">
                      <span style={{ color: "#1e3a8a", display: "inline-flex" }}>
                        <CheckIcon size={16} />
                      </span>
                      <span>{sub.name}</span>
                    </div>
                    <p>{sub.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section
          className="container"
          style={{ maxWidth: 1000, paddingTop: 72, paddingBottom: 72 }}
          aria-label="Compare plans"
        >
          <div className="section-head-center">
            <div className="kicker">Compare plans</div>
            <h2 className="section-title" style={{ fontSize: 34 }}>
              Find the right fit for your team
            </h2>
          </div>
          <div className="compare-table">
            <div className="compare-row compare-head">
              <div className="compare-head-label">HR service offering</div>
              <div className="compare-head-plan">
                <div className="compare-plan-name">Startup</div>
                <div className="compare-plan-price">₦30,000/mo</div>
              </div>
              <div className="compare-head-plan highlight">
                <div className="compare-plan-name highlight">SME</div>
                <div className="compare-plan-price" style={{ color: "#33529e" }}>
                  ₦49,999/mo
                </div>
              </div>
            </div>
            {compareRows.map((row) => (
              <div key={row.label} className="compare-row compare-body-row">
                <div className="compare-label">{row.label}</div>
                <div className="compare-cell">
                  <CompareMark included={row.startup} />
                </div>
                <div className="compare-cell highlight">
                  <CompareMark included={row.sme} />
                </div>
              </div>
            ))}
            <div className="compare-row">
              <div style={{ padding: "20px 28px" }} />
              <div className="compare-foot-cell">
                <Link href="/contact" className="btn btn-outline" style={{ height: 40 }}>
                  Choose
                </Link>
              </div>
              <div className="compare-foot-cell highlight">
                <Link href="/contact" className="btn btn-primary" style={{ height: 40 }}>
                  Choose
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
