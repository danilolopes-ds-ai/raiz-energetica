// API Route para receber webhooks do Cal.com
// Arquivo: /src/pages/api/calcom-webhook.js

import { CalcomAPI } from '../../lib/calcom.js';

export async function POST(request) {
  try {
    // Verificar se é uma requisição válida do Cal.com
    const webhookData = await request.json();
    
    console.log('📨 Webhook Cal.com recebido:', {
      event: webhookData.triggerEvent,
      bookingId: webhookData.payload?.id,
      timestamp: new Date().toISOString()
    });

    // Processar o webhook
    CalcomAPI.handleWebhook(webhookData);

    // Retornar sucesso
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Webhook processado com sucesso' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ Erro ao processar webhook Cal.com:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Método GET para teste
export async function GET() {
  return new Response(JSON.stringify({ 
    message: 'Webhook Cal.com está ativo',
    timestamp: new Date().toISOString()
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
