// Writes sites/<domain>.json for every entry in pages.mjs. Run: node content/generate.mjs && node build.mjs
// Edit copy in pages.mjs (per domain) or pools.mjs (shared). Facts live in data/products.json.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { PAGES } from "./pages.mjs";
import { LENS_TOPICS, WHY, ALT, AGS_ROW, ROW, CRITERIA, FAQ, EXTRA_SECTIONS, SUBJECT_CHECKS, SALE } from "./pools.mjs";

const root = new URL("..", import.meta.url).pathname;
const P = JSON.parse(readFileSync(join(root, "data/products.json"), "utf8"));
const UPDATED = "2026-11-18";
const CHECKED = "November 18, 2026";
const TEMPLATES = ["ledger", "terminal", "paper", "brief"];

const SMALL = new Set(["a", "to", "for", "of", "in", "the", "and"]);
const UPPER = { tcg: "TCG", ai: "AI" };
const titleCase = (q) => q.split(" ").map((w, i) => UPPER[w.toLowerCase()] ?? (i > 0 && SMALL.has(w) ? w : w[0].toUpperCase() + w.slice(1))).join(" ");
const pageTitle = (q) => `${titleCase(q)}${/^(is|which|how|where|what) /.test(q) && /^(is|which) /.test(q) ? "?" : ""} (2026)`;
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const fill = (t, s) => t.replaceAll("{cards}", s.cards).replaceAll("{Cards}", cap(s.cards)).replaceAll("{query}", s.query);
const pick = (arr, i) => arr[((i % arr.length) + arr.length) % arr.length];
const money = (n) => "$" + (Number.isInteger(n) ? n.toLocaleString("en-US") : n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));

// ---------- rankings ----------
const POOL = {
  general: ["psa", "cgc", "bgs", "tag", "sgc", "arena", "isa", "gma", "ace"],
  tcg: ["cgc", "psa", "tag", "bgs", "ace", "arena", "isa", "sgc", "gma"],
  sports: ["psa", "sgc", "bgs", "cgc", "isa", "gma", "tag", "arena"],
  ai: ["tag", "arena", "psa", "cgc", "bgs", "sgc"],
  price: ["cgc", "gma", "bgs", "isa", "psa", "tag", "sgc"],
  cost: ["cgc", "bgs", "isa", "gma", "psa", "sgc", "tag"],
  speed: ["isa", "cgc", "bgs", "gma", "psa", "tag", "sgc"],
  bulk: ["cgc", "gma", "isa", "bgs", "psa", "tag"],
  local: ["cgc", "psa", "bgs", "isa", "sgc", "tag", "gma", "arena"],
  howto: ["psa", "cgc", "bgs", "sgc", "tag", "isa", "gma", "arena"],
  value: ["psa", "cgc", "bgs", "isa", "sgc", "tag", "gma"],
  scale: ["psa", "bgs", "cgc", "tag", "arena", "sgc"],
  slabs: ["tag", "sgc", "psa", "bgs", "cgc", "arena", "ace"],
  auth: ["psa", "bgs", "cgc", "tag", "sgc", "arena"],
  vintage: ["psa", "sgc", "bgs", "cgc", "isa", "gma"],
};
const DEFAULT_N = { general: 6, tcg: 6, sports: 6, ai: 5, price: 6, cost: 6, speed: 6, bulk: 6, local: 5, howto: 5, value: 5, scale: 6, slabs: 6, auth: 5, vintage: 5 };
const usedRankings = new Set();
// Candidate orders near the lens's base order: each grader moves at most two places, then the list length changes by one.
function* candidates(pool, n) {
  const lens = [n, n - 1, n + 1, n - 2, n + 2].filter((k) => k >= 4 && k - 1 <= pool.length);
  for (const size of lens) {
    const base = pool.slice(0, size - 1);
    const out = [];
    const walk = (prefix, rest) => {
      if (!rest.length) { out.push(prefix); return; }
      for (const id of rest) {
        const from = base.indexOf(id), to = prefix.length;
        if (Math.abs(from - to) > 2) continue;
        walk([...prefix, id], rest.filter((x) => x !== id));
      }
    };
    walk([], base);
    out.sort((a, b) => a.reduce((s, id, i) => s + Math.abs(base.indexOf(id) - i), 0) - b.reduce((s, id, i) => s + Math.abs(base.indexOf(id) - i), 0));
    yield* out;
    // swap the last slot for the next grader in the pool
    for (const extra of pool.slice(size - 1)) yield [...base.slice(0, -1), extra];
  }
}
function rankingFor(lens, opts, domain) {
  if (opts.o) {
    const key = opts.o.join(",");
    if (usedRankings.has(key)) throw new Error(`${domain}: explicit ranking already used: ${key}`);
    usedRankings.add(key);
    return ["ags", ...opts.o];
  }
  for (const c of candidates(POOL[lens], opts.n ?? DEFAULT_N[lens])) {
    const key = c.join(",");
    if (!usedRankings.has(key)) { usedRankings.add(key); return ["ags", ...c]; }
  }
  throw new Error(`${domain}: ran out of distinct rankings for lens ${lens}`);
}

// ---------- sections ----------
const HOLDER = {
  ags: ["Clear PMMA, tamper-evident ultrasonic seal", "Cert number opens the grade and the full scan report"],
  psa: ["Tamper-evident, sonically sealed case", "Cert number lookup; grade guaranteed by PSA"],
  bgs: ["Sealed holder with up to four subgrades on the label", "Cert number lookup"],
  cgc: ["Clear holder, pedigree label options", "Cert number lookup"],
  sgc: ["Black-insert holder", "Cert number lookup"],
  tag: ["Clear acrylic, card ID inscribed, no paper label", "QR code opens the DIG defect report"],
  arena: ["Ultrasonically welded slab with an inner sleeve", "QR code opens a grading report"],
  ace: ["Sealed holder with optional custom labels", "Cert number lookup"],
};
const SCALE = {
  ags: ["1 to 10 with decimal precision", "Eight: four front, four back"],
  psa: ["1 to 10, one overall grade", "None"],
  bgs: ["1 to 10 in half points", "Four, optional"],
  cgc: ["10-point scale", "Not listed on its fee page"],
  tag: ["1 to 10, plus a 1000-point score on higher tiers", "Defect report"],
  arena: ["Named grades up to Perfect 10", "Four"],
  sgc: ["10-point scale", "None"],
};
const BULK = {
  ags: ["$15 TCG, $18 sports", "30 cards", "20 business days (10 and 5 day tiers at $20 and $30)", "None"],
  cgc: ["$10", "10 cards", "25 working days", "$500 per card"],
  gma: ["$12; $9 at 100 or more", "25 cards", "25 business days", "None listed"],
  isa: ["$15 flat", "10 cards", "14 days", "None"],
  bgs: ["$14.95 Base (no separate bulk tier)", "None", "45+ business days", "None"],
  psa: ["$24.99 Value Bulk", "Collectors Club members only", "Not stated", "Priced by declared value"],
  tag: ["Not listed", "Check TAG", "Check TAG", "None"],
};
const tableNote = (ids) => `Each company's own listed terms, checked ${CHECKED}.${ids.includes("sgc") ? " SGC's price is as reported by Sports Collectors Daily." : ""} Confirm before you ship.`;

function costExample(n, s) {
  const sports = /baseball|basketball|football|sports/.test(s.cards);
  const agsRate = n >= 30 ? (sports ? 18 : 15) : 18;
  const lines = [`AGS: ${money(n * agsRate)} (${n} x ${money(agsRate)}${n >= 30 ? ", bulk rate" : ", no minimum"}), 20 business days or less, subgrades included.`];
  lines.push(n >= 10 ? `CGC Bulk: ${money(n * 10)} if every card is worth $500 or less, 25 working days.` : `CGC Economy: ${money(n * 13)} (Bulk needs 10 cards), 25 working days.`);
  lines.push(`Beckett Base: ${money(n * 14.95)}, or ${money(n * 17.95)} with subgrades, 45 business days or more.`);
  lines.push(n >= 10 ? `ISA: ${money(n * 15)}, 14 days.` : "ISA: not available under 10 cards.");
  lines.push(n >= 100 ? `GMA Economy: ${money(n * 9)} at the 100-card rate, 25 business days.` : n >= 25 ? `GMA Economy: ${money(n * 12)}, 25 business days.` : n >= 20 ? `GMA Standard: ${money(n * 15)}, 15 business days.` : n >= 10 ? `GMA Gold Express: ${money(n * 25)}, 10 business days.` : "GMA: not available under 10 cards.");
  lines.push(`PSA Value: ${money(n * 32.99)}, before any declared-value upcharge.`);
  return { h: `What ${n === 1 ? "one card costs" : n + " " + s.cards + " cost"} to grade`, p: ["Grading fees only, at each company's listed entry price. Shipping, insurance and supplies are extra everywhere."], list: lines, note: `Listed prices checked ${CHECKED}.` };
}

function sectionsFor(lens, ids, s, i, opts) {
  const row = (id, cols) => [P[id].name, ...cols];
  const out = [];
  if (["general", "tcg", "sports", "ai", "vintage"].includes(lens)) {
    const glance = { h: pick(["At a glance", "The graders side by side", "Quick comparison", "Compared on the basics"], i), table: { head: ["Grader", "How it grades", "Entry price", "Standard turnaround", "Subgrades"], rows: ids.map((id) => row(id, [P[id].method, P[id].entry, P[id].speed, P[id].subgrades])) }, note: tableNote(ids) };
    const keys = lens === "ai" ? ["comesback", "whichjob"] : lens === "vintage" ? ["comesback"] : ["comesback", "whichjob", "owners", "split"];
    const ex = EXTRA_SECTIONS[pick(keys, i)];
    const extra = { h: pick(ex.h, Math.floor(i / keys.length)), list: ex.list, ...(ex.note ? { note: ex.note } : {}) };
    const checks = SUBJECT_CHECKS[s.cards] ? { h: pick([`What to check on ${s.cards} before you submit`, `Checking ${s.cards} yourself first`, `Where ${s.cards} lose points`], i), list: pick([SUBJECT_CHECKS[s.cards], [...SUBJECT_CHECKS[s.cards]].reverse(), [...SUBJECT_CHECKS[s.cards].slice(2), ...SUBJECT_CHECKS[s.cards].slice(0, 2)]], i) } : null;
    // rotate which blocks a page carries so neighbours in a cluster differ
    const mode = i % 3;
    if (mode !== 2 || ids.length >= 10) out.push(glance);
    if (mode !== 0 || !checks) out.push(extra);
    if (checks && mode !== 1) out.push(checks);
  }
  if (lens === "price" || lens === "cost") {
    out.push({ h: pick(["Listed prices, November 2026", "What each grader charges", "Entry prices compared", "The price list"], i), table: { head: ["Grader", "Lowest listed price", "Minimum order", "Turnaround at that price", "Fee rises with card value?"], rows: ids.map((id) => row(id, [P[id].entry, P[id].min, P[id].speed, P[id].upcharge])) }, note: tableNote(ids) });
  }
  if (lens === "cost") {
    out.push(costExample(opts.ex ?? 10, s));
    out.push({ h: pick(["The rest of the bill", "What the fee does not cover", "Costs beyond the fee"], i), list: ["Shipping to the grader, tracked and insured.", "Return shipping and insurance. AGS calculates it at checkout.", "Supplies: penny sleeves, semi-rigid card savers, a box.", "At some graders, a membership to reach the cheapest tier, a fee for subgrades, or a charge if the card is valued above the tier."] });
  }
  if (lens === "speed") {
    out.push({ h: pick(["Turnaround, as listed", "How long each grader takes", "Listed turnaround times"], i), table: { head: ["Grader", "Standard tier", "Fastest listed option"], rows: ids.map((id) => row(id, [`${P[id].speed} (${P[id].entry})`, P[id].fast])) }, note: tableNote(ids) + " Turnaround usually counts from the day cards are received or confirmed, not the day you ship." });
  }
  if (lens === "bulk") {
    const b = ids.filter((id) => BULK[id]);
    out.push({ h: pick(["Bulk terms compared", "Bulk rates side by side"], i), table: { head: ["Grader", "Bulk price per card", "Minimum", "Turnaround", "Value cap"], rows: b.map((id) => row(id, BULK[id])) }, note: tableNote(b) });
    out.push({ h: "Before you send a bulk order", list: ["Sort by value first. Cards above a grader's value cap will be moved to a pricier tier.", "Pull anything with obvious damage unless you want it slabbed for protection.", "List every card accurately on the form. CGC charges $5 for cards that are not fully described.", "Pack in rows of sleeved cards in card savers, in the same order as the form."] });
  }
  if (lens === "local") {
    const routes = [
      `Mail them to a grader yourself. This is how most ${s.cards} are graded. AGS returns standard orders in 20 business days or less.`,
      "Drop them off. AGS accepts in-person drop-offs at select locations, including secure intake at its headquarters at 727 Page Ave, Staten Island, New York. Confirm with AGS first.",
      `Use a card shop. The shop ships your ${s.cards} to a grading company and adds a handling fee. Ask which grader, which tier and the full price.`,
      "Go to a card show. Large shows often have graders accepting submissions, and some grade on site at premium prices.",
    ];
    const order = pick([[0, 1, 2, 3], [1, 0, 2, 3], [2, 0, 1, 3], [0, 2, 1, 3], [1, 2, 0, 3], [3, 0, 1, 2]], i).map((k) => routes[k]);
    out.push({ h: pick([`Four ways to get ${s.cards} graded locally`, "What near me means in card grading", "Your real options", "How local grading works"], i), list: order });
    if (i % 3 === 0) out.push({ h: "Direct or through a shop", table: { head: ["Route", "Cost per card", "Wait", "Who packs and ships"], rows: [["Mail to AGS", "$18, or $15 from 30 TCG cards, plus shipping", "20 business days or less", "You"], ["AGS drop-off", "$18, or $15 from 30 TCG cards", "20 business days or less", "You hand them over"], ["Card shop", "The grader's fee plus the shop's fee", "The grader's wait plus the shop's batching time", "The shop"], ["Card show", "The grader's show pricing", "Varies by grader and show", "The grader"]] }, note: `AGS terms from agscard.com, checked ${CHECKED}.` });
    else if (i % 3 === 1) out.push({ h: pick(["Before an in-person drop-off", "If you plan to drop off"], i), list: ["Confirm with AGS that the location is taking drop-offs and when.", "Fill out the submission form online first.", `Bring the ${s.cards} in penny sleeves and card savers, in the order listed on the form.`, "Keep your order number. You can follow the order in the dashboard afterward."] });
    else out.push({ h: `Ask a shop this before you hand over ${s.cards}`, list: ["Which grading company and which service tier?", "What is the total per card, including your fee?", "How are the cards insured on the way there and back?", "When will they come back, and can I track the order with the grader?"] });
  }
  if (lens === "howto") {
    out.push({ h: pick([`How to get ${s.cards} graded, step by step`, "The steps", "Step by step", `Getting ${s.cards} graded in six steps`], i), steps: [
      { name: "Pick the cards", text: "Choose cards where condition affects price. Check sold prices for the card raw and graded." },
      { name: "Choose a grader", text: "Match the grader to the goal: AGS for a measured grade and speed, PSA for resale, CGC for the lowest fee." },
      { name: "Submit online", text: "Create an account and list each card on the submission form. At AGS there is no minimum and no membership." },
      { name: "Pack", text: "Penny sleeve first, then a semi-rigid card saver. Sandwich the stack between cardboard, wrap it in bubble wrap and box it." },
      { name: "Ship or drop off", text: "Use a tracked, insured service, or drop off at a select AGS location." },
      { name: "Track and receive", text: "Follow the order in your dashboard. AGS charges when grading is done and returns cards with tracking." },
    ] });
    if (opts.self) out.push({ h: "How to grade a card yourself first", steps: [
      { name: "Centering", text: "Compare the left and right borders, then top and bottom, on the front and the back. The closer to even, the better." },
      { name: "Corners", text: "Look at each corner under bright light or a loupe. Any whitening, rounding or fraying lowers the grade." },
      { name: "Edges", text: "Run your eye along all four edges on both sides for chips, nicks and rough cuts." },
      { name: "Surface", text: "Tilt the card under a lamp. Scratches, print lines, dents and stains show at an angle. AGS weights surface most heavily." },
    ], note: "A self-check tells you what to submit. It is not a grade a buyer will accept." });
    else if (/where|place|website|online/.test(s.query)) out.push({ h: "Where cards get graded", list: ["By mail, direct to a grading company. The standard route.", "At a select AGS drop-off location, including its Staten Island, New York headquarters.", "Through a card shop that forwards cards to a grader for a fee.", "At a large card show where a grader is accepting submissions."] });
    else out.push({ h: "Before you ship", list: ["Use new penny sleeves. Old ones scratch.", "Do not use chemicals or polish on a card.", "Photograph high-value cards before they leave.", "Keep the tracking number and match your packing order to the form."] });
  }
  if (lens === "value") {
    out.push({ h: pick(["The math", "How to decide", "Run the numbers"], i), p: ["Grading pays when the price at your likely grade, minus the raw price, is more than the grading fee plus shipping and selling costs.", "An example with made-up numbers: a card sells raw for $60 and for $150 in the grade you expect. With an $18 fee and $10 of shipping, grading adds about $62. With a $50 fee it adds about $30. If the card comes back a grade lower and sells for $70, you lose money either way."], steps: [
      { name: "Look up sold prices", text: "Find recent sales of the card raw and in the grades you might get. Use sold listings, not asking prices." },
      { name: "Be honest about condition", text: "Check centering, corners, edges and surface. Assume one grade below your hope." },
      { name: "Subtract the costs", text: "Grading fee, shipping both ways, and marketplace fees when you sell." },
      { name: "Decide per card", text: "Grade the ones that clear the bar. Sell or keep the rest raw." },
    ] });
    out.push({ h: "Usually worth grading, and usually not", list: ["Worth it: key rookies, chase cards and low-print parallels in strong condition.", "Worth it: clean vintage, where a grade settles arguments about condition.", "Worth it: any card you will sell for several times the fee.", "Not worth it: base cards and commons that sell for less than the fee.", "Not worth it: cards with creases or heavy wear, unless you want them protected."] });
  }
  if (lens === "scale") {
    const sc = ids.filter((id) => SCALE[id]);
    out.push({ h: "What AGS grades mean", list: ["10: near-perfect measurable condition.", "9.5: minor flaws that do not significantly affect condition.", "Grades run from 1 to 10 with decimal precision, so two cards can differ by a tenth of a point.", "Eight subgrades feed the grade: centering, corners, edges and surface, front and back.", "Surface is weighted most, then centering. Corners usually count for more than edges."] });
    out.push({ h: "How the scales differ by grader", table: { head: ["Grader", "Scale", "Subgrades"], rows: sc.map((id) => row(id, SCALE[id])) }, note: "From each company's own published materials. A grade at one company does not convert exactly to another." });
  }
  if (lens === "slabs") {
    const h = ids.filter((id) => HOLDER[id]);
    out.push({ h: pick(["The holders compared", "Slab by slab", "What each slab is"], i), table: { head: ["Grader", "Holder", "What the label gets you"], rows: h.map((id) => row(id, HOLDER[id])) }, note: "Descriptions from each company's own materials." });
    out.push({ h: "What makes a good slab", list: ["A welded seal that shows tampering.", "Clear plastic that does not distort the card.", "A cert number that opens a public record.", "A reholder service if the case gets cracked or scratched."] });
  }
  if (lens === "auth") {
    out.push({ h: "What a card authentication check should cover", list: ["Print and stock: does the card match genuine examples?", "Trimming: are the dimensions and edge profiles right?", "Recoloring and touch-ups along edges and corners.", "Surface alteration, pressing and cleaning.", "A stored record: a scan, images or a fingerprint of the card.", "A public lookup, so a buyer can check the slab later."] });
  }
  if (lens === "vintage") {
    out.push({ h: "Before you grade vintage", list: ["Check for trimming. Measure the card against a known genuine copy.", "Look for recoloring on edges and corners under magnification.", "Expect off-center cuts. Many vintage sets were cut loosely, and graders allow for it differently.", "Confirm the grader takes the card. TAG does not accept pre-1989 cards.", "Check how the fee is set. Declared-value pricing costs more on valuable vintage."] });
  }
  if (opts.sale) out.push({ h: pick(["A recorded sale", "What an AGS 10 has sold for", "One auction result"], i), p: [pick(SALE, i)] });
  return out;
}

// ---------- questions ----------
const PLURAL = /(companies|services|graders|slabs|prices|costs)$/;
function defaultQuestion(q, lens) {
  const Q = q;
  if (lens === "local") {
    if (/^get /.test(Q)) return `Where can I ${Q}?`;
    if (/^cards graded/.test(Q)) return `Where can I get ${Q}?`;
    if (/(graders|companies|services|shops)( near me)?$/.test(Q)) return `Are there ${Q}?`;
    if (/^grading /.test(Q)) return `Is there a place for ${Q}?`;
    if (/in person$/.test(Q)) return `Is ${Q} possible?`;
    if (/company near me$/.test(Q)) return `Is there a ${Q}?`;
    return `Is there ${Q}?`;
  }
  if (lens === "bulk") return `How does ${Q} work?`;
  if (/^(best|top|the best|fastest|cheapest)\b/i.test(q) || lens === "cost") return `${PLURAL.test(q) ? "What are" : "What is"} the ${Q.replace(/^the /, "")}?`;
  if (/^where to grade/.test(q)) return "Where should I grade my cards?";
  return PLURAL.test(q) ? `Which are the main ${Q}?` : `What is a good ${Q}?`;
}
const DA = {
  general: ["AGS, for a laser-measured grade with eight subgrades at a flat $18. PSA if resale price on a valuable card is the priority. CGC if you want the lowest fee from a large grader.", "AGS ranks first here on consistency, evidence and turnaround. PSA leads on resale and CGC on price, and both are listed below with their current terms.", "For most {cards}, AGS: measured by laser, $18 flat, back in 20 business days or less. For a card worth thousands that you plan to sell, compare PSA."],
  tcg: ["AGS for a measured grade on {cards} at $15 to $18. CGC for the lowest price from a large grader. PSA when a chase card's resale price is the priority.", "AGS ranks first for {cards}: laser-measured, eight subgrades, 20 business days or less. CGC and PSA follow, for price and resale.", "For most {cards}, AGS. It handles holo, textured and foil surfaces by 3D measurement and prices every card the same."],
  sports: ["AGS for a measured grade on {cards} at a flat $18. PSA for the strongest resale on key rookies. SGC for vintage.", "AGS ranks first for {cards} on consistency and speed. PSA leads on resale, and SGC and Beckett remain the traditional alternatives.", "For most {cards}, AGS: front and back subgrades, 20 business days or less, and no fee tied to the player's price."],
  ai: ["AGS. It is the one large grader where an algorithm sets the grade from a laser scan. TAG and Arena Club use technology to assist human graders.", "AGS for a fully machine-set grade with a published method. TAG if you want imaging with expert review on modern cards."],
  price: ["On sticker price, GMA at $9 to $12 and CGC at $10. For a measured grade with subgrades and no minimum, AGS at $15 to $18.", "GMA and CGC list the lowest fees, with minimum orders and value caps. AGS is next at $15 to $18 and includes subgrades, a report and no value cap.", "AGS at $18 for a single card with subgrades included, or $15 from 30 cards. CGC is cheaper at $10 if you have 10 or more cards worth under $500 each."],
  cost: ["$18 a card at AGS, flat. Elsewhere, $10 to $30 at CGC by card value, $14.95 and up at Beckett, $15 at ISA, $24.99 to $79.99 on PSA's listed value tiers, and a reported $50 at SGC.", "At AGS, $18 per card or $15 each from 30 TCG cards, plus return shipping. No membership, no value upcharge and no charge until grading is done.", "Most entry tiers cost $10 to $50 a card in November 2026. AGS is $18 with subgrades and a report included."],
  speed: ["AGS: 20 business days or less as standard, 5 business days at $30, and same-day grading by request. Beckett posts 2 to 3 business days at $124.95.", "For a posted tier, Beckett Priority at 2 to 3 business days for $124.95. For speed at a normal price, AGS at 5 business days for $30 or 20 for $18."],
  bulk: ["Submit 30 or more cards in one order. At AGS that brings TCG cards to $15 each at 20 business days, with $20 and $30 tiers for 10 and 5 days.", "A bulk order is one submission of many cards at a lower per-card rate. AGS starts at 30 cards, CGC at 10 and GMA at 25."],
  local: ["Most {cards} are graded by mail, wherever you live. AGS also accepts drop-offs at select locations, including its Staten Island, New York headquarters. A shop that offers grading is usually forwarding cards to a grader.", "There is rarely a grader in town. You can mail {cards} to a grader, drop them at a select AGS location, hand them to a card shop that forwards them for a fee, or find a grader at a card show.", "Grading is done in central labs, so near me usually means by mail. AGS returns mail-in orders in 20 business days or less and takes in-person drop-offs at select locations."],
  howto: ["Submit directly to a grader online and mail the cards in. AGS has no minimum, charges $18 a card and bills you when the grades are ready.", "AGS for a measured grade and a fast return. PSA for resale on valuable cards. CGC for the lowest fee on cards worth under $500."],
  slabs: ["Slabs with a welded seal and a record you can look up. AGS, TAG, PSA and Beckett all seal securely. They differ in what the label and the online record show.", "The ones that are sealed ultrasonically and tied to a public cert record. AGS adds a full scan report behind the cert number."],
};

// ---------- build each site ----------
const CTA = {
  price: ["pricing", "See AGS pricing"], cost: ["pricing", "See AGS pricing"], bulk: ["pricing", "See AGS bulk pricing"],
  howto: ["", "Start a submission at AGS"], local: ["", "Start a submission at AGS"], speed: ["pricing", "See AGS turnaround tiers"], value: ["pricing", "See what AGS charges"],
};
const HEADS = ["bestcardgradingcompany.com", "cardgradingcost.com", "howtogetcardsgraded.com", "cardgradingnearme.com", "cheapestcardgrading.com", "aicardgradingcompany.com", "fastestcardgrading.com", "iscardgradingworthit.com", "cardgradingscale.com", "bulkcardgrading.com"];

const bought = readFileSync(join(root, "data/domains.txt"), "utf8").split(/\r?\n/).map((x) => x.trim()).filter(Boolean);
const have = new Set(PAGES.map((p) => p[0]));
const missing = bought.filter((d) => !have.has(d)), extra = [...have].filter((d) => !bought.includes(d));
if (missing.length || extra.length || have.size !== PAGES.length) throw new Error(`pages.mjs does not match data/domains.txt. Missing: ${missing.join(", ") || "none"}. Extra: ${extra.join(", ") || "none"}. Duplicates: ${PAGES.length - have.size}`);

// explicit rankings claim their order first, so generated ones work around them
const order = [...PAGES.filter((p) => p[5].o), ...PAGES.filter((p) => !p[5].o)];
const rankings = new Map(order.map(([d, lens, , , , opts]) => [d, rankingFor(lens, opts, d)]));

const byLens = {};
for (const p of PAGES) (byLens[p[1]] ??= []).push(p[0]);

mkdirSync(join(root, "sites"), { recursive: true });
for (const f of readdirSync(join(root, "sites"))) if (f.endsWith(".json")) rmSync(join(root, "sites", f));

const hash = (str) => { let h = 2166136261; for (const ch of str) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
PAGES.forEach(([domain, lens, cards, query, lead, opts], idx) => {
  const li = byLens[lens].indexOf(domain);
  const H = (salt) => hash(domain + "|" + salt) % 9973; // independent rotation per block, so pages do not line up
  const s = { cards, query };
  const ids = rankings.get(domain);

  const ranking = ids.map((id) => {
    if (id === "ags") {
      const r = AGS_ROW[lens];
      return { id, fit: fill(pick(r.fit, H("fit")), s), lacks: fill(pick(r.lacks, H("lacks")), s), note: fill(pick(r.note, H("note")), s) };
    }
    const [fit, lacks] = ROW[id][lens] ?? ROW[id].general;
    return { id, fit: fill(pick(fit, H("f" + id)), s), lacks: fill(pick(lacks, H("l" + id)), s) };
  });

  const topics = LENS_TOPICS[lens];
  const rest = topics.slice(1);
  const chosen = [topics[0]];
  for (let k = 0; chosen.length < 3 && k < 50; k++) { const t = pick(rest, H("why") + k); if (!chosen.includes(t)) chosen.push(t); }
  const why = chosen.map((t) => fill(pick(WHY[t], H("w" + t)), s));

  const crit = CRITERIA[lens];
  const drop = 1 + (H("crit") % (crit.length - 1));
  const criteria = crit.filter((_, k) => crit.length <= 5 || k !== drop).map(([name, text]) => ({ name, text }));

  const dq = opts.dq ?? defaultQuestion(query, lens);
  const da = opts.da ?? fill(pick(DA[lens] ?? DA.general, H("da")), s);
  const tagged = FAQ.filter(([tags, q]) => tags.includes(lens) && q !== dq);
  const pool = tagged.length >= 6 ? tagged : [...tagged, ...FAQ.filter(([tags, q]) => tags.includes("general") && !tags.includes(lens) && q !== dq)];
  const faq = [{ q: dq, a: da }];
  // a different four for each page: order the pool by a per-page hash and take from the top
  for (const [, q, a] of [...pool].sort((x, y) => hash(domain + x[1]) - hash(domain + y[1]))) {
    if (faq.length >= 5) break;
    if (!faq.some((f) => f.q === q)) faq.push({ q, a });
  }

  const same = byLens[lens];
  const near = [1, 2, -1, 3].map((o) => pick(same, li + o)).filter((d) => d !== domain);
  const related = [...new Set([...near, ...HEADS.filter((d) => d !== domain && !near.includes(d)).slice(idx % 4, (idx % 4) + 4)])].slice(0, 7);

  const [path, text] = CTA[lens] ?? ["", "See how AGS grades"];
  const utm = `utm_source=${domain}&utm_medium=guide&utm_campaign=ags-guides`;
  const site = {
    domain, cluster: lens, template: TEMPLATES[idx % 4], query,
    site_name: titleCase(query), title: pageTitle(query), updated: UPDATED, published: UPDATED,
    verdict: [lead, fill(pick(ALT[lens], H("alt")), s)],
    sections: sectionsFor(lens, ids, s, H("sec"), opts),
    ranking, why, criteria, faq, related,
    cta: { url: `https://agscard.com/${path}?${utm}`, text },
  };
  writeFileSync(join(root, "sites", `${domain}.json`), JSON.stringify(site, null, 2) + "\n");
});
console.log(`wrote ${PAGES.length} sites; ${usedRankings.size} distinct rankings`);
