import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gigaqpzhaoiasxsdeyfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ2FxcHpoYW9pYXN4c2RleWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODA0NTAsImV4cCI6MjA2NjU1NjQ1MH0.dH-osTBJ6zQiR6sFMIyxqtULv-AyJ6WPswvWJIQnRAw';

let supabaseInstance;

try {
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
} catch (e) {
  console.error("ERRO CRÍTICO: Falha ao inicializar o cliente Supabase. Verifique as chaves de API e a URL.", e);
  supabaseInstance = null;
}

export const supabase = supabaseInstance;