import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const ServicesHero = () => {
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const stats = [
    { label: 'Clientes Transformados', value: '500+' },
    { label: 'Taxa de Satisfação', value: '98%' },
    { label: 'Anos de Experiência', value: '10+' }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Efeitos de fundo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/20 dark:bg-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/10 dark:bg-amber-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-5xl mx-auto"
        >
          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Cure com Propósito.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500">
              Comece Pela Raiz.
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Terapias energéticas para quem já tentou de tudo e sabe que agora é hora de{' '}
            <span className="font-semibold text-gray-900 dark:text-white">ir mais fundo</span>.
          </motion.p>

          {/* Estatísticas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center pt-8"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Atendimento Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Resultados Comprovados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Suporte Personalizado</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;