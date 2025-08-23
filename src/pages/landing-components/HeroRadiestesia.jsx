import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroRadiestesia = () => {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tighter leading-tight">
              A terapia que <span className="text-gradient-gold">redefine sua vida</span> com comprovação científica
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
              Identifique e trate informações energéticas herdadas, interferências externas e bloqueios emocionais que você não precisa mais carregar.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <a href="#oferta">Agendar meu Tratamento</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-slate-300 hover:bg-slate-100 font-semibold">
                <a href="#ciencia">Ver a comprovação</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="absolute -top-3 -right-3 w-full h-full bg-amber-200 rounded-3xl transform rotate-3 opacity-50 blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1200&auto=format&fit=crop" 
              alt="Árvore com raízes profundas e galhos que se estendem para o céu, simbolizando a ancestralidade."
              className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
              style={{ maxHeight: '450px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroRadiestesia;
