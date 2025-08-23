import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dna, KeyRound, Flame, Award, CheckCircle, Star, Users, DollarSign, Hand as HeartHand, Briefcase, GitBranchPlus, Gift } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CountdownTimer from '@/components/atoms/CountdownTimer';
import { SecurityBadges } from '@/components/atoms/SecurityBadges';

// Imports diretos (sem lazy loading para evitar problemas)
import HeroRadiestesia from './landing-components/HeroRadiestesia';
import ProvaCientifica from './landing-components/ProvaCientifica';
import SintomasRadgen from './landing-components/SintomasRadgen';
import OqueEradgen from './landing-components/OqueEradgen';
import ComoAgeRadgen from './landing-components/ComoAgeRadgen';
import ParaQuemEradgen from './landing-components/ParaQuemEradgen';

// Header otimizado com memo
const LandingHeader = React.memo(() => (
  <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-amber-200/80">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="flex items-center space-x-2" aria-label="Voltar para página inicial">
        <Dna className="w-8 h-8 text-amber-600" aria-hidden="true" />
        <span className="font-bold text-xl text-slate-800 tracking-tight">Radiestesia Genética</span>
      </Link>
      <Button 
        asChild 
        className="bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
        aria-label="Acessar oferta de transformação"
      >
        <a href="#oferta">Quero Minha Transformação</a>
      </Button>
    </div>
  </header>
));

// Footer otimizado com memo
const LandingFooter = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400">
        <p>&copy; {currentYear} Raiz Energética. Todos os direitos reservados.</p>
        <p className="text-xs mt-2 max-w-2xl mx-auto">
          Este serviço é uma ferramenta poderosa de autoconhecimento e transformação, mas não substitui diagnósticos ou tratamentos médicos, psicológicos ou psiquiátricos.
        </p>
      </div>
    </footer>
  );
});

// Componente de Depoimento otimizado
const TestimonialCard = React.memo(({ testimonial, index }) => {
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  }), []);

  return (
    <motion.div 
      variants={itemVariants} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ delay: index * 0.1 }} 
      className="h-full"
    >
      <Card className="h-full border-slate-200/80 shadow-md p-4 xs:p-6 flex flex-col bg-white">
        <div className="flex mb-2 xs:mb-3" aria-label={`Avaliação: ${testimonial.rating} estrelas`}>
          {[...Array(testimonial.rating)].map((_, j) => (
            <Star key={j} className="w-4 h-4 xs:w-5 xs:h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="text-slate-600 italic mb-3 xs:mb-4 flex-grow text-sm xs:text-base">
          "{testimonial.text}"
        </blockquote>
        <cite className="font-bold text-amber-700 text-right text-xs xs:text-base not-italic">
          - {testimonial.name}
        </cite>
      </Card>
    </motion.div>
  );
});

// Componente principal otimizado
const RadiestesiaGenetica = () => {
  const { toast } = useToast();
  const [slots, setSlots] = useState(8);

  // Memoização dos dados estáticos
  const testimonials = useMemo(() => [
    { 
      name: "Marcos V.", 
      text: "Lutava com dívidas e sentia que o dinheiro 'escapava' de mim, um padrão que via em meu pai. Após a sessão, fechei dois novos contratos e minha mentalidade sobre prosperidade mudou completamente.", 
      rating: 5 
    },
    { 
      name: "Ana P.", 
      text: "Vivia um ciclo de relacionamentos tóxicos. Depois da sessão, consegui encerrar o ciclo e hoje vivo um relacionamento saudável, baseado em respeito e parceria. Foi libertador.", 
      rating: 5 
    },
    { 
      name: "Sofia L.", 
      text: "Sofria de uma ansiedade crônica sem gatilhos aparentes. A sessão revelou a origem ancestral e me trouxe uma paz interior que eu não sentia há anos. A ansiedade diminuiu 80%.", 
      rating: 5 
    },
  ], []);

  const offerItems = useMemo(() => [
    {
      title: 'Sessão ao vivo de 60 minutos:',
      desc: 'Mapeamento completo do seu padrão energético'
    },
    {
      title: 'Diagnóstico energético detalhado:',
      desc: 'Identificação das causas raiz dos seus desafios'
    },
    {
      title: 'Tratamento energético em tempo real:',
      desc: 'Limpeza e harmonização durante a sessão'
    },
    {
      title: 'Relatório personalizado:',
      desc: 'Documento com suas descobertas e orientações específicas'
    }
  ], []);

  // Gestão de slots otimizada
  useEffect(() => {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate_radgen');
    const savedSlots = localStorage.getItem('slots_radgen');

    if (lastVisit === today && savedSlots) {
      setSlots(Math.max(0, parseInt(savedSlots, 10)));
    } else {
      const initialSlots = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5
      setSlots(initialSlots);
      localStorage.setItem('slots_radgen', initialSlots.toString());
      localStorage.setItem('lastVisitDate_radgen', today);
    }
  }, []);

  // Callback otimizado para booking
  const handleBookingClick = useCallback(() => {
    toast({
      title: "✨ Agendamento Exclusivo",
      description: "Você será redirecionado para finalizar seu agendamento. Sua transformação começa agora. 🚀",
    });
    
    if (slots > 0) {
      const newSlots = slots - 1;
      setSlots(newSlots);
      localStorage.setItem('slots_radgen', newSlots.toString());
    }
    
    setTimeout(() => {
      window.open('https://cal.com/raiz-energetica/sessaoradgen', '_blank');
    }, 1500);
  }, [slots, toast]);

  // Variantes de animação memoizadas
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }), []);

  const slotsPercentage = useMemo(() => (slots / 8) * 100, [slots]);

  return (
    <div className="bg-white font-sans text-slate-800 min-h-screen">
      <Helmet>
        <title>Radiestesia Genética - Transforme as Raízes da Sua Vida</title>
        <meta name="description" content="Sessão exclusiva para investigar e tratar as causas energéticas hereditárias que governam sua vida. Liberte-se de padrões ancestrais e reescreva sua história." />
        <meta name="keywords" content="radiestesia genética, transformação pessoal, padrões ancestrais, terapia energética" />
        <meta property="og:title" content="Radiestesia Genética - Transforme as Raízes da Sua Vida" />
        <meta property="og:description" content="Sessão exclusiva para investigar e tratar as causas energéticas hereditárias que governam sua vida." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <LandingHeader />

      <main role="main">
        <div className="space-y-0">
          <section className="w-full" aria-labelledby="hero-heading">
            <HeroRadiestesia />
          </section>
          
          <section className="w-full" aria-labelledby="sintomas-heading">
            <SintomasRadgen />
          </section>
          
          <section className="w-full" aria-labelledby="oque-heading">
            <OqueEradgen />
          </section>
          
          <section className="w-full" aria-labelledby="prova-heading">
            <ProvaCientifica />
          </section>
          
          <section className="w-full p-0 m-0" aria-labelledby="como-age-heading">
            <ComoAgeRadgen />
          </section>
          
          <div className="w-full p-0 m-0 bg-white">
            <img 
              src="/images/services/radgen-card.webp" 
              alt="Radiestesia Genética - Benefícios da terapia energética" 
              className="w-full h-auto object-cover block align-bottom p-0 m-0"
              loading="lazy"
              width="800"
              height="400"
            />
          </div>
          
          <section className="w-full" aria-labelledby="para-quem-heading">
            <ParaQuemEradgen />
          </section>
        </div>

        {/* Seção de Oferta Otimizada */}
        <section id="oferta" className="py-20 md:py-24 text-white bg-gradient-to-br from-amber-400 to-yellow-200" aria-labelledby="oferta-heading">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div 
              className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="p-8 lg:p-12 lg:w-3/5">
                  <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4 font-semibold">
                    Oferta Exclusiva
                  </Badge>
                  <h2 id="oferta-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                    Transforme sua vida com a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Radiestesia Genética</span>
                  </h2>
                  <p className="mt-4 text-lg text-slate-600">
                    Descubra e limpe padrões que sabotam sua vida, com diagnóstico e tratamento energético profundo.
                  </p>
                  
                  <ul className="space-y-4 text-slate-700 mt-8" role="list">
                    {offerItems.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" aria-hidden="true" />
                        <div>
                          <span className="font-bold text-slate-900">{item.title}</span>
                          <span className="block text-slate-700">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                    <li className="flex items-center font-bold text-amber-600">
                      <Gift className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" aria-hidden="true" />
                      <span>BÔNUS: 1 acesso premium ao "Desvendando a Raiz" para presentear alguém especial</span>
                    </li>
                  </ul>
                </div>
                
                <div className="group relative bg-slate-50 p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-yellow-200 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl" aria-hidden="true"></div>
                  <div className="relative">
                    <div className="text-center">
                      <CountdownTimer initialMinutes={20} storageKey="radgen-timer" returnPrice="R$ 449" />
                      <p className="text-slate-500 text-base sm:text-lg md:text-xl">
                        De <span className="line-through">R$449</span>
                      </p>
                      <p className="my-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600 drop-shadow-lg">
                        R$ 350
                      </p>
                      <p className="text-slate-600 font-semibold text-sm sm:text-base mb-4">
                        ou em até 12x de R$ 35,14
                      </p>
                      
                      <Button 
                        onClick={handleBookingClick} 
                        size="lg" 
                        className="w-full mb-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-3 sm:py-4 px-2 sm:px-4 md:px-6 h-auto animate-pulse"
                        aria-label="Agendar transformação agora"
                      >
                        QUERO MINHA TRANSFORMAÇÃO AGORA
                      </Button>
                      
                      <div className="mt-3 mb-6">
                        <SecurityBadges compact={true} className="max-w-md mx-auto" />
                      </div>
                      
                      <div className="mt-6">
                        <h3 className="text-base sm:text-lg font-bold text-amber-600 mb-2">
                          Apenas {slots} vagas disponíveis hoje!
                        </h3>
                        <div className="bg-slate-200 rounded-full h-2.5 sm:h-3 overflow-hidden" role="progressbar" aria-valuenow={slots} aria-valuemin="0" aria-valuemax="8">
                          <motion.div 
                            className="bg-gradient-to-r from-amber-400 to-yellow-500 h-2.5 sm:h-3" 
                            style={{ width: `${slotsPercentage}%` }}
                            initial={{ width: '100%' }}
                            animate={{ width: `${slotsPercentage}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 mt-4">
                          Para garantir a qualidade e excelência, atendemos apenas 8 pessoas por dia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Depoimentos Otimizada */}
        <section className="py-20 md:py-24" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Histórias de <span className="text-gradient-gold">Libertação</span>
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                Resultados reais de quem decidiu quebrar as correntes do passado.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Garantia Otimizada */}
        <section className="py-20 md:py-24 bg-white" aria-labelledby="guarantee-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center bg-slate-100 p-10 rounded-2xl max-w-3xl mx-auto border border-slate-200">
              <Award className="w-12 h-12 xs:w-16 xs:h-16 text-amber-500 mx-auto mb-3 xs:mb-4" aria-hidden="true" />
              <h2 id="guarantee-heading" className="text-lg xs:text-2xl font-bold text-slate-900">
                Garantia de Profundidade
              </h2>
              <p className="mt-3 xs:mt-4 text-slate-600 text-sm xs:text-base">
                Temos total confiança no poder desta sessão. Se ao final você não sentir que recebeu insights profundos e um caminho claro para a transformação, agendaremos uma sessão complementar de 30 minutos, sem custo algum, para aprofundar as questões. Seu investimento é na sua evolução, e nosso compromisso é com o seu resultado.
              </p>
              
              <div className="w-full max-w-xs mx-auto mt-4 xs:mt-6 sm:mt-8">
                <div className="bg-slate-200 rounded-full h-2" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="bg-gradient-to-r from-amber-400 to-yellow-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div className="mt-3 xs:mt-4 mb-2">
                <p className="text-red-600 text-xs xs:text-sm font-bold animate-pulse">
                  ⚠️ APENAS {slots} VAGAS DISPONÍVEIS HOJE!
                </p>
                <p className="text-slate-500 text-xs">Garante já a sua antes que esgote</p>
              </div>
              
              <Button 
                onClick={handleBookingClick} 
                size="lg" 
                className="mt-4 xs:mt-6 sm:mt-8 w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-3 xs:py-4 px-4 sm:px-6 h-auto animate-pulse text-xs xs:text-sm sm:text-base leading-tight whitespace-normal text-center"
                aria-label="Garantir vaga para transformação"
              >
                QUERO MINHA TRANSFORMAÇÃO AGORA
              </Button>
              
              <div className="mt-3 xs:mt-4 sm:mt-6">
                <SecurityBadges compact={true} className="max-w-md mx-auto" />
              </div>
              
              <div className="mt-3 xs:mt-4">
                <p className="text-slate-600 text-xs sm:text-sm italic">
                  Para garantir a qualidade e excelência, atendemos apenas 8 pessoas por dia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

// Definir displayName para melhor debugging
RadiestesiaGenetica.displayName = 'RadiestesiaGenetica';
TestimonialCard.displayName = 'TestimonialCard';
LandingHeader.displayName = 'LandingHeader';
LandingFooter.displayName = 'LandingFooter';

export default RadiestesiaGenetica;
