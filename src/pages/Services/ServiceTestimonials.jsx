import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { trackGAEvent } from '@/lib/analytics';
import { trackEvent as trackMetaCustomEvent } from '@/lib/metaPixel';
import ErrorBoundary from '@/components/ErrorBoundary';

// Imports diretos do Swiper (mais simples e confiável)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Componentes locais
import { 
  TestimonialCard, 
  TestimonialNavigation,
  DEMO_TESTIMONIALS,
  SERVICE_COLORS,
  getServiceColor
} from './components/Testimonials';

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
  autoPlay = true
}) => {
  // --- ESTADOS ---
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // --- REFS ---
  const swiperRef = useRef(null);
  const containerRef = useRef(null);

  // --- CONFIGURAÇÕES RESPONSIVAS ---
  const breakpoints = useMemo(() => ({
    640: { slidesPerView: 1.5, spaceBetween: 20 },
    768: { slidesPerView: 2.2, spaceBetween: 24 },
    1024: { slidesPerView: 2.8, spaceBetween: 32 },
    1280: { slidesPerView: 3.5, spaceBetween: 40 },
  }), []);

  // --- CALLBACKS OTIMIZADOS ---
  const handlePrev = useCallback(() => {
    swiperRef.current?.swiper?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.swiper?.slideNext();
  }, []);

  const updateNavigationState = useCallback(() => {
    const swiper = swiperRef.current?.swiper;
    if (swiper && !swiper.destroyed) {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  }, []);

  // --- CARREGAMENTO DE DADOS ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const loadAndProcessTestimonials = async () => {
      setIsLoading(true);
      try {
        const { supabase } = await import('@/lib/supabase');
        const { data: items, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('status', 'Ativo');
        
        if (error) throw error;

        let filtered = items || [];
        if (serviceName) {
          const serviceFiltered = filtered.filter(t => t.service === serviceName);
          if (serviceFiltered.length > 0) {
            filtered = serviceFiltered;
          }
        }

        const shuffled = filtered.sort(() => 0.5 - Math.random());
        const limited = shuffled.slice(0, maxTestimonials);
        
        const processed = limited.map(t => ({ ...t, ...getServiceColor(t.service) }));

        setTestimonials(processed);

      } catch (error) {
        console.error("Falha ao carregar depoimentos, usando dados de fallback:", error);
        const fallbackData = DEMO_TESTIMONIALS.slice(0, maxTestimonials)
          .map(t => ({ ...t, ...getServiceColor(t.service) }));
        setTestimonials(fallbackData);
      } finally {
        setIsLoading(false);
      }
    };

    loadAndProcessTestimonials();
  }, [isVisible, serviceName, maxTestimonials]);

  // --- RENDERIZAÇÃO CONDICIONAL ---
  if (isLoading) {
    return (
      <section ref={containerRef} className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500"></div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <section ref={containerRef} className="py-16 bg-yellow-50 dark:bg-yellow-900/20">
        <div className="container mx-auto px-4 text-center">
          <p>Nenhum depoimento disponível.</p>
        </div>
      </section>
    );
  }

  // --- RENDERIZAÇÃO PRINCIPAL ---
  return (
    <section 
      ref={containerRef}
      className="py-16 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
      <div className="container mx-auto px-4">
        {showTitle && (
          <TestimonialNavigation 
            onPrev={handlePrev}
            onNext={handleNext}
            isBeginning={isBeginning}
            isEnd={isEnd}
            serviceName={serviceName}
          />
        )}
        
        <ErrorBoundary fallback={<p>Erro ao carregar o carrossel.</p>}>
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={breakpoints}
            loop={testimonials.length > 3}
            grabCursor={true}
            watchSlidesProgress={true}
            className="testimonials-swiper"
            autoplay={autoPlay ? {
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            } : false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '.testimonial-pagination',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            onSlideChange={updateNavigationState}
            onAfterInit={updateNavigationState}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id || index} className="h-auto py-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    className="h-full"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
            <div className="testimonial-pagination flex justify-center mt-8 space-x-2"></div>
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
  autoPlay: PropTypes.bool
};

export default React.memo(ServiceTestimonials);