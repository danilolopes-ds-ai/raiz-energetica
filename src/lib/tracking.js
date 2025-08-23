import { track } from '@vercel/analytics';

// Helper centralizado para tracking de conversões
export const trackEvent = {
  // Meta Pixel Standard Events para Raiz Energética
  
  // 1. VIEW CONTENT - Visualização de páginas importantes
  viewContent: (contentName, contentType = 'service') => {
    track('view_content', { content_name: contentName, content_type: contentType });
    window.dataLayer?.push({
      event: 'view_item',
      content_name: contentName,
      content_type: contentType
    });
    window.fbq?.('track', 'ViewContent', { 
      content_name: contentName,
      content_type: contentType 
    });
  },

  // 2. LEAD - Captura de leads (formulários, contatos)
  leadCapture: (source, email = null, contentName = null) => {
    track('lead_capture', { source, email_domain: email?.split('@')[1] });
    window.dataLayer?.push({
      event: 'generate_lead',
      lead_source: source,
      content_name: contentName
    });
    window.fbq?.('track', 'Lead', { 
      content_name: contentName || source,
      lead_source: source
    });
  },

  // 3. CONTACT - Tentativas de contato
  contact: (method, source = 'website') => {
    track('contact_attempt', { method, source });
    window.dataLayer?.push({
      event: 'contact',
      contact_method: method,
      source: source
    });
    window.fbq?.('track', 'Contact', { 
      contact_method: method,
      source: source 
    });
  },

  // 4. SCHEDULE - Agendamentos via Cal.com
  scheduleAppointment: (serviceType, value = null) => {
    track('schedule_appointment', { service_type: serviceType, value });
    window.dataLayer?.push({
      event: 'schedule',
      service_type: serviceType,
      value: value
    });
    window.fbq?.('track', 'Schedule', { 
      content_name: serviceType,
      value: value,
      currency: 'BRL'
    });
  },

  // 5. COMPLETE REGISTRATION - Cadastros completos
  completeRegistration: (registrationType, source = 'website') => {
    track('complete_registration', { registration_type: registrationType, source });
    window.dataLayer?.push({
      event: 'sign_up',
      method: registrationType,
      source: source
    });
    window.fbq?.('track', 'CompleteRegistration', { 
      content_name: registrationType,
      registration_method: registrationType 
    });
  },

  // 6. SEARCH - Buscas no site
  search: (searchTerm, resultCount = 0) => {
    track('site_search', { search_term: searchTerm, results: resultCount });
    window.dataLayer?.push({
      event: 'search',
      search_term: searchTerm,
      search_results: resultCount
    });
    window.fbq?.('track', 'Search', { 
      search_string: searchTerm,
      content_name: 'Site Search'
    });
  },

  // 7. PURCHASE - Compras de serviços
  purchase: (serviceType, value, currency = 'BRL') => {
    track('purchase', { service_type: serviceType, value, currency });
    window.dataLayer?.push({
      event: 'purchase',
      transaction_id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      value: value,
      currency: currency,
      items: [{
        item_name: serviceType,
        item_category: 'terapia_holistica',
        price: value,
        quantity: 1
      }]
    });
    window.fbq?.('track', 'Purchase', { 
      value: value,
      currency: currency,
      content_name: serviceType,
      content_type: 'service'
    });
  },

  // EVENTOS ESPECÍFICOS DO NEGÓCIO

  // Quiz Events
  quizStart: (source) => {
    track('quiz_start', { source });
    window.dataLayer?.push({
      event: 'quiz_start',
      quiz_source: source
    });
    window.fbq?.('track', 'Lead', { content_name: 'Quiz Diagnóstico' });
  },

  quizStep: (step, answer) => {
    track('quiz_step', { step, answer });
    window.dataLayer?.push({
      event: 'quiz_progress',
      quiz_step: step,
      quiz_answer: answer
    });
  },

  quizComplete: (result, email) => {
    track('quiz_complete', { result, has_email: !!email });
    window.dataLayer?.push({
      event: 'quiz_complete',
      quiz_result: result
    });
    window.fbq?.('track', 'CompleteRegistration', { content_name: 'Quiz Diagnóstico Completo' });
  },

  // Calendar Events  
  calendarView: (service) => {
    track('calendar_view', { service });
    window.dataLayer?.push({
      event: 'view_calendar',
      service_type: service
    });
    window.fbq?.('track', 'ViewContent', { content_name: `Agendamento ${service}` });
  },

  // WhatsApp Events
  whatsappClick: (source, message = '') => {
    track('whatsapp_click', { source, has_message: !!message });
    window.dataLayer?.push({
      event: 'contact_whatsapp',
      source: source,
      message_type: message ? 'custom' : 'default'
    });
    window.fbq?.('track', 'Contact', { 
      contact_method: 'whatsapp',
      source: source 
    });
  },

  // Page Events
  pageView: (pageName, category = 'website') => {
    track('page_view', { page: pageName, category });
    window.dataLayer?.push({
      event: 'page_view',
      page_title: pageName,
      page_category: category
    });
    // PageView já é enviado automaticamente pelo Meta Pixel
  },

  // Service Interest Events
  serviceInterest: (serviceName, source = 'website') => {
    track('service_interest', { service: serviceName, source });
    window.dataLayer?.push({
      event: 'service_interest',
      service_name: serviceName,
      source: source
    });
    window.fbq?.('track', 'ViewContent', { 
      content_name: serviceName,
      content_type: 'service'
    });
  },

  // Form Events
  formStart: (formName) => {
    track('form_start', { form_name: formName });
    window.dataLayer?.push({
      event: 'form_start',
      form_name: formName
    });
  },

  formSubmit: (formName, success = true) => {
    track('form_submit', { form_name: formName, success });
    window.dataLayer?.push({
      event: 'form_submit',
      form_name: formName,
      success: success
    });
    if (success) {
      window.fbq?.('track', 'Lead', { content_name: formName });
    }
  }
};

// Hook para facilitar o uso em componentes React
export const useTracking = () => {
  return trackEvent;
};

// Meta Pixel Conversions API - Server-side tracking
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;
const ACCESS_TOKEN = import.meta.env.VITE_META_PIXEL_ACCESS_TOKEN;

export const sendServerSideEvent = async (eventName, eventData = {}, userData = {}) => {
  // Só executa se o token estiver configurado
  if (!ACCESS_TOKEN || !PIXEL_ID) {
    console.log('Meta Pixel Conversions API: Token não configurado');
    return false;
  }

  try {
    const url = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;
    
    const payload = {
      data: [{
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: window.location.href,
        action_source: 'website',
        user_data: {
          // Hash dos dados do usuário (quando disponíveis)
          em: userData.email ? await hashData(userData.email.toLowerCase()) : undefined,
          ph: userData.phone ? await hashData(userData.phone.replace(/\D/g, '')) : undefined,
          country: 'BR',
          ...userData
        },
        custom_data: {
          content_name: eventData.content_name,
          content_type: eventData.content_type || 'service',
          value: eventData.value,
          currency: eventData.currency || 'BRL',
          ...eventData
        }
      }],
      access_token: ACCESS_TOKEN
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log('Evento enviado via Conversions API:', eventName);
      return true;
    } else {
      console.error('Erro ao enviar evento via Conversions API:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Erro na Conversions API:', error);
    return false;
  }
};

// Função para hash de dados sensíveis
async function hashData(data) {
  if (!data) return undefined;
  
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}
