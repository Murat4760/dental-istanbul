import { defineRouting } from "next-intl/routing";

/**
 * EN is the only locale with content today. AR / RU / TR / DE are scaffolded so
 * adding a language is a `messages/<locale>.json` + translation task, not a
 * routing rebuild. `as-needed` keeps English at `/` (no `/en` prefix) for the
 * primary market while `/ar`, `/ru`, … exist for the future.
 */
export const routing = defineRouting({
  locales: ["en", "ar", "ru", "tr", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
