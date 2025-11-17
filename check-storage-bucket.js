import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkBucket() {
  try {
    console.log('Verificando buckets existentes...');
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) {
      console.error('Erro ao listar buckets:', error);
      return;
    }

    console.log('Buckets encontrados:', buckets.map(b => b.name));
    
    const blogImagesBucket = buckets.find(b => b.name === 'blog-images');
    
    if (blogImagesBucket) {
      console.log('✅ Bucket "blog-images" já existe!');
      console.log('Configuração:', blogImagesBucket);
    } else {
      console.log('❌ Bucket "blog-images" não encontrado.');
      console.log('\nPara criar o bucket:');
      console.log('1. Acesse: https://supabase.com/dashboard/project/dzaarqxffsromlbndeme/storage/buckets');
      console.log('2. Clique em "New bucket"');
      console.log('3. Nome: blog-images');
      console.log('4. Público: Sim (public)');
      console.log('5. File size limit: 5MB');
    }
  } catch (err) {
    console.error('Erro:', err);
  }
}

checkBucket();
