import { Reveal } from "@/components/landing/reveal";

type ServiceListProps = {
  title: string;
  intro: string;
  items: string[];
};

export function ServiceList({ title, intro, items }: ServiceListProps) {
  return (
    <section className="section service-list" aria-labelledby="service-list-title">
      <div className="container stack-lg">
        <p className="eyebrow">Service Scope</p>
        <h2 id="service-list-title">{title}</h2>
        <p className="section-intro">{intro}</p>
        <div className="service-grid">
          {items.map((item, index) => (
            <Reveal key={item} delayMs={Math.min(index * 80, 360)}>
              <article className="service-item-card">
                <span className="service-item-index">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
