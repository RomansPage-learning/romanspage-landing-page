import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Not sure what you need? Our interactive self-assessment is coming soon — in the meantime, talk to our team or browse our services.",
};

export default function AssessmentPage() {
  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero" style={{ paddingBottom: 72 }}>
          <div className="kicker">Get started</div>
          <h1>Not sure what you need?</h1>
          <p className="page-lede">
            Our interactive self-assessment is coming soon — a quick set of
            questions about you or your business that points you straight to
            the right service. In the meantime, tell us a bit about your goals
            and our team will point you in the right direction.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Talk to our team
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Browse services
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
