import { SITE, SITE_URL, absoluteUrl } from "./site";
import type { Procedure } from "./procedures";

/**
 * JSON-LD builders. Rendered via <JsonLd> on the relevant pages.
 * Note: aggregateRating and opening hours mirror lib/site.ts placeholders —
 * keep them in sync with the clinic's real, verifiable data before launch.
 */

export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#clinic`,
    name: SITE.name,
    description: SITE.description,
    url: SITE_URL,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    priceRange: SITE.priceRange,
    medicalSpecialty: "Dentistry",
    currenciesAccepted: "GBP, EUR, USD, TRY",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "International patients worldwide",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    // No aggregateRating block: SITE.stats is still placeholder, not a real,
    // verifiable figure — don't emit it as structured data. Add it back once
    // the clinic supplies real, sourced numbers.
    sameAs: [
      SITE.socials.instagram,
      SITE.socials.facebook,
      SITE.socials.youtube,
      SITE.socials.tiktok,
    ].filter(Boolean),
  };
}

export function medicalProcedureSchema(procedure: Procedure) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: `${procedure.name} in ${SITE.city}, ${SITE.country}`,
    description: procedure.summary,
    url: absoluteUrl(`/procedures/${procedure.slug}`),
    procedureType: "https://schema.org/NoncontactModuleTreatment",
    bodyLocation: "Mouth",
    howPerformed: procedure.processSteps.map((s) => s.title).join("; "),
    provider: {
      "@type": "Dentist",
      "@id": `${SITE_URL}/#clinic`,
      name: SITE.name,
    },
  };
}

/** Breadcrumb helper for procedure pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
