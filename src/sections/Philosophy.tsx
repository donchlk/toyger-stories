import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Philosophy() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/A2F0AF85-05D3-49E9-994A-83FF93CFE3A2.jpg"
                alt="Cat moment"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 ${
                isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              {t('philosophy.title') as string}
            </h2>

            <div className="space-y-6">
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
                }`}
              >
                {t('philosophy.p1') as string}
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'
                }`}
              >
                {t('philosophy.p2') as string}
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'
                }`}
              >
                {t('philosophy.p3') as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
