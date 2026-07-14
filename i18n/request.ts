import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // English is the base catalogue. Non-English locales overlay their (currently
  // empty) message file on top, so scaffolded locales render gracefully in
  // English until translated — filling messages/<locale>.json overrides per key.
  const base = (await import(`../messages/${routing.defaultLocale}.json`))
    .default;
  const overlay =
    locale === routing.defaultLocale
      ? {}
      : (await import(`../messages/${locale}.json`)).default;

  return { locale, messages: { ...base, ...overlay } };
});
