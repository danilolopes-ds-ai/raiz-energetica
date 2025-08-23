import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hand as HeartHand, ShieldCheck, CheckCircle, Home, Flower2, Star, Sparkles, HeartHandshake, Users, BrainCircuit, Leaf, MessageSquare, Ear, Heart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet-async';
import LandingHeader from "./landing-components/LandingHeader";
import LandingFooter from "./landing-components/LandingFooter";
import CountdownTimer from '@/components/atoms/CountdownTimer';
import { SecurityBadges } from '@/components/atoms/SecurityBadges';

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Componente de Loading otimizado
const SectionFallback = React.memo(() => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
  </div>
));

// Componente de Pain Point otimizado
const PainPointCard = React.memo(({ point, index }) => {
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  }), []);

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="group bg-white/80 border border-rose-200/40 p-6 rounded-2xl text-center h-full flex flex-col items-center justify-start shadow-md shadow-rose-500/5 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]">
        <div className="bg-rose-100 p-4 rounded-full mb-4 transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-rose-400/30">
          <point.icon className="w-8 h-8 text-rose-500" aria-hidden="true" />
        </div>
        <p className="text-rose-800 font-medium leading-relaxed">{point.text}</p>
      </Card>
    </motion.div>
  );
});

// Componente de Hope Card otimizado
const HopeCard = React.memo(({ card, index }) => {
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  }), []);

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200/60 p-8 rounded-2xl h-full flex flex-col items-center text-center shadow-lg shadow-rose-500/10 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]">
        <div className="bg-rose-200 p-4 rounded-full mb-6 flex-shrink-0">
          <card.icon className="w-8 h-8 text-rose-700" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-rose-900 mb-3 leading-tight">{card.title}</h3>
        <p className="text-rose-700 leading-relaxed flex-grow">{card.subtitle}</p>
      </Card>
    </motion.div>
  );
});

// Componente de Transformation Card otimizado
const TransformationCard = React.memo(({ transformation, index }) => {
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  }), []);

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="bg-white border border-rose-200/60 p-8 rounded-2xl h-full flex flex-col items-center text-center shadow-lg shadow-rose-500/10 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02]">
        <div className="bg-rose-100 p-4 rounded-full mb-6 flex-shrink-0">
          <transformation.icon className="w-8 h-8 text-rose-600" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-rose-900 mb-3">{transformation.title}</h3>
        <p className="text-rose-700 leading-relaxed flex-grow">{transformation.description}</p>
      </Card>
    </motion.div>
  );
});

// Componente de Pricing Card otimizado
const PricingCard = React.memo(({ tier, index, onCTAClick }) => {
  const handleClick = useCallback(() => {
    onCTAClick(tier.title);
  }, [tier.title, onCTAClick]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative rounded-3xl p-8 h-full flex flex-col ${
        tier.isFeatured 
          ? 'bg-gradient-to-br from-rose-600 to-pink-500 text-white shadow-2xl shadow-rose-500/40 scale-105 border-2 border-rose-300' 
          : 'bg-white border border-rose-200 shadow-lg shadow-rose-500/10'
      }`}
    >
      {tier.isFeatured && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 border-yellow-300 font-bold px-4 py-1">
          MAIS ESCOLHIDO
        </Badge>
      )}
      
      <div className="text-center mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${tier.isFeatured ? 'text-white' : 'text-rose-900'}`}>
          {tier.title}
        </h3>
        <p className={`text-lg mb-4 ${tier.isFeatured ? 'text-rose-100' : 'text-rose-700'}`}>
          {tier.description}
        </p>
        <div className="mb-4">
          <span className={`text-4xl font-bold ${tier.isFeatured ? 'text-white' : 'text-rose-900'}`}>
            R$ {tier.price}
          </span>
          <span className={`text-lg ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>
            /sessão
          </span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow" role="list">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.isFeatured ? 'text-rose-200' : 'text-rose-500'}`} aria-hidden="true" />
            <span className={`text-sm leading-relaxed ${tier.isFeatured ? 'text-rose-100' : 'text-rose-700'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button 
        onClick={handleClick}
        className={`w-full font-bold py-3 px-6 rounded-xl text-sm transition-all transform hover:-translate-y-1 hover:scale-105 ${
          tier.isFeatured 
            ? 'bg-white text-rose-600 hover:bg-rose-50 shadow-lg' 
            : 'bg-gradient-to-r from-rose-600 to-pink-500 text-white hover:shadow-xl shadow-rose-500/30'
        }`}
        aria-label={`Escolher plano ${tier.title}`}
      >
        {tier.cta}
      </Button>
    </motion.div>
  );
});

// Componente de Testimonial otimizado  
const TestimonialCard = React.memo(({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="h-full"
    >
      <Card className="h-full border-rose-200/80 shadow-md p-6 flex flex-col bg-white">
        <div className="flex mb-3" aria-label="Avaliação: 5 estrelas">
          {[...Array(5)].map((_, j) => (
            <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
          ))}
        </div>
        <blockquote className="text-rose-700 italic mb-4 flex-grow leading-relaxed">
          "{testimonial.text}"
        </blockquote>
        <cite className="font-bold text-rose-800 text-right not-italic">
          - {testimonial.name}
        </cite>
      </Card>
    </motion.div>
  );
});

const HarmoniaGeracional = () => {
  const { toast } = useToast();
  const [slots, setSlots] = useState(12);

  // Memoização dos dados estáticos
  const painPoints = useMemo(() => [
    { icon: BrainCircuit, text: "Você olha para seu/sua filho(a) e sente falta daquele brilho nos olhos?" },
    { icon: HeartHand, text: "Encontrou algo no quarto e seu coração disparou?" },
    { icon: Users, text: "Seu/sua filho(a) responde com agressividade quando você só quer ajudar?" },
    { icon: Sparkles, text: "As amizades de seu/sua filho(a) te deixam inquieta, mas você não sabe como intervir?" },
    { icon: Home, text: "Tudo que você ensinou com amor... parece ter se perdido?" },
  ], []);

  const hopeCards = useMemo(() => [
    { icon: MessageSquare, title: "Imagine seu/sua filho(a) te chamando para conversar, do nada.", subtitle: "Um gesto simples, mas que diz: 'eu confio em você, mãe.'" },
    { icon: Ear, title: "Imagine ele(a) te ouvindo — sem brigar.", subtitle: "Palavras fluindo, sem tensão. Só conexão." },
    { icon: Heart, title: "Imagine vocês dois rindo juntos de novo.", subtitle: "Como nos velhos tempos — e melhor ainda." },
    { icon: Home, title: "Imagine sua casa cheia de paz, e o medo dando lugar à confiança.", subtitle: "Seu lar pode ser um templo de harmonia novamente." },
  ], []);

  const transformations = useMemo(() => [
    { icon: Flower2, title: "Reconexão Familiar", description: "O diálogo volta, os olhos se encontram. Vocês se entendem de novo." },
    { icon: ShieldCheck, title: "Proteção Energética", description: "Blindagem contra más influências e comportamentos de risco — sem confrontos, sem desgaste." },
    { icon: Home, title: "Paz no Lar", description: "A agressividade se dissolve. O ambiente muda. A casa volta a ser um lar seguro." },
    { icon: HeartHand, title: "Resgate dos Valores", description: "O que você ensinou com tanto amor começa a florescer de novo — naturalmente." },
  ], []);

  const pricingTiers = useMemo(() => [
    {
      title: "Plano Essência",
      price: "397",
      description: "Desperte a conexão com seu/sua filho(a)",
      features: ["Análise energética completa mãe-filho", "Identificação dos padrões geracionais", "Relatório personalizado com orientações", "Plano de ação para os primeiros passos"],
      cta: "Agendar Minha Sessão",
      isFeatured: false
    },
    {
      title: "Plano Raiz",
      price: "897",
      description: "Cultive a harmonia com acompanhamento contínuo",
      features: ["Tudo do Diagnóstico Geracional", "2 sessões mensais de acompanhamento", "Suporte prioritário via WhatsApp", "Monitoramento energético contínuo", "Ajustes de frequência conforme necessário"],
      cta: "Iniciar Minha Jornada",
      isFeatured: true
    },
    {
      title: "Plano Legado",
      price: "2.297",
      description: "Transforme a energia da sua família por gerações",
      features: ["Tudo do Acompanhamento Continuado", "6 sessões distribuídas em 3 meses", "Monitoramento semanal personalizado", "Plano de blindagem energética familiar", "Acompanhamento até a estabilização completa"],
      cta: "Quero a Transformação Completa",
      isFeatured: false
    }
  ], []);

  const testimonials = useMemo(() => [
    { name: "Ana P., mãe de um adolescente de 16 anos", text: "Meu filho não me ouvia, só vivia trancado. Depois da limpeza, ele veio me abraçar e disse: 'Mãe, obrigado por não desistir de mim'. Chorei. Fazia anos que não ouvia isso." },
    { name: "Sofia R., mãe de um jovem de 18 anos", text: "As amizades dele me tiravam o sono. Depois da terapia, ele mesmo se afastou. Hoje temos paz, e ele voltou a estudar com vontade." }
  ], []);

  // Gestão de slots otimizada
  useEffect(() => {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate_harmonia');
    const savedSlots = localStorage.getItem('slots_harmonia');

    if (lastVisit === today && savedSlots) {
      setSlots(Math.max(0, parseInt(savedSlots, 10)));
    } else {
      const initialSlots = Math.floor(Math.random() * 5) + 8; // 8-12
      setSlots(initialSlots);
      localStorage.setItem('slots_harmonia', initialSlots.toString());
      localStorage.setItem('lastVisitDate_harmonia', today);
    }
  }, []);

  // Callback otimizado para CTA
  const handleCTAClick = useCallback((plan) => {
    toast({
      title: "✨ Um passo de coragem!",
      description: `Você será redirecionada para agendar a sessão do plano ${plan}.`,
    });
    
    if (slots > 0) {
      const newSlots = slots - 1;
      setSlots(newSlots);
      localStorage.setItem('slots_harmonia', newSlots.toString());
    }
  }, [slots, toast]);

  // Variantes de animação memoizadas
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  }), []);

  const slotsPercentage = useMemo(() => (slots / 12) * 100, [slots]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Harmonia Geracional - Reconectando Mães e Filhos(as)</title>
        <meta name="description" content="Método exclusivo para mães que desejam resgatar a conexão com seus filhos e trazer harmonia de volta para o lar." />
        <meta name="keywords" content="harmonia geracional, relacionamento mãe filho, terapia familiar, reconexão familiar" />
        <meta property="og:title" content="Harmonia Geracional - Reconectando Mães e Filhos" />
        <meta property="og:description" content="Método exclusivo para mães que desejam resgatar a conexão com seus filhos e trazer harmonia de volta para o lar." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <LandingHeader />

      <main className="pt-20" role="main">
        {/* Hero Section Otimizada */}
        <section className="relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-6 leading-tight">
                  Ele(a) se afastou. Mas o amor de mãe ainda pode <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">trazê-lo(a) de volta.</span>
                </h1>
                <p className="text-xl text-rose-800 mb-8 max-w-xl mx-auto lg:mx-0">
                  Transforme conflito em reconexão com a Terapia de Harmonia Geracional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-gradient-to-r from-rose-600 to-pink-500 text-white font-bold shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all transform hover:-translate-y-1 hover:scale-105">
                    <a href="#transformacao" aria-label="Ver processo de transformação">Ver a Transformação</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-rose-300 hover:bg-rose-100 font-semibold text-rose-800">
                    <a href="#transformacao" aria-label="Entender como funciona o processo">Entender o Processo</a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img 
                  src="/images/services/harmonia-geracional-conflito.webp" 
                  alt="Mãe e filho adolescente em conflito, representando a desarmonia familiar."
                  className="relative w-full rounded-3xl shadow-2xl"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Dores Otimizada */}
        <section className="py-20 md:py-24 bg-rose-50/90" aria-labelledby="pain-points-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="pain-points-heading" className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-900 via-pink-500 to-rose-900 bg-clip-text text-transparent tracking-tight text-center">
                Você se Reconhece Nestas Situações?
              </h2>
              <p className="mt-4 text-lg text-rose-700">
                Se o seu coração de mãe sentiu cada palavra, saiba: ainda dá tempo de reverter. E você não está sozinha.
              </p>
            </div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {painPoints.map((point, i) => (
                <PainPointCard key={i} point={point} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Seção de Esperança Otimizada */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-rose-50 to-pink-50" aria-labelledby="hope-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="hope-heading" className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-900 via-pink-500 to-rose-900 bg-clip-text text-transparent tracking-tight">
                Mas Eu Tenho Uma Boa Notícia Para Você...
              </h2>
              <p className="mt-4 text-lg text-rose-700">
                Ainda dá tempo de resgatar a conexão. De trazer seu/sua filho(a) de volta. De ter a família que você sempre sonhou.
              </p>
            </div>
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {hopeCards.map((card, i) => (
                <HopeCard key={i} card={card} index={i} />
              ))}
            </motion.div>
            <div className="text-center mt-12">
              <img 
                src="/images/services/harmonia-geracional-reconexao.webp" 
                alt="Mãe e filho adolescente sorrindo e se abraçando, demonstrando harmonia e reconexão familiar."
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                loading="lazy"
                width="500"
                height="350"
              />
            </div>
          </div>
        </section>

        {/* Seção de Transformação Otimizada */}
        <section id="transformacao" className="py-20 md:py-24 bg-white" aria-labelledby="transformation-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="transformation-heading" className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-900 via-pink-500 to-rose-900 bg-clip-text text-transparent tracking-tight">
                Como a Terapia de Harmonia Geracional Vai Transformar a Relação de Vocês
              </h2>
              <p className="mt-4 text-lg text-rose-700">
                Através de técnicas energéticas específicas, quebramos os padrões que criam conflito e ativamos a reconexão natural entre mãe e filho(a).
              </p>
            </div>
            <motion.div 
              className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {transformations.map((transformation, i) => (
                <TransformationCard key={i} transformation={transformation} index={i} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Seção de Depoimentos Otimizada */}
        <section className="py-20 md:py-24 bg-rose-50/90" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-900 via-pink-500 to-rose-900 bg-clip-text text-transparent tracking-tight">
                Elas Transformaram Suas Famílias. Você Pode Ser a Próxima.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Urgência Otimizada */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-rose-100 to-pink-100" aria-labelledby="urgency-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="urgency-heading" className="text-3xl lg:text-4xl font-bold text-rose-900 mb-6">
                Seu/Sua Filho(a) Precisa de Você Agora. Antes Que Seja Tarde Demais.
              </h2>
              <p className="text-lg text-rose-700 mb-8">
                Cada dia que passa, o distanciamento se aprofunda. Mas ainda há tempo para agir. Ainda há tempo para resgatar o que vocês perderam.
              </p>
              
              <motion.div 
                className="bg-white rounded-2xl p-8 border border-rose-200 shadow-lg max-w-md mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-rose-900 mb-4">Vagas Limitadas Hoje:</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 bg-rose-100 rounded-full h-3 overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-rose-600 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${slotsPercentage}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-rose-900 font-bold">{slots}/12</span>
                </div>
                <p className="text-rose-700 text-sm">
                  Restam apenas {slots} vagas para as sessões desta semana. Reserve a sua antes que acabem.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção de Preços Otimizada */}
        <section className="py-20 md:py-24 bg-white" aria-labelledby="pricing-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="pricing-heading" className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-900 via-pink-500 to-rose-900 bg-clip-text text-transparent tracking-tight">
                Invista na Reconexão da Sua Família
              </h2>
              <p className="mt-4 text-lg text-rose-700">
                Escolha o plano ideal para transformar a relação com seu/sua filho(a) e trazer harmonia duradoura para o seu lar.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, i) => (
                <PricingCard key={i} tier={tier} index={i} onCTAClick={handleCTAClick} />
              ))}
            </div>

            {/* Garantia Otimizada */}
            <motion.div 
              className="text-center max-w-2xl mx-auto mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 p-8">
                <div className="flex items-center justify-center mb-4">
                  <ShieldCheck className="w-12 h-12 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                  Garantia de 30 Dias
                </h3>
                <p className="text-emerald-700 leading-relaxed">
                  Se em 30 dias você não sentir mudanças na relação com seu/sua filho(a), devolvemos 100% do seu investimento. 
                  Porque acreditamos no poder da nossa terapia.
                </p>
              </Card>
            </motion.div>

            {/* Segurança Otimizada */}
            <div className="mt-12">
              <SecurityBadges />
            </div>
          </div>
        </section>

        {/* CTA Final Otimizado */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-rose-600 to-pink-500 text-white" aria-labelledby="final-cta-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="final-cta-heading" className="text-3xl lg:text-4xl font-bold mb-6">
              Sua Família Merece Uma Segunda Chance
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Não deixe que mais um dia passe sem agir. Seu/sua filho(a) está esperando por você — mesmo que não demonstre.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button 
                onClick={() => handleCTAClick('Transformação Familiar')}
                size="lg" 
                className="bg-white text-rose-600 font-bold hover:bg-rose-50 shadow-lg transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                Resgatar Meu/Minha Filho(a) Agora
              </Button>
            </div>
            
            <div className="mt-8">
              <CountdownTimer />
            </div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default React.memo(HarmoniaGeracional);
