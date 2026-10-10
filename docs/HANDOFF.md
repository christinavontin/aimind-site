# Handoff · aimind.marketing website

Status on October 9, 2026. Read this file first in every new chat.

## Where everything is

| What | Where |
| --- | --- |
| Code (single source of truth) | GitHub `christinavontin/aimind-site`, branch `main` |
| Test site (deploys on every push to `main`) | https://aimind-site.pages.dev/ (German: `/de/`) |
| Design rules (colors, logo, fonts, buttons, layout, motion, copy) | `docs/design-guide.md` |
| Brand guide (private, basis for all design work) | https://claude.ai/artifact/YF53i9hKw85J8WeKjGjGmP |
| Design files (logo set, boards, screenshots, banners) | `design/` |
| Homepage texts DE/EN (Christina comments here) | Google Doc: https://docs.google.com/document/d/1tgTjJd0rT7fu_y7nhdMj5vF5rMV23Xj-3MW23rAoAUI/edit |
| Design canvas (exploration history only) | https://claude.ai/artifact/9ysPDL1AqTgN52jaHjGVMY |
| Writing rules | Skill "schreibstil" and `CLAUDE.md` |

Where the canvas, the Google Doc and the code differ, the **code** is the final version. The homepage texts in the code match the Google Doc as of October 9, including all of Christina's comments.

## Done

- Final design built into the site: header, footer, homepage, contact page, article layout, EN and DE.
- Fonts self-hosted (Schibsted Grotesk, Newsreader, Instrument Sans). No Google request on page load. The Google Calendar loads only after a click.
- New logo: sign, wordmark, favicon, JSON-LD logo.
- Decisions on October 9: "ich" throughout, English hero line "Complex technology, made clear, positioned and anchored in its market.", button "View My Services", sentence case for navigation.
- Repository cleaned: only final versions; the old test design and all design options removed.
- AI Ethics and Data Protection page migrated EN/DE (October 9, text unchanged).
- AI hub and ROI hub migrated in EN and DE (October 9). Text checked block by block against the live WordPress pages (`scripts/text-hashes.mjs`). ROI calculator is `src/components/RoiCalculator.astro` (same logic and texts as the WordPress block, new design). German SEO fields written in German; German source dates now in German format. No hero images migrated yet (the live AI hub has one as its social image).
- Changes on October 9 (afternoon): four industries instead of eight, audience circle 15 % smaller (544 px) and centered vertically with the headline, English headlines in title case, drop cap in Slate Cyan for the first letter of every article. On phones EN / DE and the menu circle sit in the header; the booking action is in the menu (a fixed bottom bar was tried and dropped). German booking label is now „Strategietermin buchen“ (header, cards, band, contact page title).

## Open, in this order

1. **Christina checks the test site** in both languages, on a laptop and a phone.
2. **German recommendations.** The live site showed them only in shortened form, so Claude completed four German quotes and translated Magnolia Restrepo's (English on the live site). Christina checks the wording in `src/components/Home.astro` (`de.refs`).
3. **Migrate the missing pages** (they return 404 on the test site today, linked from the homepage and footer):
   - About and Glossary retired at launch (October 9 decision); the glossary comes back after the hub passes.
   - Privacy Policy EN/DE: rewritten on October 9 for the new site (Cloudflare Pages, no cookies, Google Calendar booking on click, Google Meet, Google Workspace email). The WordPress version described comments, Gravatar and login cookies. Contact email: info@aimind.marketing (live since October 10).
4. **Cloudflare Web Analytics** (decided October 9: no Google Analytics, no consent banner). Switch it on in the Cloudflare dashboard for the Pages project `aimind-site` (Metrics → Web Analytics); Cloudflare then adds its script to every page. The privacy policy already describes it.
5. **Photo and signature.** No photo yet; the author box in articles has none. A handwritten signature is planned for the author box, About and email.
6. Digital Product Passport article (revised), complete `public/_redirects`.
7. Launch: DNS to Cloudflare (keep the Google Workspace email records), custom domain on the Pages project, Search Console, then cancel WordPress.com. Planned for late November 2026.

## Before the domain moves (checklist, updated October 9 evening)

**Decided October 9:** the site goes live with the three hubs (CMO, AI, ROI), homepage, contact, privacy policy and AI ethics page. Every other WordPress page is retired: About, Glossary, landing pages, categories, author page, blog overview. The Digital Product Passport article and about 25 older, unlinked articles are reworked one by one after launch and only then come back. The author text from WordPress now sits under the title of every article ("About the Author" / "Über die Autorin"); the article JSON-LD names the homepage and LinkedIn as the author's pages.

- **Redirects: done October 9, revised October 10.** All rules are permanent (301), as Google recommends for site moves: each retired article points to the hub that covers its topic (the three content-for-technology articles to the AI hub, the DPP and circularity articles to the CMO hub). When a new article covers a retired topic, repoint the matching redirects to it; when an article returns under its old URL, delete its lines. 12 paths answer 410. 294 local checks passed (every rule, every target, all 54 Search Console pages: 12 stay, 38 redirect, 4 gone). Keep the redirects for good (Google: at least one year). After launch, check Search Console weekly for about six weeks.
- **Christina reviews:** German recommendations on the homepage (`de.refs` in `src/components/Home.astro`).
- **LLMs and robots:** `public/llms.txt` (written by hand, replaces the Yoast file) and `public/robots.txt` (all crawlers allowed, AI crawlers listed). On launch day, check in Cloudflare that the zone settings do not block AI crawlers (Security → Bots, "AI Crawl Control" / "Block AI bots", "Managed robots.txt") — Cloudflare can switch these on for new domains.
- **Launch day:** domain aimind.marketing is registered at WordPress.com. Copy the Google Workspace email records (MX, SPF, DKIM, DMARC) to Cloudflare first, point the domain to Cloudflare (nameservers or transfer), add the custom domain to the Pages project, check HTTPS, `www` and the `/de/` pages, submit the sitemap in Search Console, then cancel the WordPress.com plan.

## Small notes

- Contact texts differ slightly by language on purpose (as in the Google Doc): the English band says "A 30-minute conversation. You leave with a clear next step.", the German band "Am Ende des Gesprächs kennen Sie den nächsten Schritt."; the contact pages swap these ideas.
- German "Thought Leadership" as the second step name is Christina's choice.
- The design canvas is history. New design work goes into the code and, if needed, a new board.

## Prompt for a new chat

Copy this into a new chat (Claude Code with the repository `christinavontin/aimind-site`):

> I'm continuing the migration of my website aimind.marketing from WordPress.com to Astro on Cloudflare Pages. Repository: christinavontin/aimind-site (branch main, every push deploys to https://aimind-site.pages.dev/). First read `CLAUDE.md`, `docs/HANDOFF.md` and `docs/design-guide.md`. The homepage and contact page are final in EN and DE; the code is the reference for the design. Follow the design guide exactly and apply the skill "schreibstil" to every text. German first, English as a rewrite. Keep only final versions in the repository. Next task: [for example "migrate the AI hub EN and DE" or "the About page"].
