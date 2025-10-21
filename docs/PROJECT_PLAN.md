# Harvest Analytics Website Redesign — Project Plan

## Goals
- Modern, conversion-focused marketing site to showcase BI, Data Science, and Analytics consulting.
- Clear positioning, strong social proof, and easy paths to contact.
- Migrate from WordPress/Squarespace to GitHub + AWS Amplify.

## Scope
- Step 1: Visual and UX redesign; core pages (Home, Services, Industries/Use Cases, Case Studies, About, Blog/Insights, Contact).
- Step 2: Hosting/CI/CD on Amplify; serverless contact form (SES); analytics; SEO; redirects.

## Positioning (draft)
- Headline: Elevate decisions with modern Business Intelligence and AI.
- Subhead: Harvest Analytics helps teams turn data into outcomes—BI modernization, analytics engineering, data science, and ML.
- Pillars: Strategy→implementation, pragmatic AI, fast value, trusted craftsmanship.
- CTAs: Primary—Book a consultation; Secondary—See case studies.

## Timeline (indicative)
- Week 1: Wireframes, design system, content outline
- Week 2: Hi‑fi design + copy approval
- Weeks 3–4: Build Next.js site, core pages, blog, forms
- Week 5: Content load, SEO, analytics, a11y/perf
- Week 6: Redirects, staging UAT, launch

## Success Metrics
- ≥ 2.0% Home primary CTA CTR; ≥ 35% Services CTR from Home
- ≥ 3 case study views/session (qualified)
- Contact form conversion ≥ 1.0%; bounce ≤ 45%

## Risks & Mitigations
- Content delays → parallelize copy/design, placeholders early
- SES verification lead time → start by Week 2
- Redirect gaps → crawl old site to generate map

## Inspiration
- indatalabs.com — depth of services and case studies
- bicycle.ai — clarity of narrative and calls to action

## Decisions (confirmed)
- Headline approved: “Elevate decisions with modern Business Intelligence and AI.”
- Palette will be taken from `Logos/Color Scheme.png`.
- Typography approved: Sora/IBM Plex Sans (headings), Inter (body).
- Analytics deferred for MVP; evaluate later (e.g., Plausible or GA4).
- Booking via Calendly.


