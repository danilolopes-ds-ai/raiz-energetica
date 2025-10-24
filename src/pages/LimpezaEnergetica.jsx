import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Gem, ShieldCheck, Sparkles, Wind, BrainCircuit, Sun, Star, CheckCircle, Clock, Users, Award, Hand as HeartHand, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroLimpeza from './landing-components/HeroLimpeza';
import SinaisLimpeza from './landing-components/SinaisLimpeza';

const LandingHeader = () => (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200/80">
        <div className="container mx-auto flex justify-between items-center p-4">
            <Link to="/" className="flex items-center space-x-2">
                <Sparkles className="w-8 h-8 text-teal-500" />
                <span className="font-bold text-xl text-slate-800 tracking-tight">Limpeza Energética</span>
            </Link>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <a href="#oferta">Renovar Minha Energia</a>
            </Button>
        </div>
    </header>
);

const LandingFooter = () => (
    <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Raiz Energética. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 max-w-2xl mx-auto">Este serviço é uma ferramenta poderosa de bem-estar e equilíbrio, mas não substitui diagnósticos ou tratamentos médicos, psicológicos ou psiquiátricos. Em caso de problemas de saúde, procure um profissional qualificado.</p>
        </div>
    </footer>
);


const LimpezaEnergetica = () => {
  const { toast } = useToast();
  const [slots, setSlots] = useState(8);

  useEffect(() => {
    const today = new Date().toDateString();
    const lastVisit = localStorage.getItem('lastVisitDate_limpeza');
    const savedSlots = localStorage.getItem('slots_limpeza');

    if (lastVisit === today && savedSlots) {
      setSlots(Math.max(0, parseInt(savedSlots, 10)));
    } else {
      const initialSlots = Math.floor(Math.random() * 3) + 4; // 4, 5, or 6
      setSlots(initialSlots);
      localStorage.setItem('slots_limpeza', initialSlots.toString());
      localStorage.setItem('lastVisitDate_limpeza', today);
    }
  }, []);

  const handlePurchaseClick = () => {
    toast({
      title: "✨ Ótima escolha!",
      description: "Você está no caminho certo para a renovação. Prossiga para finalizar. 🚀",
    });
    if (slots > 0) {
      const newSlots = slots - 1;
      setSlots(newSlots);
      localStorage.setItem('slots_limpeza', newSlots.toString());
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const signs = [
    { icon: Wind, text: "Cansaço extremo e sem motivo aparente" },
    { icon: Zap, text: "Pensamentos negativos e repetitivos" },
    { icon: Users, text: "Dificuldade e conflitos nos relacionamentos" },
    { icon: BrainCircuit, text: "Falta de clareza mental e confusão" },
    { icon: Clock, text: "Sensação de estagnação e 'azar crônico'" },
    { icon: HeartHand, text: "Irritabilidade e explosões emocionais" },
  ];

  const methodElements = [
    { icon: Sparkles, title: "Gráficos de Onda de Forma", description: "Utilizamos gráficos radiestésicos específicos para transmutar energias densas com precisão." },
    { icon: Gem, title: "Cristais Programados", description: "Cristais selecionados e programados para potencializar a limpeza e criar um campo de proteção." },
    { icon: ShieldCheck, title: "Remoção de Energias", description: "Atuação direta na remoção e transmutação de energias internas e externas." },
    { icon: Sun, title: "Alinhamento dos Chakras", description: "Harmonização completa dos seus centros de energia para restaurar o fluxo vital e o equilíbrio." },
  ];
  
  const benefits = [
    { icon: Sun, title: "Vitalidade Renovada", description: "Sinta sua energia vital fluindo livremente, trazendo mais disposição e vigor para o seu dia a dia." },
    { icon: BrainCircuit, title: "Clareza Mental e Foco", description: "Dissipe a névoa mental, ganhe foco para suas tarefas e tome decisões com mais segurança." },
    { icon: HeartHand, title: "Paz Interior e Leveza", description: "Experimente um profundo relaxamento e uma sensação de leveza ao se livrar de cargas pesadas." },
    { icon: ShieldCheck, title: "Proteção Energética", description: "Crie um escudo de proteção ao seu redor, tornando-se menos vulnerável a energias externas nocivas." },
  ];
  
  const testimonials = [
    { 
      name: "Juliana M.", 
      role: "Terapeuta Holística",
      text: "Eu não sabia o que era, mas sentia um peso enorme. Depois da limpeza, parece que tirei uma mochila de pedras das costas. Incrível como algo tão simples pode transformar tanto!", 
      rating: 5,
      date: "2 semanas atrás",
      location: "São Paulo, SP",
      avatar: "JM"
    },
    { 
      name: "Ricardo F.", 
      role: "Empreendedor",
      text: "Estava cético, mas a mudança foi nítida. Minha casa ficou mais leve e até meu sono melhorou. Recomendo demais a quem busca renovação energética.", 
      rating: 5,
      date: "3 semanas atrás",
      location: "Rio de Janeiro, RJ",
      avatar: "RF"
    },
    { 
      name: "Carla B.", 
      role: "Professora",
      text: "O relatório que recebi foi super detalhado e fez todo o sentido. Sinto-me mais protegida e com a mente mais clara para tomar decisões importantes.", 
      rating: 5,
      date: "1 mês atrás",
      location: "Belo Horizonte, MG",
      avatar: "CB"
    },
    { 
      name: "Fernanda S.", 
      role: "Designer",
      text: "Depois da limpeza, minha criatividade voltou a fluir. Estava com bloqueio há meses e em uma semana já senti a diferença no trabalho.", 
      rating: 5,
      date: "5 dias atrás",
      location: "Curitiba, PR",
      avatar: "FS"
    },
    { 
      name: "Marcos A.", 
      role: "Médico",
      text: "Sou cético por natureza, mas os resultados foram inegáveis. Minha ansiedade diminuiu consideravelmente após o procedimento.", 
      rating: 5,
      date: "2 meses atrás",
      location: "Porto Alegre, RS",
      avatar: "MA"
    },
    { 
      name: "Patrícia L.", 
      role: "Empresária",
      text: "Minha equipe notou a diferença no meu humor e disposição. Até meus clientes estão comentando sobre minha energia mais leve.", 
      rating: 5,
      date: "3 semanas atrás",
      location: "Salvador, BA",
      avatar: "PL"
    }
  ];
  
  // Configuração do carrossel
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
        <Helmet>
            <title>Limpeza Energética Profunda - Renove Suas Energias | Raiz Energética</title>
            <meta name="description" content="Sente-se cansado, estagnado ou sobrecarregado? Nossa Limpeza Energética remove bloqueios, purifica sua aura e restaura seu equilíbrio vital. Agende sua sessão e sinta a diferença." />
        </Helmet>
        
        <LandingHeader />

        <main>
            <HeroLimpeza />
            
            <SinaisLimpeza />
            
            <section id="como-funciona" className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Nossa Metodologia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Limpeza Profunda</span></h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">Combinamos técnicas poderosas para uma purificação completa e eficaz do seu campo energético.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {methodElements.map((item, i) => (
                            <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.1 }} className="flex items-start space-x-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center bg-teal-600 text-white shadow-lg">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="oferta" className="py-20 md:py-24 text-white bg-gradient-to-br from-teal-600 to-cyan-700">
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
                          <Badge className="bg-amber-100 text-amber-800 border-amber-200 mb-4 font-semibold">Oferta Exclusiva</Badge>
                          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Sua Oportunidade de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Renovação Completa</span></h2>
                          <p className="mt-4 text-lg text-slate-600">Dê o primeiro passo para uma vida com mais leveza, bem-estar e clareza.</p>
                          <ul className="space-y-4 text-slate-700 mt-8">
                              {[
                                  "Limpeza Energética Profunda à Distância",
                                  "Relatório Detalhado com tudo que foi tratado",
                                  "Entrega Rápida em até 24h no seu e-mail"
                              ].map(item => (
                                  <li key={item} className="flex items-center">
                                      <CheckCircle className="w-6 h-6 text-teal-500 mr-3 flex-shrink-0" />
                                      <span>{item}</span>
                                  </li>
                              ))}
                              <li className="flex items-center font-bold text-teal-500">
                                <Sparkles className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                                <span>BÔNUS: Alinhamento Completo dos Chakras</span>
                              </li>
                          </ul>
                      </div>
                      
                      <div className="group relative bg-slate-50 p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-yellow-200 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"></div>
                          <div className="relative">
                              <div className="text-center">
                                  <p className="text-slate-500 text-xl">Investimento único</p>
                                  <p className="my-2 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">R$ 149</p>
                                  <p className="text-slate-600 font-semibold mb-6">ou 12x de R$ 14,96</p>
                                  <Button onClick={handlePurchaseClick} size="lg" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-4 h-auto">
                                      Quero Minha Limpeza Agora
                                  </Button>
                                  <div className="mt-6">
                                      <h3 className="text-lg font-bold text-amber-600 mb-2">Vagas Diárias Limitadas!</h3>
                                      <p className="text-sm text-slate-600 mb-2">Para garantir a qualidade, atendemos apenas {localStorage.getItem('slots_limpeza') || 8} pessoas por dia.</p>
                                      <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
                                          <motion.div 
                                            className="bg-gradient-to-r from-teal-400 to-cyan-500 h-3" 
                                            style={{ width: `${(slots / (localStorage.getItem('slots_limpeza') || 8)) * 100}%` }}
                                            initial={{width: '100%'}}
                                            animate={{width: `${(slots / (localStorage.getItem('slots_limpeza') || 8)) * 100}%`}}
                                            transition={{duration: 0.5}}
                                            >
                                          </motion.div>
                                      </div>
                                      <p className="text-xs font-semibold text-teal-700 mt-2">{slots} VAGAS RESTANTES HOJE</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
            </section>
            
            <section className="py-20 md:py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center">
                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">O que você vai <span className="text-teal-500">sentir</span> após a limpeza</h2>
                      <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">Prepare-se para uma nova fase de bem-estar, proteção e leveza.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {benefits.map((benefit, i) => (
                            <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: i * 0.1 }}>
                                <Card className="p-6 border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-teal-100">
                                            <benefit.icon className="w-6 h-6 text-teal-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                                            <p className="mt-1 text-slate-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-24 bg-gradient-to-b from-white to-teal-50/50">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-teal-100 text-teal-800 mb-4">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Depoimentos Reais
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Quem fez, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">recomenda</span></h2>
                  <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">Veja o que nossos clientes estão falando sobre a experiência da limpeza energética</p>
                </div>
                
                <div className="relative">
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -mx-4">
                      {testimonials.map((testimonial, i) => (
                        <div key={i} className="px-4 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                          <motion.div 
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className="h-full group"
                          >
                            <Card className="h-full flex flex-col p-6 border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mx-2">
                              <div className="flex items-center mb-4">
                                <div className="relative">
                                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center text-teal-600 font-bold shadow-inner">
                                    {testimonial.avatar}
                                  </div>
                                  <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white rounded-full p-1">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                  </div>
                                </div>
                                <div className="ml-4 text-left">
                                  <h4 className="font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                    {testimonial.name}
                                  </h4>
                                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                                  <p className="text-xs text-slate-400 mt-0.5">{testimonial.location}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center mb-4">
                                {[...Array(5)].map((_, j) => (
                                  <Star 
                                    key={j} 
                                    className={`w-5 h-5 ${j < testimonial.rating ? 'text-amber-400 fill-current' : 'text-slate-200'}`} 
                                  />
                                ))}
                                <span className="ml-2 text-sm text-slate-500">{testimonial.date}</span>
                              </div>
                              
                              <p className="text-slate-600 italic mb-4 flex-grow">"{testimonial.text}"</p>
                              
                              <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="text-xs text-slate-500">Verificado</span>
                              </div>
                            </Card>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors z-10"
                    aria-label="Depoimento anterior"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m15 18-6-6 6-6"/>
                    </svg>
                  </button>
                  
                  <button 
                    onClick={scrollNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-teal-600 hover:bg-teal-50 transition-colors z-10"
                    aria-label="Próximo depoimento"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </button>
                </div>
              </div>
            </section>

            <section className="py-20 md:py-24 bg-white">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center bg-slate-100 p-10 rounded-2xl max-w-3xl mx-auto border border-slate-200">
                    <Award className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900">Sua Satisfação é Nosso Compromisso</h2>
                    <p className="mt-4 text-slate-600">Seu risco é zero. Temos tanta confiança nos benefícios da limpeza que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não se sentir mais leve e com a energia renovada, basta nos enviar um e-mail e devolveremos todo o seu investimento.</p>
                    <Button onClick={handlePurchaseClick} size="lg" asChild className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-4 h-auto">
                      <a href="#oferta">Solicitar Limpeza Sem Risco</a>
                    </Button>
                </div>
              </div>
            </section>
        </main>
        
        <LandingFooter />
    </div>
  );
};

export default LimpezaEnergetica;