import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gem, ShieldCheck, Sun } from 'lucide-react';

const ComoFuncionaLimpeza = ({ containerVariants, itemVariants }) => {
  const methodElements = [
    { icon: Sparkles, title: "Gráficos de Onda de Forma", description: "Utilizamos gráficos radiestésicos específicos para transmutar energias densas com precisão." },
    { icon: Gem, title: "Cristais Programados", description: "Cristais selecionados e programados para potencializar a limpeza e criar um campo de proteção." },
    { icon: ShieldCheck, title: "Remoção de Energias", description: "Atuação direta na remoção e transmutação de energias internas e externas." },
    { icon: Sun, title: "Alinhamento dos Chakras", description: "Harmonização completa dos seus centros de energia para restaurar o fluxo vital e o equilíbrio." },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-4 sm:mb-6">
            Nossa Metodologia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Limpeza Profunda</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Combinamos técnicas poderosas para uma purificação completa e eficaz do seu campo energético
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {methodElements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 sm:p-8 bg-gradient-to-br from-white to-teal-50/30 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-200"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full">
            <Sparkles className="w-5 h-5 text-teal-600 mr-2" />
            <span className="text-sm sm:text-base font-semibold text-teal-700">
              Processo 100% à distância • Resultados em 24h
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComoFuncionaLimpeza;
