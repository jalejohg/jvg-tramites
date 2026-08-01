"use client";

import {
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  type TransitionEvent,
} from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/cn";

const DELAY = ["0s", "0.08s", "0.16s", "0.24s", "0.32s"] as const;

type RevealProps<T extends ElementType> = {
  as?: T;
  delay?: 0 | 1 | 2 | 3 | 4;
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "style" | "children">;

export default function Reveal<T extends ElementType = "div">({
  as,
  delay = 0,
  priority = false,
  className,
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const { ref, revealed } = useReveal();
  const [settled, setSettled] = useState(false);
  const visible = priority || revealed;

  const handleTransitionEnd = (event: TransitionEvent) => {
    if (event.target === event.currentTarget) setSettled(true);
  };

  return (
    <Tag
      ref={ref}
      onTransitionEnd={handleTransitionEnd}
      className={cn(
        "transition-[opacity,transform] duration-300 ease-[var(--ease-fluid)] md:duration-500 motion-reduce:transition-none",
        !priority && revealed && !settled && "will-change-transform",
        visible ? "opacity-100 translate-y-0" : "opacity-0 md:translate-y-6",
        className
      )}
      style={{
        transitionDelay: revealed && !priority ? DELAY[delay] : "0s",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
