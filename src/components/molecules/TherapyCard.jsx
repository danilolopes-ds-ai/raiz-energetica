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
        className={`${therapy.bgColor} rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg relative w-full`}
      >
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4 sm:mb-6">
            <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${therapy.color} text-white shadow-lg`}>
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div className="text-right">
              <div className="text-base sm:text-lg font-bold text-gray-900">3 Opções</div>
              <div className="text-xs sm:text-sm text-gray-600">Escolha o ideal</div>
            </div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{therapy.title}</h3>
          <p className="text-base sm:text-lg font-medium text-gray-700 mb-3 sm:mb-4">{therapy.subtitle}</p>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{therapy.description}</p>
          
          <div className="space-y-3 sm:space-y-4">
            {therapy.subOptions.map((option) => (
              <div 
                key={option.id}
                onClick={() => onSelect(option)}
                className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-[#2D8C5C] hover:bg-white transition-all cursor-pointer group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{option.title}</h4>
                  <span className="text-base sm:text-lg font-bold text-[#2D8C5C]">{option.price}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">{option.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{option.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[#2D8C5C] text-xs sm:text-sm group-hover:text-[#245A4A]">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
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
      className={`${therapy.bgColor} rounded-xl sm:rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg cursor-pointer group hover:scale-[1.02] relative w-full`}
      onClick={handleClick}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${therapy.color} text-white shadow-lg`}>
            <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="text-right">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{therapy.price}</div>
            <div className="text-xs sm:text-sm text-gray-600 flex items-center justify-end space-x-1">
              <Clock className="w-3 h-3" />
              <span>{therapy.duration}</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{therapy.title}</h3>
        <p className="text-base sm:text-lg font-medium text-gray-700 mb-3 sm:mb-4">{therapy.subtitle}</p>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{therapy.description}</p>
        
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {therapy.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${therapy.color}`}></div>
              <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {therapy.isKiwifyProduct ? (
          <div className="space-y-3 sm:space-y-4">
            <div className="text-xs sm:text-sm text-gray-600 text-center">
              <span className="font-medium">{therapy.delivery}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(therapy.kiwifyUrl, '_blank');
              }}
              className={`w-full bg-gradient-to-r ${therapy.color} text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 text-sm sm:text-base`}
            >
              <span>💳</span>
              <span>Comprar Agora</span>
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="text-xs sm:text-sm text-gray-600">
              <span className="font-medium">{therapy.delivery}</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2 text-[#2D8C5C] font-medium group-hover:text-[#245A4A] transition-colors text-sm sm:text-base">
              <span>Agendar agora</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        )}
      </div>
      
      {/* Badge de mais popular ou recomendado */}
      {therapy.id === 1 && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Mais Popular
          </div>
        </div>
      )}
      
      {therapy.id === 3 && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Mais Profundo
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TherapyCard;
