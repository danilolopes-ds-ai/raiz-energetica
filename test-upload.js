import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('🔍 Teste de Upload no Bucket blog-images\n');

async function testUpload() {
  try {
    // Criar um arquivo de teste
    const testFile = new File(['Hello World'], 'test.txt', { type: 'text/plain' });
    
    console.log('📤 Tentando upload de arquivo de teste...');
    
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload('test/' + Date.now() + '.txt', testFile, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.log('❌ Erro no upload:', error.message);
      console.log('   Código:', error.statusCode);
      console.log('   Detalhes:', error);
    } else {
      console.log('✅ Upload realizado com sucesso!');
      console.log('   Path:', data.path);
      
      // Tentar obter URL pública
      const { data: publicUrlData } = supabase.storage
        .from('blog-images')
        .getPublicUrl(data.path);
      
      console.log('   URL pública:', publicUrlData.publicUrl);
      
      // Deletar arquivo de teste
      await supabase.storage.from('blog-images').remove([data.path]);
      console.log('   ✅ Arquivo de teste removido\n');
    }

  } catch (err) {
    console.log('❌ Erro crítico:', err.message);
  }
}

testUpload();
