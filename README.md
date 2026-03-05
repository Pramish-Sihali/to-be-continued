# ConversAi

Build, customize, and embed AI-powered chatbots — no backend expertise required.

## What it does

- **Create chatbots** with custom branding, welcome messages, and color themes
- **Generate Q&As with AI** by crawling any URL — paste a link, get instant content
- **Embed anywhere** with a single `<script>` tag
- **Track conversations** with a full analytics dashboard (charts, session history, insights)

## Stack

Next.js · TypeScript · Supabase · Tailwind CSS · shadcn/ui · Gemini API

## Setup

```bash
npm install
cp .env.example .env.local  # fill in your keys
npm run dev
```

**Required env vars:**

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GEMINI_API_KEY=
```

## Embedding

```html
<script src="https://your-domain.com/widget/chatbot-widget.js?id=YOUR_CHATBOT_ID"></script>
```

## Auth

Currently ships with a demo mode (localStorage session). Supabase Auth integration is stubbed and ready — swap in your credentials to go live.
