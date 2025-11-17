import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Search,
  Calendar,
  Tag
} from 'lucide-react';

const ManagePosts = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      alert('Erro ao carregar posts: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (post) => {
    try {
      const newStatus = post.status === 'published' ? 'draft' : 'published';
      
      const { error } = await supabase
        .from('posts')
        .update({ status: newStatus })
        .eq('id', post.id);

      if (error) throw error;

      setPosts(posts.map(p => 
        p.id === post.id ? { ...p, status: newStatus } : p
      ));

      alert(`Post ${newStatus === 'published' ? 'publicado' : 'despublicado'} com sucesso!`);
    } catch (error) {
      console.error('Erro ao alterar status:', error);
      alert('Erro ao alterar status: ' + error.message);
    }
  };

  const deletePost = async (postId) => {
    if (!confirm('Tem certeza que deseja deletar este post?')) return;

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      setPosts(posts.filter(p => p.id !== postId));
      alert('Post deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar post:', error);
      alert('Erro ao deletar post: ' + error.message);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C19A6B] mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gerenciar Posts</h1>
            <p className="text-gray-600 mt-1">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados'}
            </p>
          </div>
          <Button
            onClick={() => navigate('/admin/blog/novo')}
            className="bg-[#C19A6B] hover:bg-[#A67C52]"
          >
            <Plus className="w-4 h-4 mr-2" />
            Novo Post
          </Button>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtro de Status */}
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('all')}
                className={filterStatus === 'all' ? 'bg-[#C19A6B]' : ''}
              >
                Todos ({posts.length})
              </Button>
              <Button
                variant={filterStatus === 'published' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('published')}
                className={filterStatus === 'published' ? 'bg-[#C19A6B]' : ''}
              >
                Publicados ({posts.filter(p => p.status === 'published').length})
              </Button>
              <Button
                variant={filterStatus === 'draft' ? 'default' : 'outline'}
                onClick={() => setFilterStatus('draft')}
                className={filterStatus === 'draft' ? 'bg-[#C19A6B]' : ''}
              >
                Rascunhos ({posts.filter(p => p.status === 'draft').length})
              </Button>
            </div>
          </div>
        </div>

        {/* Lista de Posts */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 text-lg mb-4">
              {searchTerm ? 'Nenhum post encontrado com esses filtros' : 'Nenhum post criado ainda'}
            </p>
            <Button
              onClick={() => navigate('/admin/blog/novo')}
              className="bg-[#C19A6B] hover:bg-[#A67C52]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar Primeiro Post
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start gap-6">
                  {/* Imagem */}
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                  )}

                  {/* Conteúdo */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        {post.category && (
                          <span className="text-primary text-sm font-semibold uppercase tracking-wide mb-1 block">
                            {post.category}
                          </span>
                        )}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {post.title}
                        </h3>
                        {post.excerpt && (
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      {/* Status Badge */}
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            post.status === 'published'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                        </span>
                        {post.featured && (
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                            Destaque
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.created_at)}
                      </div>
                      {post.read_time && (
                        <div className="text-gray-500">
                          {post.read_time}
                        </div>
                      )}
                      <div className="text-gray-400">
                        /blog/{post.slug}
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/admin/blog/editar/${post.id}`)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Editar
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleStatus(post)}
                      >
                        {post.status === 'published' ? (
                          <>
                            <EyeOff className="w-4 h-4 mr-1" />
                            Despublicar
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4 mr-1" />
                            Publicar
                          </>
                        )}
                      </Button>

                      {post.status === 'published' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`/blog/${post.slug}`, '_blank')}
                        >
                          Ver no Site
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deletePost(post.id)}
                        className="text-red-600 hover:text-red-700 hover:border-red-300"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Deletar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagePosts;
