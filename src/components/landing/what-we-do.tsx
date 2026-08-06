import Link from "next/link";

import {
  ArrowRightIcon,
  BulbIcon,
  ChartIcon,
  ChipIcon,
  PeopleIcon,
} from "@/components/landing/icons";
import { practiceAreas } from "@/content/services";

const iconFor = {
  people: <PeopleIcon />,
  chart: <ChartIcon />,
  bulb: <BulbIcon />,
  chip: <ChipIcon />,
};

export function WhatWeDo() {
  return (
    <div className="cards-4">
      {practiceAreas.map((area) => (
        <Link key={area.id} href={`/services/${area.id}`} className="service-card">
          <div className="icon-box">{iconFor[area.icon]}</div>
          <h3>{area.title}</h3>
          <p>{area.teaser}</p>
          <span className="learn-more">
            Learn more <ArrowRightIcon />
          </span>
        </Link>
      ))}
    </div>
  );
}
