import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      console.error("AuthContext: Cliente Supabase não está disponível. A autenticação será desabilitada.");
      setLoading(false);
      setUser(null);
      return;
    }

    let authListener = null;

    const initializeAuth = async () => {
      try {
        // Etapa 1: Obter a sessão de forma segura.
        const { data, error } = await supabase.auth.getSession();
        
        // Etapa 2: Verificar o erro ANTES de tentar acessar os dados.
        if (error) {
          throw error;
        }
        
        // Etapa 3: Definir o usuário com segurança.
        setUser(data.session?.user ?? null);

        // Etapa 4: Configurar o ouvinte para futuras mudanças de autenticação.
        const { data: listenerData } = supabase.auth.onAuthStateChange((_event, session) => {
          setUser(session?.user ?? null);
        });
        authListener = listenerData;

      } catch (error) {
        console.error("Erro ao inicializar autenticação do Supabase:", error);
        setUser(null);
      } finally {
        // Essencial: garante que o app pare de carregar e renderize a UI, não importa o que aconteça.
        setLoading(false);
      }
    };

    initializeAuth();

    // Função de limpeza para remover o ouvinte quando o componente desmontar.
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  const value = {
    user,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};