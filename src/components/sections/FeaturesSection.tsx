import { CheckCircle, Tv, Film, Smartphone, Monitor, Users, Gem, Headset } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: '1.800+ Canais',
    description: 'Canais de esportes, filmes, notícias, infantil e muito mais',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Film,
    title: 'Filmes & Séries',
    description: 'Milhares de títulos atualizados constantemente',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Monitor,
    title: 'Qualidade 4K',
    description: 'HD, Full HD e 4K para a melhor experiência',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Users,
    title: '2 Telas Simultâneas',
    description: 'Assista em dispositivos diferentes ao mesmo tempo',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Smartphone,
    title: 'Multi-Dispositivo',
    description: 'Smart TV, celular (Android/iOS) e computador',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Headset,
    title: 'Suporte 24/7',
    description: 'Atendimento todos os dias para ajudar você',
    color: 'from-pink-500 to-rose-500'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tudo Incluso</span> no Seu Plano
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desfrute de uma experiência completa de entretenimento com recursos premium 
            que tornam sua assinatura ainda mais valiosa
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="card-feature group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            );
          })}
        </div>

        {/* Quality Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 bg-card/50 backdrop-blur-md border border-border/30 rounded-2xl px-4 py-4 sm:px-8 sm:py-6">
            <div className="group flex items-center gap-2 px-3 py-2 rounded-lg hover-scale animate-fade-in">
              <CheckCircle className="w-6 h-6 text-success" />
              <span className="font-semibold text-foreground">HD</span>
              <span className="text-xs text-muted-foreground">720p • 30fps</span>
            </div>
            <div className="group flex items-center gap-2 px-3 py-2 rounded-lg hover-scale animate-fade-in stagger-1">
              <CheckCircle className="w-6 h-6 text-success" />
              <span className="font-semibold text-foreground">Full HD</span>
              <span className="text-xs text-muted-foreground">1080p • até 60fps</span>
            </div>
            <div className="group flex items-center gap-2 px-3 py-2 rounded-lg hover-scale animate-fade-in stagger-2">
              <CheckCircle className="w-6 h-6 text-success" />
              <span className="font-semibold text-foreground">4K</span>
              <span className="text-xs text-muted-foreground">2160p • HDR10</span>
            </div>
            <div className="group flex flex-col items-center gap-1 px-3 py-2 rounded-lg hover-scale animate-fade-in stagger-3">
              <div className="flex items-center gap-2">
                <Gem className="w-6 h-6 text-primary" />
                <span className="font-semibold text-primary">Qualidade Premium</span>
              </div>
              <span className="text-xs text-muted-foreground">Canais • Filmes e Séries Atualizados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;