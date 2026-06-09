import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  variant: "about" | "consulting" | "recruitment" | "sme" | "training" | "policies" | "contact";
  imageSrc: string;
  highlights: string[];
};

export function PageHero({ eyebrow, title, description, variant, imageSrc, highlights }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${variant}`}>
      <div className="container page-hero-grid">
        <div className="stack-lg page-hero-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul className="page-hero-highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="page-hero-media">
          <Image src={imageSrc} alt={title} fill className="page-hero-image" priority />
          <span className="page-hero-orb" aria-hidden="true" />
          <span className="page-hero-badge">Romanspage Delivery</span>
        </div>
      </div>
    </section>
  );
}
