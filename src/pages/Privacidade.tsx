import { useEffect } from "react";
import { ArrowLeft, Shield, Database, ShieldCheck, Share2, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Política de Privacidade — Quantum Play IPTV Premium";
    const desc = "Saiba como o Quantum Play coleta e usa seus dados.";
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
            <Shield className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Política de Privacidade</h1>
          <p className="text-muted-foreground mt-2">Última atualização: 2025</p>
        </header>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Política de Privacidade — Quantum Play IPTV Premium",
            "description": "Saiba como o Quantum Play coleta e usa seus dados.",
            "inLanguage": "pt-BR",
            "url": window.location.origin + "/privacidade"
          }) }}
        />

        <nav aria-label="Conteúdo" className="mb-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
          <a href="#dados-coletados" onClick={(e) => { e.preventDefault(); const el = document.getElementById('dados-coletados'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <Database className="w-4 h-4 text-primary" />
            <span className="text-sm">Dados Coletados</span>
          </a>
          <a href="#uso-das-informacoes" onClick={(e) => { e.preventDefault(); const el = document.getElementById('uso-das-informacoes'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-sm">Uso das Informações</span>
          </a>
          <a href="#compartilhamento" onClick={(e) => { e.preventDefault(); const el = document.getElementById('compartilhamento'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <Share2 className="w-4 h-4 text-primary" />
            <span className="text-sm">Compartilhamento</span>
          </a>
          <a href="#seus-direitos" onClick={(e) => { e.preventDefault(); const el = document.getElementById('seus-direitos'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <UserCheck className="w-4 h-4 text-primary" />
            <span className="text-sm">Seus Direitos</span>
          </a>
        </nav>

        <article className="card-feature shadow-card animate-enter hover-scale">
          <div className="p-6 md:p-10 prose prose-invert max-w-none text-foreground">
            <p>
              Esta Política descreve como coletamos, usamos e protegemos suas informações pessoais ao
              utilizar o Quantum Play IPTV Premium.
            </p>

            <h2 id="dados-coletados" className="scroll-mt-28">Dados Coletados</h2>
            <p>
              Podemos coletar dados fornecidos por você (como nome e contato) e dados técnicos (como IP
              e informações de dispositivo) para melhoria do serviço e suporte.
            </p>

            <h2 id="uso-das-informacoes" className="scroll-mt-28">Uso das Informações</h2>
            <p>
              Utilizamos os dados para prestação do serviço, comunicações de suporte, segurança e
              cumprimento de obrigações legais.
            </p>

            <h2 id="compartilhamento" className="scroll-mt-28">Compartilhamento</h2>
            <p>
              Não vendemos seus dados. O compartilhamento pode ocorrer com provedores de serviço
              estritamente necessários para a operação.
            </p>

            <h2 id="seus-direitos" className="scroll-mt-28">Seus Direitos</h2>
            <p>
              Você pode solicitar acesso, correção ou exclusão dos seus dados, conforme a legislação
              aplicável.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">
              Veja também nossos <a className="story-link" href="/termos">Termos de Uso</a> e a política de
              <a className="story-link ml-1" href="/cookies">Cookies</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Privacy;
