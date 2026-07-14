/**
 * ────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for the clinic.
 *
 * Everything the clinic must supply is a [PLACEHOLDER] here. Swapping this file
 * (plus the data files in lib/*) reskins the whole site to a real clinic — no
 * component or page code changes. City is locked to Istanbul (the SEO anchor).
 *
 * ⚠️  Do NOT publish the trust stats or accreditations below until the clinic
 *     confirms they are real and verifiable. They exist so the UI renders; they
 *     are placeholders, not claims.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type OpeningHour = {
  /** Human label, e.g. "Monday – Friday" */
  days: string;
  /** "09:00" or "Closed" */
  open: string;
  /** "19:00" or "" */
  close: string;
};

export const SITE = {
  // ─── Identity ─────────────────────────────────────────────────────────────
  name: "Auralis Dental Clinic", // [PLACEHOLDER] real clinic name
  shortName: "Auralis", // [PLACEHOLDER] wordmark / short brand
  legalName: "Auralis Dental Clinic", // [PLACEHOLDER] registered legal entity
  tagline: "World-class dentistry in the heart of Istanbul",
  description:
    "Accredited dental care for international patients in Istanbul — dental implants, veneers, All-on-4 and full smile makeovers, with all-inclusive packages and English-speaking coordinators.",

  // ─── Location (city locked to Istanbul) ────────────────────────────────────
  city: "Istanbul",
  country: "Turkey",
  countryCode: "TR",
  address: {
    street: "[PLACEHOLDER: Street address]",
    district: "[PLACEHOLDER: District, e.g. Nişantaşı, Şişli]",
    city: "Istanbul",
    region: "İstanbul",
    postalCode: "[PLACEHOLDER]",
    country: "Turkey",
  },
  /** [PLACEHOLDER] clinic coordinates — currently Istanbul city centre. */
  geo: { lat: 41.0369, lng: 28.9857 },

  // ─── Contact ───────────────────────────────────────────────────────────────
  phoneDisplay: "[PLACEHOLDER: +90 5xx xxx xx xx]",
  phoneHref: "tel:+900000000000", // [PLACEHOLDER]
  email: "hello@auralisdental.com", // [PLACEHOLDER]

  // ─── Opening hours (display + schema use this) ─────────────────────────────
  hours: [
    { days: "Monday – Friday", open: "09:00", close: "19:00" },
    { days: "Saturday", open: "09:00", close: "17:00" },
    { days: "Sunday", open: "Closed", close: "" },
  ] as OpeningHour[],

  // ─── Socials ───────────────────────────────────────────────────────────────
  socials: {
    instagram: "https://instagram.com/", // [PLACEHOLDER]
    facebook: "https://facebook.com/", // [PLACEHOLDER]
    youtube: "", // [PLACEHOLDER] optional
    tiktok: "", // [PLACEHOLDER] optional
  },

  // ─── Trust stats — [PLACEHOLDER] replace with REAL, verifiable figures ──────
  stats: {
    yearsActive: 15,
    patientsTreated: 12000,
    countriesServed: 45,
    rating: 4.9,
    reviewCount: 840,
  },

  /** Google price-range style indicator for schema.org (not a real price). */
  priceRange: "££",

  // ─── Accreditations — only display ones the clinic actually holds ──────────
  accreditations: [
    {
      name: "[PLACEHOLDER: Ministry of Health licensed]",
      note: "Turkish Ministry of Health authorisation number",
    },
    { name: "[PLACEHOLDER: ISO 9001]", note: "Quality management" },
    { name: "[PLACEHOLDER: Accreditation 3]", note: "" },
    { name: "[PLACEHOLDER: Accreditation 4]", note: "" },
  ],
} as const;

// ─── Environment-derived values ───────────────────────────────────────────────

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

/** Build a wa.me link, optionally with a prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Absolute URL for a path, used for canonical / OG / sitemap. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
