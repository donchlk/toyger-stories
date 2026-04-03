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
            Toyger Stories
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl text-foreground mb-12">
            Datenschutz
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Данные
              </h2>
              <p className="font-body text-foreground leading-relaxed">
                При использовании контактной формы сохраняются: имя, email и сообщение.
                Эти данные используются только для ответа на ваш запрос.
              </p>
            </section>

            <section>
              <h2 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Cookies
              </h2>
              <p className="font-body text-foreground leading-relaxed">
                Сайт использует только технические cookies для сохранения языка и темы оформления.
              </p>
            </section>

            <section>
              <h2 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Ваши права
              </h2>
              <p className="font-body text-foreground leading-relaxed">
                Вы можете запросить удаление ваших данных в любое время через форму связи на главной странице.
              </p>
            </section>

            <div className="pt-8 border-t border-border/50">
              <p className="font-body text-sm text-muted-foreground">
                Toyger Stories — личная некоммерческая страница.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
