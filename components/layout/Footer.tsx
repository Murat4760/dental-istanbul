import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { Link } from "@/i18n/navigation";
import { SITE } from "@/lib/site";
import { getLocalizedProcedures } from "@/lib/procedures";

const NAV = [
  { href: "/procedures", key: "procedures" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
] as const;

export async function Footer() {
  const t = await getTranslations();
  const locale = await getLocale();
  const year = new Date().getFullYear();
  const procedures = getLocalizedProcedures(locale);

  return (
    <footer className="mt-auto bg-ink text-canvas/80">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex items-center" aria-label={SITE.name}>
            <Image
              src="/logo.svg"
              alt={SITE.name}
              width={306}
              height={82}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-canvas/50">
            {t("footer.polyclinicLabel")}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-canvas/60">
            {t("footer.about")}
          </p>
          <div className="mt-6 flex gap-3">
            {SITE.socials.instagram && (
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("social.instagram")}
                className="grid h-11 w-11 place-items-center rounded-full border border-canvas/15 text-canvas/70 shadow-[0_0_18px_-4px_rgba(219,80,120,0.55)] transition-colors hover:border-accent"
              >
                <InstagramIcon brand className="h-5 w-5" />
              </a>
            )}
            {SITE.socials.facebook && (
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("social.facebook")}
                className="grid h-11 w-11 place-items-center rounded-full border border-canvas/15 text-canvas/70 transition-colors hover:border-accent hover:text-accent"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        {/* Quick links */}
        <nav className="md:col-span-2" aria-label={t("aria.footerNav")}>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-canvas/50">
            {t("footer.quickLinks")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-canvas/70 transition-colors hover:text-accent"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Procedures */}
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-canvas/50">
            {t("footer.procedures")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {procedures.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/procedures/${p.slug}`}
                  className="text-canvas/70 transition-colors hover:text-accent"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-canvas/50">
            {t("footer.contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-canvas/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {SITE.address.district}, {t("place.city")}, {t("place.country")}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={SITE.phoneHref} className="hover:text-accent">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {SITE.hoursConfirmed ? (
                <span>
                  {SITE.hours.map((h) => (
                    <span key={h.daysKey} className="block">
                      {t(`hours.${h.daysKey}`)}: {h.open === "" ? t("hours.closed") : `${h.open}–${h.close}`}
                    </span>
                  ))}
                </span>
              ) : (
                <span>{t("footer.hoursPending")}</span>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Legal / disclaimer */}
      <div className="border-t border-canvas/10">
        <div className="container-page py-6">
          <p className="text-xs leading-relaxed text-canvas/45">
            {t("footer.disclaimer")}
          </p>
          <div className="mt-4 flex flex-col gap-3 text-xs text-canvas/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {SITE.legalName}. {t("footer.rights")}
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-accent">
                {t("footer.privacy")}
              </Link>
              <Link href="/contact" className="hover:text-accent">
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
