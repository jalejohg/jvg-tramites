import { memo } from "react";
import Link from "next/link";

interface FooterNavLinkProps {
  href: string;
  label: string;
}

function FooterNavLink({ href, label }: FooterNavLinkProps) {
  return (
    <Link
      href={href}
      className="text-on-cta/75 transition-colors hover:text-gold cursor-pointer"
    >
      {label}
    </Link>
  );
}

export default memo(FooterNavLink);
