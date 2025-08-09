import { Gem, Clock, BadgeCheck, Shield, ShieldCheck, Headset, FileText, Cookie, Calendar, CalendarRange, CalendarCheck, Infinity, Zap, QrCode, ArrowRight } from 'lucide-react';

const FooterSection = () => {
  const whatsappNumber = "5521978794705";

  const handleWhatsAppClick = () => {
    const message = "Olá! Tenho interesse no Quantum Play. Pode me ajudar?";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border/30 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 animate-enter">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Gem className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient">Quantum Play</h3>
                <p className="text-sm text-muted-foreground">Entretenimento Ilimitado</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              A melhor experiência em IPTV, com suporte diário e qualidade garantida.
            </p>
            <button 
              onClick={handleWhatsAppClick}
              aria-label="Falar com suporte no WhatsApp"
              className="btn-whatsapp inline-flex items-center gap-2 hover-scale"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z"/>
              </svg>
              WhatsApp
            </button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Informações</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm">Mensal: R$ 29,90/mês</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4 text-primary" />
                <span className="text-sm">Trimestral: R$ 74,70 (R$ 24,90/mês)</span>
              </li>
              <li className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-primary" />
                <span className="text-sm">Anual: R$ 238,80 (R$ 19,90/mês)</span>
              </li>
              <li className="flex items-center gap-2">
                <Infinity className="w-4 h-4 text-primary" />
                <span className="text-sm">Sem fidelidade</span>
              </li>
              <li className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm">Ativação imediata</span>
              </li>
              <li className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-primary" />
                <span className="text-sm">Pagamento via Pix</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="text-sm">Sem anúncios</span>
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-primary" />
                <span className="text-sm">Teste grátis de 4 horas</span>
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-primary" />
                <a href="#planos" className="text-sm story-link" aria-label="Ver planos e promoções" onClick={(e) => { e.preventDefault(); const el = document.getElementById('planos'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Ver planos e promoções</a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-success" />
                <span className="text-sm">Atendimento 24/7</span>
              </li>
              <li className="flex items-center gap-2">
                <Headset className="w-4 h-4 text-success" />
                <span className="text-sm">Suporte Especializado</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z"/>
                </svg>
                <span className="text-sm">Via WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-warning" />
                <a href="/termos" className="text-sm story-link" aria-label="Ler Termos de Uso">Termos de Uso</a>
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-warning" />
                <a href="/privacidade" className="text-sm story-link" aria-label="Ler Política de Privacidade">Política de Privacidade</a>
              </li>
              <li className="flex items-center gap-2">
                <Cookie className="w-4 h-4 text-warning" />
                <a href="/cookies" className="text-sm story-link" aria-label="Ler Política de Cookies">Cookies</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 Quantum Play. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-success">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-sm font-medium">Online Agora</span>
              </div>
              <div className="text-sm text-muted-foreground">
                R$ 29,90/mês
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;