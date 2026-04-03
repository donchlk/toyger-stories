import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqKeys = ['q1', 'q2', 'q3', 'q4'];

export function FAQ() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 lg:py-32 px-6 bg-secondary/30"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('faq.title') as string}
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqKeys.map((key, index) => (
            <AccordionItem
              key={key}
              value={key}
              className={`bg-background rounded-xl px-6 border-none shadow-sm ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <AccordionTrigger className="font-display text-lg text-foreground hover:no-underline py-5">
                {t(`faq.${key}`) as string}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pb-5">
                {t(`faq.a${key.slice(1)}`) as string}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
