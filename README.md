# FondaOS

> A conversational portfolio that reveals how I think, not just where I've worked.

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up your API key

```bash
cp .env.example .env.local
```

Open `.env.local` and add your Anthropic API key:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Get a key at [console.anthropic.com](https://console.anthropic.com)

### 3. Add your context

Open `src/data/fondaContext.ts` and fill in your real background, experiences, and projects. The more detail you add, the smarter the AI responses will be.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Build Phases

- [x] **Phase 1** — Scaffold, sidebar, layout, chat UI shell
- [ ] **Phase 2** — Ask Fonda AI chat (streaming responses)
- [ ] **Phase 3** — Connecting the Dots network diagram + Thinking Areas
- [ ] **Phase 4** — Case studies, resume, articles, ⌘K, Framer Motion polish

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Anthropic Claude API** (or OpenAI as fallback)
- **Vercel** (deployment)

---

## Deploy to Vercel

```bash
npx vercel
```

Add your `ANTHROPIC_API_KEY` as an environment variable in the Vercel dashboard.
