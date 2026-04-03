import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Dialog, DialogContent } from '@/components/ui/dialog';

type Filter = 'all' | 'adults' | 'kittens' | 'archive' | 'favorites';

const cats = [
  {
    id: 1,
    name: 'Leo',
    descKey: 'gallery.catLeo',
    image: '/images/A9DCB555-A15D-4AEA-A37D-9234BCE8ECF4.jpg',
    category: 'adults' as Filter,
  },
  {
    id: 2,
    name: 'Milo',
    descKey: 'gallery.catMilo',
    image: '/images/2D844DD6-F621-4483-941E-C9727F41147D.jpg',
    category: 'adults' as Filter,
  },
  {
    id: 3,
    name: 'Amber',
    descKey: 'gallery.catAmber',
    image: '/ai-images/toyger-sofa.png',
    category: 'adults' as Filter,
  },
  {
    id: 4,
    name: 'Tiger',
    descKey: 'gallery.catTiger',
    image: '/images/A2F0AF85-05D3-49E9-994A-83FF93CFE3A2.jpg',
    category: 'favorites' as Filter,
  },
  {
    id: 5,
    name: 'Zara',
    descKey: 'gallery.catZara',
    image: '/ai-images/toyger-portrait.png',
    category: 'favorites' as Filter,
  },
  {
    id: 6,
    name: 'Simba',
    descKey: 'gallery.catSimba',
    image: '/images/0E0BA451-F411-4F09-AF9B-D16A2B117F0F.jpg',
    category: 'adults' as Filter,
  },
  {
    id: 7,
    name: 'Rusty',
    descKey: 'gallery.catRusty',
    image: '/images/B11EA343-7598-434F-9847-D1FCDBA92689.jpg',
    category: 'favorites' as Filter,
  },
  {
    id: 8,
    name: 'Oliver',
    descKey: 'gallery.catOliver',
    image: '/images/42E76541-1F19-4629-8D3B-2D8F38FC97C5.jpg',
    category: 'archive' as Filter,
  },
  {
    id: 9,
    name: 'Family',
    descKey: 'gallery.catFamily',
    image: '/ai-images/toyger-family.png',
    category: 'favorites' as Filter,
  },
  {
    id: 10,
    name: 'Kittens',
    descKey: 'gallery.catKittensPlay',
    image: '/ai-images/toyger-kittens-playing.png',
    category: 'kittens' as Filter,
  },
  {
    id: 11,
    name: 'Hunter',
    descKey: 'gallery.catKittenMouse',
    image: '/ai-images/toyger-kitten-mouse.png',
    category: 'kittens' as Filter,
  },
  {
    id: 12,
    name: 'Scout',
    descKey: 'gallery.catKittenBox',
    image: '/ai-images/toyger-kitten-box.png',
    category: 'kittens' as Filter,
  },
  {
    id: 13,
    name: 'Joy',
    descKey: 'gallery.catKittenPlayful',
    image: '/ai-images/toyger-kitten-playful.png',
    category: 'kittens' as Filter,
  },
];

export function Gallery() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedCat, setSelectedCat] = useState<typeof cats[0] | null>(null);

  const filteredCats = filter === 'all' ? cats : cats.filter((cat) => cat.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: t('gallery.filterAll') as string },
    { key: 'adults', label: t('gallery.filterAdults') as string },
    { key: 'kittens', label: t('gallery.filterKittens') as string },
    { key: 'archive', label: t('gallery.filterArchive') as string },
    { key: 'favorites', label: t('gallery.filterFavorites') as string },
  ];

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 lg:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('gallery.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('gallery.subtitle') as string}
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${
            isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'
          }`}
        >
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 font-body text-sm rounded-full transition-all ${
                filter === f.key
                  ? 'bg-foreground text-background'
                  : 'bg-background text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredCats.map((cat, index) => (
            <div
              key={cat.id}
              className={`gallery-item break-inside-avoid cursor-pointer group ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onClick={() => setSelectedCat(cat)}
            >
              <div className="relative overflow-hidden rounded-xl bg-muted">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-xl text-foreground">{cat.name}</h3>
                  <p className="font-body text-sm text-muted-foreground">{t(cat.descKey) as string}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedCat} onOpenChange={() => setSelectedCat(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-lg border-none">
          {selectedCat && (
            <div className="relative">
              <img
                src={selectedCat.image}
                alt={selectedCat.name}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
                <h3 className="font-display text-2xl text-foreground">{selectedCat.name}</h3>
                <p className="font-body text-muted-foreground">{t(selectedCat.descKey) as string}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
