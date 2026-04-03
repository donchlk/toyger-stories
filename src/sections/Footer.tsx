import { useI18n, type Language } from '@/i18n/I18nContext';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'ukr', label: 'UKR' },
];

export function Footer() {
  const { t, language, setLanguage } = useI18n();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              onClick={() => scrollTo('hero')}
              className="font-display text-2xl text-foreground mb-4 block hover:opacity-70 transition-opacity"
            >
              Toyger Stories
            </button>
            <p className="font-body text-sm text-muted-foreground max-w-xs">
              {t('footer.tagline') as string}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-sm font-medium text-foreground mb-4">
              {t('nav.home') as string}
            </h4>
            <nav className="space-y-2">
              {['about', 'gallery', 'philosophy', 'breed', 'faq', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(`nav.${id}`) as string}
                </button>
              ))}
            </nav>
          </div>

          {/* Language & Legal */}
          <div>
            <h4 className="font-body text-sm font-medium text-foreground mb-4">
              {t('footer.language') as string}
            </h4>
            <div className="flex gap-2 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 text-xs font-body rounded-full transition-all ${
                    language === lang.code
                      ? 'bg-foreground text-background'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <h4 className="font-body text-sm font-medium text-foreground mb-4">
              {t('footer.legal') as string}
            </h4>
            <nav className="space-y-2">
              <a
                href="/impressum"
                className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('impressum.title') as string}
              </a>
              <a
                href="/privacy"
                className="block font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('privacy.title') as string}
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Toyger Stories. {t('footer.rights') as string}
          </p>
        </div>
      </div>
    </footer>
  );
}
