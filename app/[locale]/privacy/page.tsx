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
          [PLACEHOLDER] Last updated: add date. Have this reviewed for your
          jurisdiction (e.g. GDPR / KVKK) before publishing.
        </p>

        <div className="mt-8 space-y-6 leading-relaxed text-ink-soft">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Who we are
            </h2>
            <p className="mt-2">
              This website is operated by {SITE.legalName} (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;), a dental clinic based in {SITE.city},{" "}
              {SITE.country}. [PLACEHOLDER] Add your registered company details and
              a data-protection contact.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              What we collect
            </h2>
            <p className="mt-2">
              When you contact us or submit an enquiry form, we collect the
              details you provide — such as your name, email address, phone
              number, procedure of interest and any message. We do not knowingly
              collect more than we need to respond to your enquiry.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              How we use it
            </h2>
            <p className="mt-2">
              We use your information solely to respond to your enquiry, prepare
              an indicative treatment plan and quote, and communicate with you
              about your potential treatment. We do not sell your data, and we do
              not use it for unrelated marketing without your consent.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Sharing
            </h2>
            <p className="mt-2">
              Enquiries submitted through our form are processed by our form
              provider on our behalf. [PLACEHOLDER] Name your form/email
              processor and any other third parties, and confirm their
              safeguards.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Your rights
            </h2>
            <p className="mt-2">
              You may ask us to access, correct or delete the personal
              information you have shared with us. To do so, contact us at{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-primary underline underline-offset-2"
              >
                {SITE.email}
              </a>
              . [PLACEHOLDER] Add the specific rights and response times required
              in your jurisdiction.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-ink">
              Cookies
            </h2>
            <p className="mt-2">
              This site does not currently use analytics or advertising cookies.
              If that changes, we will add a cookie/consent notice here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
