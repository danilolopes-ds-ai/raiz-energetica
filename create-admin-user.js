// ============================================================================
// SCRIPT PARA CRIAR USUÁRIO ADMINISTRATIVO
// Execute este arquivo para criar o usuário admin diretamente no Supabase
// ============================================================================

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseServiceKey = 'SUA_SERVICE_ROLE_KEY_AQUI'; // Precisa da Service Role Key

const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function createAdminUser() {
  try {
    console.log('Criando usuário administrativo...');
    
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email: 'raizenergetica@gmail.com',
      password: 'SuaSenhaAqui123!',
      email_confirm: true // Confirma o email automaticamente
    });

    if (error) {
      console.error('Erro ao criar usuário:', error);
      return;
    }

    console.log('✅ Usuário criado com sucesso!');
    console.log('📧 Email:', data.user.email);
    console.log('🆔 ID:', data.user.id);
    console.log('✅ Email confirmado automaticamente');
    
    console.log('\n🚀 Agora você pode fazer login com:');
    console.log('📧 Email: raizenergetica@gmail.com');
    console.log('🔑 Senha: SuaSenhaAqui123!');
    
  } catch (error) {
    console.error('Erro geral:', error);
  }
}

// Executar função
createAdminUser();
