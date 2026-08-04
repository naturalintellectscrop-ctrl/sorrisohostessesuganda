# Sorrisó Hostesses Uganda

Marketing site for Sorrisó Hostesses Uganda. One page, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP + IntersectionObserver-driven scroll reveals
- **Icons:** lucide-react. Social icons are inline SVGs, since lucide v1 dropped brand logos.
- **Forms:** FormSubmit (client-side POST, no backend)
- **Deployment:** Vercel

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All copy, services, gallery images, and contact details live in [`src/data/content.ts`](src/data/content.ts) as typed data objects. Update that file to change site content without touching component code.

### Still to be supplied by the client

These are deliberately left blank or as stand-ins rather than filled with invented values. Components skip any field left empty, so nothing false or dead-ended is rendered.

| Item | Where | Current state |
| --- | --- | --- |
| Phone / WhatsApp | `siteInfo.phone`, `siteInfo.whatsapp` | Blank, contact rows hidden |
| Email address | `siteInfo.email` | Blank, contact row hidden |
| Social profiles | `siteInfo.instagram`, `.linkedin`, `.facebook` | Blank, footer icons hidden |
| Event photography | `public/images/placeholders/` | Stand-in images |
| Testimonials | Not built | Section omitted until real quotes exist |

The service list in `content.ts` describes standard hostess and event-staffing categories. Confirm with the client that it matches what Sorrisó actually offers before launch.

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co). No account signup is required, just a destination email. Until that email is set, the form refuses to submit anywhere and shows a short notice instead, so no inquiry is silently sent to a placeholder address.

To connect it, set the destination inbox as an environment variable:

```bash
# .env.local
NEXT_PUBLIC_CONTACT_FORM_EMAIL=your-real-email@example.com
```

**First submission only:** FormSubmit emails a one-time confirmation link to that inbox the first time it receives a submission. Whoever owns the inbox needs to click it once to activate delivery. After that, submissions arrive automatically.

## Build

```bash
npm run build
npm run start
```
