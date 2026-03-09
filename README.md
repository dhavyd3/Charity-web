# Together For Orphans - Charity Website

A modern, responsive charity website built with Next.js, TypeScript, and Tailwind CSS, dedicated to supporting orphaned and vulnerable children.

## Features

- 🎨 **Modern Design**: Clean, professional design with custom color scheme (green, orange, mint)
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal speed
- 🎯 **Comprehensive Pages**: Complete website structure including:
  - Home page with hero section and impact statistics
  - About Us page with mission and values
  - Hospital services page
  - Reception Centers page
  - Education programs page
  - Projects page showcasing sustainable development
  - Donation page with multiple giving options
  - News & blog section
  - Contact page with form

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Charity-Website
```

2. Install dependencies:
```bash
npm install
```

3. Add images to the public/images directory:
   - Copy `Together-For-Orphans.jpg` (logo)
   - Copy additional images with these names:
     - `hero-children.jpg`
     - `hospital-care.jpg`
     - `children-group.jpg`
     - `school-children.jpg`
     - `community.jpg`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
Charity-Website/
├── public/
│   └── images/          # Image assets
├── src/
│   ├── app/
│   │   ├── about/       # About page
│   │   ├── centers/     # Reception Centers page
│   │   ├── contact/     # Contact page
│   │   ├── donate/      # Donation page
│   │   ├── education/   # Education page
│   │   ├── hospital/    # Hospital page
│   │   ├── news/        # News page
│   │   ├── projects/    # Projects page
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   └── components/
│       ├── Header.tsx       # Navigation header
│       ├── Footer.tsx       # Site footer
│       ├── Hero.tsx         # Hero section
│       ├── ServiceCards.tsx # Service cards grid
│       ├── AboutSection.tsx # About preview
│       ├── ImpactStats.tsx  # Statistics section
│       └── LatestNews.tsx   # News preview
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Color Scheme

- **Primary Green**: #2D5F3F (headers, primary buttons)
- **Secondary Orange**: #E67E22 (accents, CTAs)
- **Accent Mint**: #7FD8BE (highlights, badges)
- **Neutral Grays**: Various shades for text and backgrounds

## Building for Production

```bash
npm run build
npm start
```

## Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#2D5F3F',
    light: '#3A7A52',
    dark: '#1F4130',
  },
  // ... more colors
}
```

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/Header.tsx`

### Modifying Content

- Update text content directly in component files
- Modify statistics and impact numbers in respective page files
- Change contact information in `Footer.tsx` and contact page

## Image Requirements

Place the following images in `public/images/`:
- `Together-For-Orphans.jpg` - Logo (from provided file)
- `hero-children.jpg` - Hero section background
- `hospital-care.jpg` - Hospital page images
- `children-group.jpg` - Centers page images  
- `school-children.jpg` - Education page images
- `community.jpg` - Projects page images

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for charitable purposes.

## Support

For questions or support, please contact the development team or open an issue in the repository.

---

Built with ❤️ for Together For Orphans
