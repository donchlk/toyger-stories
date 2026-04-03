import { useEffect } from 'react';
import { useI18n, type Language } from '@/i18n/I18nContext';

// SEO metadata per language
const seoData: Record<Language, {
  title: string;
  description: string;
  keywords: string;
  ogLocale: string;
}> = {
  ru: {
    title: 'Toyger Stories — Кошки породы Тойгер: характер, фото, информация о породе',
    description: 'Toyger Stories — персональная страница о кошках породы Тойгер. Узнайте о характере Тойгера, посмотрите галерею фотографий, прочитайте интересные факты о породе, напоминающей миниатюрного тигра.',
    keywords: 'Toyger, Тойгер, кошка Тойгер, порода Тойгер, характер Тойгер, Тойгер фото, котята Тойгер, тигровая кошка, домашний тигр',
    ogLocale: 'ru_RU',
  },
  en: {
    title: 'Toyger Stories — Toyger Cat Breed: Character, Photos, Breed Information',
    description: 'Toyger Stories — a personal page about Toyger cats. Discover the Toyger character, browse our photo gallery, and learn fascinating facts about the breed that resembles a miniature tiger.',
    keywords: 'Toyger, Toyger cat, Toyger breed, Toyger character, Toyger photos, Toyger kittens, tiger cat, domestic tiger, Toyger temperament',
    ogLocale: 'en_US',
  },
  ukr: {
    title: 'Toyger Stories — Кішки породи Тойгер: характер, фото, інформація про породу',
    description: 'Toyger Stories — персональна сторінка про кішок породи Тойгер. Дізнайтеся про характер Тойгера, перегляньте галерею фотографій, прочитайте цікаві факти про породу, схожу на мініатюрного тигра.',
    keywords: 'Toyger, Тойгер, кішка Тойгер, порода Тойгер, характер Тойгер, Тойгер фото, кошенята Тойгер, тигрова кішка, домашній тигр',
    ogLocale: 'uk_UA',
  },
};

// Language to hreflang mapping
const hreflangMap: Record<Language, string> = {
  ru: 'ru',
  en: 'en',
  ukr: 'uk',
};

// Get base URL for canonical/hreflang
function getBaseUrl(): string {
  if (typeof window === 'undefined') return 'https://donchlk.github.io/toyger-stories';
  const isGitHubPages = window.location.hostname.includes('github.io');
  return isGitHubPages 
    ? 'https://donchlk.github.io/toyger-stories'
    : window.location.origin;
}

// Structured Data for WebSite
function getWebSiteSchema(lang: Language) {
  const data = seoData[lang];
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Toyger Stories',
    alternateName: ['Тойгер Stories', 'Toyger Cats'],
    url: getBaseUrl(),
    description: data.description,
    inLanguage: hreflangMap[lang],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${getBaseUrl()}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Structured Data for ImageGallery
function getImageGallerySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Toyger Cat Photo Gallery',
    description: 'A curated collection of Toyger cat photographs showcasing the breed\'s distinctive tiger-like appearance, playful kittens, and everyday moments.',
    url: `${getBaseUrl()}/#gallery`,
    about: {
      '@type': 'Thing',
      name: 'Toyger',
      description: 'A domestic cat breed developed to resemble a tiger, with bold vertical stripes on a warm orange background.',
    },
  };
}

// Structured Data for FAQPage (only real FAQs from the content)
function getFAQSchema(lang: Language) {
  const faqs = lang === 'ru' ? [
    { q: 'Что делает Toyger особенной породой?', a: 'Toyger — одна из немногих пород, целенаправленно созданных для визуального сходства с тигром. При этом это полностью домашняя кошка с мягким и общительным характером.' },
    { q: 'Правда ли, что Toyger похож на тигра?', a: 'Да, это главная визуальная идея породы. Яркие вертикальные полосы на тёплом фоне, мускулистое тело и выразительная морда создают узнаваемое сходство.' },
    { q: 'Какой у Toyger характер?', a: 'Как правило — дружелюбный, общительный и любознательный. Toyger ориентирован на людей, любит внимание и легко встраивается в ритм жизни семьи.' },
    { q: 'Подходит ли Toyger для жизни в квартире?', a: 'Да. При наличии достаточного пространства, игрушек и внимания Toyger прекрасно себя чувствует в квартире.' },
    { q: 'Нуждается ли Toyger в особом уходе?', a: 'Шерсть Toyger короткая и не требует сложного ухода. Регулярное расчёсывание, сбалансированное питание и стандартный ветеринарный контроль — всё, что нужно.' },
  ] : lang === 'en' ? [
    { q: 'What makes the Toyger a special breed?', a: 'The Toyger is one of the few breeds deliberately created to visually resemble a tiger. At the same time, it is a fully domestic cat with a gentle and sociable character.' },
    { q: 'Does the Toyger really look like a tiger?', a: 'Yes, that is the breed\'s core visual idea. Bold vertical stripes on a warm background, a muscular body, and an expressive face create a recognizable resemblance.' },
    { q: 'What is the Toyger\'s temperament like?', a: 'Generally — friendly, sociable, and curious. The Toyger is people-oriented, loves attention, and easily adapts to a family\'s rhythm of life.' },
    { q: 'Is the Toyger suitable for apartment living?', a: 'Yes. With adequate space, toys, and attention, the Toyger thrives in an apartment.' },
    { q: 'Does the Toyger need special care?', a: 'The Toyger\'s coat is short and low-maintenance. Regular brushing, balanced nutrition, and standard veterinary checkups are all that\'s needed.' },
  ] : [
    { q: 'Що робить Toyger особливою породою?', a: 'Toyger — одна з небагатьох порід, цілеспрямовано створених для візуальної схожості з тигром. При цьому це повністю домашня кішка з м\'яким і товариським характером.' },
    { q: 'Чи правда, що Toyger схожий на тигра?', a: 'Так, це головна візуальна ідея породи. Яскраві вертикальні смуги на теплому тлі, мускулисте тіло та виразна морда створюють впізнавану схожість.' },
    { q: 'Який у Toyger характер?', a: 'Як правило — дружелюбний, товариський і допитливий. Toyger орієнтований на людей, любить увагу і легко вбудовується в ритм життя сім\'ї.' },
    { q: 'Чи підходить Toyger для життя в квартирі?', a: 'Так. За наявності достатнього простору, іграшок і уваги Toyger чудово почувається в квартирі.' },
    { q: 'Чи потребує Toyger особливого догляду?', a: 'Шерсть Toyger коротка і не потребує складного догляду. Регулярне розчісування, збалансоване харчування і стандартний ветеринарний контроль — все, що потрібно.' },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// Structured Data for BreadcrumbList
function getBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: getBaseUrl(),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Gallery',
        item: `${getBaseUrl()}/#gallery`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'About the Breed',
        item: `${getBaseUrl()}/#breed`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'FAQ',
        item: `${getBaseUrl()}/#faq`,
      },
    ],
  };
}

// Update meta tag helper
function updateMetaTag(name: string, content: string, attribute = 'name') {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

// Update link tag helper
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

// Update or create JSON-LD script
function updateJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function SEO() {
  const { language } = useI18n();
  const data = seoData[language];
  const baseUrl = getBaseUrl();

  useEffect(() => {
    // Update document title
    document.title = data.title;

    // Update HTML lang attribute
    document.documentElement.lang = hreflangMap[language];

    // Basic meta tags
    updateMetaTag('description', data.description);
    updateMetaTag('keywords', data.keywords);
    updateMetaTag('author', 'Toyger Stories');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1');

    // Canonical URL
    updateLinkTag('canonical', baseUrl);

    // hreflang tags for all languages
    updateLinkTag('alternate', baseUrl, 'ru');
    updateLinkTag('alternate', baseUrl, 'en');
    updateLinkTag('alternate', baseUrl, 'uk');
    updateLinkTag('alternate', baseUrl, 'x-default');

    // Open Graph tags
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', baseUrl, 'property');
    updateMetaTag('og:title', data.title, 'property');
    updateMetaTag('og:description', data.description, 'property');
    updateMetaTag('og:image', `${baseUrl}/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg`, 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', 'Toyger cat with distinctive tiger-like stripes', 'property');
    updateMetaTag('og:locale', data.ogLocale, 'property');
    updateMetaTag('og:site_name', 'Toyger Stories', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', data.title, 'name');
    updateMetaTag('twitter:description', data.description, 'name');
    updateMetaTag('twitter:image', `${baseUrl}/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg`, 'name');
    updateMetaTag('twitter:image:alt', 'Toyger cat with distinctive tiger-like stripes', 'name');

    // Structured Data
    updateJsonLd('schema-website', getWebSiteSchema(language));
    updateJsonLd('schema-gallery', getImageGallerySchema());
    updateJsonLd('schema-faq', getFAQSchema(language));
    updateJsonLd('schema-breadcrumb', getBreadcrumbSchema());

  }, [language, data, baseUrl]);

  return null; // This component only manages head tags
}
