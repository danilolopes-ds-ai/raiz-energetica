import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import CalEmbed from '@/components/molecules/CalEmbed';
import { Calendar, Clock, Lock, CreditCard } from 'lucide-react';

const Agendar = () => {
  return (
    <div>
      <section className="hero-pattern section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-[#2D8C5C]/10 text-[#2D8C5C] border-[#2D8C5C]/20">Agendamento Online</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">
              Agende sua <span className="text-gradient">Sessão</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o melhor dia e horário para sua sessão. Após selecionar, você será redirecionado para a página de pagamento seguro.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-6 min-h-[700px]">
                <CalEmbed calLink="raiz-energetica/sessaoradgen" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 text-center">
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <Calendar className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">1. Escolha o Horário</p>
                    <p className="text-sm text-gray-600">Selecione o melhor dia e hora para você.</p>
                  </div>
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <CreditCard className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">2. Realize o Pagamento</p>
                    <p className="text-sm text-gray-600">Você será levado para o checkout seguro.</p>
                  </div>
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <Clock className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">3. Confirmação</p>
                    <p className="text-sm text-gray-600">Receba a confirmação por e-mail.</p>
                  </div>
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <Lock className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">Processo 100% Seguro</p>
                    <p className="text-sm text-gray-600">Seus dados estão protegidos.</p>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agendar;