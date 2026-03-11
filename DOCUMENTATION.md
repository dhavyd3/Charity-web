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

## Payment System (Stripe)

### Overview

The donation page integrates **Stripe** for payment processing, supporting:

- **Credit/debit cards** via Stripe Payment Element
- **Google Pay** (auto-detected on supported browsers/devices)
- **Apple Pay** (auto-detected on Safari/iOS)
- **One-time donations** via PaymentIntents
- **Monthly recurring donations** via Stripe Subscriptions

### Architecture

```
src/
├── lib/
│   ├── stripe.ts              # Server-side Stripe instance (lazy init)
│   └── stripe-client.ts       # Client-side Stripe loader
├── app/
│   ├── api/
│   │   ├── create-payment-intent/route.ts  # One-time donation API
│   │   ├── create-subscription/route.ts    # Monthly donation API
│   │   └── webhook/route.ts               # Stripe webhook handler
│   └── donate/
│       ├── page.tsx            # Multi-step donation form
│       └── success/page.tsx    # Post-payment confirmation
└── components/payment/
    ├── StripeProvider.tsx      # Stripe Elements wrapper (themed)
    ├── CheckoutForm.tsx        # Payment Element + submit logic
    └── PaymentStatus.tsx       # Payment result display
```

### Setup

1. Create a [Stripe account](https://dashboard.stripe.com/register).
2. Copy `.env.local.example` to `.env.local` and fill in your keys:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```
3. For local webhook testing, use the [Stripe CLI](https://stripe.com/docs/stripe-cli):
   ```bash
   stripe listen --forward-to localhost:3000/api/webhook
   ```

### Payment Flow

1. **Step 1 — Amount**: User selects frequency (one-time/monthly) and amount.
2. **Step 2 — Info**: User enters name, email, phone.
3. **Step 3 — Payment**: App calls the API to create a PaymentIntent or Subscription, then renders the Stripe Payment Element (which shows card input, Google Pay, Apple Pay).
4. On success, Stripe redirects to `/donate/success` with donation details.
5. Stripe sends a webhook to `/api/webhook` for server-side confirmation.

### Google Pay & Apple Pay

These are enabled automatically via Stripe's Payment Element with the `wallets` option:

```tsx
<PaymentElement options={{ wallets: { googlePay: 'auto', applePay: 'auto' } }} />
```

They appear automatically when the user's browser/device supports them. No additional setup is needed beyond having a verified Stripe account.

### Webhook Events Handled

| Event                           | Action                        |
| ------------------------------- | ----------------------------- |
| `payment_intent.succeeded`      | Log successful one-time donation |
| `payment_intent.payment_failed` | Log failed payment            |
| `invoice.paid`                  | Log successful recurring payment |
| `invoice.payment_failed`        | Log failed subscription payment |
| `customer.subscription.deleted` | Log subscription cancellation |

### Testing

Use [Stripe test cards](https://stripe.com/docs/testing):
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

---

## Deployment

The app is a standard Next.js application that can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Configure Next.js plugin
- **Docker**: Use the official Next.js Dockerfile
- **Static export**: Not available when using API routes (payment system requires server)

### Environment Variables

Required for payment processing (see `.env.local.example`):

| Variable                              | Required | Description                   |
| ------------------------------------- | -------- | ----------------------------- |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`  | Yes      | Stripe publishable key        |
| `STRIPE_SECRET_KEY`                   | Yes      | Stripe secret key             |
| `STRIPE_WEBHOOK_SECRET`               | Yes      | Stripe webhook signing secret |

The app builds and runs without these variables (payment will show a configuration message), but donations will not process until they are set.

---

## License

This project is proprietary to the Together For Orphans organization.
