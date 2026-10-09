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
    aboutAuthor: 'About the Author',
    authorBio: 'Christina Vontin is a B2B technology marketing strategist and former marketing leader at Cognizant, TomTom, and CGI. She translates complex technology, regulatory change, and industry transformation into clear market narratives and thought leadership for executive audiences. Her work combines thought leadership strategy, LLM optimization, and AI-enabled marketing workflows to help technology companies build visibility with both decision makers and AI-driven discovery platforms.',
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
    license: 'Diese Arbeit ist lizenziert unter',
    updated: 'Aktualisiert',
    published: 'Veröffentlicht',
    by: 'Von',
    faq: 'Fragen und Antworten',
    sources: 'Quellen',
    toc: 'In diesem Leitfaden',
    privacy: { label: 'Datenschutz', href: '/de/privacy-policy/' },
    switchTo: 'English',
    tagline: 'Technologie im Markt',
    aboutAuthor: 'Über die Autorin',
    authorBio: 'Christina Vontin ist B2B-Marketingstrategin für Technologieunternehmen und war in leitenden Marketingpositionen bei Cognizant, TomTom und CGI tätig. Sie übersetzt komplexe Technologien, regulatorische Veränderungen und den Wandel ganzer Branchen in klare Marktbotschaften und Fachbeiträge für Führungskräfte. Ihre Arbeit verbindet Strategien für Thought Leadership, die Optimierung von Inhalten für Sprachmodelle (LLMO) und Marketingabläufe mit KI, und macht Technologieunternehmen sichtbar, bei Entscheidern ebenso wie in Suchsystemen, die mit KI arbeiten.',
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
