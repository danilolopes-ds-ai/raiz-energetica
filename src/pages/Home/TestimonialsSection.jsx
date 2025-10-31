import React from 'react';
import GridSection from '@/components/organisms/GridSection';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import { motion } from 'framer-motion';
import { trackGAEvent } from '@/lib/analytics';
import { trackEvent as trackMetaCustomEvent } from '@/lib/metaPixel';

const TestimonialsSection = ({ testimonials }) => {

  const handleViewportEnter = () => {
    trackGAEvent('TESTIMONIAL_ENGAGEMENT', {
        testimonial_section: 'home_page'
    });
    trackMetaCustomEvent('TestimonialView', {
        section: 'home_page'
    });
  };

  return (
    <motion.div onViewportEnter={handleViewportEnter}>
      <GridSection
        title="Depoimentos Reais de Quem <span className='text-gradient'>Escolheu Curar Pela Raiz</span>"
        subtitle="Histórias de quem chegou com dor, dúvidas ou esgotamento e encontrou clareza, leveza e reconexão."
        items={testimonials}
        renderItem={(item) => (
          <TestimonialCard 
            identifier={item.identifier}
            text={item.text}
          />
        )}
      />
    </motion.div>
  );
};

export default TestimonialsSection;