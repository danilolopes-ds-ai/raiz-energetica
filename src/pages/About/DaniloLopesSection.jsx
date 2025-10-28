import React from 'react';
import { motion } from 'framer-motion';


const DaniloLopesSection = () => {

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img  
              className="rounded-2xl shadow-xl w-full h-[450px] md:h-[650px] object-cover object-top"
              alt="Retrato de Danilo Lopes, fundador da Raiz Energética, em um ambiente natural e sereno."
              src="/images/services/foto-perfil-raiz-site.webp"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="text-gradient">Danilo Lopes</span>
              </h2>
              <p className="text-lg md:text-xl font-semibold text-gray-700 mb-4">
                Fisioterapeuta, Acupunturista e Especialista em Radiestesia Genética
              </p>
              <p className="text-lg text-gray-600 italic border-l-4 border-green-700 pl-4">
                "Minha formação começou no corpo. Minha missão se revelou no ser Humano como um todo."
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>Formado em Fisioterapia 2012 e pós-graduado em Acupuntura 2015, Danilo sempre buscou compreender o ser humano de forma integral.</p>
              <p>Mas foi em 2016, ao se aprofundar na Radiestesia Genética, que encontrou um mapa mais sutil e revelador, capaz de acessar o que os exames não mostravam e o que os sintomas silenciosamente sinalizavam.</p>
              <p>Entre 2017 e 2019, atuou como coordenador de formação na ABRADGEN, ao lado da criadora da técnica, acompanhando centenas de casos e ampliando sua experiência clínica.</p>
              <p>Desde então, nunca parou de estudar, integrar e atender. Sua escuta é afiada, sua intuição é treinada e sua entrega é contínua.</p>
              <p>Hoje, sua missão é guiar pessoas em processos de cura profunda com sensibilidade, técnica e verdade.</p>
              <p className="font-semibold text-lg text-green-800 pt-2">Sempre a partir da raiz 🌳🍃</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DaniloLopesSection;