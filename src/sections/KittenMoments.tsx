import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const kittenImages = [
  {
    image: '/ai-images/toyger-kittens-playing.png',
    span: 'col-span-1 row-span-2',
  },
  {
    image: '/ai-images/toyger-kitten-mouse.png',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/ai-images/toyger-kitten-box.png',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/ai-images/toyger-family.png',
    span: 'col-span-1 row-span-2',
  },
  {
    image: '/ai-images/toyger-kitten-playful.png',
    span: 'col-span-1 row-span-1',
  },
  {
    image: '/ai-images/toyger-sofa.png',
    span: 'col-span-1 row-span-1',
  },
];

export function KittenMoments() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="kitten-moments"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('kittenMoments.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground mb-2 ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('kittenMoments.subtitle') as string}
          </p>
        </div>

        {/* Intro text */}
        <p
          className={`font-body text-base text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-16 ${
            isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
          }`}
        >
          {t('kittenMoments.p') as string}
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] lg:auto-rows-[250px]">
          {kittenImages.map((item, index) => (
            <div
              key={index}
              className={`gallery-item relative overflow-hidden rounded-xl ${item.span} ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <img
                src={item.image}
                alt={`Toyger kitten moment ${index + 1}`}
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
