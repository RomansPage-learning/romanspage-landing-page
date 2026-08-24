import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRightIcon,
  BulbIcon,
  ChartIcon,
  ChipIcon,
  PeopleIcon,
} from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { practiceAreas } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "People & HR advisory, enterprise & agri-SME growth advisory, skills & employability programmes, and digital learning & technology solutions — four connected practice areas that take work off your plate and set you up to scale.",
};

const iconFor = {
  people: <PeopleIcon />,
  chart: <ChartIcon />,
  bulb: <BulbIcon />,
  chip: <ChipIcon />,
};

export default function ServicesPage() {
  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero" style={{ paddingBottom: 40 }}>
          <div className="kicker">Our services</div>
          <h1>Everything your business needs to grow.</h1>
          <p className="page-lede">
            Four connected practice areas — people &amp; HR advisory, enterprise
            &amp; agri-SME growth, skills &amp; employability programmes, and
            digital learning &amp; technology — that take work off your plate
            and set you up to scale. Pick what you need, or let us run it all.
          </p>
        </section>

        <section className="container" style={{ paddingBottom: 56 }}>
          <div className="media-banner">
            <Image
              src="/brand/stock/business-contract-discussion.jpg"
              alt=""
              fill
              sizes="(max-width: 1023px) 95vw, 1136px"
              priority
            />
          </div>
        </section>

        <section className="container section" style={{ paddingTop: 0 }} aria-label="Practice areas">
          <div className="cards-4">
            {practiceAreas.map((area) => (
              <Link key={area.id} href={`/services/${area.id}`} className="service-card">
                <div className="icon-box">{iconFor[area.icon]}</div>
                <h3>{area.title}</h3>
                <p>{area.teaser}</p>
                <span className="learn-more">
                  Learn more <ArrowRightIcon />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
