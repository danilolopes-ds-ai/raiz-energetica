import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Text from '@/components/atoms/Text';

const TestimonialCard = ({ identifier, text }) => {
  return (
    <Card className="card-hover h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Text as="div" className="font-bold text-[#cc4e00]" dangerouslySetInnerHTML={{ __html: identifier }} />
        <Text variant="body" className="italic mt-4 flex-grow text-[#4ca626]" dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;