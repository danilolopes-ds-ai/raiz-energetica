import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// Carregamento preguiçoso do ícone para melhor performance
const Star = lazy(() => import('lucide-react').then(module => ({ default: module.Star })));

// Preload de fonte crítica
const preloadFonts = () => {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = '/fonts/inter-var.woff2';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
};

// Executa o preload quando o módulo for carregado
if (typeof window !== 'undefined') {
  preloadFonts();
}

const TestimonialCard = ({ testimonial, index, className = '' }) => {
  // Estado para controle de hidratação no servidor
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!testimonial) return null;
  
  // Fallback de carregamento
  if (!isMounted) {
    return (
      <div className={`h-full ${className} bg-white dark:bg-slate-800 rounded-xl p-6 animate-pulse`}>
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="space-y-3 mt-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
        </div>
        <div className="flex items-center mt-6">
          <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full mr-4" />
          <div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
            <div className="h-3 w-16 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // Valores padrão para evitar erros
  const safeTestimonial = {
    id: 'unknown',
    service: 'default',
    highlight: '',
    testimonial: 'Depoimento não disponível',
    name: 'Anônimo',
    age: '',
    location: '',
    rating: 5,
    ...testimonial
  };

  // Variantes de animação
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        scale: {
          type: 'spring',
          stiffness: 300,
          damping: 20
        }
      }
    }),
    hover: {
      y: -4,
      scale: 1.01,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 15
      }
    }
  };

  // Extrair cores do gradiente de forma segura
  let gradientFrom = 'pink-500';
  let gradientTo = 'purple-600';
  
  if (safeTestimonial.gradient) {
    const gradientParts = safeTestimonial.gradient.split(' ');
    if (gradientParts[0]) gradientFrom = gradientParts[0].replace('from-', '');
    if (gradientParts[1]) gradientTo = gradientParts[1].replace('to-', '');
  }

  return (
    <motion.article
      className={`h-full ${className} focus:outline-none rounded-xl overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${gradientFrom} dark:focus-visible:ring-${gradientTo}`}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileFocus="hover"
      whileTap={{ scale: 0.99 }}
      variants={cardVariants}
      custom={index % 3}
      aria-labelledby={`testimonial-${safeTestimonial.id}-title`}
      tabIndex={0}
      aria-describedby={`testimonial-${safeTestimonial.id}-rating`}
    >
      <div 
        className={`h-full flex flex-col p-6 transition-all duration-300
          backdrop-blur-sm ${safeTestimonial.bg || 'bg-white dark:bg-slate-800'} 
          ${safeTestimonial.border || 'border border-slate-200 dark:border-slate-700'}
          ${safeTestimonial.hover || 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}
          shadow-sm hover:shadow-lg dark:shadow-lg/20 dark:hover:shadow-xl/30
          group/card relative border-opacity-30 dark:border-opacity-20 h-full`}
      >
        {/* Efeito de gradiente sutil no hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover/card:opacity-10 group-focus/card:opacity-10 rounded-xl"
          style={{
            background: `linear-gradient(135deg, var(--${gradientFrom}), var(--${gradientTo}))`,
          }}
          aria-hidden="true"
        />
        
        <div className="relative z-10 flex-grow flex flex-col">
          {/* Cabeçalho com destaque - Agora mostrando o serviço */}
          {safeTestimonial.service && (
            <div className="mb-4">
              <span 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                  bg-white text-gray-700 border border-gray-200
                  transition-colors duration-300 hover:bg-gray-50"
              >
                {safeTestimonial.service}
              </span>
            </div>
          )}

          {/* Texto do depoimento */}
          <blockquote className="flex-grow mb-6 flex flex-col">
            <div className="flex-grow">
              <div 
                className={`text-lg leading-relaxed ${safeTestimonial.textColor || 'text-gray-700 dark:text-gray-300'}`}
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '120px',
                }}
              >
                {safeTestimonial.highlight && (
                  <span className="block text-pink-600 dark:text-pink-400 font-medium mb-2">
                    "{safeTestimonial.highlight}"
                  </span>
                )}
                <span style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 6,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {safeTestimonial.testimonial}
                </span>
              </div>
            </div>
          </blockquote>

          {/* Rodapé com informações do autor */}
          <footer className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                {safeTestimonial.avatar ? (
                  <img
                    src={safeTestimonial.avatar}
                    alt={`Foto de ${safeTestimonial.name}`}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                    width={48}
                    height={48}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className={`h-12 w-12 rounded-full flex items-center justify-center text-white font-medium
                  ${safeTestimonial.avatarBg || 'bg-gradient-to-r from-pink-500 to-purple-600'}`}
                  aria-hidden={!!safeTestimonial.avatar}
                >
                  {safeTestimonial.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="min-w-0">
                <h3 
                  id={`testimonial-${safeTestimonial.id}-title`} 
                  className="font-medium text-gray-900 dark:text-white truncate"
                  title={safeTestimonial.name}
                >
                  {safeTestimonial.name}
                  {safeTestimonial.age && `, ${safeTestimonial.age} anos`}
                </h3>
                <div className="flex items-center mt-1 flex-wrap">
                  <div className="flex text-amber-400 mr-2" id={`testimonial-${safeTestimonial.id}-rating`}>
                    <span className="sr-only">Avaliação: {safeTestimonial.rating} de 5 estrelas</span>
                    <Suspense fallback={<div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`h-4 w-4 flex-shrink-0 ${star <= safeTestimonial.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-400'}`}
                          aria-hidden="true"
                        />
                      ))}
                    </Suspense>
                  </div>
                  {safeTestimonial.location && (
                    <span className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      • {safeTestimonial.location}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </motion.article>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    service: PropTypes.string,
    highlight: PropTypes.string,
    testimonial: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    location: PropTypes.string,
    rating: PropTypes.number,
    avatar: PropTypes.string,
    avatarBg: PropTypes.string,
    bg: PropTypes.string,
    border: PropTypes.string,
    hover: PropTypes.string,
    textColor: PropTypes.string,
    badge: PropTypes.string,
    gradient: PropTypes.string
  }),
  index: PropTypes.number,
  className: PropTypes.string
};

export default React.memo(TestimonialCard);
