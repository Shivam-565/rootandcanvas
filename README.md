# Root and Canvas — Next.js Application

A modern, high-performance **Next.js (App Router, TypeScript)** project converted from the original `Final landing page.html`.

## Features

- **Framework**: Next.js 16 (App Router) with React 19 & TypeScript.
- **Typography**: Google Fonts (`DM Sans` and `Prata`) integrated through `next/font/google` for optimal web font performance with zero layout shift.
- **Asset Optimization**: High-resolution imagery extracted to `public/images/` and served via `next/image` with responsive sizing and priority loading.
- **Modular Components**:
  - `Navbar`: Sticky blurred topbar, brand wordmark, active scroll spy navigation, and animated mobile drawer.
  - `Hero`: Editorial headline, narrative copy, call-to-actions, and blended artistic visual mask.
  - `ProblemSection`: "Somewhere along the way" problem cards and fluid responsive pullquotes.
  - `OfferingsSection`: The three core anchors (`Root`, `Canvas`, and `Aware`) with custom SVG iconography.
  - `DifferenceSection`: Four benefits distinguishing the philosophy of Root and Canvas.
  - `FounderSection`: Letter from founder Muskan Priya with optimized portrait photography.
  - `NewsletterBand`: Interactive email subscription form with real-time feedback.
  - `Footer`: Detailed navigation columns, contact email, social media links, and accessible Privacy Policy modal.
- **Design System**: Rich, curated color palette using CSS variables (`--forest`, `--terracotta`, `--cream`, `--peach`, `--olive`, `--ink`).
- **SEO & Social Sharing**: Complete OpenGraph, Twitter card, and theme-color metadata.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm run start
```
