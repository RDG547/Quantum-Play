import { Gift, Users, Crown } from 'lucide-react';

const ReferralSection = () => {
  const whatsappNumber = "5521978794705";
  const openWhatsApp = () => {
    const message = 'Olá! Quero saber mais sobre o programa Indique e Ganhe do Quantum Play.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="pt-16 pb-24 -mt-8 bg-background relative overflow-hidden" aria-labelledby="referral-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-accent to-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="card-feature animate-enter hover-scale">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow">
                <Gift className="w-8 h-8 text-white" />
              </div>
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground mb-3">Ganhe meses grátis indicando!</span>
              <h2 id="referral-heading" className="text-3xl font-bold text-foreground mb-2">Indique e Ganhe</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Convide amigos, conhecidos e familiares e acumule meses grátis. É simples: quanto mais você indica, mais tempo você assiste sem pagar.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
                <div className="p-4 rounded-xl bg-card/50 border border-border/30">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div className="font-semibold">2 indicações = 1 mês grátis</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-card/50 border border-border/30">
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-warning" />
                    <div className="font-semibold">10 indicações = 1 ANO GRÁTIS</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-xs px-3 py-1 rounded-full bg-success/10 text-success border border-success/20">Cumulativo</span>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Sem limite</span>
              </div>

              <button className="btn-secondary w-full md:w-auto" onClick={openWhatsApp}>
                Saiba Mais
              </button>
              
              <p className="mt-4 text-center text-xs px-3 py-1 rounded-full bg-warning/10 text-warning border border-warning/20 shadow-glow animate-fade-in inline-block">
                <span className="animate-pulse">Oferta válida enquanto durar o programa. Sem pegadinhas.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
