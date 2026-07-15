"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { SITE, whatsappUrl } from "@/lib/site";
import { Arc } from "@/components/ui/Arc";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV = [
  { href: "/procedures", key: "procedures" },
  { href: "/patient-journey", key: "journey" },
  { href: "/about", key: "about" },
  { href: "/reviews", key: "reviews" },
  { href: "/faq", key: "faq" },
] as const;

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-canvas/90 shadow-[0_1px_24px_-14px_rgba(15,27,26,0.4)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label={SITE.name}
        >
          <span className="font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {SITE.shortName}
          </span>
          <Arc
            className="h-2.5 w-7 text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
            strokeWidth={2}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "text-primary"
                  : "text-ink-soft hover:text-ink",
              )}
            >
              {t(`nav.${item.key}`)}
              {isActive(item.href) && (
                <Arc
                  className="absolute inset-x-3 -bottom-0 h-1.5 text-accent"
                  strokeWidth={2}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher />
          <div className="hidden sm:block">
            <Button href={whatsappUrl(t("whatsapp.prefill"))} external size="sm">
              {t("cta.whatsapp")}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t("common.close") : t("common.menu")}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-line-strong lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-canvas lg:hidden">
          <nav
            className="container-page flex flex-col py-4"
            aria-label="Mobile"
          >
            {[...NAV, { href: "/contact", key: "contact" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center justify-between border-b border-line/70 py-3.5 text-base font-medium",
                  isActive(item.href) ? "text-primary" : "text-ink",
                )}
              >
                {t(`nav.${item.key}`)}
                {isActive(item.href) && (
                  <Arc className="h-2 w-6 text-accent" strokeWidth={2} />
                )}
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-3">
              <Button href={whatsappUrl(t("whatsapp.prefill"))} external size="lg" className="w-full">
                {t("cta.whatsapp")}
              </Button>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 text-sm font-medium text-ink-soft"
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
