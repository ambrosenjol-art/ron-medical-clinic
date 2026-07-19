# Deploy With a Free Domain (Vercel)

This project can be published for free on a Vercel subdomain like:

- https://ron-medical-center.vercel.app

## 1. Push Code to GitHub

1. Create a GitHub repository.
2. Push this project to that repository.

## 2. Deploy to Vercel (Free)

1. Go to https://vercel.com
2. Sign in with GitHub.
3. Click New Project.
4. Import your repository.
5. Add environment variables:
   - NEXT_PUBLIC_SITE_URL = your Vercel URL (for example: https://ron-medical-center.vercel.app)
   - DATABASE_URL = production database URL
   - JWT_SECRET = strong random secret
   - GOOGLE_SITE_VERIFICATION = value from Google Search Console (optional at first)
6. Deploy.

## Important Production Note

- The website pages will deploy correctly on Vercel.
- SQLite `file:./dev.db` is not a reliable production database for public serverless deployment.
- For the appointment and contact forms to work properly for people anywhere in the world, move `DATABASE_URL` to a hosted production database.
- Recommended production path: use PostgreSQL, Turso, or another hosted database supported by Prisma.
- If you deploy with only local SQLite, the public pages will open, but saved form data may fail or not persist.

## 3. Verify SEO Endpoints

After deploy, confirm these URLs open:

- /sitemap.xml
- /robots.txt
- /manifest.webmanifest

Example:

- https://ron-medical-center.vercel.app/sitemap.xml

## 4. Connect Google Search Console

1. Open https://search.google.com/search-console
2. Add Property using your full URL (URL Prefix method).
3. Verify ownership.
4. Submit your sitemap URL:
   - https://your-vercel-domain.vercel.app/sitemap.xml

## 5. Improve Ranking Over Time

- Keep publishing health blog posts regularly.
- Use consistent branding: RON Medical Center.
- Use clear service pages and local contact details.
- Later, move to a custom paid domain for stronger trust.

## Important Note

A free subdomain (vercel.app) is fine for launch and testing, and Google can index it.
For long-term medical brand trust, use a custom domain when possible.
