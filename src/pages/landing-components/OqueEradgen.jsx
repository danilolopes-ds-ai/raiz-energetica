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
            <p className="text-xl text-slate-600 leading-relaxed">
              Criada por <strong className="text-slate-900">Patrícia Bortone</strong>, é uma técnica terapêutica completa que identifica e trata todas as possíveis causas de doenças: desde causas físicas, energias de imóveis doentes, até padrões energéticos herdados de antepassados que influenciam sua saúde, comportamentos e emoções.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
              <Sparkles className="w-7 h-7 text-[#582c81] mr-3" />
              Validada cientificamente
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Estudo aprovado pelo <strong className="text-slate-900">Hospital Israelita Albert Einstein</strong> (2020) comprovou através de mapeamento cerebral:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-[#582c81] font-bold mr-2">•</span>
                <span><strong>90%</strong> dos participantes apresentaram melhora nos ritmos cerebrais alfa e beta</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#582c81] font-bold mr-2">•</span>
                <span><strong>93%</strong> tiveram redução significativa de traços epileptiformes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#582c81] font-bold mr-2">•</span>
                <span><strong>100%</strong> mantiveram traçados cerebrais normais após as sessões</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OqueEradgen;
