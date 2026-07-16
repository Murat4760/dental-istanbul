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
  /** Current page locale — drives og:locale and the OG image's language. */
  locale?: string;
};

/** Maps a routing locale to the IETF/OG locale tag social platforms expect. */
const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  tr: "tr_TR",
  ar: "ar_SA",
  ru: "ru_RU",
  de: "de_DE",
};

/**
 * Shared metadata builder used by every page's `generateMetadata`.
 * Emits canonical + hreflang alternates for all scaffolded locales (EN = root,
 * others prefixed) so extra languages need no metadata rework later.
 * The og:image is provided by the /api/og route, passed the current locale.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogType = "website",
  locale = routing.defaultLocale,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImageUrl = absoluteUrl(`/api/og?locale=${locale}`);

  const languages: Record<string, string> = { "x-default": url };
  for (const loc of routing.locales) {
    languages[loc] =
      loc === routing.defaultLocale
        ? url
        : absoluteUrl(`/${loc}${path === "/" ? "" : path}`);
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
      locale: OG_LOCALE[locale] ?? OG_LOCALE[routing.defaultLocale],
      type: ogType,
      images: [
        {
          url: ogImageUrl,
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
      images: [ogImageUrl],
    },
  };
}
