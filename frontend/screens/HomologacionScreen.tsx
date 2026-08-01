import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import PageCtaBand from "@/components/sections/PageCtaBand";
import PhotoCta from "@/components/sections/PhotoCta";
import { CONTACT_FORM_HREF } from "@/lib/siteConfig";

const IMAGE =
  "/images/graduacion.webp";

const AUDIENCES = [
  {
    title: "Médicos y personal de salud",
    text: "Expedientes orientados a los requisitos de colegios y ministerios del destino.",
    image:
      "/images/salud.webp",
  },
  {
    title: "Ingenieros y técnicos",
    text: "Validación de planes de estudio y documentación académica para ejercer o continuar formación.",
    image:
      "/images/ingenieria.webp",
  },
  {
    title: "Docentes y otras profesiones",
    text: "Acompañamiento claro para licenciados y profesionales que buscan reconocimiento formal.",
    image:
      "/images/docencia.webp",
  },
] as const;

export default function HomologacionScreen() {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Servicio estrella"
        title="Homologación y validación de títulos universitarios"
        description="Para médicos, ingenieros, docentes y profesionales que desean ejercer con legitimidad en el exterior."
        tone="warm"
        imageSrc={IMAGE}
        imageAlt="Profesionales preparando documentación académica"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Homologación" },
        ]}
      />

      <section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src="/images/estudio-expediente.webp"
                  alt="Expediente académico en preparación"
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
                El servicio
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
                ¿En qué consiste?
              </h2>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                Asesoría técnica y armado del expediente completo — título,
                certificación de notas y planes de estudio — para homologar,
                validar o revalidar estudios superiores en el país de destino
                (España, EE. UU., México y otros).
              </p>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                Le ahorramos rechazos por mala estructuración y aceleramos su
                inserción en el mercado laboral internacional, devolviéndole el
                valor de sus años de estudio.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  "Armado del expediente con criterio técnico",
                  "Orientación según el país de destino",
                  "Seguimiento claro hasta la resolución",
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
              ¿Para quién es?
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Perfiles profesionales que más nos consultan — cada caso se evalúa
              con honestidad sobre su viabilidad real.
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

      <PhotoCta
        imageSrc="/images/graduacion-ceremonia.webp"
        title="Dé el paso hacia ejercer su verdadera vocación"
        description="Solicite asesoría y evaluamos la viabilidad de su caso con transparencia, sin compromisos opacos."
        secondaryHref="/servicios"
        secondaryLabel="Ver todos los servicios"
      />

      <PageCtaBand
        tone="surface"
        title="También puede explorar el resto del portafolio"
        description="Trámites migratorios en México, legalización, gestión en Cienfuegos y soporte familiar."
        primaryHref="/servicios"
        primaryLabel="Ver servicios"
        secondaryHref={CONTACT_FORM_HREF}
        secondaryLabel="Solicitar asesoría"
      />
    </main>
  );
}
