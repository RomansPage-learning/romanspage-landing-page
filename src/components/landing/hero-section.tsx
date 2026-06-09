"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { TrackedLink } from "@/components/analytics/tracked-link";

import type { HeroContent } from "@/types/landing";

type HeroSectionProps = {
  content: HeroContent;
};

type HeroScene = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  kpis: Array<{ value: string; label: string }>;
  mediaImage: string;
  mediaStat: string;
  mediaNote: string;
};

export function HeroSection({ content }: HeroSectionProps) {
  const scenes: HeroScene[] = [
    {
      eyebrow: content.eyebrow,
      title: content.title,
      subtitle: content.subtitle,
      primaryCta: content.primaryCta,
      secondaryCta: content.secondaryCta,
      kpis: [
        { value: "10+ Years", label: "HR Delivery Experience" },
        { value: "24-48h", label: "Initial Response Window" },
        { value: "End-to-End", label: "Recruitment and HR Support" },
      ],
      mediaImage: "/brand/banners/banner-2.jpg",
      mediaStat: "Trusted HR Partner",
      mediaNote: "The right candidate for you through Romanspage",
    },
    {
      eyebrow: "Workforce Transformation",
      title: "From hiring pressure to people performance",
      subtitle:
        "Romanspage helps employers stabilize payroll, improve team capability, and build reliable HR systems for long-term growth.",
      primaryCta: { label: "Plan Your HR Roadmap", href: "/contact" },
      secondaryCta: { label: "Explore HR Consulting", href: "/hr-consulting" },
      kpis: [
        { value: "SME to Enterprise", label: "Support Coverage" },
        { value: "Compliance-First", label: "Execution Model" },
        { value: "Actionable", label: "Implementation Guidance" },
      ],
      mediaImage: "/brand/banners/banner-1.jpg",
      mediaStat: "Execution-Ready Advisory",
      mediaNote: "Practical HR solutions tailored to your growth stage",
    },
  ];

  const [activeScene, setActiveScene] = useState(0);
  const currentScene = scenes[activeScene];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % scenes.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [scenes.length]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-stage" role="region" aria-live="polite" aria-label="Homepage highlights">
          <article key={currentScene.title} className="hero-scene is-active">
            <div className="hero-content stack-lg">
              <p className="eyebrow">{currentScene.eyebrow}</p>
              <h1 id="hero-title">{currentScene.title}</h1>
              <p className="hero-subtitle">{currentScene.subtitle}</p>
              <div className="row gap-md wrap hero-actions">
                <TrackedLink
                  href={currentScene.primaryCta.href}
                  className="btn btn-primary"
                  eventName="cta_click"
                  eventCategory="hero"
                  eventLabel={currentScene.primaryCta.label}
                >
                  {currentScene.primaryCta.label}
                </TrackedLink>
                <TrackedLink
                  href={currentScene.secondaryCta.href}
                  className="btn btn-secondary"
                  eventName="cta_click"
                  eventCategory="hero"
                  eventLabel={currentScene.secondaryCta.label}
                >
                  {currentScene.secondaryCta.label}
                </TrackedLink>
              </div>
              <ul className="hero-kpis" aria-label="Service delivery indicators">
                {currentScene.kpis.map((item) => (
                  <li key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="hero-scene-switch hero-scene-switch-inline" aria-label="Hero scenes">
                {scenes.map((scene, index) => (
                  <button
                    key={`switch-${scene.title}`}
                    type="button"
                    className={`hero-scene-dot ${index === activeScene ? "is-active" : ""}`}
                    onClick={() => setActiveScene(index)}
                    aria-label={`Show scene ${index + 1}: ${scene.eyebrow}`}
                    aria-pressed={index === activeScene}
                  />
                ))}
              </div>
            </div>
          </article>
        </div>
        <aside className="hero-media" aria-label="Romanspage highlights">
          <div className="hero-media-slide is-active">
            <Image
              src={currentScene.mediaImage}
              alt={currentScene.title}
              fill
              className="hero-image"
              priority
            />
            <span className="hero-media-stat hero-media-stat-top">{currentScene.mediaStat}</span>
            <div className="hero-media-card">
              <Image src="/brand/logo.png" alt="Romanspage icon" width={100} height={24} />
              <p>{currentScene.mediaNote}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
