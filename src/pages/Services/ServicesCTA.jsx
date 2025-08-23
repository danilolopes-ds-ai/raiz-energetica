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
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-8"
        >
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              Tudo Começa Pela <span className="text-gradient">Raiz</span>
            </motion.h2>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-gray-800 -mt-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Chega de apagar incêndios.
            </motion.h3>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              É hora de escutar o que seu campo está tentando dizer e curar o que nunca foi acessado.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed italic"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Com leveza. Com verdade. Com direção.
            </motion.p>
          </div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild 
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 text-base font-medium px-8 py-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to="/agendar" onClick={handleBookingIntent} className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" /> Agendar Consulta
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-teal-600 text-teal-600 hover:bg-teal-50 hover:text-teal-700 text-base font-medium px-8 py-6 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Link to="/contato" onClick={handleWhatsAppClick} className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" /> Falar com um Especialista Raiz
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;