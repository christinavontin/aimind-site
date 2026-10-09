export const SITE = {
  url: 'https://aimind.marketing',
  name: 'aimind.marketing',
  author: 'Christina Vontin',
  logo: '/images/logo.png',
  defaultImage: '/images/logo.png',
  // Google Calendar appointment schedule, embedded on the contact page (loads only after a click)
  bookingUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ32Tgf4_1IZjGOKsA0esPqw1C29UsHNm_Z5aWNIf4ufMqN5vvIP4MFun3WqBRxvqKfm_iR1C2dw?gv=true',
};

export type Lang = 'en' | 'de';

export const UI = {
  en: {
    htmlLang: 'en-US',
    ogLocale: 'en_US',
    home: '/',
    nav: [
      { label: 'How I work', href: '/#approach' },
      { label: 'Services', href: '/#services' },
      { label: 'Resources', href: '/#resources' },
      { label: 'Career', href: '/#career' },
    ],
    cta: { label: 'Book a Strategy Call', href: '/contact/' },
    menu: 'Menu',
    footer: [
      { label: 'Contact', href: '/contact/' },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'AI Ethics and Data Protection', href: '/ai-data-protection/' },
    ],
    license: 'This work is licensed under',
    updated: 'Updated',
    published: 'Published',
    by: 'By',
    faq: 'Questions and Answers',
    sources: 'Sources',
    toc: 'In this guide',
    privacy: { label: 'Privacy Policy', href: '/privacy-policy/' },
    switchTo: 'Deutsch',
    tagline: 'Technology to Market',
    authorBio: 'B2B technology marketing strategist. Senior marketing roles at CGI, GFT, TomTom and Cognizant since 2000.',
  },
  de: {
    htmlLang: 'de-DE',
    ogLocale: 'de_DE',
    home: '/de/',
    nav: [
      { label: 'Wie ich arbeite', href: '/de/#approach' },
      { label: 'Services', href: '/de/#services' },
      { label: 'Ressourcen', href: '/de/#resources' },
      { label: 'Werdegang', href: '/de/#career' },
    ],
    cta: { label: 'Strategietermin buchen', href: '/de/contact/' },
    menu: 'Menü',
    footer: [
      { label: 'Kontakt', href: '/de/contact/' },
      { label: 'Datenschutz', href: '/de/privacy-policy/' },
      { label: 'KI-Ethik und Datenschutz', href: '/de/ai-data-protection/' },
    ],
    license: 'Dieses Werk ist lizenziert unter',
    updated: 'Aktualisiert',
    published: 'Veröffentlicht',
    by: 'Von',
    faq: 'Fragen und Antworten',
    sources: 'Quellen',
    toc: 'In diesem Leitfaden',
    privacy: { label: 'Datenschutz', href: '/de/privacy-policy/' },
    switchTo: 'English',
    tagline: 'Technologie im Markt',
    authorBio: 'Strategin für B2B-Technologiemarketing. Leitende Marketingrollen bei CGI, GFT, TomTom und Cognizant seit 2000.',
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
