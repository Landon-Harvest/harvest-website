# Brand Assets

## Source of truth
- Logos and color references: `/Users/landon/Documents/code_projects/Harvest-website/Logos`
- Examples: `Logo Design.svg`, `Logo Design.png/pdf`, `Color Scheme.png`, profile marks (green/white/yellow), business card comps.

## Logo usage (web)
- Prefer SVG for crisp scaling; keep a single exported `logo.svg` and `logo-wordmark.svg`.
- Provide dark and light variants for contrasting backgrounds.
- Minimum sizes: 24px height on mobile; 28–32px on desktop.
- Preserve clearspace: at least the x‑height around the mark.

## Color palette
- Use the palette aligned to `Logos/Color Scheme.png` (single source of truth).
- Exact HEX values will be sampled directly from the artifact during design‑system setup.

## Typography (approved)
- Headings: Sora or IBM Plex Sans
- Body: Inter
- Mono: IBM Plex Mono

## Components referencing brand
- Hero: subtle gradient accents using Deep Green; avoid heavy overlays.
- Service cards: soft border/hover using Accent Lime at low opacity.
- CTA band: limited use of Accent Lime on action buttons.

## Favicons & social
- Generate a favicon set (ico/png/svg) from `logo-mark`.
- Provide OpenGraph/Twitter card lockups with dark and light backgrounds.

## Implementation notes
- Prefer placing final web exports under `public/brand/` once the app is initialized.
- Keep original source files in `Logos/` as the master archive.


