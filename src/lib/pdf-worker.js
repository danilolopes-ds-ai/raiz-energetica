import puppeteer from 'puppeteer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import DiagnosticoTemplate from '@/Raiz-Energetica-pdf/diagnostico.jsx';

// Helper to convert image to base64
const imageToBase64 = (filePath) => {
    const file = fs.readFileSync(filePath);
    return `data:image/webp;base64,${file.toString('base64')}`;
};

async function generatePdf() {
    try {
        // The form data is passed as a JSON string via stdin
        const stdin = await fs.promises.readFile(0, 'utf8');
        const formData = JSON.parse(stdin);

        // --- Logo loading logic (same as before) ---
        const logoPath = path.join(process.cwd(), 'public', 'images', 'services', 'logo-raizenergetica.webp');
        const logoBase64 = fs.existsSync(logoPath) 
            ? imageToBase64(logoPath) 
            : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzJEOEM1QyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UmFpejwvdGV4dD48L3N2Zz4=';

        // --- Render React to HTML (same as before) ---
        const html = ReactDOMServer.renderToStaticMarkup(
            React.createElement(DiagnosticoTemplate, { data: formData, logoBase64: logoBase64 })
        );

        // --- Puppeteer Logic (now isolated) ---
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setContent(html, { waitUntil: 'networkidle0' });
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
        });
        await browser.close();

        // Write the PDF buffer to stdout so the parent process can capture it
        process.stdout.write(pdfBuffer);

    } catch (error) {
        // Write error to stderr for the parent process
        console.error('PDF Worker Error:', error);
        process.exit(1);
    }
}

generatePdf();
