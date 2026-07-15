import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Privacy Policy",
    description: `How ${SITE.name} collects and uses the information you share when enquiring about treatment.`,
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <section className="section">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-4xl font-semibold text-ink">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted">
          [PLACEHOLDER] Last updated: add date.
        </p>

        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Who we are
            </h2>
            <p className="mt-2">
              This website is operated by {SITE.legalName} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;), a dental clinic based in {SITE.city},{" "}
              {SITE.country}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              This website does not collect personal data
            </h2>
            <p className="mt-2">
              There is no contact form, quote form, newsletter signup or
              tracking on this site. Every contact path — WhatsApp, phone,
              email — hands you off directly to that platform (WhatsApp,
              your phone&rsquo;s dialler, your email client) rather than
              submitting anything to us through this website. We do not
              receive, store or process any personal data as a result of you
              browsing or using the contact links on this site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              If you contact us directly
            </h2>
            <p className="mt-2">
              If you message us on WhatsApp, call, or email, any information
              you choose to share (such as your name, contact details or
              photos) is handled by us as part of responding to your
              enquiry, under the privacy terms of WhatsApp or your email
              provider for that channel. We use it only to respond to you
              and do not sell it or use it for unrelated marketing.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Cookies &amp; tracking
            </h2>
            <p className="mt-2">
              This site does not use analytics, advertising or tracking
              cookies, and does not use local/session storage to store
              personal data.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Questions
            </h2>
            <p className="mt-2">
              If you have a question about this policy, contact us at{" "}
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
