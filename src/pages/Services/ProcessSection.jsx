import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ProcessSection = ({ processSteps }) => {
  if (!processSteps || processSteps.length === 0) {
    return null;
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-emerald-50/30 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Efeitos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Como Sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500">
              Transformação Acontece
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Do primeiro clique até o reequilíbrio, tudo é conduzido com respeito à sua energia e ao seu tempo.
          </p>
        </motion.div>

        {/* Timeline vertical com conectores */}
        <div className="max-w-4xl mx-auto relative">
          {/* Linha vertical conectora */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-teal-300 to-emerald-200 dark:from-emerald-800 dark:via-teal-700 dark:to-emerald-800 hidden sm:block" />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    ease: 'easeOut'
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                >
                  {/* Card do passo */}
                  <div className="flex-1 group">
                    <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-emerald-100 dark:border-emerald-800 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                      {/* Efeito de brilho */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/5 to-teal-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        {/* Ícone do passo */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900 dark:to-teal-900 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Marcador central da timeline */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30 items-center justify-center z-20 border-4 border-white dark:border-slate-900">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Espaço vazio para manter layout simétrico */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Badge final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 border-2 border-emerald-200 dark:border-emerald-800 shadow-lg">
            <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold text-lg">
              Simples. Sem complicações. Com total respeito à sua energia.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;