import type { ReactNode } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Breadcrumbs, { type Crumb } from "@/components/ui/Breadcrumbs";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Imagen opcional a la derecha (interior pages). */
  imageSrc?: string;
  imageAlt?: string;
  tone?: "bg" | "warm" | "beige" | "surface";
  breadcrumbs?: Crumb[];
}

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  imageSrc,
  imageAlt = "",
  tone: _tone = "bg",
  breadcrumbs,
}: PageHeroProps) {
  // Canvas predominante blanco: todos los tones de sección resuelven a bg.
  void _tone;
  const toneClass = "bg-bg";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border pt-28 pb-14 md:pt-32 md:pb-16",
        toneClass
      )}
    >
      <SectionAtmosphere />

      <Container className="relative">
        <div
          className={cn(
            "grid items-end gap-10",
            imageSrc && "lg:grid-cols-[1.15fr_0.85fr] lg:gap-14"
          )}
        >
          <Reveal priority>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <Breadcrumbs items={breadcrumbs} />
            )}
            {eyebrow && (
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-3xl font-serif text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.12] text-ink text-balance">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-base text-muted md:text-lg text-pretty">
                {description}
              </p>
            )}
            {children}
          </Reveal>

          {imageSrc && (
            <Reveal priority delay={1} className="relative hidden lg:block">
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border-subtle shadow-sm">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="40vw"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-gold/15 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
