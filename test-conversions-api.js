// Teste da Meta Pixel Conversions API
import { sendServerSideEvent } from './src/lib/tracking.js';

// Teste 1: Evento de Lead
console.log('🧪 Testando evento Lead...');
await sendServerSideEvent('Lead', 
  { 
    content_name: 'Formulário de Contato',
    content_type: 'lead_form',
    value: 50,
    currency: 'BRL'
  },
  { 
    email: 'teste@raizenergetica.com.br'
  }
);

// Teste 2: Evento de Purchase
console.log('🧪 Testando evento Purchase...');
await sendServerSideEvent('Purchase',
  { 
    content_name: 'Limpeza Energética',
    content_type: 'service',
    value: 150,
    currency: 'BRL'
  },
  { 
    email: 'cliente@exemplo.com',
    phone: '11966101949'
  }
);

console.log('✅ Testes concluídos!');
