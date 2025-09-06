import React, { useState } from 'react';
import { X } from 'lucide-react';
import HomeHero from '@/pages/Home/HomeHero';
import MethodologySection from '@/pages/Home/MethodologySection';
import DifferentialsSection from '@/pages/Home/DifferentialsSection';
import TestimonialsSection from '@/pages/Home/TestimonialsSection';
import DaniloLopesSection from '@/pages/Home/DaniloLopesSection';
import CtaSection from './Home/CtaSection';
import WhoIsItForSection from './Home/WhoIsItForSection';
import BookingSection from './Home/BookingSection';
import { 
  Search, 
  Target, 
  Heart
} from 'lucide-react';

const Home = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);
  const stats = [
    {
      title: "🌿 500+ Pessoas Atendidas",
      description: "Caminhos individuais que começaram pela raiz e encontraram leveza, direção e reconexão."
    },
    {
      title: "🔮 95% de Relatos Positivos",
      description: "A maioria sente mudança perceptível já nas primeiras sessões — mesmo sem saber explicar como."
    },
    {
      title: "🧬 9+ Anos de Experiência",
      description: "Anos de prática, pesquisa e resultados com terapias vibracionais profundas e integrativas."
    },
    {
      title: "🧠 Suporte 24h com Inteligência Energética (em breve)",
      description: "Helena, nossa assistente inteligente, vai te acompanhar com precisão, sensibilidade e linguagem consciente."
    }
  ];

  const methodology = [
    {
      icon: Search,
      title: "Investigação Profunda",
      description: "Utilizamos a Radiestesia Genética para acessar a raiz invisível dos desequilíbrios. Padrões ancestrais, memórias celulares e campos sutis."
    },
    {
      icon: Target,
      title: "Diagnóstico Energético Preciso",
      description: "Mapeamos as influências que afetam seu bem-estar físico, emocional, mental e energético. O resultado é um retrato vibracional completo do seu campo."
    },
    {
      icon: Heart,
      title: "Tratamento Personalizado",
      description: 'A partir do diagnóstico, traçamos um plano terapêutico único, direcionado para limpar, equilibrar e proteger seu campo energético.',
    }
  ];

  const differentials = [
    {
      title: "Metodologia Exclusiva de Radiestesia Genética",
      description: "Criada a partir de décadas de estudo, prática e resultados mensuráveis."
    },
    {
      title: "Visão Holística e Integrativa",
      description: "Você é tratada(o) como um todo: corpo, mente, campo e história."
    },
    {
      title: "Resultados Comprovados e Duradouros",
      description: "Mais de 500 vidas impactadas e 95% relatando melhora após as primeiras sessões."
    },
    {
      title: "Acompanhamento Personalizado",
      description: "Nada em massa. Cada jornada é única, e você será acompanhada(o) de verdade."
    },
    {
      title: "Equipe Altamente Qualificada",
      description: "Profissionais que aliam técnica, intuição e escuta consciente."
    },
    {
      title: "Tecnologia de Ponta em Terapias Energéticas",
      description: "Do pêndulo aos gráficos, da análise vibracional ao suporte inteligente — tudo evoluiu."
    }
  ];

  const testimonials = [
    {
      identifier: "🌳🍃 <strong>Maria S.</strong> – 42 anos, Curitiba (PR)",
      text: "Tive enxaquecas por mais de <strong>10 anos</strong>. Já tinha tentado de tudo.\nNa primeira sessão de Radiestesia Genética, <strong>entendi o que estava por trás</strong> da dor.\nHoje, <strong>vivo sem dor</strong>, e com uma paz que eu nem lembrava que existia."
    },
    {
      identifier: "🧠🔓 <strong>Otávio L.</strong> – 36 anos, São Paulo (SP)",
      text: "Eu carregava um peso que não era meu. Terapia convencional não resolvia.\nCom a Radiestesia, entendi a origem do meu bloqueio, que era <strong>emocional e ancestral</strong>.\nEm <strong>3 sessões</strong>, <strong>tudo mudou</strong>. Leveza e clareza definem meu novo eu."
    },
    {
      identifier: "🙏💕 <strong>Luciana M.</strong> – 45 anos, mãe do Gabriel (15), Florianópolis (SC)",
      text: "Meu filho adolescente estava <strong>distante</strong>, <strong>agressivo</strong>, <strong>e já não falava comigo</strong>.\nFiz o tratamento para ele à distância, <strong>sem ele saber</strong>.\nNa mesma semana, ele me procurou para conversar. <strong>Até me pediu um abraço</strong>.\nSenti que meu filho <strong>estava voltando pra mim</strong>."
    }
  ];

  return (
    <div className="flex flex-col gap-y-12 sm:gap-y-16 md:gap-y-24">
      <HomeHero stats={stats} />
      <MethodologySection methodology={methodology} />
      <DifferentialsSection differentials={differentials} />
      <TestimonialsSection testimonials={testimonials} />
      <DaniloLopesSection />
      <WhoIsItForSection />
      <CtaSection />

      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-full max-h-[90vh] overflow-hidden flex flex-col">
            <button 
              onClick={closeBookingModal} 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
              aria-label="Fechar modal de agendamento"
            >
              <X size={28} />
            </button>
            <div className="flex-grow overflow-auto">
              <BookingSection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;