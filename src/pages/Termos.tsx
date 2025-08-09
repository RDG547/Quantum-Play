import { useEffect } from "react";
import { ArrowLeft, Scale, BookText, CreditCard, Headset, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Termos de Uso — Quantum Play IPTV Premium";
    const desc = "Leia os Termos de Uso do Quantum Play IPTV Premium.";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = desc;
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement('link');
      canon.rel = 'canonical';
      document.head.appendChild(canon);
    }
    canon.href = window.location.href;
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <section className="container mx-auto px-6 py-16 relative z-10">
        <div className="mb-6">
          <button onClick={() => navigate(-1)} className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </button>
        </div>

        <header className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow">
            <Scale className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Termos de Uso</h1>
          <p className="text-muted-foreground mt-2">Última atualização: 2025</p>
        </header>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TermsOfService",
            "name": "Termos de Uso — Quantum Play IPTV Premium",
            "description": "Leia os Termos de Uso do Quantum Play IPTV Premium.",
            "inLanguage": "pt-BR",
            "url": window.location.origin + "/termos"
          }) }}
        />

        <nav aria-label="Conteúdo" className="mb-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
          <a href="#uso-do-servico" onClick={(e) => { e.preventDefault(); const el = document.getElementById('uso-do-servico'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <BookText className="w-4 h-4 text-primary" />
            <span className="text-sm">Uso do Serviço</span>
          </a>
          <a href="#assinaturas-pagamentos" onClick={(e) => { e.preventDefault(); const el = document.getElementById('assinaturas-pagamentos'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="text-sm">Assinaturas e Pagamentos</span>
          </a>
          <a href="#suporte" onClick={(e) => { e.preventDefault(); const el = document.getElementById('suporte'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <Headset className="w-4 h-4 text-primary" />
            <span className="text-sm">Suporte</span>
          </a>
          <a href="#alteracoes" onClick={(e) => { e.preventDefault(); const el = document.getElementById('alteracoes'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm">Alterações</span>
          </a>
        </nav>

        <article className="card-feature shadow-card animate-enter hover-scale">
          <div className="p-6 md:p-10 prose prose-invert max-w-none text-foreground">
            <p>
              Estes Termos de Uso regulam a utilização do serviço Quantum Play IPTV Premium. Ao acessar
              ou utilizar nossos serviços, você concorda com estes termos.
            </p>

            <h2 id="uso-do-servico" className="scroll-mt-28">Uso do Serviço</h2>
            <p>
              O acesso é pessoal e intransferível. É vedado compartilhar credenciais ou utilizar o
              serviço para fins ilícitos.
            </p>

            <h2 id="assinaturas-pagamentos" className="scroll-mt-28">Assinaturas e Pagamentos</h2>
            <p>
              Os valores e condições exibidos na página de Planos são válidos no momento da contratação.
              Cancelamentos podem ser solicitados a qualquer momento.
            </p>

            <h2 id="suporte" className="scroll-mt-28">Suporte</h2>
            <p>
              Oferecemos suporte através de WhatsApp, com atendimento 24/7, conforme divulgado no site.
            </p>

            <h2 id="alteracoes" className="scroll-mt-28">Alterações destes Termos</h2>
            <p>
              Podemos atualizar estes Termos periodicamente. Recomendamos revisar esta página com
              frequência.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">
              Para saber como tratamos dados pessoais e cookies, consulte a nossa
              <a className="story-link ml-1" href="/privacidade">Política de Privacidade</a> e a página de
              <a className="story-link ml-1" href="/cookies">Cookies</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Terms;
