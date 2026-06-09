import Image from "next/image";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { contactDetails, footerServiceLinks } from "@/content/site";
import type { NavigationItem } from "@/types/landing";

type SiteFooterProps = {
  owner: string;
  links: NavigationItem[];
};

export function SiteFooter({ owner, links }: SiteFooterProps) {
  return (
    <footer id="contact" className="site-footer" aria-label="Site footer">
      <div className="container footer-shell">
        <div className="footer-grid">
        <div className="stack-lg footer-column footer-column-brand">
          <div className="brand footer-brand">
            <Image src="/brand/logo-icon.png" alt="Romanspage logo" width={60} height={45} />
            <span>{owner}</span>
          </div>
          <p className="footer-description">
            We are here to solve your HR challenges leveraging technology,
            practical expertise, and measurable service delivery.
          </p>
          <ul className="plain-list row gap-md footer-connect">
            <li>
              <TrackedLink
                href={`mailto:${contactDetails.email}`}
                eventName="footer_quick_action"
                eventCategory="footer"
                eventLabel="Email"
              >
                Email Us
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href={contactDetails.phoneHref}
                eventName="footer_quick_action"
                eventCategory="footer"
                eventLabel="Call"
              >
                Call Us
              </TrackedLink>
            </li>
            <li>
              <TrackedLink
                href="https://coursademia.com/"
                target="_blank"
                rel="noopener noreferrer"
                eventName="footer_quick_action"
                eventCategory="footer"
                eventLabel="Coursademia"
              >
                Coursademia
              </TrackedLink>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <ul className="plain-list vertical-list footer-links-list">
            {links.map((link) => (
              <li key={link.label}>
                <TrackedLink
                  href={link.href}
                  eventName="footer_link_click"
                  eventCategory="footer"
                  eventLabel={link.label}
                >
                  {link.label}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul className="plain-list vertical-list footer-links-list">
            {footerServiceLinks.map((link) => (
              <li key={link.label}>
                <TrackedLink
                  href={link.href}
                  eventName="footer_service_click"
                  eventCategory="footer"
                  eventLabel={link.label}
                >
                  {link.label}
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="plain-list vertical-list footer-contact-list">
            <li>
              <span>Email</span>
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            </li>
            <li>
              <span>Office</span>
              <p>{contactDetails.address}</p>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="footer-legal">
        <div className="container row space-between wrap gap-md">
          <p>© {new Date().getFullYear()} {owner}. All rights reserved.</p>
          <p>Built for high-performance HR delivery and conversion-focused user journeys.</p>
        </div>
      </div>
    </footer>
  );
}
