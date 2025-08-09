import { useState, useEffect } from 'react';
import { Clock, Tv, Smartphone, Monitor, Gem, Headset, Infinity } from 'lucide-react';
import heroImage from '@/assets/iptv-hero.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whatsappNumber = "5521978794705";
  const openWhatsApp = (type: 'trial' | 'activate') => {
    const base = `https://wa.me/${whatsappNumber}`;
    const message = type === 'trial'
      ? 'Olá! Gostaria de solicitar o teste grátis de 4 horas do Quantum Play.'
      : 'Olá! Quero ativar meu plano do Quantum Play por R$ 29,90/mês.';
    window.open(`${base}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-particles">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Quantum Play IPTV Streaming" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-gradient-primary rounded-full opacity-20 blur-sm" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-primary-glow to-accent rounded-full opacity-30 blur-sm" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full opacity-15 blur-md" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-up' : ''}`}>
          {/* Crown Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Gem className="w-16 h-16 text-primary animate-glow" />
              <div className="absolute inset-0 bg-primary-glow rounded-full opacity-30 blur-xl animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-gradient animate-glow">Quantum Play</span>
            <span className="block text-3xl md:text-4xl font-semibold text-foreground/80 mt-2">
              <span className="block animate-fade-in" style={{ animationDelay: '0.1s' }}>Entretenimento</span>
              <span className="block animate-fade-in" style={{ animationDelay: '0.25s' }}>Ilimitado</span>
            </span>
          </h1>

          {/* Price Badge */}
          <div className={`inline-flex items-center bg-gradient-primary px-6 py-3 rounded-full mb-8 animate-scale-in stagger-1`}>
            <span className="text-lg font-bold text-primary-foreground">
              Apenas R$ 29,90/mês
            </span>
          </div>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in stagger-2`}>
            Mais de <span className="text-primary font-bold">1.800 canais</span> e milhares de filmes e séries em{' '}
            <span className="text-primary font-bold">4K</span>. Funciona em qualquer dispositivo com{' '}
            <span className="text-primary font-bold">2 telas simultâneas</span>.
          </p>

          {/* Device Icons */}
          <div className={`flex justify-center items-center gap-8 mb-12 animate-fade-in stagger-3`}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Tv className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">Smart TV</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">Celular</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Monitor className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium">PC</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in stagger-4`}>
            <button className="btn-hero flex items-center gap-3 text-lg" onClick={() => openWhatsApp('trial')}>
              <Clock className="w-6 h-6" />
              Teste Grátis 4 Horas
            </button>
            <button className="btn-whatsapp flex items-center gap-3 text-lg" onClick={() => openWhatsApp('activate')}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z"/>
              </svg>
              Ativar Agora
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`flex justify-center items-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in stagger-4`}>
            <div className="flex items-center gap-2">
              <Headset className="w-4 h-4 text-primary animate-bounce" aria-hidden="true" />
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Infinity className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0.1s' }} aria-hidden="true" />
              <span>Sem Fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} aria-hidden="true" />
              <span>Qualidade 4K</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;