"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Asegura scroll al hash tras navegación client-side de Next.js
 * (p. ej. /contacto#formulario), compensando el header fijo.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!el) return;
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return null;
}
