# Marketing site UI kit

Click-through recreation of **geocommerce.co** (Shopify-hosted agency site), rebuilt from the live page's content and structure using this design system's primitives.

| File | What it is |
| --- | --- |
| `index.html` | Interactive shell — sticky header, page router, footer. Start here. |
| `SiteChrome.jsx` | `SiteHeader`, `SiteFooter`, `Section` (max-width 1240px, 128px vertical rhythm). |
| `HomeScreen.jsx` | Hero, logo wall, expertise grid, stat band, selected work, methodology, testimonial, closing CTA. |
| `WorkScreen.jsx` | Filterable case-study index. |
| `ServicesScreen.jsx` | Service grid + FAQ accordion + brand CTA panel. |
| `ContactScreen.jsx` | Project-inquiry form with a success state. |

Interactions that work: header nav, work filters, FAQ accordion, form submit → thank-you state.

**Placeholders.** The live site's photography, client logo SVGs and case-study imagery are hosted on Shopify's CDN and were not copied in. Media wells render as neutral placeholders; the hero shows the brand mark on a green field. Swap in real imagery before using any of this as a client-facing artefact.
