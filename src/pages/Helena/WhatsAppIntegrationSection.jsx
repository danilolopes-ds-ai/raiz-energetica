import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle } from 'lucide-react';

const WhatsAppIntegrationSection = ({ handleWhatsApp }) => {
  return (
    <section className="section-padding bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Disponível no <span className="text-gradient">WhatsApp</span>
              </h2>
              <p className="text-xl text-gray-600">
                Helena está integrada ao WhatsApp para oferecer a melhor experiência 
                de atendimento. Simples, rápido e eficiente.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>Acesso direto pelo seu celular</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>Histórico de conversas salvo</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>Notificações em tempo real</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>Compartilhamento de documentos</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Como começar:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-600">
                <li>Clique no botão "Falar com Helena"</li>
                <li>Você será redirecionado para o WhatsApp</li>
                <li>Envie sua primeira mensagem</li>
                <li>Helena responderá instantaneamente</li>
              </ol>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl inline-block">
              <div className="w-64 h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600">QR Code para WhatsApp</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Escaneie com seu celular
                  </p>
                </div>
              </div>
              <Button 
                onClick={handleWhatsApp}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Abrir WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppIntegrationSection;