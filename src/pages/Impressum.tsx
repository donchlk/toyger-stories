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
            Toyger Stories
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl text-foreground mb-12">
            Impressum
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Ответственный за содержание
              </h2>
              <p className="font-body text-foreground">Toyger Stories</p>
            </section>

            <section>
              <h2 className="font-body text-sm uppercase tracking-wider text-muted-foreground mb-3">
                Контакт
              </h2>
              <p className="font-body text-foreground">
                Свяжитесь с нами через форму на главной странице.
              </p>
            </section>

            <div className="pt-8 border-t border-border/50">
              <p className="font-body text-sm text-muted-foreground">
                Это личная некоммерческая страница, посвящённая кошкам породы Toyger.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
