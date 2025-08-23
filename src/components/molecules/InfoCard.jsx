import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Text from '@/components/atoms/Text';

const InfoCard = ({ icon: Icon, title, description, className }) => {
  return (
    <Card className={`card-hover h-full text-center bg-[#1b413a] border border-white/10 ${className}`}>
      <CardHeader>
        {Icon && (
          <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon className="w-8 h-8 text-white" />
          </div>
        )}
        <CardTitle className="text-xl text-[#99CD85]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text variant="body" className="text-gray-300">{description}</Text>
      </CardContent>
    </Card>
  );
};

export default InfoCard;