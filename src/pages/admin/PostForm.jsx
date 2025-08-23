import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import Text from '@/components/atoms/Text';
import AppButton from '@/components/atoms/AppButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2 } from 'lucide-react';

// Pegando as categorias do componente Blog para manter a consistência
const categories = [
    { id: 'radiestesia-genetica', name: 'Radiestesia Genética' },
    { id: 'instrumentos-radiestesia', name: 'Instrumentos' },
    { id: 'energia-patogenica', name: 'Energias Patogênicas' },
    { id: 'piramides', name: 'Pirâmides' },
    { id: 'bastao-atlante', name: 'Bastão de Atlante' },
    { id: 'cristais', name: 'Cristais' },
    { id: 'chakras', name: 'Chakras' },
    { id: 'aura', name: 'Aura' },
    { id: 'cores-terapia', name: 'Cores e Terapia' },
    { id: 'constelacao-familiar', name: 'Constelação Familiar' },
    { id: 'xamanismo', name: 'Xamanismo' },
    { id: 'ervas-medicinais', name: 'Ervas Medicinais' },
    { id: 'mtc', name: 'Medicina Tradicional Chinesa' },
    { id: 'alimentacao-energetica', name: 'Alimentação Energética' },
    { id: 'reiki', name: 'Reiki' },
    { id: 'apometria', name: 'Apometria' },
    { id: 'casos-sucesso', name: 'Casos de Sucesso' },
    { id: 'bem-estar-holistico', name: 'Bem-estar Holístico' },
    { id: 'dicas-saude', name: 'Dicas de Saúde' },
    { id: 'artigos-tecnicos', name: 'Artigos Técnicos' }
];

const PostForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Rascunho');
  const [featured, setFeatured] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      const fetchPost = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
        if (error) {
          toast({ title: 'Erro ao carregar post', description: error.message, variant: 'destructive' });
          navigate('/admin/posts');
        } else if (data) {
          setTitle(data.title);
          setExcerpt(data.excerpt);
          setContent(data.content);
          setCategory(data.category);
          setStatus(data.status);
          setFeatured(data.featured);
          setImageUrl(data.image);
        }
        setLoading(false);
      };
      fetchPost();
    }
  }, [id, isEditing, navigate, toast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const postData = {
      title,
      excerpt,
      content,
      category,
      status,
      featured,
      image: imageUrl,
      // Adicionar outros campos como author, readTime se necessário
      
    };

    let error;
    if (isEditing) {
      const { error: updateError } = await supabase.from('posts').update(postData).match({ id });
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from('posts').insert([postData]);
      error = insertError;
    }

    if (error) {
      toast({ title: `Erro ao salvar post`, description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Sucesso!', description: `Post ${isEditing ? 'atualizado' : 'criado'} com sucesso.` });
      navigate('/admin/posts');
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="flex items-center justify-center"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Carregando...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? 'Editar Post' : 'Novo Post'}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="excerpt">Resumo (Excerpt)</Label>
            <Textarea id="excerpt" value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Conteúdo Completo</Label>
            <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={10} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="imageUrl">URL da Imagem</Label>
            <Input id="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Categoria</Label>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger><SelectValue placeholder="Selecione uma categoria" /></SelectTrigger>
                <SelectContent>
                  {categories.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select onValueChange={setStatus} value={status}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Publicado">Publicado</SelectItem>
                  <SelectItem value="Rascunho">Rascunho</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="featured" checked={featured} onCheckedChange={setFeatured} />
            <Label htmlFor="featured">Post em Destaque?</Label>
          </div>
          <div className="flex justify-end space-x-4">
            <AppButton type="button" variant="outline" onClick={() => navigate('/admin/posts')}>Cancelar</AppButton>
            <AppButton type="submit" disabled={saving}>
              {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} 
              {isEditing ? 'Salvar Alterações' : 'Criar Post'}
            </AppButton>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
