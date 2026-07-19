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
    "Romanspage Programmes, Coursademia, and Bickford Technology Solutions — employability, entrepreneurship, AI skills, and digital training, plus our flagship Growth-Hack Series.",
};

export default function TrainingPage() {
  return (
    <>
      <SiteHeader siteName={siteName} navigation={primaryNavigation} />
      <main className="page-shell page-training">
        <PageHero
          eyebrow="Romanspage Programmes · Coursademia · Bickford"
          title="Skills, employability, and technology programmes for teams, youth, and Agri-SMEs"
          description="We deliver donor-, employer-, and CSR-facing programmes covering employability, entrepreneurship, AI skills, and job connection — scaled through Coursademia, our learning platform, and Bickford, our technology and digital-skills arm."
          variant="training"
          imageSrc="/brand/banners/banner-1.png"
          highlights={[
            "Employability programmes",
            "Entrepreneurship accelerator",
            "Coursademia e-learning",
            "Bickford digital skills",
            "AI skills & adoption",
            "The Growth-Hack Series",
          ]}
        />
        <ServiceList
          title="Training and programme services"
          intro="Outcome-focused programmes for individuals, teams, employers, donors, and Agri-SME operators."
          items={[
            "Employability Programmes — soft skills, workplace readiness, CV writing, and interview coaching",
            "Entrepreneurship Programmes — business ideation, planning, financial literacy, and mentorship",
            "Career Development — career coaching, talent profiling, and internship / apprenticeship linkage",
            "Programme Design & Management for youth, women, SME, and livelihood funders",
            "Job Matching & Employer Engagement — connecting trained youth to employers and enterprise opportunities",
            "AI Skills & Adoption — practical training on using AI tools and applying them across industries",
            "E-learning through Coursademia and digital-skills training through Bickford",
          ]}
        />
        <section className="section">
          <div className="container stack-lg">
            <p className="eyebrow">Learning Tracks</p>
            <h2>Programmes designed for immediate on-the-job impact</h2>
            <div className="program-grid">
              <article className="program-card">
                <h3>Employability-to-Work Programme</h3>
                <p>For donors, NGOs, government, and CSR partners: participant recruitment, soft skills, digital skills (Bickford), online learning (Coursademia), career coaching, and placement tracking.</p>
                <ul>
                  <li>Employer engagement and job matching</li>
                  <li>Interview coaching and CV support</li>
                  <li>Placement tracking through completion</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>Entrepreneurship Accelerator</h3>
                <p>For youth, women, and MSMEs: ideation, business model, financial literacy, record keeping, mentorship, and pitch preparation.</p>
                <ul>
                  <li>Business ideation and planning</li>
                  <li>Financial literacy and record keeping</li>
                  <li>Mentorship and market linkage</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>AI Skills & Adoption</h3>
                <p>For teams, SMEs, and Agri-SMEs: practical training on using AI tools and applying them to real work — from HR and customer service to agriculture, sales, and operations.</p>
                <ul>
                  <li>AI literacy and prompting fundamentals</li>
                  <li>Industry-specific use cases and workflows</li>
                  <li>Safe, responsible adoption coaching</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>Coursademia for Organisations</h3>
                <p>For companies, NGOs, schools, and programmes: custom online courses, learner onboarding, progress tracking, assessments, and certificates.</p>
                <ul>
                  <li>Self-paced, cohort-ready modules</li>
                  <li>Assessment checkpoints and certification</li>
                  <li>Employer/alumni database and reporting</li>
                </ul>
              </article>
              <article className="program-card">
                <h3>The Growth-Hack Series</h3>
                <p>Our flagship programme, delivered with NDE, the Bank of Industry, and ITF, has built the capacity of over 2,700 SMEs beyond training alone.</p>
                <ul>
                  <li>Enterprise diagnostics for growth and financing constraints</li>
                  <li>Business plan and proposal development</li>
                  <li>Facilitation of grant, loan, and equity financing linkages</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <OutcomeMetrics
          title="Training delivery outcomes"
          metrics={[
            { label: "Young People Trained", value: "5,000+", detail: "Across employability, entrepreneurship, and digital skills programmes." },
            { label: "Tech & AI Adoption", value: "Faster", detail: "Guided Coursademia and Bickford tracks, including AI tools, with implementation checkpoints." },
            { label: "Agri-SME Readiness", value: "Improved", detail: "Capability uplift for digital operations and market participation." },
          ]}
        />
        <CtaBand
          title="Upskill your workforce, youth cohorts, and Agri-SME teams"
          description="Discuss capability gaps and get a training roadmap built for measurable adoption, placement, and enterprise growth."
          action={{ label: "Plan a Training Roadmap", href: "/contact" }}
          theme="training"
        />
      </main>
      <SiteFooter owner={siteName} links={footerLinks} />
    </>
  );
}
