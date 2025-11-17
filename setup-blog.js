import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🚀 CONFIGURANDO BLOG - ESTRUTURA COMPLETA\n');

async function setupBlog() {
  try {
    // Teste 1: Verificar tabela posts
    console.log('📋 Passo 1: Verificando tabela posts...');
    const { data: posts, error: postsError } = await supabase
      .from('posts')
      .select('*')
      .limit(1);

    if (postsError) {
      console.log('❌ Tabela posts não existe');
      console.log('\n⚠️  AÇÃO NECESSÁRIA:');
      console.log('1. Acesse: https://supabase.com/dashboard/project/dzaarqxffsromlbndeme/editor');
      console.log('2. Clique em "SQL Editor" no menu lateral');
      console.log('3. Clique em "+ New Query"');
      console.log('4. Cole o conteúdo do arquivo: create-posts-table.sql');
      console.log('5. Clique em "Run" (ou pressione Ctrl+Enter)\n');
    } else {
      console.log('✅ Tabela posts existe!');
      console.log(`   Posts encontrados: ${posts?.length || 0}\n`);
    }

    // Teste 2: Verificar bucket blog-images
    console.log('🗂️  Passo 2: Verificando bucket blog-images...');
    const { data: buckets, error: bucketsError } = await supabase
      .storage
      .listBuckets();

    if (bucketsError) {
      console.log('❌ Erro ao verificar buckets:', bucketsError.message);
    } else {
      const blogImagesBucket = buckets.find(b => b.name === 'blog-images');
      
      if (blogImagesBucket) {
        console.log('✅ Bucket blog-images existe!');
        console.log(`   Status: ${blogImagesBucket.public ? 'Público' : 'Privado'}\n`);
      } else {
        console.log('❌ Bucket blog-images não existe');
        console.log('\n⚠️  AÇÃO NECESSÁRIA:');
        console.log('1. Acesse: https://supabase.com/dashboard/project/dzaarqxffsromlbndeme/storage/buckets');
        console.log('2. Clique em "New bucket"');
        console.log('3. Preencha:');
        console.log('   - Name: blog-images');
        console.log('   - Public bucket: ✅ (marcar)');
        console.log('   - File size limit: 5MB');
        console.log('4. Clique em "Create bucket"\n');
      }
    }

    // Resumo final
    console.log('━'.repeat(60));
    console.log('📊 RESUMO DA CONFIGURAÇÃO\n');
    
    const postsOk = !postsError;
    const bucketOk = !bucketsError && buckets.find(b => b.name === 'blog-images');
    
    console.log(`Tabela posts:      ${postsOk ? '✅ OK' : '❌ PENDENTE'}`);
    console.log(`Bucket blog-images: ${bucketOk ? '✅ OK' : '❌ PENDENTE'}`);
    console.log('');
    
    if (postsOk && bucketOk) {
      console.log('🎉 TUDO CONFIGURADO! O BLOG ESTÁ PRONTO PARA USO!');
      console.log('\n📝 Próximo passo:');
      console.log('   Acessar: http://localhost:5175/admin/blog/novo');
      console.log('   Para criar o primeiro post\n');
    } else {
      console.log('⚠️  PENDÊNCIAS: Siga as instruções acima para completar a configuração\n');
    }

  } catch (error) {
    console.log('\n❌ ERRO:', error.message);
  }
}

setupBlog();
