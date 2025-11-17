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
    excerpt: '',
    image: '',
    content: '',
    category: '',
    status: 'draft',
    featured: false,
    author: 'Helena Raiz',
    read_time: '5 min',
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
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        image: formData.image,
        content: formData.content,
        category: formData.category,
        status,
        featured: formData.featured,
        author: formData.author,
        read_time: formData.read_time,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        date: new Date().toISOString(),
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
            {formData.image && (
              <img
                src={formData.image}
                alt={formData.title}
                className="w-full h-96 object-cover"
              />
            )}
            
            <div className="p-8">
              {formData.category && (
                <p className="text-primary font-semibold mb-2 uppercase tracking-wide">
                  {formData.category}
                </p>
              )}

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {formData.title || 'Título do Post'}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6">
                {formData.excerpt || 'Resumo do post...'}
              </p>

              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{formData.content}</ReactMarkdown>
              </div>
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

            {/* Resumo/Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resumo (Excerpt) *
              </label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                placeholder="Breve resumo do post (aparece na listagem e SEO)"
                rows={3}
                required
              />
            </div>

            {/* Imagem de capa */}
            <ImageUpload
              value={formData.image}
              onChange={(url) => setFormData({ ...formData, image: url })}
              label="Imagem de Capa"
            />

            {/* Categoria */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoria *
              </label>
              <Input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="relacionamento-familiar"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Exemplos: relacionamento-familiar, radiestesia-genetica, bem-estar-holistico
              </p>
            </div>

            {/* Featured e Read Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Post em Destaque
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tempo de Leitura
                </label>
                <Input
                  type="text"
                  value={formData.read_time}
                  onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                  placeholder="8 min"
                />
              </div>
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
