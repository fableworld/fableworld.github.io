export const languages = {
  en: 'English',
  it: 'Italiano',
};

export const defaultLang = 'it';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.openfable': 'OpenFable',
    'nav.fableforge': 'FableForge',
    'hero.title': 'Unleash Your Faba Stories',
    'hero.subtitle': 'Create, share, and explore custom characters for your Faba storyteller.',
    'hero.cta.download': 'Download FableForge',
    'hero.cta.browse': 'Browse OpenFable',
    'features.title': 'Two Powerful Tools',
    'openfable.title': 'OpenFable',
    'openfable.desc': 'The community hub for Faba characters. Discover new stories and share your own creations with the world.',
    'fableforge.title': 'FableForge',
    'fableforge.desc': 'The ultimate desktop tool to manage your Faba device. Backup, restore, and write custom audio tracks with ease.',
    'footer.copyright': '© 2026 FableWorld. Unofficial project.',
  },
  it: {
    'nav.home': 'Home',
    'nav.openfable': 'OpenFable',
    'nav.fableforge': 'FableForge',
    'hero.title': 'Libera le tue storie Faba',
    'hero.subtitle': 'Crea, condividi ed esplora personaggi personalizzati per il tuo raccontastorie Faba.',
    'hero.cta.download': 'Scarica FableForge',
    'hero.cta.browse': 'Esplora OpenFable',
    'features.title': 'Due Strumenti Potenti',
    'openfable.title': 'OpenFable',
    'openfable.desc': 'L\'hub della community per i personaggi Faba. Scopri nuove storie e condividi le tue creazioni con il mondo.',
    'fableforge.title': 'FableForge',
    'fableforge.desc': 'Lo strumento desktop definitivo per gestire il tuo dispositivo Faba. Backup, ripristino e scrittura di tracce audio personalizzate con facilità.',
    'footer.copyright': '© 2026 FableWorld. Progetto non ufficiale.',
  },
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
