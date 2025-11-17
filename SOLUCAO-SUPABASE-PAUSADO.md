# 🚨 PROBLEMA IDENTIFICADO: Projeto Supabase Pausado

## ❌ ERRO ATUAL

```
project is paused
An admin must unpause it from the Supabase dashboard
```

**URL do erro:** https://gigaqpzhaoiasxsdeyfm.supabase.co  
**Status:** DNS não resolve (projeto pausado)

---

## ✅ SOLUÇÃO: Reativar o Projeto Supabase

### PASSO 1: Acessar Dashboard
👉 https://supabase.com/dashboard/project/gigaqpzhaoiasxsdeyfm

### PASSO 2: Fazer Login
- Use sua conta do GitHub ou email cadastrado
- Você precisa ser admin do projeto "RE - site"

### PASSO 3: Reativar (Unpause)
1. Você verá um banner amarelo/laranja dizendo "Project is paused"
2. Clique no botão **"Restore project"** ou **"Unpause"**
3. Aguarde 2-5 minutos enquanto o projeto reinicia

### PASSO 4: Verificar Status
Após reativação, teste novamente:

```powershell
cd C:\Users\danil\Documents\Raiz_site
node test-supabase-connection.js
```

**Resultado esperado:**
```
✅ Cliente Supabase criado com sucesso
✅ Tabela posts acessível
✅ Buckets disponíveis
```

---

## 📊 INFORMAÇÕES DO PROJETO

**Project ID:** gigaqpzhaoiasxsdeyfm  
**Project Name:** RE - site  
**Organization ID:** wtpzzimsnnmcazhbaqrx  
**Region:** South America (São Paulo)  
**Created:** 26/06/2025  

**URL da API:** https://gigaqpzhaoiasxsdeyfm.supabase.co  
**Anon Key:** eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (já configurada em supabase.js)

---

## ⚠️ POR QUE FOI PAUSADO?

Projetos Supabase no **plano gratuito** são pausados automaticamente após:
- 7 dias de inatividade (sem requisições à API)
- Ou se você não fizer login no dashboard por 1 semana

**Solução permanente:** Fazer pelo menos 1 requisição por semana ao Supabase (visitar o blog já resolve).

---

## 🔄 APÓS REATIVAR, PRÓXIMOS PASSOS

1. ✅ Verificar se tabela `posts` existe
2. ✅ Verificar se bucket `blog-images` existe (criar se necessário)
3. ✅ Testar upload de imagem
4. ✅ Publicar primeiro artigo: "Como lidar com filho adolescente agressivo"

---

## 🆘 SE NÃO CONSEGUIR REATIVAR

**Opções:**
1. Me avise que você reativou e eu testo a conexão novamente
2. Se não tiver acesso, posso criar um novo projeto Supabase
3. Se preferir, posso migrar para outro backend (Firebase, PlanetScale, etc.)

---

**Aguardando você reativar o projeto no dashboard! 🚀**
