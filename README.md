# 🌟 Raiz Energética - Website Institucional

Website moderno e responsivo para a **Raiz Energética**, especializada em terapias holísticas e desenvolvimento espiritual.

## 🚀 **Deploy**

**🔗 Site em Produção:** [Será atualizado após deploy no Vercel]

## ⚡ **Tecnologias**

- **React 18** + **Vite** (Build ultra-rápido)
- **Tailwind CSS** (Styling responsivo)
- **Framer Motion** (Animações suaves)
- **Supabase** (Backend + Auth)
- **Vercel Analytics** (Tracking completo)

## 📊 **Analytics e Tracking**

### **Implementado:**
- ✅ **Google Analytics 4** + **Google Tag Manager**
- ✅ **Meta Pixel** (Facebook/Instagram Ads)
- ✅ **Microsoft Clarity** (Heatmaps + Session Recordings)
- ✅ **Vercel Analytics** (Performance + Core Web Vitals)
- ✅ **Vercel Speed Insights** (Real User Monitoring)

### **Eventos Customizados:**
- 🎯 **Quiz Lead Generation** (Start, Progress, Complete)
- 📅 **Cal.com Booking Tracking** (Calendar View, Appointments)
- 💳 **Kiwify Checkout Tracking** (Initiate, Purchase)
- 📊 **User Engagement** (Scroll Depth, Time on Page, Button Clicks)

## 🏗️ **Arquitetura**

```
src/
├── components/          # Componentes reutilizáveis
│   ├── atoms/          # Componentes básicos
│   ├── molecules/      # Componentes compostos
│   └── organisms/      # Seções complexas
├── pages/              # Páginas principais
│   ├── Home/           # Homepage modular
│   ├── Blog/           # Sistema de blog
│   ├── Helena/         # Landing Page IA
│   └── admin/          # Painel administrativo
├── lib/                # Utilities e configurações
│   ├── analytics.js    # Google Analytics
│   ├── metaPixel.js    # Meta Pixel
│   ├── clarity.js      # Microsoft Clarity
│   └── tracking.js     # Sistema de eventos unificado
└── contexts/           # Context providers
```

## 🎨 **Páginas Principais**

### **🏠 Homepage**
- Hero otimizado para conversão
- Seções modulares e reutilizáveis
- Integração completa com Cal.com

### **📝 Blog Científico**
- CMS integrado com Supabase
- Suporte a artigos científicos formatados
- SEO otimizado para cada post

### **🤖 Helena - IA Assistente**
- Landing page dedicada
- Integração WhatsApp Business
- Quiz interativo para lead generation

### **🧘 Landing Pages de Serviços**
- **Harmonia Geracional** (Tema: Rosa/Pink)
- **Radiestesia Genética** (Tema: Verde/Emerald)
- **Limpeza Energética** (Tema: Azul/Blue)

### **⚙️ Painel Admin**
- Gestão de posts do blog
- Gerenciamento de serviços
- Sistema de autenticação seguro

## 🔧 **Integrações**

### **📅 Cal.com**
- Agendamento automatizado
- Tracking completo de conversões
- Múltiplos tipos de sessão

### **💳 Kiwify**
- Checkout otimizado
- Tracking de vendas
- Integração com analytics

### **🗃️ Supabase**
- Banco de dados PostgreSQL
- Autenticação segura
- Row Level Security (RLS)

## 🚀 **Performance**

- ⚡ **Vite Build** - Builds sub-segundos
- 🎯 **Lighthouse Score** - 95+ em todas as métricas
- 📱 **Mobile-First** - Design responsivo completo
- 🌐 **PWA Ready** - Otimizado para dispositivos móveis

## 📈 **SEO & Analytics**

### **Meta Tags Dinâmicas**
- Open Graph completo
- Twitter Cards
- Schema.org markup

### **Tracking de Conversões**
```javascript
// Exemplo de evento customizado
trackEvent.quizComplete('lead_generation', user.email);
trackEvent.appointmentScheduled('harmonia_geracional', date);
trackEvent.purchase('radiestesia_genetica', 497, transactionId);
```

## 🛡️ **Segurança**

- ✅ **Content Security Policy** configurado
- ✅ **Environment Variables** protegidas
- ✅ **Row Level Security** no Supabase
- ✅ **Headers de Segurança** otimizados

## 🔄 **Deployment**

### **Automático via Vercel:**
1. Push para `main` branch
2. Build automático no Vercel
3. Deploy com preview URLs
4. Analytics ativado automaticamente

### **Comandos de Desenvolvimento:**
```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📊 **Monitoramento**

### **Métricas Acompanhadas:**
- **Core Web Vitals** (LCP, FID, CLS)
- **Conversion Funnel** (Quiz → Lead → Booking → Sale)
- **User Journey** (Page flow, bounce rate, session duration)
- **Revenue Attribution** (Source tracking, ROI por canal)

### **Dashboards:**
- 📊 **Vercel Analytics** - Performance real-time
- 📈 **Google Analytics** - Comportamento detalhado
- 🎯 **Meta Business** - ROI de campanhas
- 🔍 **Microsoft Clarity** - UX insights

---

## 👨‍💻 **Desenvolvido por**

**Danilo Lopes** - Full Stack Developer & Data Scientist
- GitHub: [@danilolopes-ds-ai](https://github.com/danilolopes-ds-ai)
- Email: danilolopes.ai@icloud.com

---

### 🌟 **Raiz Energética**
*Transformando vidas através da energia e do autoconhecimento*

**Website:** [Em breve no Vercel]  
**Contato:** [Informações de contato]
