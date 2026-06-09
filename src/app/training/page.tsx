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
    "Digital skills training, e-learning, and professional development services from Romanspage.",
};

export default function TrainingPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-training">
        <PageHero
          eyebrow="Training"
          title="Practical learning programs for modern teams"
          description="We offer a wide range of training services to help individuals and teams build the skills needed to succeed in today&apos;s workplace."
          variant="training"
          imageSrc="/brand/banners/banner-1.jpg"
          highlights={[
            "Digital skills training",
            "Coursademia e-learning",
            "Professional development",
            "Workforce capability mapping",
          ]}
        />
        <ServiceList
          title="Training services"
          intro="Outcome-focused training for individuals, teams, and employers."
          items={[
            "Digital skills training",
            "E-learning through Coursademia",
            "Professional development for all employee levels",
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
            { label: "Skill Adoption", value: "Faster", detail: "Guided tracks with assessments and coaching checkpoints." },
            { label: "Workforce Readiness", value: "Improved", detail: "Capability uplift across technical and leadership levels." },
          ]}
        />
        <CtaBand
          title="Upskill your workforce with practical programs"
          description="Discuss your capability gaps and get a training roadmap built for measurable adoption."
          action={{ label: "Plan Training Programs", href: "/contact" }}
          theme="training"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
