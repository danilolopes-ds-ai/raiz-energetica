import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Zap, X } from 'lucide-react';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-blue-100 rounded-full opacity-50"></div>
            
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative z-10">
              <Zap className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Antes de ir...</h2>
              <p className="text-gray-600 mb-6">Descubra em 2 minutos qual o seu principal bloqueio energético e como resolvê-lo.</p>
              <Button asChild size="lg" className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/quiz" onClick={() => setIsOpen(false)}>
                  Fazer o Quiz Gratuito
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;