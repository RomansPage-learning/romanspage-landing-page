import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Under Construction",
  robots: { index: false, follow: false },
};

export default function UnderConstructionPage() {
  return (
    <main className="under-construction">
      <div className="under-construction-glow under-construction-glow-a" aria-hidden="true" />
      <div className="under-construction-glow under-construction-glow-b" aria-hidden="true" />
      <div className="under-construction-card">
        <Image
          src="/brand/logo.png"
          alt={siteConfig.siteName}
          width={220}
          height={57}
          className="under-construction-logo"
          priority
        />
        <span className="under-construction-badge">
          <span className="under-construction-dot" aria-hidden="true" />
          Under Construction
        </span>
        <h1>We&apos;re building something new.</h1>
        <p>
          {siteConfig.siteName + ' '} is currently undergoing scheduled maintenance.
          We&apos;ll be back online shortly &mdash; thank you for your patience.
        </p>
        <div className="under-construction-progress" role="presentation">
          <span />
        </div>
        <a className="btn btn-primary" href={`mailto:${siteConfig.contact.email}`}>
          Contact us at {siteConfig.contact.email}
        </a>
      </div>
    </main>
  );
}
