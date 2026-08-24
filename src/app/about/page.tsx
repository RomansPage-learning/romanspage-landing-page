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
              src="/brand/stock/team-group.jpg"
              alt=""
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

        <section className="section container" aria-label="Our integrated model">
          <div className="section-head-center">
            <div className="kicker">Our integrated model</div>
            <h2 className="section-title" style={{ fontSize: 34 }}>
              A connected value chain
            </h2>
            <p className="section-lede">
              We diagnose the problem, design the solution, deliver the
              training, scale the learning through Coursademia, and deliver
              technology-based solutions through Bickford — every engagement
              can move seamlessly from advice to capability to measurable
              outcome.
            </p>
          </div>
          <div className="table-scroll">
            <table className="info-table">
              <thead>
                <tr>
                  <th style={{ width: "18%" }}>Stage</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Diagnose</td>
                  <td>
                    We assess the organisation, enterprise or programme —
                    structure, capacity, operations, talent and systems — to
                    define the real problem.
                  </td>
                </tr>
                <tr>
                  <td>Design</td>
                  <td>
                    We design the right solution: HR systems, growth
                    strategy, a training curriculum, a programme model or a
                    technology approach.
                  </td>
                </tr>
                <tr>
                  <td>Deliver</td>
                  <td>
                    We deliver the work — advisory, capacity building,
                    training and programme implementation — to defined
                    standards and timelines.
                  </td>
                </tr>
                <tr>
                  <td>Scale</td>
                  <td>
                    Coursademia, our learning platform, scales the learning to
                    more people, cohorts and locations, with tracking and
                    certification.
                  </td>
                </tr>
                <tr>
                  <td>Enable with technology</td>
                  <td>
                    Bickford delivers IT training, digital skills and
                    tech-enabled tools that embed and sustain the change.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="band-soft" aria-label="Brand architecture">
          <div className="container section">
            <div className="section-head-center">
              <div className="kicker">Brand architecture</div>
              <h2 className="section-title" style={{ fontSize: 34 }}>
                One trusted Group, four brands
              </h2>
              <p className="section-lede">
                The Group consolidates under one market-facing identity while
                retaining the equity built in its established names. Each
                brand sits visibly under — and is endorsed by — Romanspage
                Consulting Group.
              </p>
            </div>
            <div className="table-scroll">
              <table className="info-table">
                <thead>
                  <tr>
                    <th style={{ width: "28%" }}>Brand</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Romanspage Consulting Group</td>
                    <td>The parent and market-facing identity for the whole business.</td>
                  </tr>
                  <tr>
                    <td>Romanspage Advisory</td>
                    <td>HR, organisational assessment, and SME / agri-SME consulting.</td>
                  </tr>
                  <tr>
                    <td>Romanspage Programmes</td>
                    <td>
                      Employability, entrepreneurship, women and youth
                      empowerment, and project implementation.
                    </td>
                  </tr>
                  <tr>
                    <td>Coursademia by Romanspage</td>
                    <td>The Group&rsquo;s online learning platform and digital learning unit.</td>
                  </tr>
                  <tr>
                    <td>Bickford Technology Solutions</td>
                    <td>Technology training, digital skills and tech-enabled tools.</td>
                  </tr>
                </tbody>
              </table>
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
