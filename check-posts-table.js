import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gigaqpzhaoiasxsdeyfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ2FxcHpoYW9pYXN4c2RleWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODA0NTAsImV4cCI6MjA2NjU1NjQ1MH0.dH-osTBJ6zQiR6sFMIyxqtULv-AyJ6WPswvWJIQnRAw';

async function checkPostsTable() {
  console.log('🔍 Verificando estrutura da tabela posts...');
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  try {
    // Tentar inserir um post simples para ver que campos são aceitos
    const simplePost = {
      title: 'Teste de Post',
      content: 'Conteúdo de teste',
      category: 'teste'
    };

    const { data, error } = await supabase
      .from('posts')
      .insert([simplePost])
      .select();

    if (error) {
      console.error('❌ Erro ao inserir post simples:', error.message);
      console.log('🔍 Detalhes:', error);
    } else {
      console.log('✅ Post simples inserido:', data);
      
      // Agora deletar o post de teste
      if (data && data[0]) {
        await supabase.from('posts').delete().eq('id', data[0].id);
        console.log('🗑️  Post de teste removido');
      }
    }

    // Tentar buscar posts para ver a estrutura
    const { data: posts, error: fetchError } = await supabase
      .from('posts')
      .select('*')
      .limit(1);

    if (fetchError) {
      console.error('❌ Erro ao buscar posts:', fetchError);
    } else {
      console.log('📋 Estrutura da tabela (exemplo):', posts);
    }

  } catch (error) {
    console.error('💥 Erro geral:', error);
  }
}

checkPostsTable();
