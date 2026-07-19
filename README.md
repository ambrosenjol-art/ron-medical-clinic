# RON Medical Center Website

Production-ready Next.js website for a public-facing medical clinic platform, with SEO, responsive UI, and future EMR-ready architecture.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS + Framer Motion
- React Hook Form + React Icons
- Prisma ORM + SQLite
- JWT + bcryptjs authentication scaffold
- API Routes for appointments, contact, auth login, and blog feed

## Features Implemented

- Public pages: Home, About, Services, Doctors, Laboratory, Pharmacy, Appointments, Health Blog, FAQ, Contact
- Patient Portal UI: login, register, dashboard (EMR integration-ready)
- Staff login page and Admin dashboard UI
- Sticky navigation and complete footer
- Searchable FAQ and Health Blog pages
- Appointment and contact forms with API submission
- SEO setup: metadata, canonical URL, Open Graph, Twitter Card, robots.txt, sitemap.xml, structured data
- Accessibility-first semantics and responsive design

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Generate Prisma client:

```bash
npm run prisma:generate
```

4. Start dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Database

- SQLite schema: prisma/schema.prisma
- Default local DB: file:./dev.db

To create local tables:

```bash
npm run prisma:migrate -- --name init
```

## Deployment

### Vercel (recommended)

- Import this project in Vercel
- Set environment variables from .env.example
- Set NEXT_PUBLIC_SITE_URL to your real domain
- Optional: set GOOGLE_SITE_VERIFICATION from Google Search Console
- Free launch option: use your Vercel subdomain (example: https://ron-medical-center.vercel.app)
- For worldwide public use, replace SQLite with a hosted production database so the forms work reliably

### Netlify (frontend) + Render/Railway (backend option)

- This codebase uses Next.js API routes, so it can run as one deployment on Vercel.
- If splitting frontend/backend later, keep frontend on Netlify and move APIs to Express service on Render/Railway.
- Deployment helper files included: vercel.json, netlify.toml, render.yaml

## Free Domain Guide

- See DEPLOY_FREE_DOMAIN.md for step-by-step free deployment and Google indexing setup.
- See VERCEL_SETUP_VALUES.md for the exact Vercel fields and values to enter.

## Worldwide Phone Access

- Localhost and Wi-Fi IP links only work near your computer.
- To open the site on any phone anywhere in the world, deploy it to Vercel and use the public `vercel.app` link.
- After deployment, share the public HTTPS link for marketing.

## Google Search Visibility Checklist

1. Deploy to a public custom domain (HTTPS enabled)
2. Set NEXT_PUBLIC_SITE_URL to your exact domain
3. Verify sitemap at /sitemap.xml and robots at /robots.txt
4. Submit domain + sitemap to Google Search Console
5. Keep publishing content on Health Blog for indexing freshness

## Security Readiness Notes

- Password hashing utility included with bcryptjs
- JWT token signing and secure cookie baseline included
- Input validation implemented with zod
- RBAC role model defined in Prisma schema for future implementation
- API origin policy checks to reduce cross-site submission risk
- Per-IP in-memory API rate limiting on appointments, contact, and auth login endpoints
- Add distributed rate limiting, CSRF tokens, and audit logging before handling live PHI data
