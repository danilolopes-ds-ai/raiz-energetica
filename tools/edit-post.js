import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Credenciais do Supabase
const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTgxMzIsImV4cCI6MjA0NzE5NDEzMn0.iIZwPvvN_zNYWfQlpKdpTjRPq7iUIaqTCaQf0o4gV6k';

const supabase = createClient(supabaseUrl, supabaseKey);

async function editPost(slug, updates) {
  try {
    console.log('🔍 Buscando post com slug:', slug);

    // Busca o post existente
    const { data: existingPost, error: fetchError } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .single();

    if (fetchError || !existingPost) {
      console.error('❌ Post não encontrado!');
      console.log('\n💡 Posts disponíveis:');
      const { data: allPosts } = await supabase
        .from('posts')
        .select('slug, title')
        .order('created_at', { ascending: false });
      
      allPosts?.forEach(post => {
        console.log(`   - ${post.slug} (${post.title})`);
      });
      return;
    }

    console.log('✅ Post encontrado:', existingPost.title);
    console.log('\n📝 Atualizando...');

    // Atualiza o post
    const { data, error } = await supabase
      .from('posts')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('slug', slug)
      .select()
      .single();

    if (error) {
      console.error('❌ Erro ao atualizar:', error.message);
      return;
    }

    console.log('\n✅ Post atualizado com sucesso!');
    console.log('\n📋 Dados atualizados:');
    Object.keys(updates).forEach(key => {
      console.log(`   ${key}: ${updates[key]?.substring(0, 100)}${updates[key]?.length > 100 ? '...' : ''}`);
    });

    console.log('\n🌐 Visualize em:');
    console.log(`   http://localhost:5175/blog/${slug}`);
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

// Uso: node tools/edit-post.js slug campo="valor"
const args = process.argv.slice(2);

if (args.length < 2) {
  console.log(`
✏️  Editar Post do Blog

Uso:
  node tools/edit-post.js <slug> campo="valor" [campo2="valor2" ...]

Exemplos:
  # Atualizar título
  node tools/edit-post.js como-lidar-com-filho-adolescente-agressivo-rebelde title="Novo Título Aqui"

  # Atualizar imagem
  node tools/edit-post.js como-lidar-com-filho-adolescente-agressivo-rebelde image="https://dzaarqxffsromlbndeme.supabase.co/storage/v1/object/public/blog-images/1234-imagem.jpg"

  # Atualizar excerpt
  node tools/edit-post.js como-lidar-com-filho-adolescente-agressivo-rebelde excerpt="Novo resumo do artigo"

  # Atualizar categoria
  node tools/edit-post.js como-lidar-com-filho-adolescente-agressivo-rebelde category="relacionamento-familiar"

  # Atualizar múltiplos campos
  node tools/edit-post.js como-lidar-com-filho-adolescente-agressivo-rebelde title="Novo Título" featured=true

Campos disponíveis:
  - title: Título do post
  - excerpt: Resumo/descrição curta
  - content: Conteúdo em Markdown
  - image: URL da imagem de capa
  - category: Categoria do post
  - featured: true/false (destaque)
  - status: published/draft
  - author: Nome do autor
  - read_time: Tempo de leitura (ex: "8 min")

💡 Dica: Use tools/upload-image.js primeiro para fazer upload de imagens!
  `);
  process.exit(1);
}

const slug = args[0];
const updates = {};

// Parse dos argumentos
args.slice(1).forEach(arg => {
  const match = arg.match(/^(.+?)=(.+)$/);
  if (match) {
    const [, key, value] = match;
    // Remove aspas se houver
    let cleanValue = value.replace(/^["']|["']$/g, '');
    
    // Converte booleanos
    if (cleanValue === 'true') cleanValue = true;
    if (cleanValue === 'false') cleanValue = false;
    
    updates[key] = cleanValue;
  }
});

if (Object.keys(updates).length === 0) {
  console.error('❌ Nenhum campo para atualizar especificado!');
  process.exit(1);
}

editPost(slug, updates);
