# Handoff · aimind.marketing website

Status on October 10, 2026. Read this file first in every new chat.

**The site is live at https://aimind.marketing/** (since October 10, 2026). WordPress.com is no longer serving the domain.

## Where everything is

| What | Where |
| --- | --- |
| Code (single source of truth) | GitHub `christinavontin/aimind-site`, branch `main`. Every push deploys straight to the live site. |
| Live site | https://aimind.marketing/ (German: `/de/`); same build also at https://aimind-site.pages.dev/ |
| Hosting, DNS, analytics | Cloudflare account christina.vontin@gmail.com: zone `aimind.marketing`, Pages project `aimind-site` (custom domains `aimind.marketing` and `www`), Web Analytics on |
| Domain registration | Still at WordPress.com (nameservers point to Cloudflare: nelly / patrick.ns.cloudflare.com) |
| Email | Google Workspace, info@aimind.marketing (MX/TXT records in Cloudflare DNS, never touch them) |
| Brand guide (private, basis for all design and copy work) | https://claude.ai/artifact/YF53i9hKw85J8WeKjGjGmP — read `project/README.md` first |
| Binding website design rules | `docs/design-guide.md` |
| Design files (logo set, boards, screenshots, banners) | `design/` (file list in `design/README.md`) |
| Writing rules | Skill "schreibstil" and `CLAUDE.md` |
| Homepage texts DE/EN (history of Christina's comments) | Google Doc https://docs.google.com/document/d/1tgTjJd0rT7fu_y7nhdMj5vF5rMV23Xj-3MW23rAoAUI/edit — the code is newer and wins |

## What is live

- Homepage and contact page (EN/DE), final.
- Three hubs in EN and DE: CMO (`/2025/07/31/challenges-for-b2b-cmo/`), AI (`/2025/10/11/ai-in-b2b-marketing-guide/`), ROI with calculator (`/2025/10/13/b2b-marketing-roi-and-kpis/`). German under `/de/` + same path.
- Privacy Policy and AI Ethics and Data Protection (EN/DE).
- 404 pages per language; `public/llms.txt`; `public/robots.txt` (all crawlers allowed, AI crawlers listed); sitemap.
- All other WordPress URLs are retired: 301 to the closest hub (`public/_redirects`), 410 where nothing fits (`functions/[[path]].js` + `public/_routes.json`). 294 local checks passed before launch; on the live domain a retired article was confirmed to land on its hub.
- Author text from WordPress sits under the title of every article ("About the Author" / "Über die Autorin").
- Profile photo for LinkedIn (own cutout on cream) and banners: in the private brand guide only, never in this public repository.

## How the site is built (short)

- Articles: `src/content/posts/en|de/`, one file per language, paired by `key`; `permalink` is the full path. `.mdx` when a component is needed (ROI calculator: `<RoiCalculator lang="de" />`). SEO fields, `faq` and `sources` in the frontmatter; the layout renders FAQ, sources and JSON-LD.
- Pages: `src/content/pages/en|de/`. Homepage `src/components/Home.astro`, contact `src/components/Contact.astro`, shared labels `src/lib/site.ts`.
- Tables: Markdown tables are wrapped automatically; in MDX wrap them by hand in `<figure class="aim-tbl">`.
- Before every push: `npm run build`, read changed pages in both languages, open every new external link. Redirect changes: test with `npx wrangler@3 pages dev dist`.

## Next, in this order

### 1. Launch follow-up (Christina, in Cloudflare and Google)

- [ ] Cloudflare → Rules → Redirect Rules: template "Redirect from WWW to root" deployed (so `www` never shows a duplicate site).
- [ ] Cloudflare → Security → Bots: "Block AI bots" off, "Managed robots.txt" off.
- [ ] Send and receive a test email at info@aimind.marketing.
- [ ] Google Search Console (domain property aimind.marketing): submit `https://aimind.marketing/sitemap-index.xml`.
- [ ] Check Search Console weekly for about six weeks (Pages report: 404s, "redirect error", drops in the three hubs). Keep all redirects for good.
- [ ] WordPress.com: cancel the hosting plan, **keep the domain registration** (or transfer the domain to Cloudflare Registrar later). Check first that nothing else (email forwarding) still runs there.

### 2. Site improvements (open points)

- German recommendations on the homepage: Claude completed four German quotes and translated Magnolia Restrepo's; Christina checks the wording (`de.refs` in `src/components/Home.astro`). André Labadie's quote says "Tina" in both languages (original wording).
- CMO hub: the intro says "only 14% of CMOs do this effectively", the section text says "only 14% of CMOs manage it" (same Gartner source). Align the wording in EN and DE.
- Handwritten signature for the author box, About and email (planned, not made yet).
- About page and Glossary are retired for now; they come back later (About as its own page, Glossary after the hubs).
- When a design decision changes anything: update the private brand guide (plus decisions log), `docs/design-guide.md`, the board in `design/style-guide/` and `design/screens/` in the same step (rule in `CLAUDE.md`).

### 3. Blog posts (agreed clusters, keep it simple)

1. **GEO / AI search article** — demand in Search Console for GEO and content topics; fits the service "AI Search Presence"; links to the AI hub.
2. **B2B content for technology companies** — with the Digital Product Passport as the compliance example the content must meet (Christina writes about content marketing, not law). Links to the CMO hub.
3. Go-To-Market topics stay in the CMO hub for now.

Workflow per article: German first (discussed and drafted in chat), then the English rewrite; SEO fields per language; primary sources only, every link opened and checked; FAQ and sources in the frontmatter. When a new article covers a retired topic, repoint the matching lines in `public/_redirects` to it (EN and DE, with and without trailing slash). When an old article comes back under its old URL, delete its redirect lines.

After launch, the DPP article and about 25 older articles are reworked one at a time; each returns only when it is reworked.

## Search Console baseline (before launch)

The ROI topic is strongest; German AI queries rank around position 80; demand exists for GEO and content topics. 54 indexed pages at launch: 12 stay, 38 redirect (301), 4 gone (410).

## Prompt for the next chat

> I'm continuing work on my website aimind.marketing (Astro on Cloudflare Pages, live since October 10, 2026). Repository: christinavontin/aimind-site, branch main; every push deploys to the live site. First read `CLAUDE.md`, `docs/HANDOFF.md`, `docs/design-guide.md` and the `project/README.md` of my private brand guide. Apply the skill "schreibstil" to every text, German first, English as a rewrite. Keep only final versions in the repository. Next task: [for example "the GEO article, start with an outline in German" or "launch follow-up checks"].
