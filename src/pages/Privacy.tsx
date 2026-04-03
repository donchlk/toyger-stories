import { ArrowLeft } from 'lucide-react';
import { useI18n } from '@/i18n/I18nContext';

export function Privacy() {
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
            {t('privacy.title') as string}
          </h1>

          <div className="space-y-10 font-body text-foreground leading-relaxed">

            {/* Section 1: Controller */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section1Title') as string}
              </h2>
              <p className="text-muted-foreground mb-2">
                {t('privacy.section1Intro') as string}
              </p>
              <address className="not-italic text-muted-foreground italic">
                <p>{t('privacy.section1Placeholder1') as string}</p>
                <p>{t('privacy.section1Placeholder2') as string}</p>
                <p>{t('privacy.section1Placeholder3') as string}</p>
              </address>
            </section>

            {/* Section 2: Overview */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section2Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('privacy.section2Text') as string}
              </p>
            </section>

            {/* Section 3: Hosting */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section3Title') as string}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.section3Text1') as string}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>{t('privacy.section3List1') as string}</li>
                <li>{t('privacy.section3List2') as string}</li>
                <li>{t('privacy.section3List3') as string}</li>
                <li>{t('privacy.section3List4') as string}</li>
                <li>{t('privacy.section3List5') as string}</li>
                <li>{t('privacy.section3List6') as string}</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                {t('privacy.section3Text2') as string}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('privacy.section3Note') as string}
              </p>
            </section>

            {/* Section 4: Google Fonts */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section4Title') as string}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.section4Text1') as string}
              </p>
              <p className="text-muted-foreground">
                {t('privacy.section4Text2') as string}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('privacy.section4Link') as string}{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  {t('privacy.section4LinkText') as string}
                </a>
              </p>
            </section>

            {/* Section 5: Local Storage */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section5Title') as string}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.section5Text1') as string}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>{t('privacy.section5List1') as string}</li>
                <li>{t('privacy.section5List2') as string}</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                {t('privacy.section5Text2') as string}
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                {t('privacy.section5Note') as string}
              </p>
            </section>

            {/* Section 6: Contact */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section6Title') as string}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.section6Text1') as string}
              </p>
              <p className="text-muted-foreground">
                {t('privacy.section6Text2') as string}
              </p>
            </section>

            {/* Section 7: Technologies Not Used */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section7Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('privacy.section7Text') as string}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
                <li>{t('privacy.section7List1') as string}</li>
                <li>{t('privacy.section7List2') as string}</li>
                <li>{t('privacy.section7List3') as string}</li>
                <li>{t('privacy.section7List4') as string}</li>
                <li>{t('privacy.section7List5') as string}</li>
              </ul>
            </section>

            {/* Section 8: Your Rights */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section8Title') as string}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('privacy.section8Text') as string}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>{t('privacy.section8Right1Name') as string}</strong>{' '}
                  {t('privacy.section8Right1Desc') as string}
                </li>
                <li>
                  <strong>{t('privacy.section8Right2Name') as string}</strong>{' '}
                  {t('privacy.section8Right2Desc') as string}
                </li>
                <li>
                  <strong>{t('privacy.section8Right3Name') as string}</strong>{' '}
                  {t('privacy.section8Right3Desc') as string}
                </li>
                <li>
                  <strong>{t('privacy.section8Right4Name') as string}</strong>{' '}
                  {t('privacy.section8Right4Desc') as string}
                </li>
                <li>
                  <strong>{t('privacy.section8Right5Name') as string}</strong>{' '}
                  {t('privacy.section8Right5Desc') as string}
                </li>
                <li>
                  <strong>{t('privacy.section8Right6Name') as string}</strong>{' '}
                  {t('privacy.section8Right6Desc') as string}
                </li>
                <li>
                  <strong>{t('privacy.section8Right7Name') as string}</strong>{' '}
                  {t('privacy.section8Right7Desc') as string}
                </li>
              </ul>
            </section>

            {/* Section 9: Contact for Data Protection */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                {t('privacy.section9Title') as string}
              </h2>
              <p className="text-muted-foreground">
                {t('privacy.section9Text') as string}
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
