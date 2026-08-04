"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";
import { CONTACT_FORM_HREF, SITE } from "@/lib/siteConfig";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/cn";
import Button from "@/components/ui/Button";

/** Altura fija del logo para evitar CLS al hacer scroll. */
const LOGO_CLASS = "h-11 w-auto md:h-12";

export default function SiteHeader() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [navPath, setNavPath] = useState(pathname);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al cambiar de ruta (ajuste de estado al cambiar props/ruta).
  if (pathname !== navPath) {
    setNavPath(pathname);
    if (open) setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    focusables?.[0]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !focusables?.length) return;
      const list = Array.from(focusables);
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

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
            className="relative flex h-12 shrink-0 items-center"
          >
            <Image
              src={SITE.logo}
              alt={SITE.name}
              width={96}
              height={96}
              priority
              className={cn(LOGO_CLASS, "no-zoom")}
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
                    active ? "text-ink" : "text-muted hover:text-ink"
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
            <div className="hidden lg:block">
              <Button href={CONTACT_FORM_HREF} variant="primary">
                Solicitar asesoría
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-md border border-border bg-surface text-ink lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X size={22} aria-hidden />
              ) : (
                <Menu size={22} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id={menuId}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
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
              tabIndex={open ? 0 : -1}
              className={cn(
                "border-b border-border py-4 font-serif text-2xl transition-colors cursor-pointer",
                isActive(link.href)
                  ? "text-gold-deep"
                  : "text-ink hover:text-gold-deep"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href={CONTACT_FORM_HREF}
            className="mt-8 w-full sm:w-auto"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            Solicitar asesoría
          </Button>
        </nav>
      </div>
    </>
  );
}
