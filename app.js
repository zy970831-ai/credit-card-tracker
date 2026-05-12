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

/* ─── Pre-populated Benefits (verified May 2026) ───────────── */
const PRESET_BENEFITS = {
  "AmEx Platinum": [
    // Annual fee: $895
    { name: "$400 Resy Dining Credit",              value: 100,   type: "quarterly",   category: "Dining",         description: "$100/quarter at U.S. Resy-network restaurants; enrollment required" },
    { name: "$600 Hotel Credit",                    value: 300,   type: "semi-annual", category: "Travel",         description: "$300 Jan–Jun, $300 Jul–Dec; Fine Hotels + Resorts or Hotel Collection via AmexTravel.com (Hotel Collection: 2-night minimum)" },
    { name: "$300 Digital Entertainment Credit",    value: 25,    type: "monthly",     category: "Entertainment",  description: "$25/month: Disney+, ESPN+, Hulu, NYT, Paramount+, Peacock, WSJ, YouTube Premium/TV; enrollment required" },
    { name: "$300 lululemon Credit",                value: 75,    type: "quarterly",   category: "Shopping",       description: "$75/quarter at U.S. lululemon retail stores (excluding outlets) and lululemon.com" },
    { name: "$300 Equinox Credit",                  value: 300,   type: "annual",      category: "Fitness",        description: "Equinox+ digital subscription or physical club membership; enrollment required" },
    { name: "$200 Uber Cash",                       value: 15,    type: "monthly",     category: "Transportation", description: "$15/month ($20 in December) for U.S. Uber rides and Uber Eats; must add card to Uber app" },
    { name: "$120 Uber One Credit",                 value: 120,   type: "annual",      category: "Transportation", description: "Auto-renewing Uber One membership; enrollment required" },
    { name: "$155 Walmart+ Credit",                 value: 12.95, type: "monthly",     category: "Shopping",       description: "Covers one Walmart+ monthly membership fee (~$12.95/mo); auto-renewal required; excludes Plus Upgrades" },
    { name: "$200 Airline Incidental Fee Credit",   value: 200,   type: "annual",      category: "Travel",         description: "One pre-selected qualifying airline; incidentals only (bag fees, seat upgrades, in-flight food) — NOT ticket purchases" },
    { name: "$209 CLEAR Plus Credit",               value: 209,   type: "annual",      category: "Travel",         description: "CLEAR+ biometric security lanes at airports and stadiums; enrollment required" },
    { name: "⚠️ $100 Saks Fifth Avenue Credit",     value: 50,    type: "semi-annual", category: "Shopping",       description: "ENDING July 1, 2026 — Jan–Jun credit must be used by June 30, 2026; Saks.com or in-store" },
    { name: "$200 Oura Ring Credit (one-time)",     value: 200,   type: "annual",      category: "Shopping",       description: "One-time benefit for Oura Ring hardware purchases at ouraring.com" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4–4.5 years (Global Entry $120, TSA PreCheck $85)" },
  ],
  "AmEx Gold": [
    // Annual fee: $325
    { name: "$120 Dining Credit",                   value: 10,    type: "monthly",     category: "Dining",         description: "$10/month at Grubhub, Cheesecake Factory, Buffalo Wild Wings, Wonder, Five Guys. Goldbelly & Wine.com end June 30, 2026; enrollment required" },
    { name: "$120 Uber Cash",                       value: 10,    type: "monthly",     category: "Transportation", description: "$10/month for U.S. Uber rides and Uber Eats; must add card to Uber app" },
    { name: "$84 Dunkin' Credit",                   value: 7,     type: "monthly",     category: "Dining",         description: "$7/month at U.S. Dunkin' locations and app" },
    { name: "$100 Resy Credit",                     value: 50,    type: "semi-annual", category: "Dining",         description: "$50 semi-annual (Jan–Jun, Jul–Dec) at U.S. Resy restaurants; enrollment required" },
    { name: "$100 Hotel Collection Credit (per stay)", value: 100, type: "annual",     category: "Travel",         description: "$100 on-property credit per qualifying stay at The Hotel Collection via AmexTravel.com; 2-night minimum stay required" },
  ],
  "AmEx Business Platinum": [
    // Annual fee: $895
    { name: "$600 Hotel Credit",                    value: 300,   type: "semi-annual", category: "Travel",         description: "Prepaid Fine Hotels + Resorts or Hotel Collection via AmexTravel.com ($300 Jan–Jun, $300 Jul–Dec); Hotel Collection: 2-night minimum" },
    { name: "$360 Indeed Credit",                   value: 90,    type: "quarterly",   category: "Other",          description: "$90/quarter for U.S. Indeed sponsored job postings; enrollment required" },
    { name: "$120 Wireless Credit",                 value: 10,    type: "monthly",     category: "Other",          description: "$10/month on direct purchases from U.S. wireless providers" },
    { name: "$200 Airline Incidental Fee Credit",   value: 200,   type: "annual",      category: "Travel",         description: "One pre-selected qualifying airline; incidentals only, NOT ticket purchases" },
    { name: "$200 Hilton for Business Credit",      value: 200,   type: "annual",      category: "Travel",         description: "Eligible purchases at Hilton properties; must be a Hilton for Business member" },
    { name: "$150 Dell Technologies Credit",        value: 150,   type: "annual",      category: "Shopping",       description: "U.S. purchases directly with Dell; additional $1,000 credit unlocked after $5,000+ Dell spend" },
    { name: "$250 Adobe Credit",                    value: 250,   type: "annual",      category: "Other",          description: "Earned after spending $600+ on U.S. Adobe purchases in the calendar year" },
    { name: "$209 CLEAR Plus Credit",               value: 209,   type: "annual",      category: "Travel",         description: "CLEAR+ biometric security membership; enrollment required" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4–4.5 years" },
  ],
  "AmEx Business Gold": [
    // Annual fee: $375
    { name: "$240 Flexible Business Credit",        value: 20,    type: "monthly",     category: "Shopping",       description: "$20/month at Grubhub and office supply stores; FedEx included through Sept 30, 2026 only; enrollment required" },
    { name: "$300 ChatGPT Business Credit",         value: 300,   type: "annual",      category: "Other",          description: "U.S. ChatGPT Business subscription purchases; enrollment required" },
    { name: "$150 Squarespace Credit",              value: 150,   type: "annual",      category: "Other",          description: "U.S. Squarespace purchases; enrollment required" },
    { name: "$155 Walmart+ Credit",                 value: 12.95, type: "monthly",     category: "Shopping",       description: "Covers one Walmart+ monthly membership fee; auto-renewal required" },
  ],
  "Chase Sapphire Reserve": [
    // Annual fee: $795
    { name: "$300 Annual Travel Credit",            value: 300,   type: "annual",      category: "Travel",         description: "Auto-applies to first travel purchases each cardmember year (airlines, hotels, transit, rideshare, etc.)" },
    { name: "$500 Edit by Chase Hotel Credit",      value: 250,   type: "semi-annual", category: "Travel",         description: "$250 × 2 per cardmember year; qualifying prepaid hotels via The Edit by Chase Travel; 2-night minimum stay" },
    { name: "$300 Exclusive Tables Dining Credit",  value: 150,   type: "semi-annual", category: "Dining",         description: "$150 semi-annual (Jan–Jun, Jul–Dec) at Sapphire Reserve Exclusive Tables partner restaurants; activation required" },
    { name: "$300 StubHub / Viagogo Credit",        value: 150,   type: "semi-annual", category: "Entertainment",  description: "$150 semi-annual (Jan–Jun, Jul–Dec) for StubHub and Viagogo ticket purchases; through Dec 31, 2027" },
    { name: "$120 Peloton Credit",                  value: 10,    type: "monthly",     category: "Fitness",        description: "$10/month toward Peloton memberships; through Dec 31, 2027" },
    { name: "$120 Lyft Credit",                     value: 10,    type: "monthly",     category: "Transportation", description: "$10/month for Lyft rides; through Sept 30, 2027" },
    { name: "⚠️ $250 Select Hotel Credit (2026 only)", value: 250, type: "annual",     category: "Travel",         description: "2026-only benefit: IHG, Montage, Pendry, Omni, Virgin Hotels, Minor Hotels, Pan Pacific; prepaid 2-night min via Chase Travel" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4 years" },
  ],
  "Chase Sapphire Preferred": [
    // Annual fee: $95
    { name: "$50 Annual Hotel Credit",              value: 50,    type: "annual",      category: "Travel",         description: "Hotel stays booked through Chase Travel portal; resets on cardmember anniversary" },
    { name: "$120 DoorDash Credit",                 value: 10,    type: "monthly",     category: "Dining",         description: "$10/month for non-restaurant orders (groceries, beauty, etc.) on DoorDash while enrolled in DashPass; through Dec 31, 2027" },
  ],
  "Capital One Venture X": [
    // Annual fee: $395
    { name: "$300 Capital One Travel Credit",       value: 300,   type: "annual",      category: "Travel",         description: "Bookings through Capital One Travel portal only; expires on account anniversary" },
    { name: "10,000 Miles Anniversary Bonus",       value: 100,   type: "annual",      category: "Travel",         description: "10,000 bonus miles on each card anniversary (~$100 in travel value)" },
    { name: "$100 Premier Collection Experience",   value: 100,   type: "annual",      category: "Travel",         description: "$100 on-property activity credit per Premier Collection stay; 1-night minimum" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4 years" },
  ],
  "Capital One Venture X Business": [
    // Annual fee: $395
    { name: "$300 Business Travel Credit",          value: 300,   type: "annual",      category: "Travel",         description: "Flights, hotels, and rental cars via Capital One Business Travel portal; excludes upgrades, baggage fees, travel insurance" },
    { name: "10,000 Miles Anniversary Bonus",       value: 100,   type: "annual",      category: "Travel",         description: "10,000 bonus miles on card anniversary (~$100 in travel value)" },
    { name: "$100 Premier Collection Experience",   value: 100,   type: "annual",      category: "Travel",         description: "$100 on-property activity credit per Premier Collection stay" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4 years" },
  ],
  "AmEx Hilton Aspire": [
    // Annual fee: $550
    { name: "$400 Hilton Resort Credit",            value: 200,   type: "semi-annual", category: "Travel",         description: "$200 Jan–Jun, $200 Jul–Dec; eligible purchases at participating Hilton Resort properties directly (NOT all Hilton properties)" },
    { name: "$200 Airline Credit",                  value: 50,    type: "quarterly",   category: "Travel",         description: "$50/quarter on flights booked directly with airlines or through AmexTravel.com / Amex Travel App" },
    { name: "$209 CLEAR Plus Credit",               value: 209,   type: "annual",      category: "Travel",         description: "CLEAR+ biometric security membership; enrollment required" },
    { name: "$100 Waldorf / Conrad Property Credit", value: 100,  type: "annual",      category: "Travel",         description: "$100 on-property credit per qualifying 2-night+ stay at Waldorf Astoria or Conrad; must book at hiltonhonorsaspirecard.com using Aspire Card Benefit rate" },
    { name: "Annual Free Night Certificate",        value: 150,   type: "annual",      category: "Travel",         description: "One free standard room night at nearly any Hilton property worldwide; issued upon card renewal" },
  ],
  "AmEx Marriott Bonvoy Brilliant": [
    // Annual fee: $650
    { name: "$300 Global Dining Credit",            value: 25,    type: "monthly",     category: "Dining",         description: "$25/month for restaurant purchases worldwide (broad category); enrollment required" },
    { name: "$100 Ritz-Carlton / St. Regis Credit", value: 100,   type: "annual",      category: "Travel",         description: "On-property charges (dining, spa) per qualifying 2-night+ stay at Ritz-Carlton or St. Regis; booked directly" },
    { name: "Annual Free Night Award (up to 85k pts)", value: 200, type: "annual",     category: "Travel",         description: "Free night at participating Marriott properties; can top up with up to 25,000 extra points (110,000 max); issued after card renewal" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4–4.5 years" },
  ],
  "AmEx Marriott Bonvoy Bevy": [
    // Annual fee: $250 — NO automatic statement credits; benefits are spend-gated
    { name: "Spend-Based Free Night (up to 50k pts)", value: 100, type: "annual",      category: "Travel",         description: "Earned after $15,000 in calendar year spend; redeemable at Marriott properties at or under 50,000 points; NOT automatic" },
    { name: "15 Elite Night Credits",               value: 0,     type: "annual",      category: "Travel",         description: "15 elite nights/year toward Marriott Bonvoy status — status accelerator, no direct dollar value" },
  ],
  "Citi AAdvantage Executive": [
    // Annual fee: $595 | Admirals Club membership included (non-credit perk)
    { name: "$120 Grubhub Credit",                  value: 10,    type: "monthly",     category: "Dining",         description: "$10/month for eligible Grubhub purchases; enrollment required" },
    { name: "$120 Lyft Credit",                     value: 10,    type: "monthly",     category: "Transportation", description: "$10/month; must take 3 eligible Lyft rides in a calendar month to trigger the credit" },
    { name: "$120 Avis / Budget Rental Credit",     value: 120,   type: "annual",      category: "Travel",         description: "Up to $120/yr; must book directly on Avis.com or Budget.com (not third-party); credit takes 8–10 weeks to post" },
    { name: "25% In-Flight Savings",                value: 0,     type: "annual",      category: "Travel",         description: "25% back as statement credit on in-flight food & beverage on AA domestic flights; percentage-based, not a fixed credit" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4 years" },
  ],
  "Citi Strata Elite": [
    // Annual fee: $595
    { name: "$300 Annual Hotel Benefit",            value: 300,   type: "annual",      category: "Travel",         description: "Hotel stay of 2+ nights booked through cititravel.com" },
    { name: "$200 Splurge Credit",                  value: 200,   type: "annual",      category: "Shopping",       description: "Choose up to 2 brands: 1stDibs, American Airlines (some exclusions), Best Buy, Future Personal Training, Live Nation (some exclusions)" },
    { name: "$200 Blacklane Credit",                value: 100,   type: "semi-annual", category: "Travel",         description: "$100 semi-annual (Jan–Jun, Jul–Dec) for Blacklane premium chauffeur service bookings" },
    { name: "$120 Global Entry / TSA PreCheck",     value: 120,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4 years" },
  ],
  "Chase United Club": [
    // Annual fee: $695 | United Club membership included (non-credit perk)
    { name: "$200 JSX Flight Credit",               value: 200,   type: "annual",      category: "Travel",         description: "Flights booked directly with JSX; resets on card anniversary year" },
    { name: "$200 Renowned Hotels Credit",          value: 200,   type: "annual",      category: "Travel",         description: "Prepaid hotel stays booked directly through Renowned Hotels and Resorts portal; resets on card anniversary year" },
    { name: "$150 Rideshare Credit",                value: 12,    type: "monthly",     category: "Transportation", description: "$12/month Jan–Nov, $18 in December for rideshare purchases (e.g. Lyft); requires annual enrollment opt-in" },
    { name: "$240 Instacart Credit",                value: 20,    type: "monthly",     category: "Shopping",       description: "Two $10 credits/month for purchases made directly through Instacart; through Dec 31, 2027" },
    { name: "$100 Avis / Budget Credit",            value: 50,    type: "semi-annual", category: "Travel",         description: "Two $50 credits per anniversary year; rentals booked through cars.united.com paid with United Club Card" },
    { name: "$100 Global Entry / TSA PreCheck",     value: 100,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4–5 years" },
  ],
  "Chase IHG Premier": [
    // Annual fee: $99
    { name: "Annual Free Night Certificate (40k pts)", value: 150, type: "annual",     category: "Travel",         description: "Free night at participating IHG properties up to 40,000 points; can add more points for higher categories; book and use within 12 months" },
    { name: "$50 United TravelBank Credit",         value: 25,    type: "semi-annual", category: "Travel",         description: "$25 deposited Jan 1 and Jul 1; must register IHG card with MileagePlus account; credits expire quickly after deposit" },
    { name: "$100 Global Entry / TSA PreCheck",     value: 100,   type: "annual",      category: "Travel",         description: "Application fee reimbursement every 4 years" },
  ],
  "Chase World of Hyatt Business": [
    // Annual fee: $199
    { name: "$100 Hyatt Credits",                   value: 50,    type: "semi-annual", category: "Travel",         description: "Two $50 credits per cardmember year; each triggered when you spend $50+ at any Hyatt property" },
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
