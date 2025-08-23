# Visão Geral do Projeto: Raiz Energética

Este documento resume o estado atual e o histórico do projeto do site 'Raiz Energética' para garantir a continuidade e eficiência em futuras sessões de desenvolvimento.

**1. Objetivo do Projeto:**
O site serve como uma plataforma para 'Raiz Energética', oferecendo serviços de terapia e cura energética. Ele inclui páginas de serviços, blog, autenticação de usuário e áreas administrativas para gerenciamento de conteúdo.

**2. Stack de Tecnologia:**
- **Frontend:** React 18 (com Hooks)
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS
- **Animações:** Framer Motion
- **Backend & Banco de Dados:** Supabase (para buscar serviços, depoimentos, etc.)
- **Gerenciamento de Pacotes:** npm
- **Ambiente:** Linux, com o projeto localizado em `/home/danilo/Documentos/Raiz_site` para evitar problemas de sincronização de arquivos externos.

**3. Estrutura e Arquivos Chave:**
- `src/pages/`: Contém os componentes de página principais.
  - `Services.jsx`: A página de serviços real, que busca dados do Supabase e renderiza os vários componentes da seção.
  - `ServiceTestimonials.jsx`: Um componente crucial que exibe um carrossel de depoimentos usando a biblioteca Swiper.js.
- `src/lib/supabase.js`: Configuração do cliente Supabase para interagir com o banco de dados.
- `dist/`: Diretório de saída da build de produção.

**4. Histórico de Problemas e Soluções:**
- **Problema do 'Emoji Antigo' (Stale Content):** O desafio mais significativo que enfrentamos foi um problema de conteúdo desatualizado na página de serviços. A investigação revelou que não era um problema de cache do Vite, mas sim que estávamos editando o arquivo errado (`src/pages/Services/index.jsx`) em vez do arquivo que estava sendo realmente usado pela rota (`src/pages/Services.jsx`).
- **Carrossel de Depoimentos:** Investigamos por que os botões de navegação do carrossel apareciam apenas em dispositivos móveis. Concluímos que era uma decisão de design intencional, pois em telas maiores, múltiplos depoimentos são visíveis simultaneamente, tornando os botões menos necessários.

**5. Práticas e Decisões de Design:**
- **Foco na Experiência do Usuário (UX):** Decidimos manter os botões de navegação do carrossel em dispositivos móveis para garantir o controle do usuário e a acessibilidade, mesmo com o autoplay ativado.
- **Código Limpo:** Adotamos a prática de remover arquivos e pastas desnecessários (como `src/pages/Services/index.jsx`) para manter a base de código organizada.
- **Fluxo de Trabalho de Debugging:** Nosso processo padrão é: 1) Observar o bug, 2) Formular uma hipótese, 3) Inspecionar o código relevante usando ferramentas de busca e visualização, 4) Aplicar uma correção direcionada, 5) Verificar o resultado com um novo build (`npm run build`) e um servidor de preview (`npm run preview`).
