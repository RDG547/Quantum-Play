import { Clock, Crown, BadgeCheck, TrendingUp } from 'lucide-react';

const PricingSection = () => {
  const whatsappNumber = "5521978794705";
  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <section id="planos" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Planos</span> que Cabem no Seu Bolso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a melhor opção para você e comece a aproveitar hoje mesmo
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Free Trial Card */}
            <div className="card-feature shadow-card animate-slide-up hover-scale">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Teste Grátis</h3>
                <div className="text-4xl font-black text-gradient mb-2">4 Horas</div>
                <p className="text-muted-foreground mb-6">Teste sem risco: 4 horas grátis para conhecer o serviço</p>
                <button className="btn-secondary w-full" onClick={() => openWhatsApp('Olá! Gostaria de solicitar o teste grátis de 4 horas do Quantum Play.')}> 
                  Solicitar Teste
                </button>
              </div>
            </div>

            {/* Main Plan Card - Featured */}
            <div className="card-premium shadow-elegant relative animate-scale-in stagger-1 transform scale-105 border-primary/50 hover-scale">
              {/* Popular Badge */}
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <div className="bg-gradient-primary px-6 py-2 rounded-full">
                  <span className="text-sm font-bold text-primary-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    MAIS POPULAR
                  </span>
                </div>
              </div>

              <div className="text-center pt-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 animate-glow">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">Mensal</h3>
                <div className="mb-6">
                  <div className="text-5xl font-black text-gradient mb-2">R$ 29,90</div>
                  <div className="text-muted-foreground">/mês</div>
                </div>
                <div className="space-y-2 mb-8 text-muted-foreground">
                  <div className="text-sm">Sem fidelidade</div>
                  <div className="text-sm">Ativação imediata</div>
                  <div className="text-sm">Pagamento mensal</div>
                </div>
                <button className="btn-hero w-full mb-4 flex items-center justify-center gap-2" onClick={() => openWhatsApp('Olá! Quero ativar o plano Mensal (R$ 29,90/mês).')}>
                  <BadgeCheck className="w-5 h-5" />
                  Assinar Mensal
                </button>
                <button className="btn-whatsapp w-full flex items-center justify-center gap-2" onClick={() => openWhatsApp('Olá! Quero ativar o plano Mensal (R$ 29,90/mês).')}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.587z"/>
                  </svg>
                  WhatsApp
                </button>
                <p className="mt-3 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-warning/10 text-warning border border-warning/20 shadow-glow animate-fade-in">
                  <span className="animate-pulse">Promoção por tempo limitado garanta já seu acesso!</span>
                </p>
              </div>
            </div>

            {/* Trimestral Plan Card */}
            <div className="card-feature shadow-card animate-slide-up hover-scale relative">
              {/* Em Breve Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-white">EM BREVE</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-trimestral rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-60">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Trimestral</h3>
                <div className="text-4xl font-black text-gradient-trimestral mb-2 opacity-60">R$ 74,70</div>
                <p className="text-muted-foreground mb-6">R$ 24,90/mês • cobrado a cada 3 meses</p>
                
                <div className="space-y-2 mb-6 text-muted-foreground text-sm">
                  <div>• Sem fidelidade</div>
                  <div>• Ativação imediata</div>
                  <div>• Pagamento Trimestral</div>
                </div>
                
                <button className="btn-trimestral w-full opacity-60 cursor-not-allowed" disabled>
                  Em Breve
                </button>
              </div>
            </div>

            {/* Anual Plan Card */}
            <div className="card-feature shadow-card animate-slide-up stagger-1 hover-scale relative">
              {/* Em Breve Badge */}
              <div className="absolute -top-3 -right-3">
                <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-white">EM BREVE</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-60">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Anual</h3>
                <div className="text-4xl font-black text-gradient-warning mb-2 opacity-60">R$ 238,80</div>
                <p className="text-muted-foreground mb-6">R$ 19,90/mês • cobrado anualmente</p>
                
                <div className="space-y-2 mb-6 text-muted-foreground text-sm">
                  <div>• Sem fidelidade</div>
                  <div>• Ativação imediata</div>
                  <div>• Pagamento Anual</div>
                </div>
                
                <button className="btn-warning w-full opacity-60 cursor-not-allowed" disabled>
                  Em Breve
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;