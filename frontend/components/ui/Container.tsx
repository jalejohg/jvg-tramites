import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "nav" | "footer" | "header";
}

export default function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-6xl px-[clamp(1.25rem,4vw,2.5rem)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
