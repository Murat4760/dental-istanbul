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
 * content on separate properties.
 *
 * 2026-07-18: `tr` made public in the language switcher (was previously
 * direct-URL-only). The domestic/abroad separation concern above is
 * specifically part of the health-tourism regulatory regime (Uluslararası
 * Sağlık Turizmi Yetki Belgesi + HealthTürkiye membership) — this clinic
 * holds neither yet, isn't marketed or indexed as a health-tourism provider
 * (see NEXT_PUBLIC_ALLOW_INDEXING), and content here already meets the
 * baseline domestic-clinic advertising rules independent of that regime.
 * So the separation concern doesn't currently bind. REVISIT this decision
 * if/when the Yetki Belgesi or HealthTürkiye membership is obtained.
 *
 * Deep content in lib/procedures.ts is now localized for TR/AR/RU/DE too
 * (see lib/procedures.<locale>.ts, 2026-07-16). lib/doctors.ts is not — the
 * bio field is still a client-supplied placeholder in every locale, so
 * DoctorCard hides the bio block until a real one replaces it.
 */
export const routing = defineRouting({
  locales: ["en", "tr", "ar", "ru", "de"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
