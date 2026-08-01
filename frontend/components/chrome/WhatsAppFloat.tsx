import { waLink } from "@/lib/siteConfig";

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

/** Botón flotante de WhatsApp visible en todas las páginas. */
export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={
        "fixed bottom-5 right-5 z-[90] flex items-center gap-3 bg-[#25D366] text-white " +
        "pl-3.5 pr-5 py-3 rounded-sm font-semibold text-[0.9rem] " +
        "shadow-[0_12px_34px_rgba(37,211,102,.4)] transition-[transform,box-shadow] duration-250 ease-[var(--ease-fluid)] " +
        "hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(37,211,102,.5)] cursor-pointer " +
        "max-sm:p-3.5"
      }
    >
      <WhatsAppGlyph className="h-7 w-7 shrink-0" />
      <span className="flex flex-col leading-tight max-sm:hidden">
        <strong>WhatsApp</strong>
        <small className="flex items-center gap-1.5 text-[0.7rem] font-medium opacity-90">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6F6D5] animate-wapulse" />
          Escribir ahora
        </small>
      </span>
    </a>
  );
}
