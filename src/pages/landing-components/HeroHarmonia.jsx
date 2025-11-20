import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroHarmonia = () => {
  return (
    <section className="relative bg-rose-50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left mb-10 lg:mb-0"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-800 tracking-tighter leading-tight">
              Ele se afastou. Mas o amor de mãe ainda pode <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">trazê-lo de volta.</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-rose-600 max-w-xl mx-auto lg:mx-0">
              Transforme conflito em reconexão com a Terapia de Harmonia Geracional.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <a href="#planos">Quero a Harmonia de Volta</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-rose-300 hover:bg-rose-100 font-semibold text-rose-800">
                <a href="#transformacao">Entender o Processo</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -top-3 -right-3 w-full h-full bg-rose-200/30 rounded-3xl transform rotate-3 opacity-50 blur-xl"></div>
            <img 
              src="/images/services/harmonia-geracional-conflito.webp" 
              alt="Mãe e filho adolescente em conflito, representando a desarmonia familiar."
              width={900}
              height={600}
              className="relative w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroHarmonia;
