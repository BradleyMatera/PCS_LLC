(() => {
  const INVENTORY = [
    // Add Tyler's real trucks here. This single list controls all five designs.
    // Example shape only — do not publish made-up truck details:
    // {
    //   id: 'truck-001',
    //   status: 'available', // available | pending | sold
    //   statusDate: '2026-08-04',
    //   title: 'Year Make Model / Truck Type',
    //   price: 'Call for price',
    //   image: '../assets/inventory/truck-001.jpg',
    //   alt: 'Side view of the truck',
    //   location: 'Rockford area',
    //   facts: ['Mileage', 'Engine', 'Boom or body', 'Known condition'],
    //   note: 'Short factual description.'
    // }
  ];

  const PHONE_DISPLAY = '(815) 713-6291';
  const PHONE_LINK = 'tel:+18157136291';
  const EMAIL = 'pcstrucksales@gmail.com';

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

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
          <img src="${escapeHtml(truck.image)}" alt="${escapeHtml(truck.alt || truck.title)}" loading="eager" decoding="async">
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
            <a class="button button-secondary" href="mailto:${EMAIL}?subject=${encodeURIComponent(`Question about ${truck.title}`)}">Email about this truck</a>
          </div>
        </div>
      </article>`;
  };

  const inventorySection = document.createElement('section');
  inventorySection.className = 'section inventory-section';
  inventorySection.id = 'inventory';
  inventorySection.setAttribute('aria-labelledby', 'inventory-title');

  if (INVENTORY.length) {
    inventorySection.innerHTML = `
      <div class="container">
        <div class="section-head">
          <div><p class="eyebrow">Current inventory</p><h2 id="inventory-title">Trucks available from PCS.</h2></div>
          <p class="lead">Listings are updated manually as each truck becomes available, goes pending, or sells. Call Tyler to confirm the current status before traveling.</p>
        </div>
        <div class="inventory-grid">${INVENTORY.map(truckCard).join('')}</div>
      </div>`;
  } else {
    inventorySection.innerHTML = `
      <div class="container">
        <div class="section-head">
          <div><p class="eyebrow">Current inventory</p><h2 id="inventory-title">New truck listings are being added.</h2></div>
          <p class="lead">PCS sells a small number of work trucks, so inventory changes quickly. Call Tyler now for the trucks currently available and check back for full photos and specifications.</p>
        </div>
        <div class="inventory-empty">
          <img src="../assets/bucket-truck.svg" width="900" height="420" alt="Commercial bucket truck illustration">
          <div>
            <h3>Ask what is available today.</h3>
            <p>Tyler can confirm the truck type, year, mileage, equipment, known condition, price, inspection options, and pickup details.</p>
            <div class="button-row">
              <a class="button button-primary" href="${PHONE_LINK}">Call Tyler · ${PHONE_DISPLAY}</a>
              <a class="button button-secondary" href="mailto:${EMAIL}?subject=Current%20truck%20inventory">Email PCS Truck Sales</a>
            </div>
          </div>
        </div>
      </div>`;
  }

  const style = document.createElement('style');
  style.textContent = `
    .inventory-section{padding-top:clamp(2rem,5vw,4rem)}
    .inventory-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,320px),1fr));gap:1.25rem}
    .inventory-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-md);overflow:hidden;box-shadow:var(--shadow-1)}
    .inventory-image-wrap{position:relative;aspect-ratio:16/10;background:var(--surface);overflow:hidden}
    .inventory-image-wrap img{width:100%;height:100%;object-fit:cover;display:block}
    .inventory-status{position:absolute;inset:auto 0 0 0;padding:.8rem 1rem;background:rgba(10,15,20,.88);color:#fff;font-weight:900;text-transform:uppercase;letter-spacing:.06em;text-align:center}
    .inventory-pending .inventory-status{background:rgba(173,91,0,.94)}
    .inventory-sold .inventory-image-wrap img{filter:grayscale(1);opacity:.62}
    .inventory-sold .inventory-status{background:rgba(120,10,10,.94)}
    .inventory-body{padding:clamp(1rem,3vw,1.5rem)}
    .inventory-body h3{margin:.2rem 0 .5rem}
    .inventory-price{font-size:1.35rem;font-weight:900;margin:.3rem 0 1rem}
    .inventory-body ul{padding-left:1.2rem}
    .inventory-empty{display:grid;grid-template-columns:minmax(240px,.8fr) minmax(280px,1.2fr);gap:clamp(1.25rem,4vw,3rem);align-items:center;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-md);padding:clamp(1rem,4vw,2rem);box-shadow:var(--shadow-1)}
    .inventory-empty img{width:100%;height:auto}
    @media(max-width:760px){.inventory-empty{grid-template-columns:1fr}.inventory-section{padding-top:1rem}}
  `;
  document.head.appendChild(style);

  const hero = document.querySelector('main .hero');
  if (hero) hero.insertAdjacentElement('afterend', inventorySection);
  else document.querySelector('main')?.prepend(inventorySection);

  document.querySelectorAll('details').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('details[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
