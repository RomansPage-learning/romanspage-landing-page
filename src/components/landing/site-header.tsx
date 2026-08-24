"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { TrackedLink } from "@/components/analytics/tracked-link";
import { ChevronIcon } from "@/components/landing/icons";
import { coursademiaUrl, primaryNavigation, siteName } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="site-header" aria-label="Site header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${siteName} — home`}>
          <span className="brand-mark">
            <Image
              src="/brand/logo-icon.png"
              alt=""
              width={68}
              height={56}
              priority
            />
          </span>
          <span className="brand-text">
            <span className="brand-name">Romanspage</span>
            <span className="brand-sub">GLOBAL</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="nav-item-dropdown"
                onMouseEnter={openDropdown}
                onMouseLeave={scheduleClose}
                onFocus={openDropdown}
                onBlur={scheduleClose}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setServicesOpen(false);
                }}
              >
                <Link
                  href={item.href}
                  className={`nav-link${isActive(item.href) ? " active" : ""}`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                >
                  {item.label}
                </Link>
                <ChevronIcon
                  size={14}
                  className={`nav-caret${servicesOpen ? " open" : ""}`}
                />
                {servicesOpen ? (
                  <div className="nav-dropdown-panel" role="menu">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} role="menuitem">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? " active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header-actions">
          <TrackedLink
            href={coursademiaUrl}
            target="_blank"
            rel="noopener noreferrer"
            eventName="coursademia_cta_click"
            eventCategory="header"
            className="btn btn-dark"
          >
            Coursademia
          </TrackedLink>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {primaryNavigation.map((item) =>
            item.children ? (
              <div key={item.href}>
                <button
                  type="button"
                  className={`nav-link mobile-services-toggle${
                    isActive(item.href) ? " active" : ""
                  }`}
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((open) => !open)}
                >
                  {item.label}
                  <ChevronIcon
                    size={14}
                    className={mobileServicesOpen ? "open" : ""}
                  />
                </button>
                {mobileServicesOpen ? (
                  <div className="mobile-subnav">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-link"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive(item.href) ? " active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      ) : null}
    </header>
  );
}
