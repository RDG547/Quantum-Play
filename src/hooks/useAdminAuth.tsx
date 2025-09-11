import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    try {
      // Check admin credentials
      if (email !== 'suporte@quantumplay.com' || password !== 'Rodiguin547*#') {
        return { success: false, error: 'Credenciais inválidas' };
      }

      // Set admin session in localStorage
      localStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('admin_email', email);
      setIsAdmin(true);

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Erro no login' 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('admin_authenticated');
    localStorage.removeItem('admin_email');
    setIsAdmin(false);
  };

  const checkAuth = () => {
    const isAuthenticated = localStorage.getItem('admin_authenticated') === 'true';
    const adminEmail = localStorage.getItem('admin_email');
    
    if (isAuthenticated && adminEmail === 'suporte@quantumplay.com') {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    isAdmin,
    loading,
    login,
    logout
  };
};