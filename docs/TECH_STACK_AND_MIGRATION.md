# Tech Stack & Migration

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS, next/font with local hosting
- MDX (Contentlayer) for blog and lightweight pages
- next/image for optimization

## Forms
- AWS Amplify Function + Amazon SES (verified domain)
- Optional DynamoDB for lead logging; hCaptcha/Recaptcha
- Booking via Calendly link/embed on Contact page

## Analytics & Privacy
- Deferred selection for MVP; add lightweight pageview stub only
- If GA4 later, add cookie banner and update Privacy Policy/DPA

## SEO
- Title/description, OpenGraph/Twitter, sitemap.xml, robots.txt
- JSON‑LD schema: Organization, Service, Article

## Amplify Hosting & CI/CD
- Connect GitHub repo; preview deployments for PRs
- Environment variables for form endpoints/SES
- Domain: `harvestanalytics.io` on Amplify; HTTPS enabled
- Redirects: 301 map from current URLs to new routes
- Monitoring: Amplify + CloudWatch alarms for function errors

## Migration Checklist
- Create GitHub repo `harvest-website` (main + preview branches)
- Add ESLint/Prettier/type‑check in CI
- Configure Amplify app and environments
- Verify SES domain and emails
- Implement redirects; validate via crawl


