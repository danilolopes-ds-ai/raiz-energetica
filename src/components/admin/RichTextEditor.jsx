import React, { useState } from 'react';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Heading, 
  Quote,
  Link as LinkIcon,
  Image as ImageIcon,
  Eye,
  Code
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const RichTextEditor = ({ content, onChange }) => {
  const [preview, setPreview] = useState(false);

  const insertMarkdown = (before, after = '') => {
    const textarea = document.getElementById('markdown-editor');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newContent = 
      content.substring(0, start) + 
      before + selectedText + after + 
      content.substring(end);
    
    onChange(newContent);
    
    // Reposiciona o cursor
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        start + before.length + selectedText.length
      );
    }, 0);
  };

  const toolbar = [
    { icon: Heading, label: 'H2', action: () => insertMarkdown('## ', '\n\n') },
    { icon: Bold, label: 'Negrito', action: () => insertMarkdown('**', '**') },
    { icon: Italic, label: 'Itálico', action: () => insertMarkdown('*', '*') },
    { icon: List, label: 'Lista', action: () => insertMarkdown('\n- ', '\n') },
    { icon: ListOrdered, label: 'Lista Numerada', action: () => insertMarkdown('\n1. ', '\n') },
    { icon: Quote, label: 'Citação', action: () => insertMarkdown('\n> ', '\n\n') },
    { icon: LinkIcon, label: 'Link', action: () => insertMarkdown('[', '](url)') },
    { icon: ImageIcon, label: 'Imagem', action: () => insertMarkdown('![alt](', ')') },
    { icon: Code, label: 'Código', action: () => insertMarkdown('`', '`') },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Conteúdo do Post (Markdown) *
        </label>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setPreview(!preview)}
        >
          <Eye className="w-4 h-4 mr-2" />
          {preview ? 'Editor' : 'Preview'}
        </Button>
      </div>

      {!preview ? (
        <>
          {/* Toolbar */}
          <div className="border border-gray-300 rounded-t-lg bg-gray-50 p-2 flex flex-wrap gap-1">
            {toolbar.map((tool, idx) => (
              <Button
                key={idx}
                type="button"
                variant="ghost"
                size="sm"
                onClick={tool.action}
                title={tool.label}
                className="hover:bg-gray-200"
              >
                <tool.icon className="w-4 h-4" />
              </Button>
            ))}
          </div>

          {/* Editor */}
          <textarea
            id="markdown-editor"
            value={content}
            onChange={(e) => onChange(e.target.value)}
            className="w-full min-h-[400px] p-4 border border-t-0 border-gray-300 rounded-b-lg font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Digite seu conteúdo em Markdown aqui...

Exemplos:
## Título Grande
### Título Médio

**negrito** ou *itálico*

- Lista item 1
- Lista item 2

> Citação em destaque

[Link](https://exemplo.com)
![Imagem](url-da-imagem.jpg)"
          />

          {/* Dicas */}
          <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded border border-gray-200">
            <p className="font-semibold mb-1">💡 Dicas de Markdown:</p>
            <div className="grid grid-cols-2 gap-2">
              <span>## Título → H2</span>
              <span>**texto** → Negrito</span>
              <span>*texto* → Itálico</span>
              <span>- item → Lista</span>
              <span>&gt; texto → Citação</span>
              <span>[texto](url) → Link</span>
            </div>
          </div>
        </>
      ) : (
        <div className="border border-gray-300 rounded-lg p-6 bg-white min-h-[400px]">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content || '*Nenhum conteúdo para visualizar*'}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
