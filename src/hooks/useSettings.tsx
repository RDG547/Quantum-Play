import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export interface AppSettings {
  whatsapp_number: string;
  monthly_price: string;
  quarterly_price: string;
  annual_price: string;
  trial_hours: string;
  promotion_active: string;
  promotion_discount: string;
  promotion_text: string;
}

export const useSettings = () => {
  const [settings, setSettings] = useState<AppSettings>({
    whatsapp_number: '5521935009521',
    monthly_price: '29.90',
    quarterly_price: '79.90',
    annual_price: '299.90',
    trial_hours: '4',
    promotion_active: 'false',
    promotion_discount: '0',
    promotion_text: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('app_settings')
        .select('key, value');

      if (error) throw error;

      const settingsObj = data.reduce((acc, item) => {
        acc[item.key as keyof AppSettings] = item.value;
        return acc;
      }, {} as AppSettings);

      setSettings(settingsObj);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error loading settings');
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: keyof AppSettings, value: string) => {
    try {
      const { error } = await supabase
        .from('app_settings')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('key', key);

      if (error) throw error;

      setSettings(prev => ({ ...prev, [key]: value }));
      return { success: true };
    } catch (err) {
      return { 
        success: false, 
        error: err instanceof Error ? err.message : 'Error updating setting' 
      };
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return {
    settings,
    loading,
    error,
    updateSetting,
    refetch: fetchSettings
  };
};