import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

// Dynamic OpenGraph image served at /api/og (excluded from the i18n proxy).
// Referenced explicitly by lib/metadata.ts so every page gets a clean og:image.
export function GET() {
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
            World-class dentistry in {SITE.city}
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.82)" }}>
            Implants · Veneers · All-on-4 · Smile makeovers
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 64, height: 8, borderRadius: 9999, background: "#C46A3F" }} />
          <div style={{ display: "flex", marginLeft: 20, fontSize: 26, color: "rgba(255,255,255,0.9)" }}>
            {SITE.city}, {SITE.country} · Free quote &amp; consultation
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
