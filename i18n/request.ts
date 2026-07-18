import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // English is the base catalogue — hardcoded here, deliberately NOT tied to
  // routing.defaultLocale (which is "tr", a routing/URL decision about which
  // locale owns the un-prefixed root, not a content decision). Any locale's
  // missing/untranslated keys must fall back to audited English text, never
  // silently to whichever locale happens to own "/". Non-English locales
  // overlay their message file on top — scaffolded locales render gracefully
  // in English until translated, filling messages/<locale>.json per key.
  const CONTENT_BASE_LOCALE = "en";
  const base = (await import(`../messages/${CONTENT_BASE_LOCALE}.json`))
    .default;
  const overlay =
    locale === CONTENT_BASE_LOCALE
      ? {}
      : (await import(`../messages/${locale}.json`)).default;

  return { locale, messages: { ...base, ...overlay } };
});
