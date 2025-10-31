import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // Desabilitado temporariamente

  // Temporariamente desabilitado para debug
  useEffect(() => {
    console.log("AuthContext: Modo simplificado - Supabase desabilitado temporariamente");
    setLoading(false);
    setUser(null);
  }, []);

  const logout = async () => {
    console.log("Logout desabilitado temporariamente");
    // await supabase.auth.signOut();
  };

  const value = {
    user,
    logout,
    isAuthenticated: !!user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
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