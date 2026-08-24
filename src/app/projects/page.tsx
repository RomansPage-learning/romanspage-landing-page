import type { Metadata } from "next";

import { ProjectsSection } from "@/components/landing/projects-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects and impact across HR & organisation advisory, enterprise & agri-SME growth, and skills & employability programmes — with funders, locations and status.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero" style={{ paddingBottom: 56 }}>
          <div className="kicker">Our work</div>
          <h1>Projects &amp; impact across Nigeria.</h1>
          <p className="page-lede">
            Work delivered with development partners, government agencies and
            funders — spanning HR &amp; organisation advisory, enterprise
            &amp; agri-SME growth, and skills &amp; employability programmes.
          </p>
        </section>

        <section className="container section" style={{ paddingTop: 0 }} aria-label="All projects">
          <ProjectsSection />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
