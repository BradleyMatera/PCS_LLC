# PCS Truck Sales Website Review

This repository contains five finished website design directions prepared for Tyler Palmer's work-truck sales business.

## Current source of truth

Tyler clarified that this is **not** a repair-shop website.

- **Public brand:** PCS Truck Sales
- **Meaning of PCS:** Petrichor Contracting Services
- **Primary contact:** Tyler Palmer
- **Phone:** (815) 713-6291
- **Email:** pcstrucksales@gmail.com
- **Facebook page name:** PCS Truck Sales
- **Business focus:** Commercial work trucks Tyler buys and sells

The repository name remains `PCS_LLC` until Bradley changes it last. Existing GitHub Pages URLs therefore continue to use `/PCS_LLC/` even though the public-facing name is PCS Truck Sales.

## Business focus

- Bucket trucks
- Utility trucks
- Service trucks
- Crane trucks
- Commercial work trucks
- Truck bodies and related work-truck equipment
- Buying trucks from owners and businesses
- Selling available commercial equipment directly

## Manual inventory system

All five designs use one shared inventory list near the top of `assets/site.js`. A truck entered there appears immediately after the hero section on every design, so visitors see current inventory within the first screen or first short scroll.

Each truck supports:

- `available`
- `pending`
- `sold`
- A status date
- One primary image
- Title and price
- Location
- Key facts such as mileage, engine, boom/body, and known condition
- A short factual note
- Direct call and email actions

### Add a truck

1. Upload the truck's main image to `assets/inventory/`.
2. Add one truck object to the `INVENTORY` list in `assets/site.js`.
3. Use only details Tyler has confirmed.
4. Commit and allow GitHub Pages to deploy.

### Mark a sale pending

Keep the same image and listing. Change:

```js
status: 'pending',
statusDate: 'YYYY-MM-DD',
```

The site automatically places a dated **SALE PENDING** overlay across the image.

### Mark a truck sold

Keep the same image and listing. Change:

```js
status: 'sold',
statusDate: 'YYYY-MM-DD',
```

The site automatically grays the image and places a dated **SOLD** overlay across it. Keeping sold listings briefly provides proof that PCS actively moves trucks. Remove or archive them later when the page becomes crowded.

## Accuracy rules

- Do not present PALMERS REPAIR LLC as the business behind this website.
- Do not describe this as a repair-shop website.
- Do not publish a truck as available unless Tyler confirms it is current.
- Confirm condition, mileage, specifications, title status, included equipment, price, inspection, payment, pickup or delivery, and warranty terms for each truck.
- Do not promise financing, delivery, inspections, certifications, or warranties unless Tyler confirms them.
- Use `(815) 713-6291` and `tel:+18157136291` for calls.
- Use `pcstrucksales@gmail.com` for email.
- Do not put internal branding or future rebranding plans in customer-facing copy.

## Website structure

- `/` presents the five design options to Tyler.
- `/v1/` through `/v5/` contain separate finished design directions.
- `assets/` contains shared styles, scripts, original graphics, and inventory images.
- `privacy.html` and `accessibility.html` provide supporting policy pages.

## Deployment

The static review site deploys through GitHub Pages from the `main` branch. All five versions remain `noindex` until Tyler selects the final public design.
