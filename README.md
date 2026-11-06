# Gridmora

**Turn meter data into maintenance priorities.**

Gridmora helps electricity operators interpret operational data across their networks. Its AI prioritises unusual conditions so engineers can direct inspections and maintenance more effectively.

> Gridmora is a proposed startup concept. The team is fictional, pricing is illustrative and the prototype uses fictional data. Named organisation types are prospective customers with no implied affiliation. The domain `www.gridmora.com` and email `hello@gridmora.com` are placeholders — check availability with a registrar before use.

Categories: AI · Energy · Predictive Maintenance

## What's here

- **Marketing site** (`/`): hero, purpose and stakes (with sourced statistics), problem, solution, how it works, customers, public-sector angle, AI safeguards, principles, founders' letter, vision, pricing, proposed AWS architecture, team, FAQ and an early-access form.
- **Interactive prototype** (`/app`): a review workspace on fictional anomalies. Switch roles with *Demo as*, open a record to see AI flags with evidence and confidence, assign reviewers, add notes and record decisions (a reason is required). Every change is written to an audit log you can export as CSV. A grounded assistant answers only from the records and refuses decisions that belong to people. Changes persist in `localStorage`.
- **Legal drafts**: `/privacy` and `/terms` (review drafts; operator details to be confirmed).

## Team

- **Ibrahim Kolo** — Founder/CEO. Electrical engineer with distribution maintenance experience.
- **Adesuwa Egharevba** — Co-founder. Energy project specialist focused on commercial operations.
- **Obinna Maduakor** — CTO. ML engineer working on sensor analytics and fault detection.

## Sources for the statistics

- 85m — Nigerians without access to grid electricity (43% of the population, 2021). ([World Bank](https://www.worldbank.org/en/news/press-release/2021/02/05/nigeria-to-improve-electricity-access-and-services-to-citizens))
- $26.2bn — Estimated annual economic losses from unreliable electricity in Nigeria. ([World Bank](https://www.worldbank.org/en/news/press-release/2021/02/05/nigeria-to-improve-electricity-access-and-services-to-citizens))
- 39.1% — Aggregate technical, commercial and collection losses across distribution companies in Q3 2024. ([NERC, reported by ThisDay](https://www.thisdaylive.com/2024/12/24/discos-reject-10-load-offtake-as-atcc-losses-rise-4-in-q3/))

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build   # Vite build, server render, and static prerender of /, /app, /privacy, /terms and 404.html
npm test        # Engine and content tests (node --test)
npm run preview
```

The build output in `dist/` is fully static. `public/_headers` and `public/_redirects` cover Netlify/Cloudflare Pages; `vercel.json` covers Vercel.

### Early-access form

Without configuration the form saves the request in the browser and offers a pre-filled email to hello@gridmora.com. To send submissions to HubSpot, set `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_GUID` at build time, and update the privacy notice first.

### Motion

Scroll reveals, word-by-word manifesto lighting, count-up statistics, timeline and step lines, card tilt and magnetic buttons live in `src/motion.js`. Content is server-rendered and fully visible without JavaScript; motion is skipped when the visitor prefers reduced motion.

## Structure

```
src/content.js        all site copy (edit here)
src/seed.js           fictional prototype records
src/theme.css         colours and fonts
src/App.jsx           marketing pages
src/Purpose.jsx       purpose, stakes, principles, letter, vision
src/app/engine.js     prototype rules (permissions, decisions, audit, assistant)
src/app/Prototype.jsx prototype UI
scripts/prerender.mjs static HTML for every route
```
