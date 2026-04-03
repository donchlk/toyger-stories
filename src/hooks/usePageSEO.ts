import { useEffect } from 'react';
import { useI18n, type Language } from '@/i18n/I18nContext';

// Base URL for all SEO signals
const BASE_URL = 'https://toyger-stories.netlify.app';

// Language to hreflang/locale mapping
const localeMap: Record<Language, { hreflang: string; ogLocale: string }> = {
  ru: { hreflang: 'ru', ogLocale: 'ru_RU' },
  en: { hreflang: 'en', ogLocale: 'en_US' },
  ukr: { hreflang: 'uk', ogLocale: 'uk_UA' },
};

export interface PageSEOConfig {
  /** Page path (e.g., '/impressum', '/privacy') */
  path: string;
  /** Page title per language */
  title: Record<Language, string>;
  /** Page description per language */
  description: Record<Language, string>;
  /** Page type for og:type (default: 'website') */
  type?: string;
  /** Whether to include image in og tags (default: false for legal pages) */
  includeImage?: boolean;
  /** Optional JSON-LD structured data */
  structuredData?: object | null;
}

// Helper: Update meta tag
function updateMetaTag(name: string, content: string, attribute = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

// Helper: Update link tag
function updateLinkTag(rel: string, href: string, hreflang?: string) {
  const selector = hreflang 
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    if (hreflang) tag.setAttribute('hreflang', hreflang);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

// Helper: Update JSON-LD
function updateJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id);
  if (data === null) {
    existing?.remove();
    return;
  }
  let script = existing as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

// Helper: Remove JSON-LD scripts for homepage-specific schemas
function removeHomePageSchemas() {
  ['schema-gallery', 'schema-faq'].forEach(id => {
    document.getElementById(id)?.remove();
  });
}

/**
 * Hook for setting page-specific SEO metadata.
 * Use this in page components to set their own title, description, canonical, and OG tags.
 */
export function usePageSEO(config: PageSEOConfig) {
  const { language } = useI18n();
  const locale = localeMap[language];
  const pageUrl = `${BASE_URL}${config.path}`;
  const title = config.title[language];
  const description = config.description[language];

  useEffect(() => {
    // Remove homepage-specific JSON-LD schemas
    removeHomePageSchemas();

    // Update document title
    document.title = title;

    // Update HTML lang attribute
    document.documentElement.lang = locale.hreflang;

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('author', 'Toyger Stories');
    updateMetaTag('robots', 'index, follow');

    // Canonical URL - page-specific
    updateLinkTag('canonical', pageUrl);

    // hreflang: x-default for this specific page
    updateLinkTag('alternate', pageUrl, 'x-default');

    // Open Graph tags - page-specific
    updateMetaTag('og:type', config.type || 'website', 'property');
    updateMetaTag('og:url', pageUrl, 'property');
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:locale', locale.ogLocale, 'property');
    updateMetaTag('og:site_name', 'Toyger Stories', 'property');

    // Image tags - optional for legal pages
    if (config.includeImage) {
      updateMetaTag('og:image', `${BASE_URL}/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg`, 'property');
      updateMetaTag('og:image:width', '1200', 'property');
      updateMetaTag('og:image:height', '630', 'property');
      updateMetaTag('og:image:alt', 'Toyger cat with distinctive tiger-like stripes', 'property');
      updateMetaTag('twitter:image', `${BASE_URL}/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg`, 'name');
      updateMetaTag('twitter:image:alt', 'Toyger cat with distinctive tiger-like stripes', 'name');
    } else {
      // Remove image tags for legal pages
      ['og:image', 'og:image:width', 'og:image:height', 'og:image:alt'].forEach(name => {
        document.querySelector(`meta[property="${name}"]`)?.remove();
      });
      ['twitter:image', 'twitter:image:alt'].forEach(name => {
        document.querySelector(`meta[name="${name}"]`)?.remove();
      });
    }

    // Twitter Card tags - page-specific
    updateMetaTag('twitter:card', 'summary', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');

    // Structured Data - page-specific or null to clear
    if (config.structuredData) {
      updateJsonLd('schema-page', config.structuredData);
    } else {
      document.getElementById('schema-page')?.remove();
    }

  }, [language, title, description, pageUrl, locale, config.type, config.includeImage, config.structuredData]);
}
