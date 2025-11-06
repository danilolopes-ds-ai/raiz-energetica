import { motion } from 'framer-motion';
import { UserCheck, Search, HelpCircle, Target } from 'lucide-react';

const ParaQuemEradgen = () => {
  const profiles = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#582c81]" />,
      title: "Pessoas com Padrões que Se Repetem",
      description: "Histórias que se repetem entre gerações (falências, doenças, relacionamentos). DNA energético está carregando padrões vibracionais de antepassados que precisam ser tratados."
    },
    {
      icon: <Search className="w-8 h-8 text-[#582c81]" />,
      title: "Quem Busca a Causa Raiz Real",
      description: "Casos que a medicina ocidental não explica: hepatite sem histórico familiar, dores crônicas sem diagnóstico, ansiedade sem causa aparente. A RadGen investiga causas que vão além do físico."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-[#582c81]" />,
      title: "Pessoas Afetadas por Energias Externas",
      description: "Sofre com energias de imóveis doentes (veios de água, antenas, postes), vampiros energéticos (família ou pessoas próximas), ou energias de objetos (tatuagens, cicatrizes, piercings)."
    },
    {
      icon: <Target className="w-8 h-8 text-[#582c81]" />,
      title: "Terapeutas e Profissionais da Saúde",
      description: "Profissionais que buscam uma técnica completa de diagnóstico e tratamento para casos complexos, além de poder realizar auto-tratamento com a RadGen."
    }
  ];

  return (
    <section id="para-quem" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Para quem é a Radiestesia Genética?
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Se você reconhece algum dos perfis abaixo, esta terapia pode ser sua chave de transformação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex items-start space-x-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                {profile.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{profile.title}</h3>
                <p className="text-slate-600 leading-relaxed">{profile.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuemEradgen;
