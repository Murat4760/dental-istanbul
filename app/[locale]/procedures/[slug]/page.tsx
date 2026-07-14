import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Clock, Tag, Wallet, Check, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { SITE, whatsappUrl } from "@/lib/site";
import {
  getProcedure,
  procedureSlugs,
  procedures,
} from "@/lib/procedures";
import { getFaqsBySlugs } from "@/lib/faqs";
import { buildMetadata } from "@/lib/metadata";
import { medicalProcedureSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { ProcedureCard } from "@/components/ProcedureCard";

export function generateStaticParams() {
  return procedureSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedure(slug);
  if (!procedure) return {};
  return buildMetadata({
    title: procedure.seo.title,
    description: procedure.seo.description,
    path: `/procedures/${slug}`,
    keywords: procedure.seo.keywords,
    ogType: "article",
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

  const procedure = getProcedure(slug);
  if (!procedure) notFound();

  const faqs = getFaqsBySlugs(procedure.faqSlugs);
  const related = procedures.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <JsonLd data={medicalProcedureSchema(procedure)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Procedures", path: "/procedures" },
          { name: procedure.name, path: `/procedures/${slug}` },
        ])}
      />

      {/* Hero */}
      <section className="section pb-0">
        <div className="container-page">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-sm text-muted"
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/procedures" className="hover:text-primary">
              {t("nav.procedures")}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-ink-soft">{procedure.name}</span>
          </nav>

          <div className="mt-6 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-px w-6 bg-accent" aria-hidden="true" />
              {procedure.category}
            </span>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.03] text-ink sm:text-5xl">
              {procedure.name} in {SITE.city},{" "}
              <span className="text-primary">{SITE.country}</span>
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-ink-soft">
              {procedure.heroTagline} {procedure.summary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#quote" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {t("cta.freeQuote")}
              </Button>
              <Button
                href={whatsappUrl(
                  `Hello, I'd like to ask about ${procedure.name} in Istanbul.`,
                )}
                external
                size="lg"
                variant="outline"
              >
                {t("cta.whatsapp")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content + sidebar */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-ink">
              What it is
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
              {procedure.whatItIs}
            </p>

            <h2 className="mt-12 font-display text-2xl font-semibold text-ink">
              Who it&rsquo;s for
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
              The process
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
                  At a glance
                </h2>
                <dl className="mt-5 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <dt className="text-muted">Time in {SITE.city}</dt>
                      <dd className="font-medium text-ink">
                        {procedure.daysInIstanbul}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tag className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <dt className="text-muted">Category</dt>
                      <dd className="font-medium text-ink">
                        {procedure.category}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wallet className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <dt className="text-muted">Price</dt>
                      <dd className="font-medium text-ink">
                        {procedure.priceFrom}
                      </dd>
                      <p className="mt-1 text-xs text-muted">
                        {procedure.priceNote}
                      </p>
                    </div>
                  </div>
                </dl>
                <Button href="#quote" className="mt-6 w-full">
                  {t("cta.freeQuote")}
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Before / after */}
      {procedure.beforeAfter.length > 0 && (
        <section className="section bg-sand/60">
          <div className="container-page">
            <SectionHeading
              eyebrow="Before & after"
              title={`${procedure.shortName} results`}
              description="Drag to compare. We only publish real, consented patient photography."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {procedure.beforeAfter.map((ba, i) => (
                <Reveal key={i} delay={i * 60}>
                  <BeforeAfter pair={ba} />
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted">
              [PLACEHOLDER] Demonstration slots — replace with the clinic&rsquo;s
              own before/after photography (patient consent required).
            </p>
            <p className="mt-3 text-xs text-muted">{t("footer.disclaimer")}</p>
          </div>
        </section>
      )}

      {/* Related FAQs */}
      {faqs.length > 0 && (
        <section className="section">
          <div className="container-page grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="FAQ"
                title={`${procedure.shortName} questions`}
                description="The things patients most often ask about this treatment."
              />
            </div>
            <div className="lg:col-span-3">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related procedures */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <SectionHeading eyebrow="Explore more" title="Related treatments" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProcedureCard key={p.slug} procedure={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Free quote"
              title={`Get a plan for your ${procedure.shortName.toLowerCase()}`}
              description="Send your details or a few photos and our patient coordinator will reply within 24 hours with an indicative plan and quote."
            />
          </div>
          <QuoteForm id="quote" defaultProcedure={procedure.name} showHeader={false} />
        </div>
      </section>
    </>
  );
}
