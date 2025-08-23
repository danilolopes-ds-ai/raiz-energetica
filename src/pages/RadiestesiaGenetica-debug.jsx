import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const RadiestesiaGeneticaDebug = () => {
  return (
    <div className="bg-white font-sans text-slate-800 min-h-screen">
      <Helmet>
        <title>Radiestesia Genética - Debug</title>
      </Helmet>
      
      <header className="bg-amber-100 p-4">
        <h1 className="text-2xl font-bold text-amber-800">
          Radiestesia Genética - Página Debug
        </h1>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Se você vê esta página, o problema não está no React básico
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            O problema pode estar nos componentes landing-components ou no CSS
          </p>
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-green-800">✅ React funcionando</p>
            <p className="text-green-800">✅ Helmet funcionando</p>
            <p className="text-green-800">✅ Tailwind funcionando</p>
            <p className="text-green-800">✅ Componentes UI funcionando</p>
          </div>
          <Button className="mt-8 bg-amber-600 hover:bg-amber-700 text-white">
            Botão de Teste
          </Button>
        </div>
      </main>
    </div>
  );
};

export default RadiestesiaGeneticaDebug;
