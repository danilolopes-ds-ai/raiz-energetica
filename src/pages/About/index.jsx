import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '@/pages/About/AboutHero';
import MissionSection from '@/pages/About/MissionSection';
import DaniloLopesSection from '@/pages/About/DaniloLopesSection';
import PoemSection from '@/pages/About/PoemSection';
import BridgeImageSection from '@/pages/About/BridgeImageSection';
import TimelineSection from '@/pages/About/TimelineSection';
import MethodologySection from '@/pages/About/MethodologySection';
import AboutCTA from '@/pages/About/AboutCTA';
import WhyWeAreDifferentSection from '@/pages/About/WhyWeAreDifferentSection';
import CommunitySection from '@/pages/About/CommunitySection';

import { GraduationCap, Zap, Sparkles, Award, Rocket, BookOpen } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    { year: "2012", title: "Fisioterapia", description: "Início da jornada pelo corpo", icon: GraduationCap },
    { year: "2015", title: "Acupuntura", description: "Integração com os sistemas orientais", icon: Zap },
    { year: "2016", title: "Radiestesia Genética", description: "O encontro com a raiz energética", icon: Sparkles },
    { year: "2017–2019", title: "Coordenação na ABRADGEN", description: "Consolidação da expertise centro terapêutico", icon: Award },
    { year: "2021", title: "Integração de Saberes Ancestrais", description: "Ampliação da visão terapêutica com práticas xamânicas e espirituais", icon: BookOpen },
    { year: "2024", title: "Fundação da Raiz Energética", description: "Quando a missão virou movimento", icon: Rocket }
  ];

  const aboutStats = [
    {
      emoji: "🌿",
      number: 500,
      suffix: "+",
      label: "Pessoas Atendidas",
      description: "Caminhos individuais que começaram pela raiz e encontraram leveza, clareza e transformação verdadeira."
    },
    {
      emoji: "💠",
      number: 10,
      suffix: "+",
      label: "Técnicas Integradas",
      description: "Radgen, chakras, acupuntura, MTC, linguagem do corpo e mais — aplicadas com sensibilidade e estratégia."
    },
    {
      emoji: "📆",
      number: 10,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Uma trajetória de escuta, prática e resultados com terapias vibracionais profundas e personalizadas."
    },
    {
      emoji: "🧠",
      label: "Suporte com Inteligência Energética",
      labelSuffix: "(em breve)",
      description: "Helena, nossa assistente inteligente, vai te acompanhar com precisão, linguagem sensível e presença energética."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nós - Raiz Energética</title>
        <meta name="description" content="Conheça a história e a metodologia da Raiz Energética. A evolução da terapia energética integrativa com Danilo Lopes, Fisioterapeuta e especialista em Radiestesia Genética." />
      </Helmet>
      <div>
        <AboutHero stats={aboutStats} />
        <DaniloLopesSection />
        <WhyWeAreDifferentSection />
        <MethodologySection />
        <MissionSection />
        <TimelineSection timeline={timeline} />
        <AboutCTA />
        <PoemSection />
        <BridgeImageSection />
        <CommunitySection />
      </div>
    </>
  );
};

export default AboutPage;

