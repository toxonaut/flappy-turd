import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
import path from 'node:path';

const PORT = Number(process.env.PORT) || Number(process.argv[2]) || 8080;
const PUBLIC_DIR = path.resolve('public');

const app = express();
app.use(compression());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  next();
});
app.use(serveStatic(PUBLIC_DIR, {
  extensions: ['html'],
  setHeaders(res) {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  }
}));

app.get('/healthz', (_req, res) => {
  res.json({ ok: true });
});

app.use((req, res) => {
  res.status(404).send('💩 Nothing here, go flap elsewhere.');
});

app.listen(PORT, () => {
  console.log(`Flappy Turd server running on http://localhost:${PORT}`);
});
