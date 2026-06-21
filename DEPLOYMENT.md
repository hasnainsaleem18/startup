# Deploying to Vercel

You'll create **two Vercel projects from this one repository** — one for the backend API and one for
the frontend. This keeps frontend and backend cleanly separated and independently scalable.

> Prerequisites: a free [Vercel](https://vercel.com) account and this repo pushed to GitHub/GitLab/Bitbucket.
> (If you haven't pushed it yet: `git init && git add . && git commit -m "init" && git branch -M main`,
> create an empty repo on GitHub, then `git remote add origin <url> && git push -u origin main`.)

---

## Step 1 — Deploy the backend (API)

1. In Vercel, click **Add New… → Project** and import this repository.
2. Set **Root Directory** to `backend`.
3. Framework preset: **Other** (the included `backend/vercel.json` configures the serverless build).
4. Add an **Environment Variable** (leave others as defaults for now):
   - `CORS_ORIGINS` = `https://YOUR-FRONTEND.vercel.app`
     (you won't know this URL until Step 2 — you can put a placeholder now and update it after,
     or come back and edit it. You can list multiple origins comma-separated.)
   - `NODE_ENV` = `production`
5. Click **Deploy**. When it finishes, copy the deployment URL, e.g. `https://your-backend.vercel.app`.
6. Verify it works: open `https://your-backend.vercel.app/api/health` — you should see
   `{ "ok": true, "status": "healthy", ... }`.

## Step 2 — Deploy the frontend (website)

1. In Vercel, **Add New… → Project** and import the **same** repository again.
2. Set **Root Directory** to `frontend`.
3. Framework preset: **Next.js** (auto-detected).
4. Add an **Environment Variable**:
   - `NEXT_PUBLIC_API_URL` = `https://your-backend.vercel.app`  ← the URL from Step 1
5. Click **Deploy**. Copy the resulting URL, e.g. `https://your-frontend.vercel.app`.

## Step 3 — Connect them (CORS)

1. Go back to the **backend** project → **Settings → Environment Variables**.
2. Set `CORS_ORIGINS` to your real frontend URL: `https://your-frontend.vercel.app`
   (comma-separate if you have several, e.g. a custom domain later).
3. **Redeploy** the backend (Deployments → ⋯ → Redeploy) so the new value takes effect.

Done. Visit your frontend URL and submit the contact form — it should succeed and the lead will be
logged in the backend's Vercel function logs (Backend project → **Logs**).

---

## Adding a custom domain later

When you buy a domain:
- Point the **frontend** project at your domain (e.g. `www.yourbrand.com`) in Vercel → Domains.
- Optionally give the **backend** a subdomain (e.g. `api.yourbrand.com`).
- Update the backend's `CORS_ORIGINS` to include the new frontend domain, and the frontend's
  `NEXT_PUBLIC_API_URL` to the new backend domain. Redeploy both.

## Going to production properly

The MVP stores leads in memory and logs notifications. Before relying on it for real leads:
- Add a database for leads — see "Scaling notes" in [`README.md`](README.md).
- Implement real notifications in `backend/src/services/mailer.service.ts` (Resend/SendGrid/Slack).

## Troubleshooting

| Symptom | Fix |
|--------|-----|
| Form says "Could not reach the server" | Check `NEXT_PUBLIC_API_URL` on the frontend and that the backend `/api/health` works. |
| Form fails with a CORS error (browser console) | Add the exact frontend origin to backend `CORS_ORIGINS`, then redeploy backend. |
| Content looks like defaults but won't update | Frontend caches content 60s; it also falls back to bundled content if the API is unreachable. Verify `/api/content` returns data. |
