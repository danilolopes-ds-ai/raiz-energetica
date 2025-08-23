import React from 'react';
import { motion } from 'framer-motion';

const AboutFinalWords = () => {
  return (
    <section className="section-padding bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-400">
            A Raiz Energética não é apenas uma clínica. É uma revolução na forma como compreendemos e tratamos os desequilíbrios energéticos.
          </h3>
          <p className="text-lg text-gray-300 italic">
            Descubra o que está na raiz dos seus desafios e transforme sua vida de forma definitiva.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFinalWords;