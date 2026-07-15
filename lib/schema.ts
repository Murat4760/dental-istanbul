import { SITE, SITE_URL, absoluteUrl } from "./site";
import type { Procedure } from "./procedures";

/**
 * JSON-LD builders. Rendered via <JsonLd> on the relevant pages.
 * No aggregateRating, no openingHoursSpecification, no priceRange: none of
 * these are real, client-confirmed figures — don't emit fabricated
 * structured data for a medical/dental business. Add each back only once
 * the clinic supplies and confirms the real value.
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
    medicalSpecialty: "Dentistry",
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
    ...(SITE.hoursConfirmed
      ? {
          openingHoursSpecification: SITE.hours
            .filter((h) => h.open !== "Closed")
            .map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.days,
              opens: h.open,
              closes: h.close,
            })),
        }
      : {}),
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
