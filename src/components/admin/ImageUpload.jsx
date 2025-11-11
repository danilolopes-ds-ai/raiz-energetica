import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ImageUpload = ({ value, onChange, label = "Imagem Destaque" }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(value || '');

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validação de tipo
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione apenas arquivos de imagem.');
      return;
    }

    // Validação de tamanho (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('A imagem deve ter no máximo 5MB.');
      return;
    }

    setUploading(true);

    try {
      // Gerar nome único para o arquivo
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `posts/${fileName}`;

      // Upload para Supabase Storage
      const { data, error } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      // Obter URL pública
      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setPreview(publicUrl);
      onChange(publicUrl);
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      alert('Erro ao fazer upload da imagem. Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview('');
    onChange('');
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>

      {preview ? (
        <div className="relative group">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleRemove}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="w-4 h-4 mr-1" />
            Remover
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#2D8C5C] transition-colors">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={uploading}
            className="hidden"
            id="image-upload"
          />
          <label 
            htmlFor="image-upload" 
            className="cursor-pointer flex flex-col items-center space-y-2"
          >
            {uploading ? (
              <>
                <Loader2 className="w-12 h-12 text-[#2D8C5C] animate-spin" />
                <p className="text-sm text-gray-600">Fazendo upload...</p>
              </>
            ) : (
              <>
                <ImageIcon className="w-12 h-12 text-gray-400" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-700">
                    Clique para fazer upload
                  </p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, WebP até 5MB
                  </p>
                </div>
                <Button type="button" size="sm" variant="outline" className="mt-2">
                  <Upload className="w-4 h-4 mr-2" />
                  Escolher Arquivo
                </Button>
              </>
            )}
          </label>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
