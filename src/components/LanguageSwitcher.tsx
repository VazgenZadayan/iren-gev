"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  localeNames,
  localeShort,
  locales,
  type Locale,
} from "@/i18n/config";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  const switchedPath = (next: Locale) => {
    const parts = pathname.split("/");
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  };

  useEffect(() => {
    if (!open) return;

    const onPointer = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const timer = window.setTimeout(() => {
      document.addEventListener("pointerdown", onPointer);
    }, 10);

    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`lang-switcher ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="lang-switcher__trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="lang-switcher__code">{localeShort[locale]}</span>
        <span className="lang-switcher__chevron" aria-hidden />
      </button>

      {open ? (
        <ul
          id={menuId}
          className="lang-switcher__menu"
          role="listbox"
          aria-label="Language"
        >
          {locales.map((code) => {
            const active = code === locale;
            return (
              <li key={code} role="option" aria-selected={active}>
                <Link
                  href={switchedPath(code)}
                  hrefLang={code}
                  className={active ? "is-active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="lang-switcher__item-code">
                    {localeShort[code]}
                  </span>
                  <span className="lang-switcher__item-name">
                    {localeNames[code]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
