// Cores e estilos para cada tipo de serviço
export const SERVICE_COLORS = {
  'Desvendando a Raiz': {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800/50',
    hover: 'hover:bg-purple-200/80 dark:hover:bg-purple-900/50',
    gradient: 'from-purple-600 to-pink-600',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
  },
  'Radiestesia Genética': {
    bg: 'bg-yellow-100 dark:bg-amber-900/30',
    text: 'text-yellow-800 dark:text-yellow-300',
    border: 'border-yellow-200 dark:border-amber-800/50',
    hover: 'hover:bg-yellow-200/80 dark:hover:bg-amber-900/50',
    gradient: 'from-amber-600 to-yellow-600',
    badge: 'bg-yellow-100 text-yellow-800 dark:bg-amber-900/50 dark:text-yellow-200'
  },
  'Harmonia Geracional': {
    bg: 'bg-red-100 dark:bg-red-900/30',
    text: 'text-red-800 dark:text-red-300',
    border: 'border-red-200 dark:border-red-800/50',
    hover: 'hover:bg-red-200/80 dark:hover:bg-red-900/50',
    gradient: 'from-red-600 to-pink-600',
    badge: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200'
  },
  'Limpeza Energética': {
    bg: 'bg-green-100 dark:bg-emerald-900/30',
    text: 'text-green-800 dark:text-emerald-300',
    border: 'border-green-200 dark:border-emerald-800/50',
    hover: 'hover:bg-green-200/80 dark:hover:bg-emerald-900/50',
    gradient: 'from-emerald-600 to-teal-600',
    badge: 'bg-green-100 text-green-800 dark:bg-emerald-900/50 dark:text-emerald-200'
  },
  'Diagnóstico da Raiz': {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800/50',
    hover: 'hover:bg-purple-200/80 dark:hover:bg-purple-900/50',
    gradient: 'from-purple-600 to-pink-600',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
  },
  'default': {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-200 dark:border-purple-800/50',
    hover: 'hover:bg-purple-200/80 dark:hover:bg-purple-900/50',
    gradient: 'from-purple-600 to-pink-600',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200'
  }
};

// Dados de exemplo para os depoimentos
export const DEMO_TESTIMONIALS = [
  // Desvendando a Raiz
  {
    id: 1,
    service: 'Desvendando a Raiz',
    text: 'Achei que era só cansaço, mas quando vi o relatório entendi que era um padrão antigo da minha família. Foi como acender uma luz dentro de mim.',
    name: 'Fernanda R.',
    age: 35,
    location: 'São Paulo, SP',
    rating: 5,
    avatar: 'FR',
    date: '15/05/2024',
    highlight: 'Identificação de padrões familiares'
  },
  {
    id: 2,
    service: 'Desvendando a Raiz',
    text: 'O PDF que recebi parecia ter sido escrito por alguém que me conhece há anos. Direto, profundo e revelador. Já comecei o plano de ação.',
    name: 'Eduardo M.',
    age: 41,
    location: 'Belo Horizonte, MG',
    rating: 5,
    avatar: 'EM',
    date: '22/06/2024',
    highlight: 'Análise profunda e detalhada'
  },
  {
    id: 3,
    service: 'Desvendando a Raiz',
    text: 'Foi como olhar no espelho pela primeira vez. O Diagnóstico da Raiz me deu clareza sobre o que fazer — e principalmente, o que parar de carregar.',
    name: 'Tamires L.',
    age: 28,
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    avatar: 'TL',
    date: '10/07/2024',
    highlight: 'Clareza e autoconhecimento'
  },
  
  // Radiestesia Genética
  {
    id: 4,
    service: 'Radiestesia Genética',
    text: 'Eu tinha dores que médicos não explicavam. A Radiestesia mostrou que era algo herdado da minha avó. Depois da sessão, senti alívio real.',
    name: 'Simone G.',
    age: 47,
    location: 'Porto Alegre, RS',
    rating: 5,
    avatar: 'SG',
    date: '05/07/2024',
    highlight: 'Alívio de dores inexplicáveis'
  },
  {
    id: 5,
    service: 'Radiestesia Genética',
    text: 'A RadGen tocou num ponto que eu nem sabia que existia. Era um padrão emocional da minha mãe. Desde então, me sinto mais leve e presente.',
    name: 'Danilo C.',
    age: 33,
    location: 'Florianópolis, SC',
    rating: 5,
    avatar: 'DC',
    date: '28/06/2024',
    highlight: 'Libertação de padrões emocionais'
  },
  {
    id: 6,
    service: 'Radiestesia Genética',
    text: 'Nunca imaginei que algo da infância do meu pai influenciasse tanto minha vida. A Radiestesia me libertou disso. É forte.',
    name: 'Patrícia V.',
    age: 40,
    location: 'Salvador, BA',
    rating: 5,
    avatar: 'PV',
    date: '20/06/2024',
    highlight: 'Quebra de ciclos familiares'
  },
  
  // Harmonia Geracional
  {
    id: 7,
    service: 'Harmonia Geracional',
    text: 'Meu filho de 15 anos não me olhava nos olhos há semanas. Depois do tratamento, ele me chamou pra conversar. Eu chorei.',
    name: 'Elisângela M.',
    age: 42,
    location: 'Brasília, DF',
    rating: 5,
    avatar: 'EM',
    date: '15/07/2024',
    highlight: 'Reconexão familiar'
  },
  {
    id: 8,
    service: 'Harmonia Geracional',
    text: 'A gente brigava todo dia. Eu achava que era culpa dele, mas entendi que a cura começava por mim. Hoje somos parceiros.',
    name: 'Roberta A.',
    age: 38,
    location: 'Fortaleza, CE',
    rating: 5,
    avatar: 'RA',
    date: '08/07/2024',
    highlight: 'Harmonia familiar'
  },
  {
    id: 9,
    service: 'Harmonia Geracional',
    text: 'Achei que perderia meu filho pra essas amizades perigosas. A Harmonia Geracional mudou nosso vínculo sem que ele precisasse saber de nada.',
    name: 'Luciana S.',
    age: 45,
    location: 'Recife, PE',
    rating: 5,
    avatar: 'LS',
    date: '01/07/2024',
    highlight: 'Proteção dos filhos'
  },
  
  // Limpeza Energética
  {
    id: 10,
    service: 'Limpeza Energética',
    text: 'Eu estava com insônia há meses. Depois da limpeza, dormi como uma pedra. E no dia seguinte, senti meu corpo mais leve.',
    name: 'Juliano T.',
    age: 39,
    location: 'Belo Horizonte, MG',
    rating: 5,
    avatar: 'JT',
    date: '25/06/2024',
    highlight: 'Melhora na qualidade do sono'
  },
  {
    id: 11,
    service: 'Limpeza Energética',
    text: 'A sensação de peso sumiu. Meu quarto parecia mais claro, mais limpo. Foi como tomar banho por dentro.',
    name: 'Amanda K.',
    age: 30,
    location: 'São Paulo, SP',
    rating: 5,
    avatar: 'AK',
    date: '18/06/2024',
    highlight: 'Alívio de peso energético'
  },
  {
    id: 12,
    service: 'Limpeza Energética',
    text: 'Recebi o relatório com o que foi limpo e senti cada parte no meu corpo. Uma experiência silenciosa, mas muito profunda.',
    name: 'Paula M.',
    age: 44,
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    avatar: 'PM',
    date: '12/06/2024',
    highlight: 'Transformação energética'
  }
];

// Função para obter as classes de cor com base no serviço
export const getServiceColor = (serviceName) => {
  if (!serviceName) return SERVICE_COLORS['default'];
  
  // Tentar correspondência exata primeiro
  if (SERVICE_COLORS[serviceName]) {
    return { ...SERVICE_COLORS[serviceName] };
  }
  
  // Se não encontrar, tentar correspondência parcial
  const serviceKey = Object.keys(SERVICE_COLORS).find(key => 
    key !== 'default' && serviceName.toLowerCase().includes(key.toLowerCase())
  );
  
  return serviceKey ? { ...SERVICE_COLORS[serviceKey] } : { ...SERVICE_COLORS['default'] };
};

// Função para embaralhar array (Fisher-Yates)
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Estilos de paginação
export const paginationStyles = `
  .testimonial-pagination {
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    padding: 0.5rem 0;
  }
  
  .testimonial-bullet {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 4px;
    border-radius: 50%;
    background-color: #9ca3af;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .testimonial-bullet-active {
    background-color: #ec4899;
    opacity: 1;
    width: 30px;
    border-radius: 4px;
  }
  
  @media (min-width: 768px) {
    .testimonial-pagination {
      margin-top: 2rem;
    }
    
    .testimonial-bullet {
      width: 12px;
      height: 12px;
      margin: 0 6px;
    }
    
    .testimonial-bullet-active {
      width: 36px;
    }
  }
`;
