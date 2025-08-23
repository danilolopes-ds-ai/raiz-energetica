import { createClient } from '@supabase/supabase-js'

// Configuração do Supabase
const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  console.log('🔄 Testando conexão com o Supabase...')
  
  try {
    // Teste básico de conexão
    const { data, error } = await supabase
      .from('_health_check')
      .select('*')
      .limit(1)
    
    if (error && error.code !== 'PGRST116') {
      throw error
    }
    
    console.log('✅ Conexão com Supabase funcionando!')
    
    // Verificar tabelas existentes
    const { data: tables, error: tablesError } = await supabase
      .rpc('get_schema_tables')
      .select()
    
    if (!tablesError) {
      console.log('📋 Tabelas encontradas:', tables)
    }
    
    return true
  } catch (error) {
    console.log('❌ Erro na conexão:', error.message)
    return false
  }
}

// Executar teste
testConnection()
