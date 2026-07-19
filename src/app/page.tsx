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
              We help organisations, SMEs and development programmes build capable
              people, stronger systems, and scalable enterprise outcomes.
            </blockquote>
          </div>
        </section>
        <OutcomeMetrics
          eyebrow="Impact"
          title="Impact at a glance"
          metrics={[
            { label: "Track Record", value: "Since 2014", detail: "Over a decade of impact across SMEs, youth, and women in Nigeria." },
            { label: "SMEs Built via Growth-Hack", value: "2,700+", detail: "Supported through our flagship Growth-Hack Series." },
            { label: "Young People Trained", value: "5,000+", detail: "Employability, entrepreneurship, and digital skills training." },
            { label: "SMEs Supported (EdoCARES)", value: "500+", detail: "World Bank and Edo State-funded enterprise strengthening." },
            { label: "Female Participation", value: "55%+", detail: "Gender-responsive, youth-centred programming aligned to SDG 5 and SDG 8." },
            { label: "Financing Unlocked", value: "US$5M+", detail: "Grant, loan, and equity linkages facilitated for SMEs and agri-SMEs." },
          ]}
        />
        <ValueGrid
          id="services"
          title="Our four integrated practice areas"
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
