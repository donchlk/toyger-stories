import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart, Users, Zap, Sparkles } from 'lucide-react';

const features = [
  { icon: Heart, key: 'character' },
  { icon: Users, key: 'social' },
  { icon: Zap, key: 'activity' },
  { icon: Sparkles, key: 'care' },
];

export function BreedInfo() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="breed"
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
            {t('breed.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('breed.subtitle') as string}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const title = t(`breed.${feature.key}`) as string;
            const desc = t(`breed.${feature.key}Desc`) as string;

            return (
              <div
                key={feature.key}
                className={`p-6 lg:p-8 bg-background rounded-2xl border border-border/50 hover:border-border transition-colors ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <Icon size={24} className="text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
