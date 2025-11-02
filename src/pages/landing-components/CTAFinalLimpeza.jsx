import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTAFinalLimpeza = ({ slots = 8 }) => {
  const scrollToOferta = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <img 
              src="/images/services/logo-raizenergetica.webp" 
              alt="Raiz Energética" 
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="inline-block rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 mb-6 border border-white/20">
              <div className="text-center space-y-1">
                <p className="text-sm sm:text-base font-medium text-white leading-snug">
                  Limitamos a 8 atendimentos diários
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg">⚠️</span>
                  <p className="text-sm sm:text-base font-medium text-white leading-snug">
                    Garantimos qualidade e compromisso
                  </p>
                </div>
                <p className="text-sm sm:text-base font-medium text-white leading-snug">
                  exclusivo com seu processo!
                </p>
              </div>
            </div>
            
            {/* Contador de vagas disponíveis */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-white/90 text-base font-medium">
                Apenas <span className="text-amber-300 font-bold text-2xl mx-1">{slots}</span> {slots === 1 ? 'vaga disponível' : 'vagas disponíveis'} hoje
              </p>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Chegou a Hora de Renovar <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Sua Energia</span>
            </h2>
            
            <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Não carregue mais pesos invisíveis. Liberte-se das energias negativas e sinta a leveza que você merece.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10"
            >
              <Button
                size="lg"
                onClick={scrollToOferta}
                className="group bg-white hover:bg-amber-50 text-teal-700 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full text-base md:text-lg px-8 py-6 h-auto"
              >
                Quero Minha Limpeza Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Prova Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
            >
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-8 h-8 text-amber-300 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-bold text-sm sm:text-base">500+ vidas</p>
                <p className="text-white/70 text-xs mt-1">transformadas</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-8 h-8 text-amber-300 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-bold text-sm sm:text-base">10+ anos</p>
                <p className="text-white/70 text-xs mt-1">de experiência</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-8 h-8 text-amber-300 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-bold text-sm sm:text-base">À distância</p>
                <p className="text-white/70 text-xs mt-1">no conforto de casa</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <svg className="w-8 h-8 text-amber-300 mb-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-white font-bold text-sm sm:text-base">Receba em 24h</p>
                <p className="text-white/70 text-xs mt-1">o resultado do tratamento</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalLimpeza;
