import { useEffect } from "react";
import { ArrowLeft, Cookie, Info, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Cookies — Quantum Play IPTV Premium";
    const desc = "Entenda como usamos cookies no site do Quantum Play.";
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
            <Cookie className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Cookies</h1>
          <p className="text-muted-foreground mt-2">Última atualização: 2025</p>
        </header>

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookies — Quantum Play IPTV Premium",
            "description": "Entenda como usamos cookies no site do Quantum Play.",
            "inLanguage": "pt-BR",
            "url": window.location.origin + "/cookies"
          }) }}
        />

        <nav aria-label="Conteúdo" className="mb-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
          <a href="#o-que-sao-cookies" onClick={(e) => { e.preventDefault(); const el = document.getElementById('o-que-sao-cookies'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <Info className="w-4 h-4 text-primary" />
            <span className="text-sm">O que são Cookies?</span>
          </a>
          <a href="#como-controlar" onClick={(e) => { e.preventDefault(); const el = document.getElementById('como-controlar'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border/30 bg-card/60 hover:border-primary/40 transition-colors">
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span className="text-sm">Como Controlar</span>
          </a>
        </nav>

        <article className="card-feature shadow-card animate-enter hover-scale">
          <div className="p-6 md:p-10 prose prose-invert max-w-none text-foreground">
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua experiência, medir
              performance e oferecer suporte.
            </p>

            <h2 id="o-que-sao-cookies" className="scroll-mt-28">O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos armazenados no seu dispositivo para lembrar preferências e
              entender como você usa o site.
            </p>

            <h2 id="como-controlar" className="scroll-mt-28">Como Controlar</h2>
            <p>
              Você pode gerenciar cookies nas configurações do navegador. Desativá-los pode impactar
              funcionalidades do site.
            </p>

            <p className="mt-8 text-sm text-muted-foreground">
              Para mais informações, consulte nossa <a className="story-link" href="/privacidade">Política de Privacidade</a> e os
              <a className="story-link ml-1" href="/termos">Termos de Uso</a>.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default CookiesPage;
