/**
 * Hook customizado para gerenciamento de depoimentos
 * Melhores práticas: Separação de lógica, cache, error handling
 */

import { useState, useEffect, useCallback, useMemo } from 'react';
import { validateTestimonial, sanitizeTestimonial } from './types';
import { DEMO_TESTIMONIALS, getServiceColor } from './testimonialData';

const CACHE_KEY = 'testimonials_cache';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

export const useTestimonials = ({
  serviceName = '',
  maxTestimonials = 8,
  propTestimonials = [],
  enableCache = true,
  enableValidation = true
}) => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);

  // Cache helpers
  const getCachedData = useCallback(() => {
    if (!enableCache) return null;
    
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (!cached) return null;
      
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp > CACHE_DURATION) {
        localStorage.removeItem(CACHE_KEY);
        return null;
      }
      
      return data;
    } catch (error) {
      console.warn('Erro ao ler cache de depoimentos:', error);
      return null;
    }
  }, [enableCache]);

  const setCachedData = useCallback((data) => {
    if (!enableCache) return;
    
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({
        data,
        timestamp: Date.now()
      }));
    } catch (error) {
      console.warn('Erro ao salvar cache de depoimentos:', error);
    }
  }, [enableCache]);

  // Validação e sanitização
  const processTestimonials = useCallback((rawTestimonials) => {
    const processed = [];
    const errors = [];

    rawTestimonials.forEach((testimonial, index) => {
      try {
        // Sanitizar primeiro
        const sanitized = sanitizeTestimonial(testimonial);
        
        // Validar se habilitado
        if (enableValidation) {
          const validation = validateTestimonial(sanitized);
          if (!validation.isValid) {
            errors.push({
              index,
              testimonial: sanitized,
              errors: validation.errors
            });
            return; // Pular este depoimento
          }
        }

        // Adicionar cores do serviço
        const withColors = {
          ...sanitized,
          ...getServiceColor(sanitized.service)
        };

        processed.push(withColors);
      } catch (error) {
        console.error(`Erro ao processar depoimento ${index}:`, error);
        errors.push({
          index,
          testimonial,
          errors: [error.message]
        });
      }
    });

    return { processed, errors };
  }, [enableValidation]);

  // Filtro por serviço
  const filterByService = useCallback((testimonials, service) => {
    if (!service) return testimonials;
    
    const filtered = testimonials.filter(t => 
      t.service === service || 
      t.service.toLowerCase().includes(service.toLowerCase())
    );
    
    // Se não encontrou nenhum para o serviço específico, retorna todos
    return filtered.length > 0 ? filtered : testimonials;
  }, []);

  // Embaralhar e limitar
  const shuffleAndLimit = useCallback((testimonials, max) => {
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, max);
  }, []);

  // Carregamento principal
  const loadTestimonials = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setValidationErrors([]);

    try {
      let rawTestimonials = [];

      // 1. Tentar usar dados passados via props
      if (propTestimonials && propTestimonials.length > 0) {
        rawTestimonials = propTestimonials;
      } 
      // 2. Tentar cache
      else {
        const cached = getCachedData();
        if (cached) {
          rawTestimonials = cached;
        }
        // 3. Tentar API/Supabase
        else {
          try {
            const { supabase } = await import('@/lib/supabase');
            const { data: items, error: supabaseError } = await supabase
              .from('testimonials')
              .select('*')
              .eq('status', 'Ativo')
              .order('created_at', { ascending: false });

            if (supabaseError) throw supabaseError;
            
            rawTestimonials = items || [];
            setCachedData(rawTestimonials);
          } catch (supabaseError) {
            console.warn('Supabase falhou, usando dados demo:', supabaseError);
            rawTestimonials = DEMO_TESTIMONIALS;
          }
        }
      }

      // Processar dados
      const { processed, errors } = processTestimonials(rawTestimonials);
      
      if (errors.length > 0) {
        setValidationErrors(errors);
        console.warn('Erros de validação encontrados:', errors);
      }

      // Filtrar por serviço
      const filtered = filterByService(processed, serviceName);
      
      // Embaralhar e limitar
      const final = shuffleAndLimit(filtered, maxTestimonials);
      
      setTestimonials(final);

    } catch (error) {
      console.error('Erro ao carregar depoimentos:', error);
      setError(error.message);
      
      // Fallback para dados demo
      const { processed } = processTestimonials(DEMO_TESTIMONIALS);
      const filtered = filterByService(processed, serviceName);
      const final = shuffleAndLimit(filtered, maxTestimonials);
      setTestimonials(final);
    } finally {
      setIsLoading(false);
    }
  }, [
    propTestimonials, 
    serviceName, 
    maxTestimonials, 
    getCachedData, 
    setCachedData, 
    processTestimonials, 
    filterByService, 
    shuffleAndLimit
  ]);

  // Métricas calculadas
  const metrics = useMemo(() => {
    const totalRating = testimonials.reduce((sum, t) => sum + t.rating, 0);
    const averageRating = testimonials.length > 0 ? totalRating / testimonials.length : 0;
    
    const serviceBreakdown = testimonials.reduce((acc, t) => {
      acc[t.service] = (acc[t.service] || 0) + 1;
      return acc;
    }, {});

    return {
      total: testimonials.length,
      averageRating: Math.round(averageRating * 10) / 10,
      serviceBreakdown,
      hasValidationErrors: validationErrors.length > 0
    };
  }, [testimonials, validationErrors]);

  // Carregar na inicialização
  useEffect(() => {
    loadTestimonials();
  }, [loadTestimonials]);

  // Métodos utilitários
  const refreshTestimonials = useCallback(() => {
    if (enableCache) {
      localStorage.removeItem(CACHE_KEY);
    }
    loadTestimonials();
  }, [loadTestimonials, enableCache]);

  const getTestimonialsByService = useCallback((service) => {
    return testimonials.filter(t => t.service === service);
  }, [testimonials]);

  return {
    // Estado
    testimonials,
    isLoading,
    error,
    validationErrors,
    
    // Métricas
    metrics,
    
    // Métodos
    refreshTestimonials,
    getTestimonialsByService,
    
    // Dados derivados
    hasTestimonials: testimonials.length > 0,
    isEmpty: !isLoading && testimonials.length === 0
  };
};
