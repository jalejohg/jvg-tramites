import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import PageHero from "@/components/sections/PageHero";
import PageCtaBand from "@/components/sections/PageCtaBand";
import PhotoCta from "@/components/sections/PhotoCta";
import { SERVICES } from "@/data/content";
import { CONTACT_FORM_HREF } from "@/lib/siteConfig";

const AUDIENCES = [
  {
    title: "Quienes migran a México",
    text: "Residencias, naturalización, reunificación y regularización con asesoría legal clara.",
    image: "/images/viaje-horizonte.jpg",
  },
  {
    title: "Profesionales y graduados",
    text: "Homologación y validación para ejercer en el exterior con legitimidad.",
    image: "/images/graduacion.jpg",
  },
  {
    title: "Familias en el exterior",
    text: "Gestión a distancia desde Cienfuegos, remesas y soporte logístico.",
    image: "/images/familia-manos.jpg",
  },
] as const;

export default function ServiciosScreen() {
  return (
    <main>
      <PageHero
        eyebrow="Servicios"
        title="Un portafolio integral para su camino legal y familiar"
        description="Trámites migratorios en México, documentos, homologación y soporte familiar: claridad y un solo interlocutor de confianza."
        tone="warm"
        imageSrc="/images/documentos.jpg"
        imageAlt="Documentación profesional sobre un escritorio"
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src="/images/documentacion-escritorio.jpg"
                  alt="Acompañamiento profesional en gestiones documentales"
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
                El portafolio
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
                Todo en un solo lugar
              </h2>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                Combinamos rigor jurídico con soluciones logísticas para que no
                tenga que fragmentar su trámite entre intermediarios. Un
                interlocutor, un plan claro y acompañamiento hasta el cierre.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  "Especialidad en trámites migratorios hacia México",
                  "Cotización transparente según su caso",
                  "Gestión en Cienfuegos y atención internacional",
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
              ¿A quién ayudamos?
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Tres caminos habituales — todos con la misma seriedad y calidez.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {AUDIENCES.map((item, i) => (
              <Reveal
                key={item.title}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <article className="group h-full overflow-hidden border border-border bg-surface transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted text-pretty">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              Nuestros servicios
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Elija el que mejor describe su necesidad. Homologación cuenta con
              una página dedicada para profundizar.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => {
              const href = service.href ?? CONTACT_FORM_HREF;
              return (
                <Reveal
                  key={service.id}
                  delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
                >
                  <article className="group flex h-full flex-col overflow-hidden border border-border bg-bg transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-white/50 bg-surface/95 text-gold-deep backdrop-blur-sm">
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-serif text-xl text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted text-pretty">
                        {service.description}
                      </p>
                      {service.highlights && (
                        <ul className="mt-3 space-y-1.5 text-sm text-ink">
                          {service.highlights.map((item) => (
                            <li
                              key={item}
                              className="border-l-2 border-gold pl-2.5 text-pretty"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      <p className="mt-3 flex-1 text-sm font-medium text-muted text-pretty">
                        {service.value}
                      </p>
                      <Link
                        href={href}
                        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold-deep cursor-pointer"
                      >
                        {service.href ? "Conocer más" : "Solicitar asesoría"}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc="/images/hero-avion.jpg"
        title="Los costos se cotizan según su caso"
        description="Sin sorpresas: primero claridad, después el trámite. Cuéntenos qué necesita."
        secondaryHref="/proceso"
        secondaryLabel="Conocer el proceso"
      />

      <PageCtaBand
        tone="surface"
        title="¿Prefiere conocer el proceso primero?"
        description="Cuatro pasos claros, de la consulta a la entrega."
        primaryHref="/proceso"
        primaryLabel="Conocer el proceso"
        secondaryHref={CONTACT_FORM_HREF}
        secondaryLabel="Solicitar asesoría"
      />
    </main>
  );
}
