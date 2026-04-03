import { ArrowLeft } from 'lucide-react';

export function Impressum() {
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
            Zur Startseite
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <article className="max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-10">
            Impressum
          </h1>

          <div className="space-y-10 font-body text-foreground leading-relaxed">
            
            {/* Anbieter */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Angaben gemäß § 5 DDG
              </h2>
              <address className="not-italic space-y-1">
                <p className="text-muted-foreground italic">
                  [BITTE ERGÄNZEN: Vor- und Nachname]
                </p>
                <p className="text-muted-foreground italic">
                  [BITTE ERGÄNZEN: Straße und Hausnummer]
                </p>
                <p className="text-muted-foreground italic">
                  [BITTE ERGÄNZEN: PLZ und Ort]
                </p>
              </address>
            </section>

            {/* Kontakt */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Kontakt
              </h2>
              <div className="space-y-1">
                <p>
                  E-Mail:{' '}
                  <span className="text-muted-foreground italic">
                    [BITTE ERGÄNZEN: E-Mail-Adresse]
                  </span>
                </p>
              </div>
            </section>

            {/* Hinweis zur Website */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Hinweise zur Website
              </h2>
              <p className="text-muted-foreground">
                Diese Website ist eine private, nicht-kommerzielle Seite über Katzen 
                der Rasse Toyger. Es werden keine Waren oder Dienstleistungen angeboten, 
                keine Mitgliedschaften abgeschlossen und kein wirtschaftlicher 
                Geschäftsbetrieb ausgeübt.
              </p>
            </section>

            {/* Redaktionelle Verantwortung */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-muted-foreground italic">
                [BITTE ERGÄNZEN: Vor- und Nachname, Anschrift – falls abweichend von oben]
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (Angabe gemäß § 18 Abs. 2 MStV, sofern journalistisch-redaktionelle 
                Inhalte vorliegen.)
              </p>
            </section>

            {/* Haftungshinweis */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground">
                Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für die 
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann 
                jedoch keine Gewähr übernommen werden.
              </p>
            </section>

            {/* Haftung für Links */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground">
                Diese Website enthält Links zu externen Websites Dritter, auf 
                deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten 
                Seiten ist stets der jeweilige Anbieter verantwortlich.
              </p>
            </section>

            {/* Urheberrecht */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf 
                dieser Website unterliegen dem deutschen Urheberrecht. Soweit die 
                Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden 
                die Urheberrechte Dritter beachtet.
              </p>
            </section>

          </div>

          {/* Footer-Hinweis */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="font-body text-sm text-muted-foreground">
              Stand: April 2026
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
