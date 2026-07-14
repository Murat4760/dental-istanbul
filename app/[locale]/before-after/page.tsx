import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { procedures } from "@/lib/procedures";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Before & After",
    description:
      "Real, consented before-and-after results from our dental patients in Istanbul — implants, veneers, crowns and smile makeovers.",
    path: "/before-after",
  });
}

export default async function BeforeAfterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const pairs = procedures.flatMap((p) =>
    p.beforeAfter.map((ba) => ({ ba, procedure: p })),
  );

  return (
    <>
      <section className="section pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Before & after"
            title="Real results, honestly presented"
            description="Drag each slider to compare. We only ever publish genuine, permission-cleared patient photography — never stock imagery."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pairs.map(({ ba, procedure }, i) => (
            <Reveal key={`${procedure.slug}-${i}`} delay={(i % 3) * 60}>
              <div>
                <BeforeAfter pair={ba} />
                <p className="mt-3 text-sm font-medium text-ink-soft">
                  {procedure.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="container-page">
          <p className="mt-8 text-xs text-muted">
            [PLACEHOLDER] Demonstration slots — replace with the clinic&rsquo;s own
            before/after photography. Written patient consent is required before
            publishing any real result.
          </p>
          <p className="mt-3 text-xs text-muted">{t("footer.disclaimer")}</p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
