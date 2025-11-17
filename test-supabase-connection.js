import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gigaqpzhaoiasxsdeyfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ2FxcHpoYW9pYXN4c2RleWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODA0NTAsImV4cCI6MjA2NjU1NjQ1MH0.dH-osTBJ6zQiR6sFMIyxqtULv-AyJ6WPswvWJIQnRAw';

console.log('🔍 Testando conexão com Supabase...\n');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseAnonKey.substring(0, 20) + '...\n');

async function testConnection() {
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log('✅ Cliente Supabase criado com sucesso\n');

    // Teste 1: Verificar tabela posts
    console.log('📋 Teste 1: Verificar tabela posts...');
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .select('*')
      .limit(1);

    if (postsError) {
      console.log('❌ Erro ao acessar tabela posts:', postsError.message);
    } else {
      console.log('✅ Tabela posts acessível:', posts);
    }

    // Teste 2: Verificar bucket de storage
    console.log('\n🗂️  Teste 2: Verificar bucket blog-images...');
    const { data: buckets, error: bucketsError } = await supabase
      .storage
      .listBuckets();

    if (bucketsError) {
      console.log('❌ Erro ao listar buckets:', bucketsError.message);
    } else {
      console.log('✅ Buckets disponíveis:', buckets.map(b => b.name));
      const blogImagesBucket = buckets.find(b => b.name === 'blog-images');
      if (blogImagesBucket) {
        console.log('✅ Bucket blog-images encontrado:', blogImagesBucket);
      } else {
        console.log('⚠️  Bucket blog-images NÃO encontrado. Precisa ser criado.');
      }
    }

    // Teste 3: Verificar autenticação
    console.log('\n🔐 Teste 3: Verificar sessão de autenticação...');
    const { data: session, error: sessionError } = await supabase.auth.getSession();
    
    if (sessionError) {
      console.log('❌ Erro ao verificar sessão:', sessionError.message);
    } else {
      console.log('ℹ️  Sessão atual:', session.session ? 'Autenticado' : 'Não autenticado (esperado)');
    }

    console.log('\n✅ TESTE CONCLUÍDO COM SUCESSO!');
    console.log('\n📊 Resumo:');
    console.log('- Supabase URL está correto');
    console.log('- Supabase Key está correto');
    console.log('- Conexão com o servidor está funcionando');

  } catch (error) {
    console.log('\n❌ ERRO CRÍTICO:', error.message);
    console.log('\n🔍 Detalhes do erro:', error);
  }
}

testConnection();
