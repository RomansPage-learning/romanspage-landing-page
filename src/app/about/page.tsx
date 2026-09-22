import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SocialIcon } from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Romanspage is an integrated consulting, learning and enterprise-development organisation helping businesses, people and communities grow. Since 2014, we've worked with governments, development agencies, corporates and financial institutions to strengthen SMEs, prepare young people for work and enterprise, and create pathways to inclusive economic growth.",
};

const sdgCommitments = [
  { number: 1, label: "Advance sustainable livelihoods and poverty reduction through enterprise and employment pathways" },
  { number: 2, label: "Strengthen food security through agriculture and agri-SME development" },
  { number: 4, label: "Expand access to quality learning and skills" },
  { number: 5, label: "Promote women's economic inclusion" },
  { number: 8, label: "Create decent-work and entrepreneurship opportunities" },
  { number: 9, label: "Support innovation and technology adoption" },
  { number: 10, label: "Reduce barriers faced by underserved groups" },
  { number: 17, label: "Build partnerships that scale meaningful impact" },
];

const team = [
  {
    name: "Name to be confirmed",
    role: "Role to be confirmed",
    bio: "Short writeup to be confirmed.",
    image: "/brand/stock/professional-portrait-1.jpg",
    linkedin: "#",
  },
  {
    name: "Name to be confirmed",
    role: "Role to be confirmed",
    bio: "Short writeup to be confirmed.",
    image: "/brand/stock/professional-portrait-2.jpg",
    linkedin: "#",
  },
  {
    name: "Name to be confirmed",
    role: "Role to be confirmed",
    bio: "Short writeup to be confirmed.",
    image: "/brand/stock/professional-portrait-1.jpg",
    linkedin: "#",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero">
          <div className="kicker">About us</div>
          <h1>An integrated partner for people, growth and learning.</h1>
          <p className="page-lede">
            Romanspage is an integrated consulting, learning and
            enterprise-development organisation helping businesses, people
            and communities grow. Since 2014, we have worked with
            governments, development agencies, corporates and financial
            institutions to strengthen SMEs, prepare young people for work
            and enterprise, and create pathways to inclusive economic growth.
          </p>
        </section>

        <section
          className="container"
          style={{ paddingTop: 40, paddingBottom: 80 }}
          aria-label="Our team"
        >
          <div className="media-banner">
            <Image
              src="/brand/stock/team-collaboration.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 95vw, 1136px"
              priority
            />
          </div>
        </section>

        <section className="band-soft" aria-label="About Romanspage">
          <div className="container story-grid">
            <div>
              <div className="kicker">About Romanspage</div>
              <h2>An integrated consulting, learning and enterprise-development Group</h2>
            </div>
            <div className="story-copy">
              <p>
                Our work spans agriculture and agri-SME development, the
                green economy, workforce development, entrepreneurship,
                digital learning, technology solutions and organisational
                advisory.
              </p>
              <p>
                We bring together practical consulting, capacity building,
                enterprise support, employer engagement and
                access-to-finance solutions to help people and businesses
                move from potential to lasting progress.
              </p>
            </div>
          </div>
        </section>

        <section className="section container" aria-label="What we do">
          <div className="section-head-center">
            <div className="kicker">What we do</div>
            <h2 className="section-title" style={{ fontSize: 34 }}>
              Solutions that strengthen organisations, build capable
              workforces and help enterprises grow
            </h2>
            <p className="section-lede">
              Our work includes organisational diagnostics and advisory;
              business development and investment-readiness support;
              employability and entrepreneurship programmes; digital
              learning and technology solutions; and agriculture and
              green-economy initiatives that connect young people and SMEs
              to modern, income-generating opportunities.
            </p>
            <p className="section-lede">
              Through our integrated brands — Romanspage Advisory,
              Romanspage Programmes, Coursademia and Bickford International
              — we support clients from strategy and training through
              implementation, technology adoption and measurable outcomes.
            </p>
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

        <section className="section container" aria-label="Our vision and mission">
          <div className="cards-3" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="value-card">
              <div className="kicker" style={{ marginBottom: 12 }}>
                Our Vision
              </div>
              <p>
                To be the trusted partner of choice for organisations,
                enterprises and young people seeking to grow through
                integrated consulting, learning and enterprise development.
              </p>
            </div>
            <div className="value-card">
              <div className="kicker" style={{ marginBottom: 12 }}>
                Our Mission
              </div>
              <p>
                To enable inclusive economic transformation through
                tailored, data-driven solutions that strengthen enterprises,
                build capable workforces, create jobs and expand opportunity
                across agriculture, the green economy and the wider economy.
              </p>
            </div>
          </div>
        </section>

        <section className="band-soft" aria-label="Our SDG commitment">
          <div className="container section">
            <div className="section-head-center">
              <div className="kicker">Our SDG commitment</div>
              <h2 className="section-title" style={{ fontSize: 34 }}>
                Contributing to the Sustainable Development Goals
              </h2>
              <p className="section-lede">
                Our work is designed to contribute to the Sustainable
                Development Goals.
              </p>
            </div>
            <div className="sdg-grid">
              {sdgCommitments.map((sdg) => (
                <div key={sdg.number} className="sdg-pill">
                  <span className="sdg-pill-num">{sdg.number}</span>
                  {sdg.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" aria-label="Our team">
          <div className="section-head-center">
            <div className="kicker">Our team</div>
            <h2 className="section-title" style={{ fontSize: 34 }}>
              The people behind Romanspage
            </h2>
            <p className="section-lede">
              Our team brings together experienced professionals in
              enterprise development, agriculture, human resources,
              workforce development, technology, learning and programme
              delivery. We combine diverse expertise with a shared
              commitment to practical problem-solving, meaningful
              collaboration and results that improve lives, businesses and
              communities.
            </p>
          </div>
          <div className="cards-3">
            {team.map((member, index) => (
              <div key={`${member.name}-${index}`} className="team-card">
                <div className="team-card-photo">
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="(max-width: 1023px) 90vw, 30vw"
                  />
                </div>
                <div className="team-card-body">
                  <div className="team-card-name">{member.name}</div>
                  <div className="team-card-role">{member.role}</div>
                  <p className="team-card-bio">{member.bio}</p>
                  <a href={member.linkedin} className="team-card-linkedin">
                    <SocialIcon name="linkedin" size={15} />
                    LinkedIn profile
                  </a>
                </div>
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
