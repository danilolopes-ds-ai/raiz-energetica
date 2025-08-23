import ReactGA from 'react-ga4';

const GA_TRACKING_ID = 'G-E1TDB4SHRW';
let gaInitialized = false;

export const initAnalytics = () => {
  if (process.env.NODE_ENV === 'production' && GA_TRACKING_ID && !gaInitialized) {
    try {
      ReactGA.initialize(GA_TRACKING_ID);
      gaInitialized = true;
      console.log("GA Initialized");
    } catch (e) {
      console.error("Failed to initialize Google Analytics", e);
    }
  }
};

export const trackPageView = () => {
  if (gaInitialized) {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
  }
};

export const trackGAEvent = (category, action, label) => {
  if (gaInitialized) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};