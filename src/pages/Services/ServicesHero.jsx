import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const ServicesHero = () => {
  return (
    <section className="hero-pattern section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto">
            Cure com Propósito. <span className="text-gradient">Comece Pela Raiz.</span>
          </h1>
          <p className="text-lg md:text-xl font-normal text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Terapias energéticas para quem já tentou de tudo e sabe que agora é hora de ir mais fundo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;