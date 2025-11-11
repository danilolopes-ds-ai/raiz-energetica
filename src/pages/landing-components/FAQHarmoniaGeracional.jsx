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
      question: "Meu/minha filho(a) precisa participar da sessão?",
      answer: "Não precisa contar. O tratamento é realizado através do seu campo energético materno, que está intrinsecamente conectado ao do seu/sua filho(a). Muitas mães preferem assim: deixa a energia trabalhar primeiro. Se ele(a) perguntar 'mãe, você tá diferente?', aí você conta. Mas se quiser contar, use linguagem simples: 'Comecei uma terapia energética pra gente melhorar aqui em casa.' A maioria dos adolescentes não liga - desde que não seja 'mais uma cobrança'."
    },
    {
      question: "Quanto tempo leva para ver alguma mudança?",
      answer: "VOCÊ percebe primeiro (3-7 dias): Sente-se mais leve, menos angustiada. ELE percebe depois (2-3 semanas): Primeiras mudanças sutis no olhar, tom de voz. OUTROS percebem (1-2 meses): Família comenta que ele está diferente. Cada família é única - ambientes muito carregados podem levar até 60 dias. Por isso o plano RAIZ (2 sessões/mês) tem melhor resultado: ajustamos conforme a energia muda."
    },
    {
      question: "A terapia é feita à distância ou preciso ir em algum lugar?",
      answer: "100% à distância. Você não sai de casa. Funciona assim: 1) Sessão inicial por videochamada (1 hora) - você conta a história, eu avalio o campo energético. 2) Trabalho energético à distância (Radiestesia Genética quântica) - você não precisa fazer nada durante. 3) Acompanhamento via WhatsApp direto comigo - respondo em até 24h, ajustes quando necessário. Já atendi mães do Brasil todo + 3 fora do país (Portugal, EUA, Canadá). Resultado é o mesmo."
    },
    {
      question: "Como funciona o acompanhamento?",
      answer: "Você não vai passar por isso sozinha. SUPORTE DIRETO: WhatsApp exclusivo comigo, respondo em até 24h (dias úteis), não é bot nem assistente. AJUSTES CONTÍNUOS: Conforme a energia da família muda, ajustamos o trabalho - não é 'protocolo pronto', cada mãe é única. ACOLHIMENTO REAL: Espaço seguro para desabafar, estratégias práticas para o dia a dia, validação emocional (você NÃO é má mãe). É como ter uma terapeuta familiar + energética disponível para você."
    },
    {
      question: "Que tipo de problemas essa terapia pode resolver?",
      answer: "Agressividade, distanciamento emocional, más influências, vícios comportamentais, rebeldia extrema, comportamentos de risco, desrespeito, isolamento, mudanças repentinas de comportamento, envolvimento com amizades prejudiciais, perda de valores familiares, entre outros padrões que estão afetando a relação mãe-filho(a) e a harmonia do lar."
    },
    {
      question: "Meu/minha filho(a) tem 12/14/17 anos. Funciona em qualquer idade?",
      answer: "Sim, mas a abordagem muda: 12-14 ANOS - Fase de transição, resultado mais rápido (vínculo ainda forte), foco em proteger de influências externas. 15-17 ANOS - Fase de afirmação, pode levar mais tempo, foco em reconstruir confiança perdida. 18+ ANOS - Funciona, mas exige mais paciência, ideal sessões com ele(a) presente (plano Legado). Na sessão inicial, avalio o caso específico e ajusto a abordagem."
    },
    {
      question: "Posso fazer junto com acompanhamento psicológico do meu filho?",
      answer: "Sim! A Harmonia Geracional potencializa tratamentos convencionais. Ela funciona como terapia complementar e integrativa que trata o campo energético, enquanto terapias tradicionais trabalham outros aspectos. Muitas mães relatam que a terapia psicológica do filho começou a 'funcionar melhor' após a limpeza energética."
    },
    {
      question: "Meu marido não acredita nessas coisas. E agora?",
      answer: "Você NÃO precisa da aprovação dele para começar. A conexão maternal é sua. O que mães fazem: OPÇÃO 1 (mais comum) - Não falo nada. Deixo ele perceber as mudanças sozinho. Depois de 1 mês, ele mesmo comentou que o clima em casa melhorou. OPÇÃO 2 - Falo que é uma 'terapia para mães'. Tecnicamente não é mentira e evita debate. OPÇÃO 3 - Mostro os depoimentos e digo: 'Não custa tentar. Tem garantia de 30 dias.' RESULTADO: 70% dos maridos que eram céticos viraram apoiadores depois que viram a mudança. Resultado fala mais alto que explicação."
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer: "Se após 30 dias você não sentir NENHUMA diferença - nem em você (mais leve) nem nele(a) (qualquer sinal) - devolvemos 100% do valor. Sem perguntas. Sem burocracia. Por quê? Porque em 10 anos, menos de 5% pediram reembolso. Não porque é perfeito, mas porque quando você SE COMPROMETE com o processo, a energia familiar responde. O risco é todo meu. A transformação é toda sua."
    },
    {
      question: "Eu sou uma má mãe por precisar disso?",
      answer: "NÃO. E eu vou te dizer uma coisa: má mãe não busca solução. Má mãe desiste. Má mãe culpa o filho. Você está AQUI, lendo isso, procurando ajuda. Isso já te faz uma BOA mãe. Toda mãe que atendo me diz a mesma coisa na primeira sessão: 'Onde eu errei?' E eu respondo: 'Você não errou. A vida dele(a) cruzou com energias que você não consegue controlar sozinha. Por isso estou aqui. Para ajudar você a proteger ele(a).' Pedir ajuda é sinal de FORÇA, não fraqueza. Você não precisa fazer isso sozinha."
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
            Perguntas que Toda Mãe Faz
          </h2>
          <p className="mt-4 text-xl text-rose-700 max-w-2xl mx-auto">
            (e que você também deve estar pensando)
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
