import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import AppButton from '@/components/atoms/AppButton';
import { CheckCircle, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Obrigado = () => {
  return (
    <div>
      <section className="hero-pattern section-padding flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-2xl"
          >
            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">Agendamento Confirmado!</Badge>
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Obrigado pelo seu <span className="text-gradient">Agendamento!</span>
            </h1>
            <p className="text-xl text-gray-600">
              Sua sessão foi confirmada com sucesso. Você está a um passo de iniciar sua jornada de transformação.
            </p>
            
            <div className="text-left bg-gray-50 p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Próximos Passos:</h2>
                <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-[#2D8C5C] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Você receberá um e-mail de confirmação do Cal.com com todos os detalhes do seu agendamento, incluindo o link para a nossa sala de videochamada.</p>
                </div>
                 <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-[#2D8C5C] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Adicione o evento ao seu calendário para não esquecer. Nos vemos em breve!</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <AppButton asChild size="lg" variant="primary">
                <Link to="/">Voltar para o Início</Link>
              </AppButton>
              <AppButton asChild size="lg" variant="secondary">
                <Link to="/contato">Fale Conosco</Link>
              </AppButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Obrigado;