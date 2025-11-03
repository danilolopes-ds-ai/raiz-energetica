import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dna, KeyRound, Flame, Award, CheckCircle, Star, Users, DollarSign, Hand as HeartHand, Briefcase, GitBranchPlus, Gift } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroRadiestesia from './landing-components/HeroRadiestesia';
import ProvaCientifica from './landing-components/ProvaCientifica';
import SintomasRadgen from './landing-components/SintomasRadgen';
import OqueEradgen from './landing-components/OqueEradgen';
import ComoAgeRadgen from './landing-components/ComoAgeRadgen';
import ParaQuemEradgen from './landing-components/ParaQuemEradgen';
import FAQRadiestesia from './landing-components/FAQRadiestesia';
import CTAFinalRadiestesia from './landing-components/CTAFinalRadiestesia';

const LandingHeader = () => (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-amber-200/80">
        <div className="container mx-auto flex justify-between items-center p-4">
            <Link to="/" className="flex items-center space-x-2">
                <Dna className="w-8 h-8 text-amber-600" />
                <span className="font-bold text-xl text-slate-800 tracking-tight">Radiestesia Genética</span>
            </Link>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <a href="#oferta">Agendar Sessão</a>
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

  const handleBookingClick = () => {
    toast({
      title: "✨ Agendamento Exclusivo",
      description: "Você será redirecionado para finalizar seu agendamento. Sua transformação começa agora. 🚀",
    });
    setTimeout(() => {
      window.open('https://cal.com/raiz-energetica/sessaoradgen', '_blank');
    }, 1500);
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

        <section id="oferta" className="py-20 md:py-24 bg-slate-50">
            <div className="container mx-auto px-6 lg:px-8">
                <motion.div
                    className="bg-slate-50 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto border border-amber-200/50"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="p-8 md:p-12">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-center">
                                <span className="text-gradient-gold">Descubra e Limpe os Padrões que Sabotam Sua Vida</span>
                                <span className="ml-2 inline-block" role="img" aria-label="dna">🧬</span>
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 text-center max-w-3xl mx-auto">Sessão de Radiestesia Genética para identificar e tratar bloqueios ancestrais que geram sintomas recorrentes.</p>
                            
                            <h3 className="mt-8 mb-4 font-bold text-xl text-slate-800 text-center">O que você recebe:</h3>
                            <ul className="space-y-3 text-slate-700 max-w-lg mx-auto text-left">
                                {offerItems.map(item => (
                                    <li key={item} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="mt-8 max-w-2xl mx-auto">
                            <div className="bg-amber-50/60 border-2 border-dashed border-amber-400 p-6 rounded-xl text-center">
                                <div className="flex justify-center items-center mb-2">
                                    <Gift className="w-8 h-8 text-amber-600 mr-3" />
                                    <p className="font-extrabold text-amber-800 text-2xl">BÔNUS EXCLUSIVO</p>
                                </div>
                                <p className="text-amber-700 max-w-md mx-auto">{bonusText}</p>
                            </div>

                            <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                                    <div className="text-center sm:text-left">
                                        <p className="text-slate-500 text-sm uppercase tracking-wider mb-3 font-medium">Investimento de transformação</p>
                                        
                                        {/* Preço original riscado */}
                                        <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                                            <span className="text-slate-400 line-through text-2xl font-semibold">R$ 500,00</span>
                                            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                                <Flame className="w-3 h-3" />
                                                <span>30% OFF</span>
                                            </div>
                                        </div>
                                        
                                        {/* Preço atual */}
                                        <div className="flex items-baseline justify-center sm:justify-start gap-2 mb-2">
                                            <span className="text-xl text-amber-700 font-semibold">R$</span>
                                            <span className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-amber-600">349</span>
                                            <span className="text-2xl text-amber-700 font-bold">,90</span>
                                        </div>
                                        
                                        <p className="text-slate-600 font-medium text-base mb-3">ou 12x de <span className="font-bold text-slate-900">R$ 33,99</span> sem juros</p>
                                        
                                        {/* Badge de economia */}
                                        <div className="inline-flex items-center gap-2 bg-amber-50 border-2 border-amber-300 text-amber-900 px-4 py-2 rounded-xl">
                                            <span className="text-lg">💰</span>
                                            <span className="font-bold text-sm">Economize R$ 150,10 hoje</span>
                                        </div>
                                    </div>
                                    <Button onClick={handleBookingClick} size="lg" className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-4 px-8 h-auto">
                                        Garantir Minha Vaga
                                    </Button>
                                </div>
                                <p className="text-xs text-slate-500 mt-4 text-center">Vagas limitadas para garantir a profundidade de cada atendimento.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Histórias de <span className="text-gradient-gold">Libertação</span></h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">Resultados reais de quem decidiu quebrar as correntes do passado.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, i) => (
                <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }} className="h-full">
                  <Card className="h-full border-slate-200/80 shadow-md p-6 flex flex-col bg-white">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, j) => <Star key={j} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-slate-600 italic mb-4 flex-grow">"{testimonial.text}"</p>
                    <p className="font-bold text-amber-700 text-right">- {testimonial.name}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FAQRadiestesia />

        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center bg-slate-100 p-10 rounded-2xl max-w-3xl mx-auto border border-slate-200">
              <Award className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900">Garantia de Profundidade</h2>
              <p className="mt-4 text-slate-600">Temos total confiança no poder desta sessão. Se ao final você não sentir que recebeu insights profundos e um caminho claro para a transformação, agendaremos uma sessão complementar de 30 minutos, sem custo algum, para aprofundar as questões. Seu investimento é na sua evolução, e nosso compromisso é com o seu resultado.</p>
              <Button onClick={handleBookingClick} size="lg" asChild className="mt-8 bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-4 h-auto">
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