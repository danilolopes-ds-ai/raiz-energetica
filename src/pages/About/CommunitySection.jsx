import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import AppButton from '@/components/atoms/AppButton';
import { FaWhatsapp } from 'react-icons/fa';

const CommunitySection = () => {
  return (
    <section className="bg-white pt-8 sm:pt-16 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <Text as="h2" variant="h2">
                Junte-se à Nossa <span className="text-gradient">Comunidade</span>
              </Text>
              <Text variant="lead" className="text-gray-600">
                A jornada de cura é mais potente quando compartilhada. Convido você a fazer parte do nosso grupo exclusivo no WhatsApp, um espaço seguro para trocas, aprendizados e apoio mútuo.
              </Text>
            </div>

            <div className="mt-10">
              <AppButton 
                asChild
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                <a href="https://chat.whatsapp.com/J1y3wL5dZ6K8z7X9fG0aB1" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-3 h-6 w-6" />
                  Entrar para a Comunidade
                </a>
              </AppButton>
              <Text variant="small" className="mt-4 text-gray-500 block">
                📬 Não gostou dos conteúdos? Sem problema. Saia do grupo quando quiser.
              </Text>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
