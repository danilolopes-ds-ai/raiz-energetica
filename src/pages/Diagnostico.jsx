import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Search, BarChart, Sparkles, ShieldCheck, Star, CheckCircle, HelpCircle, Gift, UserCheck, MessageSquare, Send, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LandingHeader = () => (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200/80">
        <div className="container mx-auto flex justify-between items-center p-4">
            <Link to="/" className="flex items-center space-x-2">
                <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
                <span className="font-bold text-base sm:text-xl text-slate-800 tracking-tight">Desvendando a Raiz</span>
            </Link>
            <Button asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-2 sm:px-4 sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
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

    const testimonials = [
      { name: "Juliana S.", profession: "Terapeuta Holística", text: "Eu já trabalho com energia, mas o diagnóstico trouxe uma clareza que eu não conseguia acessar sozinha. Foi como acender uma luz numa sala escura. Vi exatamente onde estava o nó e o que fazer. Recomendo de olhos fechados." },
      { name: "Marcos P.", profession: "Empreendedor", text: "O relatório bateu 100% com o que eu sentia, mas não sabia nomear." },
      { name: "Carla M.", profession: "Advogada", text: "Me poupou meses de terapia. Profundo, prático e certeiro." }
    ];

    const handleCTAClick = () => {
        toast({
            title: "✨ Ótima decisão!",
            description: "Você está a um passo de ter mais clareza. Continue para finalizar. 🚀",
        });
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
                <section className="relative bg-white pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.1),rgba(255,255,255,0))]"></div>
                    <div className="container mx-auto lg:px-8 relative">
                        <motion.div 
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="text-center lg:text-left px-6 lg:px-0">
                                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                                    Descubra em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">24h</span> o que está travando sua vida e como <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">começar a destravar</span>
                                </motion.h1>
                                <motion.p variants={itemVariants} className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-slate-600">
                                    <sub className="text-base font-medium">Um diagnóstico energético claro, direto no seu e-mail. Feito à distância, com precisão e sensibilidade.</sub>
                                </motion.p>
                                <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <Button onClick={handleCTAClick} asChild className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-sm sm:text-lg px-3 py-3 sm:px-8">
                                        <a href="#oferta" className="flex items-center justify-center">
                                            <Search className="w-5 h-5 mr-2" />
                                            Quero Meu Diagnóstico Agora
                                        </a>
                                    </Button>
                                    <Button variant="outline" asChild className="border-slate-300 hover:bg-slate-100 font-semibold text-sm sm:text-lg px-3 py-3 sm:px-8">
                                        <a href="#como-funciona" className="flex items-center justify-center">
                                            <FileText className="w-5 h-5 mr-2" />
                                            Ver Como Funciona
                                        </a>
                                    </Button>
                                </motion.div>
                            </div>
                            <motion.div variants={itemVariants} className="relative">
                                <picture>
                                    <source media="(max-width: 1023px)" srcSet="/images/services/diagnostico-card-mobile.webp" />
                                    <img className="rounded-2xl shadow-2xl w-full h-auto object-cover" alt="Imagem abstrata simbolizando a descoberta da causa raiz de bloqueios energéticos" src="/images/services/diagnostico-card.webp" />
                                </picture>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Você faz o que pode... mas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-indigo-600">a vida parece que não anda</span>?</h2>
                            <p className="mt-4 text-lg text-slate-600">Às vezes, a raiz do problema não está no corpo, mas no seu campo energético. Veja se alguma dessas situações fala com você:</p>
                        </div>
                        <div className="mt-12 max-w-2xl mx-auto">
                            <ul className="space-y-4">
                                {painPoints.map((point, i) => (
                                    <motion.li key={i} variants={itemVariants} className="flex items-start text-lg">
                                        <CheckCircle className="w-6 h-6 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">{point.text}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <motion.blockquote variants={itemVariants} className="mt-8 text-center text-lg text-slate-600 italic bg-amber-50/50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                                Se alguma dessas frases te tocou, talvez seja o momento de dar o próximo passo e entender o que sua energia está <strong className="text-indigo-600 not-italic">sinalizando</strong>.
                            </motion.blockquote>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-24 bg-white" id="como-funciona">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Como Funciona: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">Clareza em 4 Etapas</span></h2>
                            <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">Um processo rápido, profundo e totalmente à distância.</p>
                        </div>
                        <motion.div 
                            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {[
                                { icon: Gift, title: "Solicite o Diagnóstico", desc: "Realize o pagamento com total segurança em poucos cliques." },
                                { icon: UserCheck, title: "Preencha Seus Dados", desc: "Você receberá um link com um formulário rápido (nome + data de nascimento)." },
                                { icon: Sparkles, title: "Análise Energética à Distância", desc: "Realizamos sua leitura energética com precisão e sigilo, sem precisar de presença física ou online." },
                                { icon: Send, title: "Receba seu Mapa em até 24h", desc: "Seu diagnóstico completo chega por e-mail, com insights e um plano prático de ação." }
                            ].map((step, i) => (
                                <motion.div key={i} variants={itemVariants} className="group">
                                    <Card className="h-full p-6 text-center relative overflow-hidden bg-slate-50/50 border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="absolute -top-2 -right-2 text-8xl font-extrabold text-slate-200/80 opacity-70 select-none group-hover:text-amber-100/50 transition-colors duration-300">
                                            {i + 1}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 mb-4 group-hover:bg-amber-100 transition-colors duration-300">
                                                <step.icon className="h-8 w-8 text-indigo-600 group-hover:text-amber-500 transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{step.title}</h3>
                                            <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
                
                <section id="oferta" className="py-20 md:py-24 bg-indigo-700 text-white">
                    <div className="container mx-auto px-6 lg:px-8">
                      <motion.div 
                        className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto p-4 sm:p-8 lg:p-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-center">
                            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Chega de dar <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">murro em ponta de faca</span></h2>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto font-bold">Veja o que você vai ter em mãos:</p>
                        </div>
                        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12 items-center">
                            <div className="text-left px-2 sm:px-0">
                                <ul className="space-y-3">
                                    {[
                                        "Mapa energético detalhado (visual e direto ao ponto)",
                                        "Causa raiz dos seus bloqueios (internos e herdados)",
                                        "Porcentagem de energia vital atual",
                                        "Influências externas (ambiente, pessoas, padrões)",
                                        "Plano de ação simples e aplicável (sem misticismo)",
                                        "Entrega rápida no seu e-mail em até 24h"
                                    ].map(item => (
                                        <li key={item} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 lg:mt-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-center shadow-2xl border border-slate-700 sm:p-8 w-full max-w-sm mx-auto">
                                <p className="text-slate-400 text-lg sm:text-xl">De <span className="line-through">R$149</span></p>
                                <p className="my-1 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 sm:my-2 sm:text-6xl drop-shadow-lg">R$79</p>
                                <p className="text-slate-400 font-semibold text-sm sm:text-base">Pagamento único</p>
                                <Button onClick={handleCTAClick} className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold text-xs sm:text-base shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-600/60 transition-all transform hover:-translate-y-1 py-4 px-4 sm:px-6 h-auto">
                                    🌀 Quero Meu Diagnóstico Agora
                                </Button>
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

                <section className="py-20 md:py-24 bg-white">
                  <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center bg-slate-100 p-6 sm:p-10 rounded-2xl max-w-3xl mx-auto border border-slate-200">
                        <ShieldCheck className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Risco zero. Clareza garantida.</h2>
                        <p className="mt-4 text-slate-600">Confiamos tanto na precisão desse diagnóstico que oferecemos garantia incondicional. Se você não sentir clareza real, devolvemos 100% do seu investimento.</p>
                        <div className="w-full max-w-xs mx-auto mt-8">
                            <div className="bg-slate-200 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-amber-400 to-red-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <p className="mt-2 text-slate-600 font-semibold text-sm text-center">⏳ Vagas limitadas por dia para garantir qualidade energética da análise.</p>
                        <Button onClick={handleCTAClick} size="lg" asChild className="mt-8 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold shadow-lg shadow-amber-500/50 hover:shadow-xl hover:shadow-amber-600/60 transition-all transform hover:-translate-y-1 py-4 h-auto">
                          <a href="#oferta">🌀 Quero Meu Diagnóstico Agora</a>
                        </Button>
                    </div>
                  </div>
                </section>
            </main>
            <LandingFooter />
        </div>
    );
};

export default Diagnostico;