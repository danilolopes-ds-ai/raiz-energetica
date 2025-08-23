# Documentação Técnica do Ecossistema - Raiz Energética

**Versão:** 1.0.0
**Data:** 2025-07-25

## 1. Visão Geral do Projeto

Este documento fornece uma visão técnica aprofundada do website "Raiz Energética". O projeto é uma aplicação web moderna (SPA - Single Page Application) construída com React, projetada para servir como a principal plataforma digital da marca. Suas funcionalidades incluem a apresentação de serviços, um blog informativo, agendamento, e uma área administrativa para gerenciamento de conteúdo e geração de relatórios de diagnóstico personalizados em PDF.

O objetivo desta documentação é capacitar engenheiros de software a compreenderem rapidamente a arquitetura, as tecnologias empregadas, as convenções de código e a lógica de negócio, facilitando a manutenção, o desenvolvimento de novas features e o onboarding de novos membros na equipe.

---

## 2. Tech Stack

O ecossistema é composto pelas seguintes tecnologias e serviços:

- **Frontend Framework:** [React](https://react.dev/) (v18+) via [Vite](https://vitejs.dev/) - Para construção da interface de usuário reativa e de alta performance.
- **Linguagem:** JavaScript (ES6+).
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first para estilização rápida e consistente. A configuração inclui o plugin `@tailwindcss/typography`.
- **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/) - Coleção de componentes reutilizáveis, não uma biblioteca de componentes tradicional. Os componentes são copiados para o projeto e customizados.
- **Backend-as-a-Service (BaaS):** [Supabase](https://supabase.com/) - Plataforma open-source que utiliza PostgreSQL para banco de dados, autenticação, e APIs auto-geradas.
- **Geração de PDF:** [Puppeteer](https://pptr.dev/) - Biblioteca Node.js para controlar um navegador headless (Chromium), usada para renderizar um componente React em HTML e "imprimi-lo" como PDF.
- **Routing:** [React Router DOM](https://reactrouter.com/) - Para gerenciamento de rotas no lado do cliente.
- **Build Tool:** [Vite](https://vitejs.dev/) - Ferramenta de build e servidor de desenvolvimento extremamente rápido.
- **Deployment:** A estrutura do projeto é otimizada para deploy em plataformas como Vercel ou Netlify, que suportam serverless functions (para a API de geração de PDF).
- **Analytics:** Integração com Google Analytics, Microsoft Clarity e Meta Pixel.

---

## 3. Estrutura de Diretórios (`/src`)

A organização do código-fonte segue padrões bem definidos para garantir escalabilidade e manutenibilidade.

```
/src
├── App.jsx                 # Componente principal, orquestra o layout e as rotas.
├── main.jsx                # Ponto de entrada da aplicação React.
├── index.css               # Estilos globais e diretivas do Tailwind CSS.
|
├── components/             # Componentes de UI reutilizáveis.
│   ├── atoms/              # Componentes mais básicos (Button, Input, etc.).
│   ├── molecules/          # Combinações de átomos (ex: SearchBar com Input e Button).
│   ├── organisms/          # Seções complexas da UI (Header, Footer, Formulários).
│   ├── ui/                 # Componentes base do Shadcn/UI.
│   └── ...
|
├── pages/                  # Componentes que representam as páginas/rotas da aplicação.
│   ├── Home/               # Componentes específicos da página Home.
│   ├── Services/           # Componentes específicos da página de Serviços.
│   ├── admin/              # Páginas da área administrativa.
│   ├── api/                # Serverless Functions (APIs).
│   │   └── generate-pdf.js # Endpoint para gerar o PDF de diagnóstico.
│   └── Home.jsx, Services.jsx ...
|
├── lib/                    # Módulos e utilitários de propósito geral.
│   ├── supabase.js         # Configuração e inicialização do cliente Supabase.
│   ├── analytics.js        # Funções para tracking de eventos.
│   └── ...
|
├── contexts/               # Provedores de Contexto React para gerenciamento de estado global.
|
├── data/                   # Arquivos com dados estáticos (ex: opções de formulários).
|
└── pdf-templates/          # Componentes React usados como templates para a geração de PDFs.
    └── diagnostico.jsx     # Template do relatório de diagnóstico.
```

---

## 4. Arquitetura e Padrões de Design

### 4.1. Frontend - Atomic Design

A arquitetura de componentes é baseada nos princípios do **Atomic Design**. Isso promove a máxima reutilização e consistência visual. A hierarquia é a seguinte:

1.  **Atoms (`/components/atoms`):** Os blocos de construção fundamentais da UI. São elementos HTML puros ou componentes muito simples (ex: `Button.jsx`, `Input.jsx`, `Logo.jsx`). Não possuem estado próprio.
2.  **Molecules (`/components/molecules`):** Grupos de átomos que funcionam juntos como uma unidade. (ex: um campo de formulário com `Label`, `Input` e `ErrorMessage`).
3.  **Organisms (`/components/organisms`):** Seções mais complexas da interface, compostas por moléculas e/ou átomos. (ex: `Header.jsx`, `Footer.jsx`, `TestimonialsSection.jsx`).

### 4.2. Gerenciamento de Estado

O estado da aplicação é gerenciado primariamente com as ferramentas nativas do React:

- **Estado Local:** `useState` e `useReducer` para o estado contido dentro de um único componente.
- **Estado Global:** `useContext` para dados que precisam ser compartilhados entre múltiplos componentes, como informações do usuário autenticado ou tema da UI. O provedor de contexto se encontra em `/src/contexts`.

---

## 5. Deep Dive em Funcionalidades Core

### 5.1. Conexão com Supabase (`/lib/supabase.js`)

O arquivo `supabase.js` é o ponto central para a comunicação com o backend. Ele utiliza as variáveis de ambiente `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` para criar e exportar uma instância singleton do cliente Supabase. Todas as operações de banco de dados (queries) e autenticação (login, logout, signup) devem utilizar esta instância.

### 5.2. Geração de PDF (`/pages/api/generate-pdf.js`)

Esta é a funcionalidade mais complexa do backend e opera como uma serverless function.

**Fluxo de Execução:**

1.  **Requisição:** A página de admin (`/pages/admin/gerar-diagnostico.jsx`) envia uma requisição `POST` para o endpoint `/api/generate-pdf` com os dados do formulário no corpo da requisição.
2.  **Leitura do Logo:** No servidor, a API primeiro lê o arquivo de imagem do logo (`/public/images/...`) usando `fs` e `path` do Node.js e o converte para uma string Base64.
3.  **Renderização para HTML:** A API importa o componente React do template (`/pdf-templates/diagnostico.jsx`). Usando `ReactDOMServer.renderToStaticMarkup()`, ela renderiza o componente, passando os dados do formulário e a string Base64 do logo como `props`. O resultado é uma string HTML estática.
4.  **Lançamento do Puppeteer:** Uma instância de um navegador headless (Chromium) é iniciada.
5.  **Criação do PDF:** O HTML gerado é carregado no navegador headless (`page.setContent()`). A função `page.pdf()` é então chamada para gerar o arquivo PDF, aplicando opções de formato (`A4`), margens e garantindo que os estilos (CSS) sejam renderizados (`printBackground: true`).
6.  **Resposta:** O buffer do PDF gerado é enviado de volta na resposta da API com o `Content-Type` apropriado (`application/pdf`).

Este processo garante que o PDF seja uma representação fiel e visualmente rica do componente React, com dados totalmente dinâmicos.

---

## 6. Setup e Ambiente de Desenvolvimento

### 6.1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```
VITE_SUPABASE_URL="URL_DO_SEU_PROJETO_SUPABASE"
VITE_SUPABASE_ANON_KEY="SUA_CHAVE_ANON_SUPABASE"
```

Estas chaves são encontradas no painel de configurações do seu projeto Supabase (API settings).

### 6.2. Instalação e Execução

1.  **Instale as dependências:**
    ```bash
    npm install
    ```
2.  **Rode o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

### 6.3. Comandos Úteis

- `npm run build`: Compila a aplicação para produção (gera o diretório `/dist`).
- `npm run lint`: Executa o linter para análise de código.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.

---

## 7. Deployment

O projeto está configurado para ser implantado em plataformas que suportam aplicações Vite e serverless functions (como Vercel ou Netlify).

**Configuração de Build na Plataforma de Deploy:**

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

As variáveis de ambiente (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) devem ser configuradas no painel da plataforma de deploy, não versionadas no código.
