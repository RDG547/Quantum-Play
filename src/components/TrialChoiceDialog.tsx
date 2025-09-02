import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Bot, MessageCircle } from 'lucide-react';

interface TrialChoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TrialChoiceDialog = ({ open, onOpenChange }: TrialChoiceDialogProps) => {
  const handleAutomaticTrial = () => {
    window.open('https://testeagora.tv/quantum_play', '_blank');
    onOpenChange(false);
  };

  const handleHumanSupport = () => {
    const whatsappNumber = "5521978794705";
    const message = 'Olá! Gostaria de solicitar o teste grátis de 4 horas do Quantum Play.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border border-border/40">
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
      </DialogContent>
    </Dialog>
  );
};

export default TrialChoiceDialog;