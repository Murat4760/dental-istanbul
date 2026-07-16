import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/lib/site";

// Dynamic OpenGraph image served at /api/og?locale=<locale> (excluded from
// the i18n proxy). Referenced explicitly by lib/metadata.ts so every page
// gets a clean og:image in its own page locale.
//
// Arabic falls back to English text here: satori (the renderer behind
// next/og's ImageResponse) can't shape Arabic's contextual letter-joining
// forms and throws ("lookupType: 5 - substFormat: 3 is not yet supported"),
// crashing the route entirely — confirmed 2026-07-16 across en/tr/ru/de
// (all render fine) vs ar (hard failure, no image at all). A crashed image
// is worse than an English one, so this is a deliberate fallback for this
// one non-critical surface, not an oversight — every other page keeps full
// Arabic content; only the social-share preview image is affected.
const OG_FONT_SAFE_LOCALE: Record<string, string> = { ar: "en" };

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedLocale = searchParams.get("locale") ?? "en";
  const locale = OG_FONT_SAFE_LOCALE[requestedLocale] ?? requestedLocale;
  const t = await getTranslations({ locale, namespace: "og" });
  const place = await getTranslations({ locale, namespace: "place" });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "linear-gradient(135deg, #0E5C57 0%, #0A4A46 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>
          {SITE.shortName}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 880 }}>
            {t("tagline", { city: place("city") })}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.82)" }}>
            {t("services")}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 64, height: 8, borderRadius: 9999, background: "#C46A3F" }} />
          <div style={{ display: "flex", marginLeft: 20, fontSize: 26, color: "rgba(255,255,255,0.9)" }}>
            {t("footer", { city: place("city"), country: place("country") })}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
