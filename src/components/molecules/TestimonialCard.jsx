import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Text from '@/components/atoms/Text';

const TestimonialCard = ({ identifier, text, rating = 5 }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Card className="h-full bg-white border-l-4 border-l-[#4ca626] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header limpo com estrelas */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
          <Quote className="w-6 h-6 text-[#4ca626]/40" />
        </div>

        {/* Identificação do cliente */}
        <Text 
          as="div" 
          className="font-bold text-[#cc4e00] mb-4 text-lg" 
          dangerouslySetInnerHTML={{ __html: identifier }} 
        />

        {/* Depoimento */}
        <div className="flex-grow">
          <Text 
            variant="body" 
            className="text-gray-700 leading-relaxed italic" 
            dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br /><br />') }} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;