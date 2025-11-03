import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';
import Logo from '@/components/atoms/Logo';
import { Button } from '@/components/ui/button';

const CTAFinalRadiestesia = () => {
  const handleBooking = () => {
    window.open('https://cal.com/raiz-energetica/sessaoradgen', '_blank');
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZNMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02TTAgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
              <Logo className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Badge de urgência */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 mb-6"
          >
            <Clock className="w-5 h-5 text-white" />
            <div className="text-left">
              <p className="text-white font-bold text-sm">Limitamos a 8 atendimentos diários</p>
              <p className="text-white/90 text-xs">⚠️ Garantimos qualidade e compromisso exclusivo com seu processo!</p>
            </div>
          </motion.div>

          {/* Título */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
          >
            Liberte-se das Correntes Ancestrais
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Agende sua sessão agora e comece sua jornada de transformação profunda
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-12"
          >
            <Button
              onClick={handleBooking}
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-50 text-lg px-10 py-7 rounded-full font-bold shadow-2xl hover:shadow-amber-900/30 transform hover:scale-105 transition-all duration-300"
            >
              Agendar Minha Sessão Agora
            </Button>
          </motion.div>

          {/* Prova Social Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {/* Badge 1 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-8 h-8 text-amber-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">500+</p>
              <p className="text-white/70 text-xs text-center">vidas transformadas</p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-8 h-8 text-amber-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">10+ anos</p>
              <p className="text-white/70 text-xs text-center">de experiência</p>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-8 h-8 text-amber-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">100% Online</p>
              <p className="text-white/70 text-xs text-center">no conforto da sua casa</p>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
              <CheckCircle className="w-8 h-8 text-amber-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">60 minutos</p>
              <p className="text-white/70 text-xs text-center">de sessão ao vivo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalRadiestesia;
