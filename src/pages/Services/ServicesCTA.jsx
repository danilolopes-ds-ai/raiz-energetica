import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import { trackGAEvent } from '@/lib/analytics';

const ServicesCTA = () => {
  const handleBookingIntent = () => {
    // Evento genérico, pois o CTA não está atrelado a um serviço específico.
    trackGAEvent('GENERIC_BOOKING_INTENT', {
      source_page: 'services_page',
      button_location: 'bottom_cta',
      button_text: 'Agendar Consulta',
    });
  };

  const handleWhatsAppClick = () => {
    trackGAEvent('WHATSAPP_CLICK', {
      button_location: 'services_page_cta',
      service_context: 'general',
    });
  };

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Efeitos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-300/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/20 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-10"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <img 
              src="/images/services/logo-raizenergetica.webp" 
              alt="Raiz Energética" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </motion.div>

          {/* Conteúdo textual */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Tudo Começa Pela{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500">
                Raiz
              </span>
            </motion.h2>
            
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Chega de apagar incêndios.
            </motion.h3>
            
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              É hora de escutar o que seu campo está tentando dizer e curar o que nunca foi acessado.
            </motion.p>
            
            <motion.p 
              className="text-xl text-slate-600 dark:text-slate-300 italic font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Com leveza. Com verdade. Com direção.
            </motion.p>
          </div>

          {/* Botões com design premium */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center pt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-base font-bold px-10 py-7 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-2xl transition-all duration-300"
              >
                <Link to="/agendar" onClick={handleBookingIntent} className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" /> Agendar Consulta
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-2 border-emerald-600 dark:border-emerald-400 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-base font-bold px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/contato" onClick={handleWhatsAppClick} className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" /> Falar com Especialista
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;