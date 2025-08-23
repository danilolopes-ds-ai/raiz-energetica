import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Search, BarChart, Sparkles, ShieldCheck, Star, CheckCircle, HelpCircle, Gift, UserCheck, MessageSquare, Send, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CountdownTimer from '@/components/atoms/CountdownTimer';
import { SecurityBadges } from '@/components/atoms/SecurityBadges';
import DiagnosticoHero from './Diagnostico/DiagnosticoHero';
import PainPointsSection from './Diagnostico/PainPointsSection';
import ComoFuncionaSection from './Diagnostico/ComoFuncionaSection';

const LandingHeader = () => (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200/80">
        <div className="container mx-auto flex justify-between items-center p-3 sm:p-4">
            <Link to="/" className="flex items-center space-x-2">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-indigo-600" />
                <span className="font-bold text-sm sm:text-base md:text-xl text-slate-800 tracking-tight">Desvendando a Raiz</span>
            </Link>
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 md:px-4 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                <a href="#oferta">
                    <span className="hidden sm:inline">Fazer Meu Diagnóstico</span>
                    <span className="sm:hidden">Diagnóstico</span>
                </a>
            </Button>
        </div>
    </header>
);

const LandingFooter = () => (
    <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Raiz Energética. Todos os direitos reservados.</p>
            <p className="text-xs mt-2 max-w-2xl mx-auto">Este serviço é uma ferramenta poderosa de autoconhecimento e direcionamento terapêutico, mas não substitui diagnósticos ou tratamentos médicos, psicológicos ou psiquiátricos. Em caso de problemas de saúde, procure um profissional qualificado.</p>
        </div>
    </footer>
);

const Diagnostico = () => {
    const { toast } = useToast();
    const [slots, setSlots] = useState(5);

    // Sistema de slots dinâmicos
    useEffect(() => {
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('lastVisitDate_diagnostico');
        const savedSlots = localStorage.getItem('slots_diagnostico');

        if (lastVisit === today && savedSlots) {
            setSlots(Math.max(0, parseInt(savedSlots, 10)));
        } else {
            const initialSlots = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5 slots
            setSlots(initialSlots);
            localStorage.setItem('slots_diagnostico', initialSlots.toString());
            localStorage.setItem('lastVisitDate_diagnostico', today);
        }
    }, []);

    const testimonials = [
      { name: "Juliana S.", profession: "Terapeuta Holística", text: "Eu já trabalho com energia, mas o diagnóstico trouxe uma clareza que eu não conseguia acessar sozinha. Foi como acender uma luz numa sala escura. Vi exatamente onde estava o nó e o que fazer. Recomendo de olhos fechados." },
      { name: "Marcos P.", profession: "Empreendedor", text: "O relatório bateu 100% com o que eu sentia, mas não sabia nomear." },
      { name: "Carla M.", profession: "Advogada", text: "Me poupou meses de terapia. Profundo, prático e certeiro." }
    ];

    const handleCTAClick = () => {
        toast({
            title: "🔥 Ação Rápida!",
            description: `Timer ativo - garante seu desconto antes que expire! Apenas ${slots} vagas disponíveis hoje. ⏰`,
        });
        
        if (slots > 0) {
            const newSlots = slots - 1;
            setSlots(newSlots);
            localStorage.setItem('slots_diagnostico', newSlots.toString());
        }
        
        // Simular redirecionamento para checkout
        setTimeout(() => {
            // Aqui você integraria com seu sistema de pagamento
            console.log('Redirecionando para checkout...');
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    const painPoints = [
      { icon: Zap, text: "Cansaço que não passa mesmo com descanso" },
      { icon: MessageSquare, text: "Relações repetitivas e desgastantes" },
      { icon: BarChart, text: "Vida financeira emperrada e dificuldade em prosperar" },
      { icon: HelpCircle, text: "Sensação de estagnação e sem direção na vida" },
      { icon: ShieldCheck, text: "Sintomas físicos que vêm e vão sem diagnóstico e explicação" },
      { icon: Search, text: "Dúvidas sobre seu propósito e falta de clareza na vida" }
    ];

    const faqItems = [
      { q: "Preciso estar online na hora da análise?", a: "Não. A leitura é feita 100% à distância com base em seu nome completo e data de nascimento." },
      { q: "O que eu recebo?", a: "Um PDF com análise vibracional, visual e detalhado, com a análise do seu campo energético, bloqueios detectados, nível de energia e um plano de ação claro." },
      { q: "É seguro? Meus dados estão protegidos?", a: "Sim. Seguimos as melhores práticas de segurança digital e confidencialidade." },
      { q: "E se eu não gostar?", a: "Você tem garantia total de 7 dias. Se não sentir clareza com o material, devolvemos seu dinheiro sem perguntas." }
    ];

    return (
        <div className="bg-background font-sans text-slate-700">
            <Helmet>
                <title>Desvendando a Raiz - Diagnóstico Energético Personalizado</title>
                <meta name="description" content="Descubra em 24h o que está bloqueando sua energia com nosso diagnóstico personalizado. Clareza e direcionamento por um valor acessível." />
            </Helmet>
            <LandingHeader />
            <main>
                <DiagnosticoHero 
                  handleCTAClick={handleCTAClick}
                  containerVariants={containerVariants}
                  itemVariants={itemVariants}
                  slots={slots}
                />

                <PainPointsSection 
                  painPoints={painPoints}
                  itemVariants={itemVariants}
                />

                <ComoFuncionaSection 
                  containerVariants={containerVariants}
                  itemVariants={itemVariants}
                />
                
                <section id="oferta" className="py-20 md:py-24 text-white bg-gradient-to-br from-purple-600 to-indigo-700">
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                              Chega de dar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">murmo em ponta de faca</span>
                            </h2>
                            <p className="mt-4 text-lg text-slate-600 font-bold">
                              Veja o que você vai ter em mãos:
                            </p>
                            <ul className="space-y-4 text-slate-700 mt-8">
                              {[
                                {
                                  title: 'Mapa energético detalhado:',
                                  desc: 'Visual e direto ao ponto'
                                },
                                {
                                  title: 'Causa raiz dos seus bloqueios:',
                                  desc: 'Internos e herdados identificados'
                                },
                                {
                                  title: 'Porcentagem de energia vital atual:',
                                  desc: 'Nível exato da sua vitalidade'
                                },
                                {
                                  title: 'Influências externas mapeadas:',
                                  desc: 'Ambiente, pessoas e padrões detectados'
                                },
                                {
                                  title: 'Plano de ação simples:',
                                  desc: 'Aplicável sem misticismo'
                                },
                                {
                                  title: 'Entrega rápida garantida:',
                                  desc: 'No seu e-mail em até 24h'
                                }
                              ].map(item => (
                                <li key={item.title} className="flex items-start gap-3">
                                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                                  <div>
                                    <span className="font-bold text-slate-900">{item.title}</span>
                                    <span className="block text-slate-700">{item.desc}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="group relative bg-slate-50 p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-200 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"></div>
                            <div className="relative">
                              <div className="text-center">
                                <CountdownTimer initialHours={2} storageKey="diagnostico-timer" returnPrice="R$ 149" />
                                <p className="text-slate-500 text-base sm:text-lg md:text-xl">De <span className="line-through">R$149</span></p>
                                <p className="my-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 drop-shadow-lg">R$ 79</p>
                                <p className="text-slate-600 font-semibold text-sm sm:text-base mb-4">Pagamento único</p>
                                <Button onClick={handleCTAClick} size="lg" className="w-full mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-3 sm:py-4 px-2 sm:px-4 md:px-6 h-auto animate-pulse">
                                    ⚡ QUERO MEU DIAGNÓSTICO AGORA
                                </Button>
                                <div className="mt-3">
                                    <SecurityBadges dark={true} compact={true} />
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
                          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Pessoas que descobriram a raiz e <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">mudaram seu rumo</span></h2>
                        </div>
                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                           {testimonials.map((testimonial, i) => (
                                <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }}>
                                    <Card className="h-full border-slate-200/80 shadow-md p-6 flex flex-col">
                                        <div className="flex mb-3">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
                                        </div>
                                        <p className="text-slate-600 italic mb-4 flex-grow">{testimonial.text}</p>
                                        <div className="text-right">
                                            <p className="font-bold text-indigo-600">{testimonial.name}</p>
                                            <p className="text-sm text-slate-500 italic">{testimonial.profession}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="py-20 md:py-24 bg-slate-900">
                  <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
                      <div className="text-center">
                          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Dúvidas Frequentes</h2>
                          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">Respostas para as perguntas mais comuns sobre o diagnóstico.</p>
                      </div>
                      <motion.div 
                          className="mt-12"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                      >
                          <Accordion type="single" collapsible className="w-full">
                              {faqItems.map((item, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border-b-slate-700">
                                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline text-slate-200 hover:text-white">{item.q}</AccordionTrigger>
                                  <AccordionContent className="text-base text-slate-400 leading-relaxed">
                                      {item.a}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                          </Accordion>
                      </motion.div>
                  </div>
                </section>

                <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center bg-slate-100 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl max-w-3xl mx-auto border border-slate-200">
                        <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-indigo-600 mx-auto mb-3 sm:mb-4" />
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-tight">Risco zero. Clareza garantida.</h2>
                        <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">Confiamos tanto na precisão desse diagnóstico que oferecemos garantia incondicional. Se você não sentir clareza real, devolvemos 100% do seu investimento.</p>
                        <div className="w-full max-w-xs mx-auto mt-6 sm:mt-8">
                            <div className="bg-slate-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-purple-400 to-red-500 h-2.5 rounded-full transition-all duration-500" style={{ width: `${(slots / 5) * 100}%` }}></div>
                            </div>
                        </div>
                        <p className="mt-2 text-slate-600 font-semibold text-xs sm:text-sm text-center">
                            🔥 Apenas <span className="text-red-600 font-bold">{slots} vagas disponíveis</span> hoje
                        </p>
                        <Button onClick={handleCTAClick} size="lg" asChild className="mt-6 sm:mt-8 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 py-4 px-6 h-auto animate-pulse text-xs sm:text-sm md:text-base min-h-[3.5rem] sm:min-h-[4rem]">
                          <a href="#oferta" className="text-center leading-tight flex items-center justify-center w-full h-full">
                            <span className="block">⚡ SIM! QUERO DESCOBRIR<br className="sm:hidden"/>
                            <span className="sm:inline"> MINHA RAIZ AGORA</span></span>
                          </a>
                        </Button>
                        <div className="mt-4 sm:mt-6">
                          <SecurityBadges compact={true} className="max-w-md mx-auto" />
                        </div>
                    </div>
                  </div>
                </section>
            </main>
            <LandingFooter />
        </div>
    );
};

export default Diagnostico;