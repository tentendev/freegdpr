import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '../i18n/I18nContext';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, buildLocalizedPath, LanguageCode } from '../i18n';

interface SEOHeadProps {
  page?: 'home' | 'how-it-works' | 'resources' | 'why-free-gdpr';
}

const BASE_URL = 'https://freegdpr.com';

export const SEOHead: React.FC<SEOHeadProps> = ({ page = 'home' }) => {
  const { lang, t } = useI18n();

  const getPagePath = (p: string) => {
    switch (p) {
      case 'how-it-works': return '/how-it-works';
      case 'resources': return '/resources';
      case 'why-free-gdpr': return '/why-free-gdpr';
      default: return '/';
    }
  };

  const pagePath = getPagePath(page);
  const canonicalUrl = `${BASE_URL}${buildLocalizedPath(lang, pagePath)}`;

  const getPageTitle = () => {
    switch (page) {
      case 'how-it-works':
        return `${t.howItWorks.title} | FreeGDPR`;
      case 'resources':
        return `${t.legalResources.title} | FreeGDPR`;
      case 'why-free-gdpr':
        return `${t.header.whyFree} | FreeGDPR`;
      default:
        return t.meta.title;
    }
  };

  const getPageDescription = () => {
    switch (page) {
      case 'how-it-works':
        return t.howItWorks.subtitle;
      case 'resources':
        return t.legalResources.subtitle;
      case 'why-free-gdpr':
        return t.whyFree.subtitle;
      default:
        return t.meta.description;
    }
  };

  const langToHreflang = (code: LanguageCode): string => {
    const map: Record<LanguageCode, string> = {
      'en': 'en',
      'zh-CN': 'zh-Hans',
      'zh-TW': 'zh-Hant',
      'ja': 'ja',
      'ko': 'ko',
      'es': 'es',
      'fr': 'fr',
      'de': 'de',
      'pt': 'pt',
      'ru': 'ru',
    };
    return map[code] || code;
  };

  return (
    <Helmet>
      <html lang={langToHreflang(lang)} />
      <title>{getPageTitle()}</title>
      <meta name="description" content={getPageDescription()} />
      <meta name="keywords" content={t.meta.keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang tags for all supported languages */}
      {SUPPORTED_LANGUAGES.map((l) => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={langToHreflang(l.code)}
          href={`${BASE_URL}${buildLocalizedPath(l.code, pagePath)}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${pagePath}`} />

      {/* Open Graph */}
      <meta property="og:title" content={getPageTitle()} />
      <meta property="og:description" content={getPageDescription()} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FreeGDPR" />
      <meta property="og:locale" content={lang.replace('-', '_')} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={getPageTitle()} />
      <meta name="twitter:description" content={getPageDescription()} />

      {/* Local SEO - Geo Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="San Francisco" />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Tenten AI" />
    </Helmet>
  );
};
