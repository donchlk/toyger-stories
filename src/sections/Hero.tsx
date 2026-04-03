import { useI18n } from '@/i18n/I18nContext';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg"
          alt="Toyger cat with distinctive tiger-like stripes and golden-orange coat - a domestic cat breed resembling a miniature tiger"
          className="w-full h-full object-cover"
        />
        {/* Light mode: subtle warm dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-transparent dark:from-transparent dark:via-transparent dark:to-transparent" />
        {/* Theme-aware gradient to background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto pt-24">
        {/* Local readability backdrop - soft vignette behind text only */}
        <div className="absolute inset-0 -mx-8 -my-6 rounded-3xl bg-gradient-to-b from-black/20 via-black/15 to-black/10 dark:from-transparent dark:via-transparent dark:to-transparent blur-xl scale-110 hero-content-backdrop" />
        
        <h1 className="relative font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6 hero-title">
          {t('hero.title') as string}
        </h1>
        <p className="relative font-body text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto hero-subtitle">
          {t('hero.subtitle') as string}
        </p>
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('gallery')}
            className="px-8 py-3 bg-foreground text-background font-body text-sm rounded-full hover:opacity-80 transition-opacity hero-btn-primary"
          >
            {t('hero.ctaGallery') as string}
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="px-8 py-3 border-2 border-foreground/50 text-foreground font-body text-sm font-medium rounded-full hover:bg-foreground/10 transition-colors hero-btn-secondary"
          >
            {t('hero.ctaAbout') as string}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors animate-bounce hero-scroll-indicator"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
