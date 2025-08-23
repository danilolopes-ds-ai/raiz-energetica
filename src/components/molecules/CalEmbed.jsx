import React from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";

const CalEmbed = ({ calLink }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({});
        cal("ui", {
          "styles": {
            "branding": {
              "brandColor": "#2D8C5C"
            }
          },
          "hideEventTypeDetails": false,
          "layout": "month_view",
          "theme": "auto"
        });
        
        // Aguarda um pouco para garantir que o Cal.com carregou
        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.error('Erro ao carregar Cal.com:', error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="relative w-full h-full min-h-[600px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D8C5C] mx-auto"></div>
            <p className="text-gray-600 font-medium">Carregando agendamento...</p>
          </div>
        </div>
      )}
      <Cal 
        calLink={calLink} 
        style={{
          width: "100%",
          height: "100%",
          overflow: "scroll",
          minHeight: "600px"
        }} 
      />
    </div>
  );
};

export default CalEmbed;