import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '@/pages/Services/ServicesHero';
import ServiceList from '@/pages/Services/ServiceList';
import ProcessSection from '@/pages/Services/ProcessSection';
import ServiceTestimonials from '@/pages/Services/ServiceTestimonials';
import ServicesCTA from '@/pages/Services/ServicesCTA';
import { Activity, Sparkles, Dna, Hand as HeartHand } from 'lucide-react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Dados mock - Supabase removido para evitar problemas de conexão
        const mockData = [
          {
            id: 1,
            title: 'Desvendando a Raiz',
            description: 'Mapeie padrões ocultos, descubra os bloqueios reais que travam sua vida e receba um plano de ação para sua transformação.',
            icon: 'Activity',
            slug: 'diagnostico',
            order_index: 1
          },
          {
            id: 2,
            title: 'Limpeza Energética',
            description: 'Liberte-se de energias densas e bloqueios invisíveis que drenam sua vitalidade. Sinta a leveza que você busca.',
            icon: 'Sparkles',
            slug: 'limpeza-energetica',
            order_index: 2
          },
          {
            id: 3,
            title: 'Radiestesia Genética',
            description: 'Identifique e cure padrões familiares que se repetem há gerações. Quebre ciclos para você e sua família.',
            icon: 'Dna',
            slug: 'radiestesia-genetica',
            order_index: 3
          },
          {
            id: 4,
            title: 'Harmonia Geracional',
            description: 'Cure conflitos familiares profundos e restabeleça o equilíbrio nas relações que mais importam.',
            icon: 'HeartHand',
            slug: 'harmonia-geracional',
            order_index: 4
          }
        ];

        const iconMap = {
          Activity,
          Sparkles,
          Dna,
          HeartHand,
        };

        const processedData = mockData.map(service => {
          const iconComponent = iconMap[service.icon] || Activity;
          
          return { 
            ...service, 
            icon: iconComponent
          };
        });

        setServices(processedData);
      } catch (err) {
        console.error('Erro ao buscar serviços:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const processSteps = [
    {
      title: 'Escolha sua terapia',
      description: 'Navegue pelos serviços e escolha a terapia que mais se conecta com o seu momento.',
      icon: '📌'
    },
    {
      title: 'Tire dúvidas (se quiser)',
      description: 'Converse com nossa assistente virtual para esclarecer qualquer dúvida ou siga direto para o agendamento/compra.',
      icon: '💬'
    },
    {
      title: 'Realize o pagamento',
      description: 'Finalize sua compra com total segurança. Você receberá as instruções no e-mail imediatamente.',
      icon: '💳'
    },
    {
      title: 'Receba sua entrega',
      description: 'Para diagnósticos (como Desvendando a Raiz), você recebe o material por e-mail. Para terapias, o tratamento é iniciado dentro do prazo combinado ou agendado.',
      icon: '📩'
    },
    {
      title: 'Acompanhamento (quando incluso)',
      description: 'Caso sua modalidade inclua acompanhamento, você terá suporte prioritário e retornos energéticos regulares.',
      icon: '📲'
    }
  ];

  const testimonials = [
    { 
      id: 1,
      name: "Maria S.", 
      age: 42,
      location: "São Paulo, SP",
      service: "Harmonia Geracional", 
      testimonial: "Em 30 dias ele parou de chegar tarde, voltou a conversar comigo e as notas melhoraram. Ele nem imagina que fiz a Harmonia Geracional.", 
      rating: 5,
      avatar: "MS",
      highlight: "Reconexão familiar",
      date: "15/08/2024"
    },
    { 
      id: 2,
      name: "Carlos P.", 
      age: 45,
      location: "Rio de Janeiro, RJ",
      service: "Radiestesia Genética", 
      testimonial: "Eu estava desesperado com a rebeldia da minha filha. A sessão de Radiestesia revelou uma questão da minha própria adolescência que eu passava pra ela. Mudou tudo.", 
      rating: 5,
      avatar: "CP",
      highlight: "Quebra de ciclos familiares",
      date: "10/08/2024"
    },
    { 
      id: 3,
      name: "Ana P.", 
      age: 38,
      location: "Belo Horizonte, MG",
      service: "Desvendando a Raiz", 
      testimonial: "O diagnóstico foi um mapa claro do que eu precisava trabalhar. Foi o primeiro passo para uma grande mudança na minha vida.", 
      rating: 5,
      avatar: "AP",
      highlight: "Clareza e direcionamento",
      date: "05/08/2024"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Raiz Energética</title>
        <meta name="description" content="Descubra nossa gama completa de terapias energéticas, todas baseadas em nossa metodologia exclusiva e integrativa, incluindo Radiestesia Genética, Limpeza Energética e mais." />
      </Helmet>
      <div>
        <ServicesHero />
        {loading && <p className="text-center py-12">Carregando serviços...</p>}
        {error && <p className="text-center py-12 text-red-500">Erro ao carregar serviços: {error}</p>}
        {!loading && !error && (
          <>
            <ServiceList services={services} />
            <ProcessSection processSteps={processSteps} />
            <ServiceTestimonials testimonials={testimonials} />
            <ServicesCTA services={services} />
          </>
        )}
      </div>
    </>
  );
};

export default Services;
