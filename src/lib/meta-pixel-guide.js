// Meta Pixel Events - Guia de Uso para Raiz Energética
// Importe: import { trackEvent } from '@/lib/tracking';

/* 
=== EVENTOS PRINCIPAIS PARA RAIZ ENERGÉTICA ===

1. VISUALIZAR SERVIÇOS:
trackEvent.viewContent('Radiestesia Genética', 'service');
trackEvent.viewContent('Limpeza Energética', 'service');
trackEvent.viewContent('Harmonia Geracional', 'service');

2. CONTATO VIA WHATSAPP:
trackEvent.contact('whatsapp', 'botao-flutuante');
trackEvent.contact('whatsapp', 'pagina-contato');
trackEvent.contact('phone', 'header');

3. AGENDAMENTO:
trackEvent.calendarView('Radiestesia Genética');
trackEvent.appointmentScheduled('Radiestesia Genética', '2025-08-25');

4. FORMULÁRIOS DE CONTATO:
trackEvent.leadCapture('formulario-contato', 'email@exemplo.com');
trackEvent.completeRegistration('newsletter', 'homepage');

5. QUIZ/DIAGNÓSTICO:
trackEvent.quizStart('homepage');
trackEvent.quizStep(1, 'sintoma-ansiedade');
trackEvent.quizComplete('recomendacao-radiestesia', 'email@exemplo.com');

6. PESQUISA:
trackEvent.search('dor de cabeça', 'sintomas');
trackEvent.search('radiestesia', 'servicos');

7. ENCONTRAR LOCALIZAÇÃO (para informações):
trackEvent.findLocation('info-atendimento', 'online');

=== IMPLEMENTAÇÃO NOS COMPONENTES ===

// Em um botão de WhatsApp:
<button onClick={() => {
  trackEvent.contact('whatsapp', 'botao-servicos');
  window.open('https://wa.me/5511966101949');
}}>
  Falar no WhatsApp
</button>

// Em uma página de serviço:
useEffect(() => {
  trackEvent.viewContent('Radiestesia Genética', 'service');
}, []);

// Em um formulário:
const handleSubmit = (formData) => {
  trackEvent.leadCapture('formulario-contato', formData.email);
  // ... resto da lógica
};

// No calendário Cal.com:
const handleCalendarOpen = () => {
  trackEvent.calendarView('Radiestesia Genética');
};

=== EVENTOS AUTOMÁTICOS JÁ CONFIGURADOS ===
- PageView (automático em todas as páginas)
- Tempo na página (30s+)
- Scroll depth (75%+)
- Cliques em botões importantes

*/

export const MetaPixelGuide = {
  // Eventos por página
  homepage: () => {
    trackEvent.viewContent('Homepage', 'landing');
  },
  
  servicePage: (serviceName) => {
    trackEvent.viewContent(serviceName, 'service');
  },
  
  contactPage: () => {
    trackEvent.viewContent('Contato', 'contact');
  },
  
  aboutPage: () => {
    trackEvent.viewContent('Sobre Helena', 'about');
  },

  // Eventos de interação
  whatsappClick: (source = 'unknown') => {
    trackEvent.contact('whatsapp', source);
  },
  
  phoneClick: (source = 'unknown') => {
    trackEvent.contact('phone', source);
  },
  
  calendarOpen: (service) => {
    trackEvent.calendarView(service);
  },
  
  appointmentBooked: (service, date) => {
    trackEvent.appointmentScheduled(service, date);
  },

  // Eventos de formulário
  contactForm: (email, source = 'contact-form') => {
    trackEvent.leadCapture(source, email);
  },
  
  newsletter: (email) => {
    trackEvent.completeRegistration('newsletter', 'website');
  },

  // Eventos de quiz/diagnóstico
  diagnosticStart: (source) => {
    trackEvent.quizStart(source);
  },
  
  diagnosticComplete: (result, email) => {
    trackEvent.quizComplete(result, email);
  }
};

export default MetaPixelGuide;
