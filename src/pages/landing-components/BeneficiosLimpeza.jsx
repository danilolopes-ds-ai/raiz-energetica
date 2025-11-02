import { motion } from 'framer-motion';
import { Zap, Brain, Smile, Shield } from 'lucide-react';

const benefits = [
  { 
    icon: Zap, 
    title: "Vitalidade Renovada", 
    description: "Sinta sua energia vital fluindo livremente, trazendo mais disposição e vigor para o seu dia a dia." 
  },
  { 
    icon: Brain, 
    title: "Clareza Mental e Foco", 
    description: "Dissipe a névoa mental, ganhe foco para suas tarefas e tome decisões com mais segurança." 
  },
  { 
    icon: Smile, 
    title: "Paz Interior e Leveza", 
    description: "Experimente um profundo relaxamento e uma sensação de leveza ao se livrar de cargas pesadas." 
  },
  { 
    icon: Shield, 
    title: "Proteção Energética", 
    description: "Crie um escudo de proteção ao seu redor, tornando-se menos vulnerável a energias externas nocivas." 
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    },
  }),
};

const BeneficiosLimpeza = () => {
  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            O que você vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">sentir</span> após a limpeza
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Prepare-se para uma nova fase de bem-estar, proteção e leveza.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200/50 p-8 transition-all duration-300 hover:border-teal-300 hover:shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start items-center text-center sm:text-left sm:space-x-6 space-y-4 sm:space-y-0">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-md">
                    <benefit.icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeneficiosLimpeza;
