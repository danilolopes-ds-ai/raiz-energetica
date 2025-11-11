import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle, BarChart3, Activity, TrendingUp } from 'lucide-react';

const ProvaCientifica = () => {
  const stats = [
    {
      icon: <BarChart3 className="w-12 h-12 text-[#582c81]" />,
      description: "Ritmo alfa mais estruturado e definido",
      percentage: "90%"
    },
    {
      icon: <BrainCircuit className="w-12 h-12 text-[#582c81]" />,
      description: "Redução de traços epileptiformes",
      percentage: "93%"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-[#582c81]" />,
      description: "Mantiveram traçados cerebrais normais após sessão",
      percentage: "100%"
    }
  ];

  return (
    <section id="ciencia" className="py-24 md:py-32 bg-white relative">
      {/* Transição decorativa */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#582c81]/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            O que a ciência mostra
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Resultados mensuráveis comprovados por mapeamento cerebral
          </p>
        </motion.div>

        {/* Cards de Resultados - 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                {stat.icon}
              </div>
              <div className="text-5xl font-extrabold text-[#582c81] mb-4">
                {stat.percentage}
              </div>
              <p className="text-lg text-slate-700 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}

          {/* Card 4: Frequência Beta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <Activity className="w-12 h-12 text-[#582c81]" />
            </div>
            <div className="text-3xl font-extrabold text-[#582c81] mb-4">
              Frequência β ↓
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Redução da frequência beta - estado de relaxamento mantendo vigília
            </p>
          </motion.div>

          {/* Card 5: Amplitude Alfa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-[#582c81]" />
            </div>
            <div className="text-3xl font-extrabold text-[#582c81] mb-4">
              Amplitude α +43%
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Amplitude alfa aumentou de ~70µV para {'>'} 100µV
            </p>
          </motion.div>
        </div>

        {/* Gráfico de Frequência das Ondas Cerebrais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-4">
              Frequência das Ondas Cerebrais
            </h3>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Melhora comprovada nos ritmos cerebrais alfa e beta após a sessão de Radiestesia Genética
            </p>
            <div className="overflow-hidden rounded-xl">
              <img 
                src="/images/services/frequencia-ondas.webp" 
                alt="Gráfico mostrando melhora nas frequências das ondas cerebrais antes e depois da sessão"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* Mapeamento Cerebral - Antes e Depois */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Transformação Cerebral Visível
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Veja a mudança real no mapeamento cerebral de um voluntário após a sessão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Antes */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-lg"
            >
              <div className="mb-4 text-center">
                <span className="inline-block bg-red-100 text-red-700 font-bold px-4 py-2 rounded-full text-sm">
                  ANTES DA SESSÃO
                </span>
              </div>
              <div className="overflow-hidden rounded-xl mb-4">
                <img 
                  src="/images/services/mapeamento-cerebral-antes.webp" 
                  alt="Mapeamento cerebral antes da sessão mostrando padrões de estresse"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-slate-600 text-sm">
                Padrões de tensão e desequilíbrio energético visíveis
              </p>
            </motion.div>

            {/* Depois */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-lg"
            >
              <div className="mb-4 text-center">
                <span className="inline-block bg-amber-100 text-amber-700 font-bold px-4 py-2 rounded-full text-sm">
                  APÓS A SESSÃO
                </span>
              </div>
              <div className="overflow-hidden rounded-xl mb-4">
                <img 
                  src="/images/services/mapeamento-cerebral-depois.webp" 
                  alt="Mapeamento cerebral depois da sessão mostrando equilíbrio e harmonia"
                  className="w-full h-auto"
                />
              </div>
              <p className="text-center text-slate-600 text-sm">
                Harmonia restaurada e padrões saudáveis reestabelecidos
              </p>
            </motion.div>
          </div>

          {/* Nota científica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 bg-[#582c81]/5 border border-[#582c81]/20 rounded-xl p-8 max-w-5xl mx-auto"
          >
            <p className="text-slate-700 text-center leading-relaxed mb-6 text-lg">
              <strong className="text-[#582c81]">Estudo científico validado:</strong> Os resultados foram obtidos através de eletroencefalogramas (EEG) realizados antes e após as sessões, demonstrando mudanças mensuráveis na atividade cerebral dos participantes.
            </p>
            
            {/* Credenciais técnicas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-[#582c81]/20">
              <div className="text-center">
                <p className="text-sm font-bold text-[#582c81] mb-1">Autora Principal</p>
                <p className="text-xs text-slate-600">Patricia Bortone</p>
                <p className="text-xs text-slate-500">Especialista e Criadora da Técnica Radiestesia Genética</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-[#582c81] mb-1">Reconhecimento Oficial</p>
                <p className="text-xs text-slate-600">ABRADGEN</p>
                <p className="text-xs text-slate-500">Associação Brasileira de Radiestesia Genética</p>
              </div>
            </div>
            
            <p className="text-xs text-center text-slate-500 mt-6 italic">
              Análise objetiva e não-subjetiva • Dados gerados por equipamento BRAIN-WAVE II • Laudos emitidos por especialista em Neurofisiologia
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvaCientifica;
