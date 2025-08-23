import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, CreditCard, ExternalLink, Calendar } from 'lucide-react';

const TherapyCard = ({ therapy, index, onSelect }) => {
  const IconComponent = therapy.icon;

  // Se for produto Kiwify, redireciona direto
  const handleClick = () => {
    if (therapy.isKiwifyProduct) {
      window.open(therapy.kiwifyUrl, '_blank');
    } else {
      onSelect(therapy);
    }
  };

  // Se for Harmonia Geracional, mostra as sub-opções
  if (therapy.hasSubOptions) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`${therapy.bgColor} rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative`}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${therapy.color} text-white shadow-lg`}>
              <IconComponent className="w-8 h-8" />
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">3 Opções</div>
              <div className="text-sm text-gray-600">Escolha o ideal</div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{therapy.title}</h3>
          <p className="text-lg font-medium text-gray-700 mb-4">{therapy.subtitle}</p>
          <p className="text-gray-600 mb-6 leading-relaxed">{therapy.description}</p>
          
          <div className="space-y-4">
            {therapy.subOptions.map((option) => (
              <div 
                key={option.id}
                onClick={() => onSelect(option)}
                className="border border-gray-200 rounded-lg p-4 hover:border-[#2D8C5C] hover:bg-white transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900">{option.title}</h4>
                  <span className="text-lg font-bold text-[#2D8C5C]">{option.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[#2D8C5C] text-sm group-hover:text-[#245A4A]">
                    <Calendar className="w-4 h-4" />
                    <span>Agendar</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`${therapy.bgColor} rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer group hover:scale-[1.02] relative`}
      onClick={handleClick}
    >
      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${therapy.color} text-white shadow-lg`}>
            <IconComponent className="w-8 h-8" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">{therapy.price}</div>
            <div className="text-sm text-gray-600 flex items-center justify-end space-x-1">
              <Clock className="w-3 h-3" />
              <span>{therapy.duration}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{therapy.title}</h3>
        <p className="text-lg font-medium text-gray-700 mb-4">{therapy.subtitle}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{therapy.description}</p>
        
        <div className="space-y-3 mb-6">
          {therapy.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${therapy.color}`}></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">{therapy.delivery}</span>
          </div>
          <div className="flex items-center space-x-2 text-[#2D8C5C] font-medium group-hover:text-[#245A4A] transition-colors">
            {therapy.isKiwifyProduct ? (
              <>
                <span>Comprar agora</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            ) : (
              <>
                <span>Agendar agora</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Badge de mais popular ou recomendado */}
      {therapy.id === 1 && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Mais Popular
          </div>
        </div>
      )}
      
      {therapy.id === 3 && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Mais Profundo
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TherapyCard;
