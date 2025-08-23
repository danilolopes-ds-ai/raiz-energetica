import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const BlogPostQuizCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="my-12"
    >
      <div className="bg-amber-50/50 rounded-lg p-8 text-center border border-amber-100">
        <Sparkles className="mx-auto h-10 w-10 text-amber-500 mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Quer entender a raiz energética do seu problema?</h3>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">Faça nosso quiz gratuito de 2 minutos e receba uma análise personalizada sobre seus bloqueios energéticos.</p>
        <Button asChild size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
          <Link to="/quiz">
            Fazer o Teste Agora
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default BlogPostQuizCTA;