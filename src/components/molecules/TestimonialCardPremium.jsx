import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { serviceThemes } from '@/data/testimonials';

const TestimonialCardPremium = ({ testimonial, index = 0, showServiceBadge = true }) => {
  const theme = serviceThemes[testimonial.service] || serviceThemes['Limpeza Energética'];

  // Gerar iniciais do avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <div className="h-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col relative overflow-hidden group">
        {/* Gradiente sutil de fundo */}
        <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        {/* Ícone de quote decorativo */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-16 h-16 text-gray-400" />
        </div>

        {/* Badge do serviço */}
        {showServiceBadge && (
          <div className="relative z-10 mb-4">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${theme.badge}`}>
              {testimonial.verified && (
                <CheckCircle className="w-3.5 h-3.5" />
              )}
              {testimonial.service}
            </span>
          </div>
        )}

        {/* Highlight (destaque do benefício) */}
        {testimonial.highlight && (
          <div className="relative z-10 mb-3">
            <p className={`text-sm font-semibold ${theme.text}`}>
              ✨ {testimonial.highlight}
            </p>
          </div>
        )}

        {/* Estrelas de avaliação */}
        <div className="relative z-10 flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? 'fill-amber-400 text-amber-400'
                  : 'fill-gray-200 text-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Depoimento */}
        <blockquote className="relative z-10 flex-grow mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
            "{testimonial.testimonial}"
          </p>
        </blockquote>

        {/* Footer com info do autor */}
        <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
          {/* Avatar */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${theme.gradient} flex items-center justify-center text-white font-bold shadow-md`}>
            {getInitials(testimonial.name)}
          </div>

          {/* Info */}
          <div className="flex-grow min-w-0">
            <p className="font-semibold text-gray-900 dark:text-white truncate">
              {testimonial.name}
              {testimonial.age && <span className="text-gray-500 font-normal">, {testimonial.age}</span>}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
              {testimonial.role}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
              {testimonial.location} • {testimonial.date}
            </p>
          </div>
        </div>

        {/* Efeito de brilho no hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}
        />
      </div>
    </motion.div>
  );
};

export default TestimonialCardPremium;
