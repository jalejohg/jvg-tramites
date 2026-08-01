import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_FORM_HREF, SITE, waLink } from "@/lib/siteConfig";

const CTA_IMAGE = "/images/cta-viaje.webp";

export default function HomeCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Image
        src={CTA_IMAGE}
        alt=""
        fill
        className="img-bg object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-bg/92 via-bg/88 to-gold-soft/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,163,90,0.22),transparent_55%)]"
        aria-hidden
      />

      <Container className="relative">
        <Reveal>
          <div className="border border-gold/40 bg-surface/90 px-8 py-12 text-center shadow-lg backdrop-blur-md md:px-16 md:py-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Dé el siguiente paso
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-serif text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium text-ink text-balance">
              Cuéntenos su caso. Le respondemos con claridad y respeto.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted text-pretty">
              {SITE.slogan} Solicite asesoría o escríbanos por WhatsApp: estamos
              para simplificar su camino.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href={CONTACT_FORM_HREF}>Solicitar asesoría</Button>
              <Button href={waLink()} variant="secondary">
                WhatsApp
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
