import { motion } from 'framer-motion';
import { Zap, Dna, Wifi, BrainCircuit, UserCheck } from 'lucide-react';

const ComoAgeRadgen = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#582c81]" />,
      title: "Identificação Precisa",
      description: "Identifica a origem vibracional de padrões físicos, emocionais e mentais."
    },
    {
      icon: <Dna className="w-8 h-8 text-[#582c81]" />,
      title: "DNA Energético",
      description: "Atua sobre o DNA energético, acessando informações herdadas até a 12ª geração."
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#582c81]" />,
      title: "Atuação à Distância",
      description: "Transmuta bloqueios mesmo sem contato físico, com sessões feitas à distância."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#582c81]" />,
      title: "Inteligência Supraconsciente",
      description: "Trabalha com a inteligência do seu supraconsciente, acessando seu campo quântico individual."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#582c81]" />,
      title: "Terapia Personalizada",
      description: "É não invasiva, precisa e totalmente personalizada para suas necessidades."
    }
  ];

  return (
    <section id="como-age" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Como essa terapia age?
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex items-start space-x-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frase Emocional - removido gradiente, apenas texto clean */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 max-w-4xl mx-auto px-6 text-center"
        >
          <blockquote className="relative">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              "Você não herdou apenas genes, herdou padrões."
            </p>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mt-6">
              Liberte-se das correntes invisíveis e reescreva sua história.
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};export default ComoAgeRadgen;
