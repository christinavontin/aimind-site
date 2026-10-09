# Handoff · aimind.marketing website

Status on October 9, 2026. Read this file first in every new chat.

## Where everything is

| What | Where |
| --- | --- |
| Code (single source of truth) | GitHub `christinavontin/aimind-site`, branch `main` |
| Test site (deploys on every push to `main`) | https://aimind-site.pages.dev/ (German: `/de/`) |
| Design rules (colors, logo, fonts, buttons, layout, motion, copy) | `docs/design-guide.md` |
| Final screenshots, logo files, style guide boards | `design/` |
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
   - About `/who-i-am/` (removed from the footer on October 9; decide where it is linked once the page exists) and Glossary, each EN and `/de/`
   - Privacy Policy EN/DE: rewritten on October 9 for the new site (Cloudflare Pages, no cookies, Google Calendar booking on click, Google Meet, Google Workspace email). The WordPress version described comments, Gravatar and login cookies. Christina reviews it; the contact email in it is still the Gmail address from the old policy.
4. **Photo and signature.** No photo yet; the author box in articles has none. A handwritten signature is planned for the author box, About and email.
5. Digital Product Passport article (revised), complete `public/_redirects`.
6. Launch: DNS to Cloudflare (keep the Google Workspace email records), custom domain on the Pages project, Search Console, then cancel WordPress.com. Planned for late November 2026.

## Small notes

- Contact texts differ slightly by language on purpose (as in the Google Doc): the English band says "A 30-minute conversation. You leave with a clear next step.", the German band "Am Ende des Gesprächs kennen Sie den nächsten Schritt."; the contact pages swap these ideas.
- German "Thought Leadership" as the second step name is Christina's choice.
- The design canvas is history. New design work goes into the code and, if needed, a new board.

## Prompt for a new chat

Copy this into a new chat (Claude Code with the repository `christinavontin/aimind-site`):

> I'm continuing the migration of my website aimind.marketing from WordPress.com to Astro on Cloudflare Pages. Repository: christinavontin/aimind-site (branch main, every push deploys to https://aimind-site.pages.dev/). First read `CLAUDE.md`, `docs/HANDOFF.md` and `docs/design-guide.md`. The homepage and contact page are final in EN and DE; the code is the reference for the design. Follow the design guide exactly and apply the skill "schreibstil" to every text. German first, English as a rewrite. Keep only final versions in the repository. Next task: [for example "migrate the AI hub EN and DE" or "the About page"].
