import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Users, Brain, Gamepad2, Home } from 'lucide-react';

const traits = [
  { icon: Users, titleKey: 'socialTitle', descKey: 'socialDesc' },
  { icon: Brain, titleKey: 'intellectTitle', descKey: 'intellectDesc' },
  { icon: Gamepad2, titleKey: 'playfulTitle', descKey: 'playfulDesc' },
  { icon: Home, titleKey: 'adaptTitle', descKey: 'adaptDesc' },
];

export function Temperament() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="temperament"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('temperament.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('temperament.subtitle') as string}
          </p>
        </div>

        {/* Traits */}
        <div className="space-y-8">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            const title = t(`temperament.${trait.titleKey}`) as string;
            const desc = t(`temperament.${trait.descKey}`) as string;

            return (
              <div
                key={trait.titleKey}
                className={`flex gap-6 items-start ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon
                    size={22}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
