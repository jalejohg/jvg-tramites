import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { COUNTERS } from "@/data/content";
import { SITE } from "@/lib/siteConfig";

const COLLAGE_PRIMARY = "/images/oficina.webp";
const COLLAGE_SECONDARY = "/images/equipo-reunion.webp";

const PILLAR_ITEMS = [
  {
    title: "Gestión integral llave en mano",
    description:
      "De la legalización a la homologación y el soporte familiar: un solo interlocutor, sin fragmentar su trámite.",
  },
  {
    title: "Respaldo legal y transparencia",
    description:
      "Servicio liderado por un profesional del derecho, con asesoría honesta sobre la viabilidad real de cada caso.",
  },
  {
    title: "Cobertura local e internacional",
    description:
      "Firma mexicana con sede en Ciudad de México y atención en las principales ciudades de Cuba, con acompañamiento también para clientes en el exterior.",
  },
] as const;

function AboutCheckItem({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index + 1, 4) as 0 | 1 | 2 | 3 | 4} as="li">
      <div className="flex gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
          <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
        </span>
        <div>
          <p className="font-semibold text-ink">{title}</p>
          <p className="mt-1 text-sm leading-relaxed text-muted text-pretty">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function HomeAbout() {
  const familiesCounter = COUNTERS.find((c) =>
    c.label.toLowerCase().includes("familias")
  );
  const badgeValue = familiesCounter?.value ?? "200+";
  const badgeLabel = familiesCounter?.label ?? "Familias acompañadas";

  return (
    <section
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-bg py-20 md:py-28"
    >
      <SectionAtmosphere />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Quiénes somos
              </p>
              <h2
                id="about-heading"
                className="mt-3 font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] text-ink text-balance"
              >
                Profesionalismo jurídico con calidez humana
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted text-pretty md:text-lg">
                {SITE.slogan} Unimos respaldo legal, gestión en el terreno y
                acompañamiento claro para simplificar su trámite migratorio hacia
                México — sin intermediarios informales.
              </p>
            </Reveal>

            <ul className="mt-8 space-y-5">
              {PILLAR_ITEMS.map((item, i) => (
                <AboutCheckItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  index={i}
                />
              ))}
            </ul>

            <Reveal delay={4} className="mt-10">
              <Button href="/nosotros">
                Conocer la firma
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>

          <Reveal delay={1} className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] w-[78%] overflow-hidden rounded-2xl border border-border-subtle shadow-md">
              <Image
                src={COLLAGE_PRIMARY}
                alt="Atención profesional en oficina de consultoría migratoria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 70vw, 35vw"
              />
            </div>
            <div className="absolute bottom-6 right-0 aspect-[3/4] w-[52%] overflow-hidden rounded-2xl border-4 border-surface shadow-lg md:bottom-10">
              <Image
                src={COLLAGE_SECONDARY}
                alt="Conversación de acompañamiento con el equipo JVG"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 22vw"
              />
            </div>
            <div className="absolute -left-2 top-8 z-10 max-w-[11.5rem] rounded-xl bg-gold-luxe px-4 py-3 md:-left-4 md:top-12 md:max-w-[13rem] md:px-5 md:py-4">
              <p className="font-serif text-2xl font-medium text-ink md:text-3xl">
                {badgeValue}
              </p>
              <p className="mt-1 text-xs font-semibold leading-snug text-ink/80 md:text-sm">
                {badgeLabel}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
