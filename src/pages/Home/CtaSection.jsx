import React from 'react';
import { motion } from 'framer-motion';
import AppButton from '@/components/atoms/AppButton';
import Text from '@/components/atoms/Text';

const CtaSection = ({ onButtonClick }) => {
  return (
    <section id="cta-final" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl shadow-lg p-8 sm:p-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          <Text as="h2" variant="h2" className="mb-4">
            <span className="block sm:inline mb-2 sm:mb-0">🌿</span>
            <span className="block sm:inline"> A reequilíbrio Começa</span>
            <span className="block sm:inline"> Quando Você</span>
            <span className="block sm:inline"> <span className="text-gradient">Decide Ouvir</span></span>
          </Text>
          <div className="max-w-2xl mx-auto text-gray-600">
            <Text as="p" className="mb-4">
              Não é sobre pressa. É sobre escutar o que sua energia está tentando te mostrar.
            </Text>
            <Text as="p" className="mb-8">
              Você já tentou caminhos externos.
              <br />
              Talvez agora seja a hora de voltar para a raiz.
            </Text>
          </div>
          </motion.div>
          <AppButton 
            as="button"
            onClick={onButtonClick}
            variant="primary"
            size="lg"
          >
            🗓️ Agendar Sessão Agora
          </AppButton>
          <Text as="p" className="text-sm text-gray-500 mt-4">
            Sessão totalmente online, segura e personalizada para você. Comece por onde faz sentido.
          </Text>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
