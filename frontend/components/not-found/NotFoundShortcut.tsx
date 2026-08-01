import Link from "next/link";

interface NotFoundShortcutProps {
  href: string;
  label: string;
}

export default function NotFoundShortcut({ href, label }: NotFoundShortcutProps) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex min-h-11 items-center gap-2 border-b border-transparent py-2 font-sans text-sm font-semibold text-ink transition-[color,border-color] duration-200 hover:border-gold hover:text-gold-deep"
      >
        <span
          className="h-px w-4 bg-gold transition-[width] duration-200 group-hover:w-6"
          aria-hidden
        />
        {label}
      </Link>
    </li>
  );
}
