import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '@/pages/Services/ServicesHero';
import ServiceList from '@/pages/Services/ServiceList';
import ProcessSection from '@/pages/Services/ProcessSection';
import ServiceTestimonials from '@/pages/Services/ServiceTestimonials';
import ServicesFAQ from '@/pages/Services/ServicesFAQ';
import ServicesCTA from '@/pages/Services/ServicesCTA';
import { services } from '@/data/services';

const Services = () => {

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
      description: 'Para anamneses terapêuticas (Limpeza Energética), você recebe o resultado por e-mail ou whatsapp. Para terapias, o tratamento é iniciado dentro do prazo combinado ou agendado.',
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
    { name: "Ana P.", service: "Anamnese Terapêutica Raiz", text: "A anamnese terapêutica foi um mapa claro do que eu precisava trabalhar. Foi o primeiro passo para uma grande mudança na minha vida.", rating: 5 }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Raiz Energética</title>
        <meta name="description" content="Descubra nossa gama completa de terapias energéticas, todas baseadas em nossa metodologia exclusiva e integrativa, incluindo Radiestesia Genética, Limpeza Energética e mais." />
      </Helmet>
      <div>
        <ServicesHero />
        <ServiceList services={services} />
        <ProcessSection processSteps={processSteps} />
        <ServiceTestimonials testimonials={testimonials} showStats={false} />
        <ServicesFAQ />
        <ServicesCTA services={services} />
      </div>
    </>
  );
};

export default Services;