import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/sections/PageHero";
import PageCtaBand from "@/components/sections/PageCtaBand";
import FaqAccordionItem from "@/components/faq/FaqAccordionItem";
import { FAQ_ITEMS } from "@/data/faq";
import { CONTACT_FORM_HREF } from "@/lib/siteConfig";

export default function FaqScreen() {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Ayuda"
        title="Preguntas frecuentes sobre trámites migratorios"
        description="Respuestas claras sobre residencias en México, apostilla, homologación, plazos y cómo iniciar su asesoría con JVG."
        tone="warm"
        imageSrc="/images/documentacion-escritorio.webp"
        imageAlt="Documentación migratoria ordenada sobre un escritorio"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Preguntas frecuentes" },
        ]}
      />

      <section className="bg-bg py-16 md:py-24" aria-label="Listado de preguntas frecuentes">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl border-t border-border">
              {FAQ_ITEMS.map((item) => (
                <FaqAccordionItem key={item.id} item={item} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <PageCtaBand
        title="¿No encontró su duda?"
        description="Cuéntenos su caso: evaluamos viabilidad y le orientamos con transparencia."
        primaryHref={CONTACT_FORM_HREF}
        primaryLabel="Solicitar asesoría"
      />
    </main>
  );
}
