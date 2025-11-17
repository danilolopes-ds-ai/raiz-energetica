# 🔑 COMO OBTER AS CREDENCIAIS DO SUPABASE

## 📍 PROJETO ATIVO
**Project ID:** dzaarqxffsromlbndeme  
**Project Name:** re-site-vercel-db

---

## 🚀 PASSO A PASSO

### 1️⃣ Acesse o Dashboard de API Settings
👉 https://supabase.com/dashboard/project/dzaarqxffsromlbndeme/settings/api

### 2️⃣ Copie as Credenciais

Na página, você verá duas seções importantes:

#### **Project URL**
```
https://dzaarqxffsromlbndeme.supabase.co
```
☝️ Copie essa URL completa

#### **Project API keys**
Procure por: **"anon public"** ou **"anon key"**

Vai parecer algo assim (token JWT longo):
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YWFycXhmZnNyb21sYm5kZW1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4ODAwMDAsImV4cCI6MjA0NzQ1NjAwMH0.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
☝️ Copie esse token COMPLETO (é longo, ~200 caracteres)

---

## 📋 ME ENVIE ASSIM:

```
URL: https://dzaarqxffsromlbndeme.supabase.co
KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🔧 ARQUIVOS QUE VOU ATUALIZAR

Quando você me passar as credenciais, vou atualizar automaticamente:

1. ✅ `src/lib/supabase.js` (cliente principal)
2. ✅ `test-supabase-connection.js` (script de teste)
3. ✅ `check-storage-bucket.js` (verificação de bucket)
4. ✅ Qualquer outro arquivo com credenciais antigas

---

## ⚡ DEPOIS QUE EU ATUALIZAR

Vamos testar imediatamente:
```powershell
node test-supabase-connection.js
```

Se tudo funcionar, veremos:
```
✅ Cliente Supabase criado com sucesso
✅ Tabela posts acessível
✅ Buckets disponíveis
```

---

**Aguardando as credenciais! 🚀**
