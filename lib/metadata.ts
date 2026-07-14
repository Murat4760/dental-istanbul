import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { SITE, absoluteUrl } from "./site";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Path without locale prefix, e.g. "/procedures/veneers". */
  path?: string;
  keywords?: string[];
  ogType?: "website" | "article";
};

/**
 * Shared metadata builder used by every page's `generateMetadata`.
 * Emits canonical + hreflang alternates for all scaffolded locales (EN = root,
 * others prefixed) so extra languages need no metadata rework later.
 * The og:image is provided by the file-based opengraph-image convention.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogType = "website",
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  const languages: Record<string, string> = { "x-default": url };
  for (const locale of routing.locales) {
    languages[locale] =
      locale === routing.defaultLocale
        ? url
        : absoluteUrl(`/${locale}${path === "/" ? "" : path}`);
  }

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url, languages },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: ogType,
      images: [
        {
          url: absoluteUrl("/api/og"),
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/api/og")],
    },
  };
}
