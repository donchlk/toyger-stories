import { useState, useEffect } from 'react';
import { useI18n, type Language } from '@/i18n/I18nContext';
import { useTheme } from '@/hooks/useTheme';
import { Menu, X, Sun, Moon } from 'lucide-react';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'ukr', label: 'UKR' },
];

export function Header() {
  const { t, language, setLanguage } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: t('nav.home') as string },
    { id: 'about', label: t('nav.about') as string },
    { id: 'gallery', label: t('nav.gallery') as string },
    { id: 'philosophy', label: t('nav.philosophy') as string },
    { id: 'breed', label: t('nav.breed') as string },
    { id: 'moments', label: t('nav.moments') as string },
    { id: 'faq', label: t('nav.faq') as string },
    { id: 'contact', label: t('nav.contact') as string },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'nav-scrolled py-3' : 'py-5 bg-transparent header-hero-overlay'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-xl lg:text-2xl font-medium tracking-wide text-foreground hover:opacity-70 transition-opacity"
        >
          Toyger Stories
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.slice(1, 5).map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm text-foreground/80 hover:text-foreground transition-colors header-nav-link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="hidden sm:flex items-center gap-1 bg-background/60 backdrop-blur-sm rounded-full p-1 header-lang-switcher">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-3 py-1 text-xs font-body rounded-full transition-all ${
                  language === lang.code
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-background/60 backdrop-blur-sm hover:bg-background/80 transition-all header-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-foreground/80" />
            ) : (
              <Sun size={18} className="text-foreground/80" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background backdrop-blur-xl border-t border-border py-6 px-6 shadow-lg">
          {/* Mobile Language Switcher */}
          <div className="flex sm:hidden items-center gap-2 mb-6">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-4 py-2 text-sm font-body font-medium rounded-full transition-all ${
                  language === lang.code
                    ? 'bg-secondary text-foreground'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="font-body text-left text-foreground font-medium hover:text-foreground/70 transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
