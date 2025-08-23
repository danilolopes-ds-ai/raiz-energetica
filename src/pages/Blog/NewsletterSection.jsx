import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackGAEvent } from '@/lib/analytics';
import { ArrowRight } from 'lucide-react';

const NewsletterSection = () => {
  const whatsappLink = "https://chat.whatsapp.com/GS5I1ycHKEVIngFawaPQHt";

  const handleWhatsappClick = () => {
    trackGAEvent('join_whatsapp_group', {
      source: 'Blog Newsletter Section',
      link_url: whatsappLink
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-center space-y-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Junte-se à Nossa <span className="text-gradient">Comunidade</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Inscreva-se em nosso grupo do Whatsapp e receba semanalmente conteúdos exclusivos sobre terapias integrativas e bem-estar holístico.
            </p>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="gradient-primary text-white hover:opacity-90 shadow-lg transform hover:-translate-y-1 transition-transform duration-300 py-6 px-8 text-lg">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleWhatsappClick}
              >
                Entrar no Grupo do WhatsApp
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-500">Não gostou dos conteúdos, sem problemas. Saia do grupo quando quiser.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;