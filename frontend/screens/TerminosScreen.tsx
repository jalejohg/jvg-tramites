import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/lib/siteConfig";

/** Texto legal genérico provisional — TODO: reemplazar por términos reales. */
export default function TerminosScreen() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Términos y condiciones"
        description="Documento provisional genérico. Debe sustituirse por los términos definitivos del cliente."
      />
      <section className="bg-surface py-12 md:py-16">
        <Container className="max-w-3xl space-y-5 text-muted leading-relaxed">
          <p>
            {/* TODO: términos y condiciones reales del cliente */}
            El uso del sitio web de {SITE.name} implica la aceptación de estos
            términos provisionales. La información publicada tiene carácter
            orientativo y no constituye asesoría jurídica vinculante hasta la
            formalización de un encargo profesional.
          </p>
          <p>
            Los servicios se cotizan caso a caso. Las descripciones de plazos y
            procesos son estimaciones sujetas a autoridades y terceros. El
            contenido del sitio (textos, marca y diseño) pertenece a {SITE.name}
            o a sus licenciantes.
          </p>
          <p>
            Para consultas sobre estos términos, escriba a {SITE.email}.
          </p>
          <p className="text-sm text-muted/70">
            Última actualización provisional: julio 2026.
          </p>
        </Container>
      </section>
    </main>
  );
}
