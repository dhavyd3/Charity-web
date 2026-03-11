# Together For Orphans — Project Documentation

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Internationalization (i18n)](#internationalization-i18n)
6. [Responsive Design](#responsive-design)
7. [Pages](#pages)
8. [Components](#components)
9. [Styling](#styling)
10. [Adding New Content](#adding-new-content)
11. [Deployment](#deployment)

---

## Overview

**Together For Orphans** is a charity website built with Next.js. It showcases the organization's mission, programs (hospital, education, reception centers), latest news, and provides a donation page. The site supports English and French with a client-side language switcher that persists across sessions.

---

## Tech Stack

| Technology      | Version  | Purpose                      |
| --------------- | -------- | ---------------------------- |
| Next.js         | 16.1.6   | React framework / SSG        |
| React           | 19.2.4   | UI library                   |
| TypeScript      | 5.x      | Type safety                  |
| Tailwind CSS    | 3.4.1    | Utility-first styling        |
| Lucide React    | latest   | Icon library                 |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

The dev server runs on `http://localhost:3000` by default.

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (LanguageProvider wraps here)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About Us
│   ├── hospital/page.tsx   # Our Hospital
│   ├── centers/page.tsx    # Reception Centers
│   ├── education/page.tsx  # Education Program
│   ├── projects/page.tsx   # Projects
│   ├── news/page.tsx       # News & Updates
│   ├── contact/page.tsx    # Contact
│   └── donate/page.tsx     # Donate
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navbar + language switcher
│   │   └── Footer.tsx      # Site footer
│   └── home/
│       ├── Hero.tsx        # Hero banner
│       ├── ServiceCards.tsx # Program cards
│       ├── AboutSection.tsx# Mission overview
│       ├── ImpactStats.tsx # Statistics section
│       └── LatestNews.tsx  # Recent articles
├── lib/
│   ├── LanguageContext.tsx  # i18n React Context + hook
│   ├── translations/
│   │   ├── en.ts           # English dictionary
│   │   ├── fr.ts           # French dictionary
│   │   └── index.ts        # Type export
│   ├── constants.ts        # Shared constants
│   ├── types.ts            # Shared types
│   └── utils.ts            # Utility functions
└── styles/
    └── globals.css         # Tailwind base + custom styles
public/
├── images/                 # Static images
└── ...                     # Favicon, etc.
```

---

## Internationalization (i18n)

### Architecture

The i18n system is built with React Context API — no external library required.

| File                          | Purpose                                |
| ----------------------------- | -------------------------------------- |
| `src/lib/LanguageContext.tsx`  | Context provider, hook, persistence    |
| `src/lib/translations/en.ts`  | English translations (source of truth) |
| `src/lib/translations/fr.ts`  | French translations                    |
| `src/lib/translations/index.ts` | Type export                          |

### How It Works

1. `LanguageProvider` wraps the app in `layout.tsx`.
2. On mount, it reads the saved language from `localStorage` (key: `tfo-language`).
3. Components call `useLanguage()` to get `{ language, setLanguage, t }`.
4. `t` is the active translation dictionary — use `t.nav.home`, `t.about.heroTitle`, etc.
5. Switching language updates the context, re-renders all consumers, and saves to `localStorage`.

### Usage in Components

```tsx
'use client';
import { useLanguage } from '@/lib/LanguageContext';

export default function MyComponent() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t.about.heroTitle}</h1>
      <button onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}>
        {language === 'EN' ? 'FR' : 'EN'}
      </button>
    </div>
  );
}
```

### Adding a New Language

1. Create `src/lib/translations/xx.ts` with the same structure as `en.ts`.
2. Import it in `LanguageContext.tsx` and add to the `translationMap`.
3. Update the `Language` type to include the new code.

### Adding New Translation Keys

1. Add the key and English text to `en.ts`.
2. Add the corresponding French text to `fr.ts`.
3. TypeScript will enforce that both dictionaries have the same shape.

---

## Responsive Design

The site uses Tailwind CSS breakpoints for full responsiveness:

| Breakpoint | Prefix | Target           |
| ---------- | ------ | ---------------- |
| < 640px    | (none) | Mobile phones    |
| ≥ 640px    | `sm:`  | Large phones     |
| ≥ 768px    | `md:`  | Tablets          |
| ≥ 1024px   | `lg:`  | Laptops/Desktop  |
| ≥ 1280px   | `xl:`  | Large Desktop    |

### Key Responsive Patterns

- **Grid layouts**: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- **Typography scaling**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- **Spacing**: `py-12 sm:py-16 md:py-20 lg:py-24`
- **Container padding**: `px-4 sm:px-6 lg:px-8`
- **Navbar**: Hamburger menu on mobile, horizontal nav on `lg:` and above
- **Images**: `object-cover` with responsive height via Tailwind classes

### Testing Responsiveness

Test at these common widths:
- **375px** — iPhone SE / small phones
- **414px** — iPhone 14 / standard phones
- **768px** — iPad / tablets
- **1024px** — iPad Pro / small laptops
- **1440px** — Standard desktop
- **1920px** — Full HD desktop

---

## Pages

| Route         | Description                                    |
| ------------- | ---------------------------------------------- |
| `/`           | Home — hero, services, about, stats, news      |
| `/about`      | Mission, vision, values, team overview          |
| `/hospital`   | Hospital program details and services           |
| `/centers`    | Reception centers for orphans                   |
| `/education`  | Education program details                       |
| `/projects`   | Current and past projects                       |
| `/news`       | News articles and updates                       |
| `/contact`    | Contact form and organization information       |
| `/donate`     | Donation form with amount selection             |

---

## Components

### Layout Components

#### `Header.tsx`
- Fixed navbar with logo, navigation links, language switcher, and donate button.
- Mobile: hamburger menu with slide-down panel.
- Language switcher button toggles between EN and FR.
- Nav links are derived from the translation dictionary for automatic localization.

#### `Footer.tsx`
- Four-column responsive grid: about, quick links, programs, contact info.
- All text pulled from translations.

### Home Components

| Component           | Section                                    |
| ------------------- | ------------------------------------------ |
| `Hero.tsx`          | Full-width banner with CTA buttons + stats |
| `ServiceCards.tsx`   | Four program cards with icons              |
| `AboutSection.tsx`  | Mission description with feature list      |
| `ImpactStats.tsx`   | Animated statistics counters               |
| `LatestNews.tsx`    | Three recent news article cards            |

---

## Styling

### Tailwind Configuration

Custom theme extensions in `tailwind.config.ts`:

- **Colors**: `primary`, `primary-dark`, `secondary`, `accent`, `neutral-*`
- **Fonts**: `heading` (Playfair Display), `body` (Inter)
- **Container**: `container-custom` class for consistent max-width and padding

### Global Styles (`globals.css`)

- Tailwind base/components/utilities layers
- Custom utility classes like `.container-custom`, `.btn-primary`, `.btn-secondary`
- Font imports via `@next/font` or Google Fonts link

---

## Adding New Content

### Adding a New Page

1. Create `src/app/your-page/page.tsx`.
2. Add the `'use client'` directive.
3. Import and use `useLanguage()`.
4. Add translation keys to `en.ts` and `fr.ts`.
5. Add the nav link to the `nav` section of both translation files.
6. Update `Header.tsx` nav links array if needed.

### Adding a News Article

Add the article object to the `news.articles` array in both `en.ts` and `fr.ts`.

---

## Deployment

The app is a standard Next.js application that can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Configure Next.js plugin
- **Docker**: Use the official Next.js Dockerfile
- **Static export**: Add `output: 'export'` to `next.config.ts` for fully static hosting

### Environment Variables

No environment variables are required for the base application. Add a `.env.local` file if you integrate external services (CMS, payment gateway, etc.).

---

## License

This project is proprietary to the Together For Orphans organization.
