import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/lib/siteConfig";

/** Texto legal genérico provisional — TODO: reemplazar por texto revisado por el cliente. */
export default function AvisoPrivacidadScreen() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Aviso de privacidad"
        description="Documento provisional genérico. Debe sustituirse por el texto definitivo del responsable del tratamiento."
      />
      <section className="bg-surface py-12 md:py-16">
        <Container className="prose-legal max-w-3xl space-y-5 text-muted leading-relaxed">
          <p>
            {/* TODO: aviso de privacidad real del cliente */}
            Este aviso es un texto provisional. {SITE.name} ({SITE.email})
            tratará los datos personales que usted facilite a través del
            formulario de contacto, WhatsApp u otros canales únicamente para
            atender su consulta y prestar los servicios solicitados.
          </p>
          <p>
            Los datos podrán incluir nombre, correo, teléfono, país y el
            contenido de su mensaje. No se cederán a terceros salvo obligación
            legal o proveedores necesarios para la operación del servicio, bajo
            medidas de confidencialidad.
          </p>
          <p>
            Usted puede solicitar acceso, rectificación o eliminación de sus
            datos escribiendo a {SITE.email}. Al enviar el formulario, confirma
            haber leído este aviso provisional.
          </p>
          <p className="text-sm text-muted/70">
            Última actualización provisional: julio 2026.
          </p>
        </Container>
      </section>
    </main>
  );
}
