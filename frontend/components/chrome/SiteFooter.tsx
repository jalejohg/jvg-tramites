import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { SERVICES } from "@/data/content";
import { SITE, mailLink, mapsLink, waLink } from "@/lib/siteConfig";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-ink text-on-cta">
      <div className="h-1 bg-gradient-to-r from-gold-deep via-gold to-gold-deep" />
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={140}
              height={64}
              className="h-12 w-auto brightness-110"
            />
            <p className="mt-4 font-serif text-lg text-on-cta/90">
              {SITE.slogan}
            </p>
            <p className="mt-3 text-sm text-on-cta/65">{SITE.locationLabel}</p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href ?? "/servicios"}
                    className="text-sm text-on-cta/75 transition-colors hover:text-gold cursor-pointer"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-on-cta/75">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailLink}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={mapsLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  {SITE.address}
                </a>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={SITE.facebookGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-cta/75 hover:text-gold transition-colors cursor-pointer"
              >
                Grupo de Facebook
              </a>
              {SITE.facebookProfile ? (
                <a
                  href={SITE.facebookProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-cta/75 hover:text-gold transition-colors cursor-pointer"
                >
                  Facebook · {SITE.director}
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Ubicación
            </h3>
            <div className="mt-4 overflow-hidden rounded-sm border border-white/10">
              <iframe
                title={`Mapa — ${SITE.address}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address)}&z=15&output=embed`}
                className="h-36 w-full grayscale-[0.2] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-on-cta/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/aviso-de-privacidad"
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Aviso de privacidad
            </Link>
            <Link
              href="/terminos-y-condiciones"
              className="hover:text-gold transition-colors cursor-pointer"
            >
              Términos y condiciones
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
