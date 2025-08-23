import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Smartphone } from 'lucide-react';

const HelenaHero = ({ handleWhatsApp }) => {
  return (
    <section className="hero-pattern section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-700 border-green-200">
                🤖 Assistente Digital Especializada
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Conheça <span className="text-gradient">Helena</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sua assistente digital especializada em radiestesia genética. 
                Tire suas dúvidas sobre nossos tratamentos 24 horas por dia, 
                7 dias por semana, diretamente no WhatsApp.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white pulse-glow"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Helena Agora
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#2D8C5C] text-[#2D8C5C] hover:bg-[#2D8C5C] hover:text-white"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Ver QR Code
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Online agora
              </div>
              <div>Resposta em segundos</div>
              <div>Gratuito</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img  
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                alt="Helena, assistente digital da Raiz Energética"
               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-sm">Disponível 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelenaHero;