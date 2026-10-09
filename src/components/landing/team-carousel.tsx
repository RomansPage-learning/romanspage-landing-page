"use client";

import Image from "next/image";
import { useRef } from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/landing/icons";

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Samuel Oredia",
    role: "Chief Executive Officer",
    image: "/brand/team/samuel-oredia.jpg",
    linkedin: "https://www.linkedin.com/in/samuelomomoh",
  },
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
    linkedin: "https://www.linkedin.com/in/akinboyewa-micheal",
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
  const dragState = useRef({ isDown: false, dragged: false, startX: 0, startScrollLeft: 0 });

  function scroll(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * (track.clientWidth * 0.8), behavior: "smooth" });
  }

  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || event.pointerType === "touch") return;
    dragState.current.isDown = true;
    dragState.current.dragged = false;
    dragState.current.startX = event.clientX;
    dragState.current.startScrollLeft = track.scrollLeft;
    track.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;
    if (!track || !dragState.current.isDown) return;
    const delta = event.clientX - dragState.current.startX;
    if (Math.abs(delta) > 4) dragState.current.dragged = true;
    track.scrollLeft = dragState.current.startScrollLeft - delta;
  }

  function endDrag() {
    dragState.current.isDown = false;
  }

  function onCardClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (dragState.current.dragged) {
      event.preventDefault();
    }
  }

  function renderCardContent(member: TeamMember) {
    return (
      <>
        <div className="team-carousel-photo">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 1023px) 45vw, 220px"
            draggable={false}
          />
        </div>
        <div className="team-carousel-name">{member.name}</div>
        <div className="team-carousel-role">{member.role}</div>
      </>
    );
  }

  return (
    <div className="team-carousel">
      <div
        className="team-carousel-track"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {members.map((member) =>
          member.linkedin ? (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="team-carousel-card"
              onClick={onCardClick}
              draggable={false}
            >
              {renderCardContent(member)}
            </a>
          ) : (
            <div key={member.name} className="team-carousel-card">
              {renderCardContent(member)}
            </div>
          ),
        )}
      </div>
      <div className="team-carousel-fade team-carousel-fade-left" aria-hidden />
      <div className="team-carousel-fade team-carousel-fade-right" aria-hidden />
      <button
        type="button"
        aria-label="Previous team member"
        className="team-carousel-prev"
        onClick={() => scroll(-1)}
      >
        <ArrowLeftIcon size={16} />
      </button>
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
