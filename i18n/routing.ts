import { defineRouting } from "next-intl/routing";

/**
 * EN is the base; the UI chrome (nav/buttons/footer) is now translated into
 * TR/AR/RU/DE too — see messages/<locale>.json. `as-needed` keeps English at
 * `/` (no `/en` prefix) for the primary market while `/tr`, `/ar`, `/ru`,
 * `/de` are explicit.
 *
 * `tr` was added on explicit request (2026-07-16), overriding the earlier
 * design note that this is an abroad-facing health-tourism property and
 * Turkish health-tourism regulation wants domestic- and abroad-facing
 * content on separate properties. That regulatory consideration was not
 * re-evaluated when `tr` was added — worth revisiting before this locale
 * goes live/indexed.
 *
 * NOTE: only messages/<locale>.json (nav, buttons, footer, etc.) is
 * translated. Deep content — lib/procedures.ts, lib/doctors.ts — is still
 * English-only TypeScript with no per-locale variant, so every
 * non-English locale currently shows translated chrome around English body
 * copy until that content is localized too.
 */
export const routing = defineRouting({
  locales: ["en", "tr", "ar", "ru", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
