import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabaseUrl = 'https://dzaarqxffsromlbndeme.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5MTYxMDksImV4cCI6MjA3MTQ5MjEwOX0.bFV_JRPhcg1r8DQpVgBKIKFZDigHuJu85PMUKjMxcFg';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function enableUpdatePolicies() {
  console.log('🔧 Habilitando políticas de UPDATE para posts...\n');

  // Lê o SQL
  const sql = fs.readFileSync('./enable-update-posts.sql', 'utf8');
  
  // Divide em comandos individuais (cada DROP/CREATE é executado separadamente)
  const commands = sql
    .split(';')
    .map(cmd => cmd.trim())
    .filter(cmd => cmd.length > 0 && !cmd.startsWith('--'));

  console.log(`📋 Encontrados ${commands.length} comandos SQL\n`);

  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    console.log(`\n[${i + 1}/${commands.length}] Executando:`);
    console.log(cmd.substring(0, 100) + '...');
    
    try {
      const { data, error } = await supabase.rpc('exec_sql', { sql_query: cmd });
      
      if (error) {
        console.error('❌ Erro:', error.message);
      } else {
        console.log('✅ Sucesso!');
      }
    } catch (err) {
      console.error('❌ Erro ao executar:', err.message);
    }
  }

  console.log('\n✅ Processo finalizado!');
  console.log('\n🔑 Agora tente fazer UPDATE novamente no admin.\n');
}

enableUpdatePolicies();
