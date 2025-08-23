import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Activity, Sparkles, Dna, Hand as HeartHand } from 'lucide-react';

const iconMap = {
  Activity,
  Sparkles,
  Dna,
  HeartHand,
};

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('order_index', { ascending: true });

        if (error) {
          throw error;
        }

        const processedData = data.map(service => {
          // Mapeia o ícone de string para o componente real
          const iconComponent = iconMap[service.icon] || Activity;
          
          // Atualizações de descrição específicas
          let updatedDescription = service.description;
          if (service.title === 'Desvendando a Raiz') {
            updatedDescription = 'Mapeie padrões ocultos, descubra os bloqueios reais que travam sua vida e receba um plano de ação para sua transformação.';
          } else if (service.title === 'Radiestesia Genética') {
            updatedDescription = 'Acesse o DNA energético da sua linhagem e trate padrões invisíveis que silenciosamente moldam sua saúde, seus relacionamentos e sua prosperidade.';
          } else if (service.title === 'Harmonia Geracional') {
            updatedDescription = '💞 Reduza conflitos, aproxime corações e reestabeleça a harmonia entre mãe e filho(a) sem confronto ou desgaste.';
          }

          return { 
            ...service, 
            icon: iconComponent, 
            description: updatedDescription 
          };
        });

        setServices(processedData);
      } catch (err) {
        setError(err.message);
        console.error("Erro ao buscar serviços do Supabase:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};
