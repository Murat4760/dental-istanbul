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
- [ ] Confirm whether **Orthodontics** (advertised in the Instagram bio) should
      be added as a 6th procedure in `lib/procedures.ts` — not added yet

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
- [ ] **Before/after photos — do not add.** No case has written patient
      consent on file (2026-07-14 intake form). The before/after feature
      (component, `/before-after` page, `beforeAfter` data field) was removed
      entirely rather than left as an empty placeholder — re-add only once a
      real, consented case exists.
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
      indexing. `tr` was added as a locale on 2026-07-16 on explicit
      request, which reopens the domestic/abroad-facing separation question
      the original `i18n/routing.ts` comment raised — worth a real answer,
      not just a flag, before this locale is indexed.
- [ ] Confirm no medical claim on the site overstates outcomes

## 7. Languages
- [x] UI chrome (nav, buttons, footer, language switcher) translated into
      TR/AR/RU/DE as of 2026-07-16 — see `messages/<locale>.json`. All five
      locales (`en`, `tr`, `ar`, `ru`, `de`) are live in
      `components/layout/LanguageSwitcher.tsx`, no more "coming soon" gating.
- [ ] **Deep content is still English-only.** `lib/procedures.ts`,
      `lib/faqs.ts`, `lib/doctors.ts` are plain English TypeScript with no
      per-locale variant mechanism — so every non-English locale currently
      shows translated nav/buttons/footer around English procedure
      descriptions, FAQ answers and doctor bios. Fixing this properly means
      either (a) adding a translated field per locale to each data file, or
      (b) moving this content into `messages/<locale>.json` — a real content
      task, not a config flip.
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
dentist listed (no invented colleagues). No Patient Journey and no
reviews/testimonials features — both removed entirely (2026-07-17) rather
than left as empty placeholders. UI chrome translated into TR/AR/RU/DE.
