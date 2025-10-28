import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import AppButton from '@/components/atoms/AppButton';
import { FaWhatsapp, FaInstagram, FaXTwitter, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa6';

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

            <div className="mt-8 sm:mt-10">
              <AppButton 
                asChild
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 px-6 py-3"
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

            <div className="mt-10 pt-8 border-t border-gray-200">
              <Text as="h3" className="text-xl font-bold text-gray-800 mb-3">
                Acompanhe também nas redes sociais:
              </Text>
              <Text variant="body" className="text-gray-600 mb-6">
                Conteúdos sobre autocuidado, energia e transformação.
              </Text>
              <div className="flex flex-wrap justify-center gap-3">
                <a 
                  href="https://www.instagram.com/raiz.energetica/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-500/50"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-xl relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://www.tiktok.com/@raizenergetica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-900/50"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-xl relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-black blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://www.facebook.com/raizenergetica/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-600/50"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-xl relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-blue-600 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://x.com/raizenergetica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gray-900/50"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="text-xl relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-black blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="https://www.youtube.com/@RaizEnergetica" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-600/50"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-xl relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-red-600 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
