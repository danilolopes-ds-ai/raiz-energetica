import React, { useState, useEffect } from 'react';
import { tracking } from '@/lib/tracking';
import BlogHero from '@/pages/Blog/BlogHero';
import BlogFilters from '@/pages/Blog/BlogFilters';
import FeaturedPostsSection from '@/pages/Blog/FeaturedPostsSection';
import AllPostsSection from '@/pages/Blog/AllPostsSection';
import NewsletterSection from '@/pages/Blog/NewsletterSection';
import Logo from '@/components/atoms/Logo';
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
    { id: 'artigos-tecnicos', name: 'Artigos Técnicos', icon: BookOpen }
  ];

  // Rastreia busca por termo
  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    tracking.search(term, 'blog');
  };

  // Rastreia filtro de categoria
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    tracking.search(category, 'blog-category');
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      const buildAdaptedPosts = (rows) => (rows || []).map(post => ({
        ...post,
        description: post.excerpt || post.description || '',
        image: post.image || post.image_url || '/images/hero-home.webp',
        readTime: post.read_time || post.readTime || '5 min',
        date: post.created_at || post.date,
      }));

      const queries = [
        () => supabase
          .from('posts')
          .select('id, title, slug, excerpt, image, content, category, created_at, author, read_time, featured')
          .eq('status', 'published')
          .order('created_at', { ascending: false }),
        () => supabase
          .from('posts')
          .select('*')
          .eq('status', 'published')
          .order('created_at', { ascending: false }),
        () => supabase
          .from('posts')
          .select('*')
          .order('created_at', { ascending: false }),
      ];

      try {
        let resolvedData = null;
        let lastError = null;

        for (const runQuery of queries) {
          const { data, error } = await runQuery();
          if (!error) {
            resolvedData = data;
            break;
          }
          lastError = error;
        }

        if (!resolvedData && lastError) {
          throw lastError;
        }

        const adaptedPosts = buildAdaptedPosts(resolvedData);
        setPosts(adaptedPosts);
      } catch (err) {
        console.error('Erro ao buscar posts:', err);
        setPosts([]);
        setError('Não foi possível sincronizar o blog agora. Exibindo conteúdo padrão.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando posts...</div>;
  }

  if (error) {
    console.warn(error);
  }

  return (
    <>
      {/* Header com Logo */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </div>

      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FeaturedPostsSection 
          posts={filteredPosts}
          getCategoryName={getCategoryName}
          formatDate={formatDate}
        />
        <AllPostsSection
          posts={filteredPosts}
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          getCategoryName={getCategoryName}
          formatDate={formatDate}
        />
      </div>
      <NewsletterSection />
    </>
  );
};

export default Blog;