import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TestimonialNavigation = ({ 
  onPrev = () => {}, 
  onNext = () => {}, 
  isBeginning = false, 
  isEnd = false 
}) => {
  return (
    <div className="relative mb-12 md:mb-16 mt-12">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Quando a <span className="text-gradient">cura</span> começa pela{' '}
          <span className="text-gradient">raiz</span>, o resultado{' '}
          <span className="text-gradient">transforma</span>
        </h2>
      </div>
      
      {/* Botões de navegação */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={onPrev}
          disabled={isBeginning}
          className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
            isBeginning
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-pink-600 hover:bg-pink-50 dark:text-pink-400 dark:hover:bg-pink-900/30'
          }`}
          aria-label="Depoimento anterior"
          aria-disabled={isBeginning}
        >
          <ChevronLeftIcon className="w-8 h-8" />
        </button>
        
        <button
          onClick={onNext}
          disabled={isEnd}
          className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 ${
            isEnd
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-pink-600 hover:bg-pink-50 dark:text-pink-400 dark:hover:bg-pink-900/30'
          }`}
          aria-label="Próximo depoimento"
          aria-disabled={isEnd}
        >
          <ChevronRightIcon className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

TestimonialNavigation.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  isBeginning: PropTypes.bool,
  isEnd: PropTypes.bool,
  serviceName: PropTypes.string
};

export default React.memo(TestimonialNavigation);
