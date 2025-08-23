import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { FileSearch, Waves, HeartHandshake, Heart, CheckCircle, Mail, User, Leaf, BookOpen, ArrowRight, MessageSquare } from 'lucide-react';

const quizQuestions = [
  {
    question: "Como você costuma se sentir no final do dia?",
    options: [
      { text: "Mentalmente cansada, como se tivesse \"rodado em círculos\"", value: "A" },
      { text: "Fisicamente pesada, mesmo sem ter feito muito esforço", value: "B" },
      { text: "Emocionalmente carregada com coisas que nem são suas", value: "C" },
      { text: "Preocupada com alguém próximo, mesmo quando está tudo \"normal\"", value: "D" },
    ],
  },
  {
    question: "Qual situação mais acontece na sua vida?",
    options: [
      { text: "Tenho a sensação de que \"já vivi isso antes\" em várias situações", value: "A" },
      { text: "Sinto que algo me \"gruda\" em certos ambientes ou pessoas", value: "B" },
      { text: "Vejo os mesmos problemas se repetindo na minha família", value: "C" },
      { text: "Fico intuitivamente alerta sobre pessoas que amo, mesmo à distância", value: "D" },
    ],
  },
  {
    question: "O que mais desperta sua curiosidade?",
    options: [
      { text: "Documentários sobre mistérios sem solução ou casos não explicados", value: "A" },
      { text: "Como diferentes ambientes fazem você se sentir diferente", value: "B" },
      { text: "Histórias antigas da sua família que ninguém fala muito sobre", value: "C" },
      { text: "Observar como as pessoas se comportam quando acham que ninguém está vendo", value: "D" },
    ],
  },
  {
    question: "Em uma livraria, qual seção te atrai primeiro?",
    options: [
      { text: "Psicologia, investigação, biografias de pessoas que superaram desafios", value: "A" },
      { text: "Espiritualidade, autoajuda, práticas de bem-estar", value: "B" },
      { text: "História, genealogia, tradições familiares", value: "C" },
      { text: "Relacionamentos, educação, desenvolvimento pessoal", value: "D" },
    ],
  },
  {
    question: "Como você prefere passar um domingo livre?",
    options: [
      { text: "Organizando ideias, fazendo conexões, resolvendo quebra-cabeças mentais", value: "A" },
      { text: "Em contato com a natureza ou fazendo algo que te deixe em paz", value: "B" },
      { text: "Visitando família ou olhando fotos antigas, conversando sobre o passado", value: "C" },
      { text: "Cuidando de alguém ou fazendo algo especial para pessoas queridas", value: "D" },
    ],
  },
  {
    question: "Qual dessas situações mais acontece com você?",
    options: [
      { text: "As pessoas te procuram quando precisam de conselhos ou soluções", value: "A" },
      { text: "Você evita multidões ou lugares muito movimentados sem motivo específico", value: "B" },
      { text: "Você é a pessoa da família que lembra de datas e mantém tradições vivas", value: "C" },
      { text: "Você \"sabe\" quando algo está acontecendo com alguém próximo, mesmo à distância", value: "D" },
    ],
  },
];

const resultsData = {
  A: {
    profileType: "Investigadora Energética",
    title: "Você é uma Investigadora Energética Natural",
    profile: "Sua mente não descansa até encontrar respostas verdadeiras. Você sente que existe uma explicação mais profunda para os padrões da sua vida, e sua intuição está certa. Pessoas como você têm uma necessidade natural de ir à raiz das questões.",
    revelation: "Sua alma pede clareza e compreensão. Você não é das que aceita um \"é assim mesmo\" - precisa entender o \"porquê\" para se sentir em paz.",
    didYouKnow: "Existe uma técnica que mapeia exatamente as origens energéticas dos seus padrões de vida. É como ter um \"raio-x\" da sua historia energética.",
    nextSteps: [
      { text: "Ler: \"Como Descobrir a Origem dos Seus Bloqueios\"", type: "blog", link: "/blog", icon: BookOpen },
      { text: "Conhecer: Diagnóstico Raiz Energética", type: "page", link: "/diagnostico", icon: ArrowRight },
    ],
    community: {
      groupName: "Desvendando Padrões Energéticos",
      link: "https://chat.whatsapp.com/"
    },
    icon: FileSearch,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-500"
  },
  B: {
    profileType: "Sensitiva Energética",
    title: "Você é uma Sensitiva Energética Nata",
    profile: "Seu corpo é como uma antena que capta energias sutis do ambiente e das pessoas. Essa é uma habilidade rara e valiosa, mas que precisa ser bem canalizada para não te sobrecarregar.",
    revelation: "Você tem um dom natural de percepção energética. O que muitos chamam de \"sensibilidade excessiva\" é na verdade uma capacidade especial que precisa ser honrada e protegida.",
    didYouKnow: "Existem técnicas específicas para pessoas como você aprenderem a se proteger energeticamente e usar esse dom a seu favor, sem se sobrecarregar.",
    nextSteps: [
      { text: "Ler: \"O Dom da Sensibilidade Energética\"", type: "blog", link: "/blog", icon: BookOpen },
      { text: "Conhecer: Limpeza e Proteção Energética", type: "page", link: "/limpeza-energetica", icon: ArrowRight },
    ],
    community: {
        groupName: "Sensitivas em Equilíbrio",
        link: "https://chat.whatsapp.com/"
    },
    icon: Waves,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-500"
  },
  C: {
    profileType: "Curadora Ancestral",
    title: "Você é uma Curadora Ancestral da Sua Linhagem",
    profile: "Você veio com uma missão especial: ser a ponte de cura entre as gerações da sua família. Sua sensibilidade para padrões familiares não é coincidência - é um chamado.",
    revelation: "Sua alma escolheu quebrar ciclos e curar feridas ancestrais. Você é a pessoa da sua linhagem que tem a força e a consciência necessárias para essa transformação.",
    didYouKnow: "Existe uma técnica milenar que trabalha especificamente com as energias da linhagem familiar, curando não só você, mas as gerações passadas e futuras.",
    nextSteps: [
      { text: "Ler: \"Sua Missão como Curadora Familiar\"", type: "blog", link: "/blog", icon: BookOpen },
      { text: "Conhecer: Radiestesia Genética", type: "page", link: "/radiestesia-genetica", icon: ArrowRight },
    ],
    community: {
        groupName: "Curadoras Ancestrais",
        link: "https://chat.whatsapp.com/"
    },
    icon: HeartHandshake,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-500"
  },
  D: {
    profileType: "Guardiã Maternal",
    title: "Você é uma Guardiã Maternal Intuitiva",
    profile: "Seu coração tem uma conexão especial com as pessoas que você ama. Essa intuição maternal (que pode existir mesmo sem filhos biológicos) é um dos vínculos energéticos mais poderosos que existem.",
    revelation: "Você tem o dom da proteção energética através do amor. Sua capacidade de \"sentir\" o que acontece com quem você ama é um talento raro e sagrado.",
    didYouKnow: "Essa conexão intuitiva pode ser canalizada como uma força de cura muito poderosa. Existe uma abordagem que trabalha especificamente com essa energia maternal para harmonizar relacionamentos.",
    nextSteps: [
      { text: "Ler: \"O Poder da Intuição Maternal\"", type: "blog", link: "/blog", icon: BookOpen },
      { text: "Conhecer: Harmonia Geracional", type: "page", link: "/harmonia-geracional", icon: ArrowRight },
    ],
    community: {
        groupName: "Guardiãs do Coração",
        link: "https://chat.whatsapp.com/"
    },
    icon: Heart,
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-500"
  },
};

const QuizHeader = () => (
  <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-40 border-b">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-xl text-gray-700">Raiz Energética</span>
      </Link>
      <Button asChild variant="ghost">
        <Link to="/servicos">Ver todos os serviços</Link>
      </Button>
    </div>
  </header>
);

const QuizFooter = () => (
  <footer className="bg-gray-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-600">
      <p className="text-sm">&copy; {new Date().getFullYear()} Raiz Energética. Todos os direitos reservados.</p>
      <p className="text-xs mt-2">Os serviços oferecidos não substituem tratamentos médicos ou psicológicos. Consulte sempre um profissional de saúde.</p>
    </div>
  </footer>
);

const Quiz = () => {
  const { toast } = useToast();
  const [quizState, setQuizState] = useState('not-started');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [resultKey, setResultKey] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = useMemo(() => {
    if (quizState !== 'in-progress') return 0;
    return ((currentQuestionIndex) / quizQuestions.length) * 100;
  }, [currentQuestionIndex, quizState]);

  const handleStartQuiz = () => setQuizState('in-progress');

  const handleSelectOption = (value) => setSelectedOption(value);

  const handleNextQuestion = () => {
    if (selectedOption === null) {
      toast({ title: "Por favor, selecione uma opção.", variant: "destructive" });
      return;
    }
    const newAnswers = { ...answers, [currentQuestionIndex]: selectedOption };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      calculateResult(newAnswers);
      setQuizState('finished');
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = Object.values(finalAnswers).reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const sortedResults = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    setResultKey(sortedResults[0] || 'A');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!userData.name || !userData.email) {
      toast({ title: "Por favor, preencha todos os campos.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    
    const { error } = await supabase
      .from('quiz_leads')
      .insert([{ 
        name: userData.name, 
        email: userData.email, 
        result_key: resultKey,
        answers: answers 
      }]);

    setIsSubmitting(false);

    if (error) {
      console.error("Error saving lead:", error);
      toast({ title: "Erro ao salvar.", description: "Ocorreu um erro ao salvar seu resultado. Tente novamente.", variant: "destructive" });
      return;
    }
    
    toast({ title: "Sucesso!", description: "Seu resultado está pronto." });
    setQuizState('result-shown');
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const result = resultKey ? resultsData[resultKey] : null;

  return (
    <>
      <Helmet>
        <title>Quiz de Autoconhecimento Energético | Raiz Energética</title>
        <meta name="description" content="Responda a este quiz rápido para descobrir seu perfil energético e receba uma recomendação personalizada." />
      </Helmet>
      <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <QuizHeader />
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <AnimatePresence mode="wait">
            {quizState === 'not-started' && (
              <motion.div key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Quiz de Autoconhecimento Energético</h1>
                <p className="text-lg text-gray-600 mb-6">Descubra seu perfil energético e receba um direcionamento claro em apenas 2 minutos.</p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-700 mb-8">
                  <span className="flex items-center"><CheckCircle className="w-5 h-5 text-amber-500 mr-2" />Gratuito e Rápido</span>
                  <span className="flex items-center"><CheckCircle className="w-5 h-5 text-amber-500 mr-2" />Resultado Imediato</span>
                  <span className="flex items-center"><CheckCircle className="w-5 h-5 text-amber-500 mr-2" />100% Online</span>
                </div>
                <Button size="lg" onClick={handleStartQuiz} className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition-shadow">Começar o Quiz</Button>
              </motion.div>
            )}

            {quizState === 'in-progress' && (
              <motion.div key="quiz" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} className="w-full max-w-2xl">
                <Card className="shadow-2xl">
                  <CardHeader>
                    <CardTitle>Pergunta {currentQuestionIndex + 1}/{quizQuestions.length}</CardTitle>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <motion.div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full" style={{ width: `${progress}%` }} />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <motion.p 
                      key={currentQuestionIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl text-gray-800 font-semibold mb-6 text-center"
                    >
                      {currentQuestion.question}
                    </motion.p>
                    <div className="space-y-4">
                      {currentQuestion.options.map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * (index + 1) }}
                        >
                          <Button
                            variant={selectedOption === option.value ? 'default' : 'outline'}
                            onClick={() => handleSelectOption(option.value)}
                            className={`w-full justify-start text-left h-auto py-3 px-4 transition-all duration-200 ${selectedOption === option.value ? 'bg-amber-500 text-white' : 'bg-white hover:bg-amber-50'}`}
                          >
                            <span className={`mr-4 font-bold ${selectedOption === option.value ? 'text-white' : 'text-amber-600'}`}>
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span>{option.text}</span>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" onClick={handleNextQuestion} disabled={selectedOption === null} className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition-shadow disabled:bg-gray-400">
                      Próxima
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {quizState === 'finished' && (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full max-w-lg">
                <Card className="shadow-2xl text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold mt-2">Seu resultado está pronto!</CardTitle>
                    <CardDescription>Para onde devemos enviar seu perfil energético detalhado?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="space-y-2 text-left">
                        <Label htmlFor="name" className="flex items-center"><User className="w-4 h-4 mr-2" /> Nome</Label>
                        <Input id="name" type="text" placeholder="Seu nome completo" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="email" className="flex items-center"><Mail className="w-4 h-4 mr-2" /> E-mail</Label>
                        <Input id="email" type="email" placeholder="seu-melhor@email.com" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                      </div>
                      <p className="text-xs text-gray-500 pt-2">Você receberá seu resultado instantaneamente.</p>
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition-shadow disabled:bg-gray-400">
                        {isSubmitting ? 'Enviando...' : 'Ver Meu Resultado'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {quizState === 'result-shown' && result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-2xl">
                <Card className={`shadow-2xl border-2 ${result.borderColor} overflow-hidden`}>
                  <CardHeader className={`${result.bgColor} text-center p-6`}>
                    <result.icon className={`w-12 h-12 ${result.color} mx-auto mb-3`} />
                    <p className={`font-semibold ${result.color} uppercase tracking-wider text-sm`}>{result.profileType}</p>
                    <CardTitle className="text-2xl font-bold text-gray-800">{result.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4 text-gray-700 text-left">
                    <div>
                      <p>{result.profile}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-1">O que isso revela:</h3>
                      <p>{result.revelation}</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="font-bold text-gray-800 mb-1">Você sabia?</h3>
                      <p>{result.didYouKnow}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 p-6 flex-col">
                    <div className="w-full">
                      <h3 className="font-bold text-lg text-center mb-4 text-gray-800">Seus Próximos Passos Recomendados:</h3>
                      <div className="space-y-4">
                        {result.nextSteps.map((step, index) => {
                          const StepButton = (
                            <Button key={index} asChild size="lg" variant="outline" className="w-full justify-start items-center border-gray-300 hover:bg-gray-100 hover:border-gray-400">
                              <div className="flex items-center">
                                <step.icon className="w-5 h-5 mr-3 text-gray-600" />
                                <span className="text-gray-700 font-semibold">{step.text}</span>
                                <ArrowRight className="w-5 h-5 ml-auto text-gray-500" />
                              </div>
                            </Button>
                          );
                          if (step.type === 'page' || step.type === 'blog') {
                            return <Link to={step.link} key={index}>{StepButton}</Link>;
                          }
                          return <a href={step.link} target="_blank" rel="noopener noreferrer" key={index}>{StepButton}</a>;
                        })}
                      </div>

                      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <MessageSquare className="mx-auto h-8 w-8 text-green-600 mb-3" />
                        <h4 className="font-bold text-lg text-gray-800">Junte-se à Nossa Comunidade</h4>
                        <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
                            Inscreva-se em nosso grupo do Whatsapp <strong>"{result.community.groupName}"</strong> e receba semanalmente conteúdos exclusivos sobre terapias integrativas e bem-estar holístico.
                        </p>
                        <Button asChild size="lg" className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold shadow-md hover:shadow-lg transition-shadow">
                            <a href={result.community.link} target="_blank" rel="noopener noreferrer">
                                Entrar no Grupo do WhatsApp
                            </a>
                        </Button>
                        <p className="mt-2 text-xs text-gray-500">
                            Não gostou dos conteúdos, sem problemas. Saia do grupo quando quiser.
                        </p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <QuizFooter />
      </div>
    </>
  );
};

export default Quiz;