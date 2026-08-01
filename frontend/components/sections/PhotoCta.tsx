import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_FORM_HREF } from "@/lib/siteConfig";

interface PhotoCtaProps {
  title: string;
  description: string;
  imageSrc: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/** CTA full-bleed con foto + veladura clara (patrón Homologación). */
export default function PhotoCta({
  title,
  description,
  imageSrc,
  primaryHref = CONTACT_FORM_HREF,
  primaryLabel = "Solicitar asesoría",
  secondaryHref,
  secondaryLabel,
}: PhotoCtaProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="img-bg object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-bg/92 via-bg/85 to-gold-soft/45"
        aria-hidden
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="font-serif text-2xl text-ink md:text-3xl text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted text-pretty">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={primaryHref}>{primaryLabel}</Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
