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
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Você sente que está carregando algo que <span className="text-gradient-gold">nem é seu?</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A Radiestesia Genética é uma terapia revolucionária que identifica e trata informações energéticas herdadas de seus antepassados, interferências externas e bloqueios emocionais que você não precisa mais carregar.
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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start p-4 bg-white rounded-lg shadow-md border-l-4 border-amber-500"
              >
                <Check className="w-6 h-6 text-green-500 mr-4 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{symptom}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SintomasRadgen;
