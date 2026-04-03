import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Lightbulb } from 'lucide-react';

const factKeys = [
  'fact1',
  'fact2',
  'fact3',
  'fact4',
  'fact5',
  'fact6',
];

export function FunFacts() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="fun-facts"
      ref={ref}
      className="py-24 lg:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('funFacts.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('funFacts.subtitle') as string}
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {factKeys.map((key, index) => {
            const title = t(`funFacts.${key}Title`) as string;
            const desc = t(`funFacts.${key}Desc`) as string;

            return (
              <div
                key={key}
                className={`p-6 bg-background rounded-2xl border border-border/50 hover:border-border transition-colors ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <Lightbulb
                  size={20}
                  className="text-primary mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-lg text-foreground mb-2">
                  {title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
