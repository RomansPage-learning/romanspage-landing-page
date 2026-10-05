"use client";

import Image from "next/image";
import { useRef } from "react";

import { ArrowRightIcon } from "@/components/landing/icons";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Aibe Favour Mana",
    role: "HR Manager",
    image: "/brand/team/aibe-favour-mana.jpg",
    linkedin: "https://www.linkedin.com/in/favour-mana-aibe-7599bb2b0",
  },
  {
    name: "Augustus Akubue",
    role: "Software Engineer",
    image: "/brand/team/augustus-akubue.jpg",
    linkedin: "https://www.linkedin.com/in/akubue-augustus",
  },
  {
    name: "Okwuzu Jude",
    role: "Web & Mobile Developer",
    image: "/brand/team/okwuzu-jude.jpg",
    linkedin: "https://www.linkedin.com/in/okwuzu-jude",
  },
  {
    name: "Akinboyewa Micheal Bobola",
    role: "Social Media Manager",
    image: "/brand/team/akinboyewa-micheal.jpg",
    linkedin: "https://www.linkedin.com/in/akinboyewa-micheal/",
  },
  {
    name: "Ologbonyo Victor Ayomide",
    role: "Sales Executive",
    image: "/brand/team/ologbonyo-victor.jpg",
    linkedin: "https://www.linkedin.com/in/victor-ologbonyo-65284b311",
  },
  {
    name: "Oluwamayowa James Adebisi",
    role: "Project Manager",
    image: "/brand/team/oluwamayowa-adebisi.jpg",
    linkedin: "https://www.linkedin.com/in/adebisi-oluwamayowa",
  },
];

export function TeamCarousel({ members = teamMembers }: { members?: TeamMember[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <div className="team-carousel">
      <div className="team-carousel-track" ref={trackRef}>
        {members.map((member) => (
          <a
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-carousel-card"
          >
            <div className="team-carousel-photo">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 1023px) 45vw, 220px"
              />
            </div>
            <div className="team-carousel-name">{member.name}</div>
            <div className="team-carousel-role">{member.role}</div>
          </a>
        ))}
      </div>
      <div className="team-carousel-fade" aria-hidden />
      <button
        type="button"
        aria-label="Next team member"
        className="team-carousel-next"
        onClick={() => scroll(1)}
      >
        <ArrowRightIcon size={16} />
      </button>
    </div>
  );
}
