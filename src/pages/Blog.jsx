import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogHero from '@/pages/Blog/BlogHero';
import BlogFilters from '@/pages/Blog/BlogFilters';
import FeaturedPostsSection from '@/pages/Blog/FeaturedPostsSection';
import AllPostsSection from '@/pages/Blog/AllPostsSection';
import NewsletterSection from '@/pages/Blog/NewsletterSection';
import { supabase } from '@/lib/supabase';
import { BookOpen, Heart, Lightbulb, Target, Atom, Home, Pyramid, Wand2, Gem, Sparkles, Palette, Users, Feather, Leaf, Brain, Utensils, FolderHeart as HandHeart, Users2 } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos', icon: BookOpen },
    { id: 'radiestesia-genetica', name: 'Radiestesia Genética', icon: Target },
    { id: 'instrumentos-radiestesia', name: 'Instrumentos', icon: Wand2 },
    { id: 'energia-patogenica', name: 'Energias Patogênicas', icon: Home },
    { id: 'piramides', name: 'Pirâmides', icon: Pyramid },
    { id: 'bastao-atlante', name: 'Bastão de Atlante', icon: Wand2 },
    { id: 'cristais', name: 'Cristais', icon: Gem },
    { id: 'chakras', name: 'Chakras', icon: Sparkles },
    { id: 'aura', name: 'Aura', icon: Atom },
    { id: 'cores-terapia', name: 'Cores e Terapia', icon: Palette },
    { id: 'constelacao-familiar', name: 'Constelação Familiar', icon: Users },
    { id: 'xamanismo', name: 'Xamanismo', icon: Feather },
    { id: 'ervas-medicinais', name: 'Ervas Medicinais', icon: Leaf },
    { id: 'mtc', name: 'Medicina Tradicional Chinesa', icon: Brain },
    { id: 'alimentacao-energetica', name: 'Alimentação Energética', icon: Utensils },
    { id: 'reiki', name: 'Reiki', icon: HandHeart },
    { id: 'apometria', name: 'Apometria', icon: Users2 },
    { id: 'casos-sucesso', name: 'Casos de Sucesso', icon: Heart },
    { id: 'bem-estar-holistico', name: 'Bem-estar Holístico', icon: Lightbulb },
    { id: 'dicas-saude', name: 'Dicas de Saúde', icon: Heart },
    { id: 'artigos-tecnicos', name: 'Artigos Técnicos', icon: BookOpen },
    { id: 'epigenetica', name: 'Epigenética', icon: Brain }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (!supabase) {
          console.log('Supabase não configurado, usando posts de exemplo');
          setPosts(getExamplePosts());
          return;
        }

        const { data, error } = await supabase
          .from('posts')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Erro ao buscar posts:', error);
          setError('Erro ao conectar com Supabase. Usando dados de exemplo.');
          setPosts(getExamplePosts());
        } else if (data && data.length > 0) {
          console.log('Posts carregados do Supabase:', data.length);
          setPosts(data);
        } else {
          console.log('Nenhum post encontrado no Supabase, usando exemplos');
          setPosts(getExamplePosts());
        }
      } catch (err) {
        console.error('Erro na conexão:', err);
        setError('Erro ao carregar os posts. Usando dados de exemplo.');
        setPosts(getExamplePosts());
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const getExamplePosts = () => [
    {
      id: 1,
      title: 'Influência da Radiestesia Genética nos Padrões Cerebrais',
      content: 'Estudo científico conduzido no Hospital Albert Einstein demonstra como a técnica de Radiestesia Genética pode alterar padrões de atividade cerebral, promovendo bem-estar e equilíbrio energético.',
      excerpt: 'Estudo científico conduzido no Hospital Albert Einstein demonstra através de mapeamento cerebral as evidências objetivas dos efeitos da Radiestesia Genética nos padrões neurológicos.',
      category: 'radiestesia-genetica',
      created_at: '2024-08-15T10:00:00Z',
      status: 'published',
      slug: 'influencia-radiestesia-genetica-padroes-cerebrais',
      image: '/images/services/mapeamento-cerebral-antes.webp',
      author: 'Dra. Patrícia Bortone',
      date: '2024-08-15T10:00:00Z',
      readTime: '15 min'
    },
    {
      id: 2,
      title: 'Transmissão Intergeracional de Trauma: Mecanismos Epigenéticos',
      content: 'Revisão científica abrangente sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, com implicações importantes para terapias de harmonização familiar.',
      excerpt: 'Revisão científica sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, fundamentando cientificamente as terapias de harmonização familiar.',
      category: 'epigenetica',
      created_at: '2024-08-12T16:00:00Z',
      status: 'published',
      slug: 'transmissao-intergeracional-trauma-epigenetica',
      image: '/images/services/harmonia-geracional-conflito.webp',
      author: 'Rachel Yehuda et al.',
      date: '2024-08-12T16:00:00Z',
      readTime: '25 min'
    },
    {
      id: 3,
      title: 'Energias Patogênicas: O Que São e Como Se Proteger',
      content: 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar. Este guia completo explica os tipos de energias patogênicas e métodos eficazes de proteção.',
      excerpt: 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar.',
      category: 'energia-patogenica',
      created_at: '2024-08-10T14:30:00Z',
      status: 'published',
      slug: 'energias-patogenicas-protecao',
      image: '/images/services/limpeza-energetica.webp',
      author: 'Helena Raiz',
      date: '2024-08-10T14:30:00Z',
      readTime: '8 min'
    },
    {
      id: 4,
      title: 'Cristais e Suas Propriedades Terapêuticas',
      content: 'Descubra o poder dos cristais na harmonização energética e como utilizá-los de forma eficaz em seus tratamentos e no dia a dia.',
      excerpt: 'Descubra o poder dos cristais na harmonização energética e como utilizá-los de forma eficaz.',
      category: 'cristais',
      created_at: '2024-08-08T09:15:00Z',
      status: 'published',
      slug: 'cristais-propriedades-terapeuticas',
      image: '/images/services/cristais-terapeuticos.webp',
      author: 'Helena Raiz',
      date: '2024-08-08T09:15:00Z',
      readTime: '6 min'
    },
    {
      id: 5,
      title: 'Harmonização Familiar: Quebrando Padrões Ancestrais',
      content: 'Como identificar e transformar padrões familiares limitantes que são transmitidos através das gerações, promovendo cura e libertação.',
      excerpt: 'Como identificar e transformar padrões familiares limitantes transmitidos através das gerações.',
      category: 'constelacao-familiar',
      created_at: '2024-08-05T16:45:00Z',
      status: 'published',
      slug: 'harmonizacao-familiar-padroes-ancestrais',
      image: '/images/services/harmonia-geracional-reconexao.webp',
      author: 'Helena Raiz',
      date: '2024-08-05T16:45:00Z',
      readTime: '12 min'
    }
  ];

  // Função para obter o nome da categoria
  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Geral';
  };

  // Função para formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Filtrar posts com base na busca e categoria
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Debug uma vez só
  React.useEffect(() => {
    if (posts.length > 0) {
      console.log('🔍 Debug Filtro Detalhado:', {
        totalPosts: posts.length,
        searchTerm,
        selectedCategory,
        primeiroPost: posts[0]?.title,
        primeiraCat: posts[0]?.category,
        filteredLength: filteredPosts.length
      });
    }
  }, [posts.length, searchTerm, selectedCategory, filteredPosts.length]);

  // Posts em destaque (os 3 mais recentes)
  // TEMPORÁRIO: Se não há posts filtrados mas há posts originais, usar todos os posts
  const postsToUse = filteredPosts.length === 0 && posts.length > 0 ? posts : filteredPosts;
  const featuredPosts = postsToUse.slice(0, 3);
  
  // Outros posts (excluindo os em destaque)
  const otherPosts = postsToUse.slice(3);

  // Debug states
  console.log('Estados Blog:', {
    loading,
    postsLength: posts.length,
    filteredLength: filteredPosts.length,
    postsToUseLength: postsToUse.length,
    featuredLength: featuredPosts.length,
    otherLength: otherPosts.length
  });

  // Força loading para false se posts foram carregados
  React.useEffect(() => {
    if (posts.length > 0 && loading) {
      console.log('🔧 Forçando loading = false pois posts estão carregados');
      setLoading(false);
    }
  }, [posts.length, loading]);

  // TEMPORÁRIO: Forçar loading = false para debug
  if (loading && posts.length > 0) {
    console.log('🚨 FORÇANDO loading = false');
  }
  const isActuallyLoading = loading && posts.length === 0;

  // TEMPORÁRIO: Comentar a tela de loading para debug
  /*
  if (isActuallyLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-purple-600 font-medium">Carregando posts...</p>
        </div>
      </div>
    );
  }
  */

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      
      {/* TESTE 1: Restaurar BlogHero primeiro */}
      <BlogHero />
      
      <div className="container mx-auto px-4 py-8">
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">{error}</p>
          </div>
        )}
        
        {/* TESTE 2: Tentar seção de featured posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Posts em <span className="text-green-600">Destaque</span></h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={post.image || "https://images.unsplash.com/photo-1595872018818-97555653a011"}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1595872018818-97555653a011";
                    }}
                  />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        {getCategoryName(post.category)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-green-600 transition-colors">
                      <Link to={`/blog/${post.slug || post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span>� {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>� {formatDate(post.date)}</span>
                      <span className="mx-2">•</span>
                      <span>⏱️ {post.read_time}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.slug || post.id}`}
                      className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                    >
                      Ler Artigo →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* TESTE 3: Seção de outros posts */}
        {otherPosts.length > 0 && (
          <section className="mb-12 bg-gray-50 py-12 -mx-4 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8">Todos os <span className="text-green-600">Artigos</span></h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherPosts.map((post, index) => (
                  <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <img 
                      src={post.image || "https://images.unsplash.com/photo-1595872018818-97555653a011"}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1595872018818-97555653a011";
                      }}
                    />
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {getCategoryName(post.category)}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-green-600 transition-colors">
                        <Link to={`/blog/${post.slug || post.id}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">{post.excerpt}</p>
                      <div className="text-xs text-gray-500 mb-3">
                        <span>👤 {post.author}</span> • <span>⏱️ {post.read_time}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.slug || post.id}`}
                        className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                      >
                        Ler Artigo →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Newsletter simples */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Junte-se à Nossa <span className="text-green-600">Comunidade</span></h2>
          <p className="text-gray-600 mb-6">Receba conteúdos exclusivos sobre terapias integrativas</p>
          <a 
            href="https://chat.whatsapp.com/GS5I1ycHKEVIngFawaPQHt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Entrar no Grupo do WhatsApp →
          </a>
        </section>
        
      </div>
    </div>
  );
};

export default Blog;