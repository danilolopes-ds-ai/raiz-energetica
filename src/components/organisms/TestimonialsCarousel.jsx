import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Carousel from '@/components/molecules/Carousel';

const TestimonialsCarousel = ({ testimonials }) => {
  const renderTestimonial = (testimonial, index) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-slate-200/80 shadow-md p-6 flex flex-col bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <p className="text-slate-600 italic mb-6 flex-grow text-lg leading-relaxed">
          "{testimonial.text}"
        </p>
        <div className="text-right border-t border-slate-100 pt-4">
          <p className="font-bold text-indigo-600 text-lg">{testimonial.name}</p>
          <p className="text-sm text-slate-500 italic">{testimonial.profession}</p>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-50 to-indigo-50/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pessoas que descobriram a raiz e{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              mudaram seu rumo
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Veja os resultados reais de quem já passou pelo diagnóstico energético
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Carousel
            items={testimonials}
            renderItem={renderTestimonial}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            itemsPerView={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3}
            className="max-w-7xl mx-auto"
          />
        </motion.div>

        {/* Estatísticas de impacto */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
            <div className="text-slate-600">Diagnósticos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
            <div className="text-slate-600">Taxa de Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">24h</div>
            <div className="text-slate-600">Entrega Garantida</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
