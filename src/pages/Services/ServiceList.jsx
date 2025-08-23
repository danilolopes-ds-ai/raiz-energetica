import React from 'react';
import ServiceCard from '@/pages/Services/ServiceCard';

const ServiceList = ({ services }) => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;