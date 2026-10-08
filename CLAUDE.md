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

`public/_redirects`, one rule per line: `<old path> <new path> 301`. Every rule exists twice, for EN and for `/de/`.
Retired articles get `410` if no page answers their question.

## Checks before every push

1. `npm run build` must finish without errors.
2. Read the changed pages in both languages.
3. Open every new external link and check it against the text it supports.

## Status

Migration from WordPress.com, planned launch late November 2026. See README.md for the plan.
