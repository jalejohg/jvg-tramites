import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { newTabLinkProps } from "@/lib/linkBehavior";

type ContactChannelCardProps = {
  title: string;
  text: string;
  image: string;
  icon: LucideIcon;
  href?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
};

export default function ContactChannelCard({
  title,
  text,
  image,
  icon: Icon,
  href,
  delay = 0,
}: ContactChannelCardProps) {
  const body = (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
          sizes="(max-width: 768px) 100vw, 33vw"
          aria-hidden
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2 text-gold-deep">
          <Icon className="h-5 w-5" aria-hidden />
          <h3 className="font-serif text-xl text-ink">{title}</h3>
        </div>
        <p className="text-sm text-muted text-pretty">{text}</p>
      </div>
    </>
  );

  const className =
    "group block h-full overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm transition-[border-color,box-shadow] duration-250";

  return (
    <Reveal delay={delay}>
      {href ? (
        <a
          href={href}
          {...newTabLinkProps(href)}
          className={`${className} hover:border-gold hover:shadow-md cursor-pointer`}
        >
          {body}
        </a>
      ) : (
        <div className={className}>{body}</div>
      )}
    </Reveal>
  );
}
