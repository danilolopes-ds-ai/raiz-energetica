import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import { CheckCircle } from 'lucide-react';

const whoIsItForItems = [
  'Você sente que já tentou de tudo, mas algo ainda bloqueia sua vida',
  'Os sintomas físicos não fazem sentido nos exames',
  'Percebe padrões familiares que se repetem geração após geração',
  'Tem filhos e sente que a energia da casa está em desequilíbrio',
  'Busca uma abordagem séria, mas com alma, para cuidar de si',
];

const WhoIsItForSection = () => {
  return (
    <section id="who-is-it-for" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Text as="h2" variant="h2" className="mb-4" dangerouslySetInnerHTML={{ __html: '🌱 Para quem é a <span className="text-gradient">Raiz Energética</span>?' }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <ul className="space-y-4">
            {whoIsItForItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mr-4 mt-1" />
                <Text as="p" className="text-gray-700 text-lg">
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
