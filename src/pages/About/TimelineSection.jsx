import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Text from '@/components/atoms/Text';

const TimelineSection = ({ timeline }) => {
  const containerRef = useRef(null);
  
  // Track scroll progress of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Add spring animation for smooth transition
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="section-padding" ref={containerRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Text as="h2" variant="h2" className="mb-4">
            Uma Jornada em <span className="text-gradient">Constante Evolução</span>
          </Text>
          <Text variant="lead" className="max-w-3xl mx-auto">
            De uma formação acadêmica sólida a um chamado energético, cada passo construiu o que hoje chamamos de Raiz Energética.
          </Text>
        </motion.div>

        <div className="relative max-w-5xl mx-auto mt-16">
          {/* Background static line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-green-200 rounded-full -translate-x-1/2" aria-hidden="true"></div>
          
          {/* Animated growing line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-full -translate-x-1/2 origin-top shadow-lg shadow-emerald-500/50"
            style={{ 
              scaleY: scaleY,
              height: '100%'
            }}
            aria-hidden="true"
          ></motion.div>

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className="relative md:flex md:items-center md:even:flex-row-reverse group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full md:w-1/2 md:odd:pl-16 md:even:pr-16 pl-12">
                  <div className="p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-lg border-green-500 border-r-4 md:odd:border-r-0 md:odd:border-l-4 text-left md:even:text-right">
                    <p className="text-sm font-semibold text-gray-800 mb-1">{item.year}</p>
                    <h3 className="text-xl font-bold text-coral-500 mb-2">{item.title}</h3>
                    <p className="text-green-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full border-2 border-green-600 shadow-md z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;