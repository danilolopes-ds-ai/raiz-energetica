// Cal.com Webhook Handler
// Endpoint para receber eventos em tempo real do Cal.com

import { calcomAPI } from '../../../lib/calcom';
import { sendServerSideEvent } from '../../../lib/tracking';

export default async function handler(req, res) {
  // Apenas métodos POST são aceitos
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const webhookData = req.body;
    const { triggerEvent, payload } = webhookData;

    console.log('🔔 Cal.com Webhook recebido:', { triggerEvent, payload });

    // Verificar se é um evento válido
    if (!triggerEvent || !payload) {
      return res.status(400).json({ error: 'Invalid webhook data' });
    }

    // Processar o webhook através da API
    const processed = await calcomAPI.processWebhook(webhookData);

    if (!processed) {
      return res.status(400).json({ error: 'Failed to process webhook' });
    }

    // Enviar eventos específicos para Meta Pixel Conversions API
    await handleMetaPixelTracking(triggerEvent, payload);

    // Responder sucesso
    return res.status(200).json({ 
      success: true, 
      message: `Webhook ${triggerEvent} processado com sucesso`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Erro no webhook Cal.com:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
}

// Função auxiliar para tracking no Meta Pixel via Conversions API
async function handleMetaPixelTracking(triggerEvent, booking) {
  try {
    const userData = {
      email: booking.attendees?.[0]?.email,
      name: booking.attendees?.[0]?.name
    };

    const eventData = {
      content_name: booking.eventType?.title || 'Agendamento',
      content_type: 'booking',
      value: booking.eventType?.price || 0,
      currency: 'BRL'
    };

    switch (triggerEvent) {
      case 'BOOKING_CREATED':
        // Evento de Lead quando alguém agenda
        await sendServerSideEvent('Lead', eventData, userData);
        break;
        
      case 'BOOKING_CONFIRMED':
        // Evento de Purchase quando confirma
        await sendServerSideEvent('Purchase', {
          ...eventData,
          value: booking.eventType?.price || 100
        }, userData);
        break;
        
      case 'BOOKING_CANCELLED':
        // Opcional: tracking de cancelamento
        console.log('📊 Agendamento cancelado - tracking opcional');
        break;
        
      default:
        console.log('📊 Evento de webhook não mapeado para Meta Pixel:', triggerEvent);
    }
  } catch (error) {
    console.error('Erro no tracking Meta Pixel:', error);
  }
}
