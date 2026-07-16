"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Check, ChevronDown } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("label")}
        className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{locale}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-line bg-surface p-1 shadow-card"
        >
          {routing.locales
            .filter((loc) => loc !== "tr")
            .map((loc) => {
              const isCurrent = loc === locale;
              return (
                <li key={loc}>
                  <Link
                    href={pathname}
                    locale={loc}
                    aria-current={isCurrent}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm",
                      isCurrent
                        ? "bg-primary-tint font-medium text-primary"
                        : "text-ink-soft hover:bg-sand",
                    )}
                  >
                    <span>{t(loc)}</span>
                    {isCurrent && <Check className="h-4 w-4" />}
                  </Link>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
