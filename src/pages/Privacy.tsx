import { ArrowLeft } from 'lucide-react';

export function Privacy() {
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
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 font-body text-foreground leading-relaxed">

            {/* Verantwortlicher */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                1. Verantwortlicher
              </h2>
              <p className="text-muted-foreground mb-2">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <address className="not-italic text-muted-foreground italic">
                <p>[BITTE ERGÄNZEN: Vor- und Nachname]</p>
                <p>[BITTE ERGÄNZEN: Anschrift]</p>
                <p>E-Mail: [BITTE ERGÄNZEN: E-Mail-Adresse]</p>
              </address>
            </section>

            {/* Überblick */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="text-muted-foreground">
                Diese Website ist eine private, nicht-kommerzielle Seite. Die 
                Datenverarbeitung beschränkt sich auf das technisch Notwendige. 
                Es werden <strong>keine Analyse-Tools, kein Tracking und keine 
                Werbung</strong> eingesetzt.
              </p>
            </section>

            {/* Hosting */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                3. Hosting und Server-Logfiles
              </h2>
              <p className="text-muted-foreground mb-4">
                Diese Website wird bei <strong>Netlify, Inc.</strong> (USA) gehostet. 
                Bei jedem Zugriff werden vom Hosting-Anbieter automatisch 
                Informationen erfasst, sogenannte Server-Logfiles:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>IP-Adresse des zugreifenden Geräts</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Aufgerufene Seiten und Dateien</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Diese Daten werden zur Sicherstellung des Betriebs und zur 
                Fehlerbehebung benötigt. Eine Zusammenführung mit anderen 
                Datenquellen findet nicht statt. Rechtsgrundlage ist Art. 6 
                Abs. 1 lit. f DSGVO (berechtigtes Interesse).
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Hinweis: Netlify unterliegt als US-Unternehmen dem 
                EU-U.S. Data Privacy Framework.
              </p>
            </section>

            {/* Google Fonts */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                4. Google Fonts
              </h2>
              <p className="text-muted-foreground mb-4">
                Diese Website nutzt Schriftarten von <strong>Google Fonts</strong> 
                (Google Ireland Limited). Beim Laden der Website wird eine 
                Verbindung zu Google-Servern hergestellt, wobei Ihre IP-Adresse 
                an Google übermittelt wird.
              </p>
              <p className="text-muted-foreground">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes 
                Interesse an einer ansprechenden Darstellung der Website).
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Weitere Informationen:{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Google Datenschutzerklärung
                </a>
              </p>
            </section>

            {/* Lokale Speicherung */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                5. Lokale Speicherung (localStorage)
              </h2>
              <p className="text-muted-foreground mb-4">
                Diese Website speichert folgende Einstellungen lokal in Ihrem 
                Browser (localStorage):
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Gewählte Sprache (RU / EN / UKR)</li>
                <li>Gewähltes Farbschema (Hell / Dunkel)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Diese Daten werden <strong>ausschließlich auf Ihrem Gerät</strong> 
                {' '}gespeichert und nicht an Server übertragen. Sie können diese 
                Daten jederzeit in den Browser-Einstellungen löschen.
              </p>
              <p className="text-muted-foreground mt-2 text-sm">
                Hinweis: LocalStorage ist technisch kein Cookie. Es werden keine 
                einwilligungspflichtigen Cookies verwendet.
              </p>
            </section>

            {/* Kontaktformular */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                6. Kontaktaufnahme
              </h2>
              <p className="text-muted-foreground mb-4">
                Die Website enthält ein Kontaktformular. Derzeit ist dieses 
                Formular <strong>nicht mit einem Mailserver verbunden</strong> – 
                eingegebene Daten werden nicht übertragen oder gespeichert.
              </p>
              <p className="text-muted-foreground">
                Falls Sie Kontakt aufnehmen möchten, nutzen Sie bitte die im 
                Impressum angegebene E-Mail-Adresse. Bei E-Mail-Kontakt werden 
                Ihre Angaben zur Bearbeitung der Anfrage und für mögliche 
                Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 
                lit. b oder f DSGVO.
              </p>
            </section>

            {/* Keine weiteren Dienste */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                7. Nicht verwendete Technologien
              </h2>
              <p className="text-muted-foreground">
                Auf dieser Website werden <strong>nicht</strong> eingesetzt:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
                <li>Analyse-Tools (z. B. Google Analytics)</li>
                <li>Werbenetzwerke</li>
                <li>Social-Media-Plugins mit Datenübertragung</li>
                <li>Tracking-Cookies</li>
                <li>Newsletter-Dienste</li>
              </ul>
            </section>

            {/* Betroffenenrechte */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                8. Ihre Rechte
              </h2>
              <p className="text-muted-foreground mb-4">
                Nach der DSGVO stehen Ihnen folgende Rechte zu:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>
                  <strong>Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft 
                  über Ihre verarbeiteten personenbezogenen Daten verlangen.
                </li>
                <li>
                  <strong>Berichtigung</strong> (Art. 16 DSGVO): Sie können die 
                  Berichtigung unrichtiger Daten verlangen.
                </li>
                <li>
                  <strong>Löschung</strong> (Art. 17 DSGVO): Sie können die 
                  Löschung Ihrer Daten verlangen, sofern keine gesetzlichen 
                  Aufbewahrungspflichten bestehen.
                </li>
                <li>
                  <strong>Einschränkung</strong> (Art. 18 DSGVO): Sie können 
                  die Einschränkung der Verarbeitung verlangen.
                </li>
                <li>
                  <strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können 
                  der Verarbeitung auf Basis berechtigter Interessen widersprechen.
                </li>
                <li>
                  <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie 
                  können Ihre Daten in einem gängigen Format erhalten.
                </li>
                <li>
                  <strong>Beschwerde</strong>: Sie haben das Recht, sich bei 
                  einer Datenschutz-Aufsichtsbehörde zu beschweren.
                </li>
              </ul>
            </section>

            {/* Kontakt für Datenschutz */}
            <section>
              <h2 className="text-lg font-medium text-foreground mb-4">
                9. Kontakt in Datenschutzfragen
              </h2>
              <p className="text-muted-foreground">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an die im 
                Impressum genannte E-Mail-Adresse.
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
