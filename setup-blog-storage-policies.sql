-- SQL para configurar políticas de acesso ao bucket blog-images
-- Execute este script no SQL Editor do Supabase Dashboard

-- 1. Permitir que QUALQUER PESSOA faça upload (para teste)
CREATE POLICY "Permitir upload público em blog-images"
ON storage.objects FOR INSERT
TO public
WITH CHECK (bucket_id = 'blog-images');

-- 2. Permitir que QUALQUER PESSOA leia arquivos
CREATE POLICY "Permitir leitura pública em blog-images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- 3. Permitir que usuários autenticados deletem seus próprios arquivos
CREATE POLICY "Permitir delete autenticado em blog-images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');

-- 4. Permitir que usuários autenticados atualizem arquivos
CREATE POLICY "Permitir update autenticado em blog-images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images');
