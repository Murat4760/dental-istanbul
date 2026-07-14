import { defineRouting } from "next-intl/routing";

/**
 * EN is the only locale with content today. AR / RU / DE are scaffolded so
 * adding a language is a `messages/<locale>.json` + translation task, not a
 * routing rebuild. `as-needed` keeps English at `/` (no `/en` prefix) for the
 * primary market while `/ar`, `/ru`, … exist for the future.
 *
 * No `tr` locale: this site is abroad-facing health-tourism promotion, and
 * Turkish health-tourism regulation requires domestic- and abroad-facing
 * content to live on separate properties — a Turkish route doesn't belong
 * on this domain even as a placeholder.
 */
export const routing = defineRouting({
  locales: ["en", "ar", "ru", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
