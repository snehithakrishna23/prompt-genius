# WriteAI — Writing Assistant

An AI-powered writing toolkit with three tools:
- **Meeting notes cleaner** — paste messy notes, get structured summaries
- **Email tone fixer** — rewrite emails in any tone
- **Say it better** — rephrase any text with a specific goal

Built with React + Vite, deployed on Vercel. Powered by **Google Gemini (free API)**.

---

## Get your free Gemini API key

1. Go to https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click **Create API key**
4. Copy the key — it starts with `AIza...`

No credit card required. Free tier is generous for personal use.

---

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root:
   ```
   GEMINI_API_KEY=your_key_here
   ```

3. Run locally with Vercel CLI (needed for the API proxy):
   ```bash
   npm install -g vercel
   vercel dev
   ```

---

## Deploy to Vercel

### Option 1 — Via GitHub (recommended)

1. Push this project to a GitHub repository
2. Go to vercel.com → New Project → Import your repo
3. Add environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: your `AIza...` key
4. Click Deploy — done!

### Option 2 — Via Vercel CLI

```bash
npm install -g vercel
vercel
```

Then add `GEMINI_API_KEY` in Vercel dashboard → Settings → Environment Variables.

---

## Project structure

```
writing-assistant/
├── api/
│   └── generate.js        # Vercel serverless function (Gemini proxy)
├── src/
│   ├── components/
│   │   ├── MeetingNotes.jsx
│   │   ├── EmailTone.jsx
│   │   ├── Rephrase.jsx
│   │   ├── OutputBox.jsx
│   │   └── *.css
│   ├── useClaude.js        # Shared hook for API calls
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```
