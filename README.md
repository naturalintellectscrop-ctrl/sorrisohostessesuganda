# Sorrisó Hostesses Uganda

Premium marketing site for Sorrisó Hostesses Uganda — a one-page site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP + IntersectionObserver-driven scroll reveals
- **Icons:** lucide-react (brand/social icons are inline SVGs — lucide dropped brand logos)
- **Forms:** FormSubmit (client-side POST, no backend)
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All copy, services, gallery images, and contact details live in [`src/data/content.ts`](src/data/content.ts) as typed data objects — update that file to change site content without touching component code.

Placeholder photography currently lives in `public/images/placeholders/`; swap these out for real event photography as it becomes available, no component changes required.

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co) — no account signup required, just a destination email. Until that email is set, the form intentionally refuses to submit anywhere (visitors see a message pointing them to WhatsApp/phone/email instead), so no inquiry is ever silently sent to a placeholder address.

To connect it, set the destination inbox as an environment variable:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_FORM_EMAIL=your-real-email@example.com
```

**First submission only:** FormSubmit sends a one-time confirmation link to that inbox the first time it receives a submission — whoever owns that inbox needs to click it once to activate delivery. After that, submissions arrive automatically.

## Build

```bash
npm run build
npm run start
```
