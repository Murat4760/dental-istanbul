import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLocalizedProcedures } from "@/lib/procedures";
import { buildMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcedureCard } from "@/components/ProcedureCard";
import { CTABand } from "@/components/CTABand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "proceduresPage" });
  const place = await getTranslations({ locale, namespace: "place" });
  return buildMetadata({
    title: t("metaTitle", { city: place("city"), country: place("country") }),
    description: t("metaDescription", { city: place("city") }),
    path: "/procedures",
    locale,
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
  const place = await getTranslations({ locale, namespace: "place" });

  return (
    <>
      <section className="section pb-0">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow={t("procedurePage.treatmentsEyebrow")}
            title={t("proceduresPage.heroTitle", {
              city: place("city"),
              country: place("country"),
            })}
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
