import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/landing/icons";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { contactDetails } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether it's HR advisory, enterprise & agri-SME growth, skills & employability programmes, or digital learning & technology, we'd love to hear from you. Reach out and we'll respond within one business day.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      label: "Phone",
      value: contactDetails.phoneDisplay,
      href: contactDetails.phoneHref,
      icon: <PhoneIcon size={20} />,
    },
    {
      label: "Email",
      value: contactDetails.email,
      href: `mailto:${contactDetails.email}`,
      icon: <MailIcon size={20} />,
    },
    {
      label: "Office",
      value: contactDetails.address,
      icon: <PinIcon size={20} />,
    },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" className="page-shell">
        <section className="container contact-grid">
          <div>
            <div className="kicker" style={{ marginBottom: 16 }}>
              Contact
            </div>
            <h1>Let&rsquo;s talk about your organisation or programme.</h1>
            <p className="contact-lede">
              Whether it&rsquo;s HR advisory, enterprise &amp; agri-SME growth,
              skills &amp; employability programmes, or digital learning &amp;
              technology, we&rsquo;d love to hear from you. Reach out and
              we&rsquo;ll respond within one business day.
            </p>
            <div className="contact-items">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-item-icon">{item.icon}</span>
                  <div>
                    <div className="contact-item-label">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-item-value"
                        style={{ color: "inherit" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="contact-item-value">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="contact-panel">
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
