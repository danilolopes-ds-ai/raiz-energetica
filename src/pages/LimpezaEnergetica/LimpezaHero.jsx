import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Wind } from 'lucide-react';

const LimpezaHero = ({ handlePurchaseClick, containerVariants, itemVariants, slots }) => {
  return (
    <section className="relative bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(45,212,191,0.15),rgba(6,182,212,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/30 via-cyan-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 via-teal-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <Badge className="bg-red-100 text-red-800 border-red-200 animate-pulse">
                🍃 Atendemos apenas 8 vagas por dia
              </Badge>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Renove sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">energia vital</span> e liberte-se do que te <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">sobrecarrega</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600">
              <sub className="text-sm sm:text-base font-medium">Liberte-se de pesos invisíveis, recupere sua vitalidade e clareza mental com nossa limpeza energética profunda. Realizada à distância em até 24h.</sub>
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6 sm:mt-8 md:mt-10 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button onClick={handlePurchaseClick} asChild className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 animate-pulse">
                <a href="#oferta" className="flex items-center justify-center">
                  ✨ Quero Renovar Minha Energia AGORA
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto border-slate-300 hover:bg-slate-100 font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8">
                <a href="#como-funciona" className="flex items-center justify-center">
                  <Wind className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Ver Como Funciona
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="relative mt-8 lg:mt-0">
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/services/limpeza-energetica-mobile.webp" />
              <img className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-auto object-cover max-w-md mx-auto lg:max-w-none" alt="Imagem representando limpeza energética e renovação vital" src="/images/services/limpeza-energetica.webp" />
            </picture>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-60 animate-bounce"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LimpezaHero;
