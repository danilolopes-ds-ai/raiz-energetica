import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const BlogHero = () => {
  return (
    <section className="hero-pattern section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <Badge className="bg-[#2D8C5C]/10 text-[#2D8C5C] border-[#2D8C5C]/20">
            Blog Raiz Energética
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Conhecimento e <span className="text-gradient">Transformação</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artigos, casos de sucesso e dicas práticas sobre radiestesia genética, 
            bem-estar holístico e saúde natural.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;