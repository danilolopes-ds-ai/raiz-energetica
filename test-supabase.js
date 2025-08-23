import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gigaqpzhaoiasxsdeyfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ2FxcHpoYW9pYXN4c2RleWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODA0NTAsImV4cCI6MjA2NjU1NjQ1MH0.dH-osTBJ6zQiR6sFMIyxqtULv-AyJ6WPswvWJIQnRAw';

async function testSupabase() {
  try {
    console.log('🔗 Testando conexão com Supabase...');
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    // Teste 1: Verificar se consegue conectar
    console.log('📡 Cliente Supabase criado com sucesso');
    
    // Teste 2: Verificar se a tabela posts existe
    console.log('🔍 Verificando se a tabela "posts" existe...');
    
    const { data, error, count } = await supabase
      .from('posts')
      .select('*', { count: 'exact' });
    
    if (error) {
      console.error('❌ Erro ao acessar tabela posts:', error.message);
      console.error('🔴 Detalhes do erro:', error);
      
      // Vamos ver que tabelas existem
      console.log('🔍 Tentando listar tabelas disponíveis...');
      
      // Usando uma query SQL para listar tabelas
      const { data: tables, error: tablesError } = await supabase
        .rpc('get_schema_tables');
        
      if (tablesError) {
        console.log('⚠️  Não foi possível listar tabelas:', tablesError.message);
      } else {
        console.log('📋 Tabelas encontradas:', tables);
      }
      
    } else {
      console.log('✅ Tabela posts encontrada!');
      console.log(`📊 Total de posts: ${count}`);
      console.log('📝 Posts encontrados:', data);
    }
    
  } catch (error) {
    console.error('💥 Erro crítico:', error);
  }
}

testSupabase();
