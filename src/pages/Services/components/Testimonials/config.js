/**
 * Configurações globais para sistema de depoimentos
 * Melhores práticas: Centralização de configs, feature flags
 */

export const TESTIMONIALS_CONFIG = {
  // Performance
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutos
  LAZY_LOAD_THRESHOLD: '200px',
  PRELOAD_IMAGES: true,
  
  // Validação
  ENABLE_VALIDATION: true,
  MIN_TEXT_LENGTH: 20,
  MAX_TEXT_LENGTH: 500,
  REQUIRED_FIELDS: ['id', 'service', 'text', 'name', 'rating', 'date'],
  
  // Display
  DEFAULT_MAX_TESTIMONIALS: 8,
  MOBILE_SLIDES_PER_VIEW: 1.2,
  TABLET_SLIDES_PER_VIEW: 2.2,
  DESKTOP_SLIDES_PER_VIEW: 3.5,
  
  // Animações
  AUTOPLAY_DELAY: 5000,
  TRANSITION_DURATION: 400,
  ENABLE_AUTOPLAY: true,
  PAUSE_ON_HOVER: true,
  
  // Acessibilidade
  ENABLE_KEYBOARD_NAVIGATION: true,
  HIGH_CONTRAST_MODE: false,
  REDUCED_MOTION_RESPECT: true,
  
  // Analytics
  TRACK_INTERACTIONS: true,
  TRACK_SCROLL_DEPTH: true,
  
  // Feature Flags
  FEATURES: {
    INFINITE_SCROLL: false,
    FILTER_BY_RATING: false,
    SORT_OPTIONS: false,
    TESTIMONIAL_MODAL: false,
    SHARE_TESTIMONIAL: false,
    LIKE_TESTIMONIAL: false,
    REPORT_TESTIMONIAL: false
  },
  
  // API
  API_ENDPOINT: '/api/testimonials',
  FALLBACK_TO_DEMO: true,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
  
  // Moderação
  AUTO_MODERATE: false,
  PROFANITY_FILTER: true,
  SPAM_DETECTION: true,
  
  // Internacionalização
  DEFAULT_LOCALE: 'pt-BR',
  DATE_FORMAT: 'DD/MM/YYYY',
  
  // SEO
  STRUCTURED_DATA: true,
  META_TAGS: true
};

// Textos configuráveis
export const TESTIMONIALS_TEXTS = {
  'pt-BR': {
    loading: 'Carregando depoimentos...',
    error: 'Erro ao carregar depoimentos',
    empty: 'Nenhum depoimento encontrado',
    loadMore: 'Carregar mais',
    previous: 'Anterior',
    next: 'Próximo',
    verified: 'Verificado',
    featured: 'Destacado',
    rating: 'Avaliação',
    stars: 'estrelas',
    readMore: 'Ler mais',
    readLess: 'Ler menos',
    share: 'Compartilhar',
    like: 'Curtir',
    report: 'Denunciar',
    showAll: 'Ver todos',
    filterBy: 'Filtrar por',
    sortBy: 'Ordenar por',
    newest: 'Mais recentes',
    oldest: 'Mais antigos',
    highestRating: 'Maior avaliação',
    lowestRating: 'Menor avaliação'
  }
};

// Temas visuais
export const TESTIMONIALS_THEMES = {
  default: {
    primary: '#4f46e5',
    secondary: '#ec4899',
    background: '#ffffff',
    surface: '#f8fafc',
    text: '#1e293b',
    textSecondary: '#64748b',
    border: '#e2e8f0'
  },
  dark: {
    primary: '#6366f1',
    secondary: '#f472b6',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#94a3b8',
    border: '#334155'
  }
};

// Breakpoints responsivos
export const RESPONSIVE_BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Configurações do Swiper por breakpoint
export const SWIPER_RESPONSIVE_CONFIG = {
  [RESPONSIVE_BREAKPOINTS.xs]: {
    slidesPerView: 1,
    spaceBetween: 16
  },
  [RESPONSIVE_BREAKPOINTS.sm]: {
    slidesPerView: 1.2,
    spaceBetween: 20
  },
  [RESPONSIVE_BREAKPOINTS.md]: {
    slidesPerView: 2.2,
    spaceBetween: 24
  },
  [RESPONSIVE_BREAKPOINTS.lg]: {
    slidesPerView: 2.8,
    spaceBetween: 32
  },
  [RESPONSIVE_BREAKPOINTS.xl]: {
    slidesPerView: 3.5,
    spaceBetween: 40
  }
};
