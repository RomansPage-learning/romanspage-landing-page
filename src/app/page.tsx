import Image from "next/image";
import Link from "next/link";

import { AudienceSplit } from "@/components/landing/audience-split";
import {
  ArrowRightIcon,
  ChartIcon,
  CheckIcon,
  ChipIcon,
  DashIcon,
  PeopleIcon,
} from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

const clientLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const services = [
  {
    title: "HR Advisory Services",
    body: "Outsourced HR, contract staffing and compliant payroll for growing teams.",
    icon: <PeopleIcon />,
  },
  {
    title: "Enterprise Development & Business Support",
    body: "Assessments, investment readiness and capacity building to help you scale.",
    icon: <ChartIcon />,
  },
  {
    title: "Digital & Technology Solutions",
    body: "Websites, integrations, AI optimization and technology training.",
    icon: <ChipIcon />,
  },
];

const projects = [
  {
    image: "/brand/banners/banner-1.png",
    tag: "HR Advisory",
    title: "Payroll & compliance for a retail group",
    result: "Streamlined monthly payroll and cleared a statutory remittance backlog.",
  },
  {
    image: "/brand/banners/banner-2.jpg",
    tag: "Enterprise Development",
    title: "Investment readiness for an agritech startup",
    result: "Structured the systems and financials needed ahead of a seed raise.",
  },
  {
    image: "/brand/images/about-1.jpg",
    tag: "Digital & Technology",
    title: "Website & AI workflow for a logistics firm",
    result: "Delivered a new website and an AI-assisted operations workflow.",
  },
];

const stats = [
  { value: "2014", label: "Year Romanspage was founded" },
  { value: "10+", label: "Years of HR expertise" },
  { value: "4", label: "Core service lines" },
  { value: "1", label: "Partner for everything HR" },
];

const plans = [
  {
    name: "Startup",
    tagline: "Essential HR for early-stage teams",
    price: "₦30,000",
    popular: false,
    features: [
      { label: "Employee engagement", included: true },
      { label: "Payroll (Tax, Pension, NSITF, NHF)", included: true },
      { label: "Policies & documentation", included: true },
      { label: "Unlimited HR support", included: true },
      { label: "Recruitment", included: false },
      { label: "Training", included: false },
    ],
  },
  {
    name: "SME",
    tagline: "Everything a scaling business needs",
    price: "₦49,999",
    popular: true,
    features: [
      { label: "Employee engagement", included: true },
      { label: "Payroll (Tax, Pension, NSITF, NHF)", included: true },
      { label: "Policies & documentation", included: true },
      { label: "Unlimited HR support", included: true },
      { label: "Recruitment", included: true },
      { label: "Training", included: true },
    ],
  },
];

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="page-shell">
        {/* Hero */}
        <section className="hero">
          <div className="hero-glow" aria-hidden />
          <div className="container hero-grid">
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden />
                HR Consulting · Since 2014
              </div>
              <h1 className="hero-title">
                Big enough to handle your HR.
                <br />
                <span>Small enough to care.</span>
              </h1>
              <p className="hero-sub">
                Romanspage Global is an executive HR consultancy helping
                growing businesses run seamless people operations — and
                connecting ambitious candidates with the right employers.
              </p>
              <div className="hero-actions">
                <Link href="/services" className="btn btn-primary btn-lg">
                  I&rsquo;m an employer
                </Link>
                <Link href="/services" className="btn btn-ghost-dark btn-lg">
                  I&rsquo;m a candidate
                </Link>
              </div>
              <div className="hero-trust">Trusted by SMEs across Nigeria</div>
            </div>
            <div className="hero-media">
              <div className="hero-media-frame">
                <Image
                  src="/brand/images/about-1.jpg"
                  alt="The Romanspage team at work"
                  fill
                  sizes="(max-width: 1023px) 90vw, 45vw"
                  priority
                />
              </div>
              <div className="hero-card">
                <div className="hero-card-kicker">Full-cycle HR</div>
                <div className="hero-card-body">
                  Payroll, compliance, recruitment &amp; training — one partner.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="logo-strip" aria-label="Partners">
          <span className="logo-strip-label">Partners</span>
          <div className="logo-marquee">
            <div className="logo-track">
              {[0, 1].map((dup) => (
                <div
                  key={dup}
                  className="logo-group"
                  aria-hidden={dup === 1 || undefined}
                >
                  {clientLogos.map((n) => (
                    <div key={n} className="logo-chip">
                      <Image
                        src={`/brand/clients/clients-logo-${n}.png`}
                        alt={dup === 0 ? `Partner logo ${n}` : ""}
                        width={108}
                        height={36}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employers vs candidates */}
        <AudienceSplit />

        {/* Services overview */}
        <section className="band-soft" aria-label="Services">
          <div className="container section">
            <div className="section-head-split">
              <div>
                <div className="kicker">What we do</div>
                <h2 className="section-title">
                  Three ways we help your business grow
                </h2>
              </div>
              <Link href="/services" className="btn btn-outline">
                All services
              </Link>
            </div>
            <div className="cards-3">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href="/services"
                  className="service-card"
                >
                  <div className="icon-box">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <span className="learn-more">
                    Learn more <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent projects */}
        <section className="section container" aria-label="Recent projects">
          <div className="section-head-split">
            <div>
              <div className="kicker">Selected work</div>
              <h2 className="section-title">
                Recent projects we&rsquo;re proud of
              </h2>
            </div>
            <Link href="/contact" className="btn btn-outline">
              Start your project <ArrowRightIcon />
            </Link>
          </div>
          <div className="cards-3">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-media">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1023px) 90vw, 30vw"
                  />
                </div>
                <div className="project-body">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="stats-band" aria-label="Key numbers">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="section container" aria-label="Pricing">
          <div className="section-head-center">
            <div className="kicker">HR for SMEs</div>
            <h2 className="section-title" style={{ marginBottom: 16 }}>
              Simple, transparent pricing
            </h2>
            <p className="section-lede">
              Outsource your people operations from as little as ₦30,000 a
              month. No long-term lock-in.
            </p>
          </div>
          <div className="plans">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`plan-card${plan.popular ? " popular" : ""}`}
              >
                {plan.popular ? (
                  <span className="badge-popular">Most popular</span>
                ) : null}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-tagline">{plan.tagline}</div>
                <div className="plan-price-row">
                  <span className="plan-price">{plan.price}</span>
                  <span className="plan-period">/ month</span>
                </div>
                <Link
                  href="/contact"
                  className={`btn plan-cta ${
                    plan.popular ? "btn-primary" : "btn-outline"
                  }`}
                >
                  Get started
                </Link>
                <div className="plan-features">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.label}
                      className={`feature-row${feature.included ? "" : " muted"}`}
                    >
                      {feature.included ? (
                        <CheckIcon size={16} />
                      ) : (
                        <DashIcon size={16} />
                      )}
                      {feature.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container cta-wrap" aria-label="Call to action">
          <div className="cta-band">
            <div className="cta-glow" aria-hidden />
            <div className="cta-inner">
              <h2>Ready to hand off your HR?</h2>
              <p>
                Book a free consultation and we&rsquo;ll map out exactly how
                Romanspage can support your team.
              </p>
              <Link href="/contact" className="btn btn-white">
                Book a consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
