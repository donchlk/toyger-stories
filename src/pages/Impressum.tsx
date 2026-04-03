import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export function Impressum() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 px-6 border-b border-border/50">
        <div className="max-w-2xl mx-auto">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            {t('legal.backToHome') as string}
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <article className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-10">
            {t('impressum.title') as string}
          </h1>

          <div className="space-y-10 font-body text-foreground leading-relaxed">
            
            {/* Section 1: Provider Info */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section1Title') as string}
              </h2>
              <address className="not-italic space-y-1">
                <p className="text-muted-foreground italic">
                  {t('impressum.section1Placeholder1') as string}
                </p>
                <p className="text-muted-foreground italic">
                  {t('impressum.section1Placeholder2') as string}
                </p>
                <p className="text-muted-foreground italic">
                  {t('impressum.section1Placeholder3') as string}
                </p>
              </address>
            </section>

            {/* Section 2: Contact */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section2Title') as string}
              </h2>
              <div className="space-y-1">
                <p>
                  {t('impressum.section2Email') as string}{' '}
                  <span className="text-muted-foreground italic">
                    {t('impressum.section2Placeholder') as string}
                  </span>
                </p>
              </div>
            </section>

            {/* Section 3: Website Info */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section3Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('impressum.section3Text') as string}
              </p>
            </section>

            {/* Section 4: Content Responsibility */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section4Title') as string}
              </h2>
              <p className="text-muted-foreground italic">
                {t('impressum.section4Placeholder') as string}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {t('impressum.section4Note') as string}
              </p>
            </section>

            {/* Section 5: Content Liability */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section5Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('impressum.section5Text') as string}
              </p>
            </section>

            {/* Section 6: Links Liability */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section6Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('impressum.section6Text') as string}
              </p>
            </section>

            {/* Section 7: Copyright */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('impressum.section7Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('impressum.section7Text') as string}
              </p>
            </section>

          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="font-body text-sm text-muted-foreground">
              {t('legal.lastUpdated') as string} April 2026
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
