import Image from "next/image";

import { Reveal } from "@/components/landing/reveal";

const logos = [
  "/brand/clients/clients-logo-1.png",
  "/brand/clients/clients-logo-2.png",
  "/brand/clients/clients-logo-3.png",
  "/brand/clients/clients-logo-4.png",
  "/brand/clients/clients-logo-5.png",
  "/brand/clients/clients-logo-6.png",
  "/brand/clients/clients-logo-7.png",
  "/brand/clients/clients-logo-8.png",
  "/brand/clients/clients-logo-9.png",
  "/brand/clients/clients-logo-10.png",
  "/brand/clients/clients-logo-11.png",
];

const marqueeLogos = [...logos, ...logos];

export function ClientsSection() {
  return (
    <section className="section clients-section" aria-labelledby="clients-title">
      <div className="container stack-lg">
        <Reveal>
          <p className="eyebrow">Clients</p>
        </Reveal>
        <Reveal>
          <h2 id="clients-title">Trusted by organizations across sectors</h2>
        </Reveal>
        <div className="clients-marquee" aria-label="Client logos">
          <span className="clients-mask clients-mask-left" aria-hidden="true" />
          <span className="clients-mask clients-mask-right" aria-hidden="true" />
          <div className="clients-track">
            {marqueeLogos.map((src, index) => (
              <div className="client-logo-card" key={`${src}-${index}`}>
                <Image
                  src={src}
                  alt={`Romanspage client logo ${((index % logos.length) + 1).toString()}`}
                  width={140}
                  height={60}
                  className="client-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
