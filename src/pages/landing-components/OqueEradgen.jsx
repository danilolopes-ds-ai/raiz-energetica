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
              É uma técnica energética de precisão, criada por <strong className="text-amber-700">Patrícia Bortone</strong>, que une radiestesia tradicional, física quântica e epigenética vibracional. Utilizando pêndulos, gráficos, mapas mentais e comandos energéticos, a RadGen atua diretamente sobre o campo vibracional da pessoa e os resultados já podem ser <strong className="text-slate-800">vistos no cérebro</strong>.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 mb-12 mx-auto max-w-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-yellow-50/80 to-orange-100/80 rounded-2xl blur-[2px] opacity-80 animate-pulse z-0"></div>
            <div className="relative z-10 p-6 sm:p-10 rounded-2xl border-4 border-amber-400 shadow-2xl flex flex-col items-center bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl sm:text-5xl">🧠</span>
                <span className="font-extrabold text-2xl sm:text-3xl tracking-wide drop-shadow text-slate-900">
                  Comprovado por <span className="text-amber-700 font-extrabold">MAPEAMENTO CEREBRAL</span>
                </span>
              </div>
              <p className="text-slate-800 text-base sm:text-lg font-semibold leading-relaxed mb-2 text-center max-w-xl">
                Após uma única sessão de <span className="text-amber-700 font-bold">Radiestesia Genética</span>, <span className="text-amber-700 font-bold">90% dos voluntários</span> apresentaram <span className="font-bold text-amber-700">melhora nos ritmos cerebrais alfa e beta</span>.<br/>
                <span className="text-slate-600 font-normal">Estados de <span className="text-amber-700 font-bold">relaxamento profundo</span> e redução de padrões associados à <span className="text-amber-700 font-bold">ansiedade e tensão</span> foram observados.</span>
              </p>
              <div className="w-full flex flex-col sm:flex-row gap-4 mt-6 justify-center items-center">
                <div className="flex-1 flex flex-col items-center">
                  <img src="/images/services/mapeamento-cerebral-antes.webp" alt="Mapeamento cerebral antes" className="w-full max-w-xs rounded-lg border border-amber-200 shadow" />
                  <span className="mt-2 text-xs text-slate-500 text-center">Antes do atendimento RadGen</span>
                </div>
                <div className="flex-1 flex flex-col items-center">
                  <img src="/images/services/mapeamento-cerebral-depois.webp" alt="Mapeamento cerebral depois" className="w-full max-w-xs rounded-lg border border-amber-200 shadow" />
                  <span className="mt-2 text-xs text-slate-500 text-center">Após atendimento RadGen</span>
                </div>
              </div>
              {/* Chamada para o artigo completo no blog - link simples */}
              <div className="flex flex-col items-center mt-4 text-base">
                <span className="text-slate-700 font-semibold mb-1">Quer saber todos os detalhes?</span>
                <a
                  href="/blog"
                  className="text-amber-700 font-semibold underline underline-offset-4 hover:text-amber-800 transition"
                  target="_blank" rel="noopener noreferrer"
                >
                  Clique Aqui e leia o artigo completo no nosso blog
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OqueEradgen;
