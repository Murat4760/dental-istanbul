import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { getLocalizedProcedures } from "@/lib/procedures";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcedureCard } from "@/components/ProcedureCard";
import { CTABand } from "@/components/CTABand";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: `Dental Procedures in ${SITE.city}, ${SITE.country}`,
    description:
      "Explore our dental treatments for international patients in Istanbul — implants, veneers, All-on-4, crowns, orthodontics and teeth whitening.",
    path: "/procedures",
    keywords: [
      "dental procedures Turkey",
      "dental treatments Istanbul",
      "dental implants Turkey",
      "veneers Istanbul",
      "orthodontics Turkey",
    ],
  });
}

export default async function ProceduresPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <section className="section pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow={t("procedurePage.treatmentsEyebrow")}
            title={
              <>
                Dental procedures in {SITE.city},{" "}
                <span className="text-primary">{SITE.country}</span>
              </>
            }
            description={t("procedurePage.gridDescription")}
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {getLocalizedProcedures(locale).map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <ProcedureCard
                procedure={p}
                comingSoonLabel={t("procedurePage.comingSoon")}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
