-- Ajustar política da tabela posts para permitir inserção pública (temporário para teste)

-- Remover política antiga que bloqueia
DROP POLICY IF EXISTS "Usuários autenticados podem gerenciar posts" ON posts;

-- Criar nova política que permite inserção pública
CREATE POLICY "Permitir inserção pública temporária"
ON posts FOR INSERT
TO public
WITH CHECK (true);

-- Manter política de leitura
DROP POLICY IF EXISTS "Posts publicados são visíveis para todos" ON posts;
CREATE POLICY "Posts publicados são visíveis para todos" 
ON posts FOR SELECT
TO public
USING (status = 'published');
