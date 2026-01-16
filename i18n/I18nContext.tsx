import React, { createContext, useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTranslation, buildLocalizedPath, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, LanguageCode, TranslationKeys } from './index';

interface I18nContextType {
  lang: LanguageCode;
  t: TranslationKeys;
  switchLanguage: (newLang: LanguageCode) => void;
  localizedPath: (path: string) => string;
  languages: typeof SUPPORTED_LANGUAGES;
}

const I18nContext = createContext<I18nContextType | null>(null);

// Extract language from pathname
function getLangFromPath(pathname: string): LanguageCode {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0] as LanguageCode;

  if (firstSegment && SUPPORTED_LANGUAGES.some(l => l.code === firstSegment)) {
    return firstSegment;
  }
  return DEFAULT_LANGUAGE;
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const lang = useMemo(() => {
    return getLangFromPath(location.pathname);
  }, [location.pathname]);

  const t = useMemo(() => getTranslation(lang), [lang]);

  const switchLanguage = (newLang: LanguageCode) => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);

    // Remove current language prefix if exists
    if (SUPPORTED_LANGUAGES.some(l => l.code === pathSegments[0])) {
      pathSegments.shift();
    }

    const basePath = '/' + pathSegments.join('/') || '/';
    const newPath = buildLocalizedPath(newLang, basePath);
    navigate(newPath);
  };

  const localizedPath = (path: string) => buildLocalizedPath(lang, path);

  const value = useMemo(() => ({
    lang,
    t,
    switchLanguage,
    localizedPath,
    languages: SUPPORTED_LANGUAGES,
  }), [lang, t, localizedPath]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
