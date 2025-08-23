-- ============================================================================
-- CONFIGURAÇÃO DE SEGURANÇA - ROW LEVEL SECURITY (RLS)
-- Raiz Energética - Políticas de Acesso para Todas as Tabelas
-- Execute SEGUNDO este arquivo (após criar o schema)
-- ============================================================================

-- ============================================================================
-- HABILITAR RLS EM TODAS AS TABELAS
-- ============================================================================

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE diagnosticos ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- POLÍTICAS PARA TABELA: contacts
-- Formulário público pode inserir, apenas admin pode ler
-- ============================================================================

-- ✅ Qualquer pessoa pode INSERIR contatos (formulário público)
CREATE POLICY "Public can insert contacts" ON contacts
    FOR INSERT WITH CHECK (true);

-- ✅ Apenas usuários autenticados podem LER contatos (admin)
CREATE POLICY "Only authenticated users can read contacts" ON contacts
    FOR SELECT USING (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem ATUALIZAR contatos (admin)
CREATE POLICY "Authenticated users can update contacts" ON contacts
    FOR UPDATE USING (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem DELETAR contatos (admin)
CREATE POLICY "Authenticated users can delete contacts" ON contacts
    FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================================
-- POLÍTICAS PARA TABELA: diagnosticos
-- Apenas admin tem acesso completo
-- ============================================================================

-- ✅ Apenas usuários autenticados podem INSERIR diagnósticos
CREATE POLICY "Authenticated users can insert diagnosticos" ON diagnosticos
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem LER diagnósticos
CREATE POLICY "Only authenticated users can read diagnosticos" ON diagnosticos
    FOR SELECT USING (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem ATUALIZAR diagnósticos
CREATE POLICY "Authenticated users can update diagnosticos" ON diagnosticos
    FOR UPDATE USING (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem DELETAR diagnósticos
CREATE POLICY "Authenticated users can delete diagnosticos" ON diagnosticos
    FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================================
-- POLÍTICAS PARA TABELA: blog_posts
-- Público pode ler posts publicados, apenas admin gerencia
-- ============================================================================

-- ✅ Todos podem LER posts publicados (blog público)
CREATE POLICY "Anyone can read published posts" ON blog_posts
    FOR SELECT USING (status = 'published');

-- ✅ Apenas usuários autenticados podem INSERIR posts
CREATE POLICY "Authenticated users can insert posts" ON blog_posts
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem ATUALIZAR posts
CREATE POLICY "Authenticated users can update posts" ON blog_posts
    FOR UPDATE USING (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem DELETAR posts
CREATE POLICY "Authenticated users can delete posts" ON blog_posts
    FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================================
-- POLÍTICAS PARA TABELA: blog_categories
-- Público pode ler categorias, apenas admin gerencia
-- ============================================================================

-- ✅ Todos podem LER categorias (para mostrar no blog)
CREATE POLICY "Anyone can read categories" ON blog_categories
    FOR SELECT USING (true);

-- ✅ Apenas usuários autenticados podem INSERIR categorias
CREATE POLICY "Authenticated users can insert categories" ON blog_categories
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem ATUALIZAR categorias
CREATE POLICY "Authenticated users can update categories" ON blog_categories
    FOR UPDATE USING (auth.role() = 'authenticated');

-- ✅ Apenas usuários autenticados podem DELETAR categorias
CREATE POLICY "Authenticated users can delete categories" ON blog_categories
    FOR DELETE USING (auth.role() = 'authenticated');

-- ============================================================================
-- VERIFICAÇÃO DAS POLÍTICAS CRIADAS
-- ============================================================================

-- Consultar todas as políticas RLS criadas
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
ORDER BY tablename, policyname;

-- ============================================================================
-- RESUMO DA CONFIGURAÇÃO DE SEGURANÇA
-- ============================================================================

/*
RESUMO DAS PERMISSÕES CONFIGURADAS:

📋 CONTACTS (Formulários de Contato):
   - INSERT: 🌍 Público (qualquer visitante pode enviar)
   - SELECT/UPDATE/DELETE: 🔒 Apenas Admin

📋 DIAGNOSTICOS (Diagnósticos):
   - INSERT/SELECT/UPDATE/DELETE: 🔒 Apenas Admin

📋 BLOG_POSTS (Posts do Blog):
   - SELECT: 🌍 Público (apenas posts publicados)
   - INSERT/UPDATE/DELETE: 🔒 Apenas Admin

📋 BLOG_CATEGORIES (Categorias):
   - SELECT: 🌍 Público (para navegação)
   - INSERT/UPDATE/DELETE: 🔒 Apenas Admin

✅ Configuração completa! O banco está seguro e funcional.
*/
