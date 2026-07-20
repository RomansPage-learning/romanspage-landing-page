"use client";

import Link from "next/link";
import { useState } from "react";

import { CheckIcon } from "@/components/landing/icons";

type Audience = "employers" | "candidates";

const content: Record<
  Audience,
  {
    kicker: string;
    title: string;
    body: string;
    cta: string;
    points: { title: string; body: string }[];
  }
> = {
  employers: {
    kicker: "For employers",
    title: "Hire top talent that transforms your business",
    body: "Focus on your core while we run a seamless, compliant HR process behind the scenes — from payroll to policy.",
    cta: "Talk to our team",
    points: [
      {
        title: "Hire the right people",
        body: "Access vetted candidates who can move your business forward.",
      },
      {
        title: "Stay compliant, effortlessly",
        body: "Payroll, tax, pension, NSITF and NHF handled end-to-end.",
      },
      {
        title: "Services that drive growth",
        body: "Exceptional HR support built to scale with your team.",
      },
    ],
  },
  candidates: {
    kicker: "For candidates",
    title: "Build a career that actually goes somewhere",
    body: "Gain real experience, meet the people who hire, and sharpen the skills employers are actually looking for.",
    cta: "Explore opportunities",
    points: [
      {
        title: "Practical experience",
        body: "Gain hands-on working experience through internships.",
      },
      {
        title: "Meet HR professionals",
        body: "Connect and grow your network at our career fairs.",
      },
      {
        title: "Become more employable",
        body: "Improve the skills that make you competitive for the right job.",
      },
    ],
  },
};

export function AudienceSplit() {
  const [audience, setAudience] = useState<Audience>("employers");
  const active = content[audience];

  return (
    <section className="section container" aria-label="Employers and candidates">
      <div className="section-head-center">
        <div className="kicker">Built for both sides</div>
        <h2 className="section-title" style={{ marginBottom: 16 }}>
          Whichever side of the table you&rsquo;re on
        </h2>
        <p className="section-lede">
          We support employers who need dependable HR, and candidates building
          careers that last.
        </p>
      </div>
      <div className="toggle-row">
        <div className="toggle-pill" role="tablist" aria-label="Audience">
          <button
            type="button"
            role="tab"
            aria-selected={audience === "employers"}
            className={`toggle-btn${audience === "employers" ? " active" : ""}`}
            onClick={() => setAudience("employers")}
          >
            For employers
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={audience === "candidates"}
            className={`toggle-btn${audience === "candidates" ? " active" : ""}`}
            onClick={() => setAudience("candidates")}
          >
            For candidates
          </button>
        </div>
      </div>
      <div className="split-card">
        <div className="split-dark">
          <div className="split-dark-glow" aria-hidden />
          <div className="split-dark-inner">
            <div className="split-kicker">{active.kicker}</div>
            <h3 className="split-title">{active.title}</h3>
            <p className="split-body">{active.body}</p>
            <Link href="/contact" className="btn btn-primary split-btn">
              {active.cta}
            </Link>
          </div>
        </div>
        <div className="split-points">
          {active.points.map((point) => (
            <div key={point.title} className="split-point">
              <span className="split-point-icon">
                <CheckIcon />
              </span>
              <div>
                <div className="split-point-title">{point.title}</div>
                <div className="split-point-body">{point.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
