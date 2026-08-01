import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import ContactStepper from "@/components/contacto/ContactStepper";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ScrollToHash from "@/components/ui/ScrollToHash";
import PageHero from "@/components/sections/PageHero";
import PageCtaBand from "@/components/sections/PageCtaBand";
import PhotoCta from "@/components/sections/PhotoCta";
import {
  CONTACT_FORM_ID,
  SITE,
  mailLink,
  mapsEmbedUrl,
  mapsLink,
  waLink,
} from "@/lib/siteConfig";

const CHANNELS = [
  {
    title: "WhatsApp",
    text: SITE.phoneDisplay,
    href: waLink(),
    external: true,
    image: "/images/asesoria.jpg",
    icon: MessageCircle,
  },
  {
    title: "Correo",
    text: SITE.email,
    href: mailLink,
    external: false,
    image: "/images/documentos.jpg",
    icon: Mail,
  },
  {
    title: "Ubicación",
    text: SITE.address,
    href: mapsLink(),
    external: true,
    image: "/images/ciudad-calle.jpg",
    icon: MapPin,
  },
] as const;

export default function ContactoScreen() {
  return (
    <main>
      <ScrollToHash />
      <PageHero
        eyebrow="Contacto"
        title="Solicite asesoría. Le escuchamos con atención."
        description="Complete el formulario paso a paso o escríbanos por WhatsApp. Le contactaremos — sin agenda automática, con respuesta humana."
        tone="warm"
        imageSrc="/images/asesoria.jpg"
        imageAlt="Conversación cercana de asesoría"
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src="/images/equipo-reunion.jpg"
                  alt="Atención personalizada y respuesta humana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Cómo contactarnos
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
                Un formulario claro, o el canal que prefiera
              </h2>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                El stepper le guía paso a paso. Si prefiere escribir directo,
                WhatsApp, correo y nuestra ubicación en Ave Polanco están
                disponibles. La gestión operativa en terreno (Cienfuegos) se
                coordina desde el mismo equipo.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  "Respuesta humana — sin agenda automática",
                  "Evaluación de viabilidad con transparencia",
                  "Atención desde Cuba y desde el exterior",
                ].map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-bg py-16 md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              Otros canales
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Elija el medio que le resulte más cómodo.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CHANNELS.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
                >
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group block h-full overflow-hidden border border-border bg-surface transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md cursor-pointer"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        aria-hidden
                      />
                    </div>
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2 text-gold-deep">
                        <Icon className="h-5 w-5" aria-hidden />
                        <h3 className="font-serif text-xl text-ink">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted text-pretty">{item.text}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id={CONTACT_FORM_ID}
        className="scroll-mt-24 bg-surface py-16 md:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <Reveal>
              <h2 className="mb-6 font-serif text-2xl font-medium text-ink md:text-3xl">
                Formulario de consulta
              </h2>
              <ContactStepper />
            </Reveal>
            <Reveal delay={1} className="space-y-6">
              <div className="overflow-hidden border border-border">
                <iframe
                  title={`Mapa — ${SITE.address}`}
                  src={mapsEmbedUrl()}
                  className="h-64 w-full lg:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="border border-border bg-warm/70 p-6">
                <p className="font-serif text-lg text-ink text-pretty">
                  {SITE.slogan}
                </p>
                <p className="mt-2 text-sm text-muted">{SITE.locationLabel}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc="/images/montana.jpg"
        title="Estamos para simplificar su camino"
        description="Cuéntenos su caso. Le respondemos con claridad y respeto."
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />

      <PageCtaBand
        tone="surface"
        title="Antes de escribir, puede revisar el proceso"
        description="Así sabrá qué esperar en cada etapa."
        primaryHref="/proceso"
        primaryLabel="Conocer el proceso"
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />
    </main>
  );
}
