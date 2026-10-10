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
| **Design and brand rules (the one place)** | Private brand guide https://claude.ai/artifact/YF53i9hKw85J8WeKjGjGmP — read `project/README.md` first. Includes website specifics, tokens, components, logos, social images and the decisions log. `docs/design-guide.md` only points here. |
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

## Redirects

All redirects live in the repository; Cloudflare reads them on every push. The only rule in the Cloudflare dashboard is the `www` → root redirect (Rules → Redirect Rules).

| File | What it does |
| --- | --- |
| `public/_redirects` | Permanent redirects (301), one rule per line: `<old path> <new path> 301`. Every rule exists four times: EN and `/de/`, with and without trailing slash. |
| `functions/[[path]].js` | Retired addresses with no fitting successor; they answer 410 ("gone"). |
| `public/_routes.json` | Makes the 410 script run only on those addresses. Every 410 path must be listed here too. |

Redirected and gone addresses are not in the sitemap; it lists only pages that exist.

**Process when content changes:**

1. **A new article covers a retired topic:** repoint the matching lines in `public/_redirects` from the hub to the new article (all four variants).
2. **An old article comes back under its old address:** delete its lines in `public/_redirects`; if it was a 410, remove it from `functions/[[path]].js` and `public/_routes.json`.
3. **A page is renamed or retired:** add a 301 to the closest matching article. Never many addresses to the homepage (Google may treat that as a soft 404). 410 only when nothing fits.
4. Build, test every rule locally with `npx wrangler@3 pages dev dist`, then push. Check Search Console a week later.

## Small text changes without Claude

Christina can edit text directly on GitHub; every saved change goes live in about a minute.

1. Open https://github.com/christinavontin/aimind-site and go to the file (table below).
2. Click the pencil icon (Edit this file), change the text, then **Commit changes** (commit directly to `main`).
3. Check the page on https://aimind.marketing/ after a minute or two (private window). The build status is under Cloudflare → Workers & Pages → aimind-site → Deployments.

| Text | File |
| --- | --- |
| Article (EN / DE) | `src/content/posts/en/…` and `src/content/posts/de/…` (`cmo-hub.md`, `ai-hub.md`, `roi-hub.mdx`) |
| Homepage (both languages) | `src/components/Home.astro` (English block `en:`, German block `de:`) |
| Contact page | `src/components/Contact.astro` |
| Navigation, footer, buttons, author text | `src/lib/site.ts` |
| Privacy policy, AI ethics page | `src/content/pages/en/…` and `src/content/pages/de/…` |

Safe rules: change only the words between quotation marks or in the running text; leave the lines between the two `---` at the top of an article, indentation, `'` and `"` marks, links `[text](url)` and tags `< >` intact. Inside a text in single quotes, write a typographic apostrophe (’) instead of `'`. If a change breaks the build, the site simply stays on the previous version; Deployments shows "Failed", and the file can be corrected on GitHub (the file’s History shows what changed) or fixed in the next chat. Change both languages if the text exists in both.

## Next, in this order

### 1. Launch housekeeping (Christina, outside the code)

Done on October 10: `www` redirects permanently to the root domain (Cloudflare redirect rule), info@aimind.marketing sends and receives.

- Cloudflare → Security → Bots: keep "Block AI bots" and "Managed robots.txt" off.
- Google Search Console (domain property aimind.marketing): sitemap submitted on October 10. `https://aimind.marketing/sitemap-0.xml` reads "Success" with 14 pages (the index file `sitemap-index.xml` was read during the domain switch and may show "Couldn't fetch" for a while; it is harmless). Check the Pages report weekly for about six weeks (404s, redirect errors, the three hubs). Keep all redirects for good.
- WordPress.com: cancel the hosting plan, **keep the domain registration** (or transfer it to Cloudflare Registrar later).

### 2. Site enhancements

- German recommendations on the homepage: four quotes were completed and Magnolia Restrepo's translated by Claude; Christina may refine the wording (`de.refs` in `src/components/Home.astro`). André Labadie's quote says "Tina" in both languages (his original wording).
- Handwritten signature for the author box, About and email.
- About page and Glossary are retired for now; they come back later (About as its own page, Glossary after the hubs).
- When a design decision changes anything: update the private brand guide (plus decisions log), the code, the board in `design/style-guide/` and `design/screens/` in the same step (rule in `CLAUDE.md`).

### 3. Blog posts (agreed clusters, keep it simple)

1. **GEO / AI search article** — demand in Search Console for GEO and content topics; fits the service "AI Search Presence"; links to the AI hub.
2. **B2B content for technology companies** — with the Digital Product Passport as the compliance example the content must meet (Christina writes about content marketing, not law). Links to the CMO hub.
3. Go-To-Market topics stay in the CMO hub for now.

Workflow per article: German first (discussed and drafted in chat), then the English rewrite; SEO fields per language; primary sources only, every link opened and checked; FAQ and sources in the frontmatter. When a new article covers a retired topic, repoint the matching lines in `public/_redirects` to it (EN and DE, with and without trailing slash). When an old article comes back under its old URL, delete its redirect lines.

After launch, the DPP article and about 25 older articles are reworked one at a time; each returns only when it is reworked.

## Search Console baseline (before launch)

The ROI topic is strongest; German AI queries rank around position 80; demand exists for GEO and content topics. 54 indexed pages at launch: 12 stay, 38 redirect (301), 4 gone (410).

## Prompt for the next chat

> I'm continuing work on my website aimind.marketing (Astro on Cloudflare Pages, live since October 10, 2026). Repository: christinavontin/aimind-site, branch main; every push deploys to the live site. First read `CLAUDE.md`, `docs/HANDOFF.md` and the `project/README.md` of my private brand guide (https://claude.ai/artifact/YF53i9hKw85J8WeKjGjGmP), which is the only place for design rules. Apply the skill "schreibstil" to every text, German first, English as a rewrite. Keep only final versions in the repository. Next task: [for example "the GEO article, start with an outline in German" or "the signature for the author box"].
