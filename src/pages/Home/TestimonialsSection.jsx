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
        title="Histórias de <span class='text-gradient'>Transformação Profunda</span>"
        subtitle="Pessoas que chegaram carregando pesos invisíveis e encontraram sua essência — radiante, inteira e livre."
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