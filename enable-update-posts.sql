-- Habilitar UPDATE para usuários autenticados na tabela posts

-- Remove política antiga de UPDATE se existir
DROP POLICY IF EXISTS "Usuários autenticados podem atualizar posts" ON posts;

-- Cria política para permitir UPDATE apenas para usuários autenticados
CREATE POLICY "Usuários autenticados podem atualizar posts"
ON posts FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Também garante que INSERT funcione para autenticados
DROP POLICY IF EXISTS "Usuários autenticados podem criar posts" ON posts;
CREATE POLICY "Usuários autenticados podem criar posts"
ON posts FOR INSERT
TO authenticated
WITH CHECK (true);

-- Mantém política de leitura pública para posts publicados
DROP POLICY IF EXISTS "Posts publicados são visíveis para todos" ON posts;
CREATE POLICY "Posts publicados são visíveis para todos" 
ON posts FOR SELECT
TO public
USING (status = 'published');

-- Permite que autenticados vejam todos os posts (incluindo rascunhos)
DROP POLICY IF EXISTS "Usuários autenticados veem todos os posts" ON posts;
CREATE POLICY "Usuários autenticados veem todos os posts"
ON posts FOR SELECT
TO authenticated
USING (true);
