import { motion } from 'framer-motion';
import { Zap, Dna, Wifi, BrainCircuit, UserCheck } from 'lucide-react';

const ComoAgeRadgen = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#582c81]" />,
      title: "Diagnóstico Completo e Diferenciado",
      description: "Identifica causas que vão além do convencional: desde físicas, energias de imóveis, vampiros energéticos, até padrões de antepassados."
    },
    {
      icon: <Dna className="w-8 h-8 text-[#582c81]" />,
      title: "DNA Genético + DNA Energético",
      description: "Trata tanto a matéria física (DNA genético) quanto a frequência mental e padrões vibracionais herdados (DNA energético) de até 12 gerações."
    },
    {
      icon: <Wifi className="w-8 h-8 text-[#582c81]" />,
      title: "Comunicação Quântica à Distância",
      description: "Através de campos mórficos eletromagnéticos, seu supraconsciente se conecta ao do terapeuta. Sessões 100% à distância com resultados comprovados."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#582c81]" />,
      title: "Pêndulo e Gráficos Próprios",
      description: "Utiliza pêndulo para captar energia sutil em micromovimentos, direcionando diagnóstico e tratamento através de gráficos de ondas de formas exclusivos da técnica."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-[#582c81]" />,
      title: "Tratamento Personalizado e Completo",
      description: "Cada caso é único. Trata pessoas, animais, plantas e imóveis. Neutraliza energias intrusas e reequilibra frequências para sua evolução."
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

        {/* Layout com Imagem + Features */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            {/* Imagem Humanizadora */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/services/raiz_diferente.webp" 
                  alt="Profissional realizando Radiestesia Genética - União entre ciência e energia"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-center text-slate-600 mt-4 italic">
                A união perfeita entre técnica, ciência e energia
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="order-1 lg:order-2 grid grid-cols-1 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Frase Emocional - removido gradiente, apenas texto clean */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto px-6 text-center"
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
