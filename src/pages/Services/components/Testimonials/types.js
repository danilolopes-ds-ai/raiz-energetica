/**
 * Tipos e interfaces para sistema de depoimentos
 * Melhores práticas: Tipagem clara e validação
 */

// Schema básico para validação de depoimentos
export const TESTIMONIAL_SCHEMA = {
  id: { type: 'number|string', required: true },
  service: { type: 'string', required: true },
  text: { type: 'string', required: true, minLength: 20, maxLength: 500 },
  name: { type: 'string', required: true, minLength: 2 },
  age: { type: 'number', required: false, min: 18, max: 100 },
  location: { type: 'string', required: false },
  rating: { type: 'number', required: true, min: 1, max: 5 },
  avatar: { type: 'string', required: false },
  date: { type: 'string', required: true },
  highlight: { type: 'string', required: false },
  verified: { type: 'boolean', required: false, default: false },
  featured: { type: 'boolean', required: false, default: false }
};

// Validador de depoimento
export const validateTestimonial = (testimonial) => {
  const errors = [];
  
  Object.entries(TESTIMONIAL_SCHEMA).forEach(([field, rules]) => {
    const value = testimonial[field];
    
    // Verificar campos obrigatórios
    if (rules.required && (value === undefined || value === null || value === '')) {
      errors.push(`Campo '${field}' é obrigatório`);
      return;
    }
    
    // Se campo é opcional e vazio, pular validação
    if (!rules.required && (value === undefined || value === null || value === '')) {
      return;
    }
    
    // Validar tipo
    if (rules.type.includes('|')) {
      const validTypes = rules.type.split('|');
      if (!validTypes.some(type => typeof value === type)) {
        errors.push(`Campo '${field}' deve ser do tipo: ${rules.type}`);
      }
    } else if (typeof value !== rules.type) {
      errors.push(`Campo '${field}' deve ser do tipo ${rules.type}`);
    }
    
    // Validar string
    if (rules.type === 'string' && typeof value === 'string') {
      if (rules.minLength && value.length < rules.minLength) {
        errors.push(`Campo '${field}' deve ter pelo menos ${rules.minLength} caracteres`);
      }
      if (rules.maxLength && value.length > rules.maxLength) {
        errors.push(`Campo '${field}' deve ter no máximo ${rules.maxLength} caracteres`);
      }
    }
    
    // Validar número
    if (rules.type === 'number' && typeof value === 'number') {
      if (rules.min && value < rules.min) {
        errors.push(`Campo '${field}' deve ser maior que ${rules.min}`);
      }
      if (rules.max && value > rules.max) {
        errors.push(`Campo '${field}' deve ser menor que ${rules.max}`);
      }
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Sanitizador de dados
export const sanitizeTestimonial = (testimonial) => {
  const sanitized = { ...testimonial };
  
  // Limpar e normalizar texto
  if (sanitized.text) {
    sanitized.text = sanitized.text.trim();
  }
  
  // Normalizar nome
  if (sanitized.name) {
    sanitized.name = sanitized.name.trim();
  }
  
  // Garantir rating válido
  if (sanitized.rating) {
    sanitized.rating = Math.max(1, Math.min(5, Math.round(sanitized.rating)));
  }
  
  // Aplicar defaults
  Object.entries(TESTIMONIAL_SCHEMA).forEach(([field, rules]) => {
    if (rules.default !== undefined && (sanitized[field] === undefined || sanitized[field] === null)) {
      sanitized[field] = rules.default;
    }
  });
  
  return sanitized;
};

// Status de moderação
export const MODERATION_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  FLAGGED: 'flagged'
};

// Fonte do depoimento
export const TESTIMONIAL_SOURCE = {
  MANUAL: 'manual',
  IMPORT: 'import',
  API: 'api',
  FORM: 'form'
};
