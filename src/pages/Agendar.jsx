import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import CalEmbed from '@/components/molecules/CalEmbed';
import TherapyCard from '@/components/molecules/TherapyCard';
import { Calendar, Clock, Lock, CreditCard, Activity, Sparkles, Dna, Heart, ArrowLeft, ChevronRight } from 'lucide-react';

const Agendar = () => {
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  const therapies = [
    {
      id: 1,
      title: 'Desvendando a Raiz',
      subtitle: 'Diagnóstico Energético Completo',
      description: 'Mapeie padrões ocultos, descubra os bloqueios reais que travam sua vida e receba um plano de ação para sua transformação.',
      icon: Activity,
      isKiwifyProduct: true,
      kiwifyUrl: 'https://pay.kiwify.com.br/P0vggiH',
      price: 'R$ 79',
      duration: 'Análise completa',
      delivery: 'Entrega rápida garantida',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      features: ['Análise completa do campo energético', 'Identificação de bloqueios', 'Plano de ação personalizado', 'Resultado em 24h']
    },
    {
      id: 2,
      title: 'Limpeza Energética',
      subtitle: 'Purificação e Renovação',
      description: 'Liberte-se de energias densas e bloqueios invisíveis que drenam sua vitalidade. Sinta a leveza que você busca.',
      icon: Sparkles,
      isKiwifyProduct: true,
      kiwifyUrl: 'https://pay.kiwify.com.br/XExYlUB',
      price: 'R$ 147',
      duration: 'Processo completo',
      delivery: 'Relatório em 24h',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-50',
      features: ['Limpeza profunda à distância', 'Remoção de energias densas', 'Proteção energética']
    },
    {
      id: 3,
      title: 'Radiestesia Genética',
      subtitle: 'Cura Ancestral Profunda',
      description: 'Identifique e cure padrões familiares que se repetem há gerações. Quebre ciclos para você e sua família.',
      icon: Dna,
      calLink: 'raiz-energetica/sessaoradgen',
      price: 'R$ 350',
      duration: '60-90 min',
      delivery: 'Sessão ao vivo',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      features: ['Mapeamento genético energético', 'Quebra de padrões ancestrais', 'Relatório personalizado']
    },
    {
      id: 4,
      title: 'Harmonia Geracional',
      subtitle: 'Reconexão Familiar',
      description: 'Cure conflitos familiares profundos e restabeleça o equilíbrio nas relações que mais importam.',
      icon: Heart,
      hasSubOptions: true,
      subOptions: [
        {
          id: '4a',
          title: 'Sessão Individual',
          description: 'Sessão personalizada para harmonizar suas relações familiares específicas.',
          calLink: 'raiz-energetica/harmonia-individual',
          price: 'R$ 197',
          duration: '45-60 min',
          features: ['Análise familiar personalizada', 'Harmonização direcionada', 'Follow-up por WhatsApp']
        },
        {
          id: '4b',
          title: 'Plano Raiz',
          description: 'Programa intensivo de 3 meses para transformação familiar completa.',
          calLink: 'raiz-energetica/plano-raiz',
          price: 'R$ 497',
          duration: '3 meses',
          features: ['3 sessões mensais', 'Suporte contínuo', 'Material exclusivo', 'Grupo VIP']
        },
        {
          id: '4c',
          title: 'Plano Legado',
          description: 'Transformação familiar completa de 6 meses com acompanhamento VIP.',
          calLink: 'raiz-energetica/plano-legado',
          price: 'R$ 897',
          duration: '6 meses',
          features: ['6 sessões mensais', 'Acesso VIP', 'Materiais exclusivos', 'Suporte prioritário', 'Bônus especiais']
        }
      ],
      color: 'from-rose-500 to-orange-500',
      bgColor: 'bg-rose-50'
    }
  ];

  if (selectedTherapy) {
    return (
      <div>
        <section className="hero-pattern section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <button 
                onClick={() => setSelectedTherapy(null)}
                className="inline-flex items-center space-x-2 text-[#2D8C5C] hover:text-[#245A4A] transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Voltar às opções</span>
              </button>
              
              <Badge className="bg-[#2D8C5C]/10 text-[#2D8C5C] border-[#2D8C5C]/20">
                {selectedTherapy.subtitle}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold">
                {selectedTherapy.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {selectedTherapy.description}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-6 min-h-[700px]">
                  <CalEmbed calLink={selectedTherapy.calLink} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 text-center">
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <Calendar className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">1. Escolha o Horário</p>
                    <p className="text-sm text-gray-600">Selecione o dia e hora que melhor se adequa à sua rotina.</p>
                  </div>
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <CreditCard className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">2. Pagamento Seguro</p>
                    <p className="text-sm text-gray-600">Realize o pagamento via PIX, cartão ou boleto.</p>
                  </div>
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <Clock className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">3. Confirmação</p>
                    <p className="text-sm text-gray-600">Receba todos os detalhes por e-mail e WhatsApp.</p>
                  </div>
                  <div className="flex items-center justify-center flex-col space-y-2">
                    <Lock className="w-8 h-8 text-[#2D8C5C]" />
                    <p className="font-semibold">100% Seguro</p>
                    <p className="text-sm text-gray-600">Seus dados pessoais estão completamente protegidos.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <section className="hero-pattern section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <Badge className="bg-[#2D8C5C]/10 text-[#2D8C5C] border-[#2D8C5C]/20">Agendamento Online</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Escolha sua <span className="text-gradient">Terapia</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Selecione a terapia ideal para sua necessidade. Cada uma foi desenvolvida para trabalhar aspectos específicos da sua jornada de cura e autoconhecimento.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {therapies.map((therapy, index) => (
              <motion.div
                key={therapy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="w-full"
              >
                <TherapyCard 
                  therapy={therapy}
                  onSelect={() => setSelectedTherapy(therapy)}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8 sm:mt-12 mx-2 sm:mx-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Não sabe qual terapia escolher?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto px-2">
              Para iniciantes, recomendamos começar com o <strong>Diagnóstico Energético</strong> 
              ou converse conosco pelo WhatsApp para uma orientação personalizada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
              <button
                onClick={() => setSelectedTherapy(therapies[0])}
                className="w-full sm:w-auto bg-[#2D8C5C] text-white px-4 sm:px-6 py-3 rounded-lg font-medium hover:bg-[#245A4A] transition-colors text-sm sm:text-base"
              >
                Começar com Diagnóstico
              </button>
              <a 
                href="https://wa.me/5511966101949?text=Olá! Gostaria de uma orientação sobre qual terapia é ideal para mim." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                <span>💬</span>
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Agendar;
