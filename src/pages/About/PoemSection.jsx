import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';

const PoemSection = () => {
  const poemLines = [
    'Há dores que não aparecem nos exames.',
    'Há silêncios que viram sintomas.',
    'E há uma parte em nós que sabe mesmo quando',
    'a mente, ou tudo ao redor, diz o contrário.',
    '',
    'Essa parte não grita. Ela sussurra.',
    'Pede escuta.',
    'Pede presença.',
    'Pede um retorno à origem.',
    '',
    'A cura começa quando você honra o que sente',
    'e permite que a vida volte a fluir de dentro para fora.',
    'Com verdade.',
    'Com direção.',
    'Com leveza.',
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center bg-stone-50/90 backdrop-blur-sm p-8 sm:p-12 rounded-lg shadow-xl"
        >
          <Text as="h2" variant="h2" className="mb-10">
            Acreditamos na <span className="text-gradient-gold">cura pela raiz.</span>
          </Text>
          <div className="space-y-3 text-2xl md:text-3xl font-serif text-gray-700 italic text-left md:text-center">
            {poemLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.1 * index }}
              >
                {line || <br />}
              </motion.p>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default PoemSection;
