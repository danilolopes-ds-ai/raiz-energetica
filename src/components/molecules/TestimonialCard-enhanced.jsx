import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Text from '@/components/atoms/Text';

const TestimonialCard = ({ identifier, text, featured = false }) => {
  return (
    <Card className={`card-hover h-full transition-all duration-300 ${featured ? 'ring-2 ring-primary/20 shadow-xl scale-105' : ''}`}>
      <CardContent className="p-6 flex flex-col h-full relative">
        {/* Quote Icon */}
        <div className="absolute -top-3 -left-3">
          <div className="bg-primary/10 p-2 rounded-full">
            <Quote className="h-4 w-4 text-primary" />
          </div>
        </div>
        
        {/* Stars */}
        <div className="flex gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Identifier */}
        <Text as="div" className="font-bold text-primary text-sm mb-3" dangerouslySetInnerHTML={{ __html: identifier }} />
        
        {/* Testimonial Text */}
        <Text 
          variant="body" 
          className="italic flex-grow text-gray-700 leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} 
        />
        
        {/* Verification Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Depoimento verificado</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
