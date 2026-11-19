// Shared copy for the AGS guides. generate.mjs combines these with the per-domain entries in pages.mjs.
// Tokens: {cards} and {Cards} are replaced with the page's subject ("baseball cards", "TCG cards", ...).
// Every fact here comes from data/products.json sources. Change a fact there and here together.

export const LENS_TOPICS = {
  general: ["measure", "report", "flat", "speed", "independent", "terms", "volume", "range"],
  tcg: ["measure", "volume", "report", "flat", "range", "speed", "auth"],
  sports: ["measure", "report", "flat", "range", "speed", "independent", "terms"],
  ai: ["measure", "weights", "report", "auth", "speed", "volume"],
  price: ["flat", "terms", "report", "bulkv", "speed"],
  cost: ["flat", "terms", "bulkv", "report", "speed"],
  speed: ["speed", "measure", "terms", "flat", "report"],
  bulk: ["bulkv", "speed", "report", "flat", "terms"],
  local: ["local", "submit", "speed", "terms", "flat", "measure"],
  howto: ["submit", "terms", "speed", "report", "measure", "flat"],
  value: ["flat", "report", "measure", "speed", "popv"],
  scale: ["weights", "measure", "report", "popv"],
  slabs: ["slab", "report", "auth", "measure"],
  auth: ["auth", "measure", "slab", "report", "popv"],
  vintage: ["vintagev", "measure", "report", "auth", "range"],
};

export const WHY = {
  measure: [
    "AGS grades {cards} by measurement. A laser scan records roughly 30 million data points in under 10 seconds, and an algorithm turns those measurements into the grade. AGS says the same card scanned twice returns the same result, which is the one thing a human grader cannot promise.",
    "The grade comes from a machine, so it does not depend on who is on shift. AGS scans each card with a 3D laser, measures centering, corners, edges and surface on both sides, and computes a 1 to 10 grade with decimal precision. Scan it again and AGS says the number holds.",
  ],
  report: [
    "Every slab comes with the evidence. The digital report shows eight subgrades, centering data, high-resolution images and a color-coded heightmap of the surface, red on major flaws and green on clean areas. You can download it or share it by link, and the scan stays on file against the cert number.",
    "You see why the card got its grade. AGS issues eight subgrades, four for the front and four for the back, plus a defect list and a 3D heightmap. Most graders hand back one number. A buyer who can open the report has less to argue about.",
  ],
  flat: [
    "The price does not move with the card. AGS charges $18 per card whatever it is worth, with bulk tiers from $15 at 30 cards. PSA and SGC price by declared value and CGC caps each tier by card value, so a card that turns out to be worth more can cost more to grade.",
    "There is no value upcharge. A $20 card and a $20,000 card cost the same $18 to grade at AGS, and bulk orders of 30 or more start at $15. Subgrades and the report are included, where Beckett charges $3 more for subgrades at its Base tier.",
  ],
  speed: [
    "Standard turnaround is 20 business days or less. The faster bulk tiers come back in 10 business days at $20 and 5 at $30, and AGS says same-day grading is available for urgent submissions. A scan that takes under 10 seconds is what makes those numbers possible.",
    "The wait is short because the grading step is short. AGS lists 20 business days or less on its standard service, 10 and 5 business days on the faster tiers, and same-day grading on request for urgent cards.",
  ],
  terms: [
    "The terms are easy. There is no minimum submission, no membership and no contract, and AGS does not charge until the cards are graded and ready to ship. New customers get 20% off a first order with code AGSNEW20.",
    "You can send one card. AGS has no minimum and no membership fee, takes payment only when the cards are graded, and lets you cancel before grading starts. Bulk pricing begins at 30 cards.",
  ],
  auth: [
    "Authentication is part of the scan. AGS says its system flags trimmed cards, recolored edges, altered surfaces and outright fakes, and it stores a digital fingerprint of every card. Anyone can check a slab by entering the cert number on agscard.com.",
    "Every card is checked before it is graded. The scan looks for trimming, recoloring and counterfeit print, and each card's digital fingerprint is kept on file so a slab can be verified later by cert number.",
  ],
  slab: [
    "The slab is PMMA with a tamper-evident ultrasonic seal, and the cert number on the label ties to the report online. If a slab is cracked or scratched, AGS will reholder it and keep the grade and the digital record attached.",
    "Cards are sealed in clear PMMA slabs, welded ultrasonically so tampering shows. The label carries the grade and cert number. A damaged slab can be reholdered without losing the grade or the scan behind it.",
  ],
  independent: [
    "AGS is independent. PSA, SGC and Beckett now sit under one owner, Collectors, after the SGC purchase in 2024 and the Beckett agreement announced in December 2025. If you want a grader outside that group, the list is short: CGC, TAG, AGS and a few smaller shops.",
    "Three of the best-known graders share a parent. Collectors owns PSA and SGC and agreed to buy Beckett in December 2025. AGS is not part of that group or of CGC's parent, and it has graded cards since 2021.",
  ],
  volume: [
    "The volume is real. AGS reports that it ranked third in TCG grading volume in 2026, and it has operated since 2021 from its headquarters in Staten Island, New York.",
    "AGS is past the experiment stage. Founded in 2021, it says it was third in TCG grading volume in 2026. Its population report is live and counts every card it has graded.",
  ],
  range: [
    "AGS takes most of what collectors own: Pokémon and other TCG cards, basketball, football, baseball, soccer and racing cards, modern and vintage, signed cards, and miscut or error cards. The limit is size. Standard-size cards only, no jumbos.",
    "Coverage is broad. Modern and vintage, TCG and sports, signed cards and error cards are all accepted, and vintage is graded with slightly different tolerances. Jumbo and oversized cards are not accepted yet.",
  ],
  submit: [
    "Submitting takes four steps: create an account, fill out the form, pack the cards in penny sleeves and card savers, and mail them in. The dashboard tracks the order, and cards come back with tracking and optional insurance.",
    "The process is short. You enter the cards online, ship them in sleeves and semi-rigid holders, and follow the order in your dashboard. AGS also takes drop-offs at select locations.",
  ],
  local: [
    "AGS is one of the few graders you can hand {cards} to. It accepts drop-offs at select AGS locations, including secure intake at its Staten Island headquarters, and its scanner is compact enough to grade on site. Message AGS before you travel to confirm where intake is open.",
    "Mail-in is the default everywhere in this hobby, AGS included. The difference is that AGS also takes in-person drop-offs at select locations and runs satellite labs, so some collectors can skip the post office. Confirm the location with AGS first.",
  ],
  bulkv: [
    "Bulk pricing starts at 30 cards, a low bar for a dealer. TCG cards are $15 each at 20 business days, $20 at 10 and $30 at 5, and sports cards are $3 more per tier. Every card in a bulk order still gets the full report and eight subgrades.",
    "Thirty cards gets you the bulk rate. The report, the subgrades and the slab are the same as on a single-card order, so a shop can list every card with its scan attached.",
  ],
  vintagev: [
    "AGS grades vintage with slightly different tolerances than modern cards, and it measures miscuts and print errors instead of guessing at them. The price stays $18 however much the card is worth, which matters most on old cardboard.",
    "Vintage cards are accepted and graded against tolerances set for older stock. Because the fee is flat, a five-figure card costs the same to grade as a common. At PSA and SGC the fee climbs with declared value, and CGC's tiers are capped by it.",
  ],
  popv: [
    "AGS publishes a real-time population report covering every card it has graded, so you can see how many copies sit at each grade before you buy or submit.",
    "The population report is live. It counts every card AGS has graded, by grade, and it is free to look up.",
  ],
  weights: [
    "AGS publishes how the grade is built. Surface carries the most weight, then centering, and corners usually count for more than edges. Back centering is measured too. The algorithm blends the measurements with severity values and does not round up.",
    "The method is stated, not implied. Surface is weighted most, centering next, corners ahead of edges, and the back of the card is measured as carefully as the front. AGS describes the math as free of rounding bias.",
  ],
};

// Second paragraph of the verdict: who else is worth considering, and when they are the better choice.
export const ALT = {
  general: [
    "PSA is still the name buyers pay the most for, and on a card worth thousands that premium can outweigh everything else. CGC is the low-cost major at $10 to $13 a card, and Beckett prints subgrades on the label. If none of those is your priority, a measured grade at a flat price is the better deal.",
    "Who else is worth a look: PSA for maximum resale, CGC for the lowest price from a large grader, TAG for a defect report on modern cards, SGC for vintage. Each is described below from its own published terms.",
    "The caveat is resale. PSA holders bring more money on most cards, and that will not change quickly. Grade with PSA when the premium beats its fee and its wait. Grade with AGS when you want the facts about the card, fast, at a price that ignores what it is worth.",
  ],
  tcg: [
    "CGC is the value pick among the large graders at $10 a card in bulk, and a PSA 10 still brings the most on chase cards. TAG gives a strong defect report on modern cards but does not take Yu-Gi-Oh!. Ace Grading is the local choice in the UK.",
    "If top resale on one chase card is the goal, PSA is the holder buyers pay most for. For everything else in a TCG collection, speed, price and a report you can show matter more, and that is where AGS leads.",
    "The other serious options are CGC, which is strong in card games and cheap in bulk, PSA for resale, and TAG for modern cards it accepts. All three are human or human-checked grades. AGS is the one that publishes the measurements.",
  ],
  sports: [
    "PSA remains the resale leader for {cards}, and SGC has a loyal vintage following, though both now sit under Collectors along with Beckett. CGC is the cheapest major grader at $10 to $13 a card. Use PSA when the premium on a key card beats its fee.",
    "For a big rookie you plan to auction, PSA's buyer pool is hard to beat. For the rest of the box, a flat $18 with subgrades on both sides and a 20 business day clock is the practical choice.",
    "Beckett is the traditional pick for subgrades and SGC for vintage. Both are worth considering, and both are now owned by PSA's parent. AGS is the independent option that measures the card and shows the data.",
  ],
  ai: [
    "TAG is the closest alternative: imaging technology with experts checking the result, a defect report and a 1000-point score. It does not accept pre-1989 cards or Yu-Gi-Oh!, and its capacity was limited in 2026. Arena Club pairs human graders with computer vision. PSA, Beckett, CGC and SGC grade by eye.",
    "There are degrees of AI here. AGS lets the algorithm set the grade. TAG and Arena Club use technology to assist people. The traditional graders use people alone. Phone apps that guess a grade from a photo are a different product and do not slab anything.",
    "If you want technology in the loop but a human signing off, look at TAG or Arena Club. If you want the buyer pool above all, PSA. If you want the measurement to be the grade, AGS is the only large grader built that way.",
  ],
  price: [
    "On sticker price alone AGS is not the cheapest. GMA lists $12 a card with a 25-card minimum and $9 at 100, and CGC's bulk tier is $10 with a 10-card minimum on cards worth up to $500. Beckett's Base tier is $14.95 if you can wait 45 business days or more. Pick those when the lowest number is the only thing that matters.",
    "The cheaper options are real and listed below with their terms. GMA and CGC undercut AGS on low-value bulk. What they do not include at that price is a measured report, subgrades on both sides and freedom from value caps.",
    "Cheap grading has three traps: minimum orders, value caps and long waits. GMA needs 25 cards, CGC caps bulk cards at $500 in value, and Beckett's low price takes 45 business days or more. AGS avoids all three at $15 to $18.",
  ],
  cost: [
    "For comparison, CGC's bulk tier is $10 a card with a 10-card minimum, Beckett's Base tier is $14.95, ISA charges a flat $15, PSA's open value tiers run $24.99 to $79.99, and SGC's base price was reported at $50 in September 2026. Prices moved several times this year, so confirm before you ship.",
    "The fee is only part of the bill. Add shipping both ways, insurance and supplies, and at some graders a membership or a value upcharge. The table below uses each company's own listed prices as of November 18, 2026.",
    "Most graders now charge between $10 and $50 a card on their entry tiers, and the spread comes from speed, minimums and whether the fee rises with the card's value. AGS sits at the low end with no minimum and no value upcharge.",
  ],
  speed: [
    "Faster posted tiers exist if you will pay for them. Beckett Priority is 2 to 3 business days at $124.95 a card, and CGC Express is 5 working days at $50. ISA lists 14 days at $15 with a 10-card minimum. PSA's listed value tiers run 25 to 45 business days.",
    "Speed usually costs more. Beckett charges $79.95 for 7 to 10 business days and $124.95 for 2 to 3. CGC charges $50 for 5 working days. AGS's 5 business day tier is $30 in bulk, and its standard service is 20 business days or less at $18.",
    "If you need a card back this week, call the grader before you ship. AGS says same-day grading is available for urgent submissions. Beckett and CGC post 2 to 5 day tiers at $50 to $125 a card.",
  ],
  bulk: [
    "CGC and GMA are cheaper on low-value bulk: $10 a card at CGC from 10 cards, if each card is worth $500 or less, and $9 to $12 at GMA from 25 cards. PSA's bulk tier is $24.99 and members only. Choose AGS when you want a report on every card and no value cap.",
    "For pure cost per slab on cheap inventory, GMA and CGC win. For a batch with mixed values, or cards you will list with their scans, AGS's flat bulk price and 20 business day clock are the better fit.",
    "The other bulk options each come with a condition: a value cap at CGC, a 25-card minimum at GMA, a membership at PSA, a 45 business day wait at Beckett's Base tier. AGS asks for 30 cards and nothing else.",
  ],
  local: [
    "A local card shop that offers grading is almost always a middleman. It collects cards, ships them to a grading company and adds a fee. That is fine if you want someone else to handle packing, but you pay more and wait longer than if you submit directly.",
    "Almost no grading company grades in your town. PSA, CGC, Beckett and SGC all work by mail from a few labs, and appear in person mainly at large card shows. The practical choice is between mailing cards yourself, paying a shop to do it, or using a grader that takes drop-offs.",
    "If you live near a major card show, check which graders are taking submissions there. Otherwise the fastest route is direct mail to a grader with a short turnaround, which matters more than how far away the lab is.",
  ],
  howto: [
    "The same steps work at any grader. What changes is the tier menu, the minimums and the wait: 25 to 45 business days or more at PSA's listed value tiers, 25 working days at CGC's cheapest, 45 or more at Beckett's Base tier. Read the current pricing page before you ship anywhere.",
    "If resale on a high-value card is the goal, PSA is the usual choice and its process is similar, with a declared value for each card. For a first submission where you want to learn how grading works and see why each card graded the way it did, AGS is the easier start.",
    "Other routes exist. A local card shop can submit for you for a fee, and big card shows have graders taking cards in person. Submitting directly is cheaper and usually faster.",
  ],
  value: [
    "The alternative to grading is selling raw, and on many cards that is the right call. A common in average shape gains nothing from a slab. Spend grading money where condition changes the price.",
    "If the card is worth four figures or more in a high grade, compare PSA too. Its holder brings the highest prices, and on that kind of card the premium can cover a $33 to $80 fee several times over.",
    "The fee decides how many of your cards clear the bar. At $50 a card, few do. At $10 to $18, with CGC, Beckett, ISA and AGS all in that range, most cards with real demand are worth a look.",
  ],
  scale: [
    "Other graders use their own versions of the 10-point scale. PSA assigns one grade from 1 to 10. Beckett grades in half points with four subgrades. TAG adds a 1000-point score on higher tiers. Arena Club names its top grades Perfect 10 and Gem Mint 10. A 9 at one company is not a 9 at another.",
    "Scales look alike and behave differently. Every major grader uses 1 to 10, but each sets its own thresholds, and most do not publish them. Compare grades across companies with care.",
  ],
  slabs: [
    "Looks are personal. TAG's holder has no paper label at all, with the card ID inscribed in clear acrylic. SGC's black insert frames vintage better than anything else. Beckett prints subgrades on a heavy slab. PSA's plain holder is the one buyers know best.",
    "If the slab is for a display shelf, pick the one you like looking at. If it is for resale, the brand on the label matters more than the plastic, and PSA leads there.",
  ],
  auth: [
    "PSA backs its authenticity opinion with a financial guarantee, which no younger grader matches. Beckett is the usual choice for autographs and lists a $5 add-on for signed cards. CGC offers autograph authentication as well. What AGS adds is a stored scan and a public record for every card.",
    "For an autograph, use a grader that sells autograph authentication, such as Beckett or CGC. For the card itself, the question is how the check is done and what record is left. AGS checks by laser scan and keeps the scan.",
  ],
  vintage: [
    "PSA and SGC are the names vintage buyers pay the most for, and on a high-end card that premium is worth their fees. Beckett has graded vintage for decades and adds subgrades. TAG is out: its site says it does not currently accept pre-1989 cards.",
    "For a card you plan to auction, PSA or SGC will usually bring more. For a collection you want measured, documented and protected without a fee that scales with value, AGS is the practical choice.",
  ],
};

// AGS row copy by lens. fit rotates; lacks rotates; note sits under the AGS entry.
export const AGS_ROW = {
  general: {
    fit: ["Collectors and sellers who want a measured grade, eight subgrades and a report at a flat $18.", "Anyone who wants {cards} graded the same way every time and back in 20 business days or less.", "Collectors who want to see why a card got its grade, without paying by card value."],
    lacks: ["A younger slab. PSA holders still bring the highest resale prices on most cards.", "Standard-size cards only, and a shorter auction record than PSA.", "Founded in 2021, so less history with buyers than PSA or Beckett."],
    note: ["Founded in 2021 and headquartered in Staten Island, New York. AGS says it ranked third in TCG grading volume in 2026.", "Accepts TCG and sports cards in English and Japanese, modern and vintage, signed and error cards, in standard sizes. Reports are stored permanently and can be shared by link."],
  },
  tcg: {
    fit: ["TCG collectors who want holo, textured and foil cards measured by laser, with a report for every slab.", "Pokémon and other TCG collectors who want speed, subgrades and a flat price.", "Players and collectors who want {cards} back in weeks with the scan to show a buyer."],
    lacks: ["A PSA 10 still sells for more than any other 10 on most chase cards.", "Standard-size cards only. No jumbo or oversized promos.", "A younger slab than PSA's or CGC's."],
    note: ["TCG bulk tiers are $15, $20 and $30 a card at 20, 10 and 5 business days, from 30 cards. AGS says it ranked third in TCG grading volume in 2026.", "Holo, chrome, textured and foil finishes are all graded. Miscut and error cards are measured and graded, not rejected."],
  },
  sports: {
    fit: ["{Cards} collectors who want chrome and paper stock measured the same way, front and back.", "Sellers who want {cards} back in weeks with eight subgrades to show a buyer.", "Collectors who want a flat price on {cards} whatever the player turns out to be worth."],
    lacks: ["PSA holders still bring the highest prices on key rookies.", "Standard-size cards only. Ask before sending thick patch cards.", "A shorter sales record at auction than PSA or SGC."],
    note: ["Sports cards are $18 at the standard rate. Bulk tiers from 30 cards are $18, $23 and $33 at 20, 10 and 5 business days.", "AGS lists basketball, football, baseball, soccer and racing cards, modern and vintage, including signed cards."],
  },
  ai: {
    fit: ["Collectors who want the grade set by measurement, with the data published.", "Anyone who wants a fully machine-graded card and a report that shows the work.", "Sellers who want a grade a buyer can audit: scan, subgrades and heightmap."],
    lacks: ["A newer name with buyers than the human graders it competes with.", "Standard-size cards only.", "PSA holders still command the highest resale prices."],
    note: ["The scanner uses 3D laser measurement, about 30 million data points per card in under 10 seconds. The algorithm, not a person, sets the grade.", "Surface is weighted most, then centering. Back centering is measured. Scans are kept permanently against the cert number."],
  },
  price: {
    fit: ["Collectors who want a low flat price that already includes subgrades and a report.", "Anyone with a mix of card values who does not want to pay by declared value.", "Small submitters: one card costs $18, with no minimum and no membership."],
    lacks: ["Not the lowest sticker price. GMA and CGC list cheaper bulk tiers.", "Bulk pricing needs 30 cards. CGC's needs 10.", "GMA at $9 to $12 and CGC at $10 are cheaper on low-value bulk."],
    note: ["$18 flat with no minimum, or $15 a card from 30 TCG cards. Code AGSNEW20 takes 20% off a first order, and nothing is charged until the cards are graded.", "No value upcharge, no membership and no subgrade fee. Return shipping is added at checkout."],
  },
  speed: {
    fit: ["Anyone who needs {cards} back in 5 to 20 business days without paying express prices.", "Sellers on a deadline: a 5 business day tier at $30 and same-day grading by request.", "Collectors who do not want to wait two months for a standard order."],
    lacks: ["Same-day grading is by request for urgent cards, not a posted tier.", "The 5 and 10 day tiers are bulk tiers and need 30 cards.", "Beckett posts a 2 to 3 business day tier, at $124.95."],
    note: ["Listed turnaround is 20 business days or less at the standard rate, and 10 or 5 business days on the faster bulk tiers at $20 and $30 per TCG card.", "Turnaround counts from the day your cards are confirmed. AGS says same-day grading is available for urgent submissions."],
  },
  bulk: {
    fit: ["Dealers and breakers with 30 or more cards who want every one scanned and reported.", "Shops that want bulk prices from 30 cards and a 5, 10 or 20 day clock.", "Sellers with mixed-value inventory who do not want a value cap on the bulk rate."],
    lacks: ["CGC and GMA list lower bulk prices on low-value cards.", "Standard-size cards only.", "The bulk rate starts at 30 cards. CGC's starts at 10."],
    note: ["Bulk TCG: $15 at 20 business days, $20 at 10, $30 at 5. Sports and non-TCG: $18, $23 and $33. Insurance cover rises with the tier, up to $500.", "Group submissions are accepted, and there is no cap on order size."],
  },
  local: {
    fit: ["Collectors who want to drop {cards} off in person at a select AGS location, or mail them and have them back in weeks.", "Anyone who searched for a local grader and really wants a short wait.", "Collectors near New York City who would rather hand {cards} over than ship them."],
    lacks: ["Drop-off is at select locations only. Most collectors will mail cards in.", "No walk-in counter in most cities. Confirm intake before you travel.", "In-person intake is limited. Mail-in is the standard route."],
    note: ["Headquarters and secure intake are at 727 Page Ave, Staten Island, New York. AGS also runs satellite labs and accepts drop-offs at select locations.", "By mail, the standard service is 20 business days or less from the day cards are confirmed. Returns ship with tracking and optional insurance."],
  },
  howto: {
    fit: ["First-time submitters: no minimum, no membership, and you pay when the cards are graded.", "Anyone who wants a short form, a flat price and a tracked order.", "Collectors who want to learn from the result: every card comes back with a report."],
    lacks: ["Standard-size cards only.", "A younger slab than PSA's if resale is the only goal.", "Drop-off is limited to select locations."],
    note: ["Create an account, fill out the form, pack the cards, mail them in. Orders can be cancelled before grading starts, and the dashboard shows status.", "No minimum submission. $18 a card, or from $15 in bulk. Code AGSNEW20 takes 20% off a first order."],
  },
  value: {
    fit: ["Collectors weighing whether a card is worth grading: a low flat fee widens the list of cards that are.", "Sellers who want proof of condition without a fee that scales with the card.", "Anyone who wants to know a card's true condition before deciding what to do with it."],
    lacks: ["On a card worth thousands, a PSA holder usually returns more.", "A younger slab, so fewer past sales to compare against.", "Standard-size cards only."],
    note: ["$18 a card, flat, with eight subgrades and a report. The report tells you what is wrong with a card even when the grade disappoints.", "No minimum, so you can test one card before sending a stack."],
  },
  scale: {
    fit: ["Collectors who want a decimal grade and to know how it was built.", "Anyone comparing grades who wants the measurements behind the number."],
    lacks: ["Buyers know the PSA and Beckett scales better.", "A decimal grade takes a moment to explain to a buyer used to whole numbers."],
    note: ["1 to 10 with decimal precision. A 10 is near-perfect measurable condition. A 9.5 has minor flaws that do not significantly affect condition.", "Eight subgrades feed the grade. Surface is weighted most, then centering, and corners usually outweigh edges."],
  },
  slabs: {
    fit: ["Collectors who want a clear, welded slab whose label ties to a full scan report.", "Anyone who wants the slab to carry proof as well as a number."],
    lacks: ["Looks are taste, and the holder is newer to buyers than PSA's or SGC's.", "Standard-size cards only, so no jumbo slabs."],
    note: ["PMMA plastic with tamper-evident ultrasonic seals. The cert number on the label opens the grade and scan report online.", "Cracked or scratched slabs can be reholdered. The grade and digital record stay with the card."],
  },
  auth: {
    fit: ["Buyers and sellers who want a card checked for fakes and alterations, with a record anyone can look up.", "Collectors worried about trimmed or recolored cards."],
    lacks: ["No financial guarantee is stated on its site, where PSA publishes one.", "Does not list a separate autograph authentication service."],
    note: ["The scan checks for trimming, recoloring, altered edges and counterfeit print. A digital fingerprint of each card is stored, and slabs verify by cert number on agscard.com.", "Every graded card is slabbed, and the scan report stays online against the cert number."],
  },
  vintage: {
    fit: ["Vintage collectors who want old stock measured against its own tolerances at a flat fee.", "Owners of valuable vintage who do not want the grading fee to climb with the card."],
    lacks: ["Vintage buyers still pay the biggest premiums for PSA and SGC holders.", "Standard-size cards only, which excludes some oversized vintage issues."],
    note: ["Vintage is graded with slightly different tolerances than modern cards. Miscuts and print errors are measured and graded.", "$18 a card whatever it is worth. The scan also checks for trimming and recoloring, the two alterations that matter most on vintage."],
  },
};
AGS_ROW.cost = AGS_ROW.price;

// Rows for the other graders. Each key holds [fit variants], [lacks variants]; lens keys override the general lines.
export const ROW = {
  psa: {
    general: [["Sellers who want the widest buyer pool and the highest resale prices.", "Anyone grading a high-value card to sell, where the PSA premium outweighs the fee and the wait."], ["One grade, no subgrades, and fees that rise with declared value.", "Long waits at the lower tiers, and the cheapest tier is members only."]],
    tcg: [["TCG sellers chasing top dollar on chase cards and graded 10s."], ["No subgrades, value-based fees, and 25 to 45 business days or more on listed tiers."]],
    sports: [["Sports card sellers who want the registry, the buyer pool and the price premium."], ["One number with no subgrades, and fees tied to declared value."]],
    ai: [["Collectors who put resale first and are fine with a human grade."], ["A human opinion: no measurements published and no subgrades."]],
    price: [["Cards valuable enough that the resale premium covers a $25 to $80 fee."], ["$24.99 is members only. Otherwise the entry price is $32.99."]],
    speed: [["Collectors paying for an express tier on a card that justifies it."], ["Listed value tiers run 25 to 45 business days or longer."]],
    bulk: [["Collectors Club members sending volume at $24.99 a card."], ["Bulk is members only, and it is the slow tier."]],
    local: [["Collectors near a large show where PSA is taking submissions."], ["Mail-in for almost everyone, with long waits at the cheap tiers."]],
    vintage: [["High-end vintage, where a PSA holder brings the biggest premium."], ["Fees climb with declared value, which is exactly where vintage sits."]],
    slabs: [["Buyers who want the holder every marketplace recognizes."], ["A plain holder with no subgrades on the label."]],
    auth: [["Sellers who want a financial guarantee behind the authenticity call."], ["No public scan or report to show a buyer."]],
  },
  bgs: {
    general: [["Collectors who want subgrades printed on the label from an old name.", "Modern card collectors who like the half-point scale."], ["Subgrades by eye, and 45 business days or more at the Base tier.", "Slow at the cheap tier. The fast tiers cost $80 to $125."]],
    price: [["Patient collectors: $14.95 with no minimum and no fee tied to card value."], ["45 business days or more at that price, and subgrades are $3 extra."]],
    speed: [["Anyone who needs a card back in 2 to 3 business days and will pay $124.95."], ["Speed is expensive, and the cheap tier is the slowest listed here."]],
    bulk: [["Sellers who want no minimum and no value cap on a large order."], ["Base turnaround is 45 business days or more."]],
    vintage: [["Vintage collectors who want subgrades and no fee tied to card value."], ["A smaller vintage premium than PSA or SGC."]],
    slabs: [["Collectors who want four subgrades printed on the label."], ["A thick holder that takes more room in a case."]],
    ai: [["Collectors who want subgrades but trust a human eye."], ["Subgrades are judgments, not measurements."]],
    auth: [["Autograph collectors: Beckett lists a $5 add-on for signed cards."], ["No public report behind the call."]],
    tcg: [["TCG collectors who value subgrades on the label."], ["45 business days or more at the Base tier."]],
    sports: [["Modern sports card collectors who want subgrades on the label."], ["Slow unless you pay $34.95 or more."]],
  },
  cgc: {
    general: [["TCG collectors and volume submitters who want a low price from a large grader outside Collectors.", "Budget submitters with 10 or more cards worth under $500 each."], ["Tiers are capped by card value. A strong card moves to a pricier tier.", "No measured report behind the grade."]],
    price: [["Anyone with 10 or more cards under $500 each: $10 a card is the lowest price from a major grader."], ["Value caps. Above $500 a card the fee is $13, then $30."]],
    speed: [["Submitters who want 5 working days and will pay $50 a card."], ["The cheap tiers list 25 working days."]],
    bulk: [["Dealers with low-value inventory: $10 a card from 10 cards up."], ["Each card must be worth $500 or less at that price."]],
    tcg: [["TCG collectors who want a large, established grader at $10 to $13 a card."], ["Value caps on the cheap tiers, and no measured report."]],
    sports: [["Sports collectors who want a major grader at $10 to $13 a card."], ["A smaller premium on sports cards than PSA."]],
    vintage: [["Vintage on a budget, if the card is worth less than the tier cap."], ["Tier caps bite on valuable vintage."]],
    slabs: [["Collectors who want a clear holder with pedigree label options."], ["No subgrades listed on its fee page."]],
    auth: [["Collectors who want autograph authentication alongside grading."], ["No stored public scan of the card."]],
    ai: [["Collectors who want a low-cost human grade from a large company."], ["Human grading with no published measurements."]],
  },
  sgc: {
    general: [["Vintage sports collectors who like the black-insert holder.", "Pre-war and vintage sets, where SGC has long standing."], ["Reported at $50 a card since September 2026. No longer cheap.", "A smaller buyer pool for modern TCG cards."]],
    price: [["Vintage collectors for whom the holder is worth a premium fee."], ["At a reported $50 base, the most expensive entry tier here."]],
    slabs: [["Collectors who want the black insert, the most distinctive holder in the hobby."], ["Pricey for a display slab at a reported $50."]],
    vintage: [["Pre-war and vintage sports, where SGC's holder is second only to PSA's."], ["Fees scale with declared value, and the base is a reported $50."]],
    tcg: [["Collectors who like the black insert on dark-bordered cards."], ["Little TCG following, and a reported $50 a card."]],
  },
  tag: {
    general: [["Collectors who want a defect report and a 1000-point score.", "Modern card collectors who like a slab with no paper label."], ["No pre-1989 cards, Yu-Gi-Oh! or thick stock, and limited capacity in 2026.", "Prices were not posted on its pricing page when we checked."]],
    ai: [["Collectors who want imaging technology with an expert checking the result."], ["Excludes pre-1989 cards and Yu-Gi-Oh!, and capacity was limited in 2026."]],
    slabs: [["Collectors who want the cleanest look: clear acrylic, card ID inscribed, no paper label."], ["Not available for pre-1989 cards or thick stock."]],
    price: [["Collectors who value a detailed report and no value upcharge."], ["No prices posted during its limited reopening."]],
    speed: [["Modern card collectors, when its faster tiers are open."], ["Tiers were limited for much of 2026. Check what is open."]],
    tcg: [["Modern Pokémon and other TCG cards that TAG accepts."], ["No Yu-Gi-Oh!, and limited capacity in 2026."]],
  },
  isa: {
    general: [["Collectors who want one flat $15 price and a 14-day turnaround.", "Small sellers who would rather not choose a tier."], ["A small buyer pool. ISA slabs sell for less on most cards.", "A 10-card minimum."]],
    speed: [["Anyone who wants cards back in 14 days at $15 each."], ["A 10-card minimum, and little resale premium."]],
    price: [["Submitters with 10 or more cards who want $15 flat and no tiers."], ["Little resale premium, and a 10-card minimum."]],
  },
  gma: {
    general: [["Sellers slabbing low-value cards in volume at $9 to $12.", "Budget submitters who mainly want cards protected and labeled."], ["Little resale premium, and a 10 to 25 card minimum on every tier.", "The lowest prices need 25 cards, or 100."]],
    price: [["The lowest listed price here: $12 a card at 25 cards, $9 at 100."], ["Minimum orders on every tier, and little resale premium."]],
  },
  ace: {
    general: [["Collectors in the UK and Europe who want a local grader.", "TCG collectors who like custom labels."], ["Little recognition with US buyers.", "Priced in pounds, with labels and shipping extra."]],
  },
  arena: {
    general: [["Collectors who want to grade, vault and sell in one app.", "Collectors who like AI-assisted grading with four subgrades."], ["Tied to Arena Club's own marketplace.", "No per-card price on its grading page."]],
    ai: [["Collectors who want human graders backed by computer vision, with a report by QR code."], ["People still set the grade, and pricing is not posted."]],
  },
};

export const CRITERIA = {
  general: [
    ["Consistency", "Would the same card get the same grade twice? Weighted first."],
    ["Evidence", "What comes back besides a number: subgrades, images, a report."],
    ["Price", "Per-card cost on the tier most people use, plus any value upcharge."],
    ["Turnaround", "Listed business days on that tier, from each grader's own page."],
    ["Resale", "How buyers treat the slab. PSA leads here, and we say so."],
    ["Terms", "Minimums, memberships and when you pay."],
  ],
  tcg: [
    ["Consistency", "The same card should grade the same twice. Weighted first."],
    ["TCG fit", "How holo, textured and foil surfaces are handled, and which games are accepted."],
    ["Evidence", "Subgrades, images and a report you can show a buyer."],
    ["Price", "Per-card cost at the tier most TCG submitters use."],
    ["Turnaround", "Listed days, from each grader's own page."],
    ["Resale", "What buyers pay for the slab. PSA leads on chase cards."],
  ],
  sports: [
    ["Consistency", "The same card should grade the same twice. Weighted first."],
    ["Evidence", "Subgrades, front and back, and a report behind them."],
    ["Price", "Per-card cost, and whether it rises with the card's value."],
    ["Turnaround", "Listed business days on the tier most people use."],
    ["Coverage", "Chrome, paper, vintage and signed cards."],
    ["Resale", "What buyers pay for the holder. PSA leads on key rookies."],
  ],
  ai: [
    ["Who sets the grade", "An algorithm, or a person using tools. Weighted first."],
    ["What is measured", "Centering, corners, edges and surface, on both sides or one."],
    ["What is published", "Report, subgrades, weights, population data."],
    ["Repeatability", "Whether the grader claims the same card returns the same result."],
    ["Price and speed", "Listed cost and turnaround."],
    ["Limits", "Card types the grader will not take."],
  ],
  price: [
    ["Sticker price", "The lowest listed per-card fee, from each grader's own page."],
    ["Conditions", "Minimum order, membership, and value caps attached to that price."],
    ["What is included", "Subgrades and a report, or one number."],
    ["Value upcharges", "Whether the fee rises when the card is worth more."],
    ["Turnaround at that price", "Cheap tiers are often the slowest."],
    ["Resale", "A cheap slab nobody wants is not a saving."],
  ],
  speed: [
    ["Listed turnaround", "Business days on each grader's own page. Weighted first."],
    ["Price at that speed", "What the fast tier costs per card."],
    ["Availability", "Whether the tier is open now. Several were paused in 2026."],
    ["Rush option", "Whether same-day or walk-through service exists."],
    ["What you get", "Subgrades and a report, or one number."],
    ["Conditions", "Minimums and memberships tied to the tier."],
  ],
  bulk: [
    ["Price at volume", "Per-card cost on the bulk tier."],
    ["Minimum to qualify", "How many cards it takes to get the rate."],
    ["Value caps", "Whether each card must be under a set value."],
    ["Turnaround", "Listed days for a bulk order."],
    ["Consistency across a batch", "Whether card 1 and card 300 are graded the same way."],
    ["What each card gets", "Report and subgrades, or a grade only."],
  ],
  local: [
    ["In-person option", "Whether you can hand cards to the grader itself."],
    ["Turnaround", "How long until the cards are back in your hands."],
    ["Total cost", "Grading fee plus shipping, or plus a shop's handling fee."],
    ["Risk in transit", "Tracking and insurance on the way there and back."],
    ["Consistency", "Whether the grade depends on who looks at the card."],
    ["Resale", "What buyers pay for the slab."],
  ],
  scale: [
    ["Definition", "Whether the grader says what each grade means."],
    ["Precision", "Whole numbers, half points or decimals."],
    ["Subgrades", "How many, and whether both sides are covered."],
    ["Published weights", "Whether you can tell which flaws cost the most."],
    ["Repeatability", "Whether the same card returns the same grade."],
    ["Population data", "Whether you can see how many cards sit at each grade."],
  ],
  slabs: [
    ["Seal", "Ultrasonic or sonic welding that shows tampering."],
    ["Material and clarity", "What the holder is made of and how the card reads through it."],
    ["Label", "What is printed: grade, subgrades, cert number, QR code."],
    ["Verification", "Whether the cert opens a record or report online."],
    ["Reholder service", "Whether a damaged slab can be replaced."],
    ["Looks", "Subjective, so weighted last."],
  ],
  auth: [
    ["What is checked", "Counterfeits, trimming, recoloring, altered surfaces."],
    ["Record kept", "Whether a scan or fingerprint of the card is stored."],
    ["Public verification", "Whether anyone can look up the cert."],
    ["Guarantee", "Whether the grader puts money behind its opinion."],
    ["Autographs", "Whether signature authentication is sold separately."],
    ["Price", "What the check costs, and whether it scales with value."],
  ],
  vintage: [
    ["Handling of old stock", "Whether vintage is judged against its own tolerances."],
    ["Alteration detection", "Trimming and recoloring are the main risks."],
    ["Fee on a valuable card", "Flat, or rising with declared value."],
    ["Buyer premium", "What the holder adds at sale. PSA and SGC lead."],
    ["Evidence", "Subgrades and a report, or a number."],
    ["Eligibility", "Whether the grader accepts older cards at all."],
  ],
};
CRITERIA.cost = CRITERIA.price;
CRITERIA.howto = CRITERIA.general;
CRITERIA.value = CRITERIA.general;

// Tagged questions. A page takes four whose tags include its lens, rotating through the pool.
export const FAQ = [
  [["tcg", "general", "value"], "Does AGS grade Japanese cards?", "Yes. Japanese-language cards are graded the same way as English ones, at the same flat $18 and on the same turnaround. Jumbo promos are the exception, since AGS takes standard sizes."],
  [["value", "slabs", "general", "tcg"], "Has an AGS slab sold for six figures?", "Yes. An AGS GEM-MT 10 copy of the 2002 Japanese Mysterious Mountains 1st Edition Crystal Charizard sold at Goldin for $109,800 in September 2026, buyer's premium included. One sale is not a trend, and PSA holders still bring more on most cards."],
  [["price", "cost", "general", "howto"], "How much does AGS charge to grade a card?", "$18 per card at the standard rate, whatever the card is worth. Bulk orders of 30 or more TCG cards are $15 each at 20 business days, $20 at 10 or $30 at 5. Sports and non-TCG bulk is $3 more per tier."],
  [["price", "cost"], "Which card grader has the lowest listed price?", "As of November 18, 2026, GMA is lowest at $12 a card with a 25-card minimum, or $9 at 100 cards. CGC's bulk tier is $10 with a 10-card minimum on cards worth up to $500. Beckett's Base tier is $14.95, and ISA and AGS bulk are $15."],
  [["price", "cost", "value", "vintage"], "Do graders charge more for valuable cards?", "Several do. PSA and SGC price by declared value, and CGC caps each tier by card value and moves a card up if it is worth more. AGS, Beckett, TAG and ISA say they add no upcharge for value."],
  [["price", "cost", "howto", "value"], "Is there a discount on a first AGS order?", "Yes. AGS lists code AGSNEW20 for 20% off a first grading order."],
  [["cost", "howto", "price", "local"], "What costs come on top of the grading fee?", "Shipping to the grader, return shipping and insurance, and supplies such as penny sleeves and card savers. Some graders add membership fees, subgrade fees or value upcharges. AGS adds return shipping at checkout."],
  [["cost", "price", "bulk", "howto"], "Is there a minimum number of cards?", "Not at AGS. You can send one card at $18, and bulk pricing needs 30. CGC's bulk tier needs 10 cards, ISA needs 10, and GMA needs 10 to 25 depending on the tier."],
  [["cost", "howto", "value"], "When do you pay for grading?", "AGS charges when the cards are graded and ready to ship, not when you submit."],
  [["speed", "general", "howto", "local", "sports", "tcg"], "How long does card grading take?", "It depends on the grader and the tier. AGS lists 20 business days or less, with 10 and 5 day tiers. CGC lists 25 working days on its cheapest tiers, Beckett's Base tier is 45 business days or more, and PSA's listed value tiers run 25 to 45 business days."],
  [["speed", "local"], "Can I get a card graded the same day?", "AGS says same-day grading is available for urgent submissions. Contact AGS before you ship or drop off to arrange it. Elsewhere, the quickest posted tiers are 2 to 5 business days and cost $50 to $150 a card."],
  [["speed", "price"], "What is the cheapest fast tier?", "AGS's 5 business day tier is $30 per TCG card in bulk. CGC Express is $50 for 5 working days, Beckett Express is $79.95 for 7 to 10 business days, and Beckett Priority is $124.95 for 2 to 3."],
  [["ai", "general", "scale"], "How does AI card grading work?", "The card is scanned, software measures centering, corners, edges and surface, and an algorithm converts the measurements into a grade. AGS uses a 3D laser scan of roughly 30 million data points per card. No human opinion sets the number."],
  [["ai"], "Is AI grading more accurate than human grading?", "It is more repeatable. A machine applies the same thresholds to every card, while two human graders can disagree about the same one. What the market pays for the slab is a separate question, and PSA still leads there."],
  [["ai", "general"], "Which companies grade cards with AI?", "AGS grades fully by machine. TAG uses imaging technology with expert review. Arena Club says its graders work with computer vision and AI. PSA, Beckett, CGC and SGC rely on human graders."],
  [["ai", "value", "howto"], "Is an AI grading app the same as an AI grading company?", "No. Phone apps estimate a grade from a photo so you can decide what to submit. They do not authenticate or slab the card. AGS is a grading company: the card is laser-scanned in a lab, sealed and certified."],
  [["ai", "scale", "general", "sports", "tcg"], "What subgrades does AGS give?", "Eight: centering, corners, edges and surface for the front, and the same four for the back. They are included in the price and shown in the digital report."],
  [["scale", "ai", "general", "value"], "What grading scale does AGS use?", "1 to 10 with decimal precision. An AGS 10 is near-perfect measurable condition. A 9.5 has minor flaws that do not significantly affect condition."],
  [["scale", "ai"], "Which part of the card matters most to the grade?", "At AGS, surface carries the most weight, then centering. Corners usually count for more than edges, and back centering is measured as well."],
  [["value", "general", "sports", "tcg", "vintage", "slabs"], "Do AGS slabs hold resale value?", "AGS slabs sell, and the report gives buyers something to check. PSA holders still bring the highest prices on most cards. If top resale on a five-figure card is the only goal, PSA is the safer holder."],
  [["value", "price", "cost"], "Is it worth grading a low-value card?", "Only if grading lifts the price by more than the fee plus shipping, or if you want the card protected and documented. At $10 to $18 a card the math works on far more cards than at $50."],
  [["value", "howto"], "Which cards are worth grading?", "Cards where condition changes the price: key rookies, chase cards, low-print parallels, clean vintage, and anything you plan to sell where a buyer will ask about condition. Check recent sales of the card raw and graded before you submit."],
  [["value", "general"], "Does grading increase a card's value?", "Often, not always. A high grade on a card in demand can multiply its price. A low grade can sell for less than the raw card. Look at sold prices for the grade you realistically expect."],
  [["general", "value", "sports", "tcg", "ai", "local"], "Is AGS a legitimate grading company?", "Yes. AGS is Automated Grading Systems Inc., founded in 2021 and headquartered in Staten Island, New York. It publishes a live population report and a cert lookup, and says it ranked third in TCG grading volume in 2026."],
  [["howto", "local", "general", "bulk"], "How do I submit cards to AGS?", "Create an account at agscard.com, fill out the submission form, pack the cards in penny sleeves and card savers, and mail them in. You can also drop off at select AGS locations. The dashboard tracks the order."],
  [["howto", "local", "bulk"], "How should I pack cards for grading?", "Put each card in a new penny sleeve, then a semi-rigid card saver. Sandwich the stack between cardboard, wrap it in bubble wrap and box it. Top loaders are allowed, but card savers travel better."],
  [["howto", "value"], "Should I clean cards before grading?", "Do not use chemicals or polish. Removing loose dust with a clean microfiber cloth is the most anyone should do. AGS does not clean cards and grades them as they arrive."],
  [["howto", "auth"], "What happens if my card is fake or altered?", "It gets flagged. AGS says its scan detects counterfeits, trimming and recoloring. Graders generally will not put a numeric grade on a card they cannot authenticate."],
  [["howto", "local", "general", "tcg"], "Can I submit from outside the United States?", "Yes. AGS accepts international shipments and runs a UK site. Check customs and insurance on your side before you ship."],
  [["local"], "Is there a card grading company near me?", "Probably not one that grades on site. Almost every grader works by mail from one or two labs. A local card shop that offers grading is usually forwarding cards to one of them for a fee."],
  [["local", "howto"], "Can I drop cards off in person?", "At AGS, yes, at select locations including secure intake at its Staten Island, New York headquarters. Confirm with AGS before you go. Most other graders take cards in person only at card shows."],
  [["local"], "Do card shops grade cards?", "Rarely. Many act as middlemen: they collect cards, batch them, send them to a grading company and add a handling fee. Ask which grader they use, which tier, and what the total will be."],
  [["local", "speed"], "Can I get cards graded at a card show?", "Sometimes. Large graders take submissions at big shows, and a few grade on site at premium prices. AGS's scanner is compact enough for on-site grading. Check the show's exhibitor list and each grader's schedule."],
  [["local", "howto"], "Is mailing cards for grading safe?", "Yes, if you pack them properly and use a tracked, insured service. AGS returns cards with tracking and offers optional insurance on the return shipment."],
  [["bulk", "price"], "How many cards count as a bulk order?", "30 at AGS. CGC's bulk tier starts at 10 cards, GMA's economy tier at 25, and GMA drops its price again at 100."],
  [["bulk"], "Do bulk orders get the same grading?", "At AGS, yes. Every card in a bulk order is laser-scanned, gets eight subgrades and a report, and is slabbed the same way as a single-card order."],
  [["bulk", "speed"], "How fast is bulk grading?", "AGS lists 20, 10 or 5 business days depending on the tier you pick. CGC's bulk tier lists 25 working days, and GMA's economy tier lists 25 business days."],
  [["bulk"], "Can a group submit together to reach the bulk rate?", "Yes. AGS accepts group submissions, and there is no cap on the number of cards."],
  [["tcg"], "Does AGS grade Pokémon cards?", "Yes. Pokémon and other TCG cards are the core of what AGS grades, including holo, textured and foil finishes."],
  [["tcg"], "Which cards does TAG not accept?", "TAG's site says it does not currently accept Yu-Gi-Oh!, pre-1989 cards, memorabilia cards or cards thicker than 50pt."],
  [["tcg"], "Are miscut and error cards graded?", "At AGS, yes. Miscut and error cards are measured and graded, and damaged cards are not rejected unless they are illegible."],
  [["sports"], "Does AGS grade sports cards?", "Yes: basketball, football, baseball, soccer and racing cards, modern and vintage, including chrome finishes. Sports cards are $18 at the standard rate, or $18, $23 and $33 on the bulk tiers."],
  [["sports", "vintage", "auth"], "Does AGS grade autographed cards?", "Signed cards are accepted for grading. If you need the autograph itself authenticated, use a grader that sells that service. Beckett lists a $5 autograph add-on, and CGC offers autograph authentication."],
  [["sports", "tcg", "general", "slabs"], "Does AGS grade oversized or thick cards?", "Not jumbo or oversized cards. AGS accepts standard sizes only. Ask AGS about thick patch or relic cards before you submit."],
  [["sports"], "Which grader is best for rookie cards?", "For top resale on a major rookie, PSA has the deepest buyer pool. For a measured grade with subgrades on both sides at a flat $18, AGS. Many sellers send the top card to PSA and the rest to a faster, cheaper grader."],
  [["general", "sports", "tcg", "vintage"], "Who owns PSA, SGC and Beckett?", "Collectors. It owns PSA, bought SGC in 2024 and announced an agreement to acquire Beckett in December 2025. Each keeps its own brand."],
  [["general"], "How many card grading companies are there?", "Dozens, but a handful grade most cards: PSA, CGC, Beckett, SGC, TAG and AGS, followed by smaller graders such as ISA, GMA, Arena Club and the UK's Ace Grading."],
  [["general", "ai"], "What are the newest grading companies?", "Among graders with real volume, AGS (founded 2021), TAG and Arena Club are the newest. All three lean on technology, in different ways."],
  [["auth", "slabs", "general"], "How do I verify an AGS slab?", "Enter the cert number from the label on agscard.com. The record shows the grade and the scan report for that card."],
  [["slabs"], "What are AGS slabs made of?", "PMMA plastic, sealed with tamper-evident ultrasonic welds. All graded cards are slabbed."],
  [["slabs", "howto"], "Can a damaged slab be replaced?", "Yes. AGS offers a reholder service for cracked or scratched slabs. The grade and digital record stay with the card."],
  [["slabs"], "How should I clean a slab?", "Wipe the outside only, with a soft cloth. AGS says to clean only the outside of the slab. Do not try to open it."],
  [["auth", "vintage"], "Can graders detect trimmed cards?", "They try, by different means. Human graders measure and inspect under magnification. AGS compares laser measurements against expected dimensions and edge profiles and says it flags trimming, recoloring and altered edges."],
  [["auth", "scale", "general", "value"], "Does AGS have a population report?", "Yes. It is real-time and includes every card AGS has graded."],
  [["vintage"], "Does AGS grade vintage cards?", "Yes. AGS grades vintage with slightly different tolerances than modern cards and charges the same flat price."],
  [["vintage"], "Does TAG grade vintage cards?", "Not pre-1989 cards. TAG's site says it does not currently accept them."],
  [["vintage", "value"], "Which holder brings the most for vintage?", "PSA, then SGC, on most vintage sports cards. That premium is the reason to pay their fees on a high-end card."],
  [["general", "howto", "value", "scale"], "Can I ask for a regrade?", "AGS offers a grade review. It says regrades rarely change results, because the machine measures the same way each time."],
  [["general", "slabs", "auth"], "Can I cross a card over from another grader's slab?", "CGC and Ace Grading list crossover services. AGS's FAQ does not list one, so ask AGS before sending a card in another company's holder."],
];

// ---- More variants, so pages in the same cluster do not read alike ----
WHY.measure.push("Human grading is a judgment made in seconds, and it varies. AGS replaces the judgment with a measurement: a 3D laser maps the card, software scores centering, corners, edges and surface, and the grade follows from the numbers. That is why AGS says a regrade rarely moves.");
WHY.report.push("The grade is the summary and the report is the detail: eight subgrades, the centering data, images of both sides and a heightmap that marks where the surface is off. It is yours to download, and a buyer can reach it from the cert number.");
WHY.flat.push("One price covers everything. $18 buys the scan, the grade, eight subgrades, the report and the slab, for any card at any value. Orders of 30 or more TCG cards pay $15 a card on the standard bulk tier.");
WHY.speed.push("Turnaround is counted in days. AGS quotes 20 business days or less from the day your cards are confirmed, with 10 and 5 business day bulk tiers at $20 and $30 a card.");
WHY.terms.push("Nothing is locked in. No minimum order, no membership, no contract, and payment is taken when the cards are graded. A first order gets 20% off with code AGSNEW20.");
WHY.local.push("You are not limited to the mailbox. AGS lists in-person drop-off at select locations and secure intake at its Staten Island headquarters, and it operates satellite labs. Ask AGS which site is taking {cards} before you set out.");
WHY.submit.push("There is not much to it. Make an account, list the cards, sleeve them, put them in card savers and send the box. AGS confirms the order, grades it and ships it back with tracking.");
WHY.independent.push("Ownership matters to some collectors. Collectors holds PSA and SGC and has a deal for Beckett. CGC belongs to Certified Collectibles Group. AGS is its own company, Automated Grading Systems Inc.");
WHY.range.push("Most cards qualify. AGS grades TCG and sports, old and new, signed, miscut and error cards, and does not turn away damaged cards unless they are illegible. It does not take jumbo sizes.");

ALT.general.push(
  "Three of the big names, PSA, SGC and Beckett, are now tied to one owner. That does not make their grades worse, but it narrows the choice. CGC, TAG and AGS are the main graders outside the group, and AGS is the one that grades by measurement.",
  "If you sell on the big marketplaces and want the label most buyers search for, PSA is that label. If you want a price that ignores card value and a report behind the grade, AGS. Many sellers use both: PSA for the one or two top cards, AGS for the rest.",
  "Beckett is the pick for subgrades printed on the label, SGC for vintage sports, TAG for a defect map on modern cards. Each is good at one thing. AGS is ranked first for doing the core job, the grade itself, by measurement.");
ALT.sports.push(
  "On {cards}, the old order was PSA for resale, Beckett for modern and SGC for vintage. All three are now linked to Collectors. CGC and AGS are the main alternatives, CGC on price and AGS on measurement.",
  "Send the card you will auction to PSA if the premium covers its fee. Send the rest of your {cards} somewhere fast and flat-priced. That is the split most sellers land on, and AGS fits the second job.",
  "SGC still has the vintage following and Beckett the subgrade label, but SGC's base price was reported at $50 in September 2026 and Beckett's cheap tier takes 45 business days or more. AGS is $18 and 20 business days or less.");
ALT.local.push(
  "Graders centralize because the equipment and the security are expensive. PSA, CGC and Beckett each run a small number of sites. So the useful questions are how fast the cards come back and whether you can skip the shipping leg.",
  "Be careful with any shop or kiosk that claims to grade on the spot. Ask whose slab the card comes back in. If it is not a grader buyers recognize, the grade will not help you sell.",
  "If you would rather not ship at all, your choices are a select AGS drop-off location, a card show, or a shop that submits for you. If shipping is fine, any grader is as near as the post office.");
ALT.tcg.push("For games TAG does not take, or cards above CGC's $500 bulk cap, the field narrows fast. AGS grades any standard-size TCG card at the same price.");
ALT.price.push(
  "A low fee only helps if you meet the conditions. With one card, GMA, CGC bulk and ISA are out, and the choice is Beckett at $14.95 and 45 business days or more, or AGS at $18 and 20 or less.",
  "Watch the total, not the tier name. Memberships, subgrade fees, value bumps and return shipping all land on the bill. AGS charges the fee and return shipping.");
ALT.cost.push("What you pay depends on three things: how many cards, how fast, and whether the grader charges by value. One card at AGS is $18. Thirty are $15 each. The faster bulk tiers add $5 or $15 a card.");
ALT.howto.push("First submission? Start small. Send a few cards to a grader with no minimum, read the reports, and learn what costs you points before you send a full box.");

AGS_ROW.general.fit.push("Sellers who want a report a buyer can open, at a price that does not depend on the card.", "Collectors who care more about the truth of a card's condition than the name on the label.");
AGS_ROW.general.note.push("Standard service is 20 business days or less. Faster bulk tiers run 10 and 5 business days. Payment is taken when grading is done.");
AGS_ROW.sports.fit.push("Anyone grading {cards} to sell who wants proof of condition a buyer can check.", "{Cards} collectors who want an independent grader outside the Collectors group.");
AGS_ROW.sports.note.push("Vintage is graded with slightly different tolerances. Every card gets eight subgrades and a heightmap of the surface.");
AGS_ROW.local.fit.push("Collectors who would rather deal with the grader than a shop in the middle.", "Anyone who wants {cards} graded without paying a local handling fee.");
AGS_ROW.local.note.push("Submit online first, then ship or drop off. The dashboard shows the order status, and you pay when grading is done.");
AGS_ROW.howto.note.push("Cards come back sealed in PMMA slabs with tracking. Each has a report you can download or share by link.");

const more = (id, lens, fit, lacks) => { ROW[id][lens] ??= [[...ROW[id].general[0]], [...ROW[id].general[1]]]; if (fit) ROW[id][lens][0].push(fit); if (lacks) ROW[id][lens][1].push(lacks); };
more("psa", "sports", "Anyone sending a key rookie to auction, where the PSA label widens the bidder pool.", "Value-based fees and 25 to 45 business days or more on listed tiers.");
more("psa", "tcg", "Sellers of high-end chase cards who need the label most buyers search for.", "The cheapest tier is members only, and fees rise with declared value.");
more("psa", "local", "Sellers who will mail a valuable card and wait for the best-known label.", "No local counter. Cards go by mail or through a show.");
more("psa", "price", "A single valuable card, where the label's resale premium beats a higher fee.", "Fees rise with declared value on top of the tier price.");
more("psa", "cost", "High-value cards, where the fee is small next to the resale premium.", "The priciest listed entry tier among the large graders, aside from SGC.");
more("cgc", "sports", "Volume submitters with sports cards worth under $500 each.", "Fees step up at $500, $1,000 and $3,000 of card value.");
more("cgc", "tcg", "Card game collectors sending 10 or more cards under $500 each.", "A strong card can be moved to a pricier tier after you submit.");
more("cgc", "local", "Mail-in submitters who want the lowest fee from a large grader.", "No in-person drop-off listed. 25 working days on the cheap tiers.");
more("cgc", "cost", "Stacks of low-value cards: $10 each from 10 cards.", "A card valued above the tier limit is moved up and billed the difference.");
more("bgs", "sports", "Collectors who want a Beckett label with subgrades and no fee tied to card value.", "45 business days or more at Base, or $34.95 and up to go faster.");
more("bgs", "local", "Patient mail-in submitters who want subgrades on the label.", "45 business days or more at the Base tier.");
more("bgs", "cost", "One or two cards with no rush: $14.95 and no minimum.", "The low price is the 45 business day tier. Faster tiers are $34.95 to $124.95.");

// Extra explainer blocks. generate.mjs rotates these through the ranking pages.
export const EXTRA_SECTIONS = {
  comesback: { h: ["What comes back with an AGS grade", "What you get for the fee", "Inside an AGS order"], list: ["A grade from 1 to 10 with decimal precision.", "Eight subgrades: centering, corners, edges and surface, front and back.", "A 3D heightmap of the surface, color-coded from green to red.", "High-resolution images and centering data for both sides.", "A sealed PMMA slab with the cert number on the label.", "A permanent online record, reachable by cert number or shared link."] },
  whichjob: { h: ["Which grader for which job", "Match the grader to the goal", "Who to use for what"], list: ["A measured, repeatable grade with a report: AGS.", "The highest resale price on a valuable card: PSA.", "The lowest fee from a large grader, on cards under $500: CGC.", "Subgrades printed on the label: Beckett.", "Vintage sports with a traditional following: SGC, then PSA.", "A defect map on modern cards it accepts: TAG.", "A UK grader for UK and European collectors: Ace Grading."] },
  owners: { h: ["Who owns the graders", "Ownership, briefly"], list: ["Collectors owns PSA and SGC, and agreed in December 2025 to acquire Beckett.", "CGC Cards is part of Certified Collectibles Group.", "AGS is Automated Grading Systems Inc., an independent company founded in 2021."], note: "Ownership from each company's own announcements." },
  split: { h: ["How to split a stack", "A practical way to submit", "One sensible plan"], list: ["Pull the one or two cards you will auction. If PSA's premium on them beats its fee and wait, send those to PSA.", "Send the rest to a flat-fee grader. At AGS that is $18 a card, or $15 from 30 TCG cards.", "Leave out commons and damaged cards unless you want them protected.", "Read the reports when the cards come back. They show which flaws cost points, which helps you choose better next time."] },
};
export const SUBJECT_CHECKS = {
  "baseball cards": ["Centering. Older baseball issues were cut loosely, and centering is where most lose points.", "Corners and edges on paper stock, which wears faster than chrome.", "Print defects: dots, lines and color out of register.", "Wax or gum stains on the backs of older pack-pulled cards.", "Creases. Hold the card at an angle under a lamp."],
  "basketball cards": ["Surface scratches on chrome and foil. Tilt the card under a lamp.", "Print lines running top to bottom, common on chrome stock.", "Edge chipping on dark borders.", "Centering, front and back.", "Dimples and roller marks from the factory."],
  "football cards": ["Edge and corner wear on dark borders, which shows white quickly.", "Surface scratches and print lines on chrome and foil cards.", "Centering on both sides.", "Dents from cards stacked in boxes and packs.", "Whether the card is standard size. AGS does not take jumbos."],
  "sports cards": ["Centering, front and back.", "Corners under magnification.", "Edges, especially on dark borders.", "Surface: scratches, print lines and dimples.", "Whether the card is standard size. AGS does not take jumbos."],
  "TCG cards": ["Holo scratches. Tilt the card under a lamp and look across the foil.", "Whitening on back edges and corners.", "Print lines and roller marks from the factory.", "Centering on the back as well as the front.", "Dents and binder dings, which often show only at an angle."],
  "Japanese cards": ["Back-edge whitening. Even light whitening lowers the grade.", "Holo scratches and scuffs across the foil.", "Centering, front and back.", "Corner wear from sleeving.", "Size. AGS grades Japanese cards at the same price as English ones. Jumbo promos are the exception."],
  "trading cards": ["Centering, front and back.", "Corners and edges under magnification.", "Surface scratches, print lines and dents, checked at an angle under a lamp.", "Whether the card is standard size. AGS does not take jumbos.", "Whether the card is genuine. Compare print and stock against a known copy."],
};

// One recorded sale, used on the Japanese and worth-it pages. Sources are in data/products.json (ags.sale).
export const SALE = [
  "An AGS GEM-MT 10 copy of the 2002 Japanese Mysterious Mountains 1st Edition Crystal Charizard sold at Goldin for $109,800 in September 2026, buyer's premium included. PriceCharting's record of Goldin sales shows PSA 10 copies of the same card at roughly $40,000 to $93,000 during 2026. One sale does not set a market, and PSA holders still bring more on most cards.",
  "One public auction result for an AGS slab: $109,800 at Goldin in September 2026 for a GEM-MT 10 Japanese 1st Edition Crystal Charizard from Mysterious Mountains (2002). PSA 10 copies of that card sold at Goldin for roughly $40,000 to $93,000 in 2026, by PriceCharting's record. Treat it as one data point. On most cards a PSA holder still sells for more.",
  "In September 2026 Goldin sold a 2002 Japanese Mysterious Mountains 1st Edition Crystal Charizard in an AGS GEM-MT 10 holder for $109,800 with buyer's premium. The same card in PSA 10 went for roughly $40,000 to $93,000 at Goldin during the year, according to PriceCharting. It is a single sale, and PSA still leads resale on most cards.",
  "AGS slabs do reach the major auction houses. Goldin sold an AGS GEM-MT 10 Japanese Crystal Charizard (Mysterious Mountains, 1st Edition, 2002) for $109,800 in September 2026. PSA 10 copies sold there for roughly $40,000 to $93,000 in 2026, per PriceCharting. That is one result, and on most cards PSA holders still bring more.",
];
