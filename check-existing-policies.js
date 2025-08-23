import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDkwNjg1MywiZXhwIjoyMDUwNDgyODUzfQ.5K8Pz4oFKQ_8LGaK-T5Gm5Ye1OzN2YtCTLXzJ2oTCzM'

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

async function checkExistingPolicies() {
  try {
    console.log('🔍 Verificando políticas RLS existentes...\n')
    
    // Consultar políticas existentes
    const { data, error } = await supabase.rpc('sql', {
      query: `
        SELECT 
            tablename,
            policyname,
            cmd,
            permissive,
            qual,
            with_check
        FROM pg_policies 
        WHERE schemaname = 'public' 
        ORDER BY tablename, policyname;
      `
    })

    if (error) {
      console.error('❌ Erro ao consultar políticas:', error)
      return
    }

    if (!data || data.length === 0) {
      console.log('📋 Nenhuma política RLS encontrada. Todas precisam ser criadas.')
      return
    }

    console.log('📋 Políticas RLS existentes:')
    console.log('=' .repeat(80))
    
    const groupedPolicies = {}
    data.forEach(policy => {
      if (!groupedPolicies[policy.tablename]) {
        groupedPolicies[policy.tablename] = []
      }
      groupedPolicies[policy.tablename].push(policy)
    })

    Object.keys(groupedPolicies).forEach(tablename => {
      console.log(`\n🔒 Tabela: ${tablename}`)
      groupedPolicies[tablename].forEach(policy => {
        console.log(`   ✅ ${policy.policyname} (${policy.cmd})`)
      })
    })

    console.log('\n' + '=' .repeat(80))
    console.log(`📊 Total: ${data.length} políticas encontradas`)

  } catch (error) {
    console.error('❌ Erro inesperado:', error)
  }
}

checkExistingPolicies()
