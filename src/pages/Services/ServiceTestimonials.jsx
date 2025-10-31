import React, { useRef, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ErrorBoundary from '@/components/ErrorBoundary';

// Imports diretos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dados estáticos e componentes
import testimonials, { testimonialStats } from '@/data/testimonials';
import TestimonialCardPremium from '@/components/molecules/TestimonialCardPremium';
import { Star, TrendingUp, Users, ThumbsUp } from 'lucide-react';

// Estilos globais otimizados
const globalStyles = `
  .testimonials-swiper {
    width: 100%;
    padding: 20px 0 60px;
    min-height: 400px;
    display: flex;
    align-items: center;
    position: relative;
  }
  
  .swiper-wrapper {
    align-items: stretch;
    padding-bottom: 20px;
  }
  
  .swiper-slide {
    height: auto;
    opacity: 0.7;
    transform: scale(0.95);
    transition: all 0.4s ease;
    padding: 5px;
  }
  
  .swiper-slide-active, 
  .swiper-slide-duplicate-active {
    opacity: 1;
    transform: scale(1);
  }
  
  /* Estilos para a paginação personalizada */
  .testimonial-pagination {
    position: relative;
    bottom: 10px;
    left: 0;
    right: 0;
    z-index: 10;
    margin-top: 20px;
  }
  
  .testimonial-bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #e2e8f0;
    opacity: 0.6;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .testimonial-bullet-active {
    background-color: #ec4899;
    opacity: 1;
    transform: scale(1.2);
  }
  
  /* Melhorias para dark mode */
  .dark .testimonial-bullet {
    background-color: #4a5568;
  }
  
  .dark .testimonial-bullet-active {
    background-color: #f472b6;
  }
  
  .testimonials-swiper .swiper-wrapper {
    align-items: stretch;
  }
  
  .testimonials-swiper .swiper-slide {
    height: auto;
  }
  
  .testimonials-swiper .swiper-slide:focus-visible {
    outline: 2px solid #ec4899;
    outline-offset: 2px;
    border-radius: 0.5rem;
  }
  
  .testimonials-swiper .swiper-button-next,
  .testimonials-swiper .swiper-button-prev {
    color: #4f46e5;
    background: rgba(255, 255, 255, 0.9);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
    display: none; /* Oculto por padrão no mobile */
  }
  
  /* Mostrar setas apenas em telas médias ou maiores */
  @media (min-width: 768px) {
    .testimonials-swiper .swiper-button-next,
    .testimonials-swiper .swiper-button-prev {
      display: flex;
    }
  }
  
  .testimonials-swiper .swiper-button-next:hover,
  .testimonials-swiper .swiper-button-prev:hover {
    background: rgba(255, 255, 255, 1);
    transform: scale(1.05);
  }
  
  .testimonials-swiper .swiper-button-next:after,
  .testimonials-swiper .swiper-button-prev:after {
    font-size: 16px;
    font-weight: bold;
  }
  
  .testimonials-swiper .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(79, 70, 229, 0.3);
    opacity: 1;
    transition: all 0.2s ease;
  }
  
  .testimonials-swiper .swiper-pagination-bullet-active {
    background: #4f46e5;
    width: 24px;
    border-radius: 4px;
  }
  
  .testimonials-swiper .swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  
  .dark .testimonials-swiper .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3);
  }
  
  .dark .testimonials-swiper .swiper-pagination-bullet-active {
    background: #ec4899;
  }
  
  .dark .testimonials-swiper .swiper-button-next,
  .dark .testimonials-swiper .swiper-button-prev {
    background: rgba(15, 23, 42, 0.9);
    color: #ec4899;
  }
`;

const ServiceTestimonials = ({
  serviceName = '',
  maxTestimonials = 8,
  showTitle = true,
  showStats = true,
  autoPlay = true
}) => {
  // --- ESTADOS ---
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // --- REFS ---
  const swiperRef = useRef(null);

  // --- FILTRAR E PROCESSAR DEPOIMENTOS ---
  const filteredTestimonials = useMemo(() => {
    let filtered = [...testimonials];
    
    // Filtrar por serviço se especificado
    if (serviceName) {
      const serviceFiltered = filtered.filter(t => t.service === serviceName);
      if (serviceFiltered.length > 0) {
        filtered = serviceFiltered;
      }
    }
    
    // Embaralhar e limitar
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, maxTestimonials);
  }, [serviceName, maxTestimonials]);

  // --- CONFIGURAÇÕES RESPONSIVAS ---
  const breakpoints = useMemo(() => ({
    640: { slidesPerView: 1.5, spaceBetween: 20 },
    768: { slidesPerView: 2.2, spaceBetween: 24 },
    1024: { slidesPerView: 2.8, spaceBetween: 32 },
    1280: { slidesPerView: 3.5, spaceBetween: 40 },
  }), []);

  const updateNavigationState = useCallback(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && !swiper.destroyed) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  }, []);

  // --- RENDERIZAÇÃO PRINCIPAL ---
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
      <div className="container mx-auto px-4">
        {/* Título e Stats */}
        {showTitle && (
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Histórias de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Transformação Real
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Veja como nossos serviços transformaram a vida de centenas de pessoas
            </motion.p>
          </div>
        )}

        {/* Estatísticas de Social Proof */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Users, label: 'Clientes Atendidos', value: testimonialStats.totalClients },
              { icon: ThumbsUp, label: 'Satisfação', value: testimonialStats.satisfaction },
              { icon: Star, label: 'Avaliação Média', value: testimonialStats.averageRating },
              { icon: TrendingUp, label: 'Recomendam', value: testimonialStats.recommendationRate }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Carrossel de Depoimentos */}
        <ErrorBoundary fallback={<p className="text-center">Erro ao carregar depoimentos.</p>}>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={breakpoints}
            loop={filteredTestimonials.length > 3}
            grabCursor={true}
            watchSlidesProgress={true}
            className="testimonials-swiper"
            autoplay={autoPlay ? {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            } : false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            onSlideChange={updateNavigationState}
            onAfterInit={updateNavigationState}
          >
            {filteredTestimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="h-auto pb-12">
                <TestimonialCardPremium 
                  testimonial={testimonial} 
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </ErrorBoundary>
      </div>
    </section>
  );
};

ServiceTestimonials.propTypes = {
  serviceName: PropTypes.string,
  maxTestimonials: PropTypes.number,
  showTitle: PropTypes.bool,
  showStats: PropTypes.bool,
  autoPlay: PropTypes.bool
};

export default React.memo(ServiceTestimonials);