import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Bot, MessageCircle, Server, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface TrialChoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrialChoiceDialog = ({ open, onOpenChange }: TrialChoiceDialogProps) => {
  const { toast } = useToast();
  const [showServerInfo, setShowServerInfo] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleAutomaticTrial = () => {
    toast({
      title: "Em breve!",
      description: "Por enquanto ainda é necessário chamar no WhatsApp, mas logo essa função será implementada.",
      duration: 4000,
    });
    onOpenChange(false);
  };

  const handleHumanSupport = () => {
    setShowServerInfo(true);
  };

  const redirectToWhatsApp = () => {
    const whatsappNumber = "5521978794705";
    const message = 'Olá! Gostaria de solicitar o teste grátis de 4 horas do Quantum Play.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onOpenChange(false);
    setShowServerInfo(false);
    setCountdown(5);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showServerInfo && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showServerInfo && countdown === 0) {
      redirectToWhatsApp();
    }
    return () => clearTimeout(timer);
  }, [showServerInfo, countdown]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border border-border/40">
        {!showServerInfo ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-foreground text-center">
                Como deseja solicitar seu teste grátis?
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-center">
                Escolha a opção que preferir para ativar suas 4 horas gratuitas
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 mt-4">
              <button 
                className="btn-hero flex items-center justify-center gap-3 p-4 text-lg"
                onClick={handleAutomaticTrial}
                aria-label="Teste automático - ativação instantânea"
              >
                <Bot className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">Teste Automático</div>
                  <div className="text-sm opacity-90">Ativação instantânea</div>
                </div>
              </button>
              
              <button 
                className="btn-whatsapp flex items-center justify-center gap-3 p-4 text-lg"
                onClick={handleHumanSupport}
                aria-label="Atendimento humano via WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">Atendimento Humano</div>
                  <div className="text-sm opacity-90">Suporte via WhatsApp</div>
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-foreground text-center">
                Servidores Disponíveis
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-center">
                Redirecionando para WhatsApp em {countdown} segundos...
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 mt-4">
              <div className="bg-muted/50 p-4 rounded-lg border border-border/40">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Servidor 1 - Mais Filmes</h3>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>📺 Canais: 1900+</p>
                  <p>🎬 Filmes: 32.000+</p>
                  <p>📺 Séries: 9.000+</p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg border border-border/40">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Servidor 2 - Mais Canais</h3>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>📺 Canais: 5.800+</p>
                  <p>🎬 Filmes: 30.000+</p>
                  <p>📺 Séries: 7.000+</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-primary">
                <Clock className="w-4 h-4 animate-spin" />
                <span className="font-semibold">Redirecionando em {countdown}s</span>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TrialChoiceDialog;