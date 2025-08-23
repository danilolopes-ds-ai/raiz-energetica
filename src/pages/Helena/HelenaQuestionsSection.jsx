import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, MessageCircle } from 'lucide-react';

const HelenaQuestionsSection = ({ questions, handleWhatsApp }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas que Helena <span className="text-gradient">Responde</span>
          </h2>
          <p className="text-xl text-gray-600">
            Helena está preparada para esclarecer todas as suas dúvidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{question}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            E muito mais! Helena está sempre aprendendo para te atender melhor.
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fazer uma Pergunta para Helena
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HelenaQuestionsSection;