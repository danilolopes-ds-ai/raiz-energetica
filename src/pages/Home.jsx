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
      title: "Harmonização Integral",
      description: "Aplicamos técnicas de limpeza, realinhamento e reequilíbrio energético. Cada sessão é personalizada para sua necessidade específica."
    }
  ];

  const differentials = [
    {
      title: "Método Exclusivo com Resultados Comprovados",
      description: "Nossa abordagem combina técnicas milenares com tecnologia de ponta para resultados que você pode sentir."
    },
    {
      title: "Atendimento Totalmente Personalizado",
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
      identifier: "🌸 <strong>Renata S.</strong> – 38 anos, Curitiba (PR)",
      text: "Carreguei dores que nem sabia de onde vinham. <strong>Anos de busca</strong>, mas nada tocava no que eu precisava curar.\nNa primeira sessão, senti <strong>algo se desfazendo dentro de mim</strong>. Como se finalmente alguém entendesse minha alma.\nHoje respiro com <strong>leveza</strong>. Me olho no espelho e me vejo <strong>bonita e inteira</strong> novamente."
    },
    {
      identifier: "🌊 <strong>André L.</strong> – 41 anos, São Paulo (SP)",
      text: "Eu vivia no automático, <strong>desconectado de mim mesmo</strong>. Sentia que algo profundo precisava despertar.\nCom a Radiestesia Genética, <strong>encontrei as raízes do meu bloqueio</strong> — memórias que nem eram minhas.\n<strong>3 sessões e renasci</strong>. Hoje confio na minha intuição e me sinto <strong>forte e renovado</strong>."
    },
    {
      identifier: "💕 <strong>Luciana M.</strong> – 43 anos, Florianópolis (SC)",
      text: "Minha relação mais importante estava se perdendo. <strong>Tentei de tudo</strong>, mas a conexão não voltava.\nO tratamento à distância foi como <strong>plantar uma semente invisível</strong>.\nEm poucos dias, senti a <strong>energia mudando entre nós</strong>. Hoje vivemos uma harmonia que <strong>aquece meu coração</strong> todos os dias."
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
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex-1 min-h-0">
              <BookingSection />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;