import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';

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
    <section className="relative bg-gradient-to-br from-slate-50 via-teal-50/20 to-slate-50 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <img 
                src="/images/services/logo-raizenergetica.webp" 
                alt="Raiz Energética" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 px-4 py-2 backdrop-blur-sm border border-teal-500/20">
                <ShieldCheck className="h-4 w-4 text-teal-600" />
                <span className="text-sm font-semibold text-teal-700">Limpeza Energética Profunda</span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-tight">
              Liberte-se das <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Energias Negativas</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Remova bloqueios energéticos, recupere sua vitalidade e clareza mental. 
              <span className="font-semibold text-teal-700"> Resultados em até 24h, no conforto da sua casa.</span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg shadow-teal-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/40 rounded-full text-base sm:text-lg px-8 py-6"
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Renovar Minha Energia Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 transition-all duration-300 hover:scale-105 rounded-full text-base sm:text-lg px-8 py-6"
                onClick={() => document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Como Funciona
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


