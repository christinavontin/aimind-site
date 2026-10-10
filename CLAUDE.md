# aimind.marketing – working rules for this repository

Website of Christina Vontin (aimind.marketing): B2B strategy and content for technology companies.
Built with Astro, hosted on Cloudflare Pages. Every push to `main` deploys.

## Content model

- Articles live in `src/content/posts/en/` and `src/content/posts/de/`, one Markdown file per language.
- The EN and DE versions of an article share the same `key`. That pairing produces hreflang links and the language switch.
- `permalink` is the full URL path. German paths start with `/de/`. URLs from the WordPress site stay unchanged.
- SEO fields live in the frontmatter of each language file: `seoTitle` (max. ~60 characters), `description` (max. ~155 characters), `keyphrase`.
- FAQ and sources live in the frontmatter (`faq`, `sources`). The layout renders them after the article and generates the FAQPage JSON-LD.
- Pages (About, Contact, Privacy Policy, Glossary) go in `src/content/pages/` with the same frontmatter logic.
- The homepage is `src/components/Home.astro`.

## Writing rules

- Christina writes German first. The English version is a rewrite in American thought-leadership English, not a translation.
- Apply the skill "schreibstil" to every text change.
- Internal links point to the same language (`/de/...` from German pages). Link text is descriptive and never ends with punctuation inside the link.
- German typography: „…“ quotation marks, `%` with a space before it (25 %), German date format comes from the layout.
- Sources: only primary sources. Source list format: Author or organization, then the exact title of the linked page.

## Tables

Markdown tables are wrapped automatically in `figure.aim-tbl` (the editorial table template, see `src/styles/global.css`).
Numeric cells are right-aligned automatically. For a highlighted result row or category pills, write the table as HTML
with `<tr class="hl">` or `<span class="pill pill-out">`.

## Redirects

`public/_redirects`, one rule per line: `<old path> <new path> 301`. Always permanent and always to the closest matching article, never many URLs to the homepage (Google may treat that as a soft 404). When a new article covers a retired topic, repoint the matching redirects to it. Every rule exists for EN and `/de/`, with and without trailing slash.
Retired articles without a successor get `410`: Cloudflare's redirect file cannot send 410, so these paths are listed in `functions/[[path]].js` and `public/_routes.json` (the function runs only on those paths).
When a retired article comes back, delete its redirect lines. Test locally before pushing: `npx wrangler@3 pages dev dist`.

## Checks before every push

1. `npm run build` must finish without errors.
2. Read the changed pages in both languages.
3. Open every new external link and check it against the text it supports.

## Design

The basis for all design and copy work is Christina's private brand guide (a Design System artifact, readable only by her and by Claude in her sessions): https://claude.ai/artifact/YF53i9hKw85J8WeKjGjGmP. Read its `project/README.md` before any design, layout, asset or copy work. It is the only place where design rules are written down (including the website specifics); `docs/design-guide.md` only points to it. The code in `src/` implements the guide. Never add explorations or alternative versions to the repository.

After every design decision, update in the same step: the private brand guide (tokens, README or component, and a line in its decisions log), the code, the matching board in `design/style-guide/` with its PNG preview, and the screenshots in `design/screens/` if pages changed. Fonts for previews come from `node_modules/@fontsource-variable/`, never from Google. Personal photos stay in the private guide, not in this public repository.

## Edits outside Claude

Christina makes small text changes herself directly on GitHub (guide in `docs/HANDOFF.md`, "Small text changes without Claude"). Always `git pull` before starting work, and read the current file before changing it.

## Status

Live at https://aimind.marketing/ since October 10, 2026 (migrated from WordPress.com). Every push to `main` changes the live site. Current state and next steps: `docs/HANDOFF.md`. Plan: README.md.
