import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg';

const supabase = createClient(supabaseUrl, supabaseKey);

console.log('📝 PUBLICANDO ARTIGO: Como Lidar com Filho Adolescente Agressivo\n');

async function publishArticle() {
  try {
    // Ler o arquivo markdown
    const content = fs.readFileSync('artigo-filho-adolescente-agressivo.md', 'utf-8');
    
    // Extrair o conteúdo (remover metadados do topo)
    const lines = content.split('\n');
    const contentStart = lines.findIndex(line => line.startsWith('## Meu Filho Adolescente'));
    const articleContent = lines.slice(contentStart).join('\n');
    
    // Dados do post
    const post = {
      title: 'Como Lidar com Filho Adolescente Agressivo e Rebelde?',
      slug: 'como-lidar-com-filho-adolescente-agressivo-rebelde',
      excerpt: 'Seu filho adolescente está agressivo e rebelde? Descubra os 5 passos comprovados para reconectar sem brigas, gritos ou culpa. A mudança começa hoje.',
      content: articleContent,
      category: 'Relacionamento Familiar',
      status: 'published',
      featured: true,
      image: '/images/hero-home.webp', // Placeholder - pode trocar depois
      author: 'Danilo Lopes',
      read_time: '12 min'
    };

    console.log('📊 Dados do artigo:');
    console.log('   Título:', post.title);
    console.log('   Slug:', post.slug);
    console.log('   Categoria:', post.category);
    console.log('   Status:', post.status);
    console.log('   Featured:', post.featured);
    console.log('   Tamanho:', articleContent.length, 'caracteres\n');

    // Verificar se já existe
    const { data: existing } = await supabase
      .from('posts')
      .select('id')
      .eq('slug', post.slug)
      .single();

    if (existing) {
      console.log('⚠️  Post já existe! Atualizando...\n');
      
      const { data, error } = await supabase
        .from('posts')
        .update(post)
        .eq('slug', post.slug)
        .select();

      if (error) {
        console.log('❌ Erro ao atualizar:', error.message);
      } else {
        console.log('✅ Post atualizado com sucesso!');
        console.log('   ID:', data[0].id);
        console.log('   URL:', `http://localhost:5175/blog/${post.slug}`);
      }
    } else {
      console.log('📤 Inserindo post no banco de dados...\n');
      
      const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .select();

      if (error) {
        console.log('❌ Erro ao publicar:', error.message);
        console.log('   Detalhes:', error);
      } else {
        console.log('✅ ARTIGO PUBLICADO COM SUCESSO!');
        console.log('   ID:', data[0].id);
        console.log('   Criado em:', data[0].created_at);
        console.log('\n🎉 Acesse o artigo em:');
        console.log('   → http://localhost:5175/blog/' + post.slug);
        console.log('   → https://raiz-energetica.vercel.app/blog/' + post.slug);
      }
    }

  } catch (error) {
    console.log('\n❌ ERRO:', error.message);
    console.log(error);
  }
}

publishArticle();
