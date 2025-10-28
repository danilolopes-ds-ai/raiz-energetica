import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import AppButton from '@/components/atoms/AppButton';
import { FaLaptop, FaClock, FaFileAlt, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FaLaptop,
      title: "Atendimento 100% Online",
      description: "Conforto e praticidade de onde você estiver. Sessões via videochamada com total privacidade.",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: FaClock,
      title: "Primeira Consulta: 60 minutos",
      description: "Diagnóstico completo e detalhado. Tempo necessário para entender sua história e necessidades.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaFileAlt,
      title: "Plano Personalizado",
      description: "Após a sessão, você recebe um plano de cuidados feito especialmente para você.",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: FaWhatsapp,
      title: "Acompanhamento Contínuo",
      description: "Suporte via WhatsApp quando aplicável. Você não está sozinho nessa jornada.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <Text as="h2" variant="h2" className="mb-4">
            Como Funciona o <span className="text-gradient">Atendimento</span>
          </Text>
          <Text variant="lead" className="text-gray-600 max-w-2xl mx-auto">
            Transparência e cuidado em cada etapa da sua jornada de transformação.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="text-2xl" />
                </div>

                {/* Content */}
                <Text as="h3" variant="h3" className="mb-3 text-gray-900">
                  {step.title}
                </Text>
                <Text variant="body" className="text-gray-600 leading-relaxed">
                  {step.description}
                </Text>

                {/* Decorative gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 group-hover:from-emerald-400/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <AppButton 
            asChild
            size="lg"
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
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
            className="w-full sm:w-auto border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <a href="/agendar" className="inline-flex items-center gap-2">
              <FaCalendarAlt className="text-lg" />
              <span>Agendar Conversa</span>
            </a>
          </AppButton>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
