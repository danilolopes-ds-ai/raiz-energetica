import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Como funcionam as sessões online?',
      answer: 'Todas as terapias são realizadas 100% online via videochamada. Você não precisa sair de casa. Basta ter uma conexão de internet estável e um ambiente tranquilo para a sessão.'
    },
    {
      question: 'Quanto tempo dura cada sessão?',
      answer: 'Cada sessão tem duração média de 60 minutos. O tempo pode variar levemente dependendo da terapia escolhida e das necessidades energéticas identificadas durante o atendimento.'
    },
    {
      question: 'Preciso acreditar para funcionar?',
      answer: 'Não. A terapia energética trabalha no campo sutil, independente de crenças. Muitos clientes chegam céticos e percebem mudanças significativas. O que importa é estar aberto para observar o processo.'
    },
    {
      question: 'Quantas sessões vou precisar?',
      answer: 'Depende do caso. Alguns clientes sentem resultados já na primeira sessão. Outros precisam de acompanhamento contínuo. Durante a primeira consulta, fazemos uma avaliação e sugerimos o melhor caminho.'
    },
    {
      question: 'A Harmonia Geracional funciona mesmo sem o filho saber?',
      answer: 'Sim! A Harmonia Geracional trabalha no campo energético da linhagem familiar. O trabalho é feito através dos pais/responsáveis, e os resultados aparecem naturalmente no comportamento do filho, sem que ele precise saber ou participar.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Aceitamos pagamento via PIX, cartão de débito ou cartão de crédito. Após a confirmação do pagamento, você recebe todas as instruções por e-mail e WhatsApp para agendar ou iniciar seu atendimento.'
    },
    {
      question: 'Posso cancelar ou reagendar?',
      answer: 'Sim. Você pode reagendar com até 24 horas de antecedência sem custos. Para cancelamentos, consulte nossa política de reembolso no momento da compra.'
    },
    {
      question: 'Vocês atendem casos graves ou só questões leves?',
      answer: 'Atendemos desde questões pontuais até casos complexos e profundos. Nossa abordagem é integrativa e respeita cada processo individual. Se necessário, também orientamos sobre a importância do acompanhamento médico ou psicológico paralelo.'
    },
    {
      question: 'Não tenho tempo para sessão ao vivo. Posso receber o tratamento de outra forma?',
      answer: 'Sim! Você pode optar pelo tratamento assíncrono, onde realizamos toda a sessão e enviamos o resultado completo via áudio e imagens pelo WhatsApp. A vantagem é que você pode ouvir, rever e absorver o conteúdo no seu próprio ritmo, quantas vezes quiser.'
    },
    {
      question: 'Quero fazer tratamento para alguém que não aceita ajuda. Funciona mesmo assim?',
      answer: 'Sim! Tanto a Radiestesia Genética quanto a Harmonia Geracional trabalham no campo energético da pessoa, independente dela saber ou participar. O tratamento é realizado através de você, e os resultados aparecem naturalmente. Você recebe o resultado e orientações via WhatsApp.'
    },
    {
      question: 'A terapia energética substitui tratamento médico ou psicológico?',
      answer: 'NUNCA! Este serviço é uma ferramenta poderosa de bem-estar e equilíbrio. Não substitui diagnóstico ou tratamento médico, psicológico ou psiquiátrico. Recomendamos que mantenha seus acompanhamentos com profissionais de saúde. Este trabalho energético é complementar e integrativo.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e como funciona o atendimento
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-emerald-200 dark:hover:border-emerald-800"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white pr-8 leading-tight">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Ainda tem dúvidas?
          </p>
          <a 
            href="/contato" 
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline text-lg"
          >
            Entre em contato conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
