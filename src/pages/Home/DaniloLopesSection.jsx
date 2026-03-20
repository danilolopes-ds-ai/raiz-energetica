import React from 'react';

import Text from '@/components/atoms/Text';
import AppButton from '@/components/atoms/AppButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const listItems = [
  {
    text: "Radiestesia Genética como eixo de anamnese terapêutica e direção",
    emoji: "🧬",
    color: "text-[#4ca626]", // Verde Limão
  },
  {
    text: "Harmonia Geracional como ferramenta de reconexão familiar",
    emoji: "💞",
    color: "text-[#cc4e00]", // Laranja Coral
  },
  {
    text: "Integrando anos de estudo em processos terapêuticos personalizados",
    emoji: "🌿",
    color: "text-[#4ca626]", // Verde Limão
  },
  {
    text: "Mais de 10 anos acompanhando transformações reais",
    emoji: "📆",
    color: "text-[#cc4e00]", // Laranja Coral
  },
];

const DaniloLopesSection = () => {
  return (
    <section id="danilo-lopes" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Text as="h2" variant="h2" className="mb-4">
              Conheça <span className="text-gradient">Danilo Lopes</span>
            </Text>
            <Text as="p" className="text-lg font-semibold text-gray-800 mb-6">
              Fundador da Raiz Energética e terapeuta integrativo especializado em causas profundas.
            </Text>
            <Text as="p" className="mb-4">
              Com mais de <strong>10 anos de experiência em terapias energéticas</strong>, Danilo conduz um processo terapêutico integrativo, que investiga e trata as <strong>raízes invisíveis</strong> de dores físicas, emocionais e comportamentais.
            </Text>
            <Text as="p" className="mb-4">
              Seu trabalho tem como base a <strong>Radiestesia Genética</strong>, expandindo-se com saberes como <strong>Medicina Tradicional Chinesa</strong>, <strong>Linguagem do Corpo</strong>, <strong>Chakras</strong>, <strong>Cristais</strong> e outras abordagens complementares — aplicadas com sensibilidade, clareza e direção, de acordo com cada pessoa.
            </Text>
            <Text as="p" className="mb-6">
              Sua missão é simples: <strong>ir na raiz energética dos problemas</strong> para gerar transformações duradouras e reais.
            </Text>
            
            <ul className="space-y-4 mb-10">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Text as="span" className="mr-3 text-xl">{item.emoji}</Text>
                  <Text as="span" className={`flex-1 font-medium ${item.color}`}>
                    {item.text}
                  </Text>
                </li>
              ))}
            </ul>

            <AppButton
              asChild
              variant="primary"
              className="w-full sm:w-auto"
            >
              <Link to="/sobre">Conheça a Jornada por Trás da Raiz Energética</Link>
            </AppButton>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
             <img 
              className="rounded-2xl shadow-xl w-full h-full max-h-[500px] object-cover object-top"
              alt="Danilo Lopes, fundador da Raiz Energética" 
              src="/images/services/atendimento-atendido-clinica.webp" 
              width={600}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DaniloLopesSection;