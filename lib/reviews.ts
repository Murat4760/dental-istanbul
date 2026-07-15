/**
 * Testimonials.
 *
 * ⚠️  Empty until the clinic supplies real, permission-cleared patient
 *     reviews. Never populate this with invented testimonials — pages that
 *     read from here must render an honest empty state instead.
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

export const reviews: Review[] = [];

/** Aggregate helpers for schema / trust strip (derived from real data once supplied). */
export const reviewCount = reviews.length;
