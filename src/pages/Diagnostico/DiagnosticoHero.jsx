import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, FileText } from 'lucide-react';

const DiagnosticoHero = ({ handleCTAClick, containerVariants, itemVariants, slots }) => {
  return (
    <section className="relative bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.15),rgba(79,70,229,0.1),rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 via-indigo-200/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl"></div>
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
                🔥 Apenas {slots} vagas disponíveis hoje
              </Badge>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Descubra em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">24h</span> o que está travando sua vida e como <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">começar a destravar</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-600">
              <sub className="text-sm sm:text-base font-medium">Um diagnóstico energético claro, direto no seu e-mail. Feito à distância, com precisão e sensibilidade.</sub>
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6 sm:mt-8 md:mt-10 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button onClick={handleCTAClick} asChild className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 animate-pulse">
                <a href="#oferta" className="flex items-center justify-center">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  🔥 Quero Descobrir Minha Raiz AGORA
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto border-slate-300 hover:bg-slate-100 font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8">
                <a href="#como-funciona" className="flex items-center justify-center">
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Ver Como Funciona
                </a>
              </Button>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="relative mt-8 lg:mt-0">
            <picture>
              <source media="(max-width: 767px)" srcSet="/images/services/diagnostico-card-mobile.webp" />
              <img className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl w-full h-auto object-cover max-w-md mx-auto lg:max-w-none" alt="Imagem abstrata simbolizando a descoberta da causa raiz de bloqueios energéticos" src="/images/services/diagnostico-card.webp" />
            </picture>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiagnosticoHero;
