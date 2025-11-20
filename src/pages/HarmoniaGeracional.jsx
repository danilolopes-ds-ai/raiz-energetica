// Componente Modal para Plano Legado
function CalLegadoModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      (async function () {
        const cal = await getCalApi({ namespace: "plano-legado-hg" });
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#e50000" },
            dark: { "cal-brand": "#e50000" }
          },
          hideEventTypeDetails: false,
          layout: "week_view"
        });
      })();
    }
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-red-700 text-xl font-bold">×</button>
        <Cal
          namespace="plano-legado-hg"
          calLink="raiz-energetica/plano-legado-hg"
          style={{ width: "100%", height: "600px", overflow: "scroll" }}
          config={{ layout: "week_view" }}
        />
      </div>
    </div>
  );
}
// Componente Modal para Plano Raiz
function CalRaizModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      (async function () {
        const cal = await getCalApi({ namespace: "plano-raiz-hg" });
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#e2b400" },
            dark: { "cal-brand": "#e2b400" }
          },
          hideEventTypeDetails: false,
          layout: "week_view"
        });
      })();
    }
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-yellow-700 text-xl font-bold">×</button>
        <Cal
          namespace="plano-raiz-hg"
          calLink="raiz-energetica/plano-raiz-hg"
          style={{ width: "100%", height: "600px", overflow: "scroll" }}
          config={{ layout: "week_view" }}
        />
      </div>
    </div>
  );
}
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hand as HeartHand, ShieldCheck, CheckCircle, Home, Flower2, Star, Sparkles, HeartHandshake, Users, BrainCircuit, Leaf, MessageSquare, Ear, Heart, ChevronDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet-async';
import LandingHeader from "./landing-components/LandingHeader";
import LandingFooter from "./landing-components/LandingFooter";
import FAQHarmoniaGeracional from "./landing-components/FAQHarmoniaGeracional";
import CountdownTimer from '@/components/atoms/CountdownTimer';
import { SecurityBadges } from '@/components/atoms/SecurityBadges';

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
        <p className="text-rose-800 font-medium leading-relaxed mb-4">{point.text}</p>
        
        {/* Checkbox visual */}
        <div className="mt-auto flex items-center gap-2 text-rose-600">
          <div className="w-5 h-5 border-2 border-rose-300 rounded flex items-center justify-center hover:border-rose-500 transition-colors">
            <span className="text-xs">✓</span>
          </div>
          <span className="text-sm font-medium">Sim, sinto isso</span>
        </div>
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
          {/* Layout premium de preço com desconto, badges e economia, igual Limpeza Energética */}
          {tier.title === "Plano Essência" && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">10% OFF</span>
              </div>
              <span className={`text-lg font-semibold line-through ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>R$ 550,00</span>
              <span className={`text-4xl font-bold ${tier.isFeatured ? 'text-white' : 'text-rose-900'}`}>R$ 500,00</span>
              <span className={`text-sm font-medium ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>sessão individual</span>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border-2 border-yellow-200 text-yellow-700 px-4 py-2 rounded-lg shadow-sm mt-2">
                <span className="text-lg">💰</span>
                <span className="font-bold text-xs sm:text-sm">Economize R$ 50,00 hoje</span>
              </div>
            </div>
          )}
          {tier.title === "Plano Raiz" && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">20% OFF</span>
              </div>
              <span className={`text-lg font-semibold line-through ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>R$ 1.100,00</span>
              <span className={`text-4xl font-bold ${tier.isFeatured ? 'text-white' : 'text-rose-900'}`}>R$ 880,00</span>
              <span className={`text-sm font-medium ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>tratamento de 2 sessões/mês</span>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border-2 border-yellow-200 text-yellow-700 px-4 py-2 rounded-lg shadow-sm mt-2">
                <span className="text-lg">💰</span>
                <span className="font-bold text-xs sm:text-sm">Economize R$ 220,00 hoje</span>
              </div>
            </div>
          )}
          {tier.title === "Plano Legado" && (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full">27% OFF</span>
              </div>
              <span className={`text-lg font-semibold line-through ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>R$ 3.300,00</span>
              <span className={`text-4xl font-bold ${tier.isFeatured ? 'text-white' : 'text-rose-900'}`}>R$ 2.400,00</span>
              <span className={`text-sm font-medium ${tier.isFeatured ? 'text-rose-100' : 'text-rose-600'}`}>tratamento completo de 3 meses</span>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border-2 border-yellow-200 text-yellow-700 px-4 py-2 rounded-lg shadow-sm mt-2">
                <span className="text-lg">💰</span>
                <span className="font-bold text-xs sm:text-sm">Economize R$ 900,00 hoje</span>
              </div>
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
      <Card className="h-full border-rose-200/80 shadow-md overflow-hidden bg-white">
        {/* Header com foto e nome */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 border-b border-rose-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
              {testimonial.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-rose-900">{testimonial.name}</h4>
              <p className="text-sm text-rose-600">{testimonial.location}</p>
            </div>
          </div>
          <div className="flex" aria-label="Avaliação: 5 estrelas">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            ))}
          </div>
        </div>

        {/* Conteúdo do depoimento */}
        <div className="p-6 space-y-4">
          {/* ANTES */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 font-bold text-xs">🔴</span>
              </div>
              <h5 className="text-sm font-bold text-rose-900 uppercase tracking-wide">Antes:</h5>
            </div>
            <p className="text-rose-700 text-sm leading-relaxed pl-8">
              "{testimonial.before}"
            </p>
          </div>

          {/* DEPOIS */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 font-bold text-xs">🟢</span>
              </div>
              <h5 className="text-sm font-bold text-rose-900 uppercase tracking-wide">Depois:</h5>
            </div>
            <p className="text-rose-700 text-sm leading-relaxed pl-8">
              "{testimonial.after}"
            </p>
          </div>

          {/* O QUE MAIS AJUDOU */}
          <div className="bg-rose-50/50 rounded-lg p-4 border-l-4 border-rose-400">
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <div>
                <h5 className="text-xs font-bold text-rose-900 uppercase tracking-wide mb-1">O que mais ajudou:</h5>
                <p className="text-rose-700 text-sm leading-relaxed italic">
                  "{testimonial.highlight}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});

const HarmoniaGeracional = () => {
  const { toast } = useToast();
  const [slots, setSlots] = useState(12);
  const [showCalendarEssencia, setShowCalendarEssencia] = useState(false);

  // Memoização dos dados estáticos
  const painPoints = useMemo(() => [
    { icon: Home, text: "Ele(a) mal olha na sua cara quando chega em casa" },
    { icon: MessageSquare, text: "Você pergunta como foi o dia... ele(a) responde com monossílabos" },
    { icon: Users, text: "Qualquer conversa vira briga. Você tem medo de falar com ele(a)" },
    { icon: BrainCircuit, text: "Ele(a) vive trancado(a) no quarto, grudado(a) no celular. Você não sabe mais quem ele(a) é" },
    { icon: HeartHand, text: "Você vai dormir com aquele aperto: 'E se ele(a) está se envolvendo com algo perigoso?'" },
  ], []);

  const hopeCards = useMemo(() => [
    { icon: MessageSquare, title: "Imagine seu/sua filho(a) te chamando para conversar, do nada.", subtitle: "Um gesto simples, mas que diz: 'eu confio em você, mãe.'" },
    { icon: Ear, title: "Imagine ele(a) te ouvindo, sem brigar.", subtitle: "Palavras fluindo, sem tensão. Só conexão." },
    { icon: Heart, title: "Imagine vocês dois rindo juntos de novo.", subtitle: "Como nos velhos tempos, e melhor ainda." },
    { icon: Home, title: "Imagine sua casa cheia de paz, e o medo dando lugar à confiança.", subtitle: "Seu lar pode ser um templo de harmonia novamente." },
  ], []);

  const transformations = useMemo(() => [
    { icon: Flower2, title: "Reconexão Familiar", description: "O diálogo volta, os olhos se encontram. Vocês se entendem de novo." },
    { icon: ShieldCheck, title: "Proteção Energética", description: "Blindagem contra más influências e comportamentos de risco, sem confrontos, sem desgaste." },
    { icon: Home, title: "Paz no Lar", description: "A agressividade se dissolve. O ambiente muda. A casa volta a ser um lar seguro." },
    { icon: HeartHand, title: "Resgate dos Valores", description: "O que você ensinou com tanto amor começa a florescer de novo, naturalmente." },
  ], []);

  const pricingTiers = useMemo(() => [
    {
      title: "Plano Essência",
      price: "500",
      description: "Desperte a conexão com seu/sua filho(a)",
      features: ["Análise energética completa mãe-filho", "Identificação dos padrões geracionais", "Relatório personalizado com orientações", "Plano de ação para os primeiros passos"],
      cta: "Agendar Minha Sessão",
      isFeatured: false
    },
    {
      title: "Plano Raiz",
      price: "880",
      description: "Cultive a harmonia com acompanhamento contínuo",
      features: ["Tudo do Diagnóstico Geracional", "2 sessões mensais de acompanhamento", "Suporte prioritário via WhatsApp", "Monitoramento energético contínuo", "Ajustes de frequência conforme necessário"],
      cta: "Iniciar Minha Jornada",
      isFeatured: true
    },
    {
      title: "Plano Legado",
      price: "2.400",
      description: "Transformação completa em 3 meses",
      features: ["Tudo do Acompanhamento Continuado", "6 sessões distribuídas em 3 meses", "Monitoramento semanal personalizado", "Plano de blindagem energética familiar", "Acompanhamento até a estabilização completa"],
      cta: "Quero a Transformação Completa",
      isFeatured: false
    }
  ], []);

  const testimonials = useMemo(() => [
    { 
      name: "Camila M., 44 anos", 
      location: "São Paulo - SP",
      before: "Meu filho de 16 anos começou a chegar tarde, mentindo sobre onde estava. Eu tinha certeza que eram más influências. Tentei psicólogo - ele ia mas não falava nada. Eu não dormia mais.",
      after: "Na 3ª semana, ele me pediu desculpa do nada. Hoje ele me apresentou os amigos novos e conheci a namorada dele. Voltei a dormir.",
      highlight: "Não foi só a sessão. Foi você me dizendo 'você não é má mãe' quando eu desabei chorando. Isso me salvou."
    },
    { 
      name: "Roberta S., 38 anos", 
      location: "Belo Horizonte - MG",
      before: "Meu filho de 14 anos vivia trancado no quarto, no celular. Qualquer conversa virava briga. Eu tinha medo de falar com ele. O pai disse que eu estava exagerando, mas eu sabia que algo estava errado.",
      after: "Depois de 4 semanas, ele saiu do quarto e perguntou 'mãe, vamos assistir filme?'. Fazia 8 meses que isso não acontecia. Hoje jantamos juntos todo dia.",
      highlight: "O acompanhamento fez toda diferença. Toda vez que eu duvidava, você me lembrava: 'confie no processo'. E funcionou."
    }
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
  const [showCalEssencia, setShowCalEssencia] = useState(false);
  const [showCalRaiz, setShowCalRaiz] = useState(false);
  const handleCTAClick = useCallback((plan) => {
    toast({
      title: "✨ Um passo de coragem!",
      description: `Escolha seu horário e prossiga para o checkout do plano ${plan}.`,
    });
    if (plan === 'Plano Essência') {
      setShowCalEssencia(true);
    }
    if (plan === 'Plano Raiz') {
      setShowCalRaiz(true);
    }
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
        <title>Reconexão Mãe e Filho Adolescente | Terapia Harmonia Geracional</title>
        <meta name="description" content="Seu filho adolescente se afastou? Terapia especializada para mães que desejam resgatar a conexão familiar. Radiestesia Genética com acolhimento premium. Garantia de 30 dias." />
        <meta name="keywords" content="filho adolescente agressivo, reconexão mãe e filho, terapia familiar, filho se afastou, comportamento adolescente, harmonia familiar, radiestesia genética, terapia para mães" />
        <meta property="og:title" content="Harmonia Geracional - Reconecte-se com seu Filho Adolescente" />
        <meta property="og:description" content="Terapia especializada para mães que querem resgatar a conexão com filhos adolescentes. Radiestesia Genética + acolhimento premium de 10 anos de experiência." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.raizenergetica.com.br/harmonia-geracional" />
      </Helmet>
      
      <LandingHeader />

      <main className="pt-20" role="main">
        {/* Hero Section Otimizada */}
        <section className="relative overflow-hidden" aria-labelledby="hero-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-6 leading-tight">
                  Reconexão Mãe e Filho Adolescente: <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">Da Agressividade à Harmonia</span>
                </h1>
                <p className="text-xl text-rose-800 mb-8 max-w-xl mx-auto lg:mx-0">
                  Ele(a) se afastou? Transforme o conflito em reconexão. O amor de mãe ainda pode (e vai) trazê-lo(a) de volta.
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

        {/* Seção Explicativa do Serviço Premium - Simplificada */}
        <section className="py-20 md:py-24 bg-gradient-to-br from-white to-rose-50/30" aria-labelledby="premium-service-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 id="premium-service-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                  Mais Que Uma Terapia Energética: Um Acolhimento Completo
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  A Harmonia Geracional utiliza a <strong>Radiestesia Genética</strong> reconhecida pela ABRADGEN (Associação Brasileira de Radiestesia Genética), mas vai muito além da técnica.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-rose-200"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <BrainCircuit className="w-10 h-10 text-rose-600" />
                      <h3 className="text-2xl font-bold text-rose-900">O Diferencial Premium</h3>
                    </div>
                    <p className="text-rose-700 leading-relaxed mb-6">
                      Você não recebe apenas uma sessão energética. Você recebe um acompanhamento completo e humanizado:
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-rose-900">10 anos de experiência</p>
                        <p className="text-sm text-rose-600">em terapias familiares e reconexão</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-rose-900">Acolhimento especializado</p>
                        <p className="text-sm text-rose-600">com quem entende a dor de mãe</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-rose-900">Estratégias práticas</p>
                        <p className="text-sm text-rose-600">de reconexão para aplicar no dia a dia</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-rose-900">Espaço seguro</p>
                        <p className="text-sm text-rose-600">para compartilhar sem julgamentos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção de Dores Otimizada */}
        <section className="py-20 md:py-24 bg-slate-50" aria-labelledby="pain-points-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="pain-points-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-center">
                Você Também Sente Que...
              </h2>
              <p className="mt-4 text-lg text-slate-600 italic">
                Marque mentalmente quantas você reconhece
              </p>
            </div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {painPoints.map((point, i) => (
                <PainPointCard key={i} point={point} index={i} />
              ))}
            </motion.div>

            {/* Transição para Esperança */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="max-w-2xl mx-auto mt-16 text-center"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-rose-400 shadow-lg">
                <p className="text-xl text-slate-900 font-semibold mb-3">
                  Se você marcou 2 ou mais...
                </p>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Você não está sozinha. E não é tarde demais.
                </p>
                <button
                  onClick={() => document.querySelector('#hope-heading').scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors group"
                >
                  Ver Como Outras Mães Superaram
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Seção de Esperança - Timeline */}
        <section className="py-20 md:py-24 bg-white" aria-labelledby="hope-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="hope-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                A Boa Notícia: É Possível Reconectar com Seu/Sua Filho(a)
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Mesmo que o distanciamento pareça grande, ainda é possível resgatar a conexão. Trazer seu/sua filho(a) de volta. Reconstruir a relação mãe-filho que você sempre sonhou.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {hopeCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg">
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md border border-rose-200/60">
                    <h3 className="text-xl font-bold text-rose-900 mb-2">{card.title}</h3>
                    <p className="text-rose-700 leading-relaxed">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>

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

        {/* Seção de Transformação - Grid Compacto */}
        <section id="transformacao" className="py-20 md:py-24 bg-white" aria-labelledby="transformation-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 id="transformation-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Como a Terapia Transforma a Relação de Vocês
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Através de técnicas energéticas específicas, quebramos os padrões que criam conflito e ativamos a reconexão natural entre mãe e filho(a).
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {transformations.map((transformation, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:border-rose-300 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-rose-100 flex items-center justify-center">
                        <transformation.icon className="w-6 h-6 text-rose-600" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{transformation.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{transformation.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Depoimentos Otimizada */}
        <section className="py-20 md:py-24 bg-slate-50" aria-labelledby="testimonials-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                Elas Transformaram Suas Famílias. Você Pode Ser a Próxima.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} index={i} />
              ))}
            </div>

            {/* Micro-quotes */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-rose-300 transition-colors"
              >
                <p className="text-slate-700 italic text-sm mb-3 leading-relaxed">
                  "Meu filho me abraçou sem eu pedir. Fazia 8 meses."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-900 font-semibold text-xs">Paula, 41 anos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-rose-300 transition-colors"
              >
                <p className="text-slate-700 italic text-sm mb-3 leading-relaxed">
                  "Ele voltou a jantar com a gente. Parece simples, mas pra mim é tudo."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-900 font-semibold text-xs">Júlia, 39 anos</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-rose-300 transition-colors"
              >
                <p className="text-slate-700 italic text-sm mb-3 leading-relaxed">
                  "Ele me disse 'mãe, desculpa'. Eu não esperava mais ouvir isso."
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-900 font-semibold text-xs">Fernanda, 43 anos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção de Autoridade do Terapeuta */}
        <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="therapist-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 id="therapist-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 text-center mb-12 tracking-tight">
                Quem Vai Guiar Você (e Seu/Sua Filho(a)) Nesta Jornada?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-xl shadow-rose-500/10 p-8 md:p-12 border border-rose-100">
                {/* Foto do Terapeuta */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-rose-500/20 border-4 border-rose-100">
                    <img
                      src="/images/services/foto-perfil-raiz-site.webp"
                      alt="Danilo Lopes - Terapeuta especialista em Radiestesia Genética"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Badge de Credibilidade */}
                  <div className="absolute -bottom-4 -right-4 bg-rose-600 text-white px-6 py-3 rounded-full shadow-lg shadow-rose-600/40 rotate-3">
                    <p className="text-sm font-bold">10+ Anos</p>
                    <p className="text-xs opacity-90">de Experiência</p>
                  </div>
                </motion.div>

                {/* Texto de Apresentação */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Danilo Lopes</h3>
                    <p className="text-rose-600 font-semibold">Especialista em Dinâmicas Familiares & Radiestesia Genética</p>
                  </div>

                  <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"></div>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    Eu não sou apenas um terapeuta. Sou especialista em dinâmicas familiares e uso a Radiestesia Genética há mais de 10 anos para reconectar mães e filhos.
                  </p>

                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">Eu entendo a dor de não ser ouvida.</strong> Minha missão é restaurar a comunicação na sua casa, começando pela raiz energética do conflito.
                  </p>

                  {/* Badges de Credibilidade */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <div className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full border border-rose-200">
                      <ShieldCheck className="w-5 h-5 text-rose-600" />
                      <span className="text-sm font-semibold text-rose-900">Reconhecido pela ABRADGEN</span>
                    </div>
                    <div className="flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full border border-rose-200">
                      <Users className="w-5 h-5 text-rose-600" />
                      <span className="text-sm font-semibold text-rose-900">500+ Famílias Atendidas</span>
                    </div>
                  </div>

                  {/* Quote destacada */}
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-500 mt-6">
                    <p className="text-slate-800 italic leading-relaxed">
                      "Cada mãe que me procura não é um caso perdido. É uma oportunidade de reconexão que a família inteira estava esperando."
                    </p>
                    <p className="text-rose-700 font-semibold mt-2 text-sm">— Danilo Lopes</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Urgência Otimizada */}
        <section className="py-20 md:py-24 bg-white" aria-labelledby="urgency-heading">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="urgency-heading" className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Quanto Mais Cedo, Mais Fácil a Reconexão
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Cada dia que passa, os padrões se aprofundam. Mas você pode agir agora e começar a transformação que sua família precisa.
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
                      whileInView={{ width: (slotsPercentage + "%") }}
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

        {/* Calendário de Agendamento Embebido - Plano Essência (React Embed) */}
        <CalEssenciaModal open={showCalEssencia} onClose={() => setShowCalEssencia(false)} />
        {/* Calendário de Agendamento Embebido - Plano Raiz (React Embed) */}
        <CalRaizModal open={showCalRaiz} onClose={() => setShowCalRaiz(false)} />
      {/* CalRaizModal is defined below, outside the main render tree */}


      </main>
      <LandingFooter />
    </div>
  );
}

function CalEssenciaModal({ open, onClose }) {
  useEffect(() => {
    if (open) {
      (async function () {
        const cal = await getCalApi({ namespace: "plano-essencia-hg" });
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#dad491" },
            dark: { "cal-brand": "#dad491" }
          },
          hideEventTypeDetails: false,
          layout: "week_view"
        });
      })();
    }
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-rose-600 text-xl font-bold">×</button>
        <Cal
          namespace="plano-essencia-hg"
          calLink="raiz-energetica/plano-essencia-hg"
          style={{ width: "100%", height: "600px", overflow: "scroll" }}
          config={{ layout: "week_view" }}
        />
      </div>
    </div>
  );
}


export default React.memo(HarmoniaGeracional);
