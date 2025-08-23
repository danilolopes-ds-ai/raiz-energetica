-- ============================================================================
-- CRIAÇÃO DO SCHEMA COMPLETO DO BANCO DE DADOS
-- Raiz Energética - Estrutura de Tabelas, Índices e Triggers
-- Execute PRIMEIRO este arquivo
-- ============================================================================

-- ============================================================================
-- TABELA: blog_categories
-- ============================================================================
CREATE TABLE IF NOT EXISTS blog_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    slug VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- TABELA: blog_posts
-- ============================================================================
CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image_url TEXT,
    category_id INTEGER REFERENCES blog_categories(id) ON DELETE SET NULL,
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    meta_title VARCHAR(255),
    meta_description TEXT,
    tags TEXT[],
    reading_time INTEGER DEFAULT 0,
    views_count INTEGER DEFAULT 0,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- TABELA: contacts
-- ============================================================================
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    message TEXT NOT NULL,
    source VARCHAR(100) DEFAULT 'website',
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'archived')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- TABELA: diagnosticos
-- ============================================================================
CREATE TABLE IF NOT EXISTS diagnosticos (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    birth_date DATE,
    questions JSONB NOT NULL,
    results JSONB,
    pdf_url TEXT,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled')),
    payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- CRIAÇÃO DE ÍNDICES PARA PERFORMANCE
-- ============================================================================

-- Índices para blog_posts
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Índices para blog_categories
CREATE INDEX IF NOT EXISTS idx_blog_categories_slug ON blog_categories(slug);

-- Índices para contacts
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Índices para diagnosticos
CREATE INDEX IF NOT EXISTS idx_diagnosticos_email ON diagnosticos(email);
CREATE INDEX IF NOT EXISTS idx_diagnosticos_status ON diagnosticos(status);
CREATE INDEX IF NOT EXISTS idx_diagnosticos_created_at ON diagnosticos(created_at);

-- ============================================================================
-- FUNÇÕES E TRIGGERS PARA updated_at
-- ============================================================================

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para todas as tabelas
CREATE TRIGGER update_blog_categories_updated_at 
    BEFORE UPDATE ON blog_categories 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contacts_updated_at 
    BEFORE UPDATE ON contacts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_diagnosticos_updated_at 
    BEFORE UPDATE ON diagnosticos 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- DADOS INICIAIS - CATEGORIAS DO BLOG
-- ============================================================================

INSERT INTO blog_categories (name, slug, description) VALUES
('Radiestesia Genética', 'radiestesia-genetica', 'Artigos sobre técnicas de radiestesia genética e suas aplicações'),
('Harmonia Geracional', 'harmonia-geracional', 'Conteúdos sobre resolução de conflitos familiares e harmonia entre gerações'),
('Limpeza Energética', 'limpeza-energetica', 'Técnicas e práticas de limpeza e purificação energética'),
('Desenvolvimento Pessoal', 'desenvolvimento-pessoal', 'Artigos sobre crescimento pessoal e espiritual'),
('Terapias Holísticas', 'terapias-holisticas', 'Informações sobre diferentes abordagens terapêuticas holísticas')
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- POST INICIAL DO BLOG
-- ============================================================================

-- Inserir o post inicial (só se não existir)
DO $$
DECLARE
    dev_category_id INTEGER;
BEGIN
    -- Primeiro, pegar o ID da categoria
    SELECT id INTO dev_category_id 
    FROM blog_categories 
    WHERE slug = 'desenvolvimento-pessoal';
    
    -- Só inserir se o post não existir
    IF NOT EXISTS (SELECT 1 FROM blog_posts WHERE slug = 'bem-vindos-blog-raiz-energetica') THEN
        INSERT INTO blog_posts (
            title, 
            slug, 
            content, 
            excerpt, 
            category_id, 
            status, 
            meta_title, 
            meta_description, 
            tags, 
            reading_time,
            published_at
        ) VALUES (
            'Bem-vindos ao Blog Raiz Energética', 
            'bem-vindos-blog-raiz-energetica',
            '<h2>Bem-vindos ao nosso espaço de transformação e cura</h2>
    
    <p>É com grande alegria que inauguramos o blog da Raiz Energética, um espaço dedicado ao seu crescimento pessoal e espiritual. Aqui você encontrará conteúdos exclusivos sobre:</p>
    
    <ul>
        <li><strong>Radiestesia Genética:</strong> Descubra como acessar informações do seu DNA energético</li>
        <li><strong>Harmonia Geracional:</strong> Resolva conflitos familiares através de técnicas ancestrais</li>
        <li><strong>Limpeza Energética:</strong> Aprenda a purificar e proteger sua energia</li>
        <li><strong>Desenvolvimento Pessoal:</strong> Ferramentas para seu crescimento interior</li>
    </ul>
    
    <h3>Nossa Missão</h3>
    <p>Acreditamos que cada pessoa carrega em si o potencial de cura e transformação. Nosso objetivo é oferecer conhecimento e técnicas que possam auxiliar você nesta jornada de autoconhecimento.</p>
    
    <h3>O que Esperar</h3>
    <p>Em nossos próximos artigos, compartilharemos:</p>
    <ul>
        <li>Técnicas práticas de radiestesia</li>
        <li>Estudos de caso reais</li>
        <li>Exercícios de harmonização familiar</li>
        <li>Dicas de proteção energética</li>
        <li>Meditações guiadas</li>
    </ul>
    
    <p>Estamos muito felizes em ter você conosco nesta jornada. Juntos, vamos explorar o infinito potencial de cura que existe dentro de cada um de nós.</p>
    
    <p><em>Com amor e luz,<br>Equipe Raiz Energética</em></p>',
            
            'Inauguramos o blog da Raiz Energética! Descubra nosso espaço dedicado ao crescimento pessoal através da radiestesia genética, harmonia geracional e limpeza energética.',
            
            dev_category_id,
            
            'published',
            'Bem-vindos ao Blog Raiz Energética - Transformação e Cura',
            'Descubra o blog da Raiz Energética, seu espaço de crescimento pessoal e espiritual. Conteúdos sobre radiestesia genética, harmonia geracional e limpeza energética.',
            ARRAY['bem-vindos', 'radiestesia', 'harmonia-geracional', 'limpeza-energetica', 'desenvolvimento-pessoal'],
            3,
            CURRENT_TIMESTAMP
        );
    END IF;
END $$;

-- ============================================================================
-- VERIFICAÇÃO DAS TABELAS CRIADAS
-- ============================================================================

-- Listar todas as tabelas criadas
SELECT table_name, table_type 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('blog_categories', 'blog_posts', 'contacts', 'diagnosticos')
ORDER BY table_name;
