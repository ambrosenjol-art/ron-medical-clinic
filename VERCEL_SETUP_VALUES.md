# Vercel Setup Values

Use this file when creating the public deployment so the website can open on any phone anywhere in the world.

## Project Type

- Framework Preset: Next.js
- Root Directory: `ron-medical-clinic` if deploying from the parent workspace
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: leave empty for Next.js

## Environment Variables

Add these in Vercel Project Settings.

### Required

- `NEXT_PUBLIC_SITE_URL`
  - First deploy: use your Vercel URL
  - Example: `https://ron-medical-center.vercel.app`

- `JWT_SECRET`
  - Use a long random secret
  - Example format: `ronmc_2026_secure_random_secret_change_this`

### Recommended

- `GOOGLE_SITE_VERIFICATION`
  - Leave empty until you connect Google Search Console

### Database

- `DATABASE_URL`
  - For real public use, set this to a hosted production database
  - Do not rely on `file:./dev.db` for Vercel production if you want forms to persist reliably

## After First Deploy

1. Open the public Vercel link
2. Open these URLs and confirm they work:
   - `/`
   - `/services`
   - `/contact`
   - `/appointments`
   - `/sitemap.xml`
   - `/robots.txt`
3. Update `NEXT_PUBLIC_SITE_URL` if Vercel gives you a different final URL
4. Redeploy if needed

## What Link To Share

Share the Vercel public HTTPS link, for example:

- `https://ron-medical-center.vercel.app`

That link will work on phones in Kenya and outside Kenya.

## Marketing Use

Use this public link in:

- WhatsApp
- Facebook
- Instagram bio
- Google Search Console
- Printed posters and business cards

## Important Note

The public pages are ready now.
If you want appointment and contact submissions to save properly worldwide, connect a hosted production database after deployment.
