import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    service: 'Diagnóstico – Desvendando a Raiz',
    quote: 'Achei que era só cansaço, mas quando vi o relatório entendi que era um padrão antigo da minha família. Foi como acender uma luz dentro de mim.',
    author: 'Fernanda R.',
    age: 35,
    emoji: '🌀'
  },
  {
    id: 2,
    service: 'Diagnóstico – Desvendando a Raiz',
    quote: 'O PDF que recebi parecia ter sido escrito por alguém que me conhece há anos. Direto, profundo e revelador. Já comecei o plano de ação.',
    author: 'Eduardo M.',
    age: 41,
    emoji: '🌀'
  },
  {
    id: 3,
    service: 'Radiestesia Genética',
    quote: 'Eu tinha dores que médicos não explicavam. A Radiestesia mostrou que era algo herdado da minha avó. Depois da sessão, senti alívio real.',
    author: 'Simone G.',
    age: 47,
    emoji: '🧬'
  },
  {
    id: 4,
    service: 'Radiestesia Genética',
    quote: 'A RadGen tocou num ponto que eu nem sabia que existia. Era um padrão emocional da minha mãe. Desde então, me sinto mais leve e presente.',
    author: 'Danilo C.',
    age: 33,
    emoji: '🧬'
  },
  {
    id: 5,
    service: 'Harmonia Geracional',
    quote: 'Meu filho de 15 anos não me olhava nos olhos há semanas. Depois do tratamento, ele me chamou pra conversar. Eu chorei.',
    author: 'Elisângela M.',
    age: null,
    details: 'mãe do Arthur',
    emoji: '💞'
  },
  {
    id: 6,
    service: 'Limpeza Energética Profunda',
    quote: 'A sensação de peso sumiu. Meu quarto parecia mais claro, mais limpo. Foi como tomar banho por dentro.',
    author: 'Amanda K.',
    age: 30,
    emoji: '✨'
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const prevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            <span className="block">💬 Depoimentos de quem já viveu a transformação</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre suas experiências com nossos serviços
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors -translate-x-1/2 md:-translate-x-1/2"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors translate-x-1/2 md:translate-x-1/2"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swiper */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              bulletClass: 'w-2 h-2 rounded-full bg-teal-200 inline-block mx-1 cursor-pointer transition-all duration-300',
              bulletActiveClass: 'w-6 bg-teal-600',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100 h-full">
                  <div className="flex flex-col h-full">
                    <div className="mb-6 flex items-center">
                      <span className="text-3xl mr-3">{testimonial.emoji}</span>
                      <span className="text-sm font-medium text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                    
                    <div className="relative flex-1">
                      <Quote className="absolute -top-2 left-0 text-teal-100 w-8 h-8" />
                      <blockquote className="text-lg md:text-xl text-slate-700 italic pl-8 md:pl-12 mb-6">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <p className="font-medium text-slate-900">
                        {testimonial.author}
                        {testimonial.age && `, ${testimonial.age} anos`}
                        {testimonial.details && ` (${testimonial.details})`}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="flex justify-center mt-8 testimonial-pagination" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
