import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ShieldCheck,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import { getLocalizedProcedures } from "@/lib/procedures";
import { buildMetadata } from "@/lib/metadata";
import { dentistSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { Arc } from "@/components/ui/Arc";
import { Media } from "@/components/ui/Media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcedureCard } from "@/components/ProcedureCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  const place = await getTranslations({ locale, namespace: "place" });
  return buildMetadata({
    title: t("metaTitle", { name: SITE.name, city: place("city") }),
    description: SITE.description,
    path: "/",
    locale,
    keywords: [
      "dental treatment Turkey",
      "dentist Istanbul",
      "dental implants Turkey",
      "veneers Istanbul",
      "dental tourism Turkey",
      "Hollywood smile Istanbul",
    ],
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const place = await getTranslations({ locale, namespace: "place" });
  const prefill = t("whatsapp.prefill", {
    topic: t("whatsapp.defaultTopic"),
    city: place("city"),
  });

  return (
    <>
      <JsonLd data={await dentistSchema(locale)} />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_0%,var(--color-primary-tint),transparent)]"
        />
        <Arc
          className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-40 w-[80rem] max-w-none -translate-x-1/2 text-primary/10"
          strokeWidth={1.5}
        />
        <div className="container-page grid items-center gap-12 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              {t("home.badge", { city: place("city"), country: place("country") })}
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              {t("home.heroTitlePrefix")}{" "}
              <span className="relative inline-block text-primary">
                {place("city")}
                <Arc
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent"
                  strokeWidth={2.5}
                />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              {t("home.heroDescription")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          {/* Hero visual */}
          <div className="relative">
            <Media
              src="/images/clinic/reception.jpg"
              aspect="4 / 5"
              tone="teal"
              alt={t("home.heroImageAlt", { name: SITE.name, city: place("city") })}
              className="shadow-card"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>

        {/*
          Trust strip (years/patients/countries/rating) is hidden until the
          clinic supplies real, verifiable figures — see the "do NOT publish"
          warning on SITE.stats in lib/site.ts. Re-enable by restoring:
          <div className="border-y border-line bg-surface/60">
            <div className="container-page py-10"><TrustStrip /></div>
          </div>
        */}
      </section>

      {/*
        "Why us" section removed 2026-07-16: every card asserted something
        not confirmed by the 2026-07-14 intake form (facility quality, team
        size/experience, package/hotel/transfer logistics, staff roles) or
        risked Sağlık Bakanlığı ad-compliance exposure. Re-add once the
        clinic supplies real, verifiable differentiators — do not invent
        replacements. Was:
        <section className="section">
          <div className="container-page">
            <SectionHeading
              eyebrow={`Why ${SITE.shortName}`}
              title="Care you can trust, thousands of miles from home"
              description="Choosing a clinic abroad is a big decision. Here's what makes it a confident one."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((card, i) => ( ... ))}
            </div>
          </div>
        </section>
      */}

      {/* ── Procedures ───────────────────────────────────────── */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow={t("procedurePage.treatmentsEyebrow")}
              title={t("home.proceduresTitle")}
              description={t("procedurePage.gridDescription")}
            />
            <Button href="/procedures" variant="ghost" rightIcon={<ArrowRight className="h-4 w-4" />}>
              {t("cta.viewProcedures")}
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {getLocalizedProcedures(locale).map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <ProcedureCard
                  procedure={p}
                  comingSoonLabel={t("procedurePage.comingSoon")}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA — WhatsApp/phone/email, no form, no data collected ── */}
      <section id="contact" className="section bg-sand/60">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={t("procedurePage.getInTouch")}
              title={t("home.ctaTitle")}
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
