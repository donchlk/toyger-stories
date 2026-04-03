import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BreedStory() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="breed-story"
      ref={ref}
      className="py-24 lg:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('breedStory.title') as string}
          </h2>
          <p
            className={`font-body text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('breedStory.intro') as string}
          </p>
        </div>

        {/* Content with portrait */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Portrait image */}
          <div
            className={`lg:col-span-2 ${
              isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
            }`}
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/ai-images/toyger-portrait.png"
                alt="Portrait of a Toyger cat showing distinctive tiger-like facial markings and expressive eyes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-3 space-y-6">
            <p
              className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed ${
                isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
              }`}
            >
              {t('breedStory.p1') as string}
            </p>
            <p
              className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed ${
                isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'
              }`}
            >
              {t('breedStory.p2') as string}
            </p>
            <p
              className={`font-body text-base sm:text-lg text-muted-foreground leading-relaxed ${
                isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'
              }`}
            >
              {t('breedStory.p3') as string}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
