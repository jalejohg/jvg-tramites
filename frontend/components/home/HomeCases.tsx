"use client";

import Image from "next/image";
import { memo, useState } from "react";
import {
  Award,
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  FileCheck,
  HeartHandshake,
  IdCard,
  Landmark,
  MapPin,
  Scale,
  Stamp,
  Users,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { SUCCESS_STORIES, type SuccessStory } from "@/data/content";

const FEATURED_COUNT = 4;

const STORY_ICONS: Record<SuccessStory["id"], LucideIcon> = {
  "familia-residencias": Users,
  "residencia-permanente-cdmx": BadgeCheck,
  "tribunal-federal": Scale,
  "inm-hidalgo-familia": IdCard,
  "familia-nino-tarjeta": HeartHandshake,
  "residencia-permanente-senora": Award,
  "pareja-oficina": Landmark,
  "oficina-hidalgo": MapPin,
  "entrega-tarjeta": FileCheck,
  "visa-entrega": Stamp,
};

function FeaturedCaseCard({
  story,
  index,
}: {
  story: SuccessStory;
  index: number;
}) {
  const Icon = STORY_ICONS[story.id] ?? FileCheck;

  return (
    <Reveal delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-md">
        <div className="relative aspect-[4/5] overflow-hidden bg-beige">
          <Image
            src={story.src}
            alt={story.alt}
            fill
            loading="lazy"
            className="object-cover object-center transition-transform duration-300 ease-[var(--ease-fluid)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="flex items-start justify-between gap-3 px-4 py-4 md:px-5 md:py-5">
          <div className="min-w-0">
            <h3 className="font-serif text-lg font-medium leading-snug text-ink">
              {story.label}
            </h3>
            <p className="mt-1 text-sm text-muted">{story.place}</p>
          </div>
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-on-cta transition-colors group-hover:bg-gold group-hover:text-ink"
            aria-hidden
            title={story.label}
          >
            <Icon className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>
      </article>
    </Reveal>
  );
}

const FeaturedCaseCardMemo = memo(FeaturedCaseCard);

export default function HomeCases() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = SUCCESS_STORIES.length > FEATURED_COUNT;
  const visibleStories = expanded
    ? SUCCESS_STORIES
    : SUCCESS_STORIES.slice(0, FEATURED_COUNT);

  return (
    <section
      aria-labelledby="cases-heading"
      className="relative overflow-hidden bg-ink py-20 text-on-cta md:py-28"
    >
      <SectionAtmosphere tone="ink" />
      <Container className="relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-xl">
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Historias reales
            </p>
            <h2
              id="cases-heading"
              className="font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-[1.15] text-on-cta text-balance"
            >
              Resultados que se ven
            </h2>
            <p className="mt-4 text-base leading-relaxed text-on-cta/70 text-pretty md:text-lg">
              Entregas, residencias y acompañamientos reales de familias y
              profesionales que confían en JVG.
            </p>
          </Reveal>
          {hasMore ? (
            <Reveal delay={1}>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls="cases-grid"
                onClick={() => setExpanded((prev) => !prev)}
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-gold/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-ink cursor-pointer"
              >
                {expanded ? "Ver menos" : "Ver más historias"}
                {expanded ? (
                  <ChevronUp className="h-4 w-4" aria-hidden />
                ) : (
                  <ChevronDown className="h-4 w-4" aria-hidden />
                )}
              </button>
            </Reveal>
          ) : null}
        </div>

        <div
          id="cases-grid"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
        >
          {visibleStories.map((story, i) => (
            <FeaturedCaseCardMemo key={story.id} story={story} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
