import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import PricingSection from '@/components/sections/PricingSection';
import ReferralSection from '@/components/sections/ReferralSection';
import FooterSection from '@/components/sections/FooterSection';
import FAQSection from '@/components/sections/FAQSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';

const Index = () => {
  const [open, setOpen] = useState(false);
  const scrollToPlanos = () => {
    const el = document.getElementById('planos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };
  const openWhatsApp = () => {
    const whatsappNumber = "5521978794705";
    const message = "Olá! Quero economizar com o Quantum Play.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    setOpen(false);
  };
  useEffect(() => {
    // SEO
    document.title = 'Quantum Play IPTV Premium — Sem anúncios por R$ 29,90';
    const desc = 'IPTV premium com 1.800+ canais e filmes/séries em 4K. Teste grátis de 4 horas e planos a partir de R$ 29,90/mês.';
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

    // Pop-up: mostrar 1x por sessão com pequeno delay
    const dismissed = sessionStorage.getItem('promoDismissed') === '1';
    const t = setTimeout(() => setOpen(!dismissed), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Pop-up Persuasivo */}
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) sessionStorage.setItem('promoDismissed', '1'); }}>
        <DialogContent className="bg-card border border-border/40 animate-enter">
          <DialogHeader>
            <DialogTitle className="text-foreground">
              Cansado de pagar caro por vários streamings?
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Tenha tudo em um só lugar e sem anúncios. Enquanto os streamings cobram mais e ainda oferecem planos com anúncios, no Quantum Play você assiste sem interrupções e paga menos.
            </DialogDescription>
          </DialogHeader>
          <ul className="mt-4 mb-2 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Sem anúncios</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Ativação imediata</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Teste grátis de 4 horas</li>
          </ul>
          <DialogFooter className="flex gap-3">
            <button className="btn-hero flex-1" onClick={scrollToPlanos} aria-label="Ver planos e economizar agora">Quero economizar agora</button>
            <button className="btn-whatsapp flex-1" onClick={openWhatsApp} aria-label="Falar com suporte no WhatsApp">Falar no WhatsApp</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ReferralSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
