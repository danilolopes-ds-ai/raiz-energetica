import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ 
  items, 
  renderItem, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  className = "",
  itemsPerView = 1,
  arrowClassName = "",
  dotActiveColor = "bg-indigo-600",
  dotInactiveColor = "bg-gray-300 hover:bg-gray-400",
  progressBarColor = "bg-indigo-600"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Calcular total de slides baseado nos itens por visualização
  const totalSlides = Math.ceil(items.length / itemsPerView);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, currentIndex]);

  // Pause on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(autoPlay);

  // Get items for current view
  const getCurrentItems = () => {
    const start = currentIndex * itemsPerView;
    return items.slice(start, start + itemsPerView);
  };

  return (
    <div 
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main carousel container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`grid gap-6 ${
              itemsPerView === 1 ? 'grid-cols-1' :
              itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' :
              itemsPerView === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
              `grid-cols-${itemsPerView}`
            }`}
          >
            {getCurrentItems().map((item, index) => (
              <div key={currentIndex * itemsPerView + index}>
                {renderItem(item, currentIndex * itemsPerView + index)}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10 ${arrowClassName}`}
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 z-10 ${arrowClassName}`}
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && totalSlides > 1 && (
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? `${dotActiveColor} scale-110`
                  : dotInactiveColor
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress bar */}
      {isPlaying && (
        <div className="w-full h-1 bg-gray-200 mt-4">
          <motion.div
            className={`h-full ${progressBarColor}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
