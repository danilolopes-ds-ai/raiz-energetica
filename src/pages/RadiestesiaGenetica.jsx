import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dna, KeyRound, Flame, Award, CheckCircle, Star, Users, DollarSign, Hand as HeartHand, Briefcase, GitBranchPlus, Gift } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Carousel from '@/components/molecules/Carousel';
import HeroRadiestesia from '@/pages/landing-components/HeroRadiestesia';
import ProvaCientifica from '@/pages/landing-components/ProvaCientifica';
import SintomasRadgen from '@/pages/landing-components/SintomasRadgen';
import OqueEradgen from '@/pages/landing-components/OqueEradgen';
import ComoAgeRadgen from '@/pages/landing-components/ComoAgeRadgen';
import ParaQuemEradgen from '@/pages/landing-components/ParaQuemEradgen';
import FAQRadiestesia from '@/pages/landing-components/FAQRadiestesia';
import CTAFinalRadiestesia from '@/pages/landing-components/CTAFinalRadiestesia';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const LandingHeader = () => (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
            <Link to="/" className="text-slate-900 hover:text-[#582c81] transition-colors duration-300">
                <span className="font-bold text-lg sm:text-xl tracking-tight">Radiestesia Genética</span>
            </Link>
            <Button asChild className="bg-[#582c81] hover:bg-[#6d3a9b] text-white font-semibold rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300">
                <a href="#oferta">
                    <span className="hidden sm:inline">Agendar Sessão</span>
                    <span className="sm:hidden">Agendar</span>
                </a>
            </Button>
        </div>
    </header>
);

const LandingFooter = () => (
    <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Raiz Energética. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 max-w-2xl mx-auto">Este serviço é uma ferramenta poderosa de bem-estar e equilíbrio. Não substitui diagnóstico ou tratamento médico, psicológico ou psiquiátrico.</p>
        </div>
    </footer>
);

const RadiestesiaGenetica = () => {
  const { toast } = useToast();
  const [showCalendar, setShowCalendar] = React.useState(false);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "sessaoradgen" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#8800c7" },
          dark: { "cal-brand": "#8800c7" }
        },
        hideEventTypeDetails: false,
        layout: "week_view"
      });
    })();
  }, []);

  const handleBookingClick = () => {
    toast({
      title: "✨ Agendamento Exclusivo",
      description: "Escolha seu horário e prossiga para o checkout. Sua transformação começa agora. 🚀",
    });
    setShowCalendar(true);
    // Scroll suave até o calendário
    setTimeout(() => {
      document.getElementById('calendario-agendamento')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const testimonials = [
    { name: "Marcos V.", text: "Lutava com dívidas e sentia que o dinheiro 'escapava' de mim, um padrão que via em meu pai. Após a sessão, fechei dois novos contratos e minha mentalidade sobre prosperidade mudou completamente.", rating: 5 },
    { name: "Ana P.", text: "Vivia um ciclo de relacionamentos tóxicos. Depois da sessão, consegui encerrar o ciclo e hoje vivo um relacionamento saudável, baseado em respeito e parceria. Foi libertador.", rating: 5 },
    { name: "Sofia L.", text: "Sofria de uma ansiedade crônica sem gatilhos aparentes. A sessão revelou a origem ancestral e me trouxe uma paz interior que eu não sentia há anos. A ansiedade diminuiu 80%.", rating: 5 },
    { name: "Juliana M.", text: "Minha família vivia doente sem explicação - meu filho com alergias constantes, eu com enxaquecas terríveis. A RadGen identificou que nossa casa estava sobre veios de água subterrâneos. Após a limpeza geopatogênica, em 2 semanas as alergias do meu filho sumiram e minhas enxaquecas cessaram. Foi transformador para toda a família.", rating: 5 },
    { name: "Suely F.", text: "Meu filho adolescente estava agressivo, tirando notas ruins e se isolando. Fiz a sessão sem ele saber, tratando os padrões energéticos que o afetavam. Em 3 semanas, voltou a ser o menino carinhoso que eu conhecia, as notas melhoraram e ele voltou a conversar comigo. Parecia milagre, mas era energia.", rating: 5 },
  ];

  const offerItems = [
    "Sessão ao vivo de 60 minutos - Mapeamento completo do seu padrão energético",
    "Diagnóstico energético detalhado - Identificação das causas raiz dos seus desafios",
    "Tratamento energético em tempo real - Limpeza e harmonização durante a sessão",
    "Relatório personalizado - Documento com suas descobertas e orientações específicas"
  ];
  
  const bonusText = "1 acesso premium ao \"Desvendando a Raiz\" para presentear aquela pessoa que sua alma já sabe que está pronta para a transformação - porque quando curamos nossas raízes, nos libertamos para florescer e semear um mundo melhor.";

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <Helmet>
        <title>Radiestesia Genética - Transforme as Raízes da Sua Vida</title>
        <meta name="description" content="Sessão exclusiva para investigar e tratar as causas energéticas hereditárias que governam sua vida. Liberte-se de padrões ancestrais e reescreva sua história." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Como funciona a análise genética energética à distância?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Radiestesia Genética trabalha com o campo quântico informacional. Utilizando seu nome completo e data de nascimento, acessamos seu campo energético e rastreamos padrões herdados até a 12ª geração ancestral. A distância não é barreira no campo vibracional."
                }
              },
              {
                "@type": "Question",
                "name": "Quanto tempo dura uma sessão e quanto tempo leva para ter resultados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cada sessão dura aproximadamente 60 minutos ao vivo. Os resultados começam a se manifestar imediatamente após a sessão, com percepções mais profundas emergindo nas primeiras semanas à medida que os padrões se reorganizam."
                }
              },
              {
                "@type": "Question",
                "name": "O que exatamente é investigado na minha linhagem genética?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Investigamos bloqueios energéticos, traumas não resolvidos, padrões de comportamento repetitivos, crenças limitantes herdadas, contratos ancestrais, votos e juramentos inconscientes que foram transmitidos através das gerações e impactam sua vida atual."
                }
              },
              {
                "@type": "Question",
                "name": "Preciso conhecer a história da minha família para fazer a sessão?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. A Radiestesia Genética acessa diretamente seu campo informacional energético. Mesmo sem conhecer sua árvore genealógica ou história familiar, conseguimos identificar e transmutar os padrões que foram herdados e estão ativos em você."
                }
              },
              {
                "@type": "Question",
                "name": "O que está incluído no relatório da sessão?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Você recebe um relatório completo detalhando: padrões ancestrais identificados, gerações de origem dos bloqueios, emoções e crenças herdadas, transmutações realizadas, orientações pós-sessão e práticas de integração para consolidar as mudanças."
                }
              },
              {
                "@type": "Question",
                "name": "Com que frequência preciso fazer as sessões?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Uma única sessão já promove transformações profundas. Para casos mais complexos ou múltiplas camadas de padrões, recomendamos intervalos de 30-45 dias entre sessões, permitindo que as mudanças se integrem completamente antes de acessar novas camadas."
                }
              },
              {
                "@type": "Question",
                "name": "Como a Radiestesia Genética difere de terapias tradicionais?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Enquanto terapias convencionais trabalham com sua história pessoal nesta vida, a Radiestesia Genética vai além: investiga e transmuta padrões que você herdou de seus ancestrais, acessando a raiz vibracional de questões que muitas vezes não têm origem em sua experiência atual."
                }
              },
              {
                "@type": "Question",
                "name": "Eu preciso acreditar para funcionar?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. A Radiestesia Genética trabalha no nível energético informacional, independente de crenças. Sua abertura e intenção de transformação potencializam os resultados, mas o processo age sobre os campos sutis independentemente do ceticismo ou fé."
                }
              },
              {
                "@type": "Question",
                "name": "Como funciona a garantia de 7 dias?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Se dentro de 7 dias após a sessão você sentir que o serviço não atendeu suas expectativas, devolvemos 100% do seu investimento, sem perguntas ou burocracia. Nosso compromisso é com sua transformação genuína."
                }
              },
              {
                "@type": "Question",
                "name": "A Radiestesia Genética substitui tratamento médico ou psicológico?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. A Radiestesia Genética é uma terapia complementar que trabalha no campo energético. Ela potencializa tratamentos convencionais, mas não substitui acompanhamento médico, psicológico ou psiquiátrico quando necessário."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <LandingHeader />

      <main>
        <HeroRadiestesia />
        <SintomasRadgen />
        <OqueEradgen />
        <ProvaCientifica />
        <ComoAgeRadgen />

        <ParaQuemEradgen />

        <section id="oferta" className="pt-12 pb-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Badges estilo Sobre Nós com glow effect e alternância */}
                <div className="max-w-2xl mx-auto space-y-2 mb-16 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Background glow effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-amber-50/30 to-transparent rounded-lg blur-sm"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start space-x-3 py-3 px-4">
                          <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-medium">Apenas 8 sessões disponíveis por dia</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-amber-50/30 to-transparent rounded-lg blur-sm"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start space-x-3 py-3 px-4">
                          <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-medium">500+ vidas transformadas</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative"
                    >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-amber-50/30 to-transparent rounded-lg blur-sm"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start space-x-3 py-3 px-4">
                          <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-medium">Reconhecido pela ABRADGEN</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative"
                    >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                          className="absolute inset-0 bg-gradient-to-r from-amber-100/40 via-amber-50/30 to-transparent rounded-lg blur-sm"
                          aria-hidden="true"
                        />
                        <div className="relative flex items-start space-x-3 py-3 px-4">
                          <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed font-medium">10+ anos de experiência</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto border-2 border-[#582c81]/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-8 md:p-12">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-center text-slate-900 mb-4">
                                Sessão de Radiestesia Genética
                                <span className="ml-2 inline-block" role="img" aria-label="dna">🧬</span>
                            </h2>
                            <p className="text-xl text-slate-600 text-center max-w-3xl mx-auto leading-relaxed mb-12">
                                Identificação e tratamento de bloqueios ancestrais que geram sintomas recorrentes
                            </p>
                            
                            <h3 className="mb-6 font-semibold text-2xl text-slate-900 text-center">O que está incluído:</h3>
                            <ul className="space-y-4 text-slate-700 max-w-2xl mx-auto">
                                {offerItems.map(item => (
                                    <li key={item} className="flex items-start text-lg">
                                        <CheckCircle className="w-6 h-6 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="mt-12 max-w-2xl mx-auto">
                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 p-6 rounded-xl text-center shadow-md">
                                <div className="flex justify-center items-center mb-3">
                                    <span className="text-3xl mr-2">🎁</span>
                                    <p className="font-bold text-amber-900 text-xl">BÔNUS EXCLUSIVO (Valor R$ 149,90)</p>
                                </div>
                                <p className="text-slate-700 text-lg max-w-md mx-auto leading-relaxed">
                                    <strong>1 Sessão de Limpeza Energética de presente</strong> para aquela pessoa especial que você sabe que está pronta para transformação. Quando você cura suas raízes, pode estender essa luz a quem você ama.
                                </p>
                            </div>

                            <div className="mt-10 bg-slate-50 p-8 rounded-2xl shadow-xl border-2 border-[#582c81]/20">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                                    <div className="text-center sm:text-left flex-1">
                                        <p className="text-slate-500 text-sm uppercase tracking-wider mb-3 font-medium">Investimento de transformação</p>
                                        
                                        <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                            <span className="text-slate-400 line-through text-2xl font-semibold">R$ 500,00</span>
                                            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                                <Flame className="w-3 h-3" />
                                                <span>30% OFF HOJE</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-baseline justify-center sm:justify-start gap-2 mb-2">
                                            <span className="text-xl text-[#582c81] font-semibold">R$</span>
                                            <span className="text-6xl lg:text-7xl font-black text-[#582c81]">350</span>
                                            <span className="text-2xl text-[#582c81] font-bold">,00</span>
                                        </div>
                                        
                                        <p className="text-slate-600 font-medium text-base mb-3">ou 12x de <span className="font-bold text-slate-900">R$ 36,20</span> sem juros</p>
                                        
                                        <div className="inline-flex items-center gap-2 bg-white border-2 border-amber-200 text-amber-700 px-4 py-2 rounded-lg shadow-sm">
                                            <span className="text-lg">💰</span>
                                            <span className="font-bold text-xs sm:text-sm">Você economiza R$ 150,00 + GANHA R$ 149,90 em bônus | Totalizando R$ 299,90 nessa oferta</span>
                                        </div>
                                    </div>
                                    <Button onClick={handleBookingClick} size="lg" className="w-full sm:w-auto bg-[#582c81] hover:bg-[#6d3a9b] text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all py-7 px-12 h-auto rounded-full transform hover:scale-105">
                                        Garantir Minha Vaga
                                    </Button>
                                </div>
                                <p className="text-sm text-slate-500 mt-6 text-center">⚡ Liberamos apenas 8 vagas por dia para garantir atendimento profundo e personalizado</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Calendário de Agendamento Embebido */}
        {showCalendar && (
          <section id="calendario-agendamento" className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                    Escolha Seu Horário
                  </h2>
                  <p className="text-lg text-slate-600">
                    Selecione o melhor dia e horário para sua sessão de Radiestesia Genética
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border-2 border-[#582c81]/20">
                  {/* Cal.com React embed */}
                  <Cal
                    namespace="sessaoradgen"
                    calLink="raiz-energetica/sessaoradgen"
                    style={{ width: "100%", height: "800px", overflow: "scroll" }}
                    config={{ layout: "week_view" }}
                  />
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-600">
                    Após escolher seu horário, você será direcionado para o checkout seguro
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <section className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Histórias de Libertação</h2>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-slate-600 leading-relaxed">Resultados reais de quem decidiu quebrar as correntes do passado.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Carousel
                items={testimonials}
                autoPlay={true}
                autoPlayInterval={7000}
                showDots={true}
                showArrows={true}
                itemsPerView={1}
                arrowClassName="hidden md:flex"
                dotActiveColor="bg-amber-600"
                dotInactiveColor="bg-gray-300 hover:bg-amber-300"
                progressBarColor="bg-amber-600"
                renderItem={(testimonial, index) => (
                  <Card className="border-gray-200 shadow-lg hover:shadow-xl p-8 bg-white transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-700 italic mb-6 text-lg leading-relaxed text-center">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-slate-900 text-center text-xl">
                      - {testimonial.name}
                    </p>
                  </Card>
                )}
              />
            </div>
          </div>
        </section>

        <FAQRadiestesia />

        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center bg-white p-12 rounded-2xl max-w-3xl mx-auto border border-gray-200 shadow-lg">
              <img 
                src="/images/services/selo-7-dias.webp" 
                alt="Selo Garantia 7 Dias" 
                className="w-32 h-32 mx-auto mb-6 object-contain"
              />
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Garantia de Profundidade</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Temos total confiança no poder desta sessão. Se ao final você não sentir que recebeu insights profundos e um caminho claro para a transformação, agendaremos uma sessão complementar de 30 minutos, sem custo algum, para aprofundar as questões. Seu investimento é na sua evolução, e nosso compromisso é com o seu resultado.
              </p>
              <Button onClick={handleBookingClick} size="lg" asChild className="mt-8 bg-[#582c81] hover:bg-[#6d3a9b] text-white font-bold shadow-lg hover:shadow-xl transition-all py-6 px-10 h-auto rounded-full">
                <a href="#oferta">Agendar Sem Risco</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <CTAFinalRadiestesia />
      <LandingFooter />
    </div>
  );
};

export default RadiestesiaGenetica;