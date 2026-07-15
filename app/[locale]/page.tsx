import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ShieldCheck,
  Award,
  MessageCircleHeart,
  PackageCheck,
  ArrowRight,
  Mail,
  Phone,
  Check,
} from "lucide-react";
import { SITE, whatsappUrl } from "@/lib/site";
import { procedures } from "@/lib/procedures";
import { getFaqsBySlugs, homeFaqSlugs } from "@/lib/faqs";
import { buildMetadata } from "@/lib/metadata";
import { dentistSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { Arc } from "@/components/ui/Arc";
import { Media } from "@/components/ui/Media";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProcedureCard } from "@/components/ProcedureCard";
import { Timeline } from "@/components/Timeline";
import { FaqAccordion } from "@/components/FaqAccordion";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: `${SITE.name} — Dental Implants, Veneers & Smile Makeovers in Istanbul`,
    description: SITE.description,
    path: "/",
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

const WHY = [
  {
    icon: ShieldCheck,
    title: "Safety-first care",
    body: "Modern facilities and a registered, qualified dental team.",
  },
  {
    icon: Award,
    title: "Experienced specialists",
    body: "A dedicated team focused on implants, cosmetic and full-arch dentistry for international patients.",
  },
  {
    icon: MessageCircleHeart,
    title: "Clear communication",
    body: "Your treatment plan explained clearly before anything begins — no pressure, no surprises.",
  },
  {
    icon: PackageCheck,
    title: "All-inclusive packages",
    body: "Treatment, hotel, and transfers coordinated for you, with an English-speaking patient manager.",
  },
];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <JsonLd data={dentistSchema()} />

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
              Dental care in {SITE.city}, {SITE.country}
            </span>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl md:text-6xl">
              A confident new smile, crafted in{" "}
              <span className="relative inline-block text-primary">
                {SITE.city}
                <Arc
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-accent"
                  strokeWidth={2.5}
                />
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              Implants, veneers, All-on-4 and full smile makeovers with a
              registered dental team, in a modern clinic built around
              international patients.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappUrl(t("whatsapp.prefill"))}
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
              alt="Reception at Rama Dental Clinic in Istanbul"
              className="shadow-card"
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute -left-3 top-8 hidden rounded-xl border border-line bg-surface/95 px-4 py-3 shadow-card backdrop-blur sm:block">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <PackageCheck className="h-4 w-4 text-primary" />
                All-inclusive packages
              </div>
              <p className="mt-0.5 text-xs text-muted">Treatment · hotel · transfers</p>
            </div>
            <div className="absolute -bottom-4 right-2 rounded-xl border border-line bg-surface/95 px-4 py-3 shadow-card backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Check className="h-4 w-4 text-primary" />
                English-speaking team
              </div>
              <p className="mt-0.5 text-xs text-muted">A coordinator by your side</p>
            </div>
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

      {/* ── Why us ───────────────────────────────────────────── */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow={`Why ${SITE.shortName}`}
            title="Care you can trust, thousands of miles from home"
            description="Choosing a clinic abroad is a big decision. Here's what makes it a confident one."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <div className="h-full rounded-card border border-line bg-surface p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-tint text-primary">
                    <card.icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Procedures ───────────────────────────────────────── */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Treatments"
              title="Procedures we specialise in"
              description="Each treatment is planned around your case, with everything explained clearly before you travel."
            />
            <Button href="/procedures" variant="ghost" rightIcon={<ArrowRight className="h-4 w-4" />}>
              {t("cta.viewProcedures")}
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <ProcedureCard procedure={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Patient journey ──────────────────────────────────── */}
      <section className="section bg-ink text-canvas">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Your journey, step by step"
            description="From first message to follow-up back home — we handle the details so you can focus on your smile."
            className="[&_h2]:text-canvas [&_p]:text-canvas/70"
          />
          <div className="mt-14 [&_.text-ink]:text-canvas [&_.text-ink-soft]:text-canvas/70 [&_.bg-line]:bg-canvas/15">
            <Timeline />
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section bg-sand/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="Patient stories"
            title="Trusted by patients from around the world"
            description="We only publish real, permission-cleared patient reviews — none are live yet."
          />
          <div className="mt-12 rounded-card border border-dashed border-line bg-surface p-10 text-center">
            <p className="text-ink-soft">
              Patient reviews will appear here once we have real, consented
              testimonials to share.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ preview ──────────────────────────────────────── */}
      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Good to know"
              title="Questions patients ask us most"
              description="Everything you need to feel confident about treatment in Istanbul."
            />
            <Button
              href="/faq"
              variant="outline"
              className="mt-6"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              {t("cta.viewAll")}
            </Button>
          </div>
          <div className="lg:col-span-3">
            <FaqAccordion items={getFaqsBySlugs(homeFaqSlugs)} />
          </div>
        </div>
      </section>

      {/* ── Final CTA — WhatsApp/phone/email, no form, no data collected ── */}
      <section id="contact" className="section bg-sand/60">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in touch"
              title="Start with a free, no-obligation conversation"
              description="Message us on WhatsApp, call, or email — our team replies quickly, usually the same day."
            />
            <ul className="mt-8 space-y-3">
              {[
                "Your treatment plan explained clearly before you commit",
                "No pressure, no obligation",
                "Guidance on timing and what to expect at your visit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-3">
              <Button
                href={whatsappUrl(t("whatsapp.prefill"))}
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
