# Go-Live Checklist

The site is built with **realistic placeholder content** so it looks and works
like the finished product. Before launch, replace every `[PLACEHOLDER]` with the
clinic's real, verified details. They are centralised in `lib/*` so this is a
data edit, not a rebuild.

> Find every remaining item any time with:
> `grep -rn "PLACEHOLDER" app components lib`

## 1. Clinic details — `lib/site.ts`
- [x] `name`, `shortName` — "Rama Dental Clinic" / "Rama Dental", from the
      client's public Instagram bio (@ramadentallclinic)
- [x] `legalName` — RAMADENT AĞIZ VE DİŞ SAĞLIĞI HİZMETLERİ LİMİTED ŞİRKETİ,
      from the 2026-07-14 client intake form
- [x] `address` (street, district, postal code) — district corrected to
      Beylikdüzü (was wrongly Büyükçekmece) per the 2026-07-14 intake form
- [ ] `geo` (lat/lng) — currently the Beylikdüzü district centre, not the
      exact building; get precise coordinates before enabling the map embed
- [x] `phoneDisplay` **and** `phoneHref` — from Instagram bio
- [x] Confirmed the same number is the **WhatsApp** number (2026-07-14 intake
      form) — set in `.env.local`; still needs setting on Vercel prod too
- [x] `email` — info@ramadent.com, from the 2026-07-14 intake form
- [ ] `hours` (opening times) — not on Instagram; confirm with client, then
      **also update `lib/schema.ts`** `openingHoursSpecification`
- [x] `socials.instagram`
- [ ] `socials` (Facebook / etc.)
- [ ] `stats` — years, patients treated, countries, rating, review count
      ⚠️ **Do not publish unverified numbers.** These feed the trust strip *and*
      the `AggregateRating` schema. Use real, defensible figures only.
      (2026-07-14 intake form left all of these blank and the client
      explicitly answered "No" to being ready to verify/publish them.)
- [ ] `accreditations` — list **only** ones the clinic actually holds
      (2026-07-14 intake form: no accreditations held, not a HealthTürkiye
      member, no international health-tourism authorisation, no complication
      insurance — do not claim any of these anywhere on the site)
- [x] **Orthodontics** — added as a 6th procedure in `lib/procedures.ts`
      (2026-07-16, was previously gated `status: "comingSoon"`). Now live like
      the other 5: full `MedicalProcedure` schema, no "coming soon" badge.
      `daysInIstanbul` uses truthful qualitative copy ("plan set in Istanbul;
      monitored over following months") rather than a fabricated day count,
      since it's genuinely a multi-month, not fixed-visit, treatment. Still
      open: real number of in-person visits / remote check-in cadence — ask
      the client (see the updated intake-form HTML).

## 2. Treatments — `lib/procedures.ts`
- [x] No prices anywhere on this site (deliberate — see §6). `priceFrom` /
      `priceNote` fields were removed entirely, not left as placeholders.
- [ ] Review copy for accuracy against how the clinic actually works

## 3. People & proof
- [~] `lib/doctors.ts` — real dentists: names, titles, credentials, registration
      numbers, bios (no invented practitioners). `d1` (Ferhat Ramazani, Sicil
      No: 20190201022/51734) confirmed via the 2026-07-14 intake form; bio
      still pending. Add a second/third entry only once the clinic supplies
      another real, verifiable dentist.
- [ ] **Reviews/testimonials** — the whole feature (`/reviews` page,
      `ReviewCard`, `lib/reviews.ts`, the home page section) was removed
      entirely on 2026-07-17 rather than left as an empty state (was
      sample/fake testimonials before that — never invent reviews). Re-add
      only once real, permission-cleared patient reviews exist.
      ⚠️ The client's Instagram has real testimonial posts (Molly, Mathew,
      Hanna, Chris), but those were posted for Instagram, not confirmed as
      cleared for reuse on this site — don't copy them in without the
      client's direct, explicit go-ahead alongside the actual photo files.

## 4. Photography
All photo slots render as branded placeholders via `components/ui/Media.tsx`
until a `src` is passed. Real, consented clinic interior photos are already
wired in (`public/images/clinic/*.jpg`, from the client 2026-07-16) on the
home hero and the About page gallery.
- [x] Home hero visual — reception photo
- [x] Clinic interior gallery (About) — 5 real photos
- [ ] Doctor headshots
- [x] **Before/after photos — dropped permanently (2026-07-16 decision).**
      Not just blocked on missing consent: the client decided not to pursue
      this feature at all, so there's no outstanding consent/legal-read task
      to track. The feature (component, `/before-after` page, `beforeAfter`
      data field) stays removed from the codebase.
- [ ] Map embed (Contact) — swap the placeholder for a real map once precise
      coordinates are confirmed
- [ ] `favicon` / logo — replace `app/favicon.ico`

## 5. Environment variables (Vercel)
- [ ] `NEXT_PUBLIC_SITE_URL` — the production domain
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` — intl format, digits only
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD` — optional, if using Cloudinary for images
- [ ] `NEXT_PUBLIC_ALLOW_INDEXING` — leave unset/false until go-live content is confirmed

There is no Formspree/form env var — the contact form (`QuoteForm`, `react-hook-form`,
`zod`, Formspree) was removed entirely. Every "get in touch" action opens
WhatsApp, the phone dialler, or an email client directly. This is deliberate:
**this site collects no personal data of its own** (see the rewritten
`/privacy` page) — nothing to configure, nothing to secure, no KVKK exposure
from this site's own data handling.

## 6. Legal & claims
- [x] `app/[locale]/privacy/page.tsx` — rewritten to state plainly that this
      site collects no personal data (no form, no analytics, no tracking).
      Still worth a jurisdiction-specific legal read before go-live.
- [x] No pricing anywhere (`/pricing` page removed, all "quote"/price copy
      rewritten) and no fabricated "accredited" claims (the 2026-07-14 intake
      form: no accreditations held) — both were previously present in SEO
      meta, hero copy and an FAQ answer and have been corrected.
- [ ] **Health-tourism positioning vs. missing certificate**: this site is
      built as the abroad-facing property, but the clinic does not yet hold
      the *Uluslararası Sağlık Turizmi Yetki Belgesi* (2026-07-14 intake
      form). `NEXT_PUBLIC_ALLOW_INDEXING` is off, so this isn't
      search-indexed yet, but the abroad-facing marketing framing ("for
      international patients" copy) is otherwise live as-is — confirm this
      is fine to keep once the certificate lands, or scope down before
      indexing.
- [ ] **2026-07-16 update — `tr` locale hidden from the switcher, not resolved.**
      A web search on 2026-07-16 confirmed the *Sağlık Hizmetlerinde Tanıtım
      ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik* took effect
      12 Kasım 2025: promotion aimed at people living in Turkey is banned
      outright, and package/discount/campaign advertising for health
      tourism is only permitted for clinics holding the *Uluslararası
      Sağlık Turizmi Yetki Belgesi*, and only on a **separate**,
      non-Turkish-language platform not accessible from Turkey. Rama Dental
      doesn't hold that certificate, and `tr` lives on this same
      domain/property rather than a separate one — real tension with both
      provisions, independent of translation quality. As an interim,
      reversible mitigation, `tr` was removed from the public
      `components/layout/LanguageSwitcher.tsx` dropdown (routing, messages,
      and `lib/procedures.tr.ts` all stay intact in the codebase — a direct
      `/tr/...` link still works, it's just not offered as a choice). This
      is a business/legal call, not a code fix — decide with legal counsel
      whether to pursue the certificate, restructure into separate
      domestic/abroad-facing properties, or something else, then either
      re-enable `tr` in the switcher or remove it from `i18n/routing.ts`
      entirely.
      **2026-07-16 re-confirmation:** re-reviewed as part of a second audit
      pass the same day — client confirmed this mitigation (hidden from the
      switcher, `/tr/...` still reachable by direct URL) is acceptable for
      now, pending the same legal read. No code change.
- [x] **2026-07-16 unverified-claims sweep.** Removed the "Why us" section
      and both hero floating chips on the home page (asserted an unconfirmed
      team size, facility quality, and "all-inclusive packages"/hotel/
      transfer logistics — the exact category of claim the Nov 2025
      regulation restricts without the health-tourism certificate, see
      above). Fixed `SITE.description`, which named specific patient-origin
      countries ("Turkey, France, Germany, Bulgaria and Iran") never
      confirmed by the intake form — this was live on the About page, in
      page metadata, and in the `Dentist` JSON-LD. Changed every "a
      registered dental team" reference to "a registered dentist" (only one
      dentist is confirmed on record, see §3). Reworded a "gold standard"
      superlative and a "safer/more effective than over-the-counter kits"
      comparative claim (teeth-whitening) — same class of issue as the
      already-fixed "World-class dentistry".
      ⚠️ **Regression found and re-fixed, same day:** the later "full TR
      content localization" commit reintroduced both of these — "altın
      standarttır" (gold standard) in `lib/procedures.tr.ts` dental-implants
      copy, and "eczane ürünlerine göre daha güvenli ve etkilidir"
      (safer/more effective than pharmacy products) in the teeth-whitening
      copy — neither existed in the English base they were translated from.
      Fixed again in `lib/procedures.tr.ts`; worth double-checking future
      translation commits against the English base rather than assuming a
      prior fix holds. Dropped "free"/price-adjacent
      wording ("Free online consultation", "a free, no-obligation
      conversation") and an "affordable dental implants Turkey" SEO keyword,
      consistent with this site's own "no prices anywhere" policy
      (`lib/procedures.ts` header comment).
- [ ] Confirm no medical claim on the site overstates outcomes

## 7. Languages
- [x] UI chrome (nav, buttons, footer, language switcher) translated into
      TR/AR/RU/DE as of 2026-07-16 — see `messages/<locale>.json`. Also fixed
      2026-07-16: several section headings on the procedures pages ("What it
      is", "Who it's for", "The process", "Home" breadcrumb, "Coming soon")
      were hardcoded English JSX literals that never went through
      `next-intl`'s `t()` — now wired up in all 5 locales.
      **`tr` is no longer offered in `components/layout/LanguageSwitcher.tsx`**
      as of 2026-07-16 — see §6's new item above. `en`/`ar`/`ru`/`de` remain
      live.
- [x] **Deep content (`lib/procedures.ts`) is now localized for all 5
      locales.** `getLocalizedProcedure(s)` helpers in `lib/procedures.ts`
      merge a per-locale override onto the English base; every field (name,
      tagline, summary, process steps, SEO) has a real translation in
      `lib/procedures.tr.ts` (2026-07-16), and now also `lib/procedures.ar.ts`,
      `lib/procedures.ru.ts`, `lib/procedures.de.ts` (2026-07-16, second
      pass) — automatic fallback to English for anything left untranslated.
      `lib/doctors.ts` now has the same override mechanism (`lib/doctors.<locale>.ts`,
      `getLocalizedDoctors()`, 2026-07-16 third pass) — `title` is translated
      in all 4 non-English locales; `bio` is still `[PLACEHOLDER]` in every
      language (nothing real to translate yet), so `DoctorCard.tsx` hides the
      bio paragraph entirely when the field starts with `[PLACEHOLDER]`,
      rather than shipping visible placeholder text. Name/credentials are
      never overridden (real identity/registration number).
- [x] **Every remaining page/surface localized, 2026-07-16 third pass** —
      privacy policy, 404 page, about/contact hero copy and metadata, home
      hero/CTA copy, procedure "coming soon" notice, `CTABand`'s default
      title/subtitle, `ProcedureCard`'s coming-soon badge default, `og:locale`
      metadata (was hardcoded `en_US` on every page), JSON-LD
      (`medicalSpecialty`/`areaServed`/`bodyLocation`/breadcrumb labels), the
      dynamic OG share image, and a real functional bug: the WhatsApp prefill
      message on procedure pages was hardcoded English regardless of locale
      (`Hello, I'd like to ask about ${procedure.name} in Istanbul.`) — now
      uses the translated, parameterized `whatsapp.prefill` key with the
      actual localized procedure name. `SITE.city`/`SITE.country` now render
      through a translated `place.city`/`place.country` messages namespace
      everywhere they're visible; `lib/site.ts`'s `OpeningHour.days` string
      field was replaced with a `daysKey` + `hours.*` messages namespace
      (dormant today, `hoursConfirmed: false`, but ready without another
      patch pass). Known limitation found and mitigated: `next/og`'s
      `ImageResponse` (satori) cannot shape Arabic script — it throws
      `lookupType: 5 - substFormat: 3 is not yet supported` and crashes the
      route entirely. `app/api/og/route.tsx` now falls back to the English
      strings specifically for `ar` rather than crash; every other page's
      actual Arabic content is unaffected — only this one social-share-image
      surface. Confirmed via a local production server: en/tr/ru/de OG images
      render correctly, ar returns 200 with the English fallback instead of
      failing; JSON-LD and `og:locale` confirmed correct per locale;
      `notFound()` (triggered from `procedures/[slug]`) confirmed rendering
      the translated 404 page in Arabic. `npm run build` and a full grep
      sweep for banned advertising language across all new translations both
      clean.
- [x] AR renders `dir="rtl"` with Noto Sans Arabic (Fraunces/Inter don't
      cover Arabic script — see the `html[lang="ar"]` override in
      `app/globals.css`). TR/RU use Inter's `latin-ext`/`cyrillic` subsets;
      Fraunces has no Cyrillic subset, so RU headings fall through to the
      Georgia fallback in `--font-display` — acceptable, not tofu.

## 8. Deploy
1. Push to GitHub → import in **Vercel**.
2. Add the env vars from §5.
3. Deploy, then check the preview:
   - `npm run build` is clean locally.
   - `wa.me` button + `tel:`/`mailto:` links all work with the real env values.
   - Run Lighthouse (mobile) — target Performance & SEO ≥ 90.
   - Submit `/sitemap.xml` in Google Search Console (only once `ALLOW_INDEXING=true`).

---

### What's already done (as of 2026-07-17)
Clean production build, full SEO plumbing (per-page metadata, `Dentist` +
`MedicalProcedure` + `BreadcrumbList` JSON-LD — no fabricated `priceRange`,
`openingHoursSpecification` or `aggregateRating`), hreflang, sitemap, robots,
OG images, one `<h1>` per page, responsive with no horizontal scroll at
375/1280, reduced-motion support, and a distinctive teal/terracotta design
system. No pricing anywhere. No contact form — WhatsApp/phone/email only, and
the site collects no personal data of its own. No before/after photos (none
have written consent). Real clinic interior photos wired in. Only one real
dentist listed (no invented colleagues). No Patient Journey, no
reviews/testimonials, and no FAQ features — all removed entirely
(2026-07-17) rather than left as empty placeholders. UI chrome and deep
procedure content translated into TR/AR/RU/DE (doctor bio still pending real
content, hidden until supplied).

### 2026-07-16 re-audit (Sağlık Bakanlığı tanıtım/reklam rules)
- Fixed a superlative-claim violation: `app/api/og/route.tsx` said "World-class
  dentistry" — banned language, and it shipped on every page's share/OG image
  (highest-visibility surface on the site). Replaced with neutral copy
  matching `SITE.description`.
- Confirmed still-clean on everything checked previously (no reviews, no
  before/after, no pricing, no fabricated stats/`aggregateRating`) plus the
  mandatory "results vary, consult a professional" disclaimer already present
  in `messages/*.json` `footer.disclaimer` and rendered in `Footer.tsx`.
- Orthodontics flipped to live — see §1 above.
- The client's local intake-form HTML
  (`1 - Projects/Agency/Clients/Rama Dental Clinic - Eksik Bilgi Formu.html`)
  was updated to v2: dropped the patient-reviews ask entirely (testimonials
  can't be published even with consent under the Nov 2025 update — collecting
  consent data for it was pointless), strengthened the before/after note
  (domestic-facing sharing is restricted and `tr` is now a live locale —
  unresolved, needs a legal read before publishing any case), and added asks
  for the orthodontics visit cadence, doctor headshot/logo/GPS, and a
  sanity-check on the "registered dental team" phrasing.

### 2026-07-16 second re-audit (translation + compliance re-verification)
- Re-checked Arabic specifically for "translated chrome around English
  content" — found the UI chrome fully translated with no missing keys, but
  confirmed deep procedure content and the doctor bio still rendered in
  English on `/ar` (and `/ru`, `/de`; TR was believed only 3/6 procedures
  covered, but a fresh read of `lib/procedures.tr.ts` showed all 6 were
  actually already translated — an earlier grep pass had missed unquoted
  object keys like `veneers`/`crowns`/`orthodontics`).
- Found two live Sağlık Bakanlığı violations reintroduced into
  `lib/procedures.tr.ts` only (not present in English) — see §6 above for
  detail — and fixed both.
- Added `lib/procedures.ar.ts`, `lib/procedures.ru.ts`, `lib/procedures.de.ts`
  — full, faithful translations of all 6 procedures for Arabic, Russian, and
  German, wired into the `overrides` map in `lib/procedures.ts`. Deep content
  is now localized for all 5 locales.
- `DoctorCard.tsx` now hides the bio paragraph while it's the
  `[PLACEHOLDER]` string, rather than shipping visible placeholder text to
  production. Name, title, credentials, and specialties still render.
- Decisions confirmed with the client this pass: before/after photos dropped
  permanently (not pursuing consent or a legal read); `tr` locale's current
  mitigation (hidden from switcher, reachable by direct URL) accepted as
  sufficient for now; health-tourism certificate still pending on the
  client's end, no change; real domain/`.env` setup is the client's own task
  going forward, not tracked here as blocking.
- `npm run build` clean; superlative/comparative-claim grep re-check across
  all 5 locale files clean (only false positives on German "bestätigt").
