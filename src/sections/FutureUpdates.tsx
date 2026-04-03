import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function FutureUpdates() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-8 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {t('futureUpdates.title') as string}
        </h2>
        <p
          className={`font-body text-base text-muted-foreground leading-relaxed mb-4 ${
            isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
          }`}
        >
          {t('futureUpdates.p1') as string}
        </p>
        <p
          className={`font-body text-base text-muted-foreground leading-relaxed ${
            isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
          }`}
        >
          {t('futureUpdates.p2') as string}
        </p>
      </div>
    </section>
  );
}
