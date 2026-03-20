import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Text from '@/components/atoms/Text';


const AboutCTA = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <div>
            <Text as="h2" variant="h2" className="mb-4">
              A Raiz Energética é um <span className="text-gradient">movimento</span>.
            </Text>
            <Text variant="lead" className="max-w-3xl mx-auto">
              Um convite para quem está pronta(o) para parar de tapar sintomas e finalmente entender, liberar e transformar o que está na origem.
            </Text>
            <Text as="p" variant="lead" className="font-semibold mt-6">
              🌿 Descubra como sua energia pode se alinhar à sua essência.
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-white hover:opacity-90 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <a href="https://wa.me/message/QBS4LCD5777XM1" target="_blank" rel="noopener noreferrer">
                Falar com um Especialista Raiz
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300"
            >
              <Link to="/servicos">
                🌀 Explorar Caminhos de reequilíbrio
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;