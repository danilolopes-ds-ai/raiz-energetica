import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQHarmoniaGeracional = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como a Harmonia Geracional ajuda na relação com meu/minha filho(a)?",
      answer: "Através da Radiestesia Genética aplicada ao contexto familiar, identificamos e tratamos padrões energéticos que estão criando o distanciamento entre você e seu/sua filho(a). Trabalhamos com campos energéticos sutis, memórias ancestrais e influências externas que afetam o comportamento dele(a). O tratamento dissolve bloqueios invisíveis que impedem a conexão natural entre mãe e filho(a)."
    },
    {
      question: "Por que o investimento é maior que outras terapias energéticas?",
      answer: "Este é um serviço premium que vai muito além da técnica energética. Você recebe acolhimento especializado de 10 anos de experiência em terapias familiares, orientação específica para sua situação, estratégias práticas de reconexão e um espaço seguro para compartilhar suas angústias. Muitas mães não têm com quem conversar sobre isso - aqui você é ouvida, compreendida e direcionada com sensibilidade e expertise."
    },
    {
      question: "Meu/minha filho(a) precisa participar da sessão?",
      answer: "Não. O tratamento é realizado através do seu campo energético materno, que está intrinsecamente conectado ao do seu/sua filho(a). Não é necessário que ele(a) saiba, participe ou acredite. A transformação acontece no campo sutil e se manifesta naturalmente no comportamento e na relação entre vocês."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Cada caso é único, mas a maioria das mães relata mudanças perceptíveis nas primeiras 2-3 semanas. Pode ser um olhar diferente, uma conversa que não acontecia há meses, ou uma diminuição da agressividade. A transformação profunda acontece progressivamente, conforme o campo energético se estabiliza e os padrões antigos se dissolvem."
    },
    {
      question: "A terapia é feita à distância ou preciso ir presencialmente?",
      answer: "100% à distância. Através de campos energéticos sutis, a conexão acontece independentemente da localização física. Similar ao WiFi, mas no campo sutil. A ciência quântica comprova que a informação transcende o espaço físico. Você não precisa sair de casa - recebe todo o acompanhamento por WhatsApp e/ou videochamada, conforme sua preferência."
    },
    {
      question: "Que tipo de problemas essa terapia pode resolver?",
      answer: "Agressividade, distanciamento emocional, más influências, vícios comportamentais, rebeldia extrema, comportamentos de risco, desrespeito, isolamento, mudanças repentinas de comportamento, envolvimento com amizades prejudiciais, perda de valores familiares, entre outros padrões que estão afetando a relação mãe-filho(a) e a harmonia do lar."
    },
    {
      question: "Posso fazer junto com acompanhamento psicológico do meu filho?",
      answer: "Sim! A Harmonia Geracional potencializa tratamentos convencionais. Ela funciona como terapia complementar e integrativa que trata o campo energético, enquanto terapias tradicionais trabalham outros aspectos. Muitas mães relatam que a terapia psicológica do filho começou a 'funcionar melhor' após a limpeza energética."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Se em 30 dias você não sentir mudanças positivas na relação com seu/sua filho(a), devolvemos 100% do seu investimento, sem perguntas ou burocracia. Acreditamos profundamente no poder desta terapia e assumimos todo o risco. Você só tem a ganhar."
    },
    {
      question: "Preciso fazer várias sessões ou uma só resolve?",
      answer: "Depende da profundidade do distanciamento e dos padrões energéticos envolvidos. O Plano Essência (sessão única) já promove transformações significativas. Para casos mais complexos ou para acompanhamento contínuo até a estabilização completa, recomendamos o Plano Raiz ou Legado. Durante a primeira sessão, avalio sua situação e oriento o melhor caminho."
    },
    {
      question: "Isso funciona mesmo? Parece difícil de acreditar...",
      answer: "Entendo sua dúvida - é natural. A Radiestesia Genética tem comprovação científica através de estudo validado pelo Hospital Israelita Albert Einstein (2020) que demonstrou 90% de melhora nos ritmos cerebrais. Além disso, centenas de mães já transformaram suas relações familiares com essa técnica. Por isso oferecemos garantia de 30 dias: se não funcionar para você, devolvemos tudo. O risco é zero."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-rose-50/90">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-900 via-pink-500 to-rose-900 bg-clip-text text-transparent tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-xl text-rose-700 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Terapia de Harmonia Geracional
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-rose-200 rounded-xl overflow-hidden bg-white hover:border-rose-300 hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-rose-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-rose-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-rose-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 text-rose-700 leading-relaxed border-t border-rose-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQHarmoniaGeracional;
