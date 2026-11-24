# EnvironMeet

A responsive community-first web application for EnvironMeet, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local setup

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Project structure

- `src/app/page.tsx` — landing page route
- `src/app/layout.tsx` — metadata and global layout
- `src/app/globals.css` — visual system and responsive styles
- `src/components/environmeet.tsx` — sections and interactive UI
- `src/components/logo.tsx` — reusable outline logo mark

RSVP and registration forms provide client-side confirmation feedback. They are front-end demos and do not submit to a server until an API or form service is connected.
