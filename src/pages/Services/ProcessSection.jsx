import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = ({ processSteps }) => {
  if (!processSteps || processSteps.length === 0) {
    return null; // Não renderiza nada se não houver passos
  }

  return (

    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-teal-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6">
            <span className="inline-flex flex-col sm:flex-row items-center gap-4">
              <img src="/images/services/logo-raizenergetica.webp" alt="Logo Raiz Energética" className="w-24 h-24 sm:w-32 sm:h-32" />
              <span>Como Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Transformação Acontece</span></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Do primeiro clique até o reequilíbrio, tudo é conduzido com respeito à sua energia e ao seu tempo.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-5 sm:space-y-6 lg:space-y-7 px-2">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: Math.min(index * 0.08, 0.3), 
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true, margin: "-30px" }}
              className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-8 border border-slate-100 min-h-[180px] flex items-center"
            >
              <div className="flex flex-col sm:flex-row items-start w-full">
                <div className="flex-shrink-0 mx-auto sm:mx-0 mb-4 sm:mb-0 sm:mr-6 lg:mr-8">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-teal-50 to-emerald-100 flex items-center justify-center text-3xl sm:text-4xl">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left mt-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-tight">{step.title}</h3>
                  <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100">
            <span className="text-teal-600 font-medium">✅ Simples. Sem complicações. Com total respeito à sua energia.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;