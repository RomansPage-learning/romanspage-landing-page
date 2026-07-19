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
    "Romanspage Consulting Group is an integrated consulting, learning, and enterprise development company empowering SMEs, agri-SMEs, and young people across Nigeria since 2014.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-about">
        <PageHero
          eyebrow="About Romanspage Consulting Group"
          title="Empowering people, building businesses, enabling inclusive growth"
          description="Romanspage Consulting Group is an integrated consulting, learning and enterprise development company. We help SMEs, agri-SMEs, development partners, government programmes and young people build stronger organisations, better talent, scalable businesses and employable skills."
          variant="about"
          imageSrc="/brand/images/about-1.jpg"
          highlights={[
            "Founded in 2014",
            "Consulting · Learning · Enterprise Development",
            "55%+ female participation",
            "Offices in Edo & Ibadan",
          ]}
        />
        <section className="section">
          <div className="container split-panel">
            <div className="stack-lg">
              <p className="eyebrow">Who We Are</p>
              <h2>An inclusive-finance enablement partner</h2>
              <p>
                Romanspage Consulting Group is the market-facing identity of Romanspage
                Global Services Nigeria Limited. Founded in 2014, we have more than a
                decade of experience supporting SMEs, youth and women across Nigeria,
                designing and delivering data-driven training, technical assistance and
                investment-readiness interventions that strengthen enterprise
                competitiveness and connect businesses to funding.
              </p>
            </div>
            <ul className="feature-list">
              <li>Over a decade of impact supporting SMEs, youth and women since 2014</li>
              <li>Gender-responsive, youth-centred programming — over 55% female participation</li>
              <li>Anchored in SDG 5 (Gender Equality) and SDG 8 (Decent Work and Economic Growth)</li>
              <li>Offices in Edo and Ibadan, with active programming in Niger, Kaduna and Nasarawa</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Our Promise</p>
            <h2>Vision, mission and values</h2>
            <div className="grid cards">
              <article className="card">
                <h3>Vision</h3>
                <p>
                  To be the partner of choice for organisations, enterprises and young
                  people seeking to grow — by integrating consulting, learning and
                  enterprise development under one trusted Group.
                </p>
              </article>
              <article className="card">
                <h3>Mission</h3>
                <p>
                  To enable inclusive economic transformation through tailored,
                  data-driven interventions that align enterprise growth with national
                  and global development goals.
                </p>
              </article>
              <article className="card">
                <h3>Professionalism</h3>
                <p>Consistent, high-quality delivery on every engagement.</p>
              </article>
              <article className="card">
                <h3>Innovation</h3>
                <p>Practical, modern solutions that fit the Nigerian context.</p>
              </article>
              <article className="card">
                <h3>Collaboration</h3>
                <p>Working with partners, funders and communities, not around them.</p>
              </article>
              <article className="card">
                <h3>Measurable Impact</h3>
                <p>Designed for outcomes, tracked and reported.</p>
              </article>
            </div>
          </div>
        </section>
        <ServiceList
          title="What we do"
          intro="A connected value chain: we diagnose the problem, design the solution, deliver the training, scale the learning through Coursademia, and enable with technology through Bickford."
          items={[
            "Romanspage Advisory — HR, organisational assessment, and SME / agri-SME consulting",
            "Romanspage Programmes — employability, entrepreneurship, and women and youth empowerment",
            "Coursademia by Romanspage — our online learning platform and learning infrastructure",
            "Bickford Technology Solutions — IT training, digital skills, and tech-enabled tools",
            "The Growth-Hack Series — our flagship programme pairing training with access-to-finance facilitation",
          ]}
        />
        <section className="section">
          <div className="container split-panel">
            <div className="stack-lg">
              <p className="eyebrow">Our Merits</p>
              <h2>Why organizations rely on Romanspage</h2>
              <p>
                We operate as an extension of your business, understanding your
                objectives and implementing thoughtful, customized solutions with
                professional discipline — backed by a decade of donor- and
                government-funded delivery.
              </p>
            </div>
            <ul className="feature-list">
              <li>Proven track record with World Bank, AGRA and Mastercard Foundation-funded programmes</li>
              <li>One integrated value chain — diagnose, design, deliver, scale and enable with technology</li>
              <li>Access-to-finance specialism, having helped unlock millions in financing for SMEs</li>
              <li>Systems, not founder-dependence — a PMO, quality standards, and M&amp;E on every engagement</li>
            </ul>
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
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Selected Projects</p>
            <h2>Donor- and development-partner-funded programmes</h2>
            <ol className="timeline-list">
              <li>
                <strong>Kwara SME Finance &amp; Capacity Development Project</strong>
                <span>Mastercard Foundation and T.A Community — tailored business development support to 200 SMEs to unlock over US$5 million in financing.</span>
              </li>
              <li>
                <strong>AGRA Investment-Readiness Programme</strong>
                <span>AGRA and Welcome2Africa International — investment readiness and financial-compliance support to 100 SMEs across Niger, Kaduna and Nasarawa.</span>
              </li>
              <li>
                <strong>EdoCARES Enterprise Strengthening Programme</strong>
                <span>World Bank and Edo State Government / EdoJobs — trained and supported 500+ SMEs, enabling over 70% to access grant funding.</span>
              </li>
              <li>
                <strong>Oyo Youth Employability &amp; Placement</strong>
                <span>SOS Children&apos;s Villages — trained 400 youths in employability skills and supported job placement.</span>
              </li>
            </ol>
          </div>
        </section>
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Our Partners</p>
            <h2>Development, government and private-sector institutions</h2>
            <div className="grid cards">
              <article className="card">
                <h3>Development &amp; Multilateral</h3>
                <div className="badge-matrix">
                  <span>World Bank</span>
                  <span>AGRA</span>
                  <span>GIZ</span>
                  <span>Swiss Agency for Development and Cooperation (SDC)</span>
                  <span>Mastercard Foundation</span>
                  <span>SOS Children&apos;s Villages</span>
                </div>
              </article>
              <article className="card">
                <h3>Government &amp; Public Sector</h3>
                <div className="badge-matrix">
                  <span>Edo State Government</span>
                  <span>EdoJobs</span>
                  <span>National Directorate of Employment (NDE)</span>
                  <span>Bank of Industry (BOI)</span>
                  <span>Industrial Training Fund (ITF)</span>
                  <span>NITDA</span>
                </div>
              </article>
              <article className="card">
                <h3>Private Sector &amp; Ecosystem</h3>
                <div className="badge-matrix">
                  <span>Welcome2Africa International</span>
                  <span>Thrive Agric</span>
                  <span>Wennovation Hub</span>
                  <span>Lofty Inc Capital</span>
                  <span>T.A Community</span>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container split-panel">
            <div className="stack-lg">
              <p className="eyebrow">How We Deliver</p>
              <h2>A flexible, three-layer delivery model</h2>
              <p>
                Our people are our most valuable assets. We scale capacity to each
                engagement by combining a stable core team with specialist expertise on
                demand, so clients get consistency without carrying unnecessary overhead.
              </p>
            </div>
            <ul className="feature-list">
              <li><strong>Core Team</strong> — strategy, business development, project management, finance and quality control</li>
              <li><strong>Associate Consultants</strong> — HR experts, SME advisors, trainers, agri-business experts and M&amp;E specialists</li>
              <li><strong>Field / Project Staff</strong> — enumerators, facilitators, job coaches, coordinators and support officers</li>
            </ul>
          </div>
        </section>
        <CtaBand
          title="Ready to build stronger people, systems and enterprise outcomes?"
          description={`Tell us your current priorities and we will propose practical next steps. Reach us via ${contactDetails.phoneDisplay} or ${contactDetails.email}.`}
          action={{ label: "Speak with Our Team", href: "/contact" }}
          theme="about"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
