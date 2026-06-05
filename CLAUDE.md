# CLAUDE.md — Portfolio

Personal portfolio website for 张意菁 (laotie). Single-page scroll site with dark theme, animated background, and glassmorphism cards.

## Commands

```bash
npm run dev        # Start dev server (Vite, default port 5173)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run deploy     # Build + publish to GitHub Pages (gh-pages)
```

## Tech Stack

- **React 18** (JSX, no TypeScript)
- **Vite 4** with `@vitejs/plugin-react`
- **Tailwind CSS 3** with custom dark theme
- **PostCSS / Autoprefixer**
- **Icons:** Lucide React (`lucide-react`)
- **Font:** Inter (Google Fonts, weights 300–700)
- **Deploy:** GitHub Pages via `gh-pages` → `https://yuge8899.github.io/portfolio`

## Project Structure

```
portfolio/
  index.html              # Entry HTML, Inter font loaded via Google Fonts
  vite.config.js          # base: '/portfolio/'
  tailwind.config.js      # Custom colors, 11 keyframe animations
  postcss.config.js
  src/
    main.jsx              # ReactDOM.createRoot mount
    App.jsx               # Root: AnimatedBackground + 6 sections + Footer
    index.css             # Tailwind directives + custom CSS
    components/
      Navigation.jsx      # Fixed top nav, glassmorphism, smooth scroll links
      Hero.jsx            # Full-viewport intro section
      About.jsx           # Bio + resume download
      Skills.jsx          # Skill icons grid
      Projects.jsx        # Project cards grid
      Contact.jsx         # Contact info + social links
      Footer.jsx          # Copyright + credits
      AnimatedBackground.jsx  # Canvas/particle animated background
```

## Design System

### Colors (from tailwind.config.js)

| Token | Value | Usage |
|-------|-------|-------|
| `bg-dark` | `#0A0A0F` | Page background |
| `bg-gradient-1` | `#1A1A2E` | Gradient stops, section backgrounds |
| `primary` | `#6366F1` | Buttons, links, accents (Indigo) |
| `primary-light` | `#818CF8` | Hover states, lighter accents |
| `accent-glow` | `#8B5CF6` | Glow effects, secondary accent (Violet) |
| `text-primary` | `#FFFFFF` | Main text on dark backgrounds |
| `text-secondary` | `#94A3B8` | Subtitle, muted text (Slate-400) |
| `card-bg` | `rgba(255,255,255,0.05)` | Card glassmorphism background |
| `border` | `rgba(255,255,255,0.1)` | Subtle borders, dividers |

### Typography

- **Primary font:** Inter (300/400/500/600/700), loaded from Google Fonts in `index.html`
- **Chinese fallback:** PingFang SC, 思源黑体 (not explicitly set in CSS, implied by system stack)
- **Hero heading:** ~64px (mobile 36px), bold
- **Section headings:** 36px, bold
- **Body:** 16–18px, regular
- **Small/caption:** 14px

### Animations (11 custom keyframes)

| Animation | Duration | Behavior |
|-----------|----------|----------|
| `float` / `float-slow` / `float-slower` | 6s/8s/10s | Vertical float +-20px |
| `pulse-glow` | 4s | Opacity 0.5→0.8 + scale 1→1.05 |
| `sparkle` | 2s | Opacity + rotation 0→180deg |
| `particle` | 20s | Translate upward -100vh |
| `beam` | 3s | Opacity + slight translateY |
| `wave` | 8s | Horizontal translateX -50% |
| `aurora` | 15s | Complex translate + opacity |
| `fade-in-up` | 0.8s | Scroll-reveal: fade + translateY 30→0 |
| `scale-in` | 0.5s | Scale 0.9→1 + fade in |

### Layout

- **Max content width:** 1200px (from design spec)
- **Section padding:** 80px (mobile 24px)
- **Section spacing:** 120px (mobile 80px)
- **Navigation:** Fixed top, 72px height, backdrop blur
- **Breakpoints:** Desktop >1024px, Tablet 768–1024px, Mobile <768px

### Visual Style

- Dark theme throughout (`bg-dark` #0A0A0F)
- Glassmorphism cards (`card-bg` with semi-transparent white)
- Indigo/Violet gradient accents (`linear-gradient(135deg, #6366F1, #8B5CF6)`)
- Animated background (particles/canvas via `AnimatedBackground` component)
- Subtle hover effects: card scale up + shadow deepen

## Coding Conventions

- **No TypeScript** — plain JSX only (though `@types/react` is installed as devDependency, components use `.jsx`)
- **Functional components** with hooks (`useState`, `useEffect`)
- **Tailwind classes** for all styling; avoid inline styles
- **Lucide React** for all icons (import from `lucide-react`)
- **Section components** are self-contained, each renders one full-viewport or content section
- **Scroll state** managed in `App.jsx` via `useState(scrollY)`, passed down to `AnimatedBackground`
- **Smooth scrolling** for navigation links
- **Auto-deploy** preference: after changes are verified, run `npm run deploy` to publish

## Deployment

- **Target:** GitHub Pages at `https://yuge8899.github.io/portfolio`
- **Method:** `gh-pages` package publishes `dist/` to `gh-pages` branch
- **Vite base path:** `/portfolio/` (required for GitHub Pages sub-path)
- **No CI/CD configured (yet)** — deploy is manual via `npm run deploy`
  - GitHub Actions workflow available at `.github/workflows/deploy.yml` (auto-deploy on push to main)

## SDD Invariant

Design decisions are persisted in `specs/`. Before touching animations, read `specs/animation-architecture.md`.
