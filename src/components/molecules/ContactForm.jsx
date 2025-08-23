import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppButton from '@/components/atoms/AppButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';
import { trackGAEvent } from '@/lib/analytics';
import { trackEvent as trackMetaEvent } from '@/lib/metaPixel';
import { useLocation } from 'react-router-dom';

const ContactForm = ({
  title = "Entre em Contato",
  className = "",
  formType = "contact",
  leadSource = "contact_page",
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusTracked, setFocusTracked] = useState(false);
  const { toast } = useToast();
  const location = useLocation();

  const handleFocus = () => {
    if (!focusTracked) {
      trackGAEvent('CONTACT_FORM_START', {
        form_location: leadSource,
        page_title: document.title,
      });
      setFocusTracked(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      contacts.push({ ...formData, id: Date.now(), date: new Date().toISOString() });
      localStorage.setItem('contacts', JSON.stringify(contacts));
      
      toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
      
      trackGAEvent('CONTACT_FORM_SUBMIT', {
        form_type: formType,
        lead_source: leadSource,
      });
      trackMetaEvent('Lead', {
        content_name: title,
        form_type: formType,
      });

      if (formType === 'appointment_request') {
        trackMetaEvent('Purchase', {
            value: 297.00,
            currency: 'BRL',
            content_name: 'Consulta Inicial Agendada (Simulado)',
        });
      }

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={`card-hover ${className}`}>
      <CardHeader><CardTitle className="text-gradient">{title}</CardTitle></CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} onFocus={handleFocus} required />
          <Input name="email" type="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required />
          <Input name="phone" placeholder="Seu telefone/WhatsApp" value={formData.phone} onChange={handleChange} required />
          <Textarea name="message" placeholder="Como podemos ajudar você?" value={formData.message} onChange={handleChange} required rows={4} />
          <AppButton type="submit" disabled={isSubmitting} className="w-full" variant="primary">
            {isSubmitting ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              <><Send className="w-4 h-4 mr-2" />Enviar Mensagem</>
            )}
          </AppButton>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;