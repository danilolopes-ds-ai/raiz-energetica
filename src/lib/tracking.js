import { track } from '@vercel/analytics';

// Helper centralizado para tracking de conversões
export const trackEvent = {
  // Quiz Events
  quizStart: (source) => {
    track('quiz_start', { source });
    // GTM
    window.dataLayer?.push({
      event: 'quiz_start',
      quiz_source: source
    });
    // Meta Pixel
    window.fbq?.('track', 'Lead', { content_name: 'Quiz Start' });
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
    window.fbq?.('track', 'CompleteRegistration', { content_name: 'Quiz Complete' });
  },

  // Lead Events
  leadCapture: (source, email) => {
    track('lead_capture', { source, email_domain: email?.split('@')[1] });
    window.dataLayer?.push({
      event: 'generate_lead',
      lead_source: source
    });
    window.fbq?.('track', 'Lead', { content_name: source });
  },

  // Booking Events
  calendarView: (service) => {
    track('calendar_view', { service });
    window.dataLayer?.push({
      event: 'view_calendar',
      service_type: service
    });
  },

  appointmentScheduled: (service, date) => {
    track('appointment_scheduled', { service, date });
    window.dataLayer?.push({
      event: 'schedule_appointment',
      service_type: service,
      appointment_date: date
    });
    window.fbq?.('track', 'Schedule', { content_name: service });
  },

  // Purchase Events
  checkoutInitiate: (service, price) => {
    track('checkout_initiate', { service, price });
    window.dataLayer?.push({
      event: 'begin_checkout',
      currency: 'BRL',
      value: price,
      items: [{ item_name: service, price }]
    });
    window.fbq?.('track', 'InitiateCheckout', { 
      content_name: service,
      value: price,
      currency: 'BRL'
    });
  },

  purchase: (service, price, transactionId) => {
    track('purchase', { service, price, transaction_id: transactionId });
    window.dataLayer?.push({
      event: 'purchase',
      transaction_id: transactionId,
      currency: 'BRL',
      value: price,
      items: [{ item_name: service, price }]
    });
    window.fbq?.('track', 'Purchase', {
      content_name: service,
      value: price,
      currency: 'BRL'
    });
  },

  // Engagement Events
  buttonClick: (buttonName, location) => {
    track('button_click', { button: buttonName, location });
    window.dataLayer?.push({
      event: 'click',
      button_name: buttonName,
      click_location: location
    });
  },

  formSubmit: (formName, success) => {
    track('form_submit', { form: formName, success });
    window.dataLayer?.push({
      event: 'form_submit',
      form_name: formName,
      form_success: success
    });
  },

  videoPlay: (videoName, duration) => {
    track('video_play', { video: videoName, duration });
    window.dataLayer?.push({
      event: 'video_start',
      video_title: videoName
    });
  },

  // Page Engagement
  timeOnPage: (page, seconds) => {
    if (seconds > 30) { // Só trackear se passou mais de 30s
      track('page_engagement', { page, time_seconds: seconds });
    }
  },

  scrollDepth: (page, depth) => {
    if (depth >= 75) { // 75% da página
      track('scroll_depth', { page, depth_percent: depth });
      window.dataLayer?.push({
        event: 'scroll',
        scroll_depth: depth
      });
    }
  }
};

// Hook para facilitar o uso
export const useTracking = () => {
  return trackEvent;
};
