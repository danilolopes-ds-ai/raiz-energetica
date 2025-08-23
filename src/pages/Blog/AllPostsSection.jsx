import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/molecules/BlogCard';
import Text from '@/components/atoms/Text';
import { trackGAEvent } from '@/lib/analytics';
import { trackEvent as trackMetaCustomEvent } from '@/lib/metaPixel';

const AllPostsSection = ({ posts, getCategoryName, formatDate }) => {
  const [inView, setInView] = useState(false);
  const timerTracked = useRef(false);

  useEffect(() => {
    if (inView && !timerTracked.current) {
      timerTracked.current = true;
      const timer = setTimeout(() => {
        trackGAEvent('BLOG_ENGAGEMENT', {
          post_title: 'Blog List General View',
          reading_depth: 'all_posts_section_view',
        });
        trackMetaCustomEvent('BlogRead', {
            post_title: 'Blog List General View',
        });
      }, 120000); // 2 minutes

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <motion.section 
      onViewportEnter={() => setInView(true)}
      className="section-padding bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Text as="h2" variant="h2" className="mb-4">
            Todos os <span className="text-gradient">Artigos</span>
          </Text>
          <Text variant="lead">
            {posts.length} artigo{posts.length !== 1 ? 's' : ''} encontrado{posts.length !== 1 ? 's' : ''}
          </Text>
        </motion.div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Nenhum artigo encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-4 p-4 bg-blue-50 rounded">
              <p>🔍 Debug: Tentando renderizar {posts.length} posts</p>
              <p>📝 Primeiro post: {posts[0]?.title}</p>
              <p>🏷️ Categoria: {posts[0]?.category}</p>
            </div>
            
            {/* Lista simples para teste */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Lista Simples (Teste):</h3>
              {posts.map((post, index) => (
                <div key={post.id} className="p-4 border rounded mb-4 bg-white">
                  <h4 className="font-bold">{post.title}</h4>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                  <p className="text-xs text-gray-500">Categoria: {post.category}</p>
                </div>
              ))}
            </div>
            
            {/* Grid original */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <BlogCard 
                  key={post.id}
                  post={post} 
                  index={index} 
                  getCategoryName={getCategoryName} 
                  formatDate={formatDate}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default AllPostsSection;