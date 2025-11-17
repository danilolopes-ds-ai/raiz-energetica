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

async function uploadImage(imagePath) {
  try {
    // Verifica se o arquivo existe
    if (!fs.existsSync(imagePath)) {
      console.error('❌ Arquivo não encontrado:', imagePath);
      return null;
    }

    // Lê o arquivo
    const fileBuffer = fs.readFileSync(imagePath);
    const fileName = path.basename(imagePath);
    const timestamp = Date.now();
    const uniqueFileName = `${timestamp}-${fileName}`;

    console.log('📤 Fazendo upload da imagem:', fileName);

    // Faz upload para o Supabase Storage
    const { data, error } = await supabase.storage
      .from('blog-images')
      .upload(uniqueFileName, fileBuffer, {
        contentType: getContentType(fileName),
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('❌ Erro ao fazer upload:', error.message);
      return null;
    }

    // Gera URL pública
    const { data: publicUrlData } = supabase.storage
      .from('blog-images')
      .getPublicUrl(uniqueFileName);

    const publicUrl = publicUrlData.publicUrl;
    console.log('✅ Upload concluído!');
    console.log('📷 URL da imagem:', publicUrl);
    console.log('\n💡 Cole esta URL no campo "image" do seu post');

    return publicUrl;
  } catch (error) {
    console.error('❌ Erro:', error.message);
    return null;
  }
}

function getContentType(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml'
  };
  return types[ext] || 'application/octet-stream';
}

// Uso: node tools/upload-image.js caminho/para/imagem.jpg
const imagePath = process.argv[2];

if (!imagePath) {
  console.log(`
📸 Upload de Imagem para o Blog

Uso:
  node tools/upload-image.js caminho/para/imagem.jpg

Exemplo:
  node tools/upload-image.js public/images/blog/minha-imagem.jpg

Formatos suportados: JPG, PNG, GIF, WEBP, SVG
Tamanho máximo: 5MB
  `);
  process.exit(1);
}

uploadImage(imagePath);
