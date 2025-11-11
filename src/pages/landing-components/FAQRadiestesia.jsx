import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQRadiestesia = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a sessão de Radiestesia Genética à distância?",
      answer: "A técnica utiliza seu nome completo e data de nascimento para acessar seu campo energético através de comunicação quântica (comprovada cientificamente). Durante 60 minutos, identifico e trato padrões energéticos do DNA que afetam sua saúde física, emocional e mental, podendo rastrear informações de até 12 gerações ancestrais."
    },
    {
      question: "Como recebo o resultado da minha sessão?",
      answer: "Após a sessão de 60 minutos, você recebe um relatório por áudio e imagens via WhatsApp detalhando tudo que foi identificado e tratado. Caso prefira, posso enviar um resumo por e-mail. O retorno é personalizado conforme cada caso específico."
    },
    {
      question: "Que tipo de problemas a Radiestesia Genética pode tratar?",
      answer: "A técnica é completa: trata desde causas físicas (dores, doenças que se repetem na família), até energias de imóveis doentes (veios de água subterrâneos, antenas de celular, postes de alta tensão), padrões repetitivos (histórias que se repetem entre gerações), vampiros energéticos, energias de objetos pessoais (tatuagens, cicatrizes, piercings, relógios), entre muitas outras origens."
    },
    {
      question: "Preciso fazer várias sessões ou apenas uma resolve?",
      answer: "Depende da necessidade de cada caso específico. Uma sessão já promove transformações profundas. Recomendamos sessões de manutenção conforme seu sentir e suas condições. Não há contraindicação - você pode fazer toda semana se desejar, pois cada sessão acessa novas camadas de tratamento."
    },
    {
      question: "A técnica tem comprovação científica?",
      answer: "Sim. A técnica é reconhecida pela ABRADGEN (Associação Brasileira de Radiestesia Genética). Estudos realizados com voluntários demonstraram através de mapeamento cerebral: 90% apresentaram melhora nos ritmos cerebrais alfa e beta, 93% tiveram redução de traços epileptiformes, e 100% mantiveram traçados dentro da normalidade, demonstrando estado de maior relaxamento."
    },
    {
      question: "Como a Radiestesia Genética é diferente de outras terapias?",
      answer: "É uma técnica completa que vai além do emocional: trata causas que a medicina ocidental não explica (como hepatite sem histórico familiar), neutraliza energias de imóveis, identifica vampiros energéticos que impedem sua evolução, trata DNA energético (diferente do genético), e trabalha com gráficos próprios da técnica. Vai desde a causa física até desordens de antepassados."
    },
    {
      question: "O que é DNA energético e como ele difere do DNA genético?",
      answer: "DNA genético é a matéria física herdada. DNA energético é a energia que passa pelo seu DNA fazendo você 'carregar' padrões vibracionais dos antepassados - por exemplo: histórias que se repetem (bisavô faliu, avô faliu, pai faliu, você está falindo). A RadGen trata ambos: transforma a matéria (genético) e a frequência mental (energético)."
    },
    {
      question: "Preciso estar presente fisicamente ou pode ser à distância mesmo?",
      answer: "A Radiestesia Genética é realizada 100% à distância. Através de campos energéticos sutis, a conexão entre você e o terapeuta acontece independentemente da localização física. Similar ao WiFi, mas no campo sutil. A ciência quântica comprova que a informação transcende o espaço físico, permitindo que o tratamento seja tão efetivo quanto presencial."
    },
    {
      question: "Posso fazer Radiestesia Genética junto com tratamento médico?",
      answer: "Sim! Ela potencializa tratamentos convencionais, mas não substitui acompanhamento médico, psicológico ou psiquiátrico. Funciona como terapia complementar e integrativa que trata o campo energético."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se dentro de 7 dias após sua sessão você sentir que o serviço não atendeu suas expectativas, devolvemos 100% do seu investimento, sem perguntas ou burocracia. Nosso compromisso é com sua transformação genuína e resultados reais."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
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
              className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors duration-200"
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#582c81] flex-shrink-0 transition-transform duration-300 ${
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
