import { motion } from 'framer-motion';
import { BrainCircuit, CheckCircle, BarChart3 } from 'lucide-react';

const ProvaCientifica = () => {
  const stats = [
    {
      icon: <BarChart3 className="w-10 h-10 text-amber-600" />,
      title: "Melhora nos Ritmos Cerebrais",
      description: "90% dos voluntários apresentaram melhora nos ritmos alfa e beta, indicando relaxamento profundo e redução da tensão.",
      percentage: "90%"
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-amber-600" />,
      title: "Redução de Traços Anormais",
      description: "93% dos casos com traços epileptiformes antes da sessão não apresentaram mais os mesmos traços depois.",
      percentage: "93%"
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-amber-600" />,
      title: "Eficácia à Distância",
      description: "Todos os resultados foram obtidos sem contato direto, comprovando a eficácia da terapia à distância através do campo eletromagnético.",
      percentage: "100%"
    }
  ];

  return (
    <section id="ciencia" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
          >
            O que a <span className="text-gradient-gold">Ciência Mostra</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600"
          >
            Resultados de um estudo com mapeamento cerebral (EEG digital) após uma única sessão de Radiestesia Genética.
          </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{stat.title}</h3>
              <p className="mt-2 text-slate-600">{stat.description}</p>
              <p className="text-5xl font-extrabold text-amber-600 mt-4">{stat.percentage}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          <p>Estudo conduzido pela criadora da técnica, Patrícia Bortone, em parceria com profissionais da área da saúde.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProvaCientifica;
