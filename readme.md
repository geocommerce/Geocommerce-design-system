# Geocommerce Design System

Geocommerce is a Shopify design, development and CRO agency with offices in Lincoln (UK) and Jaipur (India). It sells premium storefront redesigns, conversion-rate optimization, Shopify Plus engineering, and platform migrations to ambitious ecommerce brands. Its own site — **geocommerce.co**, itself a Shopify storefront — is the flagship surface: an editorial, proof-heavy agency site built around metrics, case studies and a single green accent.

## Sources used to build this system

| Source | What was taken from it |
| --- | --- |
| `https://geocommerce.co` (live site, fetched as text) | Page structure, section order, all headline and body copy, nav/footer content, stat and testimonial language. The site's CSS was not accessible, so the token values below are derived, not extracted. |
| `uploads/G_240x240.png` | The Geocommerce brand mark — a multicolour pin-cluster "G". Copied verbatim to `assets/logo-mark.png`. |
| `uploads/Jost-*.ttf`, `uploads/Poppins-*.ttf` (+ `OFL.txt`) | The two brand typefaces, self-hosted in `assets/fonts/`. |
| Brief from Ashwani | `#006c50` as the primary green, `#F7F7F2` as the base surface (matching geocommerce.in). Both are anchors of the colour system. |

Related properties named on the site but **not** modelled here: `pulse.geocommerce.co` (the Pulse product) and its Audit tool, and `geocommerce.in` (India site, where case-study pages live).

## Index

- `styles.css` — the single entry point consumers link. Imports only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`.
- `assets/` — `logo-mark.png`, `fonts/` (Jost variable + Poppins statics, `OFL.txt`).
- `guidelines/` — 15 specimen cards for colour, type, spacing, shape, motion, logo and voice.
- `components/` — the React primitives, grouped `core` / `marketing` / `forms`.
- `ui_kits/marketing-site/` — click-through recreation of geocommerce.co (see its own README).
- `SKILL.md` — packaging for use as an Agent Skill.

### Components

**core** — `Button`, `ArrowLink`, `Eyebrow`, `Badge`, `Card`, `Logo`
**marketing** — `StatBlock`, `ServiceCard`, `CaseStudyCard`, `ProcessStep`, `Testimonial`, `LogoWall`, `Accordion`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`

No component library or Figma file was supplied, so this set was authored from the patterns the live site actually uses. Every one maps to a real block on geocommerce.co; nothing speculative (no Toast, Avatar, Tabs, Modal) has been added.

## Content fundamentals

**Voice.** Plural first person, always: "We build", "We analyze your funnel", "We don't just build stores." Never "I". The reader is "you" / "your store" / "your brand". Confident but not loud — claims are backed by a number within a sentence or two.

**Casing.** Headlines and subheads are sentence case ("How we help brands grow on Shopify"), not title case. Buttons are title case ("Start Your Project", "Book a Consultation", "View Case Studies"). Eyebrows are all-caps ("OUR EXPERTISE", "RESULTS & PROOF", "SELECTED SHOPIFY ENGAGEMENTS").

**Sentence shape.** Two moves dominate:
1. A claim followed by its mechanism — "Rebuilt around buyer intent, not assumptions."
2. A negation that sets up the real offer — "We don't just build stores; we engineer growth engines."

**Numbers carry the argument.** `+24%`, `150+`, `3.2s`, `$500M+`, `+12% avg. conversion lift across US & EU storefronts`. Metrics are always paired with a short uppercase caption. Where a number is unavailable, don't invent a superlative — describe the mechanism instead.

**Vocabulary in use:** storefront, conversion, CRO, PDP, collection page, merchandising, migration, Shopify Plus, Liquid, Hydrogen, headless, heatmaps, session recordings, checkout drop-off, GMV. Aspirational register appears too — "editorial", "bespoke", "premium", "curated luxury digital showrooms" — but never in the same sentence as a metric.

**No emoji.** Anywhere. No exclamation marks either. The only decorative glyph is the arrow `→` after link and button labels, and `+` / `×` on accordions.

**CTA copy** is short and imperative: "Start Your Project", "View Case Studies →", "Book a Consultation", "Get in touch". Form microcopy is plain and promises a timeframe: "We reply within one business day."

## Visual foundations

**Colour.** One green does all the accent work: `--green-600` `#006c50`, a deep pine that reads as trustworthy rather than energetic. Page background is `--shell-000` `#f7f7f2` — the soft warm-grey off-white used on geocommerce.in, which keeps the palette from feeling clinical without adding a colour cast. Dark sections use `--green-900` `#00301f`, never pure black. Text greys (`--ink-*`) are cooled a few degrees toward green so they sit on the shell without looking blue. Clay, gold, berry and sky are sampled from the logo's pin cluster and used only for semantic states and rare data accents — never as decorative fills. Maximum two background colours per screen or deck: shell plus one of white / green-900 / green-600.

**Type.** Jost (geometric, variable) for everything display: h1–h4, wordmark, large numerals, pull quotes. Poppins for everything read: body, leads, labels, buttons, eyebrows, form text. Headings run Jost Medium (500) with negative tracking (−0.02 to −0.03em) and tight leading (1.04 at h1). Body runs Poppins Regular at 16/1.55, leads at 18/1.7. Eyebrows are the system's signature: 12px, Poppins Medium, uppercase, 0.16em tracking. Jost Light (300) is reserved for pull quotes and step numerals.

**Layout.** 1240px max container, 32px page gutters, 128px vertical section rhythm (80px for tight/band sections). Two-column asymmetric splits (roughly 1.05 : 0.95 for heroes, 0.8 : 1.2 for text-plus-list) rather than symmetric halves. Headings are constrained to 18–22ch so they wrap into two or three deliberate lines; body to 54–64ch. Sections alternate shell → sunken → shell → inverse; the inverse band is where stats and the testimonial live.

**Backgrounds.** Flat colour. No photographic hero background, no repeating pattern, no texture, no grain. The one gradient in the system is a 160° green-700 → green-900 fill behind the hero media well, and it exists because the hero image slot needs a dark field for the mark. Imagery, where it appears, is warm-toned editorial product and lifestyle photography sitting inside 12px-radius wells; client logos are always desaturated to greyscale at ~70% opacity so no client brand outshouts Geocommerce.

**Shape.** Cards 18px radius; media wells 12px; input fields 8px (fields are the one control that is deliberately *not* pill-shaped); buttons, chips and filters fully pill (999px). Nothing is square-cornered except the spacing swatches and the page itself.

**Borders.** A single hairline weight, 1px, in `--shell-300` on light surfaces and `--ink-200` on white. Rules — not boxes — do most of the separating: the methodology list, footer columns and stat rows are divided by 1px top borders, with no card chrome at all. On dark sections, borders are `rgba(255,250,248,.12)`.

**Shadows.** Low-contrast and diffuse. `--shadow-sm` (0 2px 8px / 6%) for resting cards, `--shadow-md` (0 10px 28px −12px / 18%) on hover, `--shadow-lg` for the hero well. `--shadow-brand` — a green-tinted 0 18px 40px −20px — appears only under a hovered primary button. There is no inner-shadow system; depth is communicated by surface colour, not by inset lighting.

**Hover.** Primary buttons darken green-600 → green-700 and gain the brand shadow. Secondary buttons invert completely: transparent-on-ink becomes ink-on-shell. Ghost buttons pick up a shell-100 wash. Cards lift 3px and deepen their shadow. Arrow links grow a 1px underline and slide their `→` 4px right. Case-study images scale to 1.04. Nav links show a 1px brand underline when active. Client logos do not respond to hover.

**Press.** Buttons scale to 0.98 — a small mechanical dip, never a colour flash and never a ripple.

**Focus.** 2px `--green-500` outline at 2px offset on every interactive element; fields additionally take a 3px `rgba(10,133,99,.32)` ring and swap their border to brand green.

**Motion.** One easing curve does nearly all the work: `cubic-bezier(.22,.61,.36,1)`, a standard decelerating ease. Durations are 120ms (press/micro), 220ms (hover, colour, accordion), 420ms (image scale, reveals). No bounce, no spring, no overshoot, no parallax. Scroll reveals, where used, are a short opacity fade with a 12–16px rise at 700ms — never a slide from off-screen.

**Transparency and blur.** Used in exactly one place: the sticky header, `rgba(255,250,248,.86)` over a 14px backdrop blur. Overlays for modals use `rgba(16,20,19,.55)` flat. There are no protection gradients over imagery — text is never set on top of a photo; it sits beside it.

**Fixed elements.** Only the header is sticky. No floating action button, no sticky sidebar, no cookie-style bottom bar in the design language.

## Iconography

The site uses almost no icons, and this is a deliberate characteristic rather than a gap. What it uses instead:

- **Unicode glyphs as the icon system.** `→` after links and CTAs, `+` / rotated-45° `+` for accordions, `✓` inside checkboxes, `▾` on selects, `·` as a separator in category kickers. These are typed characters in Poppins, not drawn shapes, and they inherit `currentColor` and font-weight.
- **Logos as the only real imagery in chrome** — the Geocommerce mark, the Shopify Partners badge, and client marks.
- **No icon font, no sprite sheet, no Lucide/Heroicons/Font Awesome dependency** was found in the source, and none has been substituted. If a build genuinely needs a drawn icon set, pick **Lucide** at 1.5px stroke from CDN — it is the closest match to the site's hairline weight — and flag the addition, because it is not part of the source system.
- **No emoji, ever.**

The only bitmap asset supplied is `assets/logo-mark.png` (240×240). Vector versions of the mark and the wordmark, the Shopify Partners badge, client logos, hero photography and case-study imagery all live on the Shopify CDN and could not be copied in — media wells in the UI kit render as neutral placeholders.

## Intentional additions

- **`Eyebrow`** — the uppercase section kicker is used on nearly every block of the site but has no name there. Naming it as a component stops consumers from re-typing the tracking values.
- **`ArrowLink`** — likewise, "View Case Study →" recurs enough to deserve one implementation.

## Known gaps

- Real typographic and spacing values from the live theme's CSS could not be read (the stylesheet was not fetchable). The scale here is a faithful reconstruction from rendered proportions and the brief's two anchor colours, not an extraction.
- No photography, client logo files, or the vector logo were available to copy.
- The Pulse product (`pulse.geocommerce.co`) has no UI kit — no source for it was provided.
