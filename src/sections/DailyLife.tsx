import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function DailyLife() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="daily-life"
      ref={ref}
      className="py-24 lg:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              {t('dailyLife.title') as string}
            </h2>
            <p
              className={`font-body text-sm text-muted-foreground mb-8 ${
                isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              {t('dailyLife.subtitle') as string}
            </p>

            <div className="space-y-5">
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
                }`}
              >
                {t('dailyLife.p1') as string}
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'
                }`}
              >
                {t('dailyLife.p2') as string}
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'
                }`}
              >
                {t('dailyLife.p3') as string}
              </p>
              <p
                className={`font-body text-base text-foreground/80 leading-relaxed italic ${
                  isVisible ? 'animate-fade-in-up stagger-5' : 'opacity-0'
                }`}
              >
                {t('dailyLife.p4') as string}
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative ${
              isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/ai-images/toyger-sofa.png"
                alt="Toyger cat relaxing at home"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
