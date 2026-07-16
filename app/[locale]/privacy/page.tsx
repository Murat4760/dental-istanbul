import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return buildMetadata({
    title: t("title"),
    description: t("metaDescription", { name: SITE.name }),
    path: "/privacy",
    locale,
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });
  const place = await getTranslations({ locale, namespace: "place" });

  return (
    <section className="section">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-ink">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm text-muted">{t("lastUpdated")}</p>

        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t("whoWeAreTitle")}
            </h2>
            <p className="mt-2">
              {t("whoWeAreBody", {
                legalName: SITE.legalName,
                city: place("city"),
                country: place("country"),
              })}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t("noDataTitle")}
            </h2>
            <p className="mt-2">{t("noDataBody")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t("directContactTitle")}
            </h2>
            <p className="mt-2">{t("directContactBody")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t("cookiesTitle")}
            </h2>
            <p className="mt-2">{t("cookiesBody")}</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              {t("questionsTitle")}
            </h2>
            <p className="mt-2">
              {t("questionsBody")}{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-primary underline underline-offset-2"
              >
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
