# aimind.marketing design guide

Agreed with Christina on October 8–9, 2026. This guide is binding for the website and for any other material (documents, slides, LinkedIn).

The reference for the final design is the **live code** (`src/`), deployed at https://aimind-site.pages.dev/. Screenshots of the final pages: `design/screens/`. Logo files: `design/logo/`. Style guide boards: `design/style-guide/`. The design canvas (https://claude.ai/artifact/9ysPDL1AqTgN52jaHjGVMY) holds the exploration history; where it differs from the code, the code wins.

## 1. Brand

- Name and logo: **aimind.marketing**, with "marketing" in italics and a yellow dot between the words.
- Positioning: **Technology to Market.** / **Technologie im Markt.** Complex technology, made clear, positioned and anchored in its market.
- Audience: companies whose products need explaining, in four industries. EN: Digital Platforms & Software · Smart Industry & Automation · Professional & Technology Services · Financial Systems & Services. DE: Software & Digitale Technologien · Industrietechnologie & Automation · IT- & Managementberatung · Finanzdienstleistungen & FinTech. From start-ups and mid-size firms to business units of large corporations, especially where EU regulation shapes the market.
- Christina's own name appears as a handwritten signature (author box, About, email), never as the logo.

## 2. Logo

- **Sign:** two overlapping circles. Large navy circle (technology) top right, smaller yellow circle (market) bottom left; the overlap is white on light backgrounds. SVG (viewBox 0 0 32 32): navy `circle cx=19.5 cy=12.5 r=11.5`, yellow `circle cx=10.5 cy=22 r=8`, overlap = yellow circle clipped by the navy circle, filled with the background color.
- **Wordmark:** Newsreader. "aimind" weight 500, yellow dot (diameter 0.17 em), "marketing" italic 400. Navy on light, white on navy.
- **Three sizes:** full (sign + wordmark) for header and footer; sign only for favicon, app icon, profile picture and anything below email-signature size.
- Files: `design/logo/aimind-sign.svg` (sign), `aimind-sign-on-offwhite.svg`, `aimind-sign-512.png` (profile picture, app icon), `aimind-logo.png` (full logo, transparent). Favicon: `public/favicon.svg` and `favicon.png`. In the site the logo is `src/components/Logo.astro`.
- Never: the old "aimX", a separate "MARKETING" line, the sign with the circles apart.

## 3. Colors

| Role | Name | Hex | Use |
| --- | --- | --- | --- |
| Primary | Navy | #091944 | Text, headlines, buttons, lines, small marks. Never as a large surface. |
| Primary | Yellow | #FBC737 | Small signals only: logo dot, link underline, arrow circle on hover, overlap of circles. Never text on light backgrounds. |
| Primary (surface) | Cream | #FFEAA7 | The large-area version of the yellow: contact band, audience circle, toggle circles. |
| Secondary | Slate Cyan | #2A7B88 | Labels/kickers, roles, check marks, table headers, focus ring. Text only from 15 px. |
| Secondary | Warm Coral | #E05A47 | Rare emphasis in articles and charts (pull-quote bar), at most once per screen. |
| Neutral | White | #FFFFFF | Page background. |
| Neutral | Off-White | #F8F6F0 | Hero, cards, alternating sections. |
| Neutral | Steel Slate | #4A5568 | Secondary text, dates, captions. Body text tone: #2B3550. |

Rules:
1. Navy and yellow carry the brand on every page.
2. Colors carry no categories. Services, guides and tags look alike; headings and labels tell them apart.
3. No dark sections. Every section reads dark text on a light background.
4. Sections change by background (white / off-white), never by divider lines. Lines appear only inside content: lists, tables, toggles, timelines.
5. Proportion: about 60 % neutrals, 30 % navy (text and lines), 10 % accents.

## 4. Typography

Three fonts, one role each. On the website they are self-hosted through @fontsource (no Google request, GDPR); for documents and slides use the Google Fonts versions.
- **Schibsted Grotesk** (600, 700): headings on pages, service names, numbers. Site structure.
- **Newsreader** (400, 500, italic 400): everything people read as editorial content: article headings, guide titles everywhere, quotes, the logo, one emphasized word in a headline.
- **Instrument Sans** (400, 500, 600): all running text and interface.

| Level | Style | Size (desktop) |
| --- | --- | --- |
| Display (page title) | Schibsted 700, one word may be Newsreader italic | 96 px, fluid down to 48 |
| H1 article | Newsreader 400 | 76 px, fluid down to 44 |
| H2 section | Pages: Schibsted 700 · Articles: Newsreader 400 | 56 px (pages) · 38 px (articles) |
| H3 block | Schibsted 700 · guide titles Newsreader 400 · article questions and FAQ Instrument 600 | 28 px · 28 px · 22 px |
| H4 small title | Schibsted 700 | 24 px |
| Lead | Instrument 400 · article dek Newsreader italic | 22 px · 26 px |
| Body | Instrument 400 | 18 px |
| Card text | Instrument 400 | 17 px |
| Small (lists, tables) | Instrument 400, lead-in term 600 | 16 px |
| Action (buttons, links, nav) | Instrument 600 · navigation 500 | 15 px |
| Meta (dates, captions) | Instrument 400 | 15 px · footer 14 px |
| Label | Instrument 600, uppercase, letter-spacing 0.12em, Slate Cyan | 13 px |
| Quote | Newsreader 400 | 34 px pull quote · 18 px references |
| Drop cap (first letter of an article) | Newsreader 400, Slate Cyan, three lines deep | 4.6 × lead size |
| Numbers | Schibsted 600, tabular | 18 px |

Rules:
1. Same level, same style on every page of its type.
2. Sans structures, serif tells.
3. Bold (700) only in Schibsted headings. Running text is never bold; 600 only for buttons, links, labels and the lead-in term of a list item.
4. Italic only in Newsreader.
5. Uppercase only for labels.
6. Capitalization (English): headlines use title case ("How I Work", "Three Ways to Bring Your Technology to Market"); articles, short conjunctions and short prepositions stay lowercase (to, from, of, and). Title case also for names (services, process steps), article and guide titles, and the action labels of buttons and links (Book a Strategy Call). Intros, running text and navigation use sentence case.

## 5. Buttons and links

- **Primary action** (booking only): no box. Navy text 15 px / 600 followed by a 28 px navy circle with a white arrow; on hover the circle turns yellow with a navy arrow and moves 4 px right. Header size: 14 px text, 24 px circle. On navy: white text, white circle with navy arrow.
- **Text link** (every secondary action): navy text with a 2 px yellow underline; on hover a navy underline draws over it from left to right.
- **Toggle** (deliverables, FAQ): label 16 px / 600 with a 28 px cream circle and a navy chevron; circle turns yellow on hover and when open, chevron rotates 180°.
- Never pill buttons, boxes or filled rectangles.

## 6. Layout

- Content width max 1280 px, side gutter 32 px (20 px on phones). Designed at 1440 px desktop and 390 px phone; fluid in between; checked at 1024 and 768 px.
- Cards: off-white, radius 16 px, no border; equal heights in a row (CSS subgrid aligns title, text, toggle and link).
- Hero: off-white with a large white circle behind the text and the cream audience circle (544 px, four industries in one column) beside the headline; headline and circle are centered vertically in the hero; below 1180 px the circle moves under the text; on phones it becomes a rounded cream card below the button.
- Background circles are a brand motif (hero, contact band): large, soft (white, cream, yellow), cropped at the edge, text above them. Never navy circles behind text.
- Timelines and process steps: a number or year above a thin line (#C9CCD6), no icons or symbols.
- Homepage order: hero with audience · How I Work · services · resources · career and references · contact band · footer. No further sections on the homepage; new content gets its own page.

## 7. Motion

Subtle and slow; switches off with `prefers-reduced-motion`.
- Hero: headline lines rise from a mask; circles fade in and grow slightly like a spotlight (white first, then the audience circle, then the overlap glows), about 2.5 s in total.
- On scroll: headings, cards, steps and rows rise gently into view; cards and steps stagger; timeline lines draw left to right.
- Header stays at the top with a soft shadow; a 2 px yellow reading-progress line fills under it.
- References glide slowly in an endless row and pause on hover.
- Hover: cards lift 3 px, arrows move, link underlines draw.

## 8. Copy rules (from Christina's preferences)

- German first, English is a rewrite in American thought-leadership English.
- Service copy starts with the client's concrete problem, then the solution.
- No "X not Y" constructions, no hype words, no colons in headings, never "free of charge".
- "ich" / "I" throughout, also in the How I work steps and service cards (confirmed October 9, 2026).
- Percentages with the % sign; German with a space before it (25 %).

## 9. Contact

- Booking via Google Calendar appointment schedule, embedded on the contact page and loaded only after a click (GDPR). URL in `src/lib/site.ts` (`SITE.bookingUrl`).
- Calls: 30 minutes, Google Meet, German or English.
- Career details and more recommendations: https://www.linkedin.com/in/christinavontin/
