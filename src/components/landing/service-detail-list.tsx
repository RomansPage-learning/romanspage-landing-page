"use client";

import Link from "next/link";

import {
  ArrowRightIcon,
  BulbIcon,
  ChartIcon,
  CheckIcon,
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

export function ServiceDetailList() {
  return (
    <>
      {practiceAreas.map((area) => (
        <section key={area.id} id={area.id}>
          <Accordion
            items={[
              {
                id: area.id,
                header: (
                  <div className="detail-card-head">
                    <div className="icon-box">{iconFor[area.icon]}</div>
                    <div>
                      <h2>{area.title}</h2>
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
                            <span style={{ color: "#1e3a8a", display: "inline-flex" }}>
                              <CheckIcon size={16} />
                            </span>
                            <span>{sub.name}</span>
                          </div>
                          <p>{sub.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="accordion-cta-row">
                      <Link
                        href="/contact"
                        className="btn btn-dark"
                        style={{ height: 46, padding: "0 22px" }}
                      >
                        {area.cta} <ArrowRightIcon />
                      </Link>
                    </div>
                  </>
                ),
              },
            ]}
          />
        </section>
      ))}
    </>
  );
}
