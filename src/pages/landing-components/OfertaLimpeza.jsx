import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Sparkles } from 'lucide-react';

const OfertaLimpeza = ({ slots, handlePurchaseClick }) => {
  return (
    <section id="oferta" className="py-20 md:py-24 bg-gradient-to-br from-teal-600 to-cyan-700">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div 
          className="bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Content */}
            <div className="p-8 lg:p-12 lg:w-3/5">
              <div className="flex justify-center lg:justify-start mb-6">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                  <Badge className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 border border-amber-300 font-bold text-sm px-5 py-2 shadow-md">
                    ✨ Oferta Exclusiva
                  </Badge>
                </motion.div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                Sua Renovação Energética <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Completa</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Liberte-se de bloqueios energéticos e recupere sua vitalidade em até 24 horas.
              </p>
              
              <ul className="space-y-4 text-slate-700">
                {[
                  "Limpeza Energética Profunda à Distância",
                  "Relatório Detalhado com Diagnóstico Completo",
                  "Entrega Rápida em até 24h no seu e-mail"
                ].map((item, i) => (
                  <motion.li 
                    key={item} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
                <motion.li 
                  className="flex items-start gap-3 pt-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Sparkles className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="font-bold text-teal-700">BÔNUS: Alinhamento Completo dos 7 Chakras</span>
                </motion.li>
              </ul>
            </div>
            
            {/* Right side - Pricing */}
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="relative z-10">
                <div className="text-center space-y-6">
                  {/* Price section */}
                  <div>
                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-3 font-medium">Investimento Único</p>
                    
                    {/* Preço original riscado */}
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-slate-400 line-through text-2xl font-semibold">R$ 259,90</span>
                      <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        <Sparkles className="w-3 h-3" />
                        <span>42% OFF</span>
                      </div>
                    </div>
                    
                    {/* Preço atual */}
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-xl text-teal-700 font-semibold">R$</span>
                      <span className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-cyan-700">149</span>
                      <span className="text-2xl text-teal-700 font-bold">,90</span>
                    </div>
                    
                    <p className="text-slate-600 font-medium text-base mb-3">ou 12x de <span className="font-bold text-slate-900">R$ 14,96</span> sem juros</p>
                    
                    {/* Badge de economia */}
                    <div className="inline-flex items-center gap-2 bg-amber-50 border-2 border-amber-300 text-amber-900 px-4 py-2 rounded-xl">
                      <span className="text-lg">💰</span>
                      <span className="font-bold text-sm">Economize R$ 110,00 hoje</span>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    onClick={handlePurchaseClick} 
                    size="lg"
                    asChild
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-full py-7"
                  >
                    <a href="https://pay.kiwify.com.br/XExYlUB" target="_blank" rel="noopener noreferrer">
                      Quero Minha Limpeza
                    </a>
                  </Button>
                  
                  {/* Slots urgency */}
                  {slots && slots <= 8 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="bg-white rounded-2xl p-5 shadow-md border-2 border-amber-200"
                    >
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="text-2xl">⚡</span>
                        <h3 className="text-base font-bold text-amber-700">Atendimentos Limitados</h3>
                      </div>
                      <p className="text-sm text-slate-700 font-semibold mb-3">
                        Apenas <span className="text-amber-700 font-bold text-base">{slots}</span> {slots === 1 ? 'vaga disponível' : 'vagas disponíveis'} hoje
                      </p>
                      <div className="bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <motion.div 
                          className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full shadow-sm" 
                          initial={{ width: '100%' }}
                          animate={{ width: `${(slots / 8) * 100}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfertaLimpeza;
