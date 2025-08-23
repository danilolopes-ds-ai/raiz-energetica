// Google Tag Manager initialization
export const initGTM = () => {
  const gtmId = import.meta.env.VITE_GTM_ID;
  
  if (!gtmId || import.meta.env.VITE_DEV_MODE === 'true') {
    console.log('GTM: Modo desenvolvimento - tracking desabilitado');
    return;
  }

  // Initialize dataLayer if not exists
  window.dataLayer = window.dataLayer || [];
  
  // GTM script injection
  (function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer', gtmId);
  
  console.log('✅ GTM inicializado:', gtmId);
};

// Push events to GTM dataLayer
export const pushToDataLayer = (event) => {
  if (import.meta.env.VITE_DEV_MODE === 'true') {
    console.log('GTM Event (dev mode):', event);
    return;
  }
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};
