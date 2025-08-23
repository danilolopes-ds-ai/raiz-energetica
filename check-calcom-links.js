// Script para testar links do Cal.com
const calcomLinks = [
  {
    name: 'Diagnóstico Energético',
    link: 'raiz-energetica/diagnostico-energetico',
    status: '❌ PRECISA CRIAR',
    price: 'R$ 97',
    duration: '60 min'
  },
  {
    name: 'Limpeza Energética', 
    link: 'raiz-energetica/limpeza-energetica',
    status: '❌ PRECISA CRIAR',
    price: 'R$ 147',
    duration: '45 min'
  },
  {
    name: 'Radiestesia Genética',
    link: 'raiz-energetica/sessaoradgen', 
    status: '✅ JÁ EXISTE',
    price: 'R$ 297',
    duration: '60 min'
  },
  {
    name: 'Harmonia Geracional',
    link: 'raiz-energetica/harmonia-geracional',
    status: '❌ PRECISA CRIAR', 
    price: 'R$ 197',
    duration: '60 min'
  }
];

console.log('🔗 STATUS DOS LINKS CAL.COM - RAIZ ENERGÉTICA\n');

calcomLinks.forEach((item, index) => {
  console.log(`${index + 1}. ${item.name}`);
  console.log(`   Link: https://cal.com/${item.link}`);
  console.log(`   Status: ${item.status}`);
  console.log(`   Preço: ${item.price} | Duração: ${item.duration}`);
  console.log('');
});

console.log('📋 PRÓXIMOS PASSOS:');
console.log('1. Acesse https://app.cal.com/event-types'); 
console.log('2. Clique em "+ Novo" para criar os eventos que faltam');
console.log('3. Configure conforme o guia cal-com-setup-guide.md');
console.log('4. Teste todos os links de agendamento');
