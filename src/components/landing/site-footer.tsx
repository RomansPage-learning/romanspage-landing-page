import Image from "next/image";
import Link from "next/link";

import { SocialIcon } from "@/components/landing/icons";
import { contactDetails, footerServiceLinks } from "@/content/site";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { name: "facebook", href: "https://www.facebook.com/romanspageglobal" },
  { name: "linkedin", href: "https://www.linkedin.com/company/romanspage-global-services" },
  { name: "x", href: "https://x.com/Romanspage" },
  { name: "instagram", href: "https://www.instagram.com/romanspage_globall" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: 20 }}>
            <span className="footer-brand-mark">
              <Image src="/brand/logo-icon.png" alt="" width={68} height={56} />
            </span>
            <span className="brand-text">
              <span className="footer-brand-name">Romanspage</span>
              <span className="footer-brand-sub">GLOBAL</span>
            </span>
          </div>
          <p className="footer-brand-blurb">
            Integrated consulting, learning and enterprise development for
            SMEs, agri-SMEs and development partners since 2014.
          </p>
          <div className="socials">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-btn"
                aria-label={social.name}
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-heading">Company</div>
          <div className="footer-links">
            {companyLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-heading">Services</div>
          <div className="footer-links">
            {footerServiceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="footer-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-heading">Contact</div>
          <div className="footer-links">
            <a href={contactDetails.phoneHref} className="footer-link">
              {contactDetails.phoneDisplay}
            </a>
            <a href={`mailto:${contactDetails.email}`} className="footer-link">
              {contactDetails.email}
            </a>
            <span className="footer-note">{contactDetails.address}</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Romanspage Global. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
