import { getTranslations } from "next-intl/server";
import { SITE, SITE_URL, absoluteUrl } from "./site";
import type { Procedure } from "./procedures";

/**
 * JSON-LD builders. Rendered via <JsonLd> on the relevant pages.
 * No aggregateRating, no openingHoursSpecification, no priceRange: none of
 * these are real, client-confirmed figures — don't emit fabricated
 * structured data for a medical/dental business. Add each back only once
 * the clinic supplies and confirms the real value.
 */

export async function dentistSchema(locale: string) {
  const t = await getTranslations({ locale, namespace: "schema" });
  const hours = await getTranslations({ locale, namespace: "hours" });
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#clinic`,
    name: SITE.name,
    description: SITE.description,
    url: SITE_URL,
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    medicalSpecialty: t("medicalSpecialty"),
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
      name: t("areaServed"),
    },
    ...(SITE.hoursConfirmed
      ? {
          openingHoursSpecification: SITE.hours
            .filter((h) => h.open !== "")
            .map((h) => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: hours(h.daysKey),
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

export async function medicalProcedureSchema(procedure: Procedure, locale: string) {
  const t = await getTranslations({ locale, namespace: "schema" });
  const place = await getTranslations({ locale, namespace: "place" });
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: `${procedure.name} in ${place("city")}, ${place("country")}`,
    description: procedure.summary,
    url: absoluteUrl(`/procedures/${procedure.slug}`),
    procedureType: "https://schema.org/NoncontactModuleTreatment",
    bodyLocation: t("bodyLocation"),
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
