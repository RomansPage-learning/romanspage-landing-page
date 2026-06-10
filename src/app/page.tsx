import { CtaBand } from "@/components/landing/cta-band";
import { ClientsSection } from "@/components/landing/clients-section";
import { HeroSection } from "@/components/landing/hero-section";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { ServicePlanTable } from "@/components/landing/service-plan-table";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { ValueGrid } from "@/components/landing/value-grid";
import { homePageContent } from "@/content/home";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main id="main-content" className="page-shell page-home">
        <HeroSection content={homePageContent.hero} />
        <section className="section section-quote" aria-label="Brand statement">
          <div className="container">
            <blockquote>
              We combine BDSP insight, technology execution, and HR expertise to help businesses and Agri-SMEs scale with confidence.
            </blockquote>
          </div>
        </section>
        <OutcomeMetrics
          title="Why organizations choose Romanspage"
          metrics={[
            { label: "Platform Delivery", value: "Build-Ready", detail: "Practical digital platforms aligned to business process outcomes." },
            { label: "Agri-SME Enablement", value: "Hands-On", detail: "Technology training and implementation support for agribusiness growth." },
            { label: "People + Process", value: "Integrated", detail: "Recruitment, HR systems, and compliance aligned to execution." },
          ]}
        />
        <ValueGrid
          id="services"
          title="Core service outcomes for employers"
          items={homePageContent.valuePoints}
        />
        <ClientsSection />
        <ServicePlanTable />
        <CtaBand
          title={homePageContent.ctaBand.title}
          description={homePageContent.ctaBand.description}
          action={homePageContent.ctaBand.action}
          theme="home"
        />
      </main>
      <SiteFooter
        owner={homePageContent.footer.copyrightOwner}
        links={footerLinks}
      />
    </>
  );
}
