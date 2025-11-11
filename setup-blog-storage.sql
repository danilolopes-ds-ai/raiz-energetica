-- Criar bucket para imagens do blog
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images',
  true,
  5242880, -- 5MB em bytes
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- Permitir upload para usuários autenticados (admin)
CREATE POLICY "Admins podem fazer upload de imagens do blog"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'blog-images' 
  AND auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@raizenergetica.com%'
  )
);

-- Permitir leitura pública
CREATE POLICY "Imagens do blog são públicas"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'blog-images');

-- Permitir admins deletarem suas próprias imagens
CREATE POLICY "Admins podem deletar imagens do blog"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'blog-images'
  AND auth.uid() IN (
    SELECT id FROM auth.users WHERE email LIKE '%@raizenergetica.com%'
  )
);
