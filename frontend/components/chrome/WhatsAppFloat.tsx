"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { SITE, WA_DEFAULT_MESSAGE, waLink } from "@/lib/siteConfig";
import { cn } from "@/lib/cn";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.004 3C8.832 3 3 8.77 3 15.866c0 2.27.62 4.48 1.8 6.43L3 29l6.92-1.76a13.1 13.1 0 0 0 6.084 1.5h.006C23.176 28.74 29 22.97 29 15.874 29 8.77 23.176 3 16.004 3zm0 23.55a10.9 10.9 0 0 1-5.56-1.52l-.4-.236-4.108 1.046 1.096-4-.26-.412a10.75 10.75 0 0 1-1.66-5.76c0-5.95 4.9-10.79 10.892-10.79 5.99 0 10.89 4.84 10.89 10.79 0 5.95-4.9 10.862-10.89 10.862zm5.98-8.1c-.328-.164-1.94-.956-2.24-1.066-.3-.108-.52-.164-.74.164-.22.328-.848 1.066-1.04 1.286-.192.22-.382.246-.71.082-.328-.164-1.384-.508-2.636-1.62-0.974-.866-1.632-1.936-1.824-2.264-.192-.328-.02-.506.144-.67.148-.146.328-.382.492-.574.164-.192.22-.328.328-.546.11-.22.054-.41-.028-.574-.082-.164-.74-1.78-1.014-2.438-.268-.644-.54-.556-.74-.566l-.63-.012c-.22 0-.574.082-.874.41-.3.328-1.144 1.116-1.144 2.722 0 1.606 1.17 3.158 1.334 3.376.164.22 2.304 3.518 5.58 4.932 1.956.844 2.724.92 3.704.776.564-.09 1.94-.792 2.214-1.558.274-.764.274-1.42.192-1.558-.082-.136-.3-.22-.628-.382z" />
    </svg>
  );
}

/**
 * Botón flotante de WhatsApp: abre un panel para redactar el mensaje
 * y solo al pulsar «Enviar» redirige a WhatsApp real (wa.me).
 */
export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(WA_DEFAULT_MESSAGE);
  const panelId = useId();
  const titleId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.focus();
      el.setSelectionRange(el.value.length, el.value.length);
    }, 50);

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);

    const triggerButton = triggerRef.current;

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      triggerButton?.focus();
    };
  }, [open]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = message.trim() || WA_DEFAULT_MESSAGE;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 max-sm:bottom-4 max-sm:right-4">
      {open && (
        <>
          <button
            type="button"
            aria-label="Cerrar chat de WhatsApp"
            className="fixed inset-0 z-[89] cursor-default bg-ink/25 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={cn(
              "relative z-[91] w-[min(22.5rem,calc(100vw-2rem))] overflow-hidden",
              "border border-border bg-surface shadow-lg",
              "animate-[stepIn_0.3s_var(--ease-fluid)]",
            )}
          >
            <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5 text-white">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#25D366]">
                <WhatsAppGlyph className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1 leading-tight">
                <p id={titleId} className="truncate font-sans text-[0.95rem] font-semibold">
                  {SITE.shortName}
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[0.72rem] font-medium opacity-90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C6F6D5] animate-wapulse" />
                  Respuesta humana · {SITE.phoneDisplay}
                </p>
              </div>
              <button
                type="button"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-sm text-white/90 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="bg-[linear-gradient(180deg,#efe6d8_0%,#f7f4ef_100%)] px-4 py-4">
              <div className="max-w-[90%] rounded-sm border border-border bg-surface px-3.5 py-3 text-[0.9rem] leading-relaxed text-ink shadow-sm">
                <p>
                  Hola, soy del equipo de {SITE.name}. Escriba su consulta y al
                  enviar abriremos WhatsApp con su mensaje listo.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="border-t border-border bg-surface p-3">
              <label htmlFor={`${panelId}-msg`} className="sr-only">
                Mensaje para WhatsApp
              </label>
              <textarea
                id={`${panelId}-msg`}
                ref={textareaRef}
                rows={4}
                maxLength={1000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escriba su mensaje…"
                className={cn(
                  "w-full resize-y rounded-sm border border-border bg-bg px-3 py-2.5",
                  "font-sans text-[0.95rem] text-ink placeholder:text-muted/80",
                  "transition-[border-color,box-shadow] duration-200",
                  "focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,163,90,.25)]",
                )}
              />
              <button
                type="submit"
                className={cn(
                  "mt-2.5 flex w-full items-center justify-center gap-2",
                  "min-h-11 rounded-sm bg-[#25D366] px-4 py-2.5",
                  "font-sans text-[0.95rem] font-semibold text-white",
                  "shadow-[0_8px_20px_rgba(37,211,102,.35)]",
                  "transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-fluid)]",
                  "hover:bg-[#1ebe57] hover:-translate-y-px hover:shadow-[0_12px_28px_rgba(37,211,102,.45)]",
                  "active:scale-[0.98] cursor-pointer",
                )}
              >
                <WhatsAppGlyph className="h-5 w-5" />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? "Cerrar chat de WhatsApp" : "Escribir por WhatsApp"}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative z-[91] flex items-center gap-3 bg-[#25D366] text-white",
          "pl-3.5 pr-5 py-3 rounded-sm font-semibold text-[0.9rem]",
          "shadow-[0_12px_34px_rgba(37,211,102,.4)] transition-[transform,box-shadow] duration-250 ease-[var(--ease-fluid)]",
          "hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(37,211,102,.5)] cursor-pointer",
          "max-sm:p-3.5",
        )}
      >
        <WhatsAppGlyph className="h-7 w-7 shrink-0" />
        <span className="flex flex-col leading-tight max-sm:hidden">
          <strong>WhatsApp</strong>
          <small className="flex items-center gap-1.5 text-[0.7rem] font-medium opacity-90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6F6D5] animate-wapulse" />
            Escribir ahora
          </small>
        </span>
      </button>
    </div>
  );
}
