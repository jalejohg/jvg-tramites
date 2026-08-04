import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ServiceIcon from "@/components/ui/ServiceIcon";
import PageHero from "@/components/sections/PageHero";
import PhotoCta from "@/components/sections/PhotoCta";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { SERVICES } from "@/data/content";


const AUDIENCES = [
  {
    title: "Profesionales y graduados",
    text: "Homologación y validación de títulos para ejercer su vocación en el exterior con legitimidad.",
    image: "/images/graduacion.webp",
  },
  {
    title: "Procesos migratorios y consulares",
    text: "Visados, reunificación familiar y documentos legalizados con asesoría clara y segura.",
    image: "/images/viaje-horizonte.webp",
  },
  {
    title: "Comunidad en el exterior",
    text: "Gestión a distancia en las principales ciudades de Cuba, remesas seguras y telecomunicaciones para su familia.",
    image: "/images/familia-manos.webp",
  },
] as const;

export default function ServiciosScreen() {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Servicios"
        title="Un portafolio integral para su camino legal y familiar"
        description="Legalización y apostilla, homologación de títulos, asesoría consular, gestión en el terreno y soporte familiar: claridad y un solo interlocutor de confianza."
        tone="warm"
        imageSrc="/images/documentos.webp"
        imageAlt="Documentación profesional sobre un escritorio"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios" },
        ]}
      />

      <section className="relative overflow-hidden border-y border-border-subtle bg-bg py-16 md:py-24">
        <SectionAtmosphere mirror />
        <Container className="relative">
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
                <article className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md">
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

      <section className="relative overflow-hidden bg-surface py-16 md:py-24">
        <SectionAtmosphere />
        <Container className="relative">
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              Nuestros servicios
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Elija el que mejor describe su necesidad. Cada servicio tiene su
              página para profundizar.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.id}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow,transform] duration-250 hover:-translate-y-0.5 hover:border-gold hover:shadow-md cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-surface/95 text-gold-deep backdrop-blur-sm">
                      <ServiceIcon name={service.icon} className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-serif text-xl text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted text-pretty">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition-colors group-hover:text-gold-deep">
                      Conocer más
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc="/images/hero-avion.webp"
        title="Los costos se cotizan según su caso"
        description="Sin sorpresas: primero claridad, después el trámite. Cuéntenos qué necesita."
        secondaryHref="/proceso"
        secondaryLabel="Conocer el proceso"
      />
    </main>
  );
}
