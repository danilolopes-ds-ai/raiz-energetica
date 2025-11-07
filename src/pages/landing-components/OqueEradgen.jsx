import { motion } from 'framer-motion';
import { Dna, Sparkles } from 'lucide-react';

const OqueEradgen = () => {
  return (
    <section id="o-que-e" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 p-4 rounded-full">
                <Dna className="w-12 h-12 text-[#582c81]" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              O que é Radiestesia Genética?
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Criada por <strong className="text-slate-900">Patrícia Bortone</strong>, é uma técnica terapêutica completa que identifica e trata todas as possíveis causas de doenças: desde causas físicas, energias de imóveis doentes, até padrões energéticos herdados de antepassados que influenciam sua saúde, comportamentos e emoções.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OqueEradgen;
