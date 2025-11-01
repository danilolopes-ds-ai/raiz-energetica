import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const themes = {
  amber: {
    gradient: 'from-amber-500/10 via-orange-500/10 to-yellow-500/10',
    gradientHover: 'from-amber-500/20 via-orange-500/20 to-yellow-500/20',
    button: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg shadow-amber-500/30',
    iconBg: 'bg-gradient-to-br from-amber-100 to-orange-100',
    iconColor: 'text-amber-600',
    borderGlow: 'border-amber-200/50',
    image: '/images/services/radgen-card.webp',
  },
  teal: {
    gradient: 'from-teal-500/10 via-emerald-500/10 to-cyan-500/10',
    gradientHover: 'from-teal-500/20 via-emerald-500/20 to-cyan-500/20',
    button: 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg shadow-teal-500/30',
    iconBg: 'bg-gradient-to-br from-teal-100 to-emerald-100',
    iconColor: 'text-teal-600',
    borderGlow: 'border-teal-200/50',
    image: '/images/services/limpeza-card.webp',
  },
  rose: {
    gradient: 'from-rose-500/10 via-pink-500/10 to-fuchsia-500/10',
    gradientHover: 'from-rose-500/20 via-pink-500/20 to-fuchsia-500/20',
    button: 'bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white shadow-lg shadow-rose-500/30',
    iconBg: 'bg-gradient-to-br from-rose-100 to-pink-100',
    iconColor: 'text-rose-600',
    borderGlow: 'border-rose-200/50',
    image: '/images/services/harmonia-card.webp',
  },
  indigo: {
    gradient: 'from-indigo-500/10 via-purple-500/10 to-blue-500/10',
    gradientHover: 'from-indigo-500/20 via-purple-500/20 to-blue-500/20',
    button: 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30',
    iconBg: 'bg-gradient-to-br from-indigo-100 to-purple-100',
    iconColor: 'text-indigo-600',
    borderGlow: 'border-indigo-200/50',
    image: '/images/services/diagnostico-card.webp',
  },
};

const ServiceCard = ({ service, index }) => {
  // Mapeamento explícito para garantir que cada serviço tenha o tema visual correto.
  const serviceThemeMap = {
    'Desvendando a Raiz': 'indigo',
    'Limpeza Energética': 'teal',
    'Radiestesia Genética': 'amber',
    'Harmonia Geracional': 'rose',
  };

  const themeKey = serviceThemeMap[service.title] || 'indigo'; // Fallback para um tema padrão

  const buttonTextMap = {
    'Desvendando a Raiz': 'Desvendar a Raiz',
    'Limpeza Energética': 'Como Funciona a Limpeza',
    'Radiestesia Genética': 'Conhecer a Radgen',
    'Harmonia Geracional': 'Explorar a Harmonia',
  };
  const buttonText = buttonTextMap[service.title] || 'Começar Minha Jornada';
  const theme = themes[themeKey];
  const isReversed = index % 2 !== 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Card com glassmorphism */}
      <div className={`relative rounded-3xl overflow-hidden border-2 ${theme.borderGlow} backdrop-blur-sm bg-gradient-to-br ${theme.gradient} hover:${theme.gradientHover} transition-all duration-500 shadow-xl hover:shadow-2xl`}>
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center relative z-10`}>
          <div className={`p-8 md:p-12 order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              {service.title}
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.description}
            </p>
            
            <Button 
              asChild 
              className={`mt-8 w-full md:w-auto font-bold rounded-full whitespace-nowrap text-center px-8 py-6 text-base ${theme.button} group-hover:scale-105 transition-transform duration-300`}
            >
              <Link to={`/${service.slug}`} className="flex items-center justify-center">
                {buttonText}
                <ArrowRight className="ml-2 w-5 h-5 inline-block align-middle group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
          
          <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'} relative overflow-hidden`}>
            <div className="relative group-hover:scale-105 transition-transform duration-500">
              <img 
                src={theme.image} 
                alt={service.title} 
                className="w-full h-full object-cover min-h-[300px] md:h-full"
              />
              {/* Overlay gradiente na imagem */}
              <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} mix-blend-overlay`} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;