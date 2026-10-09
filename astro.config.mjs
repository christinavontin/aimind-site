// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeTables } from './src/lib/rehype-tables.mjs';

export default defineConfig({
  site: 'https://aimind.marketing',
  // Keep the WordPress URL style: every path ends with a slash.
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    rehypePlugins: [rehypeTables],
  },
  integrations: [
    mdx(),
    sitemap({
      // Pairs EN and DE URLs as hreflang alternates in the sitemap.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', de: 'de-DE' },
      },
    }),
  ],
});
