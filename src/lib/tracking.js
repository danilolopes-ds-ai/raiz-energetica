// Centralizador de eventos de analytics (GA4 + Meta Pixel)
import { trackGAEvent } from './analytics';
import { trackEvent as trackMetaEvent } from './metaPixel';

// Eventos do guia
export const tracking = {
  pageView: () => {
    trackGAEvent('PAGE_VIEW', { page: window.location.pathname });
    trackMetaEvent('PageView', { page: window.location.pathname });
  },
  leadCapture: (form, email) => {
    trackGAEvent('LEAD_CAPTURE', { form, email });
    trackMetaEvent('Lead', { form, email });
  },
  calendarView: (service) => {
    trackGAEvent('CALENDAR_VIEW', { service });
    trackMetaEvent('CalendarView', { service });
  },
  appointmentScheduled: (service, date) => {
    trackGAEvent('APPOINTMENT_SCHEDULED', { service, date });
    trackMetaEvent('AppointmentScheduled', { service, date });
  },
  quizStart: (context) => {
    trackGAEvent('QUIZ_START', { context });
    trackMetaEvent('QuizStart', { context });
  },
  quizStep: (step, value) => {
    trackGAEvent('QUIZ_STEP', { step, value });
    trackMetaEvent('QuizStep', { step, value });
  },
  quizComplete: (recommendation, email) => {
    trackGAEvent('QUIZ_COMPLETE', { recommendation, email });
    trackMetaEvent('QuizComplete', { recommendation, email });
  },
  search: (term, context) => {
    trackGAEvent('SEARCH', { term, context });
    trackMetaEvent('Search', { term, context });
  },
  findLocation: (info, type) => {
    trackGAEvent('FIND_LOCATION', { info, type });
    trackMetaEvent('FindLocation', { info, type });
  },
  scrollDepth: (percent) => {
    trackGAEvent('SCROLL_DEPTH', { percent });
    trackMetaEvent('ScrollDepth', { percent });
  },
  timeOnPage: (seconds) => {
    trackGAEvent('TIME_ON_PAGE', { seconds });
    trackMetaEvent('TimeOnPage', { seconds });
  },
};