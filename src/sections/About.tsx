import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function About() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-12 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {t('about.title') as string}
        </h2>

        <div className="space-y-6">
          <p
            className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('about.p1') as string}
          </p>
          <p
            className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed ${
              isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            {t('about.p2') as string}
          </p>
          <p
            className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed ${
              isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'
            }`}
          >
            {t('about.p3') as string}
          </p>
        </div>
      </div>
    </section>
  );
}
