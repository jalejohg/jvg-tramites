import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import NotFoundShortcut from "@/components/not-found/NotFoundShortcut";
import { CONTACT_FORM_HREF, SITE } from "@/lib/siteConfig";

const SHORTCUTS = [
  { href: "/servicios", label: "Servicios" },
  { href: "/servicios/homologacion", label: "Homologación" },
  { href: "/proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
] as const;

const BG_IMAGE = "/images/lago-camino.webp";

export default function NotFoundScreen() {
  return (
    <main
      id="contenido-principal"
      className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden"
    >
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        priority
        className="img-bg object-cover object-center"
        sizes="100vw"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/45 md:via-bg/75 md:to-bg/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <Container className="relative flex flex-1 flex-col justify-center py-28 md:py-32">
        <div className="max-w-xl">
          <Reveal priority>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              {SITE.name}
            </p>
            <p
              className="mt-4 font-serif text-[clamp(4.5rem,14vw,7.5rem)] font-medium leading-none tracking-tight text-ink/12 select-none"
              aria-hidden
            >
              404
            </p>
            <h1 className="mt-2 font-serif text-[clamp(1.85rem,4vw,2.75rem)] font-medium leading-[1.15] text-ink text-balance">
              Esta página no está en el camino
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted text-pretty md:text-lg">
              El enlace puede haber cambiado o la dirección no existe. Vuelva al
              inicio o elija un destino claro: estamos para orientarle.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/">Volver al inicio</Button>
              <Button href={CONTACT_FORM_HREF} variant="secondary">
                Solicitar asesoría
              </Button>
            </div>
          </Reveal>

          <Reveal delay={2} className="mt-12 border-t border-border pt-8">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Destinos útiles
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-1">
              {SHORTCUTS.map((item) => (
                <NotFoundShortcut
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
