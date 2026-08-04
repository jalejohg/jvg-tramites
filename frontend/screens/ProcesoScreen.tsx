import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import PhotoCta from "@/components/sections/PhotoCta";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { PROCESS_STEPS } from "@/data/content";

const STEP_IMAGES = [
  "/images/asesoria.webp",
  "/images/documentos.webp",
  "/images/equipo-reunion.webp",
  "/images/familia.webp",
] as const;

export default function ProcesoScreen() {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Proceso"
        title="Cómo trabajamos: claridad en cada paso"
        description="Un recorrido pensado para reducir ansiedad. Usted siempre sabe en qué punto está su trámite."
        tone="warm"
        imageSrc="/images/profesional.webp"
        imageAlt="Profesional en conversación de acompañamiento"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Proceso" },
        ]}
      />

      <section className="relative overflow-hidden bg-surface py-16 md:py-24">
        <SectionAtmosphere />
        <Container className="relative">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle shadow-sm">
                <Image
                  src="/images/equipo-reunion.webp"
                  alt="Equipo acompañando un caso con cercanía"
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
                El método
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
                Tranquilidad con un plan claro
              </h2>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                Cada caso es distinto, pero el recorrido es el mismo: le
                escuchamos, evaluamos con honestidad, gestionamos con seguimiento
                y acompañamos hasta la entrega.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  "Sin tecnicismos innecesarios",
                  "Viabilidad real antes de avanzar",
                  "Comunicación continua del estado",
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

      <section className="relative overflow-hidden border-y border-border-subtle bg-bg py-16 md:py-24">
        <SectionAtmosphere mirror />
        <Container className="relative">
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              Los cuatro pasos
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Del primer mensaje a la resolución — siempre con usted informado.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal
                key={step.step}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <article
                  id={`paso-${step.step}`}
                  className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={STEP_IMAGES[i]}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      aria-hidden
                    />
                    <span className="gold-orb absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full font-serif text-base">
                      {step.step}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted text-pretty">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc="/images/lago-camino.webp"
        title="¿Listo para el primer paso?"
        description="Estamos para escucharle. Cuéntenos su caso y le orientamos con claridad."
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />
    </main>
  );
}
