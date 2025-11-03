import { motion } from 'framer-motion';
import { Wind, Zap, Users, BrainCircuit, Clock, Hand as HeartHand } from 'lucide-react';

const signs = [
  { icon: Wind, text: "Cansaço extremo e sem motivo aparente" },
  { icon: Zap, text: "Pensamentos negativos e repetitivos" },
  { icon: Users, text: "Dificuldade e conflitos nos relacionamentos" },
  { icon: BrainCircuit, text: "Falta de clareza mental e confusão" },
  { icon: Clock, text: "Sensação de estagnação e 'azar crônico'" },
  { icon: HeartHand, text: "Irritabilidade e explosões emocionais" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut'
    },
  }),
};

const SinaisLimpeza = () => {
  return (
    <section className="relative bg-slate-900 py-24 sm:py-32 overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Sua energia está pedindo ajuda?
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Se você se identifica com algum destes sinais, pode ser a hora de uma purificação profunda.
            </p>
          </motion.div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative h-full rounded-2xl bg-slate-800/50 backdrop-blur-sm p-6 border border-white/5 group-hover:border-teal-500/50 transition-all duration-300">
                <div className="flex items-start gap-x-4">
                  <div className="flex-shrink-0 inline-flex rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 p-3 ring-1 ring-inset ring-teal-500/30 group-hover:ring-teal-400/50 transition-all duration-300">
                    <sign.icon className="h-6 w-6 text-teal-400 group-hover:text-teal-300 group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
                  </div>
                  <p className="flex-1 font-semibold leading-6 text-white/90 group-hover:text-white transition-colors duration-300">{sign.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinaisLimpeza;
