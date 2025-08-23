import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hand as HeartHand, ShieldCheck, CheckCircle, Home, Flower2, Star, Sparkles, HeartHandshake, Users, BrainCircuit, Leaf, MessageSquare, Ear, Heart, Dna } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import CountdownTimer from '@/components/atoms/CountdownTimer';
import { SecurityBadges } from '@/components/atoms/SecurityBadges';

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// Header otimizado com memo
const LandingHeader = React.memo(() => (
  <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-rose-200/80">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="flex items-center space-x-2" aria-label="Voltar para página inicial">
        <HeartHand className="w-8 h-8 text-rose-600" aria-hidden="true" />
        <span className="font-bold text-xl text-slate-800 tracking-tight">Harmonia Geracional</span>
      </Link>
      <Button 
        asChild 
        className="bg-rose-600 hover:bg-rose-700 text-white font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 whitespace-nowrap"
        aria-label="Acessar oferta de transformação"
      >
        <a href="#oferta">Quero Minha Família de Volta</a>
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
          {tier.originalPrice && (
            <div className={`text-lg line-through mb-1 ${tier.isFeatured ? 'text-rose-200' : 'text-rose-400'}`}>
              De R$ {tier.originalPrice}
            </div>
          )}
          <span className={`text-4xl font-bold ${tier.isFeatured ? 'text-white' : 'text-rose-900'}`}>
            R$ {tier.price}
          </span>
          <span className={`text-lg ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>
            {tier.title === 'Plano Raiz' ? '/plano' : tier.title === 'Plano Legado' ? '/tratamento' : '/sessão'}
          </span>
          {tier.originalPrice && (
            <div className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              tier.isFeatured 
                ? 'bg-yellow-400 text-rose-900' 
                : 'bg-red-100 text-red-700'
            }`}>
              {Math.round((1 - parseFloat(tier.price.replace('.', '')) / parseFloat(tier.originalPrice.replace('.', ''))) * 100)}% de desconto
            </div>
          )}
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
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
      originalPrice: "530",
      description: "Desperte a conexão com seu/sua filho(a)",
      features: ["Análise energética completa mãe-filho", "Identificação dos padrões geracionais", "Relatório personalizado com orientações", "Plano de ação para os primeiros passos"],
      cta: "Agendar Minha Sessão",
      isFeatured: false
    },
    {
      title: "Plano Raiz",
      price: "897",
      originalPrice: "1.250",
      description: "Cultive a harmonia com acompanhamento contínuo",
      features: ["Tudo do Diagnóstico Geracional", "2 sessões mensais de acompanhamento", "Suporte prioritário via WhatsApp", "Monitoramento energético contínuo", "Ajustes de frequência conforme necessário"],
      cta: "Iniciar Minha Jornada",
      isFeatured: true
    },
    {
      title: "Plano Legado",
      price: "2.297",
      originalPrice: "3.500",
      description: "Transforme a energia da sua família por gerações",
      features: ["Tudo do Acompanhamento Continuado", "6 sessões distribuídas em 3 meses", "Monitoramento semanal personalizado", "Plano de blindagem energética familiar", "Acompanhamento até a estabilização completa"],
      cta: "Quero a Transformação Completa",
      isFeatured: false
    }
  ], []);

  const testimonials = useMemo(() => [
    { name: "Ana P., mãe de um adolescente de 16 anos", text: "Meu filho não me ouvia, só vivia trancado. Depois da Harmonia Geracional, ele veio me abraçar e disse: 'Mãe, obrigado por não desistir de mim'. Chorei. Fazia anos que não ouvia isso." },
    { name: "Sofia R., mãe de um jovem de 18 anos", text: "As amizades dele me tiravam o sono. Depois da terapia, ele mesmo se afastou. Hoje temos paz, e ele voltou a estudar com vontade." },
    { name: "Carla M., mãe de gêmeos de 14 anos", text: "Eram agressivos entre eles e comigo. Após 3 sessões, a casa mudou completamente. Eles voltaram a me procurar para conversar sobre tudo." },
    { name: "Beatriz L., mãe de uma adolescente de 17 anos", text: "Minha filha só respondia mal e saía escondido. Hoje ela me conta os planos dela e pede conselhos. É outro relacionamento!" },
    { name: "Patrícia S., mãe de um jovem de 19 anos", text: "Ele estava envolvido com pessoas ruins. Depois da harmonia geracional, ele mesmo cortou essas amizades e voltou para a faculdade." }
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
            
            {/* Gancho Emocional com Destaque Impactante */}
            <motion.div 
              className="mt-16 text-center relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Efeito de brilho de fundo */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 via-pink-200/40 to-rose-200/20 rounded-2xl blur-xl transform scale-110"></div>
              
              <motion.div 
                className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 rounded-2xl p-8 md:p-12 border-2 border-rose-300/50 shadow-2xl max-w-3xl mx-auto overflow-hidden"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                {/* Efeito de partículas decorativas */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-rose-300 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-6 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-8 w-2 h-2 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Ícone do coração pulsante */}
                <motion.div 
                  className="mb-6 flex justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 rounded-full shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-700 via-pink-600 to-rose-700 bg-clip-text text-transparent leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Se o seu coração de mãe sentiu cada palavra, saiba:
                </motion.p>
                
                <motion.p 
                  className="text-2xl md:text-3xl lg:text-4xl font-black text-rose-800 mt-4 drop-shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  ainda dá tempo de reverter.
                </motion.p>
                
                <motion.p 
                  className="text-xl md:text-2xl lg:text-3xl font-semibold text-pink-700 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  E você não está sozinha. ✨
                </motion.p>
                
                {/* Linha decorativa animada */}
                <motion.div 
                  className="mt-8 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 2 }}
                ></motion.div>
              </motion.div>
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
            <div className="max-w-4xl mx-auto">
              {/* Desktop: Carrossel com setas */}
              <div className="hidden md:block">
                <Carousel className="w-full">
                  <CarouselContent>
                    {testimonials.map((testimonial, i) => (
                      <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                        <TestimonialCard testimonial={testimonial} index={i} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="text-rose-600 hover:text-rose-700" />
                  <CarouselNext className="text-rose-600 hover:text-rose-700" />
                </Carousel>
              </div>

              {/* Mobile: Carrossel com dots */}
              <div className="md:hidden">
                <div className="relative overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-2">
                        <TestimonialCard testimonial={testimonial} index={i} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center space-x-2 mt-6">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        i === currentTestimonial 
                          ? 'bg-rose-600 scale-125' 
                          : 'bg-rose-300 hover:bg-rose-400'
                      }`}
                      aria-label={`Ver depoimento ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Indicador de posição */}
                <div className="text-center mt-3">
                  <span className="text-sm text-rose-600 font-medium">
                    {currentTestimonial + 1} de {testimonials.length}
                  </span>
                </div>
              </div>
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
                <h3 className="text-xl font-bold text-rose-900 mb-4">Atendimentos Disponíveis Hoje:</h3>
                
                {/* Régua dos atendimentos do dia */}
                <div className="mb-4 p-3 bg-rose-50 rounded-lg border border-rose-200">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    {/* Slot 1 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-lg">
                        14:00
                      </div>
                      <span className="text-xs text-rose-600 mt-1 font-medium">Disponível</span>
                    </div>
                    
                    {/* Slot 2 */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-bold shadow-lg relative">
                        16:00
                        <div className="absolute inset-0 bg-red-500/20 rounded-full flex items-center justify-center">
                          <span className="text-red-600 text-2xl">✕</span>
                        </div>
                      </div>
                      <span className="text-xs text-red-600 mt-1 font-medium">Ocupado</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-black text-rose-700 mb-1">apenas 1 horário restante hoje</div>
                    <div className="text-sm text-rose-600">próximo disponível: 14:00h</div>
                  </div>
                </div>
                
                <p className="text-rose-700 text-sm">
                  Restam apenas {slots} sessões essa semana. Reserve a sua antes que acabem.
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
              <Card className="bg-gradient-to-br from-rose-50 to-pink-50 border border-rose-200 p-8">
                <div className="flex items-center justify-center mb-4">
                  <ShieldCheck className="w-12 h-12 text-rose-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-rose-900 mb-4">
                  Garantia de 30 Dias
                </h3>
                <p className="text-rose-700 leading-relaxed">
                  Se em 30 dias você não sentir mudanças na relação com seu/sua filho(a), devolvemos 100% do seu investimento. 
                  Porque acreditamos no poder da nossa terapia.
                </p>
              </Card>
            </motion.div>

            {/* Segurança Otimizada */}
            <div className="mt-12">
              <SecurityBadges theme="harmony" />
            </div>
          </div>
        </section>

        {/* CTA Final Otimizado */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-rose-600 to-pink-500 text-white relative overflow-hidden" aria-labelledby="final-cta-heading">
          {/* Efeitos de fundo */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-transparent to-pink-500/20"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              id="final-cta-heading" 
              className="text-3xl lg:text-5xl font-black mb-6 relative"
              style={{
                textShadow: '2px 2px 4px rgba(255,255,255,0.3), -1px -1px 2px rgba(255,255,255,0.1), 0 0 10px rgba(255,255,255,0.2)',
                WebkitTextStroke: '1px rgba(255,255,255,0.3)'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Sua Família Merece Uma Segunda Chance
            </motion.h2>
            
            <motion.p 
              className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Não deixe que mais um dia passe sem agir. Seu/sua filho(a) está esperando por você — mesmo que não demonstre.
            </motion.p>
            
            <motion.div 
              className="flex flex-col items-center gap-6 justify-center w-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-full max-w-lg"
              >
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-yellow-200 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
                
                <Button 
                  onClick={() => handleCTAClick('Transformação Familiar')}
                  size="lg" 
                  className="relative w-full bg-white text-rose-600 font-black text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-7 hover:bg-rose-50 shadow-2xl transition-all duration-300 border-2 border-white/20 group rounded-lg xs:rounded-xl md:rounded-2xl min-h-[48px] xs:min-h-[56px] sm:min-h-[64px] md:min-h-[72px]"
                  style={{
                    boxShadow: '0 15px 40px rgba(0,0,0,0.3), 0 0 25px rgba(255,255,255,0.6)',
                    textShadow: '1px 1px 2px rgba(220,38,127,0.3)'
                  }}
                >
                  <span className="relative z-10">
                    Quero Minha Família de Volta
                  </span>
                  
                  {/* Efeito de pulso */}
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <CountdownTimer 
                initialHours={2} 
                initialMinutes={30} 
                storageKey="harmonia-timer"
                returnPrice="R$ 297"
                exclusivityMessage="👑 Apenas 12 horários por semana • Atendimento exclusivo e personalizado"
              />
            </motion.div>
          </div>
        </section>
      </main>

      <LandingFooter />
    </div>
  );
};

export default React.memo(HarmoniaGeracional);
