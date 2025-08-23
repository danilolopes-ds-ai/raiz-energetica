import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const PainPointsSection = ({ painPoints, itemVariants }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Você faz o que pode... mas <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">a vida parece que não anda</span>?
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
            Às vezes, a raiz do problema não está no corpo, mas no seu campo energético. Veja se alguma dessas situações fala com você:
          </p>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 max-w-2xl mx-auto">
          <ul className="space-y-3 sm:space-y-4">
            {painPoints.map((point, i) => (
              <motion.li key={i} variants={itemVariants} className="flex items-start text-base sm:text-lg">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" />
                <span className="text-slate-700">{point.text}</span>
              </motion.li>
            ))}
          </ul>
          <motion.blockquote variants={itemVariants} className="mt-6 sm:mt-8 text-center text-base sm:text-lg text-slate-600 italic bg-purple-50/50 border-l-4 border-purple-400 p-3 sm:p-4 rounded-r-lg">
            Se alguma dessas frases te tocou, talvez seja o momento de dar o próximo passo e entender o que sua energia está <strong className="text-purple-600 not-italic">sinalizando</strong>.
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
