import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView as trackGAPageView } from '@/lib/analytics';
import { trackPageView as trackMetaPageView } from '@/lib/metaPixel';
import { initClarity } from '@/lib/clarity';
import { track } from '@vercel/analytics';

const AnalyticsProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
    initClarity();
  }, []);

  useEffect(() => {
    // Tracking tradicional
    trackGAPageView();
    trackMetaPageView();
    
    // Vercel Analytics - Eventos customizados por página
    const pageName = location.pathname.replace('/', '') || 'home';
    track('page_view', { 
      page: pageName,
      path: location.pathname,
      search: location.search 
    });

    // Eventos específicos por landing page
    if (location.pathname.includes('harmonia-geracional')) {
      track('landing_view', { landing: 'harmonia_geracional' });
    } else if (location.pathname.includes('radiestesia-genetica')) {
      track('landing_view', { landing: 'radiestesia_genetica' });
    } else if (location.pathname.includes('limpeza-energetica')) {
      track('landing_view', { landing: 'limpeza_energetica' });
    } else if (location.pathname.includes('quiz')) {
      track('quiz_start', { source: document.referrer });
    } else if (location.pathname.includes('agendar')) {
      track('booking_page_view', { source: location.search });
    }
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;