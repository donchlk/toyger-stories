import { useState } from 'react';
import { useI18n } from '@/i18n/I18nContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Check } from 'lucide-react';

export function Contact() {
  const { t } = useI18n();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 px-6"
    >
      <div className="max-w-xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            {t('contact.title') as string}
          </h2>
          <p
            className={`font-body text-muted-foreground ${
              isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'
            }`}
          >
            {t('contact.subtitle') as string}
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`space-y-5 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}
        >
          <div>
            <Input
              type="text"
              placeholder={t('contact.name') as string}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 bg-background border-border/50 focus:border-primary"
              required
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder={t('contact.email') as string}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 bg-background border-border/50 focus:border-primary"
              required
            />
          </div>
          <div>
            <Textarea
              placeholder={t('contact.message') as string}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[140px] bg-background border-border/50 focus:border-primary resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className={`w-full h-12 rounded-full font-body text-sm flex items-center justify-center gap-2 transition-all ${
              sent
                ? 'bg-green-500 text-white'
                : 'bg-foreground text-background hover:opacity-80'
            }`}
          >
            {sent ? (
              <>
                <Check size={18} />
                {t('contact.success') as string}
              </>
            ) : (
              <>
                <Send size={18} />
                {t('contact.send') as string}
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            {t('contact.privacy') as string}
          </p>
        </form>
      </div>
    </section>
  );
}
