"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const DESTINATION = "/servicios/homologacion";

/** Redirect estático-friendly desde la URL heredada `/homologacion`. */
export default function HomologacionRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(DESTINATION);
  }, [router]);

  return (
    <main id="contenido-principal" className="bg-bg py-24 md:py-32">
      <Container className="max-w-xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
          Redirección
        </p>
        <h1 className="mt-3 font-serif text-3xl font-medium text-ink">
          Homologación de títulos
        </h1>
        <p className="mt-4 text-muted">
          Esta página se movió. Si no avanza automáticamente, continúe aquí:
        </p>
        <div className="mt-8 flex justify-center">
          <Button href={DESTINATION}>Ir a Homologación</Button>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace(${JSON.stringify(DESTINATION)});`,
          }}
        />
      </Container>
    </main>
  );
}
