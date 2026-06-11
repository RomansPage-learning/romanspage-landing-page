import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { contactDetails, footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Romanspage Global, our BDSP technology services, Agri-SME support model, and practical approach to workforce and business growth.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-about">
        <PageHero
          eyebrow="About Romanspage Global"
          title="Learn About Us"
          description="Founded in 2014, Romanspage Global is a Business Development Service Provider delivering technology solutions, platform development, and workforce support for businesses and Agri-SMEs."
          variant="about"
          imageSrc="/brand/images/about-1.jpg"
          highlights={[
            "Founded in 2014",
            "BDSP technology provider",
            "Technology-enabled service delivery",
            "Agri-SME outcome-focused execution",
          ]}
        />
        <section className="section">
          <div className="container split-panel">
            <div className="stack-lg">
              <p className="eyebrow">Who We Are</p>
              <h2>Executive HR consultancy with practical growth focus</h2>
              <p>
                Our goal is to provide practical business solutions through technology,
                people systems, and execution support, helping organizations and
                Agri-SMEs improve productivity, market readiness, and sustainable growth.
              </p>
            </div>
            <ul className="feature-list">
              <li>Focused on quality and top-tier partner service delivery</li>
              <li>Over 12 years of implementation and advisory track record</li>
              <li>Platform and workflow design backed by measurable outcomes</li>
              <li>Built to support both immediate and long-term workforce goals</li>
            </ul>
          </div>
        </section>
        <ServiceList
          title="What we do"
          intro="We use a proven methodology to deliver workflow-driven HR strategies that help organizations achieve measurable objectives."
          items={[
            "Outsourcing, staff management, and payroll administration",
            "BDSP technology advisory and digital platform development",
            "Talent sourcing, executive search, internship placement, and recruitment support",
            "HR policy drafting, implementation tracking, and job evaluation",
            "Agri-SME digital skills training and implementation coaching",
            "Monitoring and evaluation for process and service improvement",
            "Employee satisfaction programs and managed healthcare support",
          ]}
        />
        <section className="section">
          <div className="container split-panel">
            <div className="stack-lg">
              <p className="eyebrow">Our Merits</p>
              <h2>Why organizations rely on Romanspage</h2>
              <p>
                We operate as an extension of your business, understanding your objectives and implementing thoughtful, customized HR solutions with professional discipline.
              </p>
            </div>
            <ul className="feature-list">
              <li>Customized and thoughtful solutions tailored to client expectations</li>
              <li>Strong BDSP technology orientation with practical implementation depth</li>
              <li>Highly motivated, result-oriented team execution</li>
              <li>Consistent delivery standards with measurable impact focus</li>
            </ul>
          </div>
        </section>
        <OutcomeMetrics
          title="Institutional strengths"
          metrics={[
            { label: "Years of Expertise", value: "12+", detail: "Sustained HR advisory and implementation track record." },
            { label: "Service Breadth", value: "Diversified", detail: "Consulting, recruitment, outsourcing, payroll, and workforce development." },
            { label: "Delivery Model", value: "Business Extension", detail: "We align closely with client objectives and day-to-day operations." },
          ]}
        />
        <section className="section">
          <div className="container split-panel">
            <div className="stack-lg">
              <p className="eyebrow">Our People</p>
              <h2>A diverse, high-performing team</h2>
              <p>
                Our people are our most valuable assets. They come from diverse
                educational and professional backgrounds, united by a shared passion
                for problem solving and delivering high standards of results.
              </p>
            </div>
            <ul className="feature-list">
              <li>Diverse cross-functional backgrounds and perspectives</li>
              <li>Strong commitment to service quality and professionalism</li>
              <li>Result-oriented execution with collaborative mindset</li>
              <li>Deep focus on measurable impact for client teams</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="container stack-lg">
            <h2>Our values</h2>
            <ul className="feature-list">
              <li>Our clients are our pride.</li>
              <li>Clear and constructive communication.</li>
              <li>Excellence and professionalism are our watchword.</li>
              <li>Committed to making measurable impact.</li>
            </ul>
          </div>
        </section>
        <CtaBand
          title="Ready for a dependable HR partner?"
          description={`Tell us your current HR priorities and we will propose practical next steps. Reach us via ${contactDetails.phoneDisplay} or ${contactDetails.email}.`}
          action={{ label: "Speak with Our Team", href: "/contact" }}
          theme="about"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
