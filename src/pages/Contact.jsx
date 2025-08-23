import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ContactForm from '@/components/molecules/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Headphones } from 'lucide-react';
import { trackGAEvent } from '@/lib/analytics';
import { trackEvent as trackMetaEvent } from '@/lib/metaPixel';
import { Link } from 'react-router-dom';
const Contact = () => {
  const contactOptions = [{
    icon: MessageCircle,
    title: "Helena - Assistente Digital",
    description: "Tire suas dúvidas 24h por dia",
    action: "Falar com Helena",
    link: "/helena",
    color: "bg-green-500",
    details: "Disponível no WhatsApp para dúvidas gerais e orientações iniciais"
  }, {
    icon: Calendar,
    title: "Agendamento Direto",
    description: "Agende sua consulta online",
    action: "Agendar Consulta",
    link: "/agendar",
    color: "bg-[#2D8C5C]",
    details: "Sistema online para agendamento de consultas e terapias"
  }, {
    icon: Mail,
    title: "E-mail Comercial",
    description: "Para parcerias e assuntos comerciais",
    action: "Enviar E-mail",
    link: "mailto:contato@raizenergetica.com",
    color: "bg-[#1B4D73]",
    details: "contato@raizenergetica.com"
  }, {
    icon: Phone,
    title: "Telefone",
    description: "Para urgências e informações",
    action: "Ligar Agora",
    link: "tel:+5511966101949",
    color: "bg-[#B8950A]",
    details: "(11) 96610-1949"
  }];
  const businessHours = [{
    day: "Segunda a Sexta",
    hours: "8h às 18h"
  }, {
    day: "Sábado",
    hours: "8h às 14h"
  }, {
    day: "Domingo",
    hours: "Fechado"
  }, {
    day: "Feriados",
    hours: "Consulte disponibilidade"
  }];
  const handleWhatsApp = () => {
    trackGAEvent('WHATSAPP_CLICK', {
      button_location: 'contact_page_cta',
      service_context: 'general'
    });
    trackMetaEvent('Lead', {
      content_name: 'Contact Page WhatsApp CTA',
      lead_type: 'WhatsApp'
    });
    const message = encodeURIComponent("Olá! Gostaria de falar com a Helena sobre os serviços da Raiz Energética.");
    window.open(`https://wa.me/5511966101949?text=${message}`, '_blank');
  };
  const renderLink = option => {
    if (option.link.startsWith('/')) {
      return <Link to={option.link}>{option.action}</Link>;
    }
    return <a href={option.link} target="_blank" rel="noopener noreferrer">{option.action}</a>;
  };
  return <div>
      <section className="hero-pattern section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center space-y-6">
            <Badge className="bg-[#2D8C5C]/10 text-[#2D8C5C] border-[#2D8C5C]/20">Entre em Contato</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Estamos Aqui para <span className="text-gradient">Ajudar</span></h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Múltiplas formas de contato para garantir que você receba o melhor atendimento e suporte em sua jornada de transformação.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha a Melhor <span className="text-gradient">Forma</span> de Contato</h2>
            <p className="text-lg md:text-xl text-gray-600">Diferentes canais para diferentes necessidades</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactOptions.map((option, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2 * index,
            duration: 0.6
          }}>
                <Card className="card-hover h-full text-center">
                  <CardHeader><div className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4`}><option.icon className="w-8 h-8 text-white" /></div><CardTitle className="text-xl">{option.title}</CardTitle><p className="text-gray-600">{option.description}</p></CardHeader>
                  <CardContent className="space-y-4"><p className="text-sm text-gray-500">{option.details}</p><Button asChild className="w-full gradient-primary text-white hover:opacity-90">{renderLink(option)}</Button></CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }}>
              <ContactForm title="Envie sua Mensagem" formType="contact" leadSource="contact_page_form" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} className="space-y-8">
              <Card><CardHeader><CardTitle className="text-gradient">Informações de Contato</CardTitle></CardHeader><CardContent className="space-y-4"><div className="flex items-center space-x-3"><Phone className="w-5 h-5 text-[#2D8C5C]" /><div><p className="font-medium">Telefone/WhatsApp</p><p className="text-gray-600">(11) 96610-1949</p></div></div><div className="flex items-center space-x-3"><Mail className="w-5 h-5 text-[#2D8C5C]" /><div><p className="font-medium">E-mail</p><p className="text-gray-600">contato@raizenergetica.com</p></div></div><div className="flex items-center space-x-3"><MapPin className="w-5 h-5 text-[#2D8C5C]" /><div><p className="font-medium">Atendimento</p><p className="text-gray-600">Online</p></div></div></CardContent></Card>
              <Card><CardHeader><CardTitle className="text-gradient flex items-center"><Clock className="w-5 h-5 mr-2" />Horário de Funcionamento</CardTitle></CardHeader><CardContent><div className="space-y-3">{businessHours.map((schedule, index) => <div key={index} className="flex justify-between items-center"><span className="font-medium">{schedule.day}</span><span className="text-gray-600">{schedule.hours}</span></div>)}<div className="mt-4 p-3 bg-green-50 rounded-lg"><p className="text-sm text-green-700 flex items-center"><Headphones className="w-4 h-4 mr-2" />Helena está disponível 24h no WhatsApp</p></div></div></CardContent></Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center space-y-8">
            <div><h2 className="text-3xl md:text-4xl font-bold mb-4">Fale Agora com <span className="text-gradient">Helena</span></h2><p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Nossa assistente digital está pronta para esclarecer suas dúvidas e ajudar você a dar o primeiro passo rumo à sua transformação.</p></div>
            <Button onClick={handleWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 h-auto"><MessageCircle className="w-6 h-6 mr-3" />Conversar com Helena no WhatsApp</Button>
            <p className="text-sm text-gray-500">Disponível 24 horas por dia, 7 dias por semana</p>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Contact;