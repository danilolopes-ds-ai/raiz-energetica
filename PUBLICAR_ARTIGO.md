# 📝 Instrução: Publicar Artigo "Filho Adolescente Agressivo"

## 🔐 PASSO 1: Fazer Login
- **URL:** `http://localhost:5173/login`
- **Email:** `raizenergetica@gmail.com`
- **Senha:** `Feemdeus27!`
- **Esperado:** Redireciona para `/admin`

---

## ✍️ PASSO 2: Ir para "Criar Post" ou "Editar"

Se for criar novo post:
- URL: `http://localhost:5173/admin/posts/create`

Se for atualizar post ID 5:
- URL: `http://localhost:5173/admin/posts/5`

---

## 📋 PASSO 3: Preencher os Campos

### Campo: Título
```
Meu Filho Adolescente Está Agressivo e Rebelde: O Que Fazer Quando Nada Funciona?
```

### Campo: Slug
```
meu-filho-adolescente-agressivo-rebelde
```

### Campo: Excerpt (Resumo)
```
Seu filho adolescente virou agressivo e rebelde. Nada que você tenta funciona. Neste artigo, você encontra um mapa prático para reconectar com ele — com amorosidade, sem culpa e sem sermões.
```

### Campo: Categoria
```
Relacionamento Familiar
```

### Campo: Autor
```
Helena Raiz
```

### Campo: Tempo de Leitura
```
12 min
```

### Campo: Conteúdo Markdown
Cole o conteúdo completo do arquivo:
`artigo-filho-adolescente-agressivo.md`

### Campo: Imagem Destaque
- Use a imagem de "Harmonia Geracional" (se tiver)
- Ou deixe em branco para adicionar depois

### Status
- Selecione: **Publicado** (não Rascunho)

### Featured
- ☑️ Marque como **Featured** (em destaque)

---

## 🖼️ PASSO 4: Imagens no Conteúdo

Se quiser adicionar imagens dentro do artigo:
1. Use o **botão de upload** na barra de ferramentas do editor
2. Seleção a imagem → Ela é carregada automaticamente para Supabase
3. Use `![alt](url)` para centralizá-la

---

## ✅ PASSO 5: Salvar/Publicar

Clique em **"Salvar Post"** ou **"Atualizar Post"**

Esperado:
- ✅ Redirecionado para lista de posts
- ✅ Post aparece com status "Publicado"
- ✅ Post está visível em `/blog`

---

## 🧪 TESTE

Após publicar:
1. Vá em `/blog`
2. Procure o artigo "Meu Filho Adolescente..."
3. Clique para abrir e verifique:
   - ✅ Título correto
   - ✅ Excerpt (resumo) aparece na listagem
   - ✅ Conteúdo completo em Markdown renderizado corretamente
   - ✅ Imagens aparecem

---

## 💾 Dados Completos do Artigo

**Título:** Meu Filho Adolescente Está Agressivo e Rebelde: O Que Fazer Quando Nada Funciona?

**Slug:** meu-filho-adolescente-agressivo-rebelde

**Excerpt:** Seu filho adolescente virou agressivo e rebelde. Nada que você tenta funciona. Neste artigo, você encontra um mapa prático para reconectar com ele — com amorosidade, sem culpa e sem sermões.

**Categoria:** Relacionamento Familiar

**Autor:** Helena Raiz

**Tempo de Leitura:** 12 min

**Status:** Publicado

**Featured:** Sim

**Conteúdo:** [Veja artigo-filho-adolescente-agressivo.md](./artigo-filho-adolescente-agressivo.md)

---

## ⚡ DICA RÁPIDA

Se estiver tendo problemas:
1. Limpe cache do navegador (Ctrl+Shift+Del)
2. Verifique console (F12) para erros
3. Garanta que está logado (check Auth Context)
4. Se UPDATE não funcionar, é problema de RLS (deve estar resolvido agora com auth real)

---

**Status:** ✅ Pronto para publicar!
