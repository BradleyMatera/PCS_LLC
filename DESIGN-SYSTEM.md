# PCS LLC design system

The five concepts share one accessibility-first component system and use visual themes as token overrides.

## Foundations
- Semantic HTML before JavaScript
- Fluid type scale using `clamp()`
- Eight-step spacing scale
- Minimum 48px primary action targets
- Visible `:focus-visible` treatment
- Reduced-motion support
- Responsive layouts without device-specific content
- Original SVG artwork, avoiding unlicensed stock imagery
- Prominent click-to-call actions using `(815) 558-0657`

## Graphic and image rules
- Never depend on CSS `currentColor` or page-level custom properties inside an SVG loaded through an `<img>` element. External SVG images do not inherit those values from the HTML page.
- Use explicit SVG fill and stroke colors.
- Any artwork reused across light and dark themes must use layered light and dark outlines or have separate palette-specific assets.
- Visually test every hero image on its actual page background before publishing.
- Preserve meaningful alternative text and leave decorative preview images with an empty `alt` value.
- Do not use scraped marketplace or Facebook photography without permission from the image owner.

## Shared components
- Skip link
- Header and primary navigation
- Hero with direct call to action
- Call-preparation strip
- Truck-category cards
- About PCS LLC section
- Buyer checklist
- FAQ disclosure pattern
- Repeated telephone call to action
- Sticky mobile call bar
- Legal and accessibility footer links

## Contact rules
- Calls are the primary contact method.
- Use `tel:+18155580657` for click-to-call links.
- Display the number as `(815) 558-0657`.
- Do not direct buyers to Tyler's personal Facebook profile.
- Help callers prepare by asking for the intended job, truck type, reach or equipment needs, budget, location, and timeline.

## Content rules
- Do not publish Tyler's home address.
- Do not claim certifications, warranties, inspection results, financing, dealer status, delivery, or repair services until Tyler confirms them.
- Confirm every truck's availability, condition, mileage, specifications, title status, included equipment, and price before publishing it as current inventory.
- Confirm payment, inspection, pickup or delivery, and warranty terms for each individual sale.

## Review-mode search rules
- Keep all five duplicate concepts set to `noindex,follow` while Tyler is choosing.
- Do not submit review concepts in the production sitemap.
- After one version is chosen, remove review-only navigation, set the selected page to `index,follow`, restore the sitemap entry, and update the canonical URL for the final domain.
