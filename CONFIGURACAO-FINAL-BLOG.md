# 🎯 CONFIGURAÇÃO FINAL DO BLOG - GUIA PASSO A PASSO

## ✅ JÁ FEITO (Concluído pelo Copilot)

- ✅ Credenciais Supabase atualizadas para projeto ativo: `dzaarqxffsromlbndeme`
- ✅ Conexão com Supabase testada e funcionando
- ✅ Scripts de teste criados

---

## ⚠️ PENDENTE (Você precisa fazer - 5 minutos)

### 📋 TAREFA 1: Criar Tabela `posts` no Banco de Dados

**Passo 1:** Abra o arquivo `create-posts-table.sql` neste projeto

**Passo 2:** Copie TODO o conteúdo (Ctrl+A, Ctrl+C)

**Passo 3:** Acesse o SQL Editor do Supabase:
👉 https://supabase.com/dashboard/project/dzaarqxffsromlbndeme/editor

**Passo 4:** No SQL Editor:
1. Clique em **"+ New Query"** (canto superior esquerdo)
2. Cole o SQL copiado (Ctrl+V)
3. Clique em **"Run"** (ou Ctrl+Enter)

**Resultado esperado:**
```
Success. No rows returned
```

---

### 🗂️ TAREFA 2: Criar Bucket de Imagens

**Passo 1:** Acesse o Storage do Supabase:
👉 https://supabase.com/dashboard/project/dzaarqxffsromlbndeme/storage/buckets

**Passo 2:** Clique em **"New bucket"** (botão verde)

**Passo 3:** Preencha o formulário:
- **Name:** `blog-images`
- **Public bucket:** ✅ **MARCAR** (importante!)
- **File size limit:** `5` MB
- **Allowed MIME types:** (deixar em branco = aceita tudo)

**Passo 4:** Clique em **"Create bucket"**

---

## 🧪 VERIFICAÇÃO (Após completar as 2 tarefas)

Execute no terminal:
```powershell
node setup-blog.js
```

**Resultado esperado:**
```
✅ Tabela posts existe!
✅ Bucket blog-images existe!
🎉 TUDO CONFIGURADO! O BLOG ESTÁ PRONTO PARA USO!
```

---

## 🚀 APÓS VERIFICAÇÃO BEM-SUCEDIDA

### Testar o Admin do Blog:

1. **Abra o dev server** (se não estiver rodando):
   ```powershell
   npm run dev
   ```

2. **Acesse a página de criar post:**
   http://localhost:5175/admin/blog/novo

3. **Você deverá ver:**
   - ✅ Formulário de criação de post
   - ✅ Campo de upload de imagem
   - ✅ Editor rico (TipTap)
   - ✅ Botão "Salvar Rascunho" e "Publicar"

---

## 📝 CRIAR O PRIMEIRO POST

### Dados do Artigo Pronto:

**Arquivo:** `artigo-filho-adolescente-agressivo.md`

**Copiar para o blog:**
- **Título:** Como Lidar com Filho Adolescente Agressivo e Rebelde?
- **Slug:** como-lidar-com-filho-adolescente-agressivo-rebelde
- **Descrição (SEO):** Seu filho adolescente está agressivo e rebelde? Descubra os 5 passos comprovados para reconectar sem brigas, gritos ou culpa. A mudança começa hoje.
- **Categoria:** Relacionamento Familiar
- **Tags:** adolescente agressivo, filho rebelde, reconexão mãe e filho, harmonia familiar, terapia familiar
- **Conteúdo:** Copiar todo o conteúdo do arquivo .md (do H1 até o final)

---

## 🆘 SE ALGO DER ERRADO

### Erro: "Could not find the table 'posts'"
→ Você não executou o SQL. Volte à **TAREFA 1**.

### Erro: "Storage API not available"
→ Você não criou o bucket. Volte à **TAREFA 2**.

### Erro: "Failed to upload image"
→ O bucket não está como **público**. Edite o bucket e marque "Public bucket".

---

## ✅ CHECKLIST FINAL

Antes de me avisar que concluiu, verifique:

- [ ] Executei o SQL no SQL Editor do Supabase
- [ ] Criei o bucket "blog-images" como PÚBLICO
- [ ] Executei `node setup-blog.js` e vi mensagem de sucesso
- [ ] Dev server está rodando (npm run dev)
- [ ] Consigo acessar http://localhost:5175/admin/blog/novo

**Quando todos os itens estiverem marcados, me avise que vamos publicar o primeiro artigo! 🚀**
