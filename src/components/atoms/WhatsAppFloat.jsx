import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackGAEvent } from '@/lib/analytics';
import { trackEvent as trackMetaEvent } from '@/lib/metaPixel';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    trackGAEvent('WHATSAPP_CLICK', {
        button_location: 'floating_button',
        service_context: 'general'
    });
    trackMetaEvent('Lead', {
        content_name: 'Floating WhatsApp Button',
        lead_type: 'WhatsApp'
    });
    const message = encodeURIComponent("Olá! Gostaria de falar com a Helena");
    window.open(`https://wa.me/5511966101949?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="whatsapp-float w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg pulse-glow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      aria-label="Falar com Helena no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </motion.button>
  );
};

export default WhatsAppFloat;