import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Gem, ShieldCheck, Sparkles, Wind, BrainCircuit, Sun, Star, CheckCircle, Clock, Users, Hand as HeartHand, ArrowRight, Shield } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroLimpeza from '@/pages/landing-components/HeroLimpeza';
import SinaisLimpeza from '@/pages/landing-components/SinaisLimpeza';
import MetodologiaLimpeza from '@/pages/landing-components/MetodologiaLimpeza';
import OfertaLimpeza from '@/pages/landing-components/OfertaLimpeza';
import BeneficiosLimpeza from '@/pages/landing-components/BeneficiosLimpeza';
import FAQLimpeza from '@/pages/landing-components/FAQLimpeza';
import CTAFinalLimpeza from '@/pages/landing-components/CTAFinalLimpeza';
import ServiceTestimonials from '@/pages/Services/ServiceTestimonials';

const LandingHeader = () => (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/60">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
            <Link to="/" className="text-slate-900 hover:text-teal-600 transition-colors duration-300">
                <span className="font-bold text-lg sm:text-xl tracking-tight">Limpeza Energética</span>
            </Link>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-300">
                <a href="https://pay.kiwify.com.br/XExYlUB" target="_blank" rel="noopener noreferrer">
                    <span className="hidden sm:inline">Renovar Minha Energia</span>
                    <span className="sm:hidden">Renovar Energia</span>
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

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
        <Helmet>
            <title>Limpeza Energética Profunda - Renove Suas Energias | Raiz Energética</title>
            <meta name="description" content="Sente-se cansado, estagnado ou sobrecarregado? Nossa Limpeza Energética remove bloqueios, purifica sua aura e restaura seu equilíbrio vital. Agende sua sessão e sinta a diferença." />
            
            {/* FAQ Schema Markup para Google Rich Snippets */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Como funciona a limpeza energética à distância?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A limpeza energética à distância funciona através da conexão energética universal. Utilizamos suas informações (nome completo, data de nascimento e endereço completo) para estabelecer uma conexão com seu campo energético, independente da distância física. A energia não tem barreiras espaciais, permitindo um trabalho tão eficaz quanto uma sessão presencial."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Quanto tempo leva para sentir os resultados?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A maioria das pessoas relata mudanças significativas nas primeiras 24-72 horas após a limpeza. Alguns sentem alívio imediato, enquanto outros percebem mudanças gradualmente ao longo de uma semana. Cada pessoa é única e os resultados variam conforme o nível de bloqueio energético que você tinha."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Preciso acreditar para funcionar?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Não! A limpeza energética funciona independente da sua crença, assim como a eletricidade funciona mesmo se você não entende como. Sua energia responde naturalmente ao processo de harmonização. No entanto, manter-se aberto e receptivo pode potencializar os resultados."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Com que frequência devo fazer a limpeza?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Se você passa por períodos de muito estresse, conflitos, ou sente que está 'carregado', pode ser necessário fazer com maior frequência. Recomendamos uma limpeza profunda a cada 1-3 meses como manutenção preventiva. Mas a frequência sempre vai depender da sua necessidade, é possível fazer toda semana. Não existe nenhuma contraindicação."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "O que está incluído no relatório?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Você receberá um relatório completo detalhando: bloqueios encontrados e removidos, estado dos seus chakras antes e depois, energias externas identificadas, orientações de proteção energética personalizadas e recomendações para manter seu campo limpo e protegido."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "A limpeza tem efeitos colaterais?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A limpeza energética é completamente segura e natural. Algumas pessoas podem sentir leve sonolência ou aumento de energia nas primeiras horas após a sessão - isso é normal e indica que o corpo está integrando as mudanças energéticas. Recomendamos muita hidratação no dia e durante a semana que receber o trabalho."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Como funciona o pagamento?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Aceitamos pagamento via Pix, cartão de débito ou crédito em até 12x. O pagamento é processado de forma segura através da plataforma Kwify. Após a confirmação do pagamento, você receberá instruções detalhadas por e-mail ou whatsapp."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Posso fazer a limpeza para outra pessoa?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sim! Você pode contratar a limpeza energética como presente para familiares ou amigos. Precisaremos das informações da pessoa que receberá a limpeza (nome completo, data de nascimento e endereço completo). Independente dela saber ou não, os resultados aparecem naturalmente e você recebe o resultado e orientações."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "E se eu não gostar do resultado?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o trabalho, devolvemos 100% do seu investimento, sem perguntas. Seu bem-estar e satisfação são nossa prioridade máxima."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "A limpeza energética substitui tratamento médico?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "NUNCA! A limpeza energética é uma ferramenta complementar poderosa de bem-estar e equilíbrio, mas não substitui diagnóstico, tratamento médico, psicológico ou psiquiátrico. Sempre mantenha acompanhamento com profissionais da saúde para questões clínicas."
                    }
                  }
                ]
              })}
            </script>
        </Helmet>
        
        <LandingHeader />

        <main>
            <HeroLimpeza />
            
            <SinaisLimpeza />
            
            <MetodologiaLimpeza />
            
            <OfertaLimpeza slots={slots} handlePurchaseClick={handlePurchaseClick} />
            
            <BeneficiosLimpeza />

            <ServiceTestimonials 
              serviceName="Limpeza Energética"
              maxTestimonials={8}
              showTitle={true}
              showStats={false}
              autoPlay={true}
              showServiceBadge={false}
            />
            
            <FAQLimpeza />

            <section className="py-20 md:py-24 bg-white">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto border border-slate-200 shadow-xl">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Selo de Garantia */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center"
                    >
                      <img 
                        src="/images/services/selo-7-dias.webp" 
                        alt="Garantia de 7 Dias" 
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="max-w-2xl">
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Sua Satisfação é Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Compromisso</span>
                      </h2>
                      <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                        Seu risco é <span className="font-bold text-teal-700">zero</span>. Temos tanta confiança nos benefícios da limpeza que oferecemos uma <span className="font-bold text-teal-700">garantia incondicional de 7 dias</span>. Se por qualquer motivo você não se sentir mais leve e com a energia renovada, basta nos enviar um e-mail e devolveremos todo o seu investimento.
                      </p>
                      <Button 
                        onClick={handlePurchaseClick} 
                        size="lg" 
                        asChild 
                        className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-full px-8 py-6 text-base md:text-lg"
                      >
                        <a href="https://pay.kiwify.com.br/XExYlUB" target="_blank" rel="noopener noreferrer">Solicitar Limpeza Sem Risco</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <CTAFinalLimpeza slots={slots} />
        </main>
        
        <LandingFooter />
    </div>
  );
};

export default LimpezaEnergetica;