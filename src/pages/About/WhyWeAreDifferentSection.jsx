import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Text from '@/components/atoms/Text';

const WhyWeAreDifferentSection = () => {
  const practices = [
    "Radiestesia Genética",
    "Medicina Tradicional Chinesa",
    "Cristaloterapia",
    "Chakras",
    "Linguagem e Metafísica do Corpo",
    "Orientações fisioterapêuticas para autocuidado"
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Text as="h2" variant="h2" className="mb-4">
            Um olhar que vai <span className="text-gradient">além do visível</span>
          </Text>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Sua prática terapêutica integra:
          </Text>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">{practice}</span>
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="text-center italic text-gray-600 mt-12"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Tudo isso reunido em atendimentos à distância, de forma profundamente humana, intuitiva e personalizada.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferentSection;