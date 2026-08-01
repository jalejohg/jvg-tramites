"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";
import { CONTACT_FORM_HREF, SITE } from "@/lib/siteConfig";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";

export default function SiteHeader() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-[background,box-shadow,padding] duration-300 ease-[var(--ease-fluid)]",
          scrolled
            ? "bg-bg/90 py-2.5 shadow-sm backdrop-blur-md backdrop-saturate-150"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-[clamp(1.25rem,4vw,2.5rem)]">
          <Link
            href="/"
            aria-label={`${SITE.name} — Inicio`}
            className="relative flex shrink-0 items-center"
          >
            <Image
              src="/logo.png"
              alt={SITE.name}
              width={160}
              height={72}
              priority
              className={cn(
                "h-auto w-auto transition-[height,width] duration-300",
                scrolled ? "max-h-10 md:max-h-11" : "max-h-12 md:max-h-14",
                "w-auto"
              )}
            />
          </Link>

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Principal"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-2 text-[0.9rem] font-medium transition-colors duration-200 cursor-pointer",
                    active
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 bottom-1 h-0.5 bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={CONTACT_FORM_HREF}
              className="hidden sm:inline-flex"
              variant="primary"
            >
              Solicitar asesoría
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-sm border border-border bg-surface text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 z-[99] bg-bg/98 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!open}
      >
        <nav
          className="flex h-full flex-col justify-center gap-1 px-8 pt-16"
          aria-label="Móvil"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "border-b border-border py-4 font-serif text-2xl transition-colors cursor-pointer",
                isActive(link.href) ? "text-gold-deep" : "text-ink hover:text-gold-deep"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={CONTACT_FORM_HREF}
            className="mt-8 w-full sm:w-auto"
            onClick={() => setOpen(false)}
          >
            Solicitar asesoría
          </Button>
        </nav>
      </div>
    </>
  );
}
