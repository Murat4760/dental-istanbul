import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Tag, Check, ArrowRight, ChevronRight, Phone, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE, whatsappUrl } from "@/lib/site";
import {
  getLocalizedProcedure,
  getLocalizedProcedures,
  procedureSlugs,
} from "@/lib/procedures";
import { buildMetadata } from "@/lib/metadata";
import { medicalProcedureSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { ProcedureCard } from "@/components/ProcedureCard";

export function generateStaticParams() {
  return procedureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const procedure = getLocalizedProcedure(slug, locale);
  if (!procedure) return {};
  return buildMetadata({
    title: procedure.seo.title,
    description: procedure.seo.description,
    path: `/procedures/${slug}`,
    keywords: procedure.seo.keywords,
    ogType: "article",
    locale,
  });
}

export default async function ProcedurePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const place = await getTranslations({ locale, namespace: "place" });

  const procedure = getLocalizedProcedure(slug, locale);
  if (!procedure) notFound();

  const related = getLocalizedProcedures(locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const prefill = t("whatsapp.prefill", {
    topic: procedure.name,
    city: place("city"),
  });

  return (
    <>
      {procedure.status !== "comingSoon" && (
        <JsonLd data={await medicalProcedureSchema(procedure, locale)} />
      )}
      <JsonLd
        data={breadcrumbSchema([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.procedures"), path: "/procedures" },
          { name: procedure.name, path: `/procedures/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="section pb-0">
        <div className="container-page">
          <nav
            aria-label={t("aria.breadcrumbNav")}
            className="flex items-center gap-1.5 text-sm text-muted"
          >
            <Link href="/" className="hover:text-primary">
              {t("nav.home")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/procedures" className="hover:text-primary">
              {t("nav.procedures")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-soft">{procedure.name}</span>
          </nav>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-px w-6 bg-accent" aria-hidden="true" />
                {t(`categories.${procedure.category}`)}
                {procedure.specialty !== t(`categories.${procedure.category}`) && (
                  <>
                    <span className="text-muted" aria-hidden="true">
                      ·
                    </span>
                    {procedure.specialty}
                  </>
                )}
              </span>
              <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.03] text-ink sm:text-5xl">
                {t("procedurePage.heroTitle", {
                  name: procedure.name,
                  city: place("city"),
                  country: place("country"),
                })}
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
                {procedure.heroTagline} {procedure.summary}
              </p>
              {procedure.status === "comingSoon" && (
                <p className="mt-4 rounded-card border border-line bg-sand/60 px-4 py-3 text-sm text-ink-soft">
                  <strong className="text-ink">
                    {t("procedurePage.comingSoonTitle")}
                  </strong>{" "}
                  {t("procedurePage.comingSoonBody", {
                    name: procedure.name.toLowerCase(),
                  })}
                </p>
              )}
              <div className="mt-8 flex flex-col gap-3 pr-20 sm:flex-row sm:pr-0">
                <Button
                  href={whatsappUrl(prefill)}
                  external
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {t("cta.whatsapp")}
                </Button>
                <Button href={SITE.phoneHref} size="lg" variant="outline">
                  {SITE.phoneDisplay}
                </Button>
              </div>
            </div>
            <Media
              src={procedure.photoUrl}
              aspect={procedure.photoAspect ?? "4 / 3"}
              tone="accent"
              alt={procedure.name}
              label="[PLACEHOLDER] Treatment photo"
              className="shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              {t("procedurePage.whatItIs")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
              {procedure.whatItIs}
            </p>

            <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
              {t("procedurePage.whoItsFor")}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {procedure.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
              {t("procedurePage.process")}
            </h2>
            <ol className="mt-6 space-y-5">
              {procedure.processSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary-tint font-display text-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Key facts sidebar */}
          <aside>
            <div className="lg:sticky lg:top-28">
              <div className="rounded-card border border-line bg-surface p-6 shadow-card">
                <h2 className="font-display text-lg font-semibold text-ink">
                  {t("procedurePage.atAGlance")}
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Tag className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <dt className="text-muted">{t("procedurePage.category")}</dt>
                      <dd className="font-medium text-ink">
                        {t(`categories.${procedure.category}`)}
                      </dd>
                    </div>
                  </div>
                </dl>
                <Button
                  href={whatsappUrl(prefill)}
                  external
                  className="mt-6 w-full"
                >
                  {t("cta.whatsapp")}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related procedures */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <SectionHeading
            eyebrow={t("procedurePage.exploreMore")}
            title={t("procedurePage.relatedTreatments")}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProcedureCard
                key={p.slug}
                procedure={p}
                comingSoonLabel={t("procedurePage.comingSoon")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact — WhatsApp/phone/email, no form, no data collected */}
      <section className="section">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t("procedurePage.getInTouch")}
              title={t("procedurePage.askAbout", {
                name: procedure.shortName.toLowerCase(),
              })}
              description={t("procedurePage.contactDescription")}
            />
          </div>
          <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-3">
              <Button
                href={whatsappUrl(prefill)}
                external
                size="lg"
                className="w-full"
              >
                {t("cta.whatsapp")}
              </Button>
              <a
                href={SITE.phoneHref}
                className="flex items-center justify-center gap-2 rounded-btn border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-center gap-2 rounded-btn border border-line-strong bg-surface px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>
            <p className="mt-6 text-center text-xs leading-relaxed text-muted">
              {t("footer.noDataCollected")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
