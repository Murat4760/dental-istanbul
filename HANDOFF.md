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
- [x] `NEXT_PUBLIC_SITE_URL` — `https://www.ramadent.com`, added to Vercel
      production 2026-07-18 (was missing entirely, canonical/OG/sitemap URLs
      were silently falling back to `localhost:3000` on the live domain)
- [x] `NEXT_PUBLIC_WHATSAPP_NUMBER` — `905067743434`, added same pass (was
      missing entirely, every WhatsApp CTA button was broken on production)
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

### 2026-07-18 clinic photos added + third re-audit
- Added 4 new interior photos from the client (`treatment-room-10.jpg`
  through `treatment-room-13.jpg`) to `public/images/clinic/`, resized to
  2000px wide and compressed to match the existing set's ~150-250KB band.
  All 4 are empty-room/equipment shots plus RAMA-branded wall art — no
  patients, no pricing signage, no result claims, so no compliance concern
  from the photos themselves. Wired into `GALLERY_SRC` in
  `app/[locale]/about/page.tsx`, bringing the About gallery to 13 photos.
- Re-ran the full grep sweep (superlatives/comparatives, price mentions,
  before-after/testimonial leftovers) across `lib/`, `messages/`, `app/`,
  `components/` — clean, only false positives (CSS grid classnames matching
  "#1", `Arc.tsx`'s comment about a slider "handle", `procedures.ts` comments
  documenting the *absence* of prices/before-after).
- Confirmed still intact: footer disclaimer (`footer.disclaimer` in
  `messages/en.json`, rendered in `Footer.tsx`), `tr` locale hidden from
  `LanguageSwitcher.tsx`'s public dropdown, and no `before-after`/`reviews`
  routes or components present anywhere in the tree.
- No changes needed to the Eksik Bilgi Formu — these 4 photos are additional
  treatment-room shots, not the doctor headshot/logo/exterior photo the form
  is still waiting on.

### 2026-07-18 client intake re-submission cross-check
- Client sent a new form export, `klinik-bilgileri-2026-07-18.txt`. Cross-checked
  every field against `lib/site.ts` and `lib/doctors.ts`: **no new data.** Every
  populated field (legal name, street, district "Kavaklı, Beylikdüzü", postal
  code 34520, phone, email, doctor name/title/Sicil No 20190201022/51734,
  Instagram handle) already matches what's live in code exactly.
- Every blank field on this export remains open, unchanged from the existing
  "❌ Missing / Pending" list: Uluslararası Sağlık Turizmi Yetki Belgesi / Yetki
  belge no, HealthTürkiye membership, confirmed working hours, precise GPS
  coordinates, Dr. Ramazani's bio, a second dentist, doctor headshot, clinic
  logo/exterior photo, trust stats, complication insurance company, and
  Facebook. This is a re-submission that left the same critical items blank,
  not new information — no code or content changes made this pass.

### 2026-07-18 clinic photos replaced with architect renders
- Client supplied `R.A.M.A DENT GÖRSEL TESLİM_2.pdf`, a delivery sheet from a
  design firm ("DENTAL MİMARLIK") containing 8 photorealistic 3D interior
  renders: reception/lobby x3, a private consultation room, treatment rooms
  x4 — all showing RAMA-branded signage/wall art, no patients, no
  pricing/result claims visible.
- Replaced all 14 previous clinic photos (1 reception + 13 treatment-room)
  with these 8. `reception.jpg` keeps its filename (used as the homepage
  hero and About-page hero, both `priority`-loaded); `GALLERY_SRC` in
  `app/[locale]/about/page.tsx` trimmed from 13 to 7 entries
  (`reception-2.jpg`, `reception-3.jpg`, `consultation-room.jpg`,
  `treatment-room-1.jpg`..`treatment-room-4.jpg`). Build verified clean
  across all locales. Committed `85b05f0`, pushed to `main` (auto-deploys).
- **Unresolved, needs client confirmation, not a code issue:** the wall
  signage in these renders reads "R.A.M.A DENT" — the *previous* reception
  photo (a real phone photo, now removed) showed the actual installed sign
  reading "R.A.M.A DENTAL CLINIC". Unclear whether the renders depict the
  same already-built space (design firm's own marketing shots of the
  finished result) or an earlier/alternate design concept. If it's the
  latter, publishing them as the clinic's real interior would be a
  misleading-representation problem under the Sağlık Bakanlığı yönetmelik,
  separate from the superlative/testimonial rules already tracked — flag to
  client before treating this as final.

### 2026-07-18 bordo/rose-gold rebrand + public `tr` locale + legal-baseline review
- **Color system recolored** to match the clinic's actual installed signage
  and the renders above (previously teal/terracotta, invented, no
  relationship to the real space). `app/globals.css` `@theme` block:
  `--color-primary` → `#6E3338` (bordo/rosewood, was `#0E5C57`),
  `--color-primary-dark` → `#58292D`, `--color-primary-tint` → `#F1EBEB`,
  `--color-accent` → `#C9A66B` (rose-gold, was `#C46A3F`),
  `--color-accent-dark` → `#A18556`, `--color-accent-tint` → `#FAF6F0`,
  `--shadow-lift` recolored to match. Values are designer-tuned estimates —
  literal pixel-sampling from the render JPGs came back washed out from
  lighting gradients in the crops tried.
- **Real accessibility fix, not just restyling:** `components/ui/Button.tsx`'s
  `primary` variant was `bg-accent text-white`. Rose-gold `#C9A66B` is a
  *light* color (relative luminance 0.41) — white text on it computes to a
  2.3:1 contrast ratio, under the WCAG 3:1 floor for UI components. Changed
  to `bg-accent text-ink` (~7.3:1, safe). The `secondary` variant
  (`bg-primary text-white`) needed no change — bordo on white is ~9.6:1.
  Also updated the variant's hardcoded shadow rgba to match the new accent.
- `app/api/og/route.tsx` — updated the two places colors are hardcoded
  outside the token system (Satori/Edge renderer can't read CSS vars): the
  gradient background and the small accent-colored rule.
- Verified: `npm run build` clean; grepped `app/`, `components/`, `lib/` for
  the old hex values (`#0E5C57`, `#0A4A46`, `#C46A3F`, `#A8542E`,
  `#E7F0EE`, `#F6ECE4`) — zero leftovers; ran a local production server and
  confirmed the compiled CSS has the new token values and the accent button
  renders with `text-ink`.
- **`tr` made public in the language switcher** —
  `components/layout/LanguageSwitcher.tsx` previously filtered `tr` out of
  the visible locale list (direct-URL-only). Removed the filter. No other
  code changes needed: `i18n/routing.ts` already registers `tr` as a full
  locale, `proxy.ts` has no locale gating, and `lib/metadata.ts`/
  `app/sitemap.ts` already emit `/tr` in hreflang/sitemap alternates
  regardless of switcher visibility — so this doesn't change indexing
  exposure, which stays fully controlled by the separate
  `NEXT_PUBLIC_ALLOW_INDEXING` flag (still off). Re-ran the compliance grep
  sweep (superlatives/pricing/scarcity language) against `messages/tr.json`
  before flipping — clean, one benign false-positive ("kesin fiyat" in
  coming-soon placeholder copy means "confirmed pricing," not a price
  claim). Updated the reasoning comment in `i18n/routing.ts` explaining why
  now: the domestic/abroad separation concern that originally justified
  hiding `tr` is specifically part of the health-tourism regulatory regime
  (Yetki Belgesi + HealthTürkiye), which this clinic isn't in yet — flagged
  to revisit if/when that certification lands.
- **Legal-baseline research this session** (see also the vault's own
  compliance doc for the client-facing version): researched what a
  *normal, non-health-tourism* Turkish dental clinic website must comply
  with, since the health-tourism-specific regime is stalled on the
  client's own paperwork and therefore not currently binding. Findings:
  - Baseline domestic-clinic advertising rules (Sağlık Hizmetlerinde
    Tanıtım ve Bilgilendirme Yönetmeliği, 12 Kasım 2025, + TDB guidance)
    are already fully met by this codebase: no superlatives/guarantee
    language, no testimonials, no pricing/campaigns/scarcity CTAs
    (re-confirmed by grep this session), mandatory disclaimer present,
    before/after dropped entirely (exceeds what the regulation would
    technically permit with proper consent — client's own stricter call).
  - KVKK: confirmed a non-issue right now. Grepped for `QuoteForm` usage
    across `app/` and `components/` — it's defined in
    `components/QuoteForm.tsx` but never imported/rendered on any live
    page. `/privacy` accurately discloses zero data collection, no
    analytics/tracking. This only becomes relevant if a form or analytics
    is ever wired up in the future — not before.
  - TDB's website-content guideline lists Oda sicil no, TDB sicil no,
    graduation date, and university as content a dentist's site "may
    include" (verebilir) — permissive, not mandatory. Not a compliance
    gap; optional enrichment only if the client volunteers it.
- Committed and pushed to `main` (auto-deploys via Vercel).

### 2026-07-18 tr made default route + canvas/tints deepened
- **`tr` is now `defaultLocale`** in `i18n/routing.ts` (was `en`) — with
  `localePrefix: "as-needed"` this flips which locale owns the un-prefixed
  root: `/` now serves Turkish, `/en` is explicit. Verified against a
  running production server (not just build output, which lists every
  locale's static params regardless of prefix behavior and doesn't reveal
  this on its own): `/` → `lang="tr"`, `x-middleware-rewrite: /tr`,
  hreflang `x-default` points at `/`; `/en` → `lang="en"`; `/tr` now
  307-redirects to `/` (its own old prefix is gone).
- **Caught and fixed before it shipped:** `i18n/request.ts` was using
  `routing.defaultLocale` as the *content-fallback base* too — every
  locale's missing/untranslated keys silently fall back to whichever
  locale is `defaultLocale`. Flipping `defaultLocale` to `tr` would have
  silently changed that fallback from audited English to Turkish for
  every other locale on any future untranslated key — a real footgun, not
  what "make tr default" should mean. Fixed by decoupling: `request.ts`
  now hardcodes `CONTENT_BASE_LOCALE = "en"` independent of
  `routing.defaultLocale`, so English stays the fallback base regardless
  of which locale owns the URL root. `lib/metadata.ts`/`app/sitemap.ts`
  correctly keep reading `routing.defaultLocale` generically (that's a
  routing concern, meant to track the change).
- **Canvas/surface/tints deepened** — `app/globals.css`: canvas
  `#FAF0F1`→`#F2D9DB`, surface `#FDF7F8`→`#F8E9EA`, primary-tint
  `#F1EBEB`→`#E2D6D7`, accent-tint `#FAF6F0`→`#F4EDE1`. The bordo/rose-gold
  recolor earlier today only touched primary/accent — the base page
  background was still ~95% white with a barely-perceptible tint, so the
  site still read as "white" overall. Pushed noticeably warmer/stronger
  while keeping dark `ink` text safely >15:1 contrast on all of them (still
  light backgrounds, just no longer near-white). Verified via compiled CSS
  on a running production server, not just source diff.
- Local verification only ran against one locale/route sample each
  (`/`, `/en`, `/tr`) — full cross-locale re-check (ar/ru/de root
  redirects, all page routes) not re-run this pass; `npm run build`
  passed clean across all locale × route combinations first, which is the
  broader signal.

### 2026-07-18 stopped targeting international/tourist patients site-wide
- Murad: "don't target the uluslararası [international] ... tourists."
  This was much bigger than one field — the entire site's positioning was
  built around dental tourism. Full inventory found and fixed across
  **all 5 locales**:
  - `lib/site.ts`: `description` said "Dental care for international
    patients in Istanbul" — now just "Dental care in Istanbul."
  - `messages/<locale>.json`, all 5: `schema.areaServed` said
    "International patients worldwide" (a real JSON-LD correctness bug
    too — wrong value for a LocalBusiness/Dentist schema's service-area
    field) → now "Istanbul, Turkey" per locale. Also fixed:
    `og.tagline`, `about.metaDescription`, `about.storyParagraph`
    (a placeholder that was *prompting* Murad to eventually write an
    international-patient-count stat), `proceduresPage.metaDescription`,
    `home.heroDescription`, `footer.about` — all dropped their
    "for international patients" clause.
  - **`home.heroTitlePrefix` in `messages/tr.json` specifically** — this
    is the single biggest catch: it wasn't even a faithful translation of
    the neutral English original, it was independently authored as
    "Uluslararası hastalar için diş sağlığı hizmeti," ("Dental care for
    international patients,") — the literal H1 on the homepage, and as
    of the previous pass today, the homepage is now served at `/` by
    default. Rewrote to "İmplant, veneer ve gülüş tasarımı," matching the
    EN/AR/RU/DE pattern (none of which had this problem — only TR's hero
    had diverged from the neutral base).
  - `procedurePage.timeIn` ("Time in {city}" / "{city}'de Geçirilecek
    Süre" / etc.) — a sidebar UI label literally framing procedure
    duration as time-spent-in-the-city (trip-planning language). Changed
    to neutral "Typical duration" per locale; removed the now-unused
    `city` param from the `t()` call in
    `app/[locale]/procedures/[slug]/page.tsx` (verified `place()` is
    still used elsewhere in that file, so no unused-import fallout).
  - `procedurePage.gridDescription` — "before you travel" / "seyahat
    etmeden önce" / "قبل سفرك" / "до поездки" / "vor Ihrer Anreise" → all
    changed to "in advance"/equivalent.
  - `lib/procedures.ts` + all 4 translation overlays (`.tr.ts`, `.ar.ts`,
    `.ru.ts`, `.de.ts`) — for all 6 procedures: `seo.description` dropped
    "for international patients"; `seo.keywords` dropped the "X abroad"
    variant (e.g. "dental implants abroad" / "yurt dışında diş implantı")
    while keeping the legitimate local-SEO keywords ("dental implants
    Turkey/Istanbul"). The dental-implants `processSteps` had a literal
    fly-in-tourist itinerary baked in — "before you travel" →
    "ahead of your first appointment," "on arrival" → "at your first
    visit," "return to their hotel" → "go home." Orthodontics' fitting
    step similarly changed "during your visit to Istanbul" → "at your
    fitting appointment."
  - Full re-sweep after editing (English + native-script terms per
    locale: uluslararası/yurt dışı, دولي/بالخارج, иностранн/за границ,
    international/im Ausland) — clean across `lib/` and `messages/`
    except one internal code comment (not user-facing) documenting a
    past before/after-photo decision.
  - All 5 `messages/*.json` re-validated as parseable JSON after editing.
    `npm run build` clean (exit 0, zero warnings). Verified against a
    running production server: JSON-LD `areaServed` now reads
    `{"@type":"AdministrativeArea","name":"İstanbul, Türkiye"}` on the
    live homepage; the `/` (Turkish default) H1 now renders "İmplant,
    veneer ve gülüş tasarımı, İstanbul" instead of the old
    international-patient headline; procedure page sidebar shows "Typical
    duration" correctly.
  - Not done this pass (out of scope for a copy audit): `daysInIstanbul`
    as a TypeScript field/property name still says "Istanbul" internally
    — left as-is since it's not user-facing (the displayed label is now
    neutral) and renaming it is a pure refactor with no behavior change.

### 2026-07-18 large content/data/UI batch — first real client photo, hours confirmed, 2 new procedures
- **Business data now real, not placeholder:** `lib/site.ts` — hours
  confirmed by the client: weekdays + Saturday 10:00–20:00, Sunday closed,
  `hoursConfirmed` flipped to `true`. This automatically activates
  `openingHoursSpecification` in `lib/schema.ts`'s JSON-LD (previously
  omitted entirely) and switches the contact page/footer off their
  "hours pending" branch.
- **First real doctor photo supplied.** Copied client's photo (Ferhat at
  reception, next to the installed sign) to
  `public/images/doctors/ferhat-ramazani.jpg` (file was actually JPEG
  despite a `.png` name — saved with the correct extension). Added
  `photoUrl?: string` to the `Doctor` type, wired into
  `components/DoctorCard.tsx` via `<Media src={doctor.photoUrl}>`.
  Changed the card's `aspect` from `4/3` to `16/9` to match the photo's
  real ~1.88:1 ratio and keep both Ferhat and the sign in frame — `Media`
  already uses `object-cover` (crops, never stretches), so no distortion
  risk existed, this was purely a framing choice. Also fixed
  `about.teamTitle` in all 5 locales from plural ("meet our dentists") to
  singular ("meet our dentist") — there's only one confirmed real dentist.
- **Dropped "registered dentist" phrasing** from `home.heroDescription`
  and `about.metaDescription` in all 5 locales, replaced with "a
  professional team, an expert dentist" (client's exact TR wording,
  translated). General instruction to make intro copy warmer/more
  professional applied to these same strings — no new claims, same
  compliance constraints.
- **Removed the homepage benefits checklist** (`home.benefit1/2/3` —
  "your plan explained before you commit / no pressure, no obligation /
  timing guidance") entirely from `app/[locale]/page.tsx` and all 5
  `messages/*.json`, along with the now-unused `Check` icon import.
  Rewrote `home.ctaTitle` from a "no-obligation conversation" framing to
  "Book an appointment for a free consultation" in all 5 locales — noting
  for the record that "free consultation" is a standard, generally
  accepted dental-marketing CTA distinct from discounting actual
  treatment prices, consistent with every other compliance judgment call
  logged in this file.
- **Removed the "Typical duration" / day-range display entirely, in two
  places, site-wide:** the procedure detail page's sidebar fact (already
  planned) **and** — caught during implementation, not in the original
  ask — the same `daysInIstanbul` value was *also* being shown directly
  on every `ProcedureCard` (homepage/grid card), which the plan had
  missed. Removed both, matching the resolved "remove site-wide" decision.
  The `daysInIstanbul` field itself stays in the data (harmless, unused).
- **Terminology:** "veneer" → "lamine" throughout `lib/procedures.tr.ts`
  and `messages/tr.json` (TR only — this was a colloquial-term
  correction, not a translation gap elsewhere) — kept the working
  "veneer Türkiye/İstanbul" SEO keywords alongside new "lamine"
  variants rather than deleting live search terms. "All-on-4" renamed to
  "Zirconia All-on-4" / "Zirkonyum All-on-4" / "All-on-4 بالزركونيوم" /
  "Циркониевый All-on-4" / "Zirkon All-on-4" across all 5 locales (both
  `lib/procedures.*.ts` and the 4 repeated `messages/*.json` keys) — kept
  the `slug: "all-on-4"` unchanged, no URL/redirect impact. Note: this
  combo (All-on-4 restoration in zirconia) is a standard real
  dental-tourism service name, not a naming collision with the separate
  "Crowns" procedure that also legitimately uses zirconia as a material.
- **Two new procedures added**, full parity with the existing 6 across
  all 5 locales — `lib/procedures.ts` (+ `procedures.tr/ar/ru/de.ts`):
  - `root-canal` ("Root Canal Treatment") — category `Restorative`,
    icon `Syringe`. Content researched (Delta Dental, Cleveland Clinic,
    Mayo Clinic step-by-step guides) and written fresh to match this
    site's existing tone/structure — not copied verbatim from any source.
  - `gum-treatment` ("Gum Treatment") — new category `Periodontal` added
    to the `ProcedureCategory` union and to the `categories` namespace in
    all 5 `messages/*.json`. Icon `Shield`. Content researched (American
    Academy of Periodontology, Cleveland Clinic phased-treatment guides).
  - Both swept against the same compliance bar as the original 6: no
    superlatives, no guarantees, no pricing, no fabricated stats.
- **Procedure cards** (`components/ProcedureCard.tsx`) redesigned:
  ~2x bigger (padding, icon chip, type scale), stronger border
  (`border-2 border-primary/15`) for a defined "boxed" look, background
  switched from `bg-surface` to the dusty-pink `bg-canvas` token. Added a
  new optional `photoUrl?: string` field to the `Procedure` type and a
  `<Media>` image slot at the top of every card (real photo once
  supplied, branded placeholder until then) — explicitly a generic
  illustrative photo of the treatment/equipment, **not** a patient result
  photo (before/after stays banned, see file header comment in
  `lib/procedures.ts`).
- **Header logo** enlarged `h-9 md:h-11` → `h-12 md:h-16`. **Footer** gets
  a new descriptor line under its logo — "Ağız ve Diş Sağlığı
  Polikliniği" / "Oral & Dental Health Polyclinic" / equivalent per
  locale — new `footer.polyclinicLabel` key in all 5 `messages/*.json`.
- **New "Get Directions" button** on the contact page, plus a matching
  Maps icon added to the footer's social row. New `directionsUrl()`
  helper in `lib/site.ts` builds a Google Maps directions link from the
  **full** postal address (street + district + city + postcode +
  country) — deliberately not `SITE.geo`, which is still flagged as an
  approximate district-centroid placeholder; a text-address search
  routes correctly regardless of pin precision.
- **Footer social icons** reworked: added a WhatsApp glyph (extracted
  from `WhatsAppButton.tsx`) and the new Maps icon to
  `components/ui/SocialIcons.tsx`/`Footer.tsx`. Instagram now stacked
  above WhatsApp+Maps(+Facebook), icon containers bumped `h-10`→`h-11`,
  Instagram switched from monochrome to its own brand gradient (new
  `brand` prop on `InstagramIcon`, inline SVG `linearGradient`), and
  WhatsApp/Maps/Instagram all get a static soft box-shadow glow in their
  own brand color. This layout interpretation (stacked, not just
  reordered inline) was a judgment call on an ambiguous instruction —
  flag to Murad if he meant something else.
- **Verification:** `npm run build` clean (TypeScript passed, 71 static
  paths including the 2 new procedures × 5 locales); all 5
  `messages/*.json` re-validated as parseable JSON after every edit;
  full compliance grep re-sweep (superlatives/guarantees/pricing/scarcity,
  native-script terms per locale) across every changed/new string —
  clean, only benign false-positive substring matches (e.g. Russian
  "improve" containing "лучш"). Spot-verified against a running
  production server: TR homepage H1/hero/CTA, procedure cards and both
  new procedure pages, Ferhat's photo and singular team wording, contact
  page hours (10:00–20:00, no longer "pending") and the Directions
  button's actual generated URL, footer icon gradient/glow classes.

### 2026-07-18 (later) removed Crowns procedure, dropped "All-on-4" wording
- Murad: "diş kaplamaları sil, zirkonyum yanındaki all on 4 sil" — delete
  the Crowns procedure, and remove the "All-on-4" text sitting next to
  "Zirkonyum" in the other procedure's name.
- **Crowns procedure deleted entirely** from `lib/procedures.ts` and all
  4 locale overlays (`.tr/.ar/.ru/.de.ts`) — no other code changes
  needed, confirmed the "related procedures" grid on each procedure page
  is fully dynamic (`getLocalizedProcedures(locale)`, no hardcoded slug
  references anywhere), so removing one array entry was a clean,
  self-contained deletion. `/procedures/crowns` now correctly 404s.
- **"All-on-4" wording dropped** from the zirconia procedure's name,
  keeping only "Zirconia"/"Zirkonyum"/etc: EN "Zirconia All-on-4
  Implants" → "Zirconia Implants" (shortName "Zirconia All-on-4" →
  "Zirconia"), same pattern in TR/AR/RU/DE. Also fixed body copy that
  still used "All-on-4" as the grammatical subject of the opening
  sentence in EN and TR (missed in the original rename pass) — now
  reads "This treatment replaces..." / "Bu tedavi..." instead. Updated
  the 4 repeated `messages/*.json` keys per locale (services strip,
  proceduresPage.metaDescription, home.heroDescription, footer.about)
  that listed both "crowns" and "All-on-4" — both removed from all 5.
  One extra catch: `ar.json`'s footer.about used a transliteration
  ("أول-أون-4") that the earlier bulk find/replace for the literal
  string "All-on-4" hadn't matched — fixed separately.
- **Kept intentionally**: the `seo.keywords` arrays still include
  "All-on-4 Turkey/Türkiye/etc." as a search term (people type it) —
  same precedent as keeping "veneer" keywords alongside "lamine" in an
  earlier pass. This is invisible `<meta name="keywords">` metadata,
  not visible page copy — confirmed nothing "All-on-4" renders on the
  page itself anymore, only in that one meta tag.
- Not touched: the URL slug stays `all-on-4` (no redirect, no URL
  churn) — only the displayed name changed. Flag to Murad if the slug
  should change too; wasn't part of the request as I read it.
- `npm run build` clean (35 static procedure paths now, down from 40 —
  7 procedures × 5 locales, confirms exactly one procedure removed).
  Verified against a running server: `/procedures/crowns` → 404,
  `/procedures/all-on-4` H1 reads "Zirkonyum İmplant" with zero visible
  "All-on-4" text on the page.

### 2026-07-18 (later still) real procedure photos, specialty labels, Lamine/gridDescription copy
- Murad supplied 7 real photos in `~/Desktop/dental photos/`, one per
  remaining procedure, already named to match (`implant.png`,
  `lamine.jpeg`, `zirkonum.jpeg`, `disbeyazlatma.jpeg`,
  `ortodonti.jpeg`, `kanaltedavi.jpeg`, `diseti.jpeg`) — copied into
  `public/images/procedures/<slug>.{png,jpg}` and wired into
  `photoUrl` on all 7 EN procedure objects in `lib/procedures.ts`.
- **No-crop, no-stretch requirement**: added a new `photoAspect?: string`
  field to the `Procedure` type, set to each image's *exact native pixel
  ratio* (e.g. `"722 / 511"` for the 722×511 implants photo). Confirmed
  via `components/ui/Media.tsx` that `aspect` is a raw CSS
  `aspect-ratio` value with no parsing, and that `object-cover` only
  crops when the box ratio differs from the image's own ratio — setting
  the box to the exact native ratio means zero cropping on either axis.
  `app/[locale]/procedures/[slug]/page.tsx`'s hero `<Media>` now reads
  `aspect={procedure.photoAspect ?? "4 / 3"}` instead of a hardcoded
  `"4 / 3"` for every procedure. Verified per-page: all 7 rendered
  `aspect-ratio` values match the source images exactly.
- **Specialty labels**: researched (web) which recognized Turkish
  dental specialty each procedure actually belongs to — Ağız Diş Çene
  Cerrahisi (implants), Restoratif Diş Tedavisi (veneers, whitening —
  confirmed both genuinely fall under this specialty, not force-
  diversified for appearance), Protetik Diş Tedavisi (zirconia
  All-on-4-style bridge — distinct from implants since this branding
  centers on the prosthesis, a judgment call flagged for Murad),
  Ortodonti, Endodonti, Periodontoloji. Added `specialty: string` to the
  `Procedure` type (translated per locale like `name`), and display it
  next to the existing category eyebrow on the procedure hero
  (`app/[locale]/procedures/[slug]/page.tsx`). **Caught during
  implementation**: for the orthodontics procedure, `category` and
  `specialty` are literally the same word ("Ortodonti") — added a guard
  so the specialty segment doesn't render when it's identical to the
  already-shown category label, avoiding a visible "Ortodonti ·
  Ortodonti" duplicate. Verified live: 6 of 7 pages show both segments,
  orthodontics correctly shows just one.
- **"Porselen Lamine" → "Lamine"** (TR only): dropped "Porselen" from
  `name`/`seo.title`/`seo.description` in `lib/procedures.tr.ts`, kept
  a "lamine Türkiye" SEO keyword replacing "porselen lamine Türkiye".
  Left the body process-step text ("Porselen laminalarınız
  yapıştırılır...") untouched — that's a factual material descriptor,
  not the procedure's name, so out of scope for this rename. Verified
  live: zero "Porselen" on the page outside that one body sentence.
- **`procedurePage.gridDescription` rewrite** (TR only): replaced the
  old "planned around your case, explained in advance, no surprises"
  sentence with Murad's exact new wording — "Her tedavi itina ile
  incelenip kişiye özel uygulanmaktadır." Scoped to TR only since this
  instruction quoted and replaced Turkish text specifically; flag to
  Murad if he wants the same idea mirrored into EN/AR/RU/DE.
  Verified live on `/procedures`.
- `npm run build` clean; all 5 `messages/*.json` re-validated as
  parseable JSON; every change spot-verified against a running
  production server before shipping.

### 2026-07-18 (latest) end-to-end mobile check — found and fixed 2 real bugs
- Murad asked for a full mobile QA pass. Ran Playwright against the
  live production site at iPhone-13 viewport (390×844) across the
  homepage + all 7 procedure pages + about/contact — checked for
  horizontal overflow, broken images, console errors, and visually
  screenshotted every page. Zero overflow, zero broken images, zero
  console errors — but found two real, pre-existing-pattern bugs via
  screenshots that numeric checks alone would have missed:
  1. **Floating button stack (Instagram/Directions/WhatsApp,
     `components/layout/WhatsAppButton.tsx`) visually overlapped the
     hero's WhatsApp/phone CTA buttons** on every single page at this
     viewport size — the hero buttons `flex-col` stretch to full
     container width on mobile and ran directly under the fixed
     bottom-right icon stack, right where users land on first
     scroll/load. Fixed by adding `pr-20 sm:pr-0` to both hero CTA
     button containers (`app/[locale]/page.tsx` and
     `.../procedures/[slug]/page.tsx`) — reserves a mobile-only safe
     zone matching the floating stack's actual footprint (measured:
     54px wide + 20px offset = 74px from the right edge). Re-verified
     with a `getBoundingClientRect()` intersection check against the
     floating stack across all 8 pages: zero overlaps after the fix.
  2. **Procedure page `<h1>` had a hardcoded English "in"**:
     `{procedure.name} in {place("city")}, {place("country")}` —
     produced ungrammatical output in every non-English locale (TR:
     "Diş İmplantları in İstanbul, Türkiye" — English "in" sitting
     inside a Turkish sentence, since Turkish needs a locative suffix
     attached to the city, not a standalone preposition). The exact
     same city+country pattern was already solved correctly elsewhere
     in this codebase (`proceduresPage.heroTitle`, e.g. TR: "{city},
     {country}'de Diş Tedavileri") — this one H1 was just missed when
     that fix was made. Added a matching `procedurePage.heroTitle` key
     to all 5 `messages/*.json` (TR restructures word order per proper
     grammar: "{city}, {country}'de {name}"; EN/RU/DE keep the simple
     prefix form; AR uses "في"), and switched the H1 to
     `t("procedurePage.heroTitle", {...})`. The `<title>` metadata tag
     was unaffected — it already read from `procedure.seo.title`,
     which is per-locale translated data, not a hardcoded template.
  - Build clean; re-verified locally post-fix with Playwright: all 7
    H1s render correct grammar with zero literal " in ", zero overlaps
    across all 8 pages, mobile menu open/close still works.
