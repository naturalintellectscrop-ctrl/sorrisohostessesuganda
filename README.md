# Sorrisó Hostesses Uganda

Premium marketing site for Sorrisó Hostesses Uganda — a one-page site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP + IntersectionObserver-driven scroll reveals
- **Icons:** lucide-react (brand/social icons are inline SVGs — lucide dropped brand logos)
- **Forms:** Web3Forms (client-side POST, no backend)
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

The contact form posts to [Web3Forms](https://web3forms.com). Set your access key via an environment variable:

```bash
# .env.local
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
```

Without a real key, submissions will fail gracefully with an error message.

## Build

```bash
npm run build
npm run start
```
