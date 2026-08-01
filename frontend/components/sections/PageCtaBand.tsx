import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
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
  tone?: "surface" | "warm" | "gold";
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
  tone = "warm",
}: PageCtaBandProps) {
  const shell =
    tone === "gold"
      ? "border-gold/40 bg-gradient-to-br from-gold-soft/50 via-surface to-warm"
      : tone === "warm"
        ? "border-border bg-warm"
        : "border-border bg-surface";

  return (
    <section className={cn("py-16 md:py-20", className)}>
      <Container>
        <Reveal>
          <div
            className={cn(
              "relative overflow-hidden border px-8 py-12 text-center md:px-14 md:py-14",
              shell
            )}
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl"
              aria-hidden
            />
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
