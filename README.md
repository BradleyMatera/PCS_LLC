# PCS Truck Sales Website Review

This repository contains five finished website design directions prepared for Tyler Palmer's work-truck sales business.

## Current source of truth

Tyler clarified that this is **not** a repair-shop website.

- **Public brand:** PCS Truck Sales
- **Primary contact:** Tyler Palmer
- **Phone:** (815) 713-6291
- **Email:** pcstrucksales@gmail.com
- **Facebook:** https://www.facebook.com/profile.php?id=61577572161268
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

## Current inventory loaded from Tyler's photos

The website now lists these current trucks from the PCS Truck Sales Facebook/photo inventory:

1. **2015 4x4 flatbed truck** — 187k miles — **$17,500**
2. **2012 bucket truck** — 149k miles — 30 ft bucket — **$18,500**
3. **2015 4x4 service truck with crane and compressor** — 70k miles — 6,400 lb crane — hydraulic compressor — **$67,500**
4. **Ford F-550 4x4 dump / service truck** — 160k miles — **$29,000**
5. **2009 F-550 4x4 crane truck** — 167k miles — 4k crane — **$12,500**
6. **Service truck with 7,500 lb crane** — 213k miles — **$38,500**

The source images also include a PCS work-truck lot photo, a bucket-truck example photo, and a yard-lineup photo. The photo files are stored under `assets/inventory/` and referenced by `assets/site.js`.

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
- Key facts such as mileage, crane, bucket, body, and known condition
- A short factual note
- Direct call, email, and Facebook actions

### Add or replace a truck

1. Put the truck's photo asset in `assets/inventory/`.
2. Add or replace one truck object in the `INVENTORY` list in `assets/site.js`.
3. Use only details Tyler has confirmed or details clearly shown in the source photo.
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
- Link Facebook as `https://www.facebook.com/profile.php?id=61577572161268`.
- Do not put internal branding or future rebranding plans in customer-facing copy.

## Website structure

- `/` presents the five design options to Tyler.
- `/v1/` through `/v5/` contain separate finished design directions.
- `assets/` contains shared styles, scripts, original graphics, and inventory images.
- `privacy.html` and `accessibility.html` provide supporting policy pages.

## Deployment

The static review site deploys through GitHub Pages from the `main` branch. All five versions remain `noindex` until Tyler selects the final public design.
