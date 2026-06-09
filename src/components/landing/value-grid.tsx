import type { ValuePoint } from "@/types/landing";
import { Reveal } from "@/components/landing/reveal";

type ValueGridProps = {
  id: string;
  title: string;
  items: ValuePoint[];
};

export function ValueGrid({ id, title, items }: ValueGridProps) {
  return (
    <section id={id} className="section value-section" aria-labelledby={`${id}-title`}>
      <div className="container stack-lg">
        <p className="eyebrow">Why Romanspage</p>
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="section-intro">Designed for measurable HR outcomes, from workforce planning to execution support.</p>
        <div className="grid cards">
          {items.map((item, index) => (
            <Reveal key={item.title} delayMs={Math.min(index * 90, 360)}>
              <article className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
