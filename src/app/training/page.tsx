import type { Metadata } from "next";

import { CtaBand } from "@/components/landing/cta-band";
import { OutcomeMetrics } from "@/components/landing/outcome-metrics";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceList } from "@/components/landing/service-list";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { footerLinks, primaryNavigation, siteName } from "@/content/site";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Technology training and capability development for teams and Agri-SMEs, including practical digital adoption support.",
};

export default function TrainingPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-training">
        <PageHero
          eyebrow="Training"
          title="Practical technology learning programs for modern teams and Agri-SMEs"
          description="We offer applied training services to help individuals, teams, and Agri-SMEs build digital capability and adopt tools required for execution and growth."
          variant="training"
          imageSrc="/brand/banners/banner-1.png"
          highlights={[
            "Digital skills training",
            "Agri-SME technology adoption",
            "Coursademia e-learning",
            "Platform onboarding support",
            "Workforce capability mapping",
          ]}
        />
        <ServiceList
          title="Training services"
          intro="Outcome-focused technology training for individuals, teams, employers, and Agri-SME operators."
          items={[
            "Digital skills training for workforce productivity",
            "Agri-SME technology training and implementation support",
            "E-learning through Coursademia",
            "Professional development for all employee levels",
            "Platform onboarding and adoption coaching",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Learning Tracks</p>
            <h2>Programs designed for immediate on-the-job impact</h2>
            <div className="program-grid">
              <article className="program-card">
                <h3>Digital Skills Accelerator</h3>
                <p>Hands-on training covering productivity tools, workplace automation, and digital collaboration.</p>
                <ul>
                  <li>Beginner to intermediate tracks</li>
                  <li>Practical assignments and coaching</li>
                  <li>Work-readiness evaluation</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>Agri-SME Tech Enablement</h3>
                <p>Targeted training for agribusiness teams adopting digital tools for planning, operations, and market access.</p>
                <ul>
                  <li>Digital workflow setup for Agri-SME teams</li>
                  <li>Implementation support and coaching</li>
                  <li>Adoption tracking and improvement cycles</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>Leadership and Management</h3>
                <p>Practical frameworks for team leadership, communication, and execution discipline.</p>
                <ul>
                  <li>Manager bootcamp format</li>
                  <li>Performance and feedback systems</li>
                  <li>Cross-functional leadership labs</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>Coursademia E-Learning</h3>
                <p>Flexible online learning pathways with progress tracking and completion milestones.</p>
                <ul>
                  <li>Self-paced modules</li>
                  <li>Assessment checkpoints</li>
                  <li>Certification-ready outcomes</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="Training delivery outcomes"
          metrics={[
            { label: "Practical Learning", value: "Hands-On", detail: "Programs designed for immediate application at work." },
            { label: "Tech Adoption", value: "Faster", detail: "Guided tracks with implementation checkpoints and coaching." },
            { label: "Agri-SME Readiness", value: "Improved", detail: "Capability uplift for digital operations and market participation." },
          ]}
        />
        <CtaBand
          title="Upskill your workforce and Agri-SME teams with practical tech programs"
          description="Discuss capability gaps and get a training roadmap built for measurable adoption and operational improvement."
          action={{ label: "Plan a Training Roadmap", href: "/contact" }}
          theme="training"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
