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
    <section className="bg-slate-900 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sua energia está pedindo ajuda?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Se você se identifica com algum destes sinais, pode ser a hora de uma purificação profunda.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {signs.map((sign, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative p-px rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
              <div className="relative h-full rounded-[15px] bg-slate-900 p-6">
                <div className="flex items-center gap-x-4">
                  <div className="inline-flex rounded-lg bg-teal-500/10 p-3 ring-1 ring-inset ring-teal-500/20">
                    <sign.icon className="h-6 w-6 text-teal-400" aria-hidden="true" />
                  </div>
                  <p className="font-semibold leading-6 text-white">{sign.text}</p>
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
