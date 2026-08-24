"use client";

import Image from "next/image";
import { useState } from "react";

import { ChevronIcon } from "@/components/landing/icons";
import { practiceAreas, projects, type Project } from "@/content/services";

const areaLabel = (id: string) =>
  practiceAreas.find((area) => area.id === id)?.navLabel ?? "";

type ProjectsSectionProps = {
  items?: Project[];
};

export function ProjectsSection({ items = projects }: ProjectsSectionProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <div className="cards-3 projects-grid">
      {items.map((project) => {
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
              <span className={`project-status project-status-${project.status}`}>
                {project.status === "ongoing" ? "Ongoing" : "Completed"}
              </span>
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
                  <p className="project-location">{project.location}</p>
                </div>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
