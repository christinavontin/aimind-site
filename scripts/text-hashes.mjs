// Prints one SHA-1 per text block (headings, paragraphs, list items, table cells, FAQ)
// of a built page, to compare migrated text with the live WordPress page.
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parse } from 'node-html-parser';
const html = readFileSync(process.argv[2], 'utf8');
const root = parse(html);
const scope = root.querySelector('article');
const norm = (s) => s.replace(/ /g, ' ').replace(/\s+/g, ' ').trim();
const blocks = scope.querySelectorAll('.prose h2, .prose h3, .prose p, .prose td, .prose th, .faq summary, .faq p')
  .map((e) => norm(e.textContent)).filter(Boolean);
for (const b of blocks) console.log(createHash('sha1').update(b).digest('hex').slice(0, 10), b.slice(0, 50));
