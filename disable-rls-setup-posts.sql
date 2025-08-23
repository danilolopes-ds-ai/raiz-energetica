-- ===================================
-- CONFIGURAÇÃO COMPLETA DA TABELA POSTS
-- Execute este SQL no Dashboard do Supabase
-- ===================================

-- 1. DESATIVAR RLS DEFINITIVAMENTE
ALTER TABLE posts DISABLE ROW LEVEL SECURITY;

-- 2. REMOVER TODAS AS POLÍTICAS EXISTENTES (se houver)
DROP POLICY IF EXISTS "Posts publicados são visíveis para todos" ON posts;
DROP POLICY IF EXISTS "Usuários autenticados podem gerenciar posts" ON posts;
DROP POLICY IF EXISTS "Enable read access for all users" ON posts;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON posts;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON posts;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON posts;

-- 3. GARANTIR QUE A TABELA TENHA TODAS AS COLUNAS NECESSÁRIAS
-- (Adicionar colunas se não existirem)
ALTER TABLE posts ADD COLUMN IF NOT EXISTS excerpt TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS content TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS category TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published';
ALTER TABLE posts ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS image TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS author TEXT DEFAULT 'Helena Raiz';
ALTER TABLE posts ADD COLUMN IF NOT EXISTS slug TEXT;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS read_time TEXT DEFAULT '5 min';
ALTER TABLE posts ADD COLUMN IF NOT EXISTS date TIMESTAMPTZ DEFAULT NOW();

-- 4. LIMPAR TABELA (se quiser começar do zero)
TRUNCATE posts RESTART IDENTITY;

-- 5. INSERIR POSTS DE EXEMPLO
INSERT INTO posts (title, excerpt, content, category, status, featured, image, author, slug, read_time, date) VALUES
('Influência da Radiestesia Genética nos Padrões Cerebrais', 
 'Estudo científico conduzido no Hospital Albert Einstein demonstra através de mapeamento cerebral as evidências objetivas dos efeitos da Radiestesia Genética nos padrões neurológicos.',
 'Estudo científico conduzido no Hospital Albert Einstein demonstra como a técnica de Radiestesia Genética pode alterar padrões de atividade cerebral, promovendo bem-estar e equilíbrio energético. O mapeamento cerebral antes e depois do tratamento mostra alterações significativas nos padrões de ondas cerebrais, indicando maior equilíbrio e harmonia neurológica. Os resultados sugerem que a Radiestesia Genética pode ser uma ferramenta valiosa no tratamento de desequilíbrios energéticos e promoção do bem-estar geral.',
 'radiestesia-genetica', 
 'published',
 true,
 '/images/services/mapeamento-cerebral-antes.webp',
 'Dra. Patrícia Bortone',
 'influencia-radiestesia-genetica-padroes-cerebrais',
 '15 min',
 '2024-08-15T10:00:00Z'),

('Transmissão Intergeracional de Trauma: Mecanismos Epigenéticos',
 'Revisão científica sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, fundamentando cientificamente as terapias de harmonização familiar.',
 'Revisão científica abrangente sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, com implicações importantes para terapias de harmonização familiar. Estudos recentes demonstram que experiências traumáticas podem alterar a expressão gênica, criando marcas epigenéticas que são transmitidas para as próximas gerações. Este fenômeno explica por que padrões familiares disfuncionais podem persistir através de gerações, mesmo quando não há exposição direta ao trauma original.',
 'epigenetica', 
 'published',
 true,
 '/images/services/harmonia-geracional-conflito.webp',
 'Rachel Yehuda et al.',
 'transmissao-intergeracional-trauma-epigenetica',
 '25 min',
 '2024-08-12T16:00:00Z'),

('Energias Patogênicas: O Que São e Como Se Proteger',
 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar.',
 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar. Este guia completo explica os tipos de energias patogênicas e métodos eficazes de proteção energética. As energias patogênicas são forças negativas que podem se acumular em ambientes, objetos ou pessoas, causando desconforto, doenças ou desequilíbrios. É essencial saber como identificá-las e neutralizá-las para manter um ambiente harmonioso e saudável.',
 'energia-patogenica', 
 'published',
 false,
 '/images/services/limpeza-energetica.webp',
 'Helena Raiz',
 'energias-patogenicas-protecao',
 '8 min',
 '2024-08-10T14:30:00Z'),

('Cristais e Suas Propriedades Terapêuticas',
 'Descubra o poder dos cristais na harmonização energética e como utilizá-los de forma eficaz.',
 'Descubra o poder dos cristais na harmonização energética e como utilizá-los de forma eficaz em seus tratamentos e no dia a dia. Cada cristal possui propriedades únicas que podem auxiliar no processo de cura e equilíbrio energético. Este artigo explora as principais pedras terapêuticas, suas características e aplicações práticas.',
 'cristais', 
 'published',
 false,
 '/images/services/cristais-terapeuticos.webp',
 'Helena Raiz',
 'cristais-propriedades-terapeuticas',
 '6 min',
 '2024-08-08T09:15:00Z'),

('Harmonização Familiar: Quebrando Padrões Ancestrais',
 'Como identificar e transformar padrões familiares limitantes transmitidos através das gerações.',
 'Como identificar e transformar padrões familiares limitantes que são transmitidos através das gerações, promovendo cura e libertação. A harmonização familiar trabalha com a energia sistêmica da família, identificando e curando traumas que afetam múltiplas gerações. Este processo permite quebrar ciclos negativos e criar novos padrões de saúde e prosperidade.',
 'constelacao-familiar', 
 'published',
 false,
 '/images/services/harmonia-geracional-reconexao.webp',
 'Helena Raiz',
 'harmonizacao-familiar-padroes-ancestrais',
 '12 min',
 '2024-08-05T16:45:00Z');

-- 6. VERIFICAR RESULTADO
SELECT id, title, category, status, featured, author FROM posts ORDER BY date DESC;

-- 7. CONFIRMAR QUE RLS ESTÁ DESABILITADO
SELECT schemaname, tablename, rowsecurity FROM pg_tables WHERE tablename = 'posts';

-- ===================================
-- RESULTADO ESPERADO:
-- ✅ RLS desabilitado permanentemente
-- ✅ 5 posts inseridos
-- ✅ Acesso total para desenvolvimento
-- ✅ CMS funcionando
-- ===================================
