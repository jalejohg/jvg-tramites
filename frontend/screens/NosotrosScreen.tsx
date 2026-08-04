import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import PhotoCta from "@/components/sections/PhotoCta";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { ACHIEVEMENTS, PILLARS } from "@/data/content";
import { CONTACT_FORM_HREF, SITE } from "@/lib/siteConfig";

const PILLAR_IMAGES = [
  "/images/documentos.webp",
  "/images/profesional.webp",
  "/images/viaje-horizonte.webp",
] as const;

export default function NosotrosScreen() {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Nosotros"
        title="Una firma nacida para unir derecho y movilidad humana"
        description="Profesionalismo jurídico con calidez: el puente seguro entre la burocracia y su futuro."
        tone="warm"
        imageSrc="/images/viaje-horizonte.webp"
        imageAlt="Horizonte de viaje y nuevas oportunidades"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Nosotros" },
        ]}
      />

      <section className="relative overflow-hidden bg-surface py-16 md:py-24">
        <SectionAtmosphere />
        <Container className="relative">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-subtle shadow-sm">
                <Image
                  src="/images/familia.webp"
                  alt="Familias y vínculos que cuidamos a la distancia"
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
                Origen
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
                Nuestra historia
              </h2>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                Trámites Migratorios JVG nació de la visión de combinar una
                sólida formación en el derecho con una necesidad latente: un
                puente legal, seguro y confiable para tramitar documentos y
                gestiones consulares sin caer en la informalidad.
              </p>
              <p className="mt-4 text-muted text-pretty leading-relaxed">
                El proyecto se gestó entre finales de 2025 y se consolidó en la
                primera mitad de 2026, con especialidad en trámites migratorios
                hacia México, sede en Ciudad de México, atención en las
                principales ciudades de Cuba y un ecosistema que incluye también
                soluciones logísticas familiares.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink">
                {[
                  "Excelencia y cercanía como identidad",
                  "Firma mexicana con sede en CDMX y cobertura en Cuba",
                  "Más allá de la asesoría jurídica tradicional",
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

      <section className="relative overflow-hidden border-y border-border-subtle bg-bg py-14 md:py-16">
        <SectionAtmosphere mirror />
        <Container className="relative">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Nuestros logros
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-ink md:text-3xl">
              Resultados que respaldan la confianza
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {ACHIEVEMENTS.map((item, i) => (
              <Reveal
                key={item}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <li className="border-l-2 border-gold bg-surface px-4 py-3 text-sm font-medium text-ink md:text-base">
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border-subtle bg-bg py-16 md:py-24">
        <SectionAtmosphere />
        <Container className="relative">
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              Lo que nos sostiene
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Tres pilares que transforman un trámite en una experiencia de
              tranquilidad.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PILLARS.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              >
                <article className="group h-full overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow] duration-250 hover:border-gold hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={PILLAR_IMAGES[i]}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      aria-hidden
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2 font-serif text-xl text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted text-pretty">
                      {pillar.description}
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
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl border border-border-subtle bg-ink shadow-md md:mx-0">
                <Image
                  src={SITE.directorImage}
                  alt={`${SITE.director}, ${SITE.directorRole}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </Reveal>
            <Reveal delay={1}>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Dirección general
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium text-ink">
                {SITE.directorCourtesy} {SITE.director}
              </h2>
              <p className="mt-1 text-muted">{SITE.directorRole}</p>
              <p className="mt-6 text-muted leading-relaxed text-pretty">
                Con años de dedicación, ha acompañado con éxito a cientos de
                personas y familias en sus procesos migratorios hacia México.
                Combina el profundo conocimiento del derecho con especialización
                técnica y ética, atención al detalle y profesionalismo.
              </p>
              <p className="mt-4 text-muted leading-relaxed text-pretty">
                Su misión es guiar con seguridad y eficiencia a través del
                complejo panorama migratorio, transformando aspiraciones de vida
                en realidad legal. {SITE.taglineMexico}
              </p>
              <p className="mt-4 text-muted leading-relaxed text-pretty">
                Bajo su dirección, JVG también sostiene gestión documental,
                homologación profesional y atención en las principales ciudades
                del país para la diáspora.
              </p>
              <div className="mt-8">
                <Button href={CONTACT_FORM_HREF}>Solicitar asesoría</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc="/images/atmosfera-paisaje.webp"
        title="Unimos profesionalismo jurídico y calidez humana"
        description="A largo plazo aspiramos a ser referente de consultoría legal y gestión migratoria integral para la comunidad hispanohablante."
        secondaryHref="/proceso"
        secondaryLabel="Conocer el proceso"
      />
    </main>
  );
}
