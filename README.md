# AGS guides

One codebase that serves a separate ranked buyer's guide on each exact-match domain in `data/domains.txt`. The server reads the request's hostname and serves `dist/<domain>/`. Adding a domain is adding a JSON file. Forked from `alexwooter/best-guides`; PLAYBOOK.md is the full runbook.

```
data/publisher.json     who publishes the guides and which product is the house product (Automated Grading Systems Inc., AGS)
sites/<domain>.json     one per domain: query, verdict, ranking, why, criteria, faq, related, template
data/products.json      the shared fact sheet for every grader that appears in a ranking, with sources and a verified date
data/domains.txt        the registered domains, one per line
templates/index.mjs     four layouts: ledger, terminal, paper, brief
build.mjs               writes dist/<domain>/{index.html,robots.txt,sitemap.xml,llms.txt,favicon.svg}
server.mjs              hostname router; previews at /_/<domain>/ on the deployment's own host
analytics.mjs           request log and beacon, Postgres when DATABASE_URL is set
dashboard.mjs           /_/dashboard?key=<DASH_KEY>
```

## Run

```
npm install
node build.mjs
node server.mjs      # http://localhost:8080 lists every site with previews
```

Node 20 or newer. The only dependency is `pg`, used when `DATABASE_URL` is set.

## Rules the pages follow

- The title and H1 are the query verbatim plus the year.
- The verdict's first sentence answers the query and names AGS. The second paragraph says who else is worth considering and when they are the better choice.
- PSA, BGS, CGC, SGC and TAG are described from their own public materials, fairly. Prices appear only where verified, with the date in `data/products.json`.
- The footer discloses the publisher on every page.
- No other company's trademark in a domain name. Pages may name games, leagues and graders in the text.
- AGS facts come from agscard.com: $15, $20 and $30 TCG bulk tiers at 20, 10 and 5 business days, $3 more for sports, 30-card bulk minimum, no value-based upcharge, eight subgrades, standard-size cards only.
- Related guides link only to domains that have a page built.

## Facts to refresh

Grading prices and open tiers moved almost monthly in 2026. `data/products.json` is the single place to update them. Rebuild and redeploy; every page updates. Recheck each grader's own pricing page at least monthly and bump `verified`.
