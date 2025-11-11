-- SQL para criar a tabela posts no Supabase
-- Execute este script no SQL Editor do Supabase Dashboard

CREATE TABLE IF NOT EXISTS posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'published',
  featured BOOLEAN DEFAULT false,
  image TEXT,
  author TEXT DEFAULT 'Helena Raiz',
  slug TEXT UNIQUE,
  read_time TEXT DEFAULT '5 min',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  date TIMESTAMPTZ DEFAULT NOW()
);

-- Adicionar alguns posts de exemplo
INSERT INTO posts (title, excerpt, content, category, status, featured, image, author, slug, read_time, date) VALUES
(
  'Influência da Radiestesia Genética nos Padrões Cerebrais',
  'Estudos reconhecidos pela ABRADGEN (Associação Brasileira de Radiestesia Genética) demonstram através de mapeamento cerebral as evidências objetivas dos efeitos da Radiestesia Genética nos padrões neurológicos.',
  'Estudos reconhecidos pela ABRADGEN demonstram como a técnica de Radiestesia Genética pode alterar padrões de atividade cerebral, promovendo bem-estar e equilíbrio energético.',
  'radiestesia-genetica',
  'published',
  true,
  '/images/services/mapeamento-cerebral-antes.webp',
  'Dra. Patrícia Bortone',
  'influencia-radiestesia-genetica-padroes-cerebrais',
  '15 min',
  '2024-08-15T10:00:00Z'
),
(
  'Transmissão Intergeracional de Trauma: Mecanismos Epigenéticos',
  'Revisão científica sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, fundamentando cientificamente as terapias de harmonização familiar.',
  'Revisão científica abrangente sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, com implicações importantes para terapias de harmonização familiar.',
  'epigenetica',
  'published',
  true,
  '/images/services/harmonia-geracional-conflito.webp',
  'Rachel Yehuda et al.',
  'transmissao-intergeracional-trauma-epigenetica',
  '25 min',
  '2024-08-12T16:00:00Z'
),
(
  'Energias Patogênicas: O Que São e Como Se Proteger',
  'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar.',
  'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar. Este guia completo explica os tipos de energias patogênicas e métodos eficazes de proteção.',
  'energia-patogenica',
  'published',
  false,
  '/images/services/limpeza-energetica.webp',
  'Helena Raiz',
  'energias-patogenicas-protecao',
  '8 min',
  '2024-08-10T14:30:00Z'
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura de posts publicados
CREATE POLICY "Posts publicados são visíveis para todos" ON posts
  FOR SELECT USING (status = 'published');

-- Política para permitir que usuários autenticados gerenciem posts
CREATE POLICY "Usuários autenticados podem gerenciar posts" ON posts
  FOR ALL USING (auth.uid() IS NOT NULL);
