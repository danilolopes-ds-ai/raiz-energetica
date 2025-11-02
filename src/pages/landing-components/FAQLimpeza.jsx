import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "Como funciona a limpeza energética à distância?",
    answer: "A limpeza energética à distância funciona através da conexão energética universal. Utilizamos suas informações (nome completo, data de nascimento e endereço completo) para estabelecer uma conexão com seu campo energético, independente da distância física. A energia não tem barreiras espaciais, permitindo um trabalho tão eficaz quanto uma sessão presencial."
  },
  {
    question: "Quanto tempo leva para sentir os resultados?",
    answer: "A maioria das pessoas relata mudanças significativas nas primeiras 24-72 horas após a limpeza. Alguns sentem alívio imediato, enquanto outros percebem mudanças gradualmente ao longo de uma semana. Cada pessoa é única e os resultados variam conforme o nível de bloqueio energético que você tinha."
  },
  {
    question: "Preciso acreditar para funcionar?",
    answer: "Não! A limpeza energética funciona independente da sua crença, assim como a eletricidade funciona mesmo se você não entende como. Sua energia responde naturalmente ao processo de harmonização. No entanto, manter-se aberto e receptivo pode potencializar os resultados."
  },
  {
    question: "Com que frequência devo fazer a limpeza?",
    answer: "Se você passa por períodos de muito estresse, conflitos, ou sente que está 'carregado', pode ser necessário fazer com maior frequência. Recomendamos uma limpeza profunda a cada 1-3 meses como manutenção preventiva. Mas a frequência sempre vai depender da sua necessidade, é possível fazer toda semana. Não existe nenhuma contraindicação. Após a primeira sessão, você receberá orientações personalizadas."
  },
  {
    question: "O que está incluído no relatório?",
    answer: "Você receberá um relatório completo detalhando: bloqueios encontrados e removidos, estado dos seus chakras antes e depois, energias externas identificadas, orientações de proteção energética personalizadas e recomendações para manter seu campo limpo e protegido."
  },
  {
    question: "A limpeza tem efeitos colaterais?",
    answer: "A limpeza energética é completamente segura e natural. Algumas pessoas podem sentir leve sonolência ou aumento de energia nas primeiras horas após a sessão - isso é normal e indica que o corpo está integrando as mudanças energéticas. Recomendamos muita hidratação no dia e durante a semana que receber o trabalho."
  },
  {
    question: "Como funciona o pagamento?",
    answer: "Aceitamos pagamento via Pix, cartão de débito ou crédito em até 12x. O pagamento é processado de forma segura através da plataforma Kwify. Após a confirmação do pagamento, você receberá instruções detalhadas por e-mail ou whatsapp."
  },
  {
    question: "Posso fazer a limpeza para outra pessoa?",
    answer: "Sim! Você pode contratar a limpeza energética como presente para familiares ou amigos. Precisaremos das informações da pessoa que receberá a limpeza (nome completo, data de nascimento e endereço completo). Independente dela saber ou não, os resultados aparecem naturalmente e você recebe o resultado e orientações."
  },
  {
    question: "E se eu não gostar do resultado?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito com o trabalho, devolvemos 100% do seu investimento, sem perguntas. Seu bem-estar e satisfação são nossa prioridade máxima."
  },
  {
    question: "A limpeza energética substitui tratamento médico?",
    answer: "NUNCA! A limpeza energética é uma ferramenta complementar poderosa de bem-estar e equilíbrio, mas não substitui diagnóstico, tratamento médico, psicológico ou psiquiátrico. Sempre mantenha acompanhamento com profissionais da saúde para questões clínicas."
  }
];

const FAQLimpeza = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">Frequentes</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tire suas dúvidas sobre a Limpeza Energética
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 bg-white rounded-xl border-2 border-slate-200 hover:border-teal-300 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-slate-600 leading-relaxed pr-8">
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-lg mb-2">Ainda tem dúvidas?</p>
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg hover:underline transition-colors duration-300"
          >
            Entre em contato conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQLimpeza;
