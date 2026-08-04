# PALMERS REPAIR LLC design system

The five concepts share one accessibility-first component system and use visual themes as token overrides.

## Verified business identity
- Legal name: PALMERS REPAIR LLC
- Illinois domestic LLC file number: 18377489
- Registered agent: Tyler Palmer
- Registered address: 8515 N Main St, Rockford, IL 61103
- Phone: (815) 558-0657
- The repository and current GitHub Pages path remain `PCS_LLC` temporarily and will be renamed last.

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
- Never depend on CSS `currentColor` or page-level custom properties inside an SVG loaded through an `<img>` element.
- Use explicit SVG fill and stroke colors.
- Any artwork reused across light and dark themes must use layered light and dark outlines or separate palette-specific assets.
- Visually test every hero image on its actual page background before publishing.
- Preserve meaningful alternative text and leave decorative preview images with an empty `alt` value.
- Do not use scraped marketplace or social-media photography without permission.

## Shared components
- Skip link
- Header and primary navigation
- Hero with direct call to action
- Call-preparation strip
- Repair-service category cards
- Verified business section
- Repair authorization checklist
- FAQ disclosure pattern
- Repeated telephone call to action
- Sticky mobile call bar
- Privacy and accessibility footer links

## Contact rules
- Calls are the primary contact method.
- Use `tel:+18155580657` for click-to-call links.
- Display the number as `(815) 558-0657`.
- Do not direct visitors to Tyler's personal Facebook profile.
- Help callers prepare by asking for the vehicle year, make, model, engine, mileage, VIN when relevant, symptoms or damage, requested work, location, and timeline.

## Content rules
- Use the legal name `PALMERS REPAIR LLC` for the business.
- The registered address may be shown only as factual Illinois entity information. Do not imply public walk-in hours or invite unannounced visits.
- Do not claim certifications, towing, financing, warranties, fixed turnaround times, or guaranteed service availability unless Tyler confirms them.
- Treat mechanical repair, diesel repair, body work, parts replacement, and fabrication as call-to-confirm service categories.
- Confirm the estimate, authorization, parts, materials, labor, scheduling, payment, pickup, and warranty terms for every job.
- Do not describe the company as `PCS LLC`; that is only the temporary repository name and URL path.

## Review-mode search rules
- Keep all five duplicate concepts set to `noindex,follow` while Tyler is choosing.
- Do not submit review concepts in the production sitemap.
- After one version is chosen, remove review-only navigation, set the selected page to `index,follow`, restore the sitemap entry, and update the canonical URL for the final domain.
- Rename the repository and update `/PCS_LLC/` URLs only after content approval.
