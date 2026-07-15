import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";
import { procedureSlugs } from "@/lib/procedures";

const STATIC_PATHS = [
  "",
  "/procedures",
  "/about",
  "/reviews",
  "/faq",
  "/contact",
  "/privacy",
];

function urlFor(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${SITE_URL}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...procedureSlugs.map((s) => `/procedures/${s}`),
  ];

  return paths.map((path) => ({
    url: urlFor(routing.defaultLocale, path),
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/procedures/") ? 0.8 : 0.6,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, urlFor(l, path)]),
      ),
    },
  }));
}
