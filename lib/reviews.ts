/**
 * Testimonials.
 *
 * ⚠️  [PLACEHOLDER] These are SAMPLE reviews written to demonstrate layout only.
 *     Replace every entry with real, permission-cleared patient reviews before
 *     going live. Do not publish invented testimonials.
 */

export type Review = {
  id: string;
  name: string;
  country: string;
  /** Emoji flag for a light visual cue. */
  flag: string;
  rating: number;
  procedure: string;
  quote: string;
  /** Short highlight used in compact cards. */
  highlight: string;
  hasVideo?: boolean;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Sarah M.",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    procedure: "Porcelain Veneers",
    highlight: "Genuinely natural — not a 'fake' smile.",
    quote:
      "I was nervous about travelling for treatment, but the coordination was seamless from the first message. The digital smile design meant I knew exactly what I'd get, and the result looks completely natural. Worth every mile.",
    hasVideo: true,
  },
  {
    id: "r2",
    name: "Thomas B.",
    country: "Germany",
    flag: "🇩🇪",
    rating: 5,
    procedure: "Dental Implants",
    highlight: "Two calm visits, zero surprises.",
    quote:
      "Everything was explained clearly before I flew out, including the plan for both visits. The clinic was spotless and modern, and my implant feels just like a real tooth. The hotel and transfers were sorted for me.",
  },
  {
    id: "r3",
    name: "Amira K.",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    rating: 5,
    procedure: "All-on-4 Implants",
    highlight: "I left with a fixed smile the same week.",
    quote:
      "After years of struggling with a denture, having fixed teeth again changed everything. The team was patient and reassuring, and the coordinator checked in on me throughout my stay in Istanbul.",
    hasVideo: true,
  },
  {
    id: "r4",
    name: "James T.",
    country: "Ireland",
    flag: "🇮🇪",
    rating: 5,
    procedure: "Dental Crowns",
    highlight: "Half the price, none of the compromise.",
    quote:
      "I'd been quoted an eye-watering figure at home. Here I got the same high-quality zirconia crowns, a proper treatment plan, and a short city break too. Communication after I got home was excellent.",
  },
  {
    id: "r5",
    name: "Elena R.",
    country: "Netherlands",
    flag: "🇳🇱",
    rating: 5,
    procedure: "Teeth Whitening",
    highlight: "Bright, even, and done in a day.",
    quote:
      "Quick, comfortable and a noticeable difference in a single appointment. The dentist talked me through aftercare so the result would last. Lovely, professional team.",
  },
  {
    id: "r6",
    name: "David P.",
    country: "United States",
    flag: "🇺🇸",
    rating: 5,
    procedure: "Porcelain Veneers",
    highlight: "The planning is what won me over.",
    quote:
      "They reviewed my photos and X-rays before I committed to anything, and the quote didn't change. I felt like a patient, not a transaction. My smile looks fantastic.",
  },
];

/** Aggregate helpers for schema / trust strip (derived from real data once supplied). */
export const reviewCount = reviews.length;
