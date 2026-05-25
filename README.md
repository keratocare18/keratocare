# KeratoCare

KeratoCare is a Vite + React + TypeScript marketing site for a keratoconus and specialty eye-care clinic. The app is styled with Tailwind CSS and shadcn/ui primitives, and is prepared for static deployment on Vercel.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- TanStack Query
- Sonner

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
  pages/
  lib/
  assets/
public/
  favicon.svg
  logo.svg
```

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Linting

```bash
npm run lint
```

## Vercel Deployment

This project includes a `vercel.json` rewrite so React Router routes resolve correctly on refresh and direct navigation.

### Recommended Environment Variables

The public site does not require runtime environment variables.

Optional internal admin route controls:

```bash
VITE_ENABLE_ADMIN_PANEL=true
VITE_ADMIN_PANEL_PASSWORD=your-internal-password
```

Optional Google Sheets lead capture:

```bash
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/your-deployed-web-app/exec
```

Notes:

- Leave `VITE_ENABLE_ADMIN_PANEL` unset in public production deployments unless you intentionally want to expose the internal route.
- Client-side passwords are not a substitute for server-side authentication. For a real production admin workflow, move admin access behind secure backend auth.
- The Google Sheets URL should point to a deployed Google Apps Script web app that appends each contact form submission into your sheet.

## Current Routes

- `/` - main landing page
- `/policies` - legal, privacy, and medical policy page
- `/admin` - internal local-storage admin tools, disabled by default for public deployments

## Deployment Checklist

- Run `npm run lint`
- Run `npm run build`
- Confirm all treatment comparison images load correctly
- Confirm WhatsApp and phone CTA actions behave correctly
- If deploying with admin enabled, set the required environment variables in Vercel
