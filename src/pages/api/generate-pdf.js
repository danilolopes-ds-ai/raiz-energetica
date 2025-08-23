import { spawn } from 'child_process';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    const formData = req.body;
    const workerPath = path.resolve(process.cwd(), 'src', 'lib', 'pdf-worker.js');

    const workerArgs = [
        '--loader', '@esbuild-kit/esm-loader',
        workerPath
    ];

    const child = spawn('node', workerArgs);

    // Pass form data to the worker via stdin
    child.stdin.write(JSON.stringify(formData));
    child.stdin.end();

    const pdfChunks = [];
    const errorChunks = [];

    // Collect PDF data from worker's stdout
    child.stdout.on('data', (chunk) => {
        pdfChunks.push(chunk);
    });

    // Collect error messages from worker's stderr
    child.stderr.on('data', (chunk) => {
        errorChunks.push(chunk);
    });

    // Handle worker exit
    child.on('close', (code) => {
        if (code !== 0) {
            const stderr = Buffer.concat(errorChunks).toString();
            console.error(`PDF worker exited with code ${code}:`, stderr);
            return res.status(500).json({ error: 'Failed to generate PDF.', details: stderr });
        }

        const pdfBuffer = Buffer.concat(pdfChunks);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename=diagnostico-${formData.nome || 'cliente'}.pdf`);
        res.send(pdfBuffer);
    });

    // Handle errors in spawning the process
    child.on('error', (err) => {
        console.error('Failed to start PDF worker process:', err);
        res.status(500).json({ error: 'Failed to start PDF worker process.', details: err.message });
    });
}