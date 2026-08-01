/**
 * Enlace de salto al contenido principal (WCAG 2.4.1).
 * Visible solo al recibir foco por teclado.
 */
export default function SkipLink() {
  return (
    <a
      href="#contenido-principal"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-3 focus:font-sans focus:text-sm focus:font-semibold focus:text-on-cta focus:shadow-lg"
    >
      Saltar al contenido principal
    </a>
  );
}
