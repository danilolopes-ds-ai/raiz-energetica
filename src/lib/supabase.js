import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg';

let supabaseInstance;

try {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} catch (e) {
  console.error("ERRO CRÍTICO: Falha ao inicializar o cliente Supabase. Verifique as chaves de API e a URL.", e);
  supabaseInstance = null;
}

export const supabase = supabaseInstance;