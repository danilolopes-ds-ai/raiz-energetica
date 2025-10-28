import React from 'react';
import { motion } from 'framer-motion';
import Text from '@/components/atoms/Text';
import AnimatedCounter from '@/components/atoms/AnimatedCounter';

const AboutHero = ({ stats }) => {
  return (
    <section className="hero-pattern section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              A Jornada da <span className="text-gradient">Raiz Energética</span>
            </h1>
            
            <div className="my-8">
              <img  
                className="rounded-2xl shadow-xl w-full max-w-2xl mx-auto object-cover"
                alt="Mulher conectada com a natureza, simbolizando a raiz energética"
                src="/images/services/raiz-mulher.webp"
                loading="lazy"
              />
              <p className="text-sm italic text-gray-500 mt-3">
                “Cura começa quando voltamos a nos conectar com aquilo que sustenta nossa essência.”
              </p>
            </div>

            <div className="space-y-4 text-left">
              <h2 className="text-2xl md:text-3xl text-gray-700 font-bold leading-snug">
                Transformação verdadeira começa quando escutamos o que os sintomas tentam dizer.
              </h2>
              <p className="text-gray-600 leading-relaxed">
                O que começou com um olhar clínico e técnico sobre o corpo evoluiu ao longo de quase uma década para uma visão mais profunda, energética e verdadeiramente humana do processo de cura.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje, a Raiz Energética é mais do que um projeto terapêutico: é um movimento de transformação que ajuda pessoas especialmente mulheres, mães e famílias a reconectarem com sua força vital, restaurarem sua energia e encontrarem direção onde antes parecia não haver caminho.
              </p>
            </div>

            <div className="bg-[#1b413a] border border-white/10 rounded-xl p-4 sm:p-6 mt-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 sm:gap-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                    className="text-left"
                  >
                    <div className="font-bold text-lg text-[#99CD85] mb-1">
                      {stat.emoji}{' '}
                      {stat.number ? (
                        <>
                          <AnimatedCounter value={stat.number} suffix={stat.suffix || ''} /> {stat.label}
                        </>
                      ) : (
                        <>
                          {stat.label} {stat.labelSuffix && <span className="text-emerald-400/60">{stat.labelSuffix}</span>}
                        </>
                      )}
                    </div>
                    <Text variant="caption" className="text-gray-300">{stat.description}</Text>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;