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
              Criada por <strong className="text-slate-900">Patrícia Bortone</strong>, é uma técnica terapêutica que identifica e transmuta informações energéticas herdadas no DNA, que influenciam comportamentos, emoções, traumas e saúde física.
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
              Validada pela ciência
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              Estudos comprovaram <strong className="text-slate-900">melhora nos ritmos cerebrais alfa e beta</strong>, demonstrando impacto positivo no equilíbrio mental e emocional dos participantes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OqueEradgen;
