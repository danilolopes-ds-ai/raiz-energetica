import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const themes = {
  amber: {
    bg: 'bg-amber-50',
    button: 'bg-amber-600 hover:bg-amber-700 text-white',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    image: '/images/services/radgen-card.webp',
  },
  teal: {
    bg: 'bg-teal-50',
    button: 'bg-teal-600 hover:bg-teal-700 text-white',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    image: '/images/services/limpeza-card.webp',
  },
  rose: {
    bg: 'bg-rose-50',
    button: 'bg-rose-600 hover:bg-rose-700 text-white',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    image: '/images/services/harmonia-card.webp',
  },
  indigo: {
    bg: 'bg-indigo-50',
    button: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
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
      className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ${theme.bg}`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center`}>
        <div className={`p-8 md:p-12 order-2 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>

          <h3 className={`text-3xl font-bold tracking-tight text-slate-900`}>{service.title}</h3>
          <p className="mt-4 text-lg text-slate-600">{service.description}</p>
          <Button asChild className={`mt-8 w-full md:w-auto font-bold rounded-full whitespace-nowrap text-center px-4 py-3 text-sm sm:px-8 sm:py-4 sm:text-base ${theme.button}`}>
            <Link to={`/${service.slug}`} className="flex items-center justify-center">
              {buttonText} <ArrowRight className="ml-2 w-5 h-5 inline-block align-middle" />
            </Link>
          </Button>
        </div>
        <div className={`order-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
          <img src={theme.image} alt={service.title} className="w-full h-full object-cover min-h-[300px] md:h-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;