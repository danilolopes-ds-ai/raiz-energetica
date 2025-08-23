import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Zap, Users, BrainCircuit, Clock, Hand as HeartHand } from 'lucide-react';

const PainPointsLimpeza = ({ containerVariants, itemVariants }) => {
  const signs = [
    { icon: Wind, text: "Cansaço extremo e sem motivo aparente" },
    { icon: Zap, text: "Pensamentos negativos e repetitivos" },
    { icon: Users, text: "Dificuldade e conflitos nos relacionamentos" },
    { icon: BrainCircuit, text: "Falta de clareza mental e confusão" },
    { icon: Clock, text: "Sensação de estagnação e tudo parece dar errado" },
    { icon: HeartHand, text: "Irritabilidade e explosões emocionais" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
            Você tem sentido alguns desses <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">sinais</span>?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Esses são indicadores de que sua energia precisa de uma limpeza profunda
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {signs.map((sign, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-200"
            >
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:from-teal-200 group-hover:to-cyan-200 transition-all duration-300">
                  <sign.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">{sign.text}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-semibold">
            Se você identificou <span className="text-teal-600 font-bold">3 ou mais sinais</span>, sua energia precisa de uma renovação profunda
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsLimpeza;
