import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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
              className="flex justify-center lg:justify-start mb-8"
            >
              <img 
                src="/images/services/logo-raiz-radgen-site-semfundo.webp" 
                alt="Raiz Energética - Radiestesia Genética"
                className="w-36 h-36 md:w-44 md:h-44 object-contain"
              />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              A terapia que <span className="text-[#582c81]">redefine sua vida</span> com <span className="text-slate-900">comprovação científica</span>
            </h1>
            
            <p className="text-xl text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-3">
              E se a causa não fosse o que você pensa?
            </p>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4">
              Pode estar no DNA dos antepassados, nas paredes da sua casa,
              em objetos que você usa diariamente, ou em pessoas próximas.
            </p>

            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-2">
              A RadGen investiga todas as dimensões: visíveis e invisíveis.
            </p>

            <p className="text-lg text-[#582c81] max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
              Tratamento completo em 60 minutos.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="w-full sm:w-auto bg-[#582c81] hover:bg-[#6d3a9b] text-white font-bold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                <a href="#oferta">Quero Descobrir a Causa Raiz</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-300 hover:border-slate-400 hover:bg-slate-50 text-slate-900 font-semibold px-8 py-7 text-lg rounded-full transition-all">
                <a href="#ciencia">Como Funciona</a>
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
