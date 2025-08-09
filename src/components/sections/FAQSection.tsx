import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      q: 'O que está incluso no Quantum Play?',
      a: 'Canais ao vivo, filmes e séries sob demanda em HD, Full HD e 4K — sem anúncios. Ativação imediata e suporte diário.'
    },
    {
      q: 'Em quais dispositivos posso assistir?',
      a: 'TV Box/Smart TV, Android TV, celular (Android/iOS) e computador (aplicativo ou navegador). Enviamos instruções simples para cada opção.'
    },
    {
      q: 'Como funciona o teste grátis de 4 horas?',
      a: 'Solicite no WhatsApp e receba acesso em minutos para validar qualidade, estabilidade e catálogo antes de assinar.'
    },
    {
      q: 'Existe fidelidade ou multa?',
      a: 'Não. Você pode cancelar quando quiser. Planos flexíveis e sem burocracia.'
    },
    {
      q: 'Qual é a forma de pagamento?',
      a: 'Pagamento via Pix, com confirmação quase imediata e ativação logo após o comprovante.'
    },
    {
      q: 'O que recebo após a ativação?',
      a: 'Você recebe usuário e senha, URLs compatíveis com os principais apps (ex.: IPTV Smarters, XCIPTV), link M3U/HLS e um passo a passo de instalação. Seus dados ficam protegidos e são enviados somente a você.'
    },
    {
      q: 'Posso assistir em mais de um dispositivo ao mesmo tempo?',
      a: 'Sim. Nosso plano oferece 2 telas simultâneas.'
    },
    {
      q: 'Como falar com o suporte?',
      a: 'Atendimento diário via WhatsApp para ajuda com instalação, pagamentos e dúvidas gerais.'
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-14 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Perguntas Frequentes</span> (FAQ)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa saber sobre o Quantum Play IPTV.
          </p>
        </header>

        <article className="max-w-4xl mx-auto animate-slide-up">
          <div className="card-feature shadow-card">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left text-foreground">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6 text-center">
              <a href="https://wa.me/5521978794705?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20o%20Quantum%20Play." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                Ainda com dúvidas? Fale no WhatsApp
              </a>
            </div>
          </div>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
};

export default FAQSection;
