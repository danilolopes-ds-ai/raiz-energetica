import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Shield } from 'lucide-react';

const HeroRadiestesia = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Logo Raiz Energética - Radiestesia Genética */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <img 
                src="/images/services/logo-raiz-radgen-site.webp" 
                alt="Raiz Energética - Radiestesia Genética"
                className="w-36 h-36 md:w-44 md:h-44 object-contain"
              />
            </motion.div>

            {/* Badge de urgência + prova social */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                <Clock className="w-4 h-4" />
                <span>Apenas 8 vagas/dia</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                <CheckCircle className="w-4 h-4" />
                <span>500+ vidas transformadas</span>
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Descubra a raiz científica dos seus problemas
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              <strong className="text-slate-900">Mapeamento cerebral comprova:</strong> A RadGen identifica e trata causas energéticas que a medicina não explica - doenças sem histórico, padrões que se repetem, bloqueios invisíveis.
            </p>

            {/* Garantia visível */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-slate-50 border-2 border-slate-200 px-4 py-3 rounded-xl mb-8 shadow-sm"
            >
              <Shield className="w-5 h-5 text-[#582c81]" />
              <span className="text-sm font-semibold text-slate-900">
                Garantia de 7 dias • Reembolso total se não funcionar
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-[#582c81] hover:bg-[#6d3a9b] text-white font-bold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                <a href="#oferta">Garantir Minha Vaga Agora</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 font-semibold px-8 py-7 text-lg rounded-full transition-all">
                <a href="#ciencia">Ver Estudo Científico</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            <img 
              src="/images/services/LP-RADGEN-SITE.webp" 
              alt="Pêndulo formando coração - Radiestesia Genética"
              className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              style={{ maxHeight: '550px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroRadiestesia;
