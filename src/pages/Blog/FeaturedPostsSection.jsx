import React from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/molecules/BlogCard';
import Text from '@/components/atoms/Text';

const FeaturedPostsSection = ({ posts, getCategoryName, formatDate }) => {
  if (posts.length === 0) return null;

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Text as="h2" variant="h2" className="mb-4">
            Posts em <span className="text-gradient">Destaque</span>
          </Text>
          <Text variant="lead">
            Nossos artigos mais importantes e populares
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {posts.slice(0, 4).map((post, index) => (
            <BlogCard 
              key={post.id}
              post={post} 
              index={index} 
              getCategoryName={getCategoryName} 
              formatDate={formatDate}
              isFeaturedLayout={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;