import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, GitBranch, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Text from '@/components/atoms/Text';

const MethodologySection = () => {
  const methodologyPoints = [
    {
      icon: Zap,
      emoji: "⚡️",
      title: "Diagnóstico Energético",
      description: "Analisamos seu campo vibracional com Radiestesia Genética para identificar a verdadeira origem dos sintomas."
    },
    {
      icon: GitBranch,
      emoji: "🌿",
      title: "Mapeamento Ancestral",
      description: "Investigamos influências hereditárias, padrões inconscientes e traumas energéticos que atravessam gerações."
    },
    {
      icon: CheckCircle,
      emoji: "🎯",
      title: "Tratamento Personalizado",
      description: "Desenvolvemos um plano terapêutico individual, combinando saberes energéticos, orientais, ocidentais e naturais. Tudo de forma integrada e alinhada à sua essência."
    },
    {
      icon: Bot,
      emoji: "🤖",
      title: "Inteligência Energética (em breve)",
      description: "Helena, nossa assistente de IA, está sendo treinada para oferecer suporte contínuo com sensibilidade, precisão e linguagem consciente."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src="/images/services/logo-raizenergetica.webp" alt="Logo da Raiz Energética" className="h-48 w-auto filter drop-shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text as="h2" variant="h2">
              A <span className="text-gradient">Raiz Energética</span>
            </Text>
            <Text variant="lead" className="mt-2">
              Uma filosofia de cuidado profundo, aplicada com precisão.
            </Text>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {methodologyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="h-full"
            >
              <div className="bg-[#1b413a] border border-white/10 rounded-xl p-6 h-full w-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="text-left">
                  <h3 className="font-bold text-lg text-[#99CD85] mb-2">{point.emoji} {point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;