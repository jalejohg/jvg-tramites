import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { cn } from "@/lib/cn";
import { CONTACT_FORM_HREF } from "@/lib/siteConfig";

interface PageCtaBandProps {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
  tone?: "surface" | "warm" | "beige" | "gold";
}

/** CTA reutilizable para páginas interiores (evita bandas monótonas). */
export default function PageCtaBand({
  title,
  description,
  primaryHref = CONTACT_FORM_HREF,
  primaryLabel = "Solicitar asesoría",
  secondaryHref,
  secondaryLabel,
  className,
  tone = "surface",
}: PageCtaBandProps) {
  const shell =
    tone === "gold"
      ? "border-gold/40 bg-bg"
      : "border-border-subtle bg-bg";

  return (
    <section className={cn("relative overflow-hidden py-16 md:py-20", className)}>
      <SectionAtmosphere mirror />
      <Container className="relative">
        <Reveal>
          <div
            className={cn(
              "relative overflow-hidden rounded-2xl border px-8 py-12 text-center shadow-sm md:px-14 md:py-14",
              shell
            )}
          >
            <SectionAtmosphere className="opacity-90" />
            <h2 className="relative mx-auto max-w-2xl font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink text-balance">
              {title}
            </h2>
            {description && (
              <p className="relative mx-auto mt-4 max-w-lg text-muted text-pretty">
                {description}
              </p>
            )}
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button href={primaryHref}>{primaryLabel}</Button>
              {secondaryHref && secondaryLabel && (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
