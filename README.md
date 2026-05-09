# Vishal Kumar — Premium Developer Portfolio

A modern, premium, fully responsive **frontend-only** developer portfolio for
**Vishal Kumar — Full Stack .NET Developer** (2.5+ years of experience).

Built with the 2026 web stack:

- ⚡ **Next.js 15** (App Router) + **React 19**
- 🟦 **TypeScript** end-to-end
- 🎨 **Tailwind CSS** + custom design system tokens
- 🌀 **Framer Motion** animations
- 🧊 Glassmorphism + animated gradients + particle field
- 🌗 Dark / Light theme with `next-themes`
- 🧩 ShadCN-style reusable UI primitives (`Button`, `Card`, `Badge`, `Input`, `Textarea`)
- 🪄 Lucide React icons
- 📜 Static JSON-style data files (no backend, no DB, no API)
- 🚀 Production-ready, deploys free on **Vercel**

## ✨ Features

- Sticky glass navbar with scroll-spy & mobile menu
- Scroll progress indicator
- Animated hero with typing effect, particles, and floating tech chips
- About section with pillars + highlights
- Animated skill cards with progress bars (Backend, Frontend, Database, Tools)
- Experience timeline with “Current” badge
- Project cards with tech stack, features, GitHub & live demo buttons
- Stylish certification cards
- Education section
- Contact section with phone, email, GitHub, LinkedIn + UI-only contact form
- Footer with social links + copyright
- Loading animation, back-to-top button, custom scrollbar
- Smooth scrolling, hover micro-interactions, gradient/glow accents
- SEO metadata + OpenGraph/Twitter tags
- Fully responsive (mobile / tablet / desktop)

## 🗂 Folder Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout, theme, navbar, loader
│   ├── page.tsx            # Composes all sections
│   ├── loading.tsx         # Route-level loading UI
│   └── globals.css         # Tailwind + design tokens + glass utilities
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── certifications.tsx
│   │   ├── education.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── shared/
│   │   ├── particles.tsx
│   │   ├── scroll-progress.tsx
│   │   ├── section-heading.tsx
│   │   ├── typing-effect.tsx
│   │   ├── grid-background.tsx
│   │   ├── back-to-top.tsx
│   │   └── loader.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/
│   ├── utils.ts
│   └── data/
│       ├── personal.ts
│       ├── nav.ts
│       ├── skills.ts
│       ├── experience.ts
│       ├── projects.ts
│       ├── certifications.ts
│       └── education.ts
├── public/
│   ├── vishal.png          # Profile photo
│   ├── favicon.svg
│   └── Vishal_Kumar.pdf    # Resume (linked from Hero CTA)
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open
http://localhost:3000
```

## 🧰 Customization

All content lives in `lib/data/` — update these files and the site updates everywhere:

- `personal.ts` — name, role, contact, socials, summary
- `skills.ts` — categorized skills + progress %
- `experience.ts` — companies, roles, periods, highlights
- `projects.ts` — featured project cards (image gradient + emoji)
- `certifications.ts` — certifications list
- `education.ts` — degrees / institutions
- `nav.ts` — top nav items

To change the profile photo, replace `public/vishal.png`.
To swap the resume, replace `public/Vishal_Kumar.pdf` (or update `resumeUrl`
and `resumeFileName` in `lib/data/personal.ts`).

## ☁️ Deploy on Vercel

1. Push this repo to GitHub.
2. Visit [vercel.com/new](https://vercel.com/new) → import the repo.
3. Click **Deploy**. That’s it — completely free.

## 📄 License

MIT — feel free to adapt for your own portfolio.

---

Designed & developed with ❤️ by **Vishal Kumar**.
