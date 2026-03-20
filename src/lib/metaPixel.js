export const PIXEL_ID = '3996519380588973';
let metaInitialized = false;

const loadMetaScript = () => {
  if (window.fbq) {
    return;
  }

  !(function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
};

const scheduleIdle = (callback) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 2000 });
    return;
  }
  window.setTimeout(callback, 1200);
};

export const initMetaPixel = () => {
  if (process.env.NODE_ENV !== 'production' || metaInitialized) {
    return;
  }

  const bootstrap = () => {
    if (metaInitialized) {
      return;
    }
    loadMetaScript();
    if (window.fbq) {
      window.fbq('init', PIXEL_ID);
    }
    metaInitialized = true;
  };

  const onFirstInteraction = () => {
    bootstrap();
    window.removeEventListener('pointerdown', onFirstInteraction);
    window.removeEventListener('keydown', onFirstInteraction);
    window.removeEventListener('scroll', onFirstInteraction);
  };

  window.addEventListener('pointerdown', onFirstInteraction, { once: true, passive: true });
  window.addEventListener('keydown', onFirstInteraction, { once: true });
  window.addEventListener('scroll', onFirstInteraction, { once: true, passive: true });

  scheduleIdle(bootstrap);
};

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