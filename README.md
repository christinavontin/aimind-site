# aimind.marketing

Website of aimind.marketing, built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

- Test site (every push to `main` deploys): https://aimind-site.pages.dev/
- Current status and next steps: `docs/HANDOFF.md`
- Design rules: `docs/design-guide.md`

## Local development

```
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Migration plan (from WordPress.com)

| Week | Content |
| --- | --- |
| 1 | ✓ Foundation: Astro, SEO template, layout, table template. CMO hub EN/DE as pilot. |
| 2 | AI hub and ROI hub (EN/DE), ROI calculator as component. |
| 3 | ✓ Homepage and Contact (EN/DE, final design). Open: About, Privacy Policy, AI Ethics, Glossary. |
| 4 | Digital Product Passport article (revised), complete `_redirects`, final checks. |
| 5 | DNS to Cloudflare (incl. Google Workspace email records), launch. |
| 6 | Search Console, monitoring, cancel the WordPress.com plan. |

## Structure

```
src/content/posts/{en,de}/   articles, one file per language
src/content/pages/{en,de}/   About, Contact, Privacy Policy, Glossary
src/components/Home.astro    homepage (EN and DE texts inside)
src/components/Contact.astro contact page with click-to-load booking calendar
src/components/Logo.astro    logo (sign + wordmark)
src/pages/contact/, src/pages/de/contact/   contact page routes
src/layouts/Base.astro       <head> with SEO, hreflang, Open Graph, JSON-LD; header and footer
src/pages/[...path].astro    renders every article and page at its permalink
src/styles/global.css        complete design (tokens, header, footer, homepage, contact, article, tables)
docs/design-guide.md         binding design rules
design/                      final screenshots, logo files, style guide boards
public/_redirects            redirects
public/_headers              noindex for test addresses, security headers
```
