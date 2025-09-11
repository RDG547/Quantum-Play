import { useState, useEffect } from 'react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useSettings } from '@/hooks/useSettings';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { Lock, Settings, DollarSign, Phone, Gift, LogOut } from 'lucide-react';

const AdminLogin = ({ onLogin }: { onLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }> }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await onLogin(email, password);
    
    if (result.success) {
      toast.success('Login realizado com sucesso!');
    } else {
      toast.error(result.error || 'Erro no login');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle>Painel Administrativo</CardTitle>
          <CardDescription>
            Acesso restrito para administradores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@quantumplay.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Entrando...' : 'Entrar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

const AdminPanel = ({ onLogout }: { onLogout: () => void }) => {
  const { settings, updateSetting, loading } = useSettings();
  const [formData, setFormData] = useState(settings);

  useEffect(() => {
    setFormData(settings);
  }, [settings]);

  const handleSave = async (key: keyof typeof settings) => {
    const result = await updateSetting(key, formData[key]);
    if (result.success) {
      toast.success('Configuração atualizada com sucesso!');
    } else {
      toast.error(result.error || 'Erro ao atualizar configuração');
    }
  };

  const handlePromotionToggle = async (checked: boolean) => {
    const newValue = checked ? 'true' : 'false';
    setFormData(prev => ({ ...prev, promotion_active: newValue }));
    const result = await updateSetting('promotion_active', newValue);
    if (result.success) {
      toast.success('Promoção ' + (checked ? 'ativada' : 'desativada') + ' com sucesso!');
    } else {
      toast.error(result.error || 'Erro ao atualizar promoção');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Carregando configurações...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Painel Administrativo</h1>
              <p className="text-sm text-muted-foreground">Quantum Play</p>
            </div>
          </div>
          <Button variant="outline" onClick={onLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* WhatsApp Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                WhatsApp
              </CardTitle>
              <CardDescription>
                Configure o número do WhatsApp para atendimento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">Número do WhatsApp</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp_number}
                  onChange={(e) => setFormData(prev => ({ ...prev, whatsapp_number: e.target.value }))}
                  placeholder="5521935009521"
                />
              </div>
              <Button onClick={() => handleSave('whatsapp_number')}>
                Salvar WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Pricing Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Preços
              </CardTitle>
              <CardDescription>
                Configure os preços dos planos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthly_price">Mensal (R$)</Label>
                  <Input
                    id="monthly_price"
                    value={formData.monthly_price}
                    onChange={(e) => setFormData(prev => ({ ...prev, monthly_price: e.target.value }))}
                    placeholder="29.90"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quarterly_price">Trimestral (R$)</Label>
                  <Input
                    id="quarterly_price"
                    value={formData.quarterly_price}
                    onChange={(e) => setFormData(prev => ({ ...prev, quarterly_price: e.target.value }))}
                    placeholder="79.90"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="annual_price">Anual (R$)</Label>
                  <Input
                    id="annual_price"
                    value={formData.annual_price}
                    onChange={(e) => setFormData(prev => ({ ...prev, annual_price: e.target.value }))}
                    placeholder="299.90"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="trial_hours">Horas de Teste</Label>
                  <Input
                    id="trial_hours"
                    value={formData.trial_hours}
                    onChange={(e) => setFormData(prev => ({ ...prev, trial_hours: e.target.value }))}
                    placeholder="4"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => handleSave('monthly_price')}>
                  Salvar Mensal
                </Button>
                <Button onClick={() => handleSave('quarterly_price')}>
                  Salvar Trimestral
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => handleSave('annual_price')}>
                  Salvar Anual
                </Button>
                <Button onClick={() => handleSave('trial_hours')}>
                  Salvar Teste
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Promotion Configuration */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Promoções
              </CardTitle>
              <CardDescription>
                Configure promoções e descontos especiais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  checked={formData.promotion_active === 'true'}
                  onCheckedChange={handlePromotionToggle}
                />
                <Label>Ativar Promoção</Label>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="promotion_discount">Desconto (%)</Label>
                  <Input
                    id="promotion_discount"
                    value={formData.promotion_discount}
                    onChange={(e) => setFormData(prev => ({ ...prev, promotion_discount: e.target.value }))}
                    placeholder="0"
                    type="number"
                    min="0"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="promotion_text">Texto da Promoção</Label>
                  <Input
                    id="promotion_text"
                    value={formData.promotion_text}
                    onChange={(e) => setFormData(prev => ({ ...prev, promotion_text: e.target.value }))}
                    placeholder="Ex: Oferta especial por tempo limitado!"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => handleSave('promotion_discount')}>
                  Salvar Desconto
                </Button>
                <Button onClick={() => handleSave('promotion_text')}>
                  Salvar Texto
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

const Admin = () => {
  const { isAdmin, loading, login, logout } = useAdminAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return <AdminLogin onLogin={login} />;
  }

  return <AdminPanel onLogout={logout} />;
};

export default Admin;