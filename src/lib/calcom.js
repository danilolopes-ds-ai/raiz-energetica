// Cal.com API Integration
// Gerenciamento de agendamentos e tracking avançado

const CALCOM_API_KEY = import.meta.env.VITE_CALCOM_API_KEY;
const CALCOM_USERNAME = import.meta.env.VITE_CALCOM_USERNAME;
const CALCOM_BASE_URL = 'https://api.cal.com/v1';

// Headers padrão para todas as requisições
const getHeaders = () => ({
  'Authorization': `Bearer ${CALCOM_API_KEY}`,
  'Content-Type': 'application/json',
});

// Cal.com API Client
export const calcomAPI = {
  // 1. LISTAR AGENDAMENTOS
  async getBookings(params = {}) {
    if (!CALCOM_API_KEY) {
      console.warn('Cal.com API key não configurada');
      return { bookings: [], total: 0 };
    }

    try {
      const queryParams = new URLSearchParams({
        limit: 50,
        ...params
      });

      const response = await fetch(`${CALCOM_BASE_URL}/bookings?${queryParams}`, {
        headers: getHeaders(),
      });

      if (!response.ok) {
        throw new Error(`Cal.com API Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
      return { bookings: [], total: 0 };
    }
  },

  // 2. OBTER AGENDAMENTO ESPECÍFICO
  async getBooking(bookingId) {
    if (!CALCOM_API_KEY) return null;

    try {
      const response = await fetch(`${CALCOM_BASE_URL}/bookings/${bookingId}`, {
        headers: getHeaders(),
      });

      if (!response.ok) return null;
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar agendamento:', error);
      return null;
    }
  },

  // 3. LISTAR TIPOS DE EVENTOS (SERVIÇOS)
  async getEventTypes() {
    if (!CALCOM_API_KEY) return [];

    try {
      const response = await fetch(`${CALCOM_BASE_URL}/event-types`, {
        headers: getHeaders(),
      });

      if (!response.ok) return [];
      const data = await response.json();
      return data.event_types || [];
    } catch (error) {
      console.error('Erro ao buscar tipos de eventos:', error);
      return [];
    }
  },

  // 4. ESTATÍSTICAS DE AGENDAMENTOS
  async getBookingStats(days = 30) {
    const bookings = await this.getBookings({
      limit: 1000,
      afterDate: new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
    });

    const stats = {
      total: bookings.bookings?.length || 0,
      confirmed: 0,
      cancelled: 0,
      pending: 0,
      byService: {},
      byMonth: {},
      revenue: 0
    };

    bookings.bookings?.forEach(booking => {
      // Status
      if (booking.status === 'ACCEPTED') stats.confirmed++;
      else if (booking.status === 'CANCELLED') stats.cancelled++;
      else stats.pending++;

      // Por serviço
      const serviceName = booking.eventType?.title || 'Desconhecido';
      stats.byService[serviceName] = (stats.byService[serviceName] || 0) + 1;

      // Por mês
      const month = new Date(booking.startTime).toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
      stats.byMonth[month] = (stats.byMonth[month] || 0) + 1;

      // Revenue (se tiver preço no evento)
      if (booking.eventType?.price) {
        stats.revenue += booking.eventType.price;
      }
    });

    return stats;
  },

  // 5. WEBHOOKS - Processa eventos do Cal.com
  async processWebhook(webhookData) {
    const { triggerEvent, payload } = webhookData;

    switch (triggerEvent) {
      case 'BOOKING_CREATED':
        return await this.handleBookingCreated(payload);
      case 'BOOKING_CONFIRMED':
        return await this.handleBookingConfirmed(payload);
      case 'BOOKING_CANCELLED':
        return await this.handleBookingCancelled(payload);
      case 'BOOKING_RESCHEDULED':
        return await this.handleBookingRescheduled(payload);
      default:
        console.log('Evento de webhook não tratado:', triggerEvent);
        return false;
    }
  },

  // 6. HANDLERS PARA EVENTOS DE WEBHOOK
  async handleBookingCreated(booking) {
    console.log('🎯 Novo agendamento criado:', booking);
    
    // Enviar evento para Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Schedule', {
        content_name: booking.eventType?.title || 'Agendamento',
        value: booking.eventType?.price || 0,
        currency: 'BRL'
      });
    }

    // Enviar para Google Analytics
    if (window.gtag) {
      window.gtag('event', 'schedule_appointment', {
        service_type: booking.eventType?.title,
        value: booking.eventType?.price || 0,
        currency: 'BRL'
      });
    }

    return true;
  },

  async handleBookingConfirmed(booking) {
    console.log('✅ Agendamento confirmado:', booking);
    
    // Tracking de conversão confirmada
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        content_name: booking.eventType?.title || 'Serviço Confirmado',
        value: booking.eventType?.price || 100,
        currency: 'BRL'
      });
    }

    return true;
  },

  async handleBookingCancelled(booking) {
    console.log('❌ Agendamento cancelado:', booking);
    
    // Tracking de cancelamento
    if (window.gtag) {
      window.gtag('event', 'cancel_appointment', {
        service_type: booking.eventType?.title,
        reason: 'user_cancelled'
      });
    }

    return true;
  },

  async handleBookingRescheduled(booking) {
    console.log('🔄 Agendamento reagendado:', booking);
    
    // Tracking de reagendamento
    if (window.gtag) {
      window.gtag('event', 'reschedule_appointment', {
        service_type: booking.eventType?.title
      });
    }

    return true;
  }
};

// Hook React para usar a API do Cal.com
export const useCalcom = () => {
  return {
    api: calcomAPI,
    isConfigured: !!CALCOM_API_KEY
  };
};

// Utilitários
export const calcomUtils = {
  // Formatar data de agendamento
  formatBookingDate(dateString) {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  },

  // Calcular duração em minutos
  getBookingDuration(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    return Math.round((end - start) / (1000 * 60));
  },

  // Status em português
  translateStatus(status) {
    const statusMap = {
      'ACCEPTED': 'Confirmado',
      'PENDING': 'Pendente',
      'CANCELLED': 'Cancelado',
      'REJECTED': 'Rejeitado'
    };
    return statusMap[status] || status;
  },

  // Cor do status
  getStatusColor(status) {
    const colorMap = {
      'ACCEPTED': 'green',
      'PENDING': 'yellow',
      'CANCELLED': 'red',
      'REJECTED': 'gray'
    };
    return colorMap[status] || 'gray';
  }
};

  // Buscar estatísticas de agendamentos
  async getBookingStats(startDate, endDate) {
    const { bookings, error } = await this.getBookings({
      startTime: startDate?.toISOString(),
      endTime: endDate?.toISOString()
    });

    if (error) return { stats: null, error };

    // Calcular estatísticas
    const stats = {
      total: bookings.length,
      confirmed: bookings.filter(b => b.status === 'ACCEPTED').length,
      cancelled: bookings.filter(b => b.status === 'CANCELLED').length,
      pending: bookings.filter(b => b.status === 'PENDING').length,
      revenue: bookings
        .filter(b => b.status === 'ACCEPTED')
        .reduce((sum, b) => sum + (b.eventType?.price || 0), 0),
      byService: this.groupBookingsByService(bookings),
      byDay: this.groupBookingsByDay(bookings)
    };

    return { stats, error: null };
  }

  // Agrupar agendamentos por serviço
  groupBookingsByService(bookings) {
    const grouped = {};
    bookings.forEach(booking => {
      const service = booking.eventType?.title || 'Serviço Desconhecido';
      if (!grouped[service]) {
        grouped[service] = { count: 0, revenue: 0 };
      }
      grouped[service].count++;
      if (booking.status === 'ACCEPTED') {
        grouped[service].revenue += booking.eventType?.price || 0;
      }
    });
    return grouped;
  }

  // Agrupar agendamentos por dia
  groupBookingsByDay(bookings) {
    const grouped = {};
    bookings.forEach(booking => {
      const date = new Date(booking.startTime).toISOString().split('T')[0];
      if (!grouped[date]) {
        grouped[date] = 0;
      }
      if (booking.status === 'ACCEPTED') {
        grouped[date]++;
      }
    });
    return grouped;
  }

  // Buscar tipos de eventos/serviços
  async getEventTypes() {
    if (!this.isConfigured()) {
      return { eventTypes: [], error: 'API not configured' };
    }

    try {
      const response = await fetch(`${CALCOM_BASE_URL}/event-types`, {
        headers: this.headers
      });

      if (!response.ok) {
        throw new Error(`Cal.com API Error: ${response.status}`);
      }

      const data = await response.json();
      return { eventTypes: data.event_types || [], error: null };
    } catch (error) {
      console.error('Erro ao buscar tipos de eventos:', error);
      return { eventTypes: [], error: error.message };
    }
  }

  // Webhook handler para receber agendamentos em tempo real
  static handleWebhook(webhookData) {
    const { triggerEvent, payload } = webhookData;
    
    switch (triggerEvent) {
      case 'BOOKING_CREATED':
        return this.onBookingCreated(payload);
      case 'BOOKING_CONFIRMED':
        return this.onBookingConfirmed(payload);
      case 'BOOKING_CANCELLED':
        return this.onBookingCancelled(payload);
      case 'BOOKING_RESCHEDULED':
        return this.onBookingRescheduled(payload);
      default:
        console.log('Webhook event não tratado:', triggerEvent);
    }
  }

  // Eventos do webhook
  static onBookingCreated(booking) {
    console.log('📅 Novo agendamento criado:', booking);
    
    // Trigger tracking events
    if (typeof window !== 'undefined') {
      import('./tracking.js').then(({ trackEvent, sendServerSideEvent }) => {
        // Client-side tracking
        trackEvent.scheduleAppointment(
          booking.eventType?.title || 'Agendamento',
          booking.eventType?.price || 0
        );

        // Server-side tracking
        sendServerSideEvent('Lead', {
          content_name: booking.eventType?.title || 'Agendamento',
          content_type: 'booking',
          value: booking.eventType?.price || 100,
          currency: 'BRL'
        }, {
          email: booking.attendees?.[0]?.email
        });
      });
    }
  }

  static onBookingConfirmed(booking) {
    console.log('✅ Agendamento confirmado:', booking);
    
    // Trigger purchase event
    if (typeof window !== 'undefined') {
      import('./tracking.js').then(({ trackEvent, sendServerSideEvent }) => {
        trackEvent.purchase(
          booking.eventType?.title || 'Serviço Confirmado',
          booking.eventType?.price || 0
        );

        sendServerSideEvent('Purchase', {
          content_name: booking.eventType?.title || 'Serviço',
          content_type: 'service',
          value: booking.eventType?.price || 150,
          currency: 'BRL'
        }, {
          email: booking.attendees?.[0]?.email
        });
      });
    }
  }

  static onBookingCancelled(booking) {
    console.log('❌ Agendamento cancelado:', booking);
    // Aqui você pode implementar lógica para cancelamentos
  }

  static onBookingRescheduled(booking) {
    console.log('🔄 Agendamento reagendado:', booking);
    // Aqui você pode implementar lógica para reagendamentos
  }
}

// Instância global da API
export const calcomAPI = new CalcomAPI();

// Hook para componentes React
export const useCalcom = () => {
  return {
    api: calcomAPI,
    getBookings: calcomAPI.getBookings.bind(calcomAPI),
    getStats: calcomAPI.getBookingStats.bind(calcomAPI),
    getEventTypes: calcomAPI.getEventTypes.bind(calcomAPI),
    isConfigured: calcomAPI.isConfigured()
  };
};

export default calcomAPI;
