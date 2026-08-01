import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/siteConfig";

export default function HomeDirector() {
  return (
    <section className="border-y border-border bg-surface py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div className="relative aspect-square overflow-hidden border border-border bg-ink">
              <Image
                src={SITE.directorImage}
                alt={`${SITE.director}, ${SITE.directorRole}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority={false}
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Dirección
            </p>
            <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-ink">
              {SITE.directorCourtesy} {SITE.director}
            </h2>
            <p className="mt-1 text-muted">{SITE.directorRole}</p>
            <p className="mt-5 text-muted text-pretty leading-relaxed">
              Años de dedicación acompañando a cientos de personas y familias en
              sus procesos migratorios hacia México, con conocimiento jurídico,
              ética profesional y atención al detalle.{" "}
              {SITE.taglineMexico}
            </p>
            <div className="mt-8">
              <Button href="/nosotros" variant="secondary">
                Conocer la firma
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
