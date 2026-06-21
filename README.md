# Ledgerly — Bookkeeping Service Website (Full-Stack MVP)

A production-ready marketing website for a **QuickBooks Online & SAP Business One bookkeeping** service.
Conversion-focused, fully responsive, and built as a **separated full-stack app** that scales.

- **Frontend** — Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion
- **Backend** — Express + TypeScript REST API (validation, security, rate limiting)
- **Separation of concerns** — the frontend renders; **all data and form handling go through the backend API**
- **Deployable to Vercel** — both apps deploy independently (free tier friendly)

> Rebrand the whole site by editing one file: [`frontend/lib/siteConfig.ts`](frontend/lib/siteConfig.ts)
> (business name, email, phone, WhatsApp, social links).

---

## Project structure

```
startup/
├── backend/                  # Express + TypeScript API  (the "everything goes through here" layer)
│   ├── src/
│   │   ├── app.ts            # Express app factory (helmet, cors, json, routes)
│   │   ├── index.ts         # Local server entry (node dist/index.js)
│   │   ├── config/          # Env parsing
│   │   ├── routes/          # API routes (+ rate limiting)
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic (leads, content, mailer)
│   │   ├── schemas/         # Zod validation
│   │   ├── middleware/      # validate / errorHandler
│   │   ├── data/            # Content (source of truth) + in-memory lead store
│   │   └── utils/
│   ├── api/index.ts         # Vercel serverless entry (re-uses the same app)
│   └── vercel.json
│
├── frontend/                 # Next.js marketing site (presentation only)
│   ├── app/                 # layout, page (server component fetches content from API)
│   ├── components/          # Hero, Pricing, Services, ContactForm, etc.
│   ├── lib/                 # siteConfig, api client, types, icons
│   └── ...
│
└── package.json              # npm workspaces + one-command dev
```

## Features

- 🎨 Polished, on-brand UI (navy + green) matching the brand poster, with motion & micro-interactions
- 📱 Fully responsive (mobile menu, fluid hero, stacked layouts)
- 🧮 Animated "QuickBooks-style" dashboard mockup in the hero
- 💳 Pricing tiers (Basic / Standard / Premium) with a highlighted "Most Popular" plan
- 📝 **Working contact / quote form** → posts to the backend, with validation, error and success states
- 🔗 Pricing "Choose plan" buttons pre-fill the quote form
- 🔒 Backend hardening: Helmet, CORS allow-list, Zod validation, rate limiting
- 🛰️ Content (services, packages, testimonials, FAQs, stats) is **served by the API**, so copy/pricing
  can change server-side without a frontend redeploy. A bundled fallback keeps the page alive if the
  API is briefly unreachable.

---

## Run locally

Requires Node 18+ (tested on Node 22/25).

```bash
# 1. Install everything (both workspaces)
npm install

# 2. Create env files (defaults already point at localhost)
cp backend/.env.example backend/.env
cp frontend/.env.local.example frontend/.env.local

# 3. Start backend + frontend together
npm run dev
```

- Frontend → http://localhost:3000
- Backend  → http://localhost:4000  (health check: http://localhost:4000/api/health)

Run them separately if you prefer:

```bash
npm run dev -w backend     # API on :4000
npm run dev -w frontend    # site on :3000
```

---

## API reference

Base URL: `http://localhost:4000`

| Method | Endpoint        | Purpose                                   |
|--------|-----------------|-------------------------------------------|
| GET    | `/api/health`   | Health check                              |
| GET    | `/api/content`  | All site content (services, packages, …)  |
| GET    | `/api/services` | Services only                             |
| GET    | `/api/packages` | Pricing packages only                     |
| POST   | `/api/contact`  | General inquiry (rate limited)            |
| POST   | `/api/quote`    | Quote request for a package (rate limited)|

`POST /api/contact` body:
```json
{ "name": "Jane Doe", "email": "jane@co.com", "company": "Acme", "phone": "+1...", "message": "..." }
```
`POST /api/quote` adds `"packageId": "basic" | "standard" | "premium" | "custom"`.

Validation errors return `422` with field-level messages:
```json
{ "ok": false, "error": "Validation failed", "fields": { "email": "Invalid email" } }
```

---

## Deploy to Vercel

See [`DEPLOYMENT.md`](DEPLOYMENT.md) for the full step-by-step. In short: deploy the **backend** and
**frontend** as **two separate Vercel projects** from this one repo, then point the frontend at the
backend URL via `NEXT_PUBLIC_API_URL` and allow the frontend origin in the backend's `CORS_ORIGINS`.

---

## Customize

| What | Where |
|------|-------|
| Business name, contact info, socials | `frontend/lib/siteConfig.ts` |
| Services, packages, pricing, testimonials, FAQs, stats | `backend/src/data/content.ts` |
| Colors / theme | `frontend/tailwind.config.ts` |
| Lead notifications (email/Slack) | `backend/src/services/mailer.service.ts` |

## Scaling notes (when the startup grows)

- **Database** — swap the in-memory `leadStore` (`backend/src/data/store.ts`) for Postgres/Neon,
  Supabase, or Mongo. The service layer interface stays the same. (Serverless functions are stateless,
  so a managed DB is required in production for persistence.)
- **Email/CRM** — implement `mailer.service.ts` with Resend / SendGrid / a Slack webhook / HubSpot.
- **Caching & CDN** — content responses are cacheable; Vercel serves the frontend globally on its edge.
- **i18n** — content is API-driven, so localization can be added at the backend layer.
- **Security upgrade** — this MVP pins Next.js 15 (latest patched 15.x). Plan a move to the latest
  major when convenient to clear the remaining build-time transitive advisories.
