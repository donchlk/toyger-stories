import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const itemKeys = ['item1', 'item2', 'item3', 'item4'];

export function WhoFits() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="who-fits"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('whoFits.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('whoFits.subtitle') as string}
          </p>
        </div>

        {/* Items */}
        <div className="space-y-5">
          {itemKeys.map((key, index) => {
            const text = t(`whoFits.${key}`) as string;

            return (
              <div
                key={key}
                className={`flex gap-4 items-start p-5 bg-secondary/40 rounded-xl ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-primary" strokeWidth={2} />
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
