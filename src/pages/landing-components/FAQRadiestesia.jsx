import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQRadiestesia = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a análise genética energética à distância?",
      answer: "A Radiestesia Genética trabalha com o campo quântico informacional. Utilizando seu nome completo e data de nascimento, acessamos seu campo energético e rastreamos padrões herdados até a 12ª geração ancestral. A distância não é barreira no campo vibracional."
    },
    {
      question: "Quanto tempo dura uma sessão e quanto tempo leva para ter resultados?",
      answer: "Cada sessão dura aproximadamente 60 minutos ao vivo. Os resultados começam a se manifestar imediatamente após a sessão, com percepções mais profundas emergindo nas primeiras semanas à medida que os padrões se reorganizam."
    },
    {
      question: "O que exatamente é investigado na minha linhagem genética?",
      answer: "Investigamos bloqueios energéticos, traumas não resolvidos, padrões de comportamento repetitivos, crenças limitantes herdadas, contratos ancestrais, votos e juramentos inconscientes que foram transmitidos através das gerações e impactam sua vida atual."
    },
    {
      question: "Preciso conhecer a história da minha família para fazer a sessão?",
      answer: "Não. A Radiestesia Genética acessa diretamente seu campo informacional energético. Mesmo sem conhecer sua árvore genealógica ou história familiar, conseguimos identificar e transmutar os padrões que foram herdados e estão ativos em você."
    },
    {
      question: "O que está incluído no relatório da sessão?",
      answer: "Você recebe um relatório completo detalhando: padrões ancestrais identificados, gerações de origem dos bloqueios, emoções e crenças herdadas, transmutações realizadas, orientações pós-sessão e práticas de integração para consolidar as mudanças."
    },
    {
      question: "Com que frequência preciso fazer as sessões?",
      answer: "Uma única sessão já promove transformações profundas. Para casos mais complexos ou múltiplas camadas de padrões, recomendamos intervalos de 30-45 dias entre sessões, permitindo que as mudanças se integrem completamente antes de acessar novas camadas."
    },
    {
      question: "Como a Radiestesia Genética difere de terapias tradicionais?",
      answer: "Enquanto terapias convencionais trabalham com sua história pessoal nesta vida, a Radiestesia Genética vai além: investiga e transmuta padrões que você herdou de seus ancestrais, acessando a raiz vibracional de questões que muitas vezes não têm origem em sua experiência atual."
    },
    {
      question: "Eu preciso acreditar para funcionar?",
      answer: "Não. A Radiestesia Genética trabalha no nível energético informacional, independente de crenças. Sua abertura e intenção de transformação potencializam os resultados, mas o processo age sobre os campos sutis independentemente do ceticismo ou fé."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se dentro de 7 dias após a sessão você sentir que o serviço não atendeu suas expectativas, devolvemos 100% do seu investimento, sem perguntas ou burocracia. Nosso compromisso é com sua transformação genuína."
    },
    {
      question: "A Radiestesia Genética substitui tratamento médico ou psicológico?",
      answer: "Não. A Radiestesia Genética é uma terapia complementar que trabalha no campo energético. Ela potencializa tratamentos convencionais, mas não substitui acompanhamento médico, psicológico ou psiquiátrico quando necessário."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre a Radiestesia Genética
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
              className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-amber-300 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-amber-50/30 transition-colors duration-200"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${
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
                    <div className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed border-t border-slate-100">
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

export default FAQRadiestesia;
