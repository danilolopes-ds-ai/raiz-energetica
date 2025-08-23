import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gigaqpzhaoiasxsdeyfm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZ2FxcHpoYW9pYXN4c2RleWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5ODA0NTAsImV4cCI6MjA2NjU1NjQ1MH0.dH-osTBJ6zQiR6sFMIyxqtULv-AyJ6WPswvWJIQnRAw';

async function setupBlogPosts() {
  console.log('🚀 Configurando posts do blog...');
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  // Posts de exemplo para inserir
  const examplePosts = [
    {
      title: 'Influência da Radiestesia Genética nos Padrões Cerebrais',
      excerpt: 'Estudo científico conduzido no Hospital Albert Einstein demonstra através de mapeamento cerebral as evidências objetivas dos efeitos da Radiestesia Genética nos padrões neurológicos.',
      content: 'Estudo científico conduzido no Hospital Albert Einstein demonstra como a técnica de Radiestesia Genética pode alterar padrões de atividade cerebral, promovendo bem-estar e equilíbrio energético. O mapeamento cerebral antes e depois do tratamento mostra alterações significativas nos padrões de ondas cerebrais, indicando maior equilíbrio e harmonia neurológica.',
      category: 'radiestesia-genetica',
      status: 'published',
      featured: true,
      image: '/images/services/mapeamento-cerebral-antes.webp',
      author: 'Dra. Patrícia Bortone',
      slug: 'influencia-radiestesia-genetica-padroes-cerebrais',
      read_time: '15 min',
      date: '2024-08-15T10:00:00Z'
    },
    {
      title: 'Transmissão Intergeracional de Trauma: Mecanismos Epigenéticos',
      excerpt: 'Revisão científica sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, fundamentando cientificamente as terapias de harmonização familiar.',
      content: 'Revisão científica abrangente sobre como traumas podem ser transmitidos entre gerações através de mecanismos epigenéticos, com implicações importantes para terapias de harmonização familiar. Estudos mostram que experiências traumáticas podem alterar a expressão gênica, sendo transmitidas para as próximas gerações.',
      category: 'epigenetica',
      status: 'published',
      featured: true,
      image: '/images/services/harmonia-geracional-conflito.webp',
      author: 'Rachel Yehuda et al.',
      slug: 'transmissao-intergeracional-trauma-epigenetica',
      read_time: '25 min',
      date: '2024-08-12T16:00:00Z'
    },
    {
      title: 'Energias Patogênicas: O Que São e Como Se Proteger',
      excerpt: 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar.',
      content: 'Aprenda a identificar e neutralizar energias negativas que podem estar afetando sua saúde e bem-estar. Este guia completo explica os tipos de energias patogênicas e métodos eficazes de proteção energética.',
      category: 'energia-patogenica',
      status: 'published',
      featured: false,
      image: '/images/services/limpeza-energetica.webp',
      author: 'Helena Raiz',
      slug: 'energias-patogenicas-protecao',
      read_time: '8 min',
      date: '2024-08-10T14:30:00Z'
    },
    {
      title: 'Cristais e Suas Propriedades Terapêuticas',
      excerpt: 'Descubra o poder dos cristais na harmonização energética e como utilizá-los de forma eficaz.',
      content: 'Descubra o poder dos cristais na harmonização energética e como utilizá-los de forma eficaz em seus tratamentos e no dia a dia. Cada cristal possui propriedades únicas que podem auxiliar no processo de cura e equilíbrio.',
      category: 'cristais',
      status: 'published',
      featured: false,
      image: '/images/services/cristais-terapeuticos.webp',
      author: 'Helena Raiz',
      slug: 'cristais-propriedades-terapeuticas',
      read_time: '6 min',
      date: '2024-08-08T09:15:00Z'
    },
    {
      title: 'Harmonização Familiar: Quebrando Padrões Ancestrais',
      excerpt: 'Como identificar e transformar padrões familiares limitantes transmitidos através das gerações.',
      content: 'Como identificar e transformar padrões familiares limitantes que são transmitidos através das gerações, promovendo cura e libertação. A harmonização familiar trabalha com a energia sistêmica da família.',
      category: 'constelacao-familiar',
      status: 'published',
      featured: false,
      image: '/images/services/harmonia-geracional-reconexao.webp',
      author: 'Helena Raiz',
      slug: 'harmonizacao-familiar-padroes-ancestrais',
      read_time: '12 min',
      date: '2024-08-05T16:45:00Z'
    }
  ];

  try {
    console.log('📝 Tentando inserir posts...');
    
    // Tentar inserir os posts
    const { data, error } = await supabase
      .from('posts')
      .insert(examplePosts)
      .select();

    if (error) {
      console.error('❌ Erro ao inserir posts:', error.message);
      console.log('🔍 Detalhes do erro:', error);
      
      // Se der erro de tabela não existe, vamos tentar criar via SQL
      if (error.message.includes('relation "posts" does not exist')) {
        console.log('🛠️  Tabela posts não existe. Tentando criar...');
        
        const createTableSQL = `
          CREATE TABLE IF NOT EXISTS posts (
            id BIGSERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            excerpt TEXT,
            content TEXT,
            category TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'published',
            featured BOOLEAN DEFAULT false,
            image TEXT,
            author TEXT DEFAULT 'Helena Raiz',
            slug TEXT UNIQUE,
            read_time TEXT DEFAULT '5 min',
            created_at TIMESTAMPTZ DEFAULT NOW(),
            updated_at TIMESTAMPTZ DEFAULT NOW(),
            date TIMESTAMPTZ DEFAULT NOW()
          );
        `;
        
        const { data: createData, error: createError } = await supabase
          .rpc('exec_sql', { sql: createTableSQL });
          
        if (createError) {
          console.error('❌ Erro ao criar tabela:', createError);
        } else {
          console.log('✅ Tabela criada! Tentando inserir posts novamente...');
          
          // Tentar inserir novamente
          const { data: insertData, error: insertError } = await supabase
            .from('posts')
            .insert(examplePosts)
            .select();
            
          if (insertError) {
            console.error('❌ Erro ao inserir posts após criar tabela:', insertError);
          } else {
            console.log('✅ Posts inseridos com sucesso!');
            console.log('📊 Posts criados:', insertData?.length || 0);
          }
        }
      }
    } else {
      console.log('✅ Posts inseridos com sucesso!');
      console.log('📊 Posts criados:', data?.length || 0);
    }

    // Verificar posts existentes
    console.log('🔍 Verificando posts existentes...');
    const { data: existingPosts, error: fetchError } = await supabase
      .from('posts')
      .select('id, title, status')
      .order('created_at', { ascending: false });

    if (fetchError) {
      console.error('❌ Erro ao buscar posts:', fetchError);
    } else {
      console.log('📋 Posts encontrados:', existingPosts?.length || 0);
      existingPosts?.forEach(post => {
        console.log(`   • ${post.title} (${post.status})`);
      });
    }

  } catch (error) {
    console.error('💥 Erro geral:', error);
  }
}

setupBlogPosts();
