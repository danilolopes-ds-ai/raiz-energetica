import { motion } from 'framer-motion';
import { Dna } from 'lucide-react';

const OqueEradgen = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block bg-amber-100/50 p-4 rounded-full mb-4">
              <Dna className="w-10 h-10 text-amber-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              O que é Radiestesia Genética?
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              É uma técnica energética de precisão, criada por <strong className="text-amber-700">Patrícia Bortone</strong>, que une radiestesia tradicional, física quântica e epigenética vibracional. Utilizando pêndulos, gráficos, mapas mentais e comandos energéticos, a RadGen atua diretamente sobre o campo vibracional da pessoa — e os resultados já podem ser <strong className="text-slate-800">vistos no cérebro</strong>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 bg-slate-100 border border-slate-200 p-6 rounded-2xl text-center shadow-sm"
          >
            <h3 className="font-bold text-slate-800 text-xl">Comprovado por mapeamento cerebral:</h3>
            <p className="mt-2 text-slate-600 text-lg">
              Após uma única sessão de Radiestesia Genética, 90% dos voluntários apresentaram <strong className="text-amber-700">melhora nos ritmos cerebrais alfa e beta</strong>, indicando estados de relaxamento profundo e redução de padrões associados à ansiedade e tensão.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OqueEradgen;
