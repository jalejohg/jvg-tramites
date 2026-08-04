import Image from "next/image";
import {
  Briefcase,
  MapPinned,
  Users,
  Building2,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { COUNTERS } from "@/data/content";
import { CONTACT_FORM_HREF, SITE } from "@/lib/siteConfig";

const HERO_IMAGE = "/images/hero-avion.webp";

const STAT_ICONS: LucideIcon[] = [Users, MapPinned, Building2, Briefcase];

function HeroStatItem({
  value,
  label,
  Icon,
  index,
}: {
  value: string;
  label: string;
  Icon: LucideIcon;
  index: number;
}) {
  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <div className="flex items-start gap-3 px-1 py-2 md:px-2">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <p className="font-serif text-xl font-medium text-on-cta md:text-2xl">
            {value}
          </p>
          <p className="mt-0.5 text-sm text-on-cta/70">{label}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function HomeHero() {
  return (
    <section className="relative w-full">
      <div className="relative min-h-dvh w-full overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Horizonte de viaje y movilidad internacional"
          fill
          priority
          className="img-bg animate-hero-zoom object-cover object-[70%_center] scale-[1.04] motion-reduce:animate-none motion-reduce:scale-100 md:object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent md:via-bg/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/20"
          aria-hidden
        />
        <div
          className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-bg/80 via-bg/35 to-transparent md:max-w-2xl"
          aria-hidden
        />

        <Container className="relative flex min-h-dvh flex-col justify-end pb-20 pt-28 md:justify-center md:pb-28 md:pt-32">
          <Reveal priority className="max-w-2xl">
            <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              {SITE.name}
            </p>
            <h1 className="font-serif text-[clamp(2.1rem,5vw,3.75rem)] font-medium leading-[1.12] text-ink text-balance">
              Su camino migratorio, con{" "}
              <span className="text-gold-deep [text-shadow:none]">
                respaldo jurídico
              </span>{" "}
              y calidez
              humana
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
              Especialistas en trámites migratorios hacia{" "}
              <strong className="font-semibold text-ink">México</strong>, con
              gestión documental y homologación — un solo interlocutor.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={CONTACT_FORM_HREF}>Solicitar asesoría</Button>
              <Button href="/servicios" variant="ghost">
                Ver servicios
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>

      <div className="relative z-10 overflow-hidden bg-ink text-on-cta">
        <SectionAtmosphere tone="ink" />
        <Container className="relative py-6 md:py-7">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {COUNTERS.map((item, i) => {
              const Icon = STAT_ICONS[i] ?? Briefcase;
              return (
                <li key={item.label}>
                  <HeroStatItem
                    value={item.value}
                    label={item.label}
                    Icon={Icon}
                    index={i}
                  />
                </li>
              );
            })}
          </ul>
        </Container>
      </div>
    </section>
  );
}
