import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BulbIcon, ScaleIcon, StarIcon } from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { stats } from "@/content/services";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Founded in 2014, Romanspage Consulting Group is an integrated consulting, learning and enterprise development company committed to top-tier service across HR advisory, enterprise growth, skills programmes and digital learning.",
};

const values = [
  {
    title: "Big enough, small enough",
    body: "The reach to meet real organisational needs, the care to treat your business like our own.",
    icon: <ScaleIcon />,
  },
  {
    title: "Creative solutions",
    body: "We solve for job creation, enterprise growth and talent matching with practical, tailored answers.",
    icon: <BulbIcon />,
  },
  {
    title: "Top-tier service",
    body: "A commitment to quality that has made us a market leader across our practice areas.",
    icon: <StarIcon />,
  },
];

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero">
          <div className="kicker">About us</div>
          <h1>An integrated partner for people, growth and learning.</h1>
          <p className="page-lede">
            Founded in 2014, Romanspage Consulting Group brings together HR
            &amp; organisation advisory, enterprise &amp; agri-SME growth,
            skills &amp; employability programmes, and digital learning &amp;
            technology under one trusted Group.
          </p>
        </section>

        <section
          className="container"
          style={{ paddingTop: 40, paddingBottom: 80 }}
          aria-label="Our team"
        >
          <div className="media-banner">
            <Image
              src="/brand/banners/banner-2.jpg"
              alt="The Romanspage Global team"
              fill
              sizes="(max-width: 1023px) 95vw, 1136px"
              priority
            />
          </div>
        </section>

        <section className="band-soft" aria-label="Our story">
          <div className="container story-grid">
            <div>
              <div className="kicker">Our story</div>
              <h2>Over a decade of impact across four practice areas</h2>
            </div>
            <div className="story-copy">
              <p>
                We&rsquo;re big enough to meet real organisational and
                enterprise needs, and small enough to care about your
                business. That balance has guided Romanspage since day one.
              </p>
              <p>
                Our goal is to continually provide creative solutions to the
                issues of job creation, enterprise growth, and matching top
                candidates to employers — helping our clients achieve their
                organisational goals.
              </p>
              <p>
                With more than a decade delivering HR, enterprise, skills and
                digital learning solutions, we pride ourselves as one of the
                market leaders across our practice areas in the region.
              </p>
            </div>
          </div>
        </section>

        <section className="section container" aria-label="Our values">
          <div className="kicker" style={{ textAlign: "center" }}>
            What we believe
          </div>
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: 48, fontSize: 34 }}
          >
            The principles behind our work
          </h2>
          <div className="cards-3">
            {values.map((value) => (
              <div key={value.title} className="value-card">
                <div className="icon-box">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </section>

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

        <section
          className="section container"
          style={{ textAlign: "center" }}
          aria-label="Call to action"
        >
          <h2 className="section-title" style={{ fontSize: 34, marginBottom: 16 }}>
            Let&rsquo;s build your people strategy
          </h2>
          <p
            className="section-lede"
            style={{ maxWidth: 500, margin: "0 auto 30px" }}
          >
            Tell us where you are today and we&rsquo;ll show you what great HR
            looks like.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get in touch
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
