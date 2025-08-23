export const PIXEL_ID = '3996519380588973';

export const trackPageView = () => {
  if (process.env.NODE_ENV === 'production' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackEvent = (eventName, params = {}) => {
  if (process.env.NODE_ENV === 'production' && window.fbq) {
    window.fbq('track', eventName, params);
  }
};