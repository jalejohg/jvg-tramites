import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FooterNavLink from "@/components/chrome/FooterNavLink";
import SectionAtmosphere from "@/components/ui/SectionAtmosphere";
import { SERVICES } from "@/data/content";
import { newTabLinkProps } from "@/lib/linkBehavior";
import { SITE, mailLink, waLink } from "@/lib/siteConfig";

const EXPLORE_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ink text-on-cta">
      <SectionAtmosphere tone="ink" />
      <div className="relative h-1 bg-gradient-to-r from-gold-deep via-gold to-gold-deep" />
      <Container className="relative py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={96}
              height={96}
              className="h-14 w-auto brightness-110 no-zoom"
            />
            <p className="mt-4 font-serif text-lg text-on-cta/90">
              {SITE.slogan}
            </p>
            <p className="mt-3 text-sm text-on-cta/65">{SITE.locationLabel}</p>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Explorar
            </h3>
            <ul className="mt-4 space-y-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <FooterNavLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
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
                  {...newTabLinkProps(waLink())}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  WhatsApp: {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailLink}
                  {...newTabLinkProps(mailLink)}
                  className="hover:text-gold transition-colors cursor-pointer"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="text-pretty">{SITE.address}</p>
                <p className="mt-1 text-on-cta/55 text-pretty">
                  Atención en las principales ciudades de Cuba
                </p>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a
                href={SITE.facebookGroup}
                {...newTabLinkProps(SITE.facebookGroup)}
                className="text-on-cta/75 hover:text-gold transition-colors cursor-pointer"
              >
                Grupo de Facebook
              </a>
              {SITE.facebookProfile ? (
                <a
                  href={SITE.facebookProfile}
                  {...newTabLinkProps(SITE.facebookProfile)}
                  className="text-on-cta/75 hover:text-gold transition-colors cursor-pointer"
                >
                  Facebook · {SITE.director}
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7 text-[0.85rem] text-on-cta/55">
          <a
            href="https://flychira.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.82rem] text-on-cta/70 transition-opacity duration-200 hover:opacity-80 cursor-pointer"
          >
            <span className="opacity-60">Powered by</span>
            <Image
              src="/assets/naranja-glow-flyblanco.svg"
              alt="FlyChira"
              width={140}
              height={48}
              className="h-12 w-auto no-zoom"
            />
          </a>
          <div className="flex flex-wrap items-center gap-5">
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <Link
                href="/aviso-de-privacidad"
                {...newTabLinkProps("/aviso-de-privacidad")}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Aviso de privacidad
              </Link>
              <Link
                href="/terminos-y-condiciones"
                {...newTabLinkProps("/terminos-y-condiciones")}
                className="hover:text-gold transition-colors cursor-pointer"
              >
                Términos y condiciones
              </Link>
            </nav>
            <span className="opacity-70">
              © {new Date().getFullYear()} {SITE.name}. Todos los derechos
              reservados.
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
