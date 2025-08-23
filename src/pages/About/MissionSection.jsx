import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import { Heart, GraduationCap, Sparkles } from 'lucide-react';

const MissionSection = () => {
  const missionPillars = [
    { icon: Heart, title: "Curar", description: "Oferecer tratamentos que aliviam o sofrimento e restauram o equilíbrio energético." },
    { icon: GraduationCap, title: "Educar", description: "Compartilhar conhecimento para que você compreenda as mensagens do seu corpo e se torne autônomo em seu autocuidado." },
    { icon: Sparkles, title: "Empoderar", description: "Fornecer ferramentas para que você sustente sua vitalidade e construa uma vida com mais presença, propósito e bem-estar." }
  ];

  return (
    <section className="pt-16 sm:pt-24 bg-white">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="px-4 sm:px-0">
              <Text as="h2" variant="h2" className="mb-4">
                Nossa Missão: <span className="text-gradient">Curar, Educar e Empoderar</span>
              </Text>
              <Text variant="lead">
                Acreditamos que a verdadeira cura acontece quando o indivíduo se torna protagonista de sua própria jornada.
              </Text>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {missionPillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center mb-4 shadow-lg">
                    <pillar.icon className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 max-w-sm mx-auto text-balance">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 w-full lg:w-auto -mx-0 sm:-mx-6 lg:mx-0 mb-12 lg:mb-0"
          >
            <img
              src="/images/services/sobre-nos-empoderamento.webp"
              alt="Pessoa de braços abertos em uma paisagem natural, simbolizando empoderamento e serenidade."
              className="object-cover w-full h-auto max-h-[500px] shadow-md"
            />
            <p className="text-sm italic text-gray-500 mt-4 text-center px-4">
              “Empoderamento começa quando você se reconecta com a sua própria energia.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;