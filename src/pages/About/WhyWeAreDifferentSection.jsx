import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Text from '@/components/atoms/Text';
import AppButton from '@/components/atoms/AppButton';
import { FiArrowRight } from 'react-icons/fi';
import { FaCalendarAlt } from 'react-icons/fa';

const WhyWeAreDifferentSection = () => {
  const practices = [
    "Radiestesia Genética",
    "Medicina Tradicional Chinesa",
    "Cristaloterapia",
    "Chakras",
    "Linguagem e Metafísica do Corpo",
    "Orientações fisioterapêuticas para autocuidado"
  ];

  const howItWorks = [
    "Atendimento 100% online e seguro",
    "Primeira consulta: diagnóstico completo em 60 minutos",
    "Planos personalizados para sua necessidade",
    "Acompanhamento via WhatsApp (consulte planos)"
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Text as="h2" variant="h2" className="mb-4">
            Um olhar que vai <span className="text-gradient">além do visível</span>
          </Text>
          <Text variant="lead" className="max-w-3xl mx-auto">
            Sua prática terapêutica integra:
          </Text>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">{practice}</span>
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="text-center italic text-gray-600 mt-12"
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.5, duration: 1 }}
          >
            Tudo isso reunido em atendimentos à distância, de forma profundamente humana, intuitiva e personalizada.
          </motion.p>

          {/* Como Funciona - Clean com luz sutil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 space-y-4"
          >
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                className="relative"
              >
                {/* Background glow effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 via-emerald-50/30 to-transparent rounded-lg blur-sm"
                  aria-hidden="true"
                />
                
                {/* Content */}
                <div className="relative flex items-start space-x-3 py-3 px-4">
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0">✅</span>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <AppButton 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <a href="/servicos" className="inline-flex items-center gap-2">
                <FiArrowRight className="text-xl" />
                <span>Conheça Nossos Serviços</span>
              </a>
            </AppButton>

            <AppButton 
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <a href="/agendar" className="inline-flex items-center gap-2">
                <FaCalendarAlt className="text-lg" />
                <span>Agendar Conversa</span>
              </a>
            </AppButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreDifferentSection;