import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesDebug = () => {
  return (
    <>
      <Helmet>
        <title>Serviços - Raiz Energética</title>
        <meta name="description" content="Descubra nossa gama completa de terapias energéticas" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            Serviços - Página de Debug
          </h1>
          <p className="text-center text-gray-600 mt-4">
            Se você está vendo esta página, significa que o problema não é com as rotas básicas.
          </p>
          <div className="mt-8 bg-green-100 p-4 rounded-lg">
            <p className="text-green-800">✅ React está funcionando</p>
            <p className="text-green-800">✅ Helmet está funcionando</p>
            <p className="text-green-800">✅ Tailwind está funcionando</p>
            <p className="text-green-800">✅ A rota /servicos está funcionando</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDebug;
