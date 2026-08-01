import Link from "next/link";
import PageJsonLd from "@/components/seo/PageJsonLd";
import { absoluteUrl } from "@/lib/seo";
import { cn } from "@/lib/cn";

export interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

/**
 * Migas de pan visibles + BreadcrumbList JSON-LD para rich results.
 */
export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) return null;

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <PageJsonLd data={breadcrumbSchema} />
      <nav aria-label="Migas de pan" className={cn("mb-4", className)}>
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span aria-hidden className="text-muted/50">
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="font-medium text-muted transition-colors hover:text-ink cursor-pointer"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={cn(isLast && "font-medium text-ink")}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
