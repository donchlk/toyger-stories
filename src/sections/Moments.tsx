import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const moments = [
  { image: '/images/42E76541-1F19-4629-8D3B-2D8F38FC97C5.jpg', span: 'col-span-1 row-span-2', alt: 'Toyger cat resting' },
  { image: '/images/B11EA343-7598-434F-9847-D1FCDBA92689.jpg', span: 'col-span-1 row-span-1', alt: 'Toyger cat close-up' },
  { image: '/images/A9DCB555-A15D-4AEA-A37D-9234BCE8ECF4.jpg', span: 'col-span-1 row-span-1', alt: 'Toyger cat watching' },
  { image: '/images/2D844DD6-F621-4483-941E-C9727F41147D.jpg', span: 'col-span-1 row-span-2', alt: 'Toyger cat playing' },
  { image: '/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg', span: 'col-span-1 row-span-1', alt: 'Toyger cat at home' },
  { image: '/images/A2F0AF85-05D3-49E9-994A-83FF93CFE3A2.jpg', span: 'col-span-1 row-span-1', alt: 'Toyger cat portrait' },
];

export function Moments() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="moments"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('moments.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('moments.subtitle') as string}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {moments.map((moment, index) => (
            <div
              key={index}
              className={`gallery-item relative overflow-hidden rounded-xl ${moment.span} ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <img
                src={moment.image}
                alt={moment.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
