/* ─── Card Catalog ─────────────────────────────────────────── */
const ALL_CARDS = [
  { name: "AmEx Platinum",                          issuer: "AmEx" },
  { name: "AmEx Platinum for Morgan Stanley",       issuer: "AmEx" },
  { name: "AmEx Platinum for Schwab",               issuer: "AmEx" },
  { name: "AmEx Gold",                              issuer: "AmEx" },
  { name: "AmEx Business Platinum",                 issuer: "AmEx" },
  { name: "AmEx Business Gold",                     issuer: "AmEx" },
  { name: "AmEx Graphite",                          issuer: "AmEx" },
  { name: "AmEx Hilton Aspire",                     issuer: "AmEx" },
  { name: "AmEx Marriott Bonvoy Brilliant",         issuer: "AmEx" },
  { name: "AmEx Marriott Bonvoy Bevy",              issuer: "AmEx" },
  { name: "AmEx Marriott Bonvoy Business",          issuer: "AmEx" },
  { name: "AmEx Delta SkyMiles Gold Business",      issuer: "AmEx" },
  { name: "Chase Sapphire Reserve",                 issuer: "Chase" },
  { name: "Chase Sapphire Reserve for Business",    issuer: "Chase" },
  { name: "Chase Sapphire Preferred",               issuer: "Chase" },
  { name: "Chase Ink Preferred",                    issuer: "Chase" },
  { name: "Chase Ink Cash",                         issuer: "Chase" },
  { name: "Chase Ink Unlimited",                    issuer: "Chase" },
  { name: "Chase Ink Premier",                      issuer: "Chase" },
  { name: "Chase United Explorer",                  issuer: "Chase" },
  { name: "Chase United Quest",                     issuer: "Chase" },
  { name: "Chase United Club",                      issuer: "Chase" },
  { name: "Chase United Club Business",             issuer: "Chase" },
  { name: "Chase United Business",                  issuer: "Chase" },
  { name: "Chase Aeroplan",                         issuer: "Chase" },
  { name: "Chase Aer Lingus",                       issuer: "Chase" },
  { name: "Chase British Airways",                  issuer: "Chase" },
  { name: "Chase Iberia",                           issuer: "Chase" },
  { name: "Chase Southwest Airlines Performance Business", issuer: "Chase" },
  { name: "Chase Southwest Airlines Premier Business",     issuer: "Chase" },
  { name: "Chase IHG Premier",                      issuer: "Chase" },
  { name: "Chase IHG Traveler",                     issuer: "Chase" },
  { name: "Chase World of Hyatt Business",          issuer: "Chase" },
  { name: "Chase Marriott Bonvoy Boundless",        issuer: "Chase" },
  { name: "Capital One Venture X",                  issuer: "Capital One" },
  { name: "Capital One Venture X Business",         issuer: "Capital One" },
  { name: "Capital One Venture",                    issuer: "Capital One" },
  { name: "Capital One Venture Business",           issuer: "Capital One" },
  { name: "Capital One VentureOne Business",        issuer: "Capital One" },
  { name: "Capital One Spark Cash",                 issuer: "Capital One" },
  { name: "Capital One Spark Cash Plus",            issuer: "Capital One" },
  { name: "Capital One Spark Cash Select",          issuer: "Capital One" },
  { name: "Citi Strata Elite",                      issuer: "Citi" },
  { name: "Citi Strata Premier",                    issuer: "Citi" },
  { name: "Citi AAdvantage Executive",              issuer: "Citi" },
  { name: "Citi AAdvantage Platinum Select",        issuer: "Citi" },
  { name: "Citi AAdvantage Globe",                  issuer: "Citi" },
  { name: "CitiBusiness AAdvantage Platinum Select",issuer: "Citi" },
  { name: "BoA Alaska Atmos Ascent",                issuer: "BoA" },
  { name: "BoA Alaska Atmos Business",              issuer: "BoA" },
  { name: "BoA Alaska Atmos Summit",                issuer: "BoA" },
  { name: "BoA Premium Rewards",                    issuer: "BoA" },
  { name: "BoA Premium Rewards Elite",              issuer: "BoA" },
  { name: "BoA Air France KLM",                     issuer: "BoA" },
  { name: "Barclays JetBlue Business",              issuer: "Barclays" },
  { name: "Barclays JetBlue Plus",                  issuer: "Barclays" },
  { name: "Barclays Wyndham Earner Plus",           issuer: "Barclays" },
  { name: "Wells Fargo Premier Autograph",          issuer: "Wells Fargo" },
  { name: "US Bank Business Altitude Connect",      issuer: "US Bank" },
  { name: "US Bank Business Leverage",              issuer: "US Bank" },
  { name: "US Bank Triple Cash Business",           issuer: "US Bank" },
  { name: "Synchrony Virgin Red Rewards",           issuer: "Synchrony" },
];

/* ─── Pre-populated Benefits ───────────────────────────────── */
const PRESET_BENEFITS = {
  "AmEx Platinum": [
    { name: "$200 Airline Fee Credit",        value: 200,   type: "annual",     category: "Travel",         description: "Incidental fees on one selected airline (bag fees, seat upgrades, etc.)" },
    { name: "$200 Hotel Credit",              value: 200,   type: "annual",     category: "Travel",         description: "Fine Hotels + Resorts or The Hotel Collection (2-night minimum)" },
    { name: "$240 Digital Entertainment",    value: 20,    type: "monthly",    category: "Entertainment",  description: "Disney+, Hulu, ESPN+, Peacock, NYT, SiriusXM, The Atlantic" },
    { name: "$155 Walmart+ Credit",           value: 12.95, type: "monthly",    category: "Shopping",       description: "Covers monthly Walmart+ membership fee (~$12.95/mo)" },
    { name: "$200 Uber Cash",                 value: 15,    type: "monthly",    category: "Transportation", description: "$15/month Uber Cash ($35 in December) for rides or Uber Eats" },
    { name: "$189 CLEAR Plus Credit",         value: 189,   type: "annual",     category: "Travel",         description: "CLEAR Plus biometric security lanes at airports and stadiums" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application/renewal fee credit (Global Entry $100, TSA PreCheck $85) — valid every 4.5 years" },
    { name: "$300 Equinox Credit",            value: 300,   type: "annual",     category: "Fitness",        description: "Equinox gym membership or Equinox+ app" },
  ],
  "AmEx Gold": [
    { name: "$120 Dining Credit",             value: 10,    type: "monthly",    category: "Dining",         description: "$10/month at Grubhub, The Cheesecake Factory, Goldbelly, Wine.com, Five Guys, Milk Bar" },
    { name: "$120 Uber Cash",                 value: 10,    type: "monthly",    category: "Transportation", description: "$10/month Uber Cash for Uber Eats or rides" },
    { name: "$100 Hotel Credit",              value: 100,   type: "annual",     category: "Travel",         description: "The Hotel Collection bookings (2-night minimum)" },
    { name: "$84 Dunkin' Credit",             value: 7,     type: "monthly",    category: "Dining",         description: "$7/month at Dunkin'" },
  ],
  "AmEx Business Platinum": [
    { name: "$400 Dell Technologies Credit",  value: 200,   type: "semi-annual",category: "Shopping",       description: "$200 Jan–Jun, $200 Jul–Dec at Dell Technologies" },
    { name: "$360 Indeed Credit",             value: 90,    type: "quarterly",  category: "Other",          description: "$90/quarter for Indeed sponsored job postings" },
    { name: "$150 Adobe Credit",              value: 150,   type: "annual",     category: "Other",          description: "Adobe Creative Cloud or other Adobe solutions" },
    { name: "$120 Wireless Credit",           value: 10,    type: "monthly",    category: "Other",          description: "$10/month on U.S. wireless phone bills (direct carrier billing)" },
    { name: "$189 CLEAR Plus Credit",         value: 189,   type: "annual",     category: "Travel",         description: "CLEAR Plus biometric security membership" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit every 4.5 years" },
  ],
  "AmEx Business Gold": [
    { name: "$240 U.S. Business Credit",      value: 20,    type: "monthly",    category: "Shopping",       description: "$20/month at FedEx, Grubhub, office supply stores, and select U.S. retailers" },
    { name: "$155 Walmart+ Credit",           value: 12.95, type: "monthly",    category: "Shopping",       description: "Covers monthly Walmart+ membership fee" },
  ],
  "Chase Sapphire Reserve": [
    { name: "$300 Annual Travel Credit",      value: 300,   type: "annual",     category: "Travel",         description: "Auto-applies to first travel purchases each cardmember year" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit every 4 years" },
    { name: "$60 DoorDash Credit",            value: 5,     type: "monthly",    category: "Dining",         description: "$5/month DoorDash credit (DashPass required)" },
  ],
  "Chase Sapphire Preferred": [
    { name: "$50 Annual Hotel Credit",        value: 50,    type: "annual",     category: "Travel",         description: "Hotel stays booked through Chase Travel portal" },
  ],
  "Capital One Venture X": [
    { name: "$300 Capital One Travel Credit", value: 300,   type: "annual",     category: "Travel",         description: "Bookings through Capital One Travel portal" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit every 4 years" },
    { name: "10,000 Miles Anniversary Bonus", value: 100,   type: "annual",     category: "Travel",         description: "10,000 bonus miles on each card anniversary (worth ~$100 in travel)" },
  ],
  "Capital One Venture X Business": [
    { name: "$300 Capital One Travel Credit", value: 300,   type: "annual",     category: "Travel",         description: "Bookings through Capital One Travel portal" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit every 4 years" },
    { name: "10,000 Miles Anniversary Bonus", value: 100,   type: "annual",     category: "Travel",         description: "10,000 bonus miles on card anniversary" },
  ],
  "AmEx Hilton Aspire": [
    { name: "$400 Hilton Resort Credit",      value: 200,   type: "semi-annual",category: "Travel",         description: "$200 Jan–Jun, $200 Jul–Dec at Hilton Resort properties" },
    { name: "$200 Airline Fee Credit",        value: 100,   type: "semi-annual",category: "Travel",         description: "$100 Jan–Jun, $100 Jul–Dec on selected airline incidental fees" },
    { name: "$189 CLEAR Plus Credit",         value: 189,   type: "annual",     category: "Travel",         description: "CLEAR Plus biometric security membership" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit every 4.5 years" },
  ],
  "AmEx Marriott Bonvoy Brilliant": [
    { name: "$300 Marriott Dining Credit",    value: 25,    type: "monthly",    category: "Dining",         description: "$25/month for dining purchases at Marriott Bonvoy hotels and restaurants" },
    { name: "$100 Luxury Property Credit",    value: 100,   type: "annual",     category: "Travel",         description: "On-property credit at Ritz-Carlton or St. Regis (2-night+ stay)" },
    { name: "$189 CLEAR Plus Credit",         value: 189,   type: "annual",     category: "Travel",         description: "CLEAR Plus biometric security membership" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit every 4.5 years" },
  ],
  "AmEx Marriott Bonvoy Bevy": [
    { name: "$150 Marriott Bonvoy Credit",    value: 150,   type: "annual",     category: "Travel",         description: "Marriott Bonvoy hotel purchases" },
    { name: "$84 Dining Bonus Points",        value: 7,     type: "monthly",    category: "Dining",         description: "Bonus Marriott points on dining purchases each month" },
  ],
  "Citi AAdvantage Executive": [
    { name: "Admirals Club Membership",       value: 750,   type: "annual",     category: "Travel",         description: "Full American Airlines Admirals Club lounge access for cardholder + guests" },
    { name: "$120 TSA PreCheck Credit",       value: 10,    type: "monthly",    category: "Travel",         description: "$10/month toward TSA PreCheck or Global Entry renewal" },
  ],
  "Citi Strata Elite": [
    { name: "$300 Air Travel Credit",         value: 300,   type: "annual",     category: "Travel",         description: "Airfare purchases" },
    { name: "$250 Hotel Credit",              value: 250,   type: "annual",     category: "Travel",         description: "Hotel bookings" },
  ],
  "Chase United Club": [
    { name: "United Club Membership",         value: 650,   type: "annual",     category: "Travel",         description: "Full United Club lounge membership for cardholder + guests" },
    { name: "Free Checked Bags",              value: 60,    type: "annual",     category: "Travel",         description: "First 2 bags free for cardholder + 1 companion on United flights" },
  ],
  "Chase IHG Premier": [
    { name: "Annual Free Night Certificate",  value: 150,   type: "annual",     category: "Travel",         description: "Free night at IHG properties (up to 40,000 points value) on card anniversary" },
    { name: "$50 IHG Statement Credit",       value: 50,    type: "annual",     category: "Travel",         description: "Statement credit on IHG Rewards hotel purchases" },
    { name: "$100 Global Entry / TSA PreCheck", value: 100, type: "annual",     category: "Travel",         description: "Application fee credit" },
  ],
  "Chase World of Hyatt Business": [
    { name: "Annual Free Night Certificate",  value: 150,   type: "annual",     category: "Travel",         description: "Category 1–4 Hyatt free night on card anniversary" },
    { name: "$100 Hyatt Credit",              value: 50,    type: "semi-annual",category: "Travel",         description: "$50 semi-annual credit on Hyatt hotel stays" },
  ],
};

/* ─── Issuer Colors ────────────────────────────────────────── */
const ISSUER_COLORS = {
  "AmEx":        "#00a2d4",
  "Chase":       "#1a6bb5",
  "Capital One": "#cc0000",
  "Citi":        "#4a90d9",
  "BoA":         "#e31837",
  "Barclays":    "#00aeef",
  "Wells Fargo": "#cd040b",
  "US Bank":     "#0052a5",
  "Synchrony":   "#6c3491",
};

function issuerColor(issuer) {
  return ISSUER_COLORS[issuer] || "#6c7ff5";
}

/* ─── UUID ─────────────────────────────────────────────────── */
function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/* ─── Period Helpers ───────────────────────────────────────── */
function currentPeriodStart(type) {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  switch (type) {
    case "monthly":     return new Date(y, m, 1);
    case "quarterly":   return new Date(y, Math.floor(m / 3) * 3, 1);
    case "semi-annual": return new Date(y, m < 6 ? 0 : 6, 1);
    case "annual":
    default:            return new Date(y, 0, 1);
  }
}

function periodLabel(type) {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  switch (type) {
    case "monthly":     return now.toLocaleString("default", { month: "long", year: "numeric" });
    case "quarterly": {
      const q = Math.floor(m / 3) + 1;
      return `Q${q} ${y}`;
    }
    case "semi-annual": return m < 6 ? `Jan–Jun ${y}` : `Jul–Dec ${y}`;
    case "annual":
    default:            return `${y}`;
  }
}

function needsReset(benefit) {
  const periodStart = currentPeriodStart(benefit.type);
  return new Date(benefit.periodStart) < periodStart;
}

/* ─── State ────────────────────────────────────────────────── */
let state = { cards: {}, selectedCardId: null };
let activeFilter = "all";
let editingCardId = null;

function loadState() {
  try {
    const raw = localStorage.getItem("cc_tracker_v1");
    if (raw) state = JSON.parse(raw);
  } catch (_) {}
}

function saveState() {
  localStorage.setItem("cc_tracker_v1", JSON.stringify(state));
}

/* ─── Reset check on load ──────────────────────────────────── */
function checkResets() {
  Object.values(state.cards).forEach(card => {
    card.benefits.forEach(b => {
      if (needsReset(b)) {
        b.usedAmount = 0;
        b.periodStart = currentPeriodStart(b.type).toISOString();
      }
    });
  });
  saveState();
}

/* ─── Populate Dropdown ────────────────────────────────────── */
function populateDropdown() {
  const sel = document.getElementById("cardSelector");
  const groups = {};
  ALL_CARDS.forEach(c => {
    if (!groups[c.issuer]) groups[c.issuer] = [];
    groups[c.issuer].push(c);
  });
  Object.entries(groups).forEach(([issuer, cards]) => {
    const og = document.createElement("optgroup");
    og.label = issuer;
    cards.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.name;
      opt.textContent = c.name;
      og.appendChild(opt);
    });
    sel.appendChild(og);
  });
}

/* ─── Add Card ─────────────────────────────────────────────── */
document.getElementById("addCardBtn").addEventListener("click", () => {
  const sel = document.getElementById("cardSelector");
  const name = sel.value;
  if (!name) return;

  const alreadyAdded = Object.values(state.cards).some(c => c.name === name);
  if (alreadyAdded) {
    alert(`"${name}" is already in your list.`);
    return;
  }

  const cardEntry = ALL_CARDS.find(c => c.name === name);
  const issuer = cardEntry ? cardEntry.issuer : "Other";
  const id = uuid();

  const presets = (PRESET_BENEFITS[name] || []).map(b => ({
    id: uuid(),
    name: b.name,
    value: b.value,
    type: b.type,
    category: b.category,
    description: b.description || "",
    usedAmount: 0,
    periodStart: currentPeriodStart(b.type).toISOString(),
  }));

  state.cards[id] = {
    id,
    name,
    issuer,
    addedDate: new Date().toISOString(),
    benefits: presets,
  };

  state.selectedCardId = id;
  saveState();
  sel.value = "";
  render();
});

/* ─── Remove Card ──────────────────────────────────────────── */
function removeCard(cardId) {
  const card = state.cards[cardId];
  if (!card) return;
  showConfirm(
    `Remove "${card.name}"?`,
    "This will delete all tracked benefits for this card.",
    () => {
      delete state.cards[cardId];
      if (state.selectedCardId === cardId) {
        const remaining = Object.keys(state.cards);
        state.selectedCardId = remaining.length ? remaining[0] : null;
      }
      saveState();
      render();
    }
  );
}

/* ─── Select Card ──────────────────────────────────────────── */
function selectCard(cardId) {
  state.selectedCardId = cardId;
  activeFilter = "all";
  saveState();
  render();
}

/* ─── Render ───────────────────────────────────────────────── */
function render() {
  renderSidebar();
  renderMain();
  renderHeaderSummary();
}

function renderSidebar() {
  const list = document.getElementById("myCardsList");
  const badge = document.getElementById("cardCountBadge");
  const cards = Object.values(state.cards);
  badge.textContent = cards.length;

  if (!cards.length) {
    list.innerHTML = '<p class="sidebar-empty">No cards yet. Pick one above.</p>';
    return;
  }

  list.innerHTML = cards.map(card => {
    const active = card.id === state.selectedCardId ? "active" : "";
    const color = issuerColor(card.issuer);
    const benefitCount = card.benefits.length;
    return `
      <div class="card-item ${active}" onclick="selectCard('${card.id}')">
        <span class="card-dot" style="background:${color}"></span>
        <span class="card-item-name">${card.name}</span>
        <span class="card-item-count">${benefitCount}</span>
        <button class="card-remove-btn" onclick="event.stopPropagation();removeCard('${card.id}')" title="Remove card">&#x2715;</button>
      </div>
    `;
  }).join("");
}

function renderMain() {
  const main = document.getElementById("mainContent");

  if (!state.selectedCardId || !state.cards[state.selectedCardId]) {
    main.innerHTML = `
      <div class="empty-state" id="emptyState">
        <div class="empty-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
            <line x1="1" y1="10" x2="23" y2="10"></line>
          </svg>
        </div>
        <h2>Track Your Card Benefits</h2>
        <p>Add a credit card from the sidebar to start tracking monthly and annual perks.</p>
      </div>`;
    return;
  }

  const card = state.cards[state.selectedCardId];
  const color = issuerColor(card.issuer);

  // Filter benefits
  const filtered = activeFilter === "all"
    ? card.benefits
    : card.benefits.filter(b => b.type === activeFilter);

  // Group by type for display
  const groups = { monthly: [], quarterly: [], "semi-annual": [], annual: [] };
  filtered.forEach(b => { if (groups[b.type]) groups[b.type].push(b); });

  // Stats
  const monthlyRemaining = card.benefits.filter(b => b.type === "monthly")
    .reduce((s, b) => s + Math.max(0, b.value - b.usedAmount), 0);
  const annualRemaining = card.benefits.filter(b => b.type === "annual")
    .reduce((s, b) => s + Math.max(0, b.value - b.usedAmount), 0);
  const totalRemaining = card.benefits.reduce((s, b) => s + Math.max(0, b.value - b.usedAmount), 0);

  const tabs = [
    { key: "all",         label: "All" },
    { key: "monthly",     label: "Monthly" },
    { key: "quarterly",   label: "Quarterly" },
    { key: "semi-annual", label: "Semi-Annual" },
    { key: "annual",      label: "Annual" },
  ];

  const tabsHtml = tabs.map(t => `
    <button class="filter-tab ${activeFilter === t.key ? "active" : ""}"
      onclick="setFilter('${t.key}')">${t.label}</button>
  `).join("");

  const sectionOrder = ["monthly", "quarterly", "semi-annual", "annual"];
  const sectionLabels = {
    "monthly": "Monthly Benefits",
    "quarterly": "Quarterly Benefits",
    "semi-annual": "Semi-Annual Benefits",
    "annual": "Annual Benefits",
  };

  let benefitsHtml = "";
  sectionOrder.forEach(type => {
    const items = groups[type];
    if (!items || !items.length) return;
    benefitsHtml += `
      <div class="benefits-section">
        <div class="section-label">${sectionLabels[type]} &mdash; ${periodLabel(type)}</div>
        <div class="benefits-grid">
          ${items.map(b => benefitCardHtml(b, card.id)).join("")}
        </div>
      </div>`;
  });

  if (!benefitsHtml) {
    benefitsHtml = `<div class="no-benefits">No benefits in this category yet.<br>Click <strong>+ Add Benefit</strong> below to get started.</div>`;
  }

  main.innerHTML = `
    <div class="card-detail-header">
      <div class="card-detail-title">
        <span class="card-issuer-badge" style="background:${color}">${card.issuer}</span>
        <h1 class="card-name-heading">${card.name}</h1>
      </div>
      <div class="card-detail-actions">
        <button class="btn-remove-card" onclick="removeCard('${card.id}')">Remove Card</button>
      </div>
    </div>

    <div class="stats-row">
      <div class="stat-box">
        <div class="stat-label">Monthly Remaining</div>
        <div class="stat-value ${monthlyRemaining === 0 ? 'zero' : ''}">${fmt(monthlyRemaining)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Annual Remaining</div>
        <div class="stat-value ${annualRemaining === 0 ? 'zero' : ''}">${fmt(annualRemaining)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Total Remaining</div>
        <div class="stat-value ${totalRemaining === 0 ? 'zero' : ''}">${fmt(totalRemaining)}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Benefits Tracked</div>
        <div class="stat-value" style="color:var(--accent)">${card.benefits.length}</div>
      </div>
    </div>

    <div class="filter-tabs">${tabsHtml}</div>

    ${benefitsHtml}

    <button class="add-benefit-btn" onclick="openAddBenefit('${card.id}')">
      + Add Benefit
    </button>
  `;
}

function benefitCardHtml(b, cardId) {
  const remaining = Math.max(0, b.value - b.usedAmount);
  const pct = b.value > 0 ? Math.min(100, (b.usedAmount / b.value) * 100) : 0;
  const fillClass = pct === 0 ? "fill-green" : pct < 50 ? "fill-green" : pct < 75 ? "fill-yellow" : pct < 100 ? "fill-orange" : "fill-red";
  const fullyUsed = remaining === 0 ? "fully-used" : "";
  const descHtml = b.description ? `<div class="benefit-desc">${b.description}</div>` : "";

  return `
    <div class="benefit-card ${fullyUsed}" id="bc-${b.id}">
      <div class="benefit-card-top">
        <div class="benefit-card-name">${b.name}</div>
        <div class="benefit-card-actions">
          <button class="icon-btn" onclick="openEditBenefit('${cardId}','${b.id}')" title="Edit">&#9998;</button>
          <button class="icon-btn delete" onclick="deleteBenefit('${cardId}','${b.id}')" title="Delete">&#x2715;</button>
        </div>
      </div>
      <div class="benefit-tags">
        <span class="tag tag-category">${b.category}</span>
        <span class="tag tag-${b.type}">${typeName(b.type)}</span>
        ${remaining === 0 ? '<span class="tag" style="background:rgba(240,82,82,0.15);color:#f08080;border:1px solid rgba(240,82,82,0.3)">Used</span>' : ''}
        ${remaining > 0 && b.usedAmount === 0 ? '<span class="new-period-badge">&#10003; Available</span>' : ''}
      </div>
      <div class="progress-wrap">
        <div class="progress-labels">
          <span class="progress-used">${fmt(b.usedAmount)} used</span>
          <span class="progress-remaining ${remaining === 0 ? 'zero' : ''}">${fmt(remaining)} left</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill ${fillClass}" style="width:${pct}%"></div>
        </div>
      </div>
      <div class="usage-row">
        <span class="usage-label">Used $</span>
        <input
          class="usage-input"
          type="number"
          min="0"
          max="${b.value}"
          step="0.01"
          value="${b.usedAmount}"
          onchange="updateUsage('${cardId}','${b.id}',this.value)"
          oninput="updateUsage('${cardId}','${b.id}',this.value)"
        >
        <button class="btn-full-use" onclick="markFullyUsed('${cardId}','${b.id}')">Mark Used</button>
        <button class="btn-reset-use" onclick="resetUsage('${cardId}','${b.id}')">Reset</button>
      </div>
      ${descHtml}
    </div>
  `;
}

function renderHeaderSummary() {
  const el = document.getElementById("headerSummary");
  const cards = Object.values(state.cards);
  if (!cards.length) { el.innerHTML = ""; return; }

  let monthlyRem = 0, annualRem = 0;
  cards.forEach(card => {
    card.benefits.forEach(b => {
      const rem = Math.max(0, b.value - b.usedAmount);
      if (b.type === "monthly") monthlyRem += rem;
      else if (b.type === "annual") annualRem += rem;
    });
  });

  el.innerHTML = `
    <div class="summary-chip">
      <span class="chip-label">Monthly Left</span>
      <span class="chip-value">${fmt(monthlyRem)}</span>
    </div>
    <div class="summary-chip">
      <span class="chip-label">Annual Left</span>
      <span class="chip-value">${fmt(annualRem)}</span>
    </div>
    <div class="summary-chip">
      <span class="chip-label">Cards</span>
      <span class="chip-value" style="color:var(--accent)">${cards.length}</span>
    </div>
  `;
}

/* ─── Usage Actions ────────────────────────────────────────── */
function updateUsage(cardId, benefitId, val) {
  const card = state.cards[cardId];
  if (!card) return;
  const b = card.benefits.find(x => x.id === benefitId);
  if (!b) return;
  const num = Math.min(b.value, Math.max(0, parseFloat(val) || 0));
  b.usedAmount = Math.round(num * 100) / 100;
  saveState();
  // Partial re-render: just update the specific card
  const el = document.getElementById(`bc-${benefitId}`);
  if (el) {
    const tmp = document.createElement("div");
    tmp.innerHTML = benefitCardHtml(b, cardId);
    el.replaceWith(tmp.firstElementChild);
  }
  renderHeaderSummary();
  renderSidebar();
  // Update stats row
  const statsRow = document.querySelector(".stats-row");
  if (statsRow) {
    const card = state.cards[cardId];
    const monthlyRemaining = card.benefits.filter(x => x.type === "monthly").reduce((s, x) => s + Math.max(0, x.value - x.usedAmount), 0);
    const annualRemaining  = card.benefits.filter(x => x.type === "annual").reduce((s, x) => s + Math.max(0, x.value - x.usedAmount), 0);
    const totalRemaining   = card.benefits.reduce((s, x) => s + Math.max(0, x.value - x.usedAmount), 0);
    statsRow.querySelectorAll(".stat-value").forEach((el, i) => {
      if (i === 0) { el.textContent = fmt(monthlyRemaining); el.className = `stat-value ${monthlyRemaining === 0 ? 'zero' : ''}`; }
      if (i === 1) { el.textContent = fmt(annualRemaining);  el.className = `stat-value ${annualRemaining === 0 ? 'zero' : ''}`; }
      if (i === 2) { el.textContent = fmt(totalRemaining);   el.className = `stat-value ${totalRemaining === 0 ? 'zero' : ''}`; }
    });
  }
}

function markFullyUsed(cardId, benefitId) {
  const b = state.cards[cardId]?.benefits.find(x => x.id === benefitId);
  if (b) { b.usedAmount = b.value; saveState(); render(); }
}

function resetUsage(cardId, benefitId) {
  const b = state.cards[cardId]?.benefits.find(x => x.id === benefitId);
  if (b) { b.usedAmount = 0; saveState(); render(); }
}

/* ─── Filter ───────────────────────────────────────────────── */
function setFilter(f) {
  activeFilter = f;
  render();
}

/* ─── Benefit Modal ────────────────────────────────────────── */
function openAddBenefit(cardId) {
  editingCardId = cardId;
  document.getElementById("modalTitle").textContent = "Add Benefit";
  document.getElementById("editingBenefitId").value = "";
  document.getElementById("inputName").value = "";
  document.getElementById("inputValue").value = "";
  document.getElementById("inputType").value = "annual";
  document.getElementById("inputCategory").value = "Travel";
  document.getElementById("inputDesc").value = "";
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("inputName").focus();
}

function openEditBenefit(cardId, benefitId) {
  const card = state.cards[cardId];
  if (!card) return;
  const b = card.benefits.find(x => x.id === benefitId);
  if (!b) return;
  editingCardId = cardId;
  document.getElementById("modalTitle").textContent = "Edit Benefit";
  document.getElementById("editingBenefitId").value = benefitId;
  document.getElementById("inputName").value = b.name;
  document.getElementById("inputValue").value = b.value;
  document.getElementById("inputType").value = b.type;
  document.getElementById("inputCategory").value = b.category;
  document.getElementById("inputDesc").value = b.description || "";
  document.getElementById("modalOverlay").classList.add("open");
  document.getElementById("inputName").focus();
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  editingCardId = null;
}

document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
document.getElementById("modalCancelBtn").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("modalOverlay")) closeModal();
});

document.getElementById("modalSaveBtn").addEventListener("click", () => {
  const name  = document.getElementById("inputName").value.trim();
  const value = parseFloat(document.getElementById("inputValue").value);
  const type  = document.getElementById("inputType").value;
  const cat   = document.getElementById("inputCategory").value;
  const desc  = document.getElementById("inputDesc").value.trim();
  const editId = document.getElementById("editingBenefitId").value;

  if (!name || isNaN(value) || value < 0) {
    alert("Please enter a valid name and value.");
    return;
  }

  const card = state.cards[editingCardId];
  if (!card) return;

  if (editId) {
    const b = card.benefits.find(x => x.id === editId);
    if (b) { b.name = name; b.value = value; b.type = type; b.category = cat; b.description = desc; }
  } else {
    card.benefits.push({
      id: uuid(), name, value, type, category: cat, description: desc,
      usedAmount: 0, periodStart: currentPeriodStart(type).toISOString(),
    });
  }

  saveState();
  closeModal();
  render();
});

/* ─── Delete Benefit ───────────────────────────────────────── */
function deleteBenefit(cardId, benefitId) {
  const card = state.cards[cardId];
  if (!card) return;
  const b = card.benefits.find(x => x.id === benefitId);
  if (!b) return;
  showConfirm(
    `Delete "${b.name}"?`,
    "This will permanently remove this benefit.",
    () => {
      card.benefits = card.benefits.filter(x => x.id !== benefitId);
      saveState();
      render();
    }
  );
}

/* ─── Confirm Modal ────────────────────────────────────────── */
let confirmCallback = null;

function showConfirm(title, message, cb) {
  confirmCallback = cb;
  document.getElementById("confirmTitle").textContent = title;
  document.getElementById("confirmMessage").textContent = message;
  document.getElementById("confirmOverlay").classList.add("open");
}

function closeConfirm() {
  document.getElementById("confirmOverlay").classList.remove("open");
  confirmCallback = null;
}

document.getElementById("confirmCloseBtn").addEventListener("click", closeConfirm);
document.getElementById("confirmCancelBtn").addEventListener("click", closeConfirm);
document.getElementById("confirmOkBtn").addEventListener("click", () => {
  if (confirmCallback) confirmCallback();
  closeConfirm();
});
document.getElementById("confirmOverlay").addEventListener("click", e => {
  if (e.target === document.getElementById("confirmOverlay")) closeConfirm();
});

/* ─── Helpers ──────────────────────────────────────────────── */
function fmt(n) {
  return "$" + (Math.round(n * 100) / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function typeName(t) {
  return { monthly: "Monthly", quarterly: "Quarterly", "semi-annual": "Semi-Annual", annual: "Annual" }[t] || t;
}

/* ─── Boot ─────────────────────────────────────────────────── */
loadState();
checkResets();
populateDropdown();
render();
