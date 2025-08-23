import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const isDevMode = import.meta.env.VITE_DEV_MODE === 'true';
const supabaseEnabled = import.meta.env.VITE_SUPABASE_ENABLED !== 'false';

// Mock Supabase client para desenvolvimento
const mockSupabase = {
  auth: {
    signUp: () => Promise.resolve({ user: null, error: { message: 'Modo desenvolvimento: Supabase desabilitado' } }),
    signInWithPassword: () => Promise.resolve({ user: null, error: { message: 'Modo desenvolvimento: Supabase desabilitado' } }),
    signOut: () => Promise.resolve({ error: null }),
    getUser: () => Promise.resolve({ user: null, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: () => ({
    select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: null, error: { message: 'Modo desenvolvimento: Supabase desabilitado' } }) }) }),
    insert: () => Promise.resolve({ data: null, error: { message: 'Modo desenvolvimento: Supabase desabilitado' } }),
    update: () => ({ eq: () => Promise.resolve({ data: null, error: { message: 'Modo desenvolvimento: Supabase desabilitado' } }) }),
    delete: () => ({ eq: () => Promise.resolve({ data: null, error: { message: 'Modo desenvolvimento: Supabase desabilitado' } }) })
  })
};

let supabaseInstance;

// Validação das variáveis de ambiente
if (!supabaseEnabled || isDevMode) {
  console.warn('ℹ️ MODO DESENVOLVIMENTO: Supabase desabilitado para testes locais');
  supabaseInstance = mockSupabase;
} else if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://example.supabase.co') {
  console.error('❌ ERRO: Variáveis de ambiente Supabase não configuradas. Verifique VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY');
  supabaseInstance = mockSupabase;
} else {
  try {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
    console.log('✅ Supabase conectado com sucesso');
  } catch (e) {
    console.error("❌ ERRO CRÍTICO: Falha ao inicializar o cliente Supabase. Verifique as chaves de API e a URL.", e);
    supabaseInstance = mockSupabase;
  }
}

export const supabase = supabaseInstance;