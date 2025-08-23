import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';

const AboutConclusion = () => {
  return (
    <section className="section-padding gradient-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Text as="h2" variant="h2" className="mb-6">
            Uma ponte para o seu <span className="text-gradient">bem-estar</span>
          </Text>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600">
            <p>Se você chegou até aqui, talvez sinta um chamado para olhar mais fundo.</p>
            <p>A transformação que você busca pode estar a uma decisão de distância.</p>
            <p>Seja para aliviar uma dor crônica, encontrar clareza mental ou simplesmente restaurar sua energia vital, estou aqui para guiar você.</p>
            <p className="text-xl font-semibold text-gray-800 pt-4">Vamos juntos?</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutConclusion;