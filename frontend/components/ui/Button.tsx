import Link from "next/link";
import { cn } from "@/lib/cn";
import { newTabLinkProps } from "@/lib/linkBehavior";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cta text-on-cta border border-cta hover:bg-cta-hover hover:-translate-y-px hover:shadow-md",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-on-cta hover:-translate-y-px",
  ghost:
    "bg-transparent text-ink border border-transparent hover:text-gold-deep underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 font-sans text-[0.95rem] font-semibold tracking-wide rounded-md cursor-pointer transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-[var(--ease-fluid)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

type ButtonAsButton = {
  href?: undefined;
} & ComponentPropsWithoutRef<"button">;

type ButtonAsLink = {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
} & (ButtonAsButton | ButtonAsLink);

export default function Button({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const cls = cn(base, variants[variant], className);

  if ("href" in rest && rest.href) {
    const { href, target, rel, ...linkRest } = rest;
    const auto = newTabLinkProps(href);
    return (
      <Link
        href={href}
        className={cls}
        target={target ?? auto.target}
        rel={rel ?? auto.rel}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonAsButton;
  return (
    <button type={buttonRest.type ?? "button"} className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
