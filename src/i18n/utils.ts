import en from './en.json';
import es from './es.json';

const translations = { es, en } as const;

export type Lang = keyof typeof translations;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getLocalizedPath(lang: Lang, hash?: string): string {
  const base = lang === 'en' ? '/en' : '';
  return `${base}/${hash ? '#' + hash : ''}`;
}

export function getCvPath(lang: Lang): string {
  return lang === 'en' ? '/cv/CV_Sergio_Arroni.en.pdf' : '/cv/CV_Sergio_Arroni.es.pdf';
}
