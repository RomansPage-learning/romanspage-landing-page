"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ArrowRightIcon } from "@/components/landing/icons";
import type { HeroSlide } from "@/content/services";

type HeroSliderProps = {
  slides: HeroSlide[];
  intervalMs?: number;
};

export function HeroSlider({ slides, intervalMs = 6000 }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotionRef.current || slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [paused, slides.length, intervalMs]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-glow" aria-hidden />
      <div className="container hero-grid">
        <div className="hero-slides">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`hero-slide${i === index ? " active" : ""}`}
              aria-hidden={i !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden />
                {slide.eyebrow}
              </div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-sub">{slide.body}</p>
              <div className="hero-actions">
                <Link href={slide.ctaHref} className="btn btn-primary btn-lg">
                  {slide.ctaLabel}
                </Link>
                <Link href="/assessment" className="btn btn-ghost-dark btn-lg">
                  Not sure what you need?
                </Link>
              </div>
              <div className="hero-trust">Trusted by SMEs across Nigeria</div>
            </div>
          ))}
          <div className="hero-controls">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="hero-arrow hero-arrow-prev"
            >
              <ArrowRightIcon />
            </button>
            <div className="hero-dots" role="tablist" aria-label="Slides">
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`hero-dot${i === index ? " active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="hero-arrow hero-arrow-next"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="hero-media">
          <div className="hero-media-frame">
            {slides.map((slide, i) => (
              <Image
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 1023px) 90vw, 45vw"
                priority={i === 0}
                className={i === index ? "active" : ""}
              />
            ))}
          </div>
          <div className="hero-card">
            <div className="hero-card-kicker">4 core practice areas</div>
            <div className="hero-card-body">
              Consulting, learning and enterprise development — one partner.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
