import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle, BarChart3 } from 'lucide-react';

const ProvaCientifica = () => {
  const stats = [
    {
      icon: <BarChart3 className="w-10 h-10 text-[#582c81]" />,
      title: "Melhora nos Ritmos Cerebrais",
      description: "90% dos voluntários apresentaram melhora nos ritmos alfa e beta, indicando relaxamento profundo e redução da tensão.",
      percentage: "90%"
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-[#582c81]" />,
      title: "Redução de Traços Anormais",
      description: "93% dos casos com traços epileptiformes antes da sessão não apresentaram mais os mesmos traços depois.",
      percentage: "93%"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#582c81]" />,
      title: "Eficácia à Distância",
      description: "Todos os resultados foram obtidos sem contato direto, comprovando a eficácia da terapia à distância através do campo eletromagnético.",
      percentage: "100%"
    }
  ];

  return (
    <section id="ciencia" className="py-24 md:py-32 bg-slate-50">
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
            Resultados clínicos comprovados em pacientes reais após sessões de Radiestesia Genética.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
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
        </div>
      </div>
    </section>
  );
};

export default ProvaCientifica;
