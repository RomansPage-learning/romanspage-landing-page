import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { contactDetails, footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Romanspage Global for BDSP technology services, platform development, Agri-SME tech training, and HR support.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-contact">
        <PageHero
          eyebrow="Contact Us"
          title="Call now or write a message"
          description="Reach out for BDSP technology support, platform development, Agri-SME training, staffing, and workforce development. We respond with practical next steps for your business."
          variant="contact"
          imageSrc="/brand/banners/banner-2.jpg"
          highlights={[
            "Fast response workflow",
            "Consultative discovery",
            "Service-fit recommendation",
            "Implementation roadmap",
          ]}
        />
        <section className="section">
          <div className="container grid contact-grid">
            <article className="card">
              <h2>Email</h2>
              <p>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </p>
            </article>
            <article className="card">
              <h2>Phone</h2>
              <p>
                <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
              </p>
            </article>
            <article className="card">
              <h2>Address</h2>
              <p>{contactDetails.address}</p>
            </article>
          </div>
        </section>
        <ContactForm />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Response Charter</p>
            <h2>What happens after you submit</h2>
            <div className="pillars-grid">
              <article className="pillar-card">
                <h3>Fast Triage</h3>
                <p>Your request is reviewed quickly and routed to the right service specialist.</p>
              </article>
              <article className="pillar-card">
                <h3>Clarity Call</h3>
                <p>We confirm context, goals, timeline, and constraints before proposing any engagement.</p>
              </article>
              <article className="pillar-card">
                <h3>Execution Plan</h3>
                <p>You receive a practical path forward with clear next steps and ownership.</p>
              </article>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="Engagement response standards"
          metrics={[
            { label: "Triage Speed", value: "Rapid", detail: "Fast routing of your inquiry to the right specialist." },
            { label: "Discovery Quality", value: "Structured", detail: "Clear scope and requirements validation before execution." },
            { label: "Execution Clarity", value: "Actionable", detail: "Practical roadmap with ownership and timelines." },
          ]}
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
