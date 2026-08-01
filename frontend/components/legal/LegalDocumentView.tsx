import Container from "@/components/ui/Container";
import PageHero from "@/components/sections/PageHero";
import type { LegalDocumentContent } from "@/data/legal/types";

interface LegalDocumentViewProps {
  doc: LegalDocumentContent;
}

export default function LegalDocumentView({ doc }: LegalDocumentViewProps) {
  return (
    <main id="contenido-principal">
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        description={doc.description}
        breadcrumbs={[
          { label: "Inicio", href: "/" },
          { label: doc.title },
        ]}
      />
      <section className="bg-surface py-12 md:py-16">
        <Container className="max-w-3xl">
          <article className="space-y-10 text-muted leading-relaxed">
            <div className="space-y-4">
              {doc.intro.map((p, i) => (
                <p key={`intro-${i}`}>{p}</p>
              ))}
            </div>

            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4">
                <h2 className="font-serif text-xl font-medium text-ink md:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={`${section.id}-p-${i}`}>{p}</p>
                ))}
                {section.list && section.list.length > 0 ? (
                  <>
                    {section.listIntro ? <p>{section.listIntro}</p> : null}
                    <ul className="list-disc space-y-2 pl-5">
                      {section.list.map((item, i) => (
                        <li key={`${section.id}-li-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                ) : null}
                {section.afterList?.map((p, i) => (
                  <p key={`${section.id}-a-${i}`}>{p}</p>
                ))}
              </section>
            ))}

            <p className="border-t border-border pt-6 text-sm text-muted/80">
              {doc.updatedLabel}
            </p>
          </article>
        </Container>
      </section>
    </main>
  );
}
