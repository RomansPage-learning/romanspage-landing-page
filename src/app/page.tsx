import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/analytics/tracked-link";
import {
  AppleIcon,
  GooglePlayIcon,
  PhoneIcon,
  MailIcon,
  PinIcon,
} from "@/components/landing/icons";
import { HeroSlider } from "@/components/landing/hero-slider";
import { ProjectsSection } from "@/components/landing/projects-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { WhatWeDo } from "@/components/landing/what-we-do";
import { contactDetails, googlePlayUrl, appStoreUrl } from "@/content/site";
import { heroSlides, projects, stats } from "@/content/services";

const clientLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const featuredProjects = projects.filter((project) => project.featured);
const learningStats = [
  { value: "2,500+", label: "Learners" },
  { value: "5+", label: "Partners" },
  { value: "20+", label: "Courses" },
];

export default function Home() {
  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        {/* Hero */}
        <HeroSlider slides={heroSlides} />

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

        {/* What we do */}
        <section className="band-soft" aria-label="Services">
          <div className="container section">
            <div className="section-head-split">
              <div>
                <div className="kicker">What we do</div>
                <h2 className="section-title">
                  Four practice areas, one integrated Group
                </h2>
              </div>
              <Link href="/services" className="btn btn-outline">
                All services
              </Link>
            </div>
            <WhatWeDo />
          </div>
        </section>

        {/* Selected projects */}
        <section className="section container" aria-label="Selected projects">
          <div className="section-head-split">
            <div>
              <div className="kicker">Selected work</div>
              <h2 className="section-title">
                Projects &amp; impact we&rsquo;re proud of
              </h2>
            </div>
            <Link href="/projects" className="btn btn-outline">
              View all projects
            </Link>
          </div>
          <ProjectsSection items={featuredProjects} />
        </section>

        {/* Coursademia */}
        <section className="band-soft" aria-label="Coursademia">
          <div className="container section coursademia-band">
            <div>
              <div className="kicker">Digital Learning</div>
              <h2 className="section-title">
                Coursademia — our learning platform
              </h2>
              <p className="section-lede" style={{ marginBottom: 28 }}>
                Coursademia is the Group&rsquo;s official learning
                infrastructure — soft skills, employability, entrepreneurship
                and SME training, with tracking and certification. It&rsquo;s a
                standalone platform, not a side feature.
              </p>
              <div className="mini-stats-row">
                {learningStats.map((stat) => (
                  <div key={stat.label} className="mini-stat">
                    <div className="mini-stat-value">{stat.value}</div>
                    <div className="mini-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="store-badge-row">
                <TrackedLink
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="coursademia_playstore_click"
                  eventCategory="homepage"
                  className="store-badge"
                >
                  <span className="store-badge-icon">
                    <GooglePlayIcon size={26} />
                  </span>
                  <span>
                    <small>GET IT ON</small>
                    Google Play
                  </span>
                </TrackedLink>
                <TrackedLink
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="coursademia_appstore_click"
                  eventCategory="homepage"
                  className="store-badge"
                >
                  <span className="store-badge-icon">
                    <AppleIcon size={26} />
                  </span>
                  <span>
                    <small>Download on the</small>
                    App Store
                  </span>
                </TrackedLink>
              </div>
            </div>
            <div className="coursademia-visual-wrap">
              <div className="coursademia-visual" aria-hidden>
                <Image
                  src="/brand/gallery/coursademia-training-session.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1023px) 90vw, 45vw"
                  className="coursademia-visual-photo"
                />
              </div>
              <div className="coursademia-logo-card">
                <Image
                  src="/brand/coursademia-logo.jpg"
                  alt=""
                  width={124}
                  height={82}
                />
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

        {/* CTA */}
        <section className="container cta-wrap" aria-label="Call to action">
          <div className="cta-band">
            <div className="cta-glow" aria-hidden />
            <div className="cta-inner">
              <h2>Ready to grow with the right partner?</h2>
              <p>
                Book a free consultation and we&rsquo;ll map out exactly how
                Romanspage can support your organisation, enterprise or
                programme.
              </p>
              <Link href="/contact" className="btn btn-white">
                Book a consultation
              </Link>
              <div className="cta-contact-row">
                <span className="cta-contact-item">
                  <PhoneIcon size={16} />
                  {contactDetails.phoneDisplay}
                </span>
                <span className="cta-contact-item">
                  <MailIcon size={16} />
                  {contactDetails.email}
                </span>
                <span className="cta-contact-item">
                  <PinIcon size={16} />
                  {contactDetails.address} · {contactDetails.addressSecondary}
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
