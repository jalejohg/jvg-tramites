import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { PILLARS } from "@/data/content";

/**
 * Franja atmosférica: imagen sticky a viewport; el contenido (pilares)
 * pasa por encima al hacer scroll. No es parallax JS — solo CSS sticky,
 * compatible con prefers-reduced-motion (la imagen queda fija, sin jitter).
 */
const BAND_IMAGE = "/images/atmosfera-paisaje.webp";

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <article className="border border-border/80 bg-surface/95 p-7 shadow-lg backdrop-blur-md md:p-9">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          Pilar 0{index + 1}
        </p>
        <h3 className="mt-3 font-serif text-2xl font-medium text-ink md:text-[1.75rem]">
          {pillar.title}
        </h3>
        <p className="mt-3 text-muted text-pretty leading-relaxed">
          {pillar.description}
        </p>
      </article>
    </Reveal>
  );
}

export default function HomePillars() {
  return (
    <section
      aria-labelledby="pillars-heading"
      className="relative isolate"
    >
      {/* Plano visual fijo mientras dura la sección */}
      <div className="sticky top-0 z-0 h-dvh w-full overflow-hidden">
        <Image
          src={BAND_IMAGE}
          alt=""
          fill
          className="img-bg object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
        {/* Veladura cálida clara — no dark mode: mantiene legibilidad de marca */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/55 to-bg/75"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-gold/15 via-transparent to-gold-soft/20"
          aria-hidden
        />
      </div>

      {/* Contenido que “pasa” sobre la imagen */}
      <div className="relative z-10 -mt-[100dvh]">
        <div className="flex min-h-dvh flex-col justify-end pb-16 pt-28 md:pb-24 md:pt-32">
          <Container>
            <Reveal>
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Por qué JVG
              </p>
              <h2
                id="pillars-heading"
                className="max-w-2xl font-serif text-[clamp(1.85rem,3.8vw,3rem)] font-medium leading-[1.15] text-ink text-balance"
              >
                Tres pilares: gestión, respaldo legal y cobertura
              </h2>
              <p className="mt-4 max-w-xl text-base text-ink/80 md:text-lg text-pretty">
                Gestión integral, respaldo profesional y cobertura que une{" "}
                <strong className="font-semibold text-ink">Cienfuegos</strong> con{" "}
                <strong className="font-semibold text-ink">México</strong> y el
                mundo — sobre el mismo camino que usted recorre.
              </p>
            </Reveal>
          </Container>
        </div>

        <Container className="space-y-6 pb-24 md:space-y-8 md:pb-32">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className={
                i % 2 === 0 ? "md:mr-[18%] lg:mr-[28%]" : "md:ml-[18%] lg:ml-[28%]"
              }
            >
              <PillarCard pillar={pillar} index={i} />
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
