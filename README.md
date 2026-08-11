# Medha.dev — Personal Portfolio

A modern, responsive personal portfolio built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize your content

Most personal content lives in `src/data/`:

| File | What to edit |
|------|----------------|
| `site.ts` | Name, email, social links, hero copy, stats, fun facts, SEO |
| `experience.ts` | Roles, companies, dates, descriptions |
| `projects.ts` | Project cards, links, featured flags |
| `skills.ts` | Tech stack categories |
| `hobbies.ts` | Hobby cards |

Also replace:

- Profile photo placeholder in `src/components/sections/Hero.tsx`
- `public/resume.pdf` with your real resume
- `public/og.png` with a 1200×630 social preview image (optional)
- Form submission in `src/components/sections/Contact.tsx` (Formspree-ready placeholder)

## Scripts

```bash
npm run dev     # development server
npm run build   # production build
npm run start   # start production server
npm run lint    # eslint
```

## Features

- Sticky responsive navigation + mobile menu
- Dark / light theme with blush-pink accents
- Interactive portfolio terminal (commands, history, Tab autocomplete)
- Framer Motion scroll animations with reduced-motion support
- Scroll progress bar, cursor glow, back-to-top, loading screen
- Contact form validation + success state
- SEO + Open Graph metadata
