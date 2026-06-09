"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { contactDetails, footerServiceLinks } from "@/content/site";
import type { NavigationItem } from "@/types/landing";

type SiteHeaderProps = {
  siteName: string;
  navigation: NavigationItem[];
};

export function SiteHeader({ siteName, navigation }: SiteHeaderProps) {
  const pathname = usePathname();
  const isServiceRoute = footerServiceLinks.some((item) => item.href === pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`} aria-label="Site header">
      <div className="header-meta">
        <div className="container row space-between align-center wrap gap-md">
          <p>Executive HR consultancy with measurable outcomes.</p>
          <div className="row gap-md wrap">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
            <TrackedLink
              href="https://coursademia.com/"
              target="_blank"
              rel="noopener noreferrer"
              eventName="external_click"
              eventCategory="header"
              eventLabel="Coursademia"
            >
              Coursademia
            </TrackedLink>
          </div>
        </div>
      </div>
      <div className="container row space-between align-center top-nav">
        <Link href="/" className="brand" aria-label={`${siteName} home`}>
          <Image src="/brand/logo-icon.png" alt="Romanspage logo" width={60} height={45} />
          <span>{siteName}</span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <ul className="nav-list nav-list-primary">
            {navigation.map((item) => (
              <li key={item.href}>
                <TrackedLink
                  href={item.href}
                  className={pathname === item.href ? "is-active" : undefined}
                  aria-current={pathname === item.href ? "page" : undefined}
                  eventName="nav_click"
                  eventCategory="navigation"
                  eventLabel={item.label}
                >
                  {item.label}
                </TrackedLink>
              </li>
            ))}
            <li className="nav-item-services">
              <div className="services-menu">
                <button
                  type="button"
                  className={`services-trigger${isServiceRoute ? " is-active" : ""}`}
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Services
                </button>
                <ul className="services-submenu" aria-label="Our Services">
                  {footerServiceLinks.map((item) => (
                    <li key={`service-${item.href}`}>
                      <TrackedLink
                        href={item.href}
                        className={pathname === item.href ? "is-active" : undefined}
                        aria-current={pathname === item.href ? "page" : undefined}
                        eventName="nav_service_click"
                        eventCategory="navigation"
                        eventLabel={item.label}
                      >
                        {item.label}
                      </TrackedLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <details className="mobile-nav" aria-label="Mobile menu">
          <summary>
            <span className="mobile-nav-icon" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>Menu</span>
          </summary>
          <ul>
            {navigation.map((item) => (
              <li key={`mobile-${item.href}`}>
                <TrackedLink
                  href={item.href}
                  eventName="mobile_nav_click"
                  eventCategory="navigation"
                  eventLabel={item.label}
                >
                  {item.label}
                </TrackedLink>
              </li>
            ))}
            <li className="mobile-nav-section-label">Our Services</li>
            {footerServiceLinks.map((item) => (
              <li key={`mobile-service-${item.href}`}>
                <TrackedLink
                  href={item.href}
                  eventName="mobile_nav_service_click"
                  eventCategory="navigation"
                  eventLabel={item.label}
                >
                  {item.label}
                </TrackedLink>
              </li>
            ))}
            <li className="mobile-nav-menu-cta">
              <TrackedLink
                href="/contact"
                eventName="mobile_nav_cta_click"
                eventCategory="navigation"
                eventLabel="Book Appointment"
              >
                Book Appointment
              </TrackedLink>
            </li>
          </ul>
        </details>
        <TrackedLink
          href="/contact"
          className="btn btn-primary nav-cta"
          eventName="header_cta_click"
          eventCategory="navigation"
          eventLabel="Book Appointment"
        >
          Book Appointment
        </TrackedLink>
      </div>
    </header>
  );
}
