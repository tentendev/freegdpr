import { translations, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LanguageCode, TranslationKeys } from './translations';
import { zhCN, zhTW } from './translations-zh';
import { ja, ko } from './translations-ja-ko';
import { es, fr, de, pt, ru } from './translations-eu';

export const allTranslations: Record<LanguageCode, TranslationKeys> = {
  en: translations.en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  ja: ja,
  ko: ko,
  es: es,
  fr: fr,
  de: de,
  pt: pt,
  ru: ru,
};

export function getTranslation(lang: LanguageCode): TranslationKeys {
  return allTranslations[lang] || allTranslations[DEFAULT_LANGUAGE];
}

export function getLanguageFromPath(pathname: string): LanguageCode {
  const segments = pathname.split('/').filter(Boolean);
  const langCode = segments[0] as LanguageCode;

  if (SUPPORTED_LANGUAGES.some(l => l.code === langCode)) {
    return langCode;
  }
  return DEFAULT_LANGUAGE;
}

export function getPathWithoutLang(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const langCode = segments[0] as LanguageCode;

  if (SUPPORTED_LANGUAGES.some(l => l.code === langCode)) {
    return '/' + segments.slice(1).join('/') || '/';
  }
  return pathname;
}

export function buildLocalizedPath(lang: LanguageCode, path: string): string {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  if (lang === DEFAULT_LANGUAGE) {
    return cleanPath;
  }
  return `/${lang}${cleanPath === '/' ? '' : cleanPath}`;
}

export { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, type LanguageCode, type TranslationKeys };
