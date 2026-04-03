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
          alt="Toyger cat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-20">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
          {t('hero.title') as string}
        </h1>
        <p className="font-body text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          {t('hero.subtitle') as string}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo('gallery')}
            className="px-8 py-3 bg-foreground text-background font-body text-sm rounded-full hover:opacity-80 transition-opacity"
          >
            {t('hero.ctaGallery') as string}
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="px-8 py-3 border border-foreground/20 text-foreground font-body text-sm rounded-full hover:bg-foreground/5 transition-colors"
          >
            {t('hero.ctaAbout') as string}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
}
