export const SITE = {
  url: 'https://aimind.marketing',
  name: 'aimind.marketing',
  author: 'Christina Vontin',
  logo: '/images/logo.webp',
  defaultImage: '/images/logo.webp',
};

export type Lang = 'en' | 'de';

export const UI = {
  en: {
    htmlLang: 'en-GB',
    ogLocale: 'en_GB',
    home: '/',
    nav: [
      { label: 'Career', href: '/b2b-marketing-experience/' },
      { label: 'Contact', href: '/contact/' },
    ],
    updated: 'Updated',
    published: 'Published',
    by: 'By',
    faq: 'FAQ',
    sources: 'Sources',
    privacy: { label: 'Privacy Policy', href: '/privacy-policy/' },
    switchTo: 'Deutsch',
    tagline: 'Strategy and Content for B2B Tech',
  },
  de: {
    htmlLang: 'de-DE',
    ogLocale: 'de_DE',
    home: '/de/',
    nav: [
      { label: 'Werdegang', href: '/de/b2b-marketing-experience/' },
      { label: 'Kontakt', href: '/de/contact/' },
    ],
    updated: 'Aktualisiert',
    published: 'Veröffentlicht',
    by: 'Von',
    faq: 'FAQ',
    sources: 'Quellen',
    privacy: { label: 'Datenschutz', href: '/de/privacy-policy/' },
    switchTo: 'English',
    tagline: 'Strategie und Content für B2B-Technologie',
  },
} as const;

/** "October 8, 2026" (EN) or "8. Oktober 2026" (DE). */
export function formatDate(d: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'de' ? 'de-DE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Budapest',
  }).format(d);
}

export const abs = (path: string) => new URL(path, SITE.url).href;
