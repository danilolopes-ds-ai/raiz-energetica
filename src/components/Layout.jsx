import React from 'react';
import { Outlet } from 'react-router-dom';
import SiteHeader from '@/components/organisms/SiteHeader';
import SiteFooter from '@/components/organisms/SiteFooter';
import WhatsAppFloat from '@/components/atoms/WhatsAppFloat';
import { Toaster } from '@/components/ui/toaster';
import ExitIntentPopup from '@/components/organisms/ExitIntentPopup';
import FloatingQuizCTA from '@/components/organisms/FloatingQuizCTA';

const Layout = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <SiteFooter />
      {/* Wrapper for floating buttons to align them with the main container */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="w-full max-w-7xl mx-auto h-full relative">
          <div className="absolute top-24 right-6 lg:right-8 pointer-events-auto">
            <FloatingQuizCTA />
          </div>
          <div className="absolute bottom-4 right-6 lg:right-8 pointer-events-auto">
            <WhatsAppFloat />
          </div>
        </div>
      </div>

      <Toaster />
      <ExitIntentPopup />
    </div>
  );
};

export default Layout;