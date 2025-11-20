import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView as trackGAPageView } from '@/lib/analytics';
import { trackPageView as trackMetaPageView } from '@/lib/metaPixel';
import { initClarity } from '@/lib/clarity';
import { tracking } from '@/lib/tracking';

const AnalyticsProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    initAnalytics();
    initClarity();
  }, []);

  useEffect(() => {
    trackGAPageView();
    trackMetaPageView();
    tracking.pageView();

    // Scroll depth tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const percent = Math.round((scrollTop / docHeight) * 100);
        if (percent >= 75) {
          tracking.scrollDepth(percent);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Time on page tracking
    const timer = setTimeout(() => {
      tracking.timeOnPage(30);
    }, 30000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [location]);

  return <>{children}</>;
};

export default AnalyticsProvider;