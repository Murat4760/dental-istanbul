const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD;

/**
 * Resolve an image source.
 * - If a Cloudinary cloud is configured AND `src` is a bare public id (no
 *   protocol / leading slash), build an `f_auto,q_auto` delivery URL.
 * - Otherwise return `src` unchanged — used for Unsplash demo photos (marked
 *   [PLACEHOLDER] at each call site) and local `/public` assets.
 *
 * next/image handles the actual optimization; hosts are allow-listed in
 * next.config.ts `images.remotePatterns`.
 */
export function img(src: string): string {
  if (CLOUD && !src.startsWith("http") && !src.startsWith("/")) {
    return `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto/${src}`;
  }
  return src;
}
