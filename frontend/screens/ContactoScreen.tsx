import { Mail, MapPin, MessageCircle } from "lucide-react";
import ContactChannelCard from "@/components/contacto/ContactChannelCard";
import ContactStepper from "@/components/contacto/ContactStepper";
import LocationCoveragePanel from "@/components/contacto/LocationCoveragePanel";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ScrollToHash from "@/components/ui/ScrollToHash";
import PageHero from "@/components/sections/PageHero";
import PhotoCta from "@/components/sections/PhotoCta";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { CONTACT_FORM_ID, SITE, mailLink, waLink } from "@/lib/siteConfig";

const CHANNELS = [
  {
    title: "WhatsApp",
    text: SITE.phoneDisplay,
    href: waLink(),
    image: "/images/asesoria.webp",
    icon: MessageCircle,
  },
  {
    title: "Correo",
    text: SITE.email,
    href: mailLink,
    image: "/images/documentos.webp",
    icon: Mail,
  },
  {
    title: "Cobertura",
    text: SITE.locationLabel,
    image: "/images/ciudad-calle.webp",
    icon: MapPin,
  },
] as const;

export default function ContactoScreen() {
  return (
    <main id="contenido-principal">
      <ScrollToHash />
      <PageHero
        eyebrow="Contacto"
        title="Solicite asesoría. Le escuchamos con atención."
        description="Complete el formulario paso a paso o escríbanos por WhatsApp. Le contactaremos — sin agenda automática, con respuesta humana."
        tone="warm"
        imageSrc="/images/asesoria.webp"
        imageAlt="Conversación cercana de asesoría"
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: "Contacto" },
        ]}
      />

      <section
        id={CONTACT_FORM_ID}
        className="relative scroll-mt-24 overflow-hidden bg-surface py-16 md:py-20"
      >
        <SectionAtmosphere />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <Reveal>
              <h2 className="mb-6 font-serif text-2xl font-medium text-ink md:text-3xl">
                Formulario de consulta
              </h2>
              <ContactStepper />
            </Reveal>
            <Reveal delay={1} className="space-y-6">
              <LocationCoveragePanel />
              <div className="rounded-2xl border border-border-subtle bg-bg p-6 shadow-sm">
                <p className="font-serif text-lg text-ink text-pretty">
                  {SITE.slogan}
                </p>
                <p className="mt-2 text-sm text-muted">{SITE.locationLabel}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden border-y border-border-subtle bg-bg py-16 md:py-24">
        <SectionAtmosphere mirror />
        <Container className="relative">
          <Reveal>
            <h2 className="font-serif text-2xl font-medium text-ink md:text-3xl">
              Otros canales
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              Elija el medio que le resulte más cómodo.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CHANNELS.map((item, i) => (
              <ContactChannelCard
                key={item.title}
                title={item.title}
                text={item.text}
                image={item.image}
                icon={item.icon}
                href={"href" in item ? item.href : undefined}
                delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}
              />
            ))}
          </div>
        </Container>
      </section>

      <PhotoCta
        imageSrc="/images/montana.webp"
        title="Estamos para simplificar su camino"
        description="Cuéntenos su caso. Le respondemos con claridad y respeto."
        secondaryHref="/servicios"
        secondaryLabel="Ver servicios"
      />
    </main>
  );
}
