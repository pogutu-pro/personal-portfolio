# Personal Portfolio

A super premium personal portfolio website built with Next.js 14+, App Router, and modern web technologies. This portfolio showcases work, case studies, and provides a platform for professional presence.

## Features

- ⚡ **Performance First**: Optimized for Core Web Vitals (LCP < 2.5s)
- 🎨 **Premium UI/UX**: Clean, editorial design with subtle animations
- ♿ **Accessible**: WCAG 2.2 AA compliant with keyboard navigation
- 📱 **Responsive**: Mobile-first design that works everywhere
- 🔍 **SEO Optimized**: Metadata, Open Graph, JSON-LD structured data
- 📝 **MDX Case Studies**: Write case studies in Markdown with MDX
- 🎭 **Motion Design**: Framer Motion with reduced motion support
- 🧪 **Tested**: Playwright E2E tests

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Motion**: Framer Motion (LazyMotion for performance)
- **Forms**: React Hook Form + Zod validation
- **Content**: MDX for case studies
- **Testing**: Playwright
- **Quality**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── work/              # Work pages
│   ├── about/             # About page
│   ├── lab/               # Lab/experiments page
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/            # Layout components (Navbar, Footer, etc.)
│   ├── ui/                # UI primitives (Button, Card, etc.)
│   ├── motion/            # Motion components
│   └── a11y/              # Accessibility components
├── features/              # Feature modules
│   ├── projects/          # Projects data & components
│   └── contact/           # Contact form
├── lib/                   # Utilities & helpers
├── styles/                # Global styles & tokens
└── content/               # MDX content
    └── case-studies/      # Case study MDX files
```

## Adding Content

### Projects

Edit `src/features/projects/data.ts` to add or modify projects.

### Case Studies

Create MDX files in `src/content/case-studies/` with the same slug as your project:

```mdx
# Project Title

## Overview

Your case study content here...
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Type check with TypeScript
- `npm run format` - Format code with Prettier
- `npm run analyze` - Analyze bundle size
- `npm test` - Run Playwright tests

## Performance

This portfolio is optimized for performance:

- Server Components by default
- Code splitting at route level
- Image optimization with next/image
- Font optimization with next/font
- Lazy loading for heavy components
- Minimal JavaScript shipped to client

## Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- Screen reader friendly
- Focus management on route changes
- Skip to content link
- WCAG 2.2 AA color contrast
- Reduced motion support

## SEO

- Metadata API for all pages
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation
- Robots.txt

## License

Private - All rights reserved

## Credits

Built with ❤️ using Next.js, React, and TypeScript.
