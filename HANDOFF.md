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
- [ ] `legalName` — still needs the registered company name (KVKK notice needs this)
- [x] `address` (street, district, postal code) — from Instagram bio
- [ ] `geo` (lat/lng) — currently the Büyükçekmece district centre, not the
      exact building; get precise coordinates before enabling the map embed
- [x] `phoneDisplay` **and** `phoneHref` — from Instagram bio
- [ ] Confirm the same number is the **WhatsApp** number before setting
      `NEXT_PUBLIC_WHATSAPP_NUMBER` — Instagram only showed a DM button
- [ ] `email`
- [ ] `hours` (opening times) — not on Instagram; confirm with client, then
      **also update `lib/schema.ts`** `openingHoursSpecification`
- [x] `socials.instagram`
- [ ] `socials` (Facebook / etc.)
- [ ] `stats` — years, patients treated, countries, rating, review count
      ⚠️ **Do not publish unverified numbers.** These feed the trust strip *and*
      the `AggregateRating` schema. Use real, defensible figures only.
- [ ] `accreditations` — list **only** ones the clinic actually holds
- [ ] Confirm whether **Orthodontics** (advertised in the Instagram bio) should
      be added as a 6th procedure in `lib/procedures.ts` — not added yet

## 2. Treatments & prices — `lib/procedures.ts`
- [ ] `priceFrom` / `priceNote` for each of the 5 procedures (or keep quote-only)
- [ ] Review copy for accuracy against how the clinic actually works

## 3. People & proof
- [ ] `lib/doctors.ts` — real dentists: names, titles, credentials, registration
      numbers, bios (no invented practitioners)
- [ ] `lib/reviews.ts` — replace the **sample** testimonials with real,
      permission-cleared patient reviews (or wire a Google reviews feed)
      ⚠️ The client's Instagram has real testimonial posts (Molly, Mathew,
      Hanna, Chris), but those were posted for Instagram, not confirmed as
      cleared for reuse on this site — don't copy them in without the
      client's direct, explicit go-ahead alongside the actual photo files.

## 4. Photography
All photo slots render as branded placeholders via `components/ui/Media.tsx`.
Supply the clinic's real, consented images and pass a `src` (Cloudinary id or URL):
- [ ] Home hero visual
- [ ] Clinic interior (About)
- [ ] Doctor headshots
- [ ] **Before/after** pairs — set `beforeSrc`/`afterSrc` in `lib/procedures.ts`
      (⚠️ written patient consent required)
- [ ] A featured video testimonial (home)
- [ ] Map embed (Contact) — swap the placeholder for a real map
- [ ] `favicon` / logo — replace `app/favicon.ico`

## 5. Environment variables (Vercel)
- [ ] `NEXT_PUBLIC_SITE_URL` — the production domain
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` — intl format, digits only
- [ ] `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — the clinic's real Formspree form
- [ ] `NEXT_PUBLIC_CLOUDINARY_CLOUD` — optional, if using Cloudinary for images

## 6. Legal & claims
- [ ] `app/[locale]/privacy/page.tsx` — have it reviewed for the clinic's
      jurisdiction (GDPR / KVKK): company details, data processor, rights
- [ ] Verify the "**Save up to 50–70%**" figure on `/pricing` and the home teaser,
      or reword — it is currently an illustrative market range
- [ ] Confirm no medical claim on the site overstates outcomes

## 7. Enable more languages (optional, later)
- [ ] Translate `messages/<locale>.json` (currently `{}` → English fallback)
- [ ] Localise `lib/*` content for that locale
- [ ] Un-disable the locale row in `components/layout/LanguageSwitcher.tsx`

## 8. Deploy
1. Push to GitHub → import in **Vercel**.
2. Add the env vars from §5.
3. Deploy, then check the preview:
   - `npm run build` is clean locally (already verified).
   - `wa.me` button + quote form both work with the real env values.
   - Run Lighthouse (mobile) — target Performance & SEO ≥ 90.
   - Submit `/sitemap.xml` in Google Search Console.

---

### What's already done
Clean production build (81 static pages, all locales), full SEO plumbing
(per-page metadata, `Dentist` + `MedicalProcedure` + `BreadcrumbList` JSON-LD,
hreflang, sitemap, robots, OG images), one `<h1>` per page, WhatsApp + Formspree
quote form wired via env, responsive with no horizontal scroll at 375/1280,
reduced-motion support, and a distinctive teal/terracotta design system.
