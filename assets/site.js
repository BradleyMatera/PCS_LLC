(() => {
  const PHONE_DISPLAY = '(815) 713-6291';
  const PHONE_LINK = 'tel:+18157136291';
  const EMAIL = 'pcstrucksales@gmail.com';
  const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61577572161268';
  const ASSET_BASE = /\/v\d+\/?$/.test(window.location.pathname) ? '../assets/inventory/' : 'assets/inventory/';

  const INVENTORY = [
    {
      id: '2015-4x4-flatbed',
      status: 'available',
      statusDate: '2026-08-04',
      title: '2015 4x4 flatbed truck',
      price: '$17,500',
      image: '2015-ford-4x4-flatbed.svg',
      alt: 'White 2015 four-wheel-drive flatbed work truck listed by PCS Truck Sales',
      location: 'Rockford area',
      facts: ['187k miles', '4x4', 'Flatbed work-truck setup', 'Call Tyler to verify exact make, model, title, condition, and pickup details'],
      note: 'Listing details are taken from Tyler’s posted inventory image. Confirm availability before traveling.'
    },
    {
      id: '2012-bucket-30ft',
      status: 'available',
      statusDate: '2026-08-04',
      title: '2012 bucket truck',
      price: '$18,500',
      image: '2012-ford-bucket-30ft.svg',
      alt: 'White 2012 bucket truck with boom raised listed by PCS Truck Sales',
      location: 'Rockford area',
      facts: ['149k miles', '30 ft bucket', 'Altec bucket equipment pictured', 'Call Tyler to confirm reach, inspection, and included equipment'],
      note: 'Bucket-truck listing from Tyler’s posted inventory image.'
    },
    {
      id: '2015-4x4-crane-compressor',
      status: 'available',
      statusDate: '2026-08-04',
      title: '2015 4x4 service truck with crane and compressor',
      price: '$67,500',
      image: '2015-ford-service-crane-compressor.svg',
      alt: 'White 2015 four-wheel-drive service truck with crane and compressor listed by PCS Truck Sales',
      location: 'Rockford area',
      facts: ['70k miles', '4x4', '6,400 lb crane', 'Hydraulic compressor'],
      note: 'High-spec service truck. Confirm crane rating, compressor details, service history, and title directly with Tyler.'
    },
    {
      id: 'f550-4x4-dump',
      status: 'available',
      statusDate: '2026-08-04',
      title: 'Ford F-550 4x4 dump / service truck',
      price: '$29,000',
      image: '2013-ford-f550-4x4-dump.svg',
      alt: 'White Ford F-550 four-wheel-drive dump and service truck listed by PCS Truck Sales',
      location: 'Rockford area',
      facts: ['160k miles', '4x4', 'Dump bed shown raised', 'Service body storage pictured'],
      note: 'The year is partly cropped in the source image, so the listing keeps the title general until Tyler confirms the exact year.'
    },
    {
      id: '2009-f550-crane',
      status: 'available',
      statusDate: '2026-08-04',
      title: '2009 F-550 4x4 crane truck',
      price: '$12,500',
      image: '2009-ford-f550-crane.svg',
      alt: 'White 2009 Ford F-550 four-wheel-drive crane truck listed by PCS Truck Sales',
      location: 'Rockford area',
      facts: ['167k miles', '4x4', '4k crane', 'Service body pictured'],
      note: 'Value crane-truck listing. Confirm crane operation, title, inspection, and pickup details.'
    },
    {
      id: '7500lb-crane-service-truck',
      status: 'available',
      statusDate: '2026-08-04',
      title: 'Service truck with 7,500 lb crane',
      price: '$38,500',
      image: 'service-truck-7500lb-crane.svg',
      alt: 'White service truck with 7500 pound crane listed by PCS Truck Sales',
      location: 'Rockford area',
      facts: ['213k miles', '7,500 lb crane', 'Service body with crane equipment pictured', 'Call Tyler to confirm year and full specifications'],
      note: 'The year and model are cropped in the source image. Confirm exact details with Tyler before purchase.'
    }
  ];

  const SUPPORTING_PHOTOS = [
    { title: 'PCS work-truck lot', image: 'inventory-lot.svg', alt: 'PCS Truck Sales work-truck lot with multiple commercial trucks' },
    { title: 'Bucket truck example', image: '2012-ford-f550-bucket-main.svg', alt: 'White bucket truck with boom extended in a yard' },
    { title: 'Yard lineup', image: 'yard-lineup.svg', alt: 'Lineup of commercial bucket trucks and work trucks in a yard' }
  ];

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const imageUrl = (file) => `${ASSET_BASE}${file}`;

  const statusLabel = (truck) => {
    if (truck.status === 'pending') return `Sale pending${truck.statusDate ? ` · ${truck.statusDate}` : ''}`;
    if (truck.status === 'sold') return `Sold${truck.statusDate ? ` · ${truck.statusDate}` : ''}`;
    return 'Available';
  };

  const truckCard = (truck) => {
    const status = ['available', 'pending', 'sold'].includes(truck.status) ? truck.status : 'available';
    const facts = Array.isArray(truck.facts) ? truck.facts.filter(Boolean) : [];
    return `
      <article class="inventory-card inventory-${status}">
        <div class="inventory-image-wrap">
          <img src="${imageUrl(truck.image)}" alt="${escapeHtml(truck.alt || truck.title)}" loading="eager" decoding="async">
          <div class="inventory-status">${escapeHtml(statusLabel(truck))}</div>
        </div>
        <div class="inventory-body">
          <p class="eyebrow">${escapeHtml(truck.location || 'Rockford area')}</p>
          <h3>${escapeHtml(truck.title)}</h3>
          <p class="inventory-price">${escapeHtml(truck.price || 'Call for price')}</p>
          ${facts.length ? `<ul>${facts.map((fact) => `<li>${escapeHtml(fact)}</li>`).join('')}</ul>` : ''}
          ${truck.note ? `<p>${escapeHtml(truck.note)}</p>` : ''}
          <div class="button-row">
            <a class="button button-primary" href="${PHONE_LINK}">Call Tyler · ${PHONE_DISPLAY}</a>
            <a class="button button-secondary" href="${FACEBOOK_URL}" target="_blank" rel="noopener">View on Facebook</a>
          </div>
        </div>
      </article>`;
  };

  const photoCard = (photo) => `
    <figure class="inventory-photo-card">
      <img src="${imageUrl(photo.image)}" alt="${escapeHtml(photo.alt || photo.title)}" loading="lazy" decoding="async">
      <figcaption>${escapeHtml(photo.title)}</figcaption>
    </figure>`;

  const inventorySection = document.createElement('section');
  inventorySection.className = 'section inventory-section';
  inventorySection.id = 'inventory';
  inventorySection.setAttribute('aria-labelledby', 'inventory-title');
  inventorySection.innerHTML = `
    <div class="container">
      <div class="section-head inventory-head">
        <div>
          <p class="eyebrow">Current inventory</p>
          <h2 id="inventory-title">Trucks for sale right now.</h2>
        </div>
        <p class="lead">These listings are built from Tyler's current PCS Truck Sales photos. Call or message Tyler before traveling because work-truck inventory can change quickly.</p>
      </div>
      <div class="button-row inventory-actions">
        <a class="button button-primary" href="${PHONE_LINK}">Call Tyler · ${PHONE_DISPLAY}</a>
        <a class="button button-secondary" href="${FACEBOOK_URL}" target="_blank" rel="noopener">PCS Truck Sales on Facebook</a>
        <a class="button button-secondary" href="mailto:${EMAIL}?subject=PCS%20Truck%20Sales%20inventory">Email PCS</a>
      </div>
      <div class="inventory-grid">${INVENTORY.map(truckCard).join('')}</div>
      <div class="section-head inventory-gallery-head">
        <div><p class="eyebrow">More photos</p><h2>Truck lot and equipment shots.</h2></div>
        <p class="lead">Extra photos show the type of commercial equipment PCS keeps around. Use the listing cards above for pricing and details.</p>
      </div>
      <div class="inventory-photo-grid">${SUPPORTING_PHOTOS.map(photoCard).join('')}</div>
    </div>`;

  const style = document.createElement('style');
  style.textContent = `
    .inventory-section{padding-top:clamp(1.25rem,4vw,3rem)}
    .inventory-head{margin-bottom:1rem}
    .inventory-actions{margin:0 0 clamp(1rem,3vw,1.5rem)}
    .inventory-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,315px),1fr));gap:1.25rem}
    .inventory-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-1)}
    .inventory-image-wrap{position:relative;aspect-ratio:1/1;background:var(--surface);overflow:hidden}
    .inventory-image-wrap img{width:100%;height:100%;object-fit:cover;display:block}
    .inventory-status{position:absolute;inset:auto 0 0 0;padding:.8rem 1rem;background:rgba(10,15,20,.88);color:#fff;font-weight:900;text-transform:uppercase;letter-spacing:.06em;text-align:center}
    .inventory-pending .inventory-status{background:rgba(173,91,0,.94)}
    .inventory-sold .inventory-image-wrap img{filter:grayscale(1);opacity:.62}
    .inventory-sold .inventory-status{background:rgba(120,10,10,.94)}
    .inventory-body{padding:clamp(1rem,3vw,1.5rem)}
    .inventory-body h3{margin:.2rem 0 .5rem}
    .inventory-price{font-size:1.45rem;font-weight:900;margin:.3rem 0 1rem}
    .inventory-body ul{padding-left:1.2rem}
    .inventory-gallery-head{margin-top:clamp(2rem,5vw,3rem)}
    .inventory-photo-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:1rem}
    .inventory-photo-card{margin:0;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-1)}
    .inventory-photo-card img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}
    .inventory-photo-card figcaption{padding:.85rem 1rem;font-weight:800}
    @media(max-width:760px){.inventory-section{padding-top:1rem}.inventory-actions .button{width:100%;justify-content:center}}
  `;
  document.head.appendChild(style);

  const hero = document.querySelector('main .hero');
  if (hero) hero.insertAdjacentElement('afterend', inventorySection);
  else document.querySelector('main')?.prepend(inventorySection);

  document.querySelectorAll('.footer-contact').forEach((footer) => {
    if (footer.querySelector('[data-pcs-facebook]')) return;
    const line = document.createElement('div');
    line.innerHTML = `<a data-pcs-facebook href="${FACEBOOK_URL}" target="_blank" rel="noopener">PCS Truck Sales on Facebook</a>`;
    footer.insertBefore(line, footer.firstChild);
  });

  if (!document.querySelector('script[data-pcs-schema]')) {
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.dataset.pcsSchema = 'inventory';
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'AutomotiveBusiness',
      name: 'PCS Truck Sales',
      url: window.location.href,
      telephone: '+1-815-713-6291',
      email: EMAIL,
      sameAs: [FACEBOOK_URL],
      description: 'PCS Truck Sales buys and sells bucket trucks, utility trucks, service trucks, crane trucks, flatbed trucks, dump trucks, and related commercial work trucks.',
      areaServed: 'Northern Illinois',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Current PCS Truck Sales inventory',
        itemListElement: INVENTORY.map((truck) => ({
          '@type': 'Offer',
          name: truck.title,
          price: truck.price?.replace(/[^0-9.]/g, '') || undefined,
          priceCurrency: truck.price?.includes('$') ? 'USD' : undefined,
          availability: truck.status === 'sold' ? 'https://schema.org/SoldOut' : 'https://schema.org/InStock',
          url: FACEBOOK_URL
        }))
      }
    });
    document.head.appendChild(schema);
  }

  document.querySelectorAll('details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('details[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
