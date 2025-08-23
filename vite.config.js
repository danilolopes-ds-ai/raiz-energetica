import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Correção para obter o caminho do diretório em Módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5174,
    open: true,
    hmr: {
      host: 'localhost',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5174',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyReq', async (proxyReq, req, res) => {
            // As API routes are in /pages/api, we need to handle them manually
            const apiPath = req.url.substring(1); // e.g., 'api/generate-pdf'
            const pathParts = apiPath.split('/'); // e.g., ['api', 'generate-pdf']
            const functionPath = path.join(__dirname, 'src', 'pages', ...pathParts) + '.js';

            // Log para depuração: mostra o caminho exato que está sendo verificado
            console.log(`[Vite API Proxy] Attempting to load handler from: ${functionPath}`);

            try {
              const fs = await import('fs');
              if (fs.existsSync(functionPath)) {
                // Dynamically import and run the handler
                // Convert path to fileURL to be compatible with Windows ESM import
                const module = await import(pathToFileURL(functionPath));
                const handler = module.default;

                // Manually parse body for POST requests
                if (req.method === 'POST' && !req.body) {
                  let body = '';
                  await new Promise(resolve => {
                    req.on('data', chunk => { body += chunk; });
                    req.on('end', resolve);
                  });
                  req.body = JSON.parse(body);
                }

                // End the original request and let the handler manage the response
                proxyReq.abort();
                await handler(req, res);
              } else {
                 proxyReq.abort();
                 res.statusCode = 404;
                 res.end(`API handler not found at ${functionPath}`);
              }
            } catch (error) {
              console.error(`Error in API proxy for ${req.url}:`, error);
              proxyReq.abort();
              res.statusCode = 500;
              res.end('Internal Server Error');
            }
          });
        },
      },
    },
  },
});