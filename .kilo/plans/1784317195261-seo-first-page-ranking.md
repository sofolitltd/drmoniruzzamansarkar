# SEO First-Page Ranking Plan — Dr. Md. Moniruzzaman Sarkar

## Objective
Rank the website on Google's first page for branded and local medical search queries related to Dr. Md. Moniruzzaman Sarkar, Gastroenterologist, Diabetologist, and liver/GERD/diabetes treatment in Rangpur/Gaibandha.

## Current State Audit
- **Good:** metadataBase set, per-page metadata exists, schema.org on conditions/blog, static generation enabled, semantic HTML, responsive design, Outfit/Merriweather fonts loaded with display=swap
- **Missing:** sitemap.xml, robots.txt, Person/Physician schema, Organization schema, BreadcrumbList schema, LocalBusiness schema, canonical URLs, OG image, robots meta variants, hreflang, Google Business Profile integration, performance monitoring

## Implementation Plan

### 1. Technical SEO Foundation
- [ ] **Create `src/app/sitemap.ts`** — Export all static + dynamic routes (`/`, `/about`, `/appointment`, `/blog`, `/blog/[slug]`, `/conditions`, `/conditions/[slug]`, `/contact`, `/gallery`, `/services`, `/specialties`, `/specialties/[slug]`, `/privacy-policy`, `/terms`). Set `changefreq` and `priority` per page type. Use `SITE_CONFIG.url` as base.
- [ ] **Create `src/app/robots.ts`** — Allow all crawlers, reference sitemap URL, set `crawl-delay: 0`.
- [ ] **Add canonical URLs** — Add `<link rel="canonical">` to every page using `SITE_CONFIG.url + pathname`. Prefer Next.js `metadata.alternates.canonical`.
- [ ] **Create `public/og-image.jpg`** — 1200x630px OG image with doctor name/logo. Update all `metadata.openGraph.images` and `metadata.twitter.images` to reference it. Remove placeholder references.
- [ ] **Add `vercel.json` or `next.config.ts` headers** — Set `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.

### 2. Structured Data (Schema.org)
- [ ] **Add `Person` schema to layout** — Full doctor profile: name, jobTitle, worksFor (Organization with address/phone), sameAs (Facebook, LinkedIn if available), knowsAbout (gastroenterology, diabetes).
- [ ] **Add `Physician` schema to homepage** — Extend Person with medical specialization, availableChannel (phone,WhatsApp).
- [ ] **Add `LocalBusiness` / `MedicalClinic` schema** — Chamber locations: name, address (Rangpur + Gaibandha), openingHours, telephone, geo coordinates if available.
- [ ] **Add `BreadcrumbList` schema** — To all inner pages (about, appointment, blog, conditions, etc.) matching visible breadcrumb nav.
- [ ] **Add `FAQPage` schema** — Render on homepage FAQ section using the `faqs` data. Each FAQ item as `Question/Answer`.
- [ ] **Add `WebSite` + `SearchAction` schema** — In layout, enable Google sitelinks search box.
- [ ] **Fix existing schemas** — Ensure condition `MedicalCondition` and blog `Article` schemas include `url`, `dateModified`, and `publisher` fields.

### 3. On-Page SEO Enhancements
- [ ] **Add Hreflang tags** — If targeting Bengali audience, add `bn-BD` hreflang variant or at least declare `en-BD`.
- [ ] **Improve heading hierarchy** — Audit all pages: exactly one H1 per page, H2→H3→H4 nesting, keywords in H1/H2 naturally.
- [ ] **Add image alt text** — All `<Image>` components must have descriptive `alt` text including doctor name and context (e.g., `alt="Dr. Md. Moniruzzaman Sarkar - Gastroenterologist portrait"`). No empty alts on meaningful images.
- [ ] **Add internal linking strategy** — Link condition pages to related services, blog posts to conditions, homepage sections to inner pages. Use descriptive anchor text (not "click here").
- [ ] **Add `noindex` to privacy/terms** — These thin pages should be `noindex, follow` to avoid diluting crawl budget.

### 4. Content SEO (Medical Keywords)
- [ ] **Create disease-specific landing pages** — Already have 6 conditions. Expand each with 800-1200 words of unique content covering: symptoms, causes, diagnosis, treatment, prevention, when to see doctor, FAQs. Target long-tail keywords:
  - "GERD treatment in Rangpur"
  - "Fatty liver specialist Bangladesh"
  - "Diabetes doctor Rangpur"
  - "IBS treatment Gaibandha"
  - "Liver disease specialist Rangpur"
- [ ] **Create location pages** — Dedicated page for each chamber:
  - `/conditions/gerd` → link from Rangpur page
  - Add chamber-specific pages or sections: "Gastroenterologist in Rangpur", "Diabetes Doctor in Gaibandha"
- [ ] **Expand blog content** — Publish 1-2 articles/month targeting:
  - "Best Gastroenterologist in Rangpur"
  - "Diabetes management tips Bangladesh"
  - "Liver disease symptoms and treatment"
  - "When to see a gastroenterologist"
  - Include doctor name naturally in each article.
- [ ] **Add "Doctor Profile" schema snippet** — On homepage, include a visible "About the Doctor" block with full qualifications, experience, and chamber addresses in plain text (not just images).

### 5. Local SEO
- [ ] **Google Business Profile** — Create/claim profile for each chamber location. Use exact name, address, phone. Add posts weekly.
- [ ] **NAP consistency** — Ensure Name, Address, Phone are identical across: website footer, Google Business Profile, Facebook page, any directories.
- [ ] **Add embedded Google Maps** — Replace `https://maps.google.com` placeholder with actual embed iframe for each chamber.
- [ ] **Add local business schema** — Already planned in Step 2. Include `geo` coordinates if available.
- [ ] **Add patient review schema** — `Review` + `AggregateRating` schema on homepage using existing testimonials data.

### 6. Performance & Core Web Vitals
- [ ] **Image optimization audit** — All images use `next/image` with `width`, `height`, `priority` where needed. Add `sizes` attribute for responsive images.
- [ ] **Font optimization** — Already using `display=swap`. Add `preload` for Outfit/Merriweather in `layout.tsx`.
- [ ] **Reduce JS bundle** — Check `next/bundle-analyzer`. Ensure Framer Motion is tree-shaken (currently not installed, good).
- [ ] **Enable static generation** — Already using SSG for dynamic routes. Ensure `trailingSlash: true` in next.config for cleaner URLs.
- [ ] **Add `next-sitemap` package** — Auto-generate sitemap with priorities, changefreq, and exclude rules.

### 7. Accessibility & Semantic HTML
- [ ] **Add `main` landmark** — All pages should have `<main>` wrapping content.
- [ ] **Add skip-to-content link** — For keyboard navigation.
- [ ] **Ensure all images have alt text** — Audit with eslint-plugin-jsx-a11y.
- [ ] **Add ARIA labels** — On icon-only buttons (FABs, mobile menu toggle).

### 8. Monitoring & Validation
- [ ] **Google Search Console** — Add verification meta tag. Submit sitemap. Monitor impressions for "Dr. Moniruzzaman Sarkar", "Gastroenterologist Rangpur", etc.
- [ ] **Google Analytics** — Add GA4 tracking. Track `appointment` and `tel:` clicks as conversion events.
- [ ] **Lighthouse CI** — Target 90+ on Performance, Accessibility, SEO, Best Practices.
- [ ] **Structured data testing** — Validate all JSON-LD with Rich Results Test.

## Priority Order
1. Technical SEO (sitemap, robots, canonical, OG image) — Week 1
2. Structured data (Person, Physician, LocalBusiness, FAQPage) — Week 1
3. On-page fixes (headings, alt text, internal links) — Week 2
4. Content expansion (disease pages, blog, location pages) — Week 2-4
5. Local SEO (Google Business Profile, NAP, maps) — Week 2
6. Performance optimization — Week 3
7. Monitoring setup — Week 1

## Success Metrics
- Google Business Profile views and calls
- Organic traffic to `/conditions/*` and `/blog/*`
- "Dr. Moniruzzaman Sarkar" ranking in top 3
- "Gastroenterologist Rangpur" ranking in top 5
- "Diabetes doctor Rangpur" ranking in top 5
- Contact form submissions from organic search
- Lighthouse SEO score ≥ 95
