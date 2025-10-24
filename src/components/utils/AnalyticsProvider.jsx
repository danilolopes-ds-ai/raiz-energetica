import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView as trackGAPageView } from '@/lib/analytics';
import { trackPageView as trackMetaPageView } from '@/lib/metaPixel';
import { initClarity } from '@/lib/clarity';

const AnalyticsProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
    initClarity();
  }, []);

  useEffect(() => {
    trackGAPageView();
    trackMetaPageView();
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;