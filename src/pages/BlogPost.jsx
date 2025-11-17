import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import NewsletterSection from '@/pages/Blog/NewsletterSection';
import BlogQuizBanner from '@/components/organisms/BlogQuizBanner';
import BlogPostQuizCTA from '@/components/organisms/BlogPostQuizCTA';

const RelatedPostsSection = ({ currentSlug, category, posts }) => {
    const related = posts
        .filter(p => p.tags?.includes(category) && p.slug !== currentSlug)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Artigos Relacionados</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {related.map(post => (
                        <motion.div
                            key={post.id}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <Link to={`/blog/${post.slug}`} className="block">
                                {post.image_url && (
                                    <img 
                                        src={post.image_url} 
                                        alt={post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-6">
                                    {post.tags?.[0] && (
                                        <p className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wider">
                                            {post.tags[0]}
                                        </p>
                                    )}
                                    <h3 className="font-bold text-xl mb-3 text-gray-900">{post.title}</h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPost();
    fetchAllPosts();
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Erro ao buscar post:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, slug, description, image_url, tags')
        .eq('status', 'published')
        .limit(10);

      if (error) throw error;
      setAllPosts(data || []);
    } catch (error) {
      console.error('Erro ao buscar posts relacionados:', error);
    }
  };

  const sharePost = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C19A6B] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Post não encontrado</p>
          <Button asChild>
            <Link to="/blog">Voltar para o Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <BlogQuizBanner />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para o Blog
              </Link>
            </Button>
          </div>

          <motion.article
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {post.tags?.[0] && (
              <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                {post.tags[0]}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-between text-gray-500 text-sm mb-6">
              <div className="flex flex-wrap items-center">
                <div className="flex items-center mr-6 mb-2">
                  <User className="h-4 w-4 mr-2 text-blue-500" />
                  <span>Helena</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{formatDate(post.created_at)}</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex items-center mb-2">
                    <Tag className="h-4 w-4 mr-2 text-blue-500" />
                    <span>{post.tags.join(', ')}</span>
                  </div>
                )}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={sharePost}
                className="mb-2"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>

            {post.image_url && (
              <div className="my-8 rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              {post.description && (
                <p className="text-xl font-medium text-gray-800 mb-6">
                  {post.description}
                </p>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            <BlogPostQuizCTA />
          </motion.article>
        </div>
      </div>
      
      <RelatedPostsSection 
        currentSlug={slug} 
        category={post.tags?.[0]} 
        posts={allPosts} 
      />
      <NewsletterSection />
    </motion.div>
  );
};

export default BlogPost;