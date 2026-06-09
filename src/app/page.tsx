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
              We are big enough to attend to your HR needs and small enough to care about your business.
            </blockquote>
          </div>
        </section>
        <OutcomeMetrics
          title="Why employers choose Romanspage"
          metrics={[
            { label: "Recruitment Delivery", value: "100%", detail: "Structured hiring workflows from brief to onboarding." },
            { label: "Payroll Reliability", value: "99.9%", detail: "Compliance-first payroll processes and statutory routines." },
            { label: "SME Support Coverage", value: "End-to-End", detail: "Templates, policies, and advisory scaled to team size." },
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
