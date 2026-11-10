# Abysmal Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully-responsive, dark-mode React + Tailwind CSS landing page for Abysmal (a board-game café/ludoteca) that faithfully reflects the brand extracted from their Instagram and converts visitors into walk-ins.

**Architecture:** Vite + React 18 (TSX) with Tailwind CSS v3 and a single-page layout of stacked sections. No router needed — all sections live in `App.tsx` as imported components. Framer Motion handles micro-animations; no backend required (contact form posts to a mailto/WhatsApp link).

**Tech Stack:** Node 24, Vite 5, React 18, TypeScript, Tailwind CSS 3, Framer Motion 11, Lucide React (icons), Google Maps embed (iframe).

**Spec:** This document is the spec. The Instagram analysis (Taste audit) is embedded in the Design Tokens task below.

---

## 🎨 Taste Audit — Brand Extraction from Instagram

### Paleta de colores (extraída de las capturas)

| Token             | Hex       | Source / Use                                              |
|:------------------|:----------|:----------------------------------------------------------|
| `abyss-900`       | `#0b1418` | Fondo principal oscuro (teaser "Algo Emerge")             |
| `abyss-800`       | `#132028` | Cards / superficies elevadas                              |
| `abyss-700`       | `#1c3040` | Navbar fondo / borders                                    |
| `mint-400`        | `#5fe3b2` | Acento primario bioluminiscente (logo, tipografía teaser) |
| `coral-500`       | `#ff6347` | Acento secundario cálido (cursivas de los flyers)         |
| `cream-100`       | `#f7f4ea` | Texto light / badges sobre oscuro                         |
| `surface`         | `#182530` | Glassmorphism navbar background                           |

### Tipografía (feeling extraído)

- **Display / Títulos grandes:** fuente condensada bold estilo "cartel alternativo" → usar **Bebas Neue** (Google Fonts) para H1 y nombres de sección. Captura el bold de los títulos de los flyers.
- **Script / Acento emocional:** fuente cursiva cálida → usar **Dancing Script** solo para taglines y frases de la mascota.
- **Body / UI:** sans-serif geométrica limpia → usar **Inter** o **DM Sans** (ya incluida en Tailwind por defecto vía `font-sans`).

### Sistema visual (Taste: site-kind = place/gaming)

- Negocio físico de entretenimiento → clasificación **Place** con elementos **Gaming**.
- Fotografías reales del lugar son el activo principal; se usan placeholders de Unsplash temáticos hasta tener fotos propias.
- Una mascota (pulpo verde) y logotipo kraken son el sello: aparecen en Navbar y Hero, no en cada sección.
- Efecto grain sutil solo en Hero (como el teaser de Instagram, que fue el mejor post identificado).
- Sin shaders WebGL ni efectos 3D — el lugar no vende software/hardware, es un espacio físico.
- Paleta oscura principal con acentos mint/coral vibrantes.
- Máximo 2 familias tipográficas en uso simultáneo por sección.

---

## Global Constraints

- Node ≥ 24, npm ≥ 11
- React 18 strict mode
- TypeScript strict (no `any`)
- Tailwind v3 config extendido con tokens de marca (ver Task 1)
- Mobile-first: breakpoints `sm` (640), `md` (768), `lg` (1024), `xl` (1280), `2xl` (1536)
- Sin dependencias de CSS externo excepto Google Fonts (via `index.html`)
- WhatsApp link: `https://wa.me/52XXXXXXXXXX` (placeholder; usuario reemplaza número)
- Google Maps iframe: coordenadas placeholder `Av Bellena 2-10, Justo Sierra`
- Todas las imágenes: Unsplash URLs estáticas (misma imagen no se repite)
- Accesibilidad: `aria-label` en botones icon-only, contraste AA mínimo

## Review Focus

1. **Menú hamburguesa en móvil:** el click fuera del menú debe cerrarlo — `useEffect` con listener en `document`. Verificar con viewport 390px.
2. **Sección Hero en ultra-wide (>1536px):** el grain overlay y el texto no deben romperse — usar `max-w-screen-2xl mx-auto` como contenedor.
3. **WhatsApp flotante solapando contenido:** en mobile 390px el botón no debe tapar el footer text — verificar z-index y bottom offset con scroll al final.
4. **Iframe de Google Maps en iOS Safari:** `allow="fullscreen"` puede ser ignorado; verificar que la altura fija 300px se respete sin overflow.
5. **Framer Motion en reduced-motion:** wrappear animaciones con `useReducedMotion()` y desactivarlas si el usuario lo prefiere — accessibility requirement.

---

## File Structure

```
d:\Abyssmal\
├── index.html                        # HTML root, Google Fonts link tags
├── vite.config.ts
├── tailwind.config.ts                # Brand tokens, Bebas Neue font family
├── postcss.config.js
├── tsconfig.json
├── package.json
├── public/
│   └── abysmal-logo.svg              # Placeholder SVG del kraken
└── src/
    ├── main.tsx                      # React root, StrictMode
    ├── App.tsx                       # Stacks all section components
    ├── index.css                     # @tailwind directives + grain overlay CSS
    ├── tokens.ts                     # Brand color/font constants (TypeScript)
    ├── components/
    │   ├── Navbar.tsx                # Sticky glass navbar + hamburger
    │   ├── Hero.tsx                  # Full-height hero + grain + CTA
    │   ├── Services.tsx              # Animated cards grid (4 services)
    │   ├── About.tsx                 # About section with mascot quote
    │   ├── Gallery.tsx               # Masonry-style photo grid
    │   ├── Contact.tsx               # Map iframe + hours + WhatsApp link
    │   ├── Footer.tsx                # Compact footer with social links
    │   └── WhatsAppFAB.tsx           # Fixed floating action button
    └── hooks/
        └── useScrollSpy.ts           # Active section detection for navbar
```

---

## Task 1 — Project Scaffold + Design Tokens

**Files:**
- Create: `d:\Abyssmal\package.json`
- Create: `d:\Abyssmal\vite.config.ts`
- Create: `d:\Abyssmal\tailwind.config.ts`
- Create: `d:\Abyssmal\postcss.config.js`
- Create: `d:\Abyssmal\tsconfig.json`
- Create: `d:\Abyssmal\index.html`
- Create: `d:\Abyssmal\src\index.css`
- Create: `d:\Abyssmal\src\tokens.ts`
- Create: `d:\Abyssmal\public\abysmal-logo.svg`

**Interfaces:**
- Produces: Tailwind theme tokens `abyss-900`, `abyss-800`, `abyss-700`, `mint-400`, `coral-500`, `cream-100`; font families `display` (Bebas Neue), `script` (Dancing Script), `sans` (Inter)

- [ ] **Step 1:** Run `npm.cmd create vite@latest . -- --template react-ts` from `d:\Abyssmal` (accept overwrite prompt)

- [ ] **Step 2:** Run `npm.cmd install -D tailwindcss@3 postcss autoprefixer` then `npx.cmd tailwindcss init -p --ts`

- [ ] **Step 3:** Run `npm.cmd install framer-motion lucide-react`

- [ ] **Step 4:** Replace `tailwind.config.ts` content with extended theme:

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'abyss': {
          900: '#0b1418',
          800: '#132028',
          700: '#1c3040',
        },
        'mint':  { 400: '#5fe3b2' },
        'coral': { 500: '#ff6347' },
        'cream': { 100: '#f7f4ea' },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        script:  ['"Dancing Script"', 'cursive'],
        sans:    ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 5:** Add Google Fonts link tags to `index.html` `<head>` (Bebas Neue, Dancing Script, Inter weights 400/500/600/700), set `<title>Abysmal — Games & Food</title>`

- [ ] **Step 6:** Replace `src/index.css` with `@tailwind` directives + `.grain-overlay` CSS utility class (position absolute, inset-0, background grain, pointer-events none, opacity-10)

- [ ] **Step 7:** Create `src/tokens.ts` exporting `WHATSAPP_URL = 'https://wa.me/52XXXXXXXXXX'` and `NAV_LINKS` array with 6 entries: `{label, href}` for `#servicios`, `#sobre-nosotros`, `#galeria`, `#contacto`

- [ ] **Step 8:** Verify `npm.cmd run dev` starts without errors, blank page renders with dark background

- [ ] **Step 9:** Commit
```bash
git init && git add . && git commit -m "feat: scaffold Vite+React+Tailwind with Abysmal brand tokens"
```

---

## Task 2 — Navbar (Sticky Glassmorphism + Hamburger)

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/hooks/useScrollSpy.ts`
- Modify: `src/App.tsx` (import and mount `<Navbar />`)

**Interfaces:**
- Consumes: `NAV_LINKS` from `tokens.ts`
- Produces: `<Navbar />` — no props; manages own open/scroll state

- [ ] **Step 1:** Create `useScrollSpy.ts` — hook that returns `activeSection: string` by observing `IntersectionObserver` on elements matching `NAV_LINKS[].href` IDs, threshold 0.5

- [ ] **Step 2:** Implement `Navbar.tsx`:
  - `useState(isOpen: boolean)` for mobile menu
  - `useScrollSpy()` for active link highlight
  - `useEffect` on mount: `document.addEventListener('click', closeOnOutside)` where outside = click target not inside `.navbar-root` ref
  - Tailwind classes: `fixed top-0 w-full z-50 backdrop-blur-md bg-surface/70 border-b border-abyss-700`
  - Logo: `font-display text-2xl text-mint-400` with SVG kraken inline (20×20)
  - Desktop links: hidden below `md`, flex above — active link gets `text-mint-400`, inactive `text-cream-100/70 hover:text-cream-100`
  - Hamburger button: `md:hidden`, toggles `isOpen`; renders `Menu` or `X` from lucide-react
  - Mobile drawer: `AnimatePresence` + `motion.div` sliding from top, `variants: { open: {height:'auto'}, closed:{height:0} }`, `overflow-hidden`

- [ ] **Step 3:** Mount `<Navbar />` as first child in `App.tsx`

- [ ] **Step 4:** Manual check at 390px: open menu → click link → menu closes → page scrolls to section

- [ ] **Step 5:** Commit
```bash
git add src/components/Navbar.tsx src/hooks/useScrollSpy.ts src/App.tsx
git commit -m "feat: sticky glassmorphism navbar with hamburger menu"
```

---

## Task 3 — Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `WHATSAPP_URL` from `tokens.ts`
- Produces: `<Hero />` — no props

- [ ] **Step 1:** Implement `Hero.tsx`:
  - Full-height section `min-h-screen` with `id="inicio"`, `bg-abyss-900 relative overflow-hidden`
  - Background: Unsplash image `https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=1600` (board game table, dark mood) as `object-cover absolute inset-0 opacity-30`
  - Grain overlay: `<div className="grain-overlay absolute inset-0" />`
  - Content centered: `flex flex-col items-center justify-center text-center px-4 relative z-10`
  - Eyebrow text: `font-script text-coral-500 text-xl mb-2` → "Games & Food"
  - H1: `font-display text-7xl sm:text-9xl text-cream-100 leading-none` → "ABYSMAL"
  - Tagline: `font-sans text-lg sm:text-xl text-cream-100/80 mt-4 max-w-xl` → "El lugar donde los dados deciden tu destino. Paga por tiempo, juega sin límites."
  - Two CTAs side-by-side: primary `bg-mint-400 text-abyss-900 font-sans font-semibold px-6 py-3 rounded-full` → "Reserva tu mesa"; secondary `border border-coral-500 text-coral-500 px-6 py-3 rounded-full` → "Ver servicios"
  - Entrance animation: `motion.div` with `initial:{opacity:0,y:40}` → `animate:{opacity:1,y:0}` staggered 0.2s per child
  - Scroll-down caret: `ChevronDown` from lucide-react, `animate-bounce`, `absolute bottom-8`

- [ ] **Step 2:** Add `<Hero />` after `<Navbar />` in `App.tsx`

- [ ] **Step 3:** Verify: grain visible, text readable (AA contrast), animations play once on load, `prefers-reduced-motion` skips animation

- [ ] **Step 4:** Commit
```bash
git add src/components/Hero.tsx src/App.tsx
git commit -m "feat: hero section with grain overlay and entrance animations"
```

---

## Task 4 — Services Cards (Animated Grid)

**Files:**
- Create: `src/components/Services.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `<Services />` — no props; defines `SERVICE_CARDS` data array internally

- [ ] **Step 1:** Define `SERVICE_CARDS` array (4 items) inside `Services.tsx`:
```ts
const SERVICE_CARDS = [
  { icon: 'Clock',      title: 'Zona de Juego',      desc: 'Paga por tiempo y juega lo que quieras de nuestra biblioteca de más de 300 títulos.', accent: 'mint' },
  { icon: 'ShoppingBag',title: 'Tienda',              desc: 'Compra juegos de mesa y TCG. Cartas sueltas, sobres, torneos de Magic y más.', accent: 'coral' },
  { icon: 'Calendar',   title: 'Eventos',             desc: 'Torneos, noches temáticas, campañas de D&D, billar y juegos de rol cada semana.', accent: 'mint' },
  { icon: 'Swords',     title: 'Desafío al Staff',    desc: '¿Te atreves? Reta a nuestros empleados. Derrota a más y gana mejores premios.', accent: 'coral' },
]
```

- [ ] **Step 2:** Implement `Services.tsx`:
  - Section `id="servicios"` `py-24 bg-abyss-800`
  - Section heading: `font-display text-5xl text-cream-100 text-center mb-4` → "NUESTROS SERVICIOS"
  - Underline accent: `w-16 h-1 bg-mint-400 mx-auto mb-16`
  - Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4`
  - Each card: `motion.div` with `whileHover={{y:-8, boxShadow:'0 20px 40px rgba(95,227,178,0.15)'}}` transition spring; `bg-abyss-900 rounded-2xl p-8 border border-abyss-700 cursor-default`
  - Card icon: Lucide icon in `accent === 'mint' ? 'text-mint-400' : 'text-coral-500'` size 32
  - Card title: `font-display text-2xl text-cream-100 mt-4 mb-2`
  - Card desc: `font-sans text-sm text-cream-100/60 leading-relaxed`
  - Scroll-triggered entrance: `useInView` from framer-motion, stagger 0.1s per card, `initial:{opacity:0,y:30}` → in-view `{opacity:1,y:0}`

- [ ] **Step 3:** Add `<Services />` after `<Hero />` in `App.tsx`

- [ ] **Step 4:** Verify 4 cards render in 1-col on 390px, 2-col on 768px, 4-col on 1280px; hover lifts card

- [ ] **Step 5:** Commit
```bash
git add src/components/Services.tsx src/App.tsx
git commit -m "feat: animated service cards with scroll-triggered entrance"
```

---

## Task 5 — About Section

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `<About />` — no props

- [ ] **Step 1:** Implement `About.tsx`:
  - Section `id="sobre-nosotros"` `py-24 bg-abyss-900`
  - Two-column layout `lg:grid lg:grid-cols-2 lg:gap-16 max-w-6xl mx-auto px-4 items-center`
  - Left col: Unsplash image `https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=800` (board games on table) in `rounded-2xl overflow-hidden aspect-square object-cover`; `motion.div whileInView:{opacity:1,x:0} initial:{opacity:0,x:-40}`
  - Right col: `motion.div whileInView:{opacity:1,x:0} initial:{opacity:0,x:40}`
    - Eyebrow: `font-script text-coral-500 text-xl` → "Nuestra historia"
    - H2: `font-display text-5xl text-cream-100 mt-2 mb-6` → "DESDE LAS PROFUNDIDADES DEL ABISMO"
    - Body: `font-sans text-cream-100/70 leading-relaxed` two paragraphs about the concept (placeholder copy about founding, mission, the abyss metaphor)
    - Mascot quote bubble: `bg-abyss-800 border-l-4 border-mint-400 rounded-r-xl p-4 mt-6`; `font-script text-mint-400 text-lg` → mascot quote from the flyers

- [ ] **Step 2:** Add `<About />` after `<Services />` in `App.tsx`

- [ ] **Step 3:** Verify: stacked single column on mobile, side-by-side on 1024px+

- [ ] **Step 4:** Commit
```bash
git add src/components/About.tsx src/App.tsx
git commit -m "feat: about section with scroll-triggered split layout"
```

---

## Task 6 — Gallery Grid

**Files:**
- Create: `src/components/Gallery.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Produces: `<Gallery />` — no props; defines `GALLERY_IMAGES` array of 9 Unsplash URLs internally

- [ ] **Step 1:** Define `GALLERY_IMAGES` — 9 unique Unsplash board-game/café/billiards URLs (600px width, all different IDs)

- [ ] **Step 2:** Implement `Gallery.tsx`:
  - Section `id="galeria"` `py-24 bg-abyss-800`
  - Heading pattern same as Services (font-display, underline)  → "GALERÍA"
  - Grid: `columns-2 md:columns-3 gap-4 max-w-6xl mx-auto px-4` (CSS columns masonry)
  - Each image: `motion.div` `whileHover:{scale:1.03}` `overflow-hidden rounded-xl mb-4 break-inside-avoid`; `<img className="w-full object-cover" />`
  - Scroll entrance: stagger 0.07s per item, `useInView` once

- [ ] **Step 3:** Add `<Gallery />` after `<About />` in `App.tsx`

- [ ] **Step 4:** Verify: 2 columns on 390px, 3 on 768px+; images don't repeat

- [ ] **Step 5:** Commit
```bash
git add src/components/Gallery.tsx src/App.tsx
git commit -m "feat: masonry gallery grid with hover zoom"
```

---

## Task 7 — Contact + Map

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `WHATSAPP_URL` from `tokens.ts`
- Produces: `<Contact />` — no props

- [ ] **Step 1:** Implement `Contact.tsx`:
  - Section `id="contacto"` `py-24 bg-abyss-900`
  - Two-column `lg:grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto px-4`
  - Left col info:
    - Heading pattern → "ENCUÉNTRANOS"
    - `MapPin` icon + `font-sans text-cream-100/80` → "Av Bellena, Justo Sierra" (no number per Taste rule 9)
    - `Clock` icon → hours grid: Mon–Thu 14:00–22:00; Fri–Sat 12:00–00:00; Sun 12:00–20:00
    - `MessageCircle` icon → WhatsApp CTA `<a href={WHATSAPP_URL} target="_blank">` styled as `bg-green-500 text-white rounded-full px-6 py-3`
  - Right col: Google Maps `<iframe>` with `src="https://www.google.com/maps/embed?pb=..."` placeholder, `width="100%" height="300" className="rounded-2xl border border-abyss-700"`, `loading="lazy"` and `title="Ubicación Abysmal"`

- [ ] **Step 2:** Add `<Contact />` after `<Gallery />` in `App.tsx`

- [ ] **Step 3:** Verify: iframe renders at 300px height on mobile without x-overflow; WhatsApp button opens new tab

- [ ] **Step 4:** Commit
```bash
git add src/components/Contact.tsx src/App.tsx
git commit -m "feat: contact section with hours, map iframe, WhatsApp CTA"
```

---

## Task 8 — Footer + WhatsApp FAB

**Files:**
- Create: `src/components/Footer.tsx`
- Create: `src/components/WhatsAppFAB.tsx`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `WHATSAPP_URL` from `tokens.ts`
- Produces: `<Footer />`, `<WhatsAppFAB />`

- [ ] **Step 1:** Implement `Footer.tsx`:
  - `bg-abyss-900 border-t border-abyss-700 py-10`
  - `max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4`
  - Left: `font-display text-2xl text-mint-400` → "ABYSMAL" + `font-sans text-xs text-cream-100/40` → "© 2026 Abysmal Games and Food. Todos los derechos reservados."
  - Right: social icon links — `Instagram`, `Facebook` from lucide-react; `text-cream-100/50 hover:text-mint-400 transition-colors`

- [ ] **Step 2:** Implement `WhatsAppFAB.tsx`:
  - `fixed bottom-6 right-6 z-50`
  - `<a href={WHATSAPP_URL} target="_blank" aria-label="Contactar por WhatsApp">`
  - Circle button `w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg`
  - WhatsApp SVG icon (inline, white, 28px)
  - `motion.div` with `animate:{scale:[1,1.1,1]}` `transition:{repeat:Infinity, duration:2, ease:'easeInOut'}` pulse loop
  - `useReducedMotion()` → if true, skip animation

- [ ] **Step 3:** Add `<Footer />` and `<WhatsAppFAB />` as last children in `App.tsx`

- [ ] **Step 4:** Verify: FAB visible on all pages, doesn't overlap footer text at bottom of scroll at 390px; Footer social links work

- [ ] **Step 5:** Commit
```bash
git add src/components/Footer.tsx src/components/WhatsAppFAB.tsx src/App.tsx
git commit -m "feat: footer with socials + floating WhatsApp FAB with pulse"
```

---

## Task 9 — Polish, Accessibility & Final Check

**Files:**
- Modify: all `src/components/*.tsx`
- Modify: `src/index.css`

**Interfaces:**
- Consumes: all components
- Produces: shippable build at `dist/`

- [ ] **Step 1:** Add `scroll-smooth` to `<html>` in `index.html`; add `scroll-behavior: smooth` to `index.css` `:root`

- [ ] **Step 2:** Audit every icon-only button for `aria-label`; every `<img>` for meaningful `alt` text

- [ ] **Step 3:** Run contrast check — `abyss-900` background vs `cream-100/70` text must be ≥ 4.5:1 (paste hex values into https://webaim.org/resources/contrastchecker/ or compute manually: `#0b1418` vs `#c8c5be` ≈ 9.1:1 ✓)

- [ ] **Step 4:** Run `npm.cmd run build` — 0 TypeScript errors, 0 Tailwind purge warnings

- [ ] **Step 5:** Run `npm.cmd run preview` — manually test at 390px, 768px, 1440px, 1920px viewports (Chrome DevTools device toolbar)

- [ ] **Step 6:** Final commit
```bash
git add -A && git commit -m "feat: polish, a11y audit, smooth scroll, production build verified"
```
