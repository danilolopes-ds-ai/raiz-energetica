import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppButton from '@/components/atoms/AppButton';
import { CheckCircle } from 'lucide-react';

const DifferentialsSection = ({ differentials }) => {
  return (
    <section className="pt-0 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:order-last"
          >
            <img 
              className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover"
              alt="Mão segurando um pêndulo de cristal sobre um gráfico de radiestesia" src="/images/services/raiz_diferente.webp" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que a Raiz é <span className="text-gradient">Diferente</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Combinamos ciência vibracional, tecnologia energética e sabedoria ancestral em um método próprio, testado, profundo e humano.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">🌿 Nossos Diferenciais:</h3>
            <div className="space-y-4">
              {differentials.map((differential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary text-glow">{differential.title}</h4>
                    <p className="text-gray-600">{differential.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-8">
              <AppButton
                asChild
                size="lg"
                variant="primary"
                className="pulse-glow transition-transform duration-200 ease-in-out hover:scale-105 w-full sm:w-auto"
              >
                <Link to="/sobre">Conheça Nossa História</Link>
              </AppButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;