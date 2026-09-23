import type { Metadata } from "next";

import { GetStartedForm } from "@/components/forms/get-started-form";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Get started",
  description:
    "Tell us about your organisation and we'll set up the right HR Consulting and Advisory plan for you.",
};

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ package?: string }>;
}) {
  const { package: defaultPackage } = await searchParams;

  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container contact-grid">
          <div>
            <div className="kicker" style={{ marginBottom: 16 }}>
              Get started
            </div>
            <h1>Let&rsquo;s set up your HR plan.</h1>
            <p className="contact-lede">
              Tell us a bit about your organisation and which HR Consulting
              and Advisory plan you&rsquo;re considering, and our team will
              reach out to get you started.
            </p>
          </div>
          <div className="contact-panel">
            <GetStartedForm defaultPackage={defaultPackage} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
