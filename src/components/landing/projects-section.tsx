"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronIcon } from "@/components/landing/icons";
import { practiceAreas, projects } from "@/content/services";

const areaLabel = (id: string) =>
  practiceAreas.find((area) => area.id === id)?.navLabel ?? "";

export function ProjectsSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="cards-3">
      {projects.map((project) => {
        const isOpen = openSlug === project.slug;
        return (
          <article key={project.slug} className="project-card">
            <div className="project-media">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1023px) 90vw, 30vw"
              />
            </div>
            <div className="project-body">
              <span className="project-tag">{areaLabel(project.practiceAreaId)}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <button
                type="button"
                className={`project-view-more${isOpen ? " open" : ""}`}
                aria-expanded={isOpen}
                onClick={() => setOpenSlug(isOpen ? null : project.slug)}
              >
                View more <ChevronIcon size={14} />
              </button>
              {isOpen ? (
                <div className="project-detail">
                  <strong>{project.funder}</strong>
                  <p style={{ marginTop: 6 }}>{project.detail}</p>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
