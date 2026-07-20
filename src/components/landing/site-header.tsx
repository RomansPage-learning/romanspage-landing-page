"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNavigation, siteName } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

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
          {primaryNavigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="header-actions">
          <Link href="/contact" className="btn btn-dark">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
