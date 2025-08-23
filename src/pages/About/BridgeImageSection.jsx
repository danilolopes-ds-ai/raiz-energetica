import React from 'react';
import { motion } from 'framer-motion';

const BridgeImageSection = () => {
  return (
    <section className="bg-white pt-8 pb-8">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex justify-center"
        >
          <img 
            src="/images/services/raiz-cura.webp"
            alt="Imagem simbólica de cura e conexão com a natureza, representando a filosofia da Raiz Energética"
            className="object-cover w-full max-w-4xl h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BridgeImageSection;
