import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
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
        const { data, error } = await supabase
          .from('services')
          .select('id, title, description, icon, slug, order_index') // Manter a query otimizada
          .order('order_index', { ascending: true });

        if (error) {
          throw error;
        }

        const iconMap = {
          Activity,
          Sparkles,
          Dna,
          HeartHand,
        };

        const processedData = data.map(service => {
          const iconComponent = iconMap[service.icon] || Activity;
          
          let updatedDescription = service.description;
          if (service.title === 'Desvendando a Raiz') {
            updatedDescription = 'Mapeie padrões ocultos, descubra os bloqueios reais que travam sua vida e receba um plano de ação para sua transformação.';
          } else if (service.title === 'Radiestesia Genética') {
            updatedDescription = 'Acesse o DNA energético da sua linhagem e trate padrões invisíveis que silenciosamente moldam sua saúde, seus relacionamentos e sua prosperidade.';
          } else if (service.title === 'Harmonia Geracional') {
            updatedDescription = '💞 Reduza conflitos, aproxime corações e reestabeleça a harmonia entre mãe e filho(a) sem confronto ou desgaste.';
          }

          return { 
            ...service, 
            icon: iconComponent, 
            description: updatedDescription 
          };
        });

        setServices(processedData);
      } catch (err) {
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
    { name: "Maria, mãe de João (16)", service: "Harmonia Geracional", text: "Em 30 dias ele parou de chegar tarde, voltou a conversar comigo e as notas melhoraram. Ele nem imagina que fiz a Harmonia Geracional.", rating: 5 },
    { name: "Carlos, pai de Sofia (14)", service: "Radiestesia Genética", text: "Eu estava desesperado com a rebeldia da minha filha. A sessão de Radiestesia revelou uma questão da minha própria adolescência que eu passava pra ela. Mudou tudo.", rating: 5 },
    { name: "Ana P.", service: "Diagnóstico Raiz", text: "O diagnóstico foi um mapa claro do que eu precisava trabalhar. Foi o primeiro passo para uma grande mudança na minha vida.", rating: 5 }
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