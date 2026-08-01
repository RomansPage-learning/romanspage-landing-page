import type { Metadata } from "next";

import { ServiceDetailList } from "@/components/landing/service-detail-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Services",
  description:
    "People & HR advisory, enterprise & agri-SME growth advisory, skills & employability programmes, and digital learning & technology solutions — four connected practice areas that take work off your plate and set you up to scale.",
};

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
            Four connected practice areas — people &amp; HR advisory, enterprise
            &amp; agri-SME growth, skills &amp; employability programmes, and
            digital learning &amp; technology — that take work off your plate
            and set you up to scale. Pick what you need, or let us run it all.
          </p>
        </section>

        <section className="container detail-stack" aria-label="Service details">
          <ServiceDetailList />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
