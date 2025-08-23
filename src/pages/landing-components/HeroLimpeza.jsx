import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroLimpeza = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detecta se é mobile no carregamento e em redimensionamentos
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar no carregamento inicial
    checkIfMobile();
    
    // Adicionar listener para mudanças de tamanho
    window.addEventListener('resize', checkIfMobile);
    
    // Limpar listener ao desmontar
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  return (
    <section className="relative bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-tight">
              Sinta a Leveza de uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Energia Renovada</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
              Liberte-se de pesos invisíveis, recupere sua vitalidade e clareza mental com nossa limpeza energética profunda. Realizada à distância em até 24h.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-xs sm:text-sm md:text-base lg:text-lg px-2 py-3 sm:px-4 sm:py-3 md:px-6 lg:px-8 animate-pulse">
                <a href="#oferta" className="flex items-center justify-center">
                  QUERO RENOVAR MINHA ENERGIA
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-slate-300 hover:bg-slate-100 font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8">
                <a href="#como-funciona" className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Ver Como Funciona
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="absolute -top-3 -right-3 w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 rounded-3xl transform rotate-3 opacity-50 blur-xl"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ maxHeight: '450px' }}>
              <picture>
                <source 
                  srcSet="/images/services/limpeza-energetica.webp" 
                  media="(min-width: 768px)"
                />
                <source 
                  srcSet="/images/services/limpeza-energetica-mobile.webp"
                  media="(max-width: 767px)"
                />
                <motion.img 
                  src="/images/services/limpeza-energetica.webp" 
                  alt="Ilustração de energia renovada e limpeza espiritual" 
                  className="w-full h-auto object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{
                    maxHeight: isMobile ? '400px' : '450px',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: isMobile ? 'center' : 'center 30%'
                  }}
                />
              </picture>
              
              {/* Efeito de brilho sutil */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLimpeza;


