import React from 'react';
import HelenaHero from '@/pages/Helena/HelenaHero';
import HelenaFeaturesSection from '@/pages/Helena/HelenaFeaturesSection';
import HelenaQuestionsSection from '@/pages/Helena/HelenaQuestionsSection';
import WhatsAppIntegrationSection from '@/pages/Helena/WhatsAppIntegrationSection';
import HelenaTestimonialsSection from '@/pages/Helena/HelenaTestimonialsSection';
import HelenaCTA from '@/pages/Helena/HelenaCTA';
import { 
  Clock, 
  Headphones,
  Heart,
  Zap
} from 'lucide-react';

const Helena = () => {
  const helenaFeatures = [
    {
      icon: Clock,
      title: "Disponível 24/7",
      description: "Helena está sempre online para responder suas dúvidas, a qualquer hora do dia ou da noite."
    },
    {
      icon: Headphones,
      title: "Especialista em Radiestesia",
      description: "Treinada com todo o conhecimento sobre radiestesia genética e nossos tratamentos."
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Programada para oferecer um atendimento acolhedor e personalizado."
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Receba orientações imediatas sobre sintomas, tratamentos e agendamentos."
    }
  ];

  const helenaQuestions = [
    "O que é radiestesia genética?",
    "Qual tratamento é ideal para mim?",
    "Como agendar uma consulta?",
    "Quanto custam os tratamentos?",
    "Vocês atendem online?",
    "Qual a duração das sessões?",
    "Como funciona o processo?",
    "Quais são os resultados esperados?",
    "Preciso de preparação prévia?",
    "Quantas sessões são necessárias?"
  ];

  const testimonials = [
    {
      name: "Carla Mendes",
      text: "Helena me ajudou a entender melhor sobre radiestesia antes da minha consulta. Muito atenciosa!",
      rating: 5
    },
    {
      name: "Roberto Lima",
      text: "Conversei com Helena às 2h da manhã e ela me orientou perfeitamente. Incrível ter esse suporte!",
      rating: 5
    },{
      name: "Fernanda Costa",
      text: "Helena é muito eficiente! Me explicou todos os serviços e ainda me ajudou a escolher o melhor horário.",
      rating: 5
    }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá Helena! Gostaria de saber mais sobre os tratamentos da Raiz Energética.");
    window.open(`https://wa.me/5511966101949?text=${message}`, '_blank');
  };

  return (
    <div className="pt-16">
      <HelenaHero handleWhatsApp={handleWhatsApp} />
      <HelenaFeaturesSection features={helenaFeatures} />
      <HelenaQuestionsSection questions={helenaQuestions} handleWhatsApp={handleWhatsApp} />
      <WhatsAppIntegrationSection handleWhatsApp={handleWhatsApp} />
      <HelenaTestimonialsSection testimonials={testimonials} />
      <HelenaCTA handleWhatsApp={handleWhatsApp} />
    </div>
  );
};

export default Helena;