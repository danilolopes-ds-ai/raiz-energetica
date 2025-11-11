import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import RichTextEditor from '@/components/admin/RichTextEditor';
import ImageUpload from '@/components/admin/ImageUpload';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    image_url: '',
    content: '',
    tags: '',
    status: 'draft',
  });

  // Gera slug automaticamente do título
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^\w\s-]/g, '') // Remove caracteres especiais
      .replace(/\s+/g, '-') // Substitui espaços por hífens
      .replace(/-+/g, '-') // Remove hífens duplicados
      .trim();
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async (e, status = 'draft') => {
    e.preventDefault();
    
    if (!formData.title || !formData.content) {
      alert('Título e conteúdo são obrigatórios!');
      return;
    }

    setLoading(true);

    try {
      const postData = {
        ...formData,
        status,
        author_id: user.id,
        tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : [],
      };

      const { data, error } = await supabase
        .from('posts')
        .insert([postData])
        .select()
        .single();

      if (error) throw error;

      alert(status === 'published' ? 'Post publicado com sucesso!' : 'Rascunho salvo!');
      navigate('/admin/blog/gerenciar');
    } catch (error) {
      console.error('Erro ao salvar post:', error);
      alert('Erro ao salvar post: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (preview) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Button
            onClick={() => setPreview(false)}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para edição
          </Button>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {formData.image_url && (
              <img
                src={formData.image_url}
                alt={formData.title}
                className="w-full h-96 object-cover"
              />
            )}
            
            <div className="p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {formData.title || 'Título do Post'}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {formData.description || 'Descrição do post...'}
              </p>

              {formData.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {formData.tags.split(',').map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#C19A6B]/10 text-[#C19A6B] rounded-full text-sm"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}

              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: formData.content }}
              />
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={() => navigate('/admin/blog/gerenciar')}
              variant="outline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Criar Novo Post</h1>
          </div>

          <Button
            onClick={() => setPreview(true)}
            variant="outline"
          >
            <Eye className="w-4 h-4 mr-2" />
            Visualizar
          </Button>
        </div>

        <form onSubmit={(e) => handleSubmit(e, 'draft')} className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6 space-y-6">
            {/* Título */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Título *
              </label>
              <Input
                type="text"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Digite o título do post"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL do Post (Slug)
              </label>
              <Input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="url-do-post"
              />
              <p className="text-xs text-gray-500 mt-1">
                URL: /blog/{formData.slug || 'url-do-post'}
              </p>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição (SEO)
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Breve descrição do post para SEO e compartilhamento"
                rows={3}
              />
            </div>

            {/* Imagem de capa */}
            <ImageUpload
              value={formData.image_url}
              onChange={(url) => setFormData({ ...formData, image_url: url })}
              label="Imagem de Capa"
            />

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <Input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                placeholder="Energia, Terapia, Radiestesia (separadas por vírgula)"
              />
            </div>

            {/* Editor */}
            <RichTextEditor
              content={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
            />
          </div>

          {/* Ações */}
          <div className="flex justify-end gap-4">
            <Button
              type="submit"
              variant="outline"
              disabled={loading}
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? 'Salvando...' : 'Salvar Rascunho'}
            </Button>

            <Button
              type="button"
              onClick={(e) => handleSubmit(e, 'published')}
              disabled={loading}
              className="bg-[#C19A6B] hover:bg-[#A67C52]"
            >
              {loading ? 'Publicando...' : 'Publicar Post'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
