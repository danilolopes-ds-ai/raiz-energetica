import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import HeroSection from '@/components/organisms/HeroSection';

const HomeHero = ({ stats }) => {
  const heroProps = {
    badge: {
      text: '✨ Radiestesia Genética Avançada',
      className: 'bg-[#2D8C5C]/10 text-[#2D8C5C] border-[#2D8C5C]/20 text-xs sm:text-sm hover:bg-[#2D8C5C]/15 hover:border-[#2D8C5C]/30 transition-colors',
    },
    title: 'Investigamos a <span class="text-gradient">Raiz</span>, curamos a <span class="text-gradient">causa</span>',
    subtitle: 'Aqui você encontra as respostas que seus sintomas escondem. Não é sobre mascarar a dor, é entender, acolher e ir na raiz onde tudo começou.',
    primaryCta: {
      text: 'Fale com um Especialista Raiz',
      link: 'https://wa.me/message/QBS4LCD5777XM1',
    },
    secondaryCta: {
      text: '🌀 Explorar Caminhos de Cura',
      link: '/servicos',
    },
    image: {
      src: '/images/services/logo-raizenergetica.webp',
      description: 'Logo da Raiz Energética',
      alt: 'Logo da Raiz Energética',
    },
    stats: stats,
  };

  return <HeroSection {...heroProps} />;
};

export default HomeHero;