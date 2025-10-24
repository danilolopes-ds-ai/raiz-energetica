import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NewsletterSection from '@/pages/Blog/NewsletterSection';
import BlogQuizBanner from '@/components/organisms/BlogQuizBanner';
import BlogPostQuizCTA from '@/components/organisms/BlogPostQuizCTA';

const RelatedPostsSection = ({ currentPostId, posts }) => {
    const postCategory = posts.find(post => post.id.toString() === currentPostId)?.category;
    const related = posts
        .filter(p => p.category === postCategory && p.id.toString() !== currentPostId)
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
                            <Link to={`/blog/${post.id}`} className="block p-6">
                                <p className="text-sm text-blue-600 font-semibold mb-2 uppercase tracking-wider">{post.category}</p>
                                <h3 className="font-bold text-xl mb-3 text-gray-900">{post.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedPosts = localStorage.getItem('blogPostsRaizEnergetica');
    if (savedPosts) {
      const posts = JSON.parse(savedPosts);
      const currentPost = posts.find(p => p.id.toString() === postId);
      setPost(currentPost);
      setAllPosts(posts);
    }
  }, [postId]);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
            <p className="text-xl text-gray-600">Carregando artigo...</p>
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
            <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-gray-500 text-sm mb-6">
              <div className="flex items-center mr-6 mb-2">
                <User className="h-4 w-4 mr-2 text-blue-500" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-6 mb-2">
                <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-2 text-blue-500" />
                <span>Leitura de {post.readTime}</span>
              </div>
            </div>

            <div className="my-8 rounded-lg overflow-hidden shadow-2xl aspect-w-16 aspect-h-9">
              <img  alt={post.title} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl font-medium text-gray-800">{post.excerpt}</p>
              <p>Este é o corpo do artigo. Aqui viria o conteúdo detalhado sobre "{post.title}". Como esta é uma página padrão, o conteúdo completo seria gerenciado através de um CMS (Sistema de Gerenciamento de Conteúdo).</p>
              <p>A integração com um CMS permitiria que você escrevesse e editasse seus artigos em um painel de administração, e as alterações seriam refletidas automaticamente aqui. Você poderia adicionar parágrafos, imagens, vídeos, listas e muito mais, de forma simples e intuitiva.</p>
              <h3 className="font-bold text-2xl mt-8 mb-4 text-gray-800">A Profundidade do Assunto</h3>
              <p>Imagine explorar a fundo os conceitos da radiestesia, compartilhar novas descobertas, detalhar casos de sucesso com depoimentos e fotos, e oferecer guias práticos para seus leitores. Tudo isso seria possível com a implementação do CMS que você solicitou anteriormente.</p>
              <p>Por enquanto, esta página serve como o "molde" para seus futuros artigos. O próximo passo, após a sua aprovação, seria conectar esta estrutura a um banco de dados (como o Supabase) para que o conteúdo se torne dinâmico e gerenciável por você.</p>
            </div>
            
            <BlogPostQuizCTA />
          </motion.article>
        </div>
      </div>
      
      <RelatedPostsSection currentPostId={postId} posts={allPosts} />
      <NewsletterSection />
    </motion.div>
  );
};

export default BlogPost;