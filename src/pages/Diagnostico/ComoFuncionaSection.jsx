import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Gift, UserCheck, Sparkles, Send } from 'lucide-react';

const ComoFuncionaSection = ({ containerVariants, itemVariants }) => {
  const steps = [
    { icon: Gift, title: "Solicite o Diagnóstico", desc: "Realize o pagamento com total segurança em poucos cliques." },
    { icon: UserCheck, title: "Preencha Seus Dados", desc: "Você receberá um link com um formulário rápido (nome + data de nascimento)." },
    { icon: Sparkles, title: "Análise Energética à Distância", desc: "Realizamos sua leitura energética com precisão e sigilo, sem precisar de presença física ou online." },
    { icon: Send, title: "Receba seu Mapa em até 24h", desc: "Seu diagnóstico completo chega por e-mail, com insights e um plano prático de ação." }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="como-funciona">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Como Funciona: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Clareza em 4 Etapas</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-base sm:text-lg text-slate-600">
            Um processo rápido, profundo e totalmente à distância.
          </p>
        </div>
        <motion.div 
          className="mt-10 sm:mt-12 md:mt-16 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={itemVariants} className="group">
              <Card className="h-full p-4 sm:p-6 text-center relative overflow-hidden bg-slate-50/50 border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="absolute -top-2 -right-2 text-6xl sm:text-7xl md:text-8xl font-extrabold text-slate-200/80 opacity-70 select-none group-hover:text-purple-100/50 transition-colors duration-300">
                  {i + 1}
                </div>
                <div className="relative z-10">
                  <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-purple-100 mb-3 sm:mb-4 group-hover:bg-indigo-100 transition-colors duration-300">
                    <step.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-600 group-hover:text-indigo-500 transition-colors duration-300" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
