import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SintomasRadgen = () => {
  const symptoms = [
    "Ansiedade sem explicação?",
    "Dores ou doenças que se repetem na família?",
    "Relacionamentos difíceis, mesmo após diversas tentativas?",
    "Procrastinação, bloqueios financeiros ou sensação de 'peso invisível'?"
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Você sente que está carregando algo que nem é seu?
            </h2>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              A Radiestesia Genética identifica e trata informações energéticas herdadas que você não precisa mais carregar.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {symptoms.map((symptom, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 text-lg leading-relaxed">{symptom}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SintomasRadgen;
