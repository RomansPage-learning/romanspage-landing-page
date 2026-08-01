"use client";

import Link from "next/link";

import {
  ArrowRightIcon,
  BulbIcon,
  ChartIcon,
  ChipIcon,
  PeopleIcon,
} from "@/components/landing/icons";
import { Accordion } from "@/components/ui/accordion";
import { practiceAreas } from "@/content/services";

const iconFor = {
  people: <PeopleIcon />,
  chart: <ChartIcon />,
  bulb: <BulbIcon />,
  chip: <ChipIcon />,
};

export function WhatWeDo() {
  return (
    <Accordion
      allowMultiple={false}
      items={practiceAreas.map((area) => ({
        id: area.id,
        header: (
          <div className="detail-card-head">
            <div className="icon-box">{iconFor[area.icon]}</div>
            <div>
              <h3>{area.title}</h3>
              <p>{area.teaser}</p>
            </div>
          </div>
        ),
        content: (
          <>
            <div className="subs-grid">
              {area.subs.map((sub) => (
                <div key={sub.name} className="sub-card">
                  <div className="sub-card-head">
                    <span>{sub.name}</span>
                  </div>
                  <p>{sub.desc}</p>
                </div>
              ))}
            </div>
            <div className="accordion-cta-row">
              <Link href={`/services#${area.id}`} className="accordion-cta-link">
                View full details <ArrowRightIcon size={14} />
              </Link>
            </div>
          </>
        ),
      }))}
    />
  );
}
