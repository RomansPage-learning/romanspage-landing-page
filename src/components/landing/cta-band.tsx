import { TrackedLink } from "@/components/analytics/tracked-link";

type CtaBandProps = {
  title: string;
  description: string;
  action: { label: string; href: string };
  theme?: "home" | "about" | "consulting" | "recruitment" | "training" | "sme" | "policies";
};

export function CtaBand({ title, description, action, theme = "home" }: CtaBandProps) {
  return (
    <section id="approach" className="section">
      <div className={`container cta-band cta-band-panel cta-band-theme-${theme}`}>
        <div className="stack-lg">
          <p className="eyebrow">Next Step</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TrackedLink
          href={action.href}
          className="btn btn-primary"
          eventName="cta_click"
          eventCategory="cta_band"
          eventLabel={action.label}
        >
          {action.label}
        </TrackedLink>
      </div>
    </section>
  );
}
