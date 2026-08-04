"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { cn } from "@/lib/cn";
import { COUNTRIES, normalizeForSearch, type Country } from "@/lib/countries";

interface CountrySelectProps {
  value: string;
  onChange: (country: string) => void;
  id: string;
  error?: string;
  placeholder?: string;
}

/**
 * Selector buscable de países (patrón Migralex), adaptado a la marca JVG.
 */
export default function CountrySelect({
  value,
  onChange,
  id,
  error,
  placeholder = "Busque su país…",
}: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listboxId = useId();

  const selected = useMemo(
    () => COUNTRIES.find((c) => c.name === value) ?? null,
    [value]
  );

  const results = useMemo<Country[]>(() => {
    const q = normalizeForSearch(query);
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((c) => normalizeForSearch(c.name).includes(q));
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  const openMenu = () => {
    setOpen(true);
    setQuery("");
    setActive(Math.max(0, COUNTRIES.findIndex((c) => c.name === value)));
  };

  const choose = (country: Country) => {
    onChange(country.name);
    setOpen(false);
    setQuery("");
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(i + 1, results.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (results[active]) choose(results[active]);
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-err` : undefined}
        className={cn(
          "flex w-full min-h-11 cursor-pointer items-center gap-3 rounded-md border border-border bg-surface px-4 py-3 text-left font-sans text-base",
          "transition-[border-color,box-shadow] duration-200 focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(213,158,63,.28)]",
          open && "border-gold shadow-[0_0_0_3px_rgba(213,158,63,.28)]"
        )}
      >
        {selected ? (
          <>
            <span className="text-[1.2rem] leading-none" aria-hidden>
              {selected.flag}
            </span>
            <span className="truncate text-ink">{selected.name}</span>
          </>
        ) : (
          <span className="truncate text-muted">Seleccione su país</span>
        )}
        <svg
          viewBox="0 0 24 24"
          className={cn(
            "ml-auto h-[18px] w-[18px] shrink-0 text-muted transition-transform duration-200",
            open && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 z-30 mt-2 overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-lg animate-step-in motion-reduce:animate-none">
          <div className="border-b border-border-subtle p-2.5">
            <div className="flex items-center gap-2 rounded-md border border-border bg-bg px-3 py-2 focus-within:border-gold transition-colors duration-200">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0 text-muted"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                placeholder={placeholder}
                aria-label="Buscar país"
                aria-controls={listboxId}
                aria-autocomplete="list"
                className="w-full border-0 bg-transparent text-[0.95rem] text-ink outline-none placeholder:text-muted"
              />
            </div>
          </div>

          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            aria-label="Países"
            className="max-h-[260px] overflow-y-auto py-1.5"
          >
            {results.length === 0 ? (
              <li className="px-4 py-3 text-[0.9rem] text-muted">
                Sin resultados para «{query}».
              </li>
            ) : (
              results.map((c, i) => {
                const isSelected = c.name === value;
                const isActive = i === active;
                return (
                  <li
                    key={c.code}
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActive(i)}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      choose(c);
                    }}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 px-4 py-2.5 text-[0.95rem] transition-colors duration-150",
                      isActive ? "bg-gold/15" : "bg-transparent",
                      isSelected ? "font-semibold text-gold-deep" : "text-ink"
                    )}
                  >
                    <span className="text-[1.2rem] leading-none" aria-hidden>
                      {c.flag}
                    </span>
                    <span className="truncate">{c.name}</span>
                    {isSelected && (
                      <svg
                        viewBox="0 0 24 24"
                        className="ml-auto h-[18px] w-[18px] shrink-0 text-gold-deep"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.4}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
