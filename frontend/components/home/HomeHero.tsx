import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_FORM_HREF, SITE } from "@/lib/siteConfig";

const HERO_IMAGE =
  "/images/hero-avion.jpg";

export default function HomeHero() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Horizonte de viaje y movilidad internacional"
        fill
        priority
        className="img-bg object-cover object-[70%_center] md:object-center"
        sizes="100vw"
      />
      {/* Veladura ligera: texto legible a la izquierda, avión visible a la derecha */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent md:via-bg/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-bg/20"
        aria-hidden
      />
      {/* Refuerzo solo detrás del bloque de texto */}
      <div
        className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-bg/80 via-bg/35 to-transparent md:max-w-2xl"
        aria-hidden
      />

      <Container className="relative flex min-h-dvh flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-32">
        <Reveal priority className="max-w-2xl">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
            {SITE.name}
          </p>
          <h1 className="font-serif text-[clamp(2.1rem,5vw,3.75rem)] font-medium leading-[1.12] text-ink text-balance">
            Su camino migratorio, con respaldo jurídico y calidez humana
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg text-pretty">
            Especialistas en trámites migratorios hacia México, con gestión
            documental, homologación y soporte familiar — profesionalismo y
            cercanía, sin importar la distancia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CONTACT_FORM_HREF}>Solicitar asesoría</Button>
            <Button href="/servicios" variant="secondary">
              Ver servicios
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
