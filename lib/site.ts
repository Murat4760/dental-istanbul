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
  // Real name/handle/phone/address below are from the client's own public
  // Instagram bio (@ramadentallclinic). legalName is from the client's
  // 2026-07-14 intake form.
  name: "Rama Dental Clinic",
  shortName: "Rama Dental",
  legalName: "RAMADENT AĞIZ VE DİŞ SAĞLIĞI HİZMETLERİ LİMİTED ŞİRKETİ",
  tagline: "Your Smile, Our Expertise",
  description:
    "Dental care for international patients in Istanbul — dental implants, veneers and orthodontics.",

  // ─── Location (city locked to Istanbul) ────────────────────────────────────
  city: "Istanbul",
  country: "Turkey",
  countryCode: "TR",
  address: {
    street: "Oğuzhan Cd. No:23/D",
    district: "Kavaklı, Beylikdüzü",
    city: "Istanbul",
    region: "İstanbul",
    postalCode: "34520",
    country: "Turkey",
  },
  /** Approximate — Beylikdüzü district centre, not the exact building.
   *  [PLACEHOLDER] Replace with the clinic's precise coordinates. */
  geo: { lat: 41.0035, lng: 28.6425 },

  // ─── Contact ───────────────────────────────────────────────────────────────
  // Phone is the number listed in the clinic's Instagram bio for contact.
  // Confirmed via the 2026-07-14 intake form as also the WhatsApp number
  // (NEXT_PUBLIC_WHATSAPP_NUMBER) — see .env.local.
  phoneDisplay: "+90 506 774 34 34",
  phoneHref: "tel:+905067743434",
  email: "info@ramadent.com",

  // ─── Opening hours (display + schema use this) ─────────────────────────────
  // Not confirmed with the client — the 2026-07-14 intake form left this
  // blank. `hoursConfirmed: false` means every consumer must render an
  // honest "hours pending" note instead of these placeholder times.
  hoursConfirmed: false,
  hours: [
    { days: "Monday – Friday", open: "09:00", close: "19:00" },
    { days: "Saturday", open: "09:00", close: "17:00" },
    { days: "Sunday", open: "Closed", close: "" },
  ] as OpeningHour[],

  // ─── Socials ───────────────────────────────────────────────────────────────
  socials: {
    instagram: "https://instagram.com/ramadentallclinic",
    facebook: "", // [PLACEHOLDER] not confirmed
    youtube: "", // [PLACEHOLDER] optional
    tiktok: "", // [PLACEHOLDER] optional
  },

  // ─── Trust stats & accreditations ───────────────────────────────────────────
  // The 2026-07-14 intake form: no accreditations held, no stats cleared for
  // publication. Do not add fabricated figures or claimed certifications —
  // this site advertises medical/dental services and must not invent them.
} as const;

// ─── Environment-derived values ───────────────────────────────────────────────

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

/**
 * Blocks search indexing until the clinic's real content (§1–4 of
 * HANDOFF.md) replaces the placeholders. Flip to "true" at go-live.
 */
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

/** Build a wa.me link, optionally with a prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Absolute URL for a path, used for canonical / OG / sitemap. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
