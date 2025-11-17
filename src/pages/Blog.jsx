import React, { useState, useEffect } from 'react';
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
    { id: 'artigos-tecnicos', name: 'Artigos Técnicos', icon: BookOpen }
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase
          .from('posts')
          .select('id, title, slug, description, image_url, content, tags, created_at, author_id')
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }
        // Adapta estrutura para compatibilidade com componentes existentes
        const adaptedPosts = (data || []).map(post => ({
          ...post,
          image: post.image_url,
          category: post.tags?.[0] || 'geral',
          author: 'Helena'
        }));
        setPosts(adaptedPosts);
      } catch (err) {
        setError('Não foi possível carregar os posts. Tente novamente mais tarde.');
        console.error('Erro ao buscar posts:', err);
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

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando posts...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <>
      <BlogHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BlogFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <FeaturedPostsSection posts={filteredPosts} />
        <AllPostsSection
          posts={filteredPosts}
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      </div>
      <NewsletterSection />
    </>
  );
};

export default Blog;