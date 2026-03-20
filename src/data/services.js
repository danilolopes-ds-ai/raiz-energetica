import { Sparkles, Dna, Hand as HeartHand } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Limpeza Energética',
    description: 'Limpe campos de interferência, cargas densas e bloqueios invisíveis que travam sua energia vital e sua clareza mental.',
    icon: Sparkles,
    slug: 'limpeza-energetica',
    order_index: 1,
    benefits: [
      'Remove bloqueios energéticos acumulados',
      'Aumenta clareza mental e foco',
      'Restaura fluxo vital e disposição',
      'Protege contra energias densas'
    ],
    duration: '60 minutos',
    format: 'Online via videochamada',
    price: 'Ver valores'
  },
  {
    id: 2,
    title: 'Radiestesia Genética',
    description: 'Acesse o DNA energético da sua linhagem e trate padrões invisíveis que silenciosamente moldam sua saúde, seus relacionamentos e sua prosperidade.',
    icon: Dna,
    slug: 'radiestesia-genetica',
    order_index: 2,
    benefits: [
      'Identifica padrões familiares herdados',
      'Trata traumas ancestrais',
      'Libera crenças limitantes da linhagem',
      'Restaura equilíbrio energético familiar'
    ],
    duration: '90 minutos',
    format: 'Online via videochamada',
    price: 'Ver valores'
  },
  {
    id: 3,
    title: 'Harmonia Geracional',
    description: '💞 Reduza conflitos, aproxime corações e reestabeleça a harmonia entre mãe e filho(a) sem confronto ou desgaste.',
    icon: HeartHand,
    slug: 'harmonia-geracional',
    order_index: 3,
    benefits: [
      'Reduz conflitos entre mãe e filho(a)',
      'Restaura comunicação amorosa',
      'Trabalha o campo energético da relação',
      'Resultados em 21-30 dias'
    ],
    duration: '60 minutos',
    format: 'Online - Trabalho energético à distância',
    price: 'Ver valores',
    note: 'O filho(a) não precisa saber que o trabalho está sendo feito'
  }
];

export default services;
