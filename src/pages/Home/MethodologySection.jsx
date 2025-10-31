import React from 'react';
import GridSection from '@/components/organisms/GridSection';
import InfoCard from '@/components/molecules/InfoCard';

import Text from '@/components/atoms/Text';

const MethodologySection = ({ methodology }) => {
  return (
    <div className="section-padding">
      <GridSection
        title="Como Funciona Nossa <span className='text-gradient'>Metodologia</span>"
        subtitle="Um processo sensível, científico e profundo para investigar as causas ocultas dos seus sintomas e tratá-las com precisão energética."
        items={methodology}
        renderItem={(item) => (
          <InfoCard 
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        )}
      >
        <div className="mt-12 text-center">
          <Text variant="h4" className="max-w-3xl mx-auto text-[#cc4e00]">
            Não é sobre silenciar o sintoma.<br/>
            <span className="text-[#4ca626] font-bold">É sobre escutar o que ele está tentando te dizer e curar de onde tudo começou.</span>
          </Text>
        </div>
      </GridSection>

    </div>
  );
};

export default MethodologySection;