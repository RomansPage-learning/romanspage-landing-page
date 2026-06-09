# Roman's Page Website

Modern Next.js rebuild of the Romanspage landing website with production-focused UX, SEO, and lead capture.

## Stack

- Next.js App Router (TypeScript)
- React 19
- MongoDB (contact submissions)
- Nodemailer SMTP (contact notification emails)

## Current Capabilities

- Multi-page marketing site with reusable landing components
- Structured content layer for navigation and page copy
- SEO foundation using Metadata API, `robots.txt`, and `sitemap.xml`
- Contact flow with:
	- client-side loading state and in-form toast feedback
	- API-side payload normalization and validation
	- MongoDB persistence
	- configurable duplicate submission cooldown
	- SMTP notification email on successful submission

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create your local env file:

```bash
cp .env.example .env
```

3. Update `.env` values for your environment (especially MongoDB + SMTP).

4. Start development server:

```bash
npm run dev
```

Default local URL is shown in terminal output (typically `http://localhost:3000`).

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment Variables

See [.env.example](.env.example) for the full template.

### Public Site Config

- `NEXT_PUBLIC_SITE_NAME`
- `NEXT_PUBLIC_SITE_TITLE`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_CONTACT_ADDRESS`

### Contact API Backend

- `MONGODB_URI`
- `MONGODB_DB`
- `CONTACT_SUBMISSION_COOLDOWN_MINUTES`

### SMTP Notifications

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_NOTIFICATION_EMAIL`

## Project Structure

- `src/app`: route handlers, pages, layout, metadata routes
- `src/app/api/contact/route.ts`: contact form API (validation, cooldown, DB + email)
- `src/components/landing`: shared landing page sections
- `src/components/forms/contact-form.tsx`: form UI, submit state, toast feedback
- `src/content`: centralized content and navigation data
- `src/lib`: integrations/utilities (`mongodb`, `mailer`, analytics)
- `src/types`: shared type contracts

## Notes

- This project uses webpack for `dev` and `build` scripts.
- On some Windows environments, Next.js may log SWC native-binary warnings and fall back to WASM bindings; this does not block normal development/build flows.
- Never commit real credentials. Rotate exposed secrets immediately if they are ever pasted into logs, commits, or shared channels.
