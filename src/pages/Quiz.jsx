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
import { 
  Crown, Sword, Shield, TreePine, Bird, Flower2, Sparkles, Heart, 
  Share2, Download, CheckCircle, Mail, User, Leaf, BookOpen, 
  ArrowRight, MessageSquare, Copy, Facebook, Instagram, Feather, Hammer
} from 'lucide-react';

// Perguntas sutis que direcionam para os arquétipos
const quizQuestions = [
  {
    question: "Quando você sente que algo não está certo na sua vida, qual é sua primeira reação?",
    options: [
      { text: "Preciso entender a origem real desse problema", value: "DIAGNOSTICO" },
      { text: "Sinto que algo pesado está me sobrecarregando", value: "LIMPEZA" },
      { text: "Percebo padrões que se repetem na minha família", value: "RADIESTESIA" },
      { text: "Vejo que afeta minhas relações mais importantes", value: "HARMONIA" },
    ],
  },
  {
    question: "Em qual situação você se reconhece mais?",
    options: [
      { text: "Sempre fui de questionar o que ninguém questiona", value: "DIAGNOSTICO" },
      { text: "Absorvo facilmente as energias dos ambientes e pessoas", value: "LIMPEZA" },
      { text: "Vejo histórias se repetindo entre pais, filhos e netos", value: "RADIESTESIA" },
      { text: "Quando alguém que amo sofre, eu sofro junto", value: "HARMONIA" },
    ],
  },
  {
    question: "O que mais te incomoda atualmente?",
    options: [
      { text: "Não conseguir encontrar respostas claras para meus problemas", value: "DIAGNOSTICO" },
      { text: "Me sentir constantemente cansada sem motivo aparente", value: "LIMPEZA" },
      { text: "Ver os mesmos problemas passando de geração em geração", value: "RADIESTESIA" },
      { text: "Relacionamentos importantes que não fluem como deveriam", value: "HARMONIA" },
    ],
  },
  {
    question: "Qual dessas frases mais fala com você?",
    options: [
      { text: "\"Deve existir uma razão mais profunda para isso\"", value: "DIAGNOSTICO" },
      { text: "\"Preciso de um reset, uma limpeza geral na minha energia\"", value: "LIMPEZA" },
      { text: "\"Alguém da família precisa quebrar esse ciclo\"", value: "RADIESTESIA" },
      { text: "\"Quero que as pessoas que amo estejam bem e em paz\"", value: "HARMONIA" },
    ],
  },
  {
    question: "Se você pudesse resolver UMA coisa na sua vida, seria:",
    options: [
      { text: "Descobrir por que certas situações sempre me acontecem", value: "DIAGNOSTICO" },
      { text: "Me livrar dessa sensação de peso e cansaço constante", value: "LIMPEZA" },
      { text: "Impedir que problemas familiares se perpetuem", value: "RADIESTESIA" },
      { text: "Restaurar a harmonia nos meus relacionamentos mais importantes", value: "HARMONIA" },
    ],
  },
];

// Arquétipos Femininos e Masculinos
const archetypes = {
  DIAGNOSTICO: {
    feminine: {
      name: "ATENA",
      title: "A Sábia Ancestral",
      icon: Bird,
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-500",
      description: "Você possui a sabedoria de Atena, a deusa que vê através das ilusões. Sua mente inquieta busca a verdade por trás dos véus, e você não se contenta com respostas superficiais.",
      power: "Sua capacidade de investigação profunda e conexão com sabedorias ancestrais faz de você uma visionária natural. Você enxerga padrões que outros não conseguem ver.",
      calling: "O universo te chama para desvendar os mistérios da sua própria existência. Há segredos energéticos esperando para serem revelados.",
      product: "diagnostico",
      productName: "Desvendando a Raiz",
      cta: "Descobrir Minha Verdade Ancestral"
    },
    masculine: {
      name: "HERMES",
      title: "O Guerreiro da Verdade",
      icon: Sword,
      color: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-500",
      description: "Você carrega a determinação de Hermes, o mensageiro dos deuses. Sua missão é descobrir verdades ocultas e trazer clareza onde há confusão.",
      power: "Sua força está na busca incansável pela verdade. Você não aceita respostas vazias e tem a coragem de questionar o que todos aceitam.",
      calling: "O universo te convoca para uma jornada de descoberta. Há mistérios energéticos que apenas sua determinação pode desvendar.",
      product: "diagnostico",
      productName: "Desvendando a Raiz",
      cta: "Iniciar Minha Busca pela Verdade"
    }
  },
  LIMPEZA: {
    feminine: {
      name: "PERSÉFONE",
      title: "A Renovadora",
      icon: Flower2,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-500",
      description: "Você ressoa com Perséfone, a rainha dos ciclos de morte e renascimento. Sua alma sabe quando é hora de soltar o velho e abraçar o novo.",
      power: "Você tem o dom raro de se renovar completamente. Como a natureza, você sabe que às vezes é preciso morrer simbolicamente para renascer mais forte.",
      calling: "Sua energia está pedindo uma transformação profunda. É hora de liberar pesos antigos e permitir que sua essência brilhe novamente.",
      product: "limpeza-energetica",
      productName: "Limpeza Energética",
      cta: "Iniciar Minha Renovação"
    },
    masculine: {
      name: "PHOENIX",
      title: "O Protetor Energético",
      icon: Shield,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-500",
      description: "Você carrega a força da Fênix, o protetor que renasce das cinzas. Sua missão é se proteger e proteger quem ama das energias densas.",
      power: "Sua capacidade de transformação é sua maior força. Você sabe que pode emergir renovado de qualquer situação, mais forte e puro.",
      calling: "É hora de ativar sua proteção energética natural. Liberte-se de influências negativas e reclaim seu poder pessoal.",
      product: "limpeza-energetica",
      productName: "Limpeza Energética",
      cta: "Ativar Minha Proteção"
    }
  },
  RADIESTESIA: {
    feminine: {
      name: "BRIGID",
      title: "A Libertadora de Linhagens",
      icon: Sparkles,
      color: "from-amber-600 to-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500",
      description: "Você tem a força de Brigid, a deusa celta da transformação. Você veio para quebrar correntes ancestrais e liberar sua família de padrões limitantes.",
      power: "Sua missão transcende sua própria vida. Você é a escolhida da sua linhagem para quebrar ciclos e abrir novos caminhos para as próximas gerações.",
      calling: "As gerações passadas e futuras dependem da sua coragem. É hora de ativar seu poder ancestral e reescrever a história da sua família.",
      product: "radiestesia-genetica",
      productName: "Radiestesia Genética",
      cta: "Quebrar os Ciclos Ancestrais"
    },
    masculine: {
      name: "THOR",
      title: "O Curador Ancestral",
      icon: TreePine,
      color: "from-amber-600 to-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-500",
      description: "Você possui a força de Thor, o protetor das tradições familiares. Sua missão é curar feridas ancestrais e restaurar a força da sua linhagem.",
      power: "Você é o guerreiro escolhido para enfrentar fantasmas do passado. Sua coragem pode quebrar maldições geracionais e libertar sua família.",
      calling: "Suas raízes ancestrais clamam por cura. É hora de empunhar seu martelo místico e forjar um novo destino para sua linhagem.",
      product: "radiestesia-genetica",
      productName: "Radiestesia Genética",
      cta: "Forjar Meu Legado Familiar"
    }
  },
  HARMONIA: {
    feminine: {
      name: "IEMANJÁ",
      title: "A Cuidadora dos Filhos",
      icon: Crown,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-500",
      description: "Você carrega a sabedoria maternal de Iemanjá. Sua missão é nutrir e guiar sua família para a harmonia, dissolvendo conflitos e criando pontes.",
      power: "Você possui o dom natural de harmonizar relações familiares. Sua energia amorosa é capaz de curar feridas antigas e reunir corações distantes.",
      calling: "Sua família precisa da sua sabedoria maternal. É hora de usar seus dons para restabelecer a paz e o amor entre os seus.",
      product: "harmonia-geracional",
      productName: "Harmonia Geracional",
      cta: "Harmonizar Minha Família"
    },
    masculine: {
      name: "SALOMÃO",
      title: "O Patriarca Sábio",
      icon: Heart,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-500",
      description: "Você possui a sabedoria de Salomão, o rei que governava com justiça e amor. Sua força está em criar união e prosperidade familiar.",
      power: "Você é o pilar que sustenta a harmonia familiar. Sua sabedoria e liderança amorosa podem transformar qualquer conflito em conexão.",
      calling: "Sua família precisa da sua liderança sábia. É hora de usar seu poder natural para restaurar a paz e criar um legado de amor.",
      product: "harmonia-geracional",
      productName: "Harmonia Geracional",
      cta: "Liderar Minha Família"
    }
  }
};

const QuizHeader = () => (
  <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-40 border-b border-slate-200">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="flex items-center space-x-3">
        <img 
          src="/images/services/logo-raizenergetica.webp" 
          alt="Raiz Energética" 
          className="h-10 w-auto"
        />
        <span className="font-bold text-xl text-slate-800">Quiz Arquétipo Energético</span>
      </Link>
      <Button asChild variant="ghost" className="text-slate-600 hover:text-emerald-600">
        <Link to="/servicos">Ver Tratamentos</Link>
      </Button>
    </div>
  </header>
);

const Quiz = () => {
  const { toast } = useToast();
  // Import tracking
  const { tracking } = require('@/lib/tracking');
  const [quizState, setQuizState] = useState('not-started');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [userData, setUserData] = useState({ name: '', email: '', gender: '' });
  const [resultKey, setResultKey] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = useMemo(() => {
    if (quizState !== 'in-progress') return 0;
    return ((currentQuestionIndex) / quizQuestions.length) * 100;
  }, [currentQuestionIndex, quizState]);

  const handleStartQuiz = () => setQuizState('gender-selection');
  // Dispara evento de início do quiz
  const handleStartQuiz = () => {
    tracking.quizStart({ page: window.location.pathname });
    setQuizState('gender-selection');
  };

  const handleGenderSelect = (gender) => {
    setUserData({ ...userData, gender });
    tracking.quizStep('gender-selection', gender);
    setQuizState('in-progress');
  };

  const handleSelectOption = (value) => setSelectedOption(value);
  // Dispara evento ao selecionar opção
  const handleSelectOption = (value) => {
    setSelectedOption(value);
    tracking.quizStep(currentQuestionIndex, value);
  };

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
      // Dispara evento de conclusão do quiz
      tracking.quizComplete(resultKey, userData.email);
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = Object.values(finalAnswers).reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const sortedResults = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    setResultKey(sortedResults[0] || 'DIAGNOSTICO');
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
        gender: userData.gender,
        result_key: resultKey,
        answers: answers 
      }]);

    setIsSubmitting(false);

    if (error) {
      console.error("Error saving lead:", error);
      toast({ title: "Erro ao salvar.", description: "Ocorreu um erro. Tente novamente.", variant: "destructive" });
      return;
    }
    
    toast({ title: "Sucesso!", description: "Seu arquétipo está pronto!" });
    setQuizState('result-shown');
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const result = resultKey && userData.gender ? archetypes[resultKey][userData.gender] : null;

  const shareText = result ? `Descobri meu arquétipo energético: ${result.name} - ${result.title}! ✨ Faça o seu teste: ${window.location.origin}/quiz` : '';

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(shareText);
    
    switch(platform) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(shareText);
        toast({ title: "Copiado!", description: "Texto copiado para área de transferência" });
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Descubra Seu Arquétipo Energético | Quiz Raiz Energética</title>
        <meta name="description" content="Descubra se você é Atena, Cleópatra, Thor ou Salomão! Quiz gratuito que revela seu arquétipo energético e o caminho para sua transformação." />
      </Helmet>
      <div className="bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 min-h-screen flex flex-col">
        <QuizHeader />
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          <AnimatePresence mode="wait">
            {quizState === 'not-started' && (
              <motion.div key="hero" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="text-center max-w-4xl">
                <div className="mb-8">
                  <div className="flex justify-center mb-8">
                    <img 
                      src="/images/services/logo-raizenergetica.webp" 
                      alt="Raiz Energética" 
                      className="h-24 w-auto filter drop-shadow-lg"
                    />
                  </div>
                  <div className="flex justify-center space-x-4 mb-6">
                    <Crown className="w-10 h-10 text-emerald-600" />
                    <Sword className="w-10 h-10 text-slate-600" />
                    <Flower2 className="w-10 h-10 text-amber-600" />
                    <TreePine className="w-10 h-10 text-emerald-700" />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                    Descubra Seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">Arquétipo Energético</span>
                  </h1>
                  <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                    Você é <strong className="text-emerald-700">Atena</strong>, <strong className="text-amber-700">Cleópatra</strong>, <strong className="text-slate-700">Thor</strong> ou <strong className="text-emerald-800">Salomão</strong>?<br/>
                    Descubra qual poder ancestral vive em você e qual caminho te levará à sua transformação.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Bird className="w-8 h-8 text-emerald-700" />
                    </div>
                    <p className="font-semibold text-emerald-700">Atena</p>
                    <p className="text-sm text-slate-600">A Sábia</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Crown className="w-8 h-8 text-amber-700" />
                    </div>
                    <p className="font-semibold text-amber-700">Cleópatra</p>
                    <p className="text-sm text-slate-600">A Imperatriz</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <TreePine className="w-8 h-8 text-slate-700" />
                    </div>
                    <p className="font-semibold text-slate-700">Thor</p>
                    <p className="text-sm text-slate-600">O Curador</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-emerald-700" />
                    </div>
                    <p className="font-semibold text-emerald-700">Salomão</p>
                    <p className="text-sm text-slate-600">O Sábio</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-700 mb-8">
                  <span className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />2 minutos</span>
                  <span className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />Resultado único</span>
                  <span className="flex items-center"><CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />Compartilhável</span>
                </div>
                
                <Button size="lg" onClick={handleStartQuiz} className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  ✨ Descobrir Meu Arquétipo
                </Button>
                
                <p className="text-sm text-slate-500 mt-6 max-w-2xl mx-auto">
                  Baseado em anos de experiência em terapias energéticas e mais de 500 pessoas atendidas
                </p>
              </motion.div>
            )}

            {quizState === 'gender-selection' && (
              <motion.div key="gender" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full max-w-2xl">
                <Card className="shadow-xl border border-slate-200">
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-3xl font-semibold text-slate-800">Escolha sua Jornada</CardTitle>
                    <CardDescription className="text-lg pt-2 text-slate-600">Com qual energia você mais se conecta hoje?</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-6 p-6">
                    <div 
                        onClick={() => handleGenderSelect('feminine')}
                        className="p-6 border-2 border-emerald-200 rounded-xl text-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 transition-all transform hover:scale-105 space-y-2"
                    >
                        <Feather className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Jornada da Intuição</h3>
                        <p className="text-gray-600 text-base">Sabedoria, mistério e cura interior.</p>
                    </div>
                    <div 
                        onClick={() => handleGenderSelect('masculine')}
                        className="p-6 border-2 border-indigo-200 rounded-xl text-center cursor-pointer hover:bg-indigo-50 hover:border-indigo-400 transition-all transform hover:scale-105 space-y-2"
                    >
                        <Hammer className="w-12 h-12 mx-auto mb-4 text-indigo-600" />
                        <h3 className="text-2xl font-bold text-gray-800">Jornada da Ação</h3>
                        <p className="text-gray-600 text-base">Força, propósito e proteção.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {quizState === 'in-progress' && (
              <motion.div key="quiz" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} className="w-full max-w-3xl">
                <Card className="shadow-xl border border-slate-200">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-slate-800">Pergunta {currentQuestionIndex + 1}/{quizQuestions.length}</CardTitle>
                      <span className="text-sm text-slate-500">{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 mt-2">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-600 to-emerald-700 h-3 rounded-full" 
                        style={{ width: `${progress}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <motion.p 
                      key={currentQuestionIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-2xl text-slate-800 font-medium mb-8 text-center leading-relaxed"
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
                            className={`w-full justify-start text-left h-auto py-4 px-6 transition-all duration-300 text-base ${
                              selectedOption === option.value 
                                ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg border-emerald-600' 
                                : 'bg-white hover:bg-emerald-50 border-slate-200 hover:border-emerald-300 text-slate-700'
                            }`}
                          >
                            <span className={`mr-4 font-semibold text-lg ${
                              selectedOption === option.value ? 'text-white' : 'text-emerald-700'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </span>
                            <span className="leading-relaxed">{option.text}</span>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      size="lg" 
                      onClick={handleNextQuestion} 
                      disabled={selectedOption === null} 
                      className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-lg py-3 shadow-lg hover:shadow-xl transition-all disabled:bg-slate-400"
                    >
                      {currentQuestionIndex === quizQuestions.length - 1 ? 'Ver Meu Arquétipo' : 'Próxima Pergunta'}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {quizState === 'finished' && (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="w-full max-w-lg">
                <Card className="shadow-xl border border-slate-200 text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-semibold text-slate-800 mb-2">Seu Arquétipo Está Pronto!</CardTitle>
                    <CardDescription className="text-lg text-slate-600">Para onde devemos enviar seu resultado completo e personalizado?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="space-y-2 text-left">
                        <Label htmlFor="name" className="flex items-center text-base font-medium">
                          <User className="w-4 h-4 mr-2" /> Seu nome
                        </Label>
                        <Input 
                          id="name" 
                          type="text" 
                          placeholder="Como posso te chamar?" 
                          value={userData.name} 
                          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                          className="h-12 text-base" 
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <Label htmlFor="email" className="flex items-center text-base font-medium">
                          <Mail className="w-4 h-4 mr-2" /> Seu melhor e-mail
                        </Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="seu-melhor@email.com" 
                          value={userData.email} 
                          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                          className="h-12 text-base" 
                        />
                      </div>
                      <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-lg">
                        📧 Você receberá seu arquétipo completo instantaneamente + conteúdos exclusivos
                      </p>
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting} 
                        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold text-lg py-4 shadow-lg hover:shadow-xl transition-all disabled:bg-slate-400"
                      >
                        {isSubmitting ? 'Revelando seu arquétipo...' : '✨ Revelar Meu Arquétipo'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {quizState === 'result-shown' && result && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl">
                <Card className={`shadow-2xl border-4 ${result.borderColor} overflow-hidden`}>
                  <CardHeader className={`${result.bgColor} text-center p-8`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      className="mb-6"
                    >
                      <div className={`w-24 h-24 bg-gradient-to-r ${result.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                        <result.icon className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>
                    <p className={`font-bold text-lg mb-2 bg-gradient-to-r ${result.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                      Seu Arquétipo Energético
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
                      {result.name}
                    </h1>
                    <p className="text-2xl text-gray-700 font-semibold">{result.title}</p>
                    
                    {/* Botões de Compartilhamento */}
                    <div className="flex justify-center space-x-4 mt-6">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('whatsapp')}
                        className="bg-emerald-50 border-emerald-200 hover:bg-emerald-100"
                      >
                        <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                        WhatsApp
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('facebook')}
                        className="bg-slate-50 border-slate-200 hover:bg-slate-100"
                      >
                        <Share2 className="w-4 h-4 mr-2 text-slate-600" />
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare('copy')}
                        className="bg-amber-50 border-amber-200 hover:bg-amber-100"
                      >
                        <Copy className="w-4 h-4 mr-2 text-amber-600" />
                        Copiar
                      </Button>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8 space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2 text-purple-600" />
                            Quem Você É
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-lg">{result.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                            <Crown className="w-5 h-5 mr-2 text-amber-600" />
                            Seu Poder
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-lg">{result.power}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                          <Heart className="w-5 h-5 mr-2 text-rose-600" />
                          Seu Chamado
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-6">{result.calling}</p>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                          <h4 className="text-lg font-bold text-purple-800 mb-3">🔮 Seu Caminho Recomendado:</h4>
                          <p className="text-purple-700 font-semibold text-lg mb-4">{result.productName}</p>
                          <Button asChild size="lg" className={`w-full bg-gradient-to-r ${result.color} text-white font-bold shadow-lg hover:shadow-xl transition-all`}>
                            <Link to={`/${result.product}`}>
                              {result.cta}
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
};

export default Quiz;
