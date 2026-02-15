# 💩 Flappy Turd

A bite-sized Flappy Bird clone starring a surprisingly aerodynamic turd. Built with vanilla canvas and served by a tiny Express server so it can be deployed anywhere (Railway, Fly, Render, etc.).

## Local dev

```bash
# install deps
npm install

# start the server on http://localhost:5173 (press Ctrl+C to stop)
npm run dev
```

## Production start

```bash
npm install
npm start   # binds to PORT env var or falls back to 8080
```

## Deploy to Railway

1. Push this folder to a Git repo (GitHub, GitLab, etc.).
2. In Railway → New Project → Deploy from GitHub → select the repo.
3. Build command: `npm install`
4. Start command: `npm start`
5. Once deployed, Railway assigns a public URL. Visit it to play.

_No environment variables required. Everything is static + client-side._
