import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lang = z.enum(['en', 'de']);

// Articles: one file per language. EN and DE versions share the same `key`.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    key: z.string(), // shared by the EN and DE version, e.g. "cmo-hub"
    lang,
    permalink: z.string().regex(/^\/.*\/$/), // full path incl. /de/ for German, must end with /
    title: z.string(), // H1
    seoTitle: z.string(), // <title>, max. ~60 characters
    description: z.string(), // meta description, max. ~155 characters
    keyphrase: z.string().optional(), // focus keyphrase (for our own checks)
    published: z.coerce.date(),
    updated: z.coerce.date(),
    image: z.string().optional(), // path under /public, e.g. /images/cmo-hub-en.webp
    imageAlt: z.string().optional(),
    role: z.enum(['hub', 'spoke']).default('hub'),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z
      .array(z.object({ author: z.string(), title: z.string(), url: z.string().url() }))
      .default([]),
    draft: z.boolean().default(false),
  }),
});

// Pages: homepage, About, Contact, Privacy Policy, Glossary.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    key: z.string(),
    lang,
    permalink: z.string().regex(/^\/.*\/$|^\/$/),
    title: z.string(),
    seoTitle: z.string(),
    description: z.string(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, pages };
