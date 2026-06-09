import { Reveal } from "@/components/landing/reveal";

type OutcomeMetric = {
  label: string;
  value: string;
  detail: string;
};

type OutcomeMetricsProps = {
  eyebrow?: string;
  title: string;
  metrics: OutcomeMetric[];
};

export function OutcomeMetrics({ eyebrow = "Performance", title, metrics }: OutcomeMetricsProps) {
  return (
    <section className="section outcome-section" aria-labelledby="outcome-title">
      <div className="container stack-lg">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal>
          <h2 id="outcome-title">{title}</h2>
        </Reveal>
        <div className="outcome-grid">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delayMs={Math.min(index * 100, 380)}>
              <article className="outcome-card">
                <p className="outcome-value">{metric.value}</p>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
