const CLARITY_PROJECT_ID = 's3iiq72p6y';
let clarityInitialized = false;

const loadClarityScript = () => {
  (function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() {
      (c[a].q = c[a].q || []).push(arguments);
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = `https://www.clarity.ms/tag/${i}`;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
};

const scheduleIdle = (callback) => {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 2500 });
    return;
  }
  window.setTimeout(callback, 1500);
};

export const initClarity = () => {
  if (process.env.NODE_ENV !== 'production' || clarityInitialized) {
    return;
  }

  const bootstrap = () => {
    if (clarityInitialized) {
      return;
    }
    loadClarityScript();
    clarityInitialized = true;
  };

  const onFirstInteraction = () => {
    bootstrap();
    window.removeEventListener('pointerdown', onFirstInteraction);
    window.removeEventListener('keydown', onFirstInteraction);
  };

  window.addEventListener('pointerdown', onFirstInteraction, { once: true, passive: true });
  window.addEventListener('keydown', onFirstInteraction, { once: true });

  scheduleIdle(bootstrap);
};