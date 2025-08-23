import { motion } from 'framer-motion';
import { UserCheck, Search, HelpCircle, Target } from 'lucide-react';

const ParaQuemEradgen = () => {
  const items = [
    {
      icon: <UserCheck className="w-8 h-8 text-amber-600" />,
      title: "Pessoas com Padrões Repetitivos",
      description: "Para quem vive ciclos de autossabotagem, escassez ou relacionamentos tóxicos e não sabe como sair deles."
    },
    {
      icon: <Search className="w-8 h-8 text-amber-600" />,
      title: "Buscadores de Causa Raiz",
      description: "Para quem já tentou de tudo, mas sente que os tratamentos convencionais não chegam na verdadeira origem do problema."
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-amber-600" />,
      title: "Pessoas com Sintomas 'Sem Causa'",
      description: "Para quem sofre com ansiedade, medos ou dores crônicas que a medicina tradicional não consegue explicar ou diagnosticar."
    },
    {
      icon: <Target className="w-8 h-8 text-amber-600" />,
      title: "Quem Busca Autoconhecimento Profundo",
      description: "Para quem deseja entender a si mesmo em um novo nível, descobrir potenciais ocultos e conquistar mais equilíbrio e clareza na vida."
    }
  ];

  return (
    <section id="para-quem" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Para Quem é a <span className="text-gradient-gold">Radiestesia Genética?</span>
          </motion.h2>
        </div>
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center bg-amber-100/50 p-3 rounded-full mb-4 mx-auto">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug whitespace-pre-line" style={{ wordBreak: 'keep-all', lineBreak: 'strict' }}>{item.title.replace(/(\s)([^\s]+)$/,'\u00A0$2')}</h3>
              <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParaQuemEradgen;
