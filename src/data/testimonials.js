// Depoimentos reais organizados por serviço
export const testimonials = [
  // Limpeza Energética
  {
    id: 1,
    service: 'Limpeza Energética',
    name: 'Juliana M.',
    role: 'Terapeuta Holística',
    location: 'São Paulo, SP',
    age: 34,
    rating: 5,
    date: '2 semanas atrás',
    verified: true,
    avatar: 'JM',
    testimonial: 'Eu não sabia o que era, mas sentia um peso enorme. Depois da limpeza, parece que tirei uma mochila de pedras das costas. Incrível como algo tão simples pode transformar tanto!',
    highlight: 'Alívio imediato de peso energético',
    image: null
  },
  {
    id: 2,
    service: 'Limpeza Energética',
    name: 'Ricardo F.',
    role: 'Empreendedor',
    location: 'Rio de Janeiro, RJ',
    age: 42,
    rating: 5,
    date: '3 semanas atrás',
    verified: true,
    avatar: 'RF',
    testimonial: 'Estava cético, mas a mudança foi nítida. Minha casa ficou mais leve e até meu sono melhorou. Recomendo demais a quem busca renovação energética.',
    highlight: 'Melhora na qualidade do sono',
    image: null
  },
  {
    id: 3,
    service: 'Limpeza Energética',
    name: 'Carla B.',
    role: 'Professora',
    location: 'Belo Horizonte, MG',
    age: 38,
    rating: 5,
    date: '1 mês atrás',
    verified: true,
    avatar: 'CB',
    testimonial: 'O relatório que recebi foi super detalhado e fez todo o sentido. Sinto-me mais protegida e com a mente mais clara para tomar decisões importantes.',
    highlight: 'Clareza mental restaurada',
    image: null
  },
  {
    id: 4,
    service: 'Limpeza Energética',
    name: 'Fernanda S.',
    role: 'Designer',
    location: 'Curitiba, PR',
    age: 29,
    rating: 5,
    date: '5 dias atrás',
    verified: true,
    avatar: 'FS',
    testimonial: 'Depois da limpeza, minha criatividade voltou a fluir. Estava com bloqueio há meses e em uma semana já senti a diferença no trabalho.',
    highlight: 'Criatividade desbloqueada',
    image: null
  },

  // Radiestesia Genética
  {
    id: 5,
    service: 'Radiestesia Genética',
    name: 'Simone G.',
    role: 'Psicóloga',
    location: 'Porto Alegre, RS',
    age: 47,
    rating: 5,
    date: '2 meses atrás',
    verified: true,
    avatar: 'SG',
    testimonial: 'Eu tinha dores que médicos não explicavam. A Radiestesia mostrou que era algo herdado da minha avó. Depois da sessão, senti alívio real.',
    highlight: 'Alívio de dores inexplicáveis',
    image: null
  },
  {
    id: 6,
    service: 'Radiestesia Genética',
    name: 'Danilo C.',
    role: 'Engenheiro',
    location: 'Florianópolis, SC',
    age: 33,
    rating: 5,
    date: '1 mês atrás',
    verified: true,
    avatar: 'DC',
    testimonial: 'A RadGen tocou num ponto que eu nem sabia que existia. Era um padrão emocional da minha mãe. Desde então, me sinto mais leve e presente.',
    highlight: 'Libertação de padrões emocionais',
    image: null
  },
  {
    id: 7,
    service: 'Radiestesia Genética',
    name: 'Patrícia V.',
    role: 'Arquiteta',
    location: 'Salvador, BA',
    age: 40,
    rating: 5,
    date: '3 semanas atrás',
    verified: true,
    avatar: 'PV',
    testimonial: 'Nunca imaginei que algo da infância do meu pai influenciasse tanto minha vida. A Radiestesia me libertou disso. É forte.',
    highlight: 'Quebra de ciclos familiares',
    image: null
  },
  {
    id: 8,
    service: 'Radiestesia Genética',
    name: 'Eduardo M.',
    role: 'Médico',
    location: 'Brasília, DF',
    age: 45,
    rating: 5,
    date: '6 semanas atrás',
    verified: true,
    avatar: 'EM',
    testimonial: 'Como médico, sou cético por natureza. Mas os resultados foram inegáveis. Minha ansiedade diminuiu consideravelmente após o tratamento.',
    highlight: 'Redução significativa de ansiedade',
    image: null
  },

  // Harmonia Geracional
  {
    id: 9,
    service: 'Harmonia Geracional',
    name: 'Elisângela M.',
    role: 'Empresária',
    location: 'Brasília, DF',
    age: 42,
    rating: 5,
    date: '3 semanas atrás',
    verified: true,
    avatar: 'EM',
    testimonial: 'Meu filho de 15 anos não me olhava nos olhos há semanas. Depois do tratamento, ele me chamou pra conversar. Eu chorei.',
    highlight: 'Reconexão emocional profunda',
    image: null
  },
  {
    id: 10,
    service: 'Harmonia Geracional',
    name: 'Roberta A.',
    role: 'Advogada',
    location: 'Fortaleza, CE',
    age: 38,
    rating: 5,
    date: '1 mês atrás',
    verified: true,
    avatar: 'RA',
    testimonial: 'A gente brigava todo dia. Eu achava que era culpa dele, mas entendi que a cura começava por mim. Hoje somos parceiros.',
    highlight: 'Transformação na relação mãe-filho',
    image: null
  },
  {
    id: 11,
    service: 'Harmonia Geracional',
    name: 'Luciana S.',
    role: 'Professora',
    location: 'Recife, PE',
    age: 45,
    rating: 5,
    date: '2 meses atrás',
    verified: true,
    avatar: 'LS',
    testimonial: 'Achei que perderia meu filho pra essas amizades perigosas. A Harmonia Geracional mudou nosso vínculo sem que ele precisasse saber de nada.',
    highlight: 'Proteção e reconexão familiar',
    image: null
  },
  {
    id: 12,
    service: 'Harmonia Geracional',
    name: 'Marina P.',
    role: 'Consultora',
    location: 'São Paulo, SP',
    age: 41,
    rating: 5,
    date: '5 semanas atrás',
    verified: true,
    avatar: 'MP',
    testimonial: 'Minha filha estava se afastando e eu não sabia como chegar até ela. Após o tratamento, ela voltou a me procurar naturalmente.',
    highlight: 'Reaproximação natural e amorosa',
    image: null
  }
];

// Cores por serviço (matching com services.js)
export const serviceThemes = {
  'Limpeza Energética': {
    gradient: 'from-teal-500 to-emerald-600',
    bgLight: 'bg-teal-50',
    bgDark: 'bg-teal-900/20',
    text: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700 border-teal-200'
  },
  'Radiestesia Genética': {
    gradient: 'from-amber-500 to-orange-600',
    bgLight: 'bg-amber-50',
    bgDark: 'bg-amber-900/20',
    text: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700 border-amber-200'
  },
  'Harmonia Geracional': {
    gradient: 'from-rose-500 to-pink-600',
    bgLight: 'bg-rose-50',
    bgDark: 'bg-rose-900/20',
    text: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700 border-rose-200'
  }
};

// Estatísticas de social proof
export const testimonialStats = {
  totalClients: '500+',
  satisfaction: '98%',
  averageRating: '4.9',
  recommendationRate: '96%'
};

export default testimonials;
