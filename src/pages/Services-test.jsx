import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Serviços - Raiz Energética</title>
        <meta name="description" content="Descubra nossa gama completa de terapias energéticas" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Serviços - Teste Básico
          </h1>
          <p className="text-center text-gray-600 mt-4">
            Se você vê esta página, o problema está nos componentes Services específicos.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
