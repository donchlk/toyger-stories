import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function WhyToyger() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="why-toyger"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative order-2 lg:order-1 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/images/A9DCB555-A15D-4AEA-A37D-9234BCE8ECF4.jpg"
                alt="Toyger cat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
                isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              {t('whyToyger.title') as string}
            </h2>
            <p
              className={`font-body text-sm text-muted-foreground mb-8 ${
                isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
              }`}
            >
              {t('whyToyger.subtitle') as string}
            </p>

            <div className="space-y-6">
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
                }`}
              >
                {t('whyToyger.p1') as string}
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'
                }`}
              >
                {t('whyToyger.p2') as string}
              </p>
              <p
                className={`font-body text-base text-muted-foreground leading-relaxed ${
                  isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'
                }`}
              >
                {t('whyToyger.p3') as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
