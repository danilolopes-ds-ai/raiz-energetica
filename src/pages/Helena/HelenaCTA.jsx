import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Clock, Zap, Heart } from 'lucide-react';

const HelenaCTA = ({ handleWhatsApp }) => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece Agora sua <span className="text-gradient">Conversa</span> com Helena
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helena está esperando para esclarecer suas dúvidas e ajudar você 
              a dar o primeiro passo rumo à sua transformação através da radiestesia genética.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-4 h-auto pulse-glow"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Conversar com Helena Agora
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              Disponível 24/7
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-1" />
              Resposta instantânea
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-1" />
              Atendimento humanizado
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HelenaCTA;