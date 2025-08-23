import { motion } from 'framer-motion';
import { Zap, Dna, Wifi, BrainCircuit, UserCheck } from 'lucide-react';

const ComoAgeRadgen = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-amber-600" />,
      title: "Identificação Precisa",
      description: "Identifica a origem vibracional de padrões físicos, emocionais e mentais."
    },
    {
      icon: <Dna className="w-8 h-8 text-amber-600" />,
      title: "DNA Energético",
      description: "Atua sobre o DNA energético, acessando informações herdadas até a 12ª geração."
    },
    {
      icon: <Wifi className="w-8 h-8 text-amber-600" />,
      title: "Atuação à Distância",
      description: "Transmuta bloqueios mesmo sem contato físico, com sessões feitas à distância."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-amber-600" />,
      title: "Inteligência Supraconsciente",
      description: "Trabalha com a inteligência do seu supraconsciente, acessando seu campo quântico individual."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-amber-600" />,
      title: "Terapia Personalizada",
      description: "É não invasiva, precisa e totalmente personalizada para suas necessidades."
    }
  ];

  return (
    <section id="como-age" className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Como essa <span className="text-gradient-gold">Terapia Age?</span>
          </motion.h2>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 flex items-start space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0 bg-amber-100/50 p-3 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">{feature.title}</h3>
                <p className="mt-1 text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComoAgeRadgen;
