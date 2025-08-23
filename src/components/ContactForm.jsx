import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const ContactForm = ({ title = "Entre em Contato", className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Salvar no localStorage
      const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
      const newContact = {
        ...formData,
        id: Date.now(),
        date: new Date().toISOString()
      };
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className={`card-hover ${className}`}>
      <CardHeader>
        <CardTitle className="text-gradient">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              name="name"
              placeholder="Seu nome completo"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              name="email"
              type="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              name="phone"
              placeholder="Seu telefone/WhatsApp"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Como podemos ajudar você?"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-primary text-white hover:opacity-90"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;