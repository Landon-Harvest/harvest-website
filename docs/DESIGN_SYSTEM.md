# Design System (Foundations)

This defines reusable tokens and component patterns. Color values are sourced from `Logos/Color Scheme.png`.

## Color Tokens (to be sampled from Color Scheme)
- `color.primary` — Deep Green (brand)
- `color.accent` — Accent Lime (CTA/highlight)
- `color.neutral.900` — Near‑black for headings
- `color.neutral.700` — Body text
- `color.neutral.100` — Light backgrounds
- `color.surface` — Card backgrounds
- `color.border` — Subtle borders/dividers

Implementation notes: Use CSS variables and Tailwind theme extension. Sample exact HEX from the `Color Scheme.png` during UI build.

## Typography
- Headings: Sora or IBM Plex Sans
- Body: Inter
- Mono: IBM Plex Mono
- Scale: h1/h2/h3 with sensible fluid sizes; base 16px; line‑height 1.5–1.65

## Spacing & Layout
- Spacing scale (px): 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80
- Container widths: `sm 640` / `md 768` / `lg 1024` / `xl 1280` / `2xl 1440`
- Grid: 12‑col at desktop; 4‑col at tablet; 1‑col at mobile
- Radius: 6px default; 12px for cards; 9999px for pills
- Shadows: soft elevation for cards; stronger for overlays

## Components (UX patterns)
- Buttons: primary (accent bg, white text), secondary (ghost with border), subtle (text link)
- Cards: service/industry cards with minimal border; hover lift + border accent
- Sections: vertical rhythm with 64–96px spacing; alternate subtle bg for readability
- Hero: large headline, subhead, primary CTA, optional supporting visual; allow gradient accent
- Testimonial: quote + author meta; carousel optional
- CTA band: concise headline + primary CTA; high contrast

## Accessibility
- Contrast: WCAG AA minimum; avoid brand accent as text on light bg
- Focus states: visible outlines for interactive elements
- Motion: respect reduced motion

## Iconography & Imagery
- Prefer SVG icons
- Use optimized images with `next/image`; provide dark/light variants where needed

## Token Export Plan
- Tailwind theme extension in `tailwind.config.ts`
- CSS variables in `globals.css` for runtime theming


