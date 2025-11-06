import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, Zap } from 'lucide-react';
import Logo from '@/components/atoms/Logo';
import { Button } from '@/components/ui/button';

const CTAFinalRadiestesia = () => {
  const handleBooking = () => {
    window.open('https://cal.com/raiz-energetica/sessaoradgen', '_blank');
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-[#582c81] via-[#4c1d95] to-[#3b0764]">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZNMTggMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02TTAgMThjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZtMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 shadow-xl shadow-purple-900/30">
              <Logo className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Badge de ÚLTIMA urgência */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-red-500/90 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-red-300 mb-8 shadow-2xl animate-pulse"
          >
            <AlertCircle className="w-6 h-6 text-white" />
            <div className="text-left">
              <p className="text-white font-extrabold text-lg">⚠️ ÚLTIMA CHAMADA</p>
              <p className="text-white/90 text-sm">Apenas 3 vagas restantes hoje • Próxima disponibilidade em 7 dias</p>
            </div>
          </motion.div>

          {/* Título com urgência */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Não deixe mais um dia passar carregando o que não é seu
          </motion.h2>

          {/* Razões específicas para agir AGORA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10 shadow-2xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Por que agendar HOJE:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Cada dia conta</p>
                  <p className="text-white/80 text-sm">Padrões se fortalecem com o tempo. Quanto antes tratar, mais rápida a transformação.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Vagas esgotam rápido</p>
                  <p className="text-white/80 text-sm">Limitamos a 8 sessões/dia. Próxima disponibilidade pode ser daqui 1 semana.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Oferta exclusiva</p>
                  <p className="text-white/80 text-sm">30% OFF + Bônus de R$ 349,90 válidos apenas para novos clientes hoje.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold">Risco zero</p>
                  <p className="text-white/80 text-sm">7 dias de garantia total. Se não transformar, devolvemos 100% do investimento.</p>
                </div>
              </div>
            </div>
          </motion.div>

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
              className="bg-white text-[#582c81] hover:bg-purple-50 text-xl px-12 py-8 rounded-full font-black shadow-2xl shadow-purple-900/40 hover:shadow-purple-900/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
            >
              🔥 SIM! Quero Minha Transformação AGORA
            </Button>
            <p className="text-white/90 text-sm mt-4">👉 Clique e escolha o melhor horário para você</p>
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
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CheckCircle className="w-8 h-8 text-purple-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">500+</p>
              <p className="text-white/70 text-xs text-center">vidas transformadas</p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CheckCircle className="w-8 h-8 text-purple-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">10+ anos</p>
              <p className="text-white/70 text-xs text-center">de experiência</p>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CheckCircle className="w-8 h-8 text-purple-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">100% Online</p>
              <p className="text-white/70 text-xs text-center">no conforto da sua casa</p>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
              <CheckCircle className="w-8 h-8 text-purple-300 mb-2" />
              <p className="text-white font-bold text-sm sm:text-base">Garantia 7d</p>
              <p className="text-white/70 text-xs text-center">reembolso total</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFinalRadiestesia;
