import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowRightIcon,
  BulbIcon,
  ChartIcon,
  CheckIcon,
  ChipIcon,
  PeopleIcon,
} from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { practiceAreas } from "@/content/services";
import { siteConfig } from "@/lib/site-config";

const iconFor = {
  people: <PeopleIcon />,
  chart: <ChartIcon />,
  bulb: <BulbIcon />,
  chip: <ChipIcon />,
};

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.id === slug);
  if (!area) return {};
  const description = area.metaDescription ?? area.teaser;
  const url = `${siteConfig.siteUrl}/services/${area.id}`;
  return {
    title: area.title,
    description,
    openGraph: {
      title: area.title,
      description,
      url,
      siteName: siteConfig.siteTitle,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: area.title,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.id === slug);
  if (!area) notFound();

  const otherAreas = practiceAreas.filter((item) => item.id !== area.id);

  return (
    <>
      {/* <a href="#main-content" className="skip-link">
        Skip to main content
      </a> */}
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container page-hero" style={{ paddingBottom: 40 }}>
          <div className="kicker">Our services</div>
          <h1>{area.title}</h1>
          <p className="page-lede">{area.intro}</p>
        </section>

        <section className="container" style={{ paddingBottom: 56 }}>
          <div className="media-banner">
            <Image src={area.bannerImage} alt="" fill sizes="(max-width: 1023px) 95vw, 1136px" priority />
          </div>
        </section>

        <section className="container detail-stack" aria-label="Service breakdown">
          <div className="detail-card-head" style={{ marginBottom: 8 }}>
            <div className="icon-box">{iconFor[area.icon]}</div>
            <div>
              <h2>What&rsquo;s included</h2>
              <p>{area.subs.length} core service lines under {area.title.toLowerCase()}.</p>
            </div>
          </div>
          <div className="subs-grid" style={{ marginBottom: 32 }}>
            {area.subs.map((sub) => (
              <div key={sub.name} className="sub-card">
                <div className="sub-card-head">
                  <span style={{ color: "#1e3a8a", display: "inline-flex" }}>
                    <CheckIcon size={16} />
                  </span>
                  <span>{sub.name}</span>
                </div>
                <p>{sub.desc}</p>
              </div>
            ))}
          </div>

          {area.pricingTiers ? (
            <div style={{ marginBottom: 32 }}>
              <div className="section-head-center">
                <div className="kicker">Pricing</div>
                <h2 className="section-title" style={{ fontSize: 28 }}>
                  Packages for every stage
                </h2>
              </div>
              <div className="plans plans-3">
                {area.pricingTiers.map((tier) => (
                  <div key={tier.name} className="plan-card">
                    <div className="plan-name">{tier.name}</div>
                    <div className="plan-tagline">{tier.staffRange}</div>
                    <div className="plan-price-row">
                      {tier.price ? (
                        <>
                          <span className="plan-price">{tier.price.split("/")[0]}</span>
                          <span className="plan-period">/ month</span>
                        </>
                      ) : (
                        <span className="plan-price plan-price-consult">Speak to a consultant</span>
                      )}
                    </div>
                    <Link
                      href={tier.price ? `/get-started?package=${encodeURIComponent(`${tier.name} Plan`)}` : "/contact"}
                      className="btn plan-cta btn-outline"
                    >
                      {tier.price ? "Get started" : "Talk to us"}
                    </Link>
                    <div className="plan-features">
                      {tier.features.map((feature) => (
                        <div key={feature} className="feature-row">
                          <CheckIcon size={16} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="cta-inline-row">
            <Link href="/contact" className="btn btn-dark btn-lg">
              {area.cta} <ArrowRightIcon />
            </Link>
            {area.externalLink ? (
              <a
                href={area.externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                {area.externalLink.label} <ArrowRightIcon />
              </a>
            ) : null}
          </div>
        </section>

        <section className="band-soft" aria-label="Other services">
          <div className="container section">
            <div className="kicker" style={{ textAlign: "center" }}>
              Explore more
            </div>
            <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>
              Our other practice areas
            </h2>
            <div className="cards-3">
              {otherAreas.map((other) => (
                <Link key={other.id} href={`/services/${other.id}`} className="service-card">
                  <div className="icon-box">{iconFor[other.icon]}</div>
                  <h3>{other.title}</h3>
                  <p>{other.teaser}</p>
                  <span className="learn-more">
                    Learn more <ArrowRightIcon />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
