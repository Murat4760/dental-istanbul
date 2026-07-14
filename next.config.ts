import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Pin the workspace root — a stray lockfile in the home dir otherwise confuses
  // Next's root inference (affects env loading + output file tracing on deploy).
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // Demo photography (Unsplash) + optional Cloudinary CDN.
    // Swap/extend when the clinic supplies its own asset host.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

// Points at ./i18n/request.ts by default.
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
