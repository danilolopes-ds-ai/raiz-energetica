import { motion } from 'framer-motion';
import { Radio, Gem, Eraser, Flower2 } from 'lucide-react';

const methodElements = [
  { 
    icon: Radio, 
    title: "Gráficos de Radiestesia", 
    description: "Utilizamos gráficos especializados para identificar bloqueios e desequilíbrios energéticos específicos. Cada ponto do seu campo energético é mapeado com precisão."
  },
  { 
    icon: Gem, 
    title: "Cristais Energéticos", 
    description: "Cristais poderosos amplificam a transmutação das energias negativas em positivas, acelerando o processo de purificação e restauração do equilíbrio natural."
  },
  { 
    icon: Eraser, 
    title: "Remoção de Energias Densas", 
    description: "Eliminamos cargas negativas acumuladas ao longo do tempo, limpando seu campo energético de influências externas prejudiciais e pensamentos limitantes."
  },
  { 
    icon: Flower2, 
    title: "Alinhamento dos Chakras", 
    description: "Realinhamos seus centros energéticos principais, restaurando o fluxo natural de vitalidade, clareza mental e equilíbrio emocional em todos os aspectos da sua vida."
  }
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

const MetodologiaLimpeza = () => {
  return (
    <section id="metodologia" className="relative py-20 md:py-24 bg-gradient-to-b from-white via-teal-50/30 to-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Nossa Metodologia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Limpeza Profunda</span>
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Combinamos técnicas poderosas para uma purificação completa e eficaz do seu campo energético.
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {methodElements.map((item, i) => (
            <motion.div 
              key={i} 
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
              <div className="relative h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-100 group-hover:border-teal-300 p-8 transition-all duration-300 shadow-sm group-hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-start items-center text-center md:text-left md:space-x-6 space-y-4 md:space-y-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-500 text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Imagem dos Chakras */}
        <motion.div 
          className="mt-16 -mx-6 lg:mx-0 lg:flex lg:justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.img 
            src="/images/services/chakras-limpeza-energetica.webp" 
            alt="Meditação com Cristais nos Chakras"
            className="w-full lg:max-w-2xl h-auto shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        {/* Frase de impacto emocional abaixo da imagem */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <blockquote className="text-center space-y-6">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
              <span className="text-teal-600">"</span>Você nasceu para brilhar, não para carregar dores que não são suas.
              <br /><br />
              <span className="text-xl md:text-2xl text-teal-700 font-medium leading-relaxed">
                Liberte-se de energias pesadas e densas e renasça com a leveza que sempre foi sua por direito.
              </span>
              <span className="text-teal-600">"</span>
            </div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default MetodologiaLimpeza;
