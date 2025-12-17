# LaLa Cafe and Bar Website

A beautiful, SEO-optimized static website for LaLa Cafe and Bar in Parnell, Auckland.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
lala-cafe-website/
├── public/
│   ├── images/
│   │   └── lala-logo.png      # Logo file
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navigation header
│   │   ├── Footer.astro       # Site footer
│   │   ├── Hero.astro         # Homepage hero section
│   │   ├── FeaturedMenu.astro # Featured menu items
│   │   ├── AtmosphereSection.astro
│   │   ├── CTASection.astro
│   │   ├── MenuCard.astro
│   │   ├── MenuSection.astro
│   │   └── SEOHead.astro
│   ├── data/
│   │   └── menu.json          # Menu data
│   ├── layouts/
│   │   └── Layout.astro       # Base layout with SEO
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── menu.astro         # Full menu
│   │   ├── about.astro        # Our Space & Story
│   │   ├── catering.astro     # Catering services
│   │   └── contact.astro      # Contact & location
│   └── styles/
│       └── global.css         # Global styles & Tailwind
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| LaLa Orange | `#F5A623` | Primary brand color |
| Rich Black | `#0A0A0A` | Dark sections, footer |
| Warm White | `#FFFBF5` | Light backgrounds |
| Soft Gold | `#D4A84B` | Hover states, accents |
| Charcoal | `#1A1A1A` | Body text |
| Off-white | `#F5F5F5` | Text on dark backgrounds |

## 📝 Updating Content

### Menu Items
Edit `src/data/menu.json` to update menu items and prices.

### Images
Replace placeholder images in `public/images/` with actual photos:
- Recommended dimensions for food photos: 800x600px
- Hero images: 2000x1200px
- Gallery images: Various sizes supported

### Contact Form
Update the Formspree form ID in:
- `src/pages/contact.astro`
- `src/pages/catering.astro`

Replace `your-form-id` with your actual Formspree endpoint.

### Google Maps
Update the iframe src in `src/pages/contact.astro` with the actual Google Maps embed URL for LaLa Cafe.

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual
```bash
npm run build
# Upload contents of `dist/` folder to your hosting
```

## 🔍 SEO Features

- ✅ Semantic HTML5 structure
- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Local Business schema markup (JSON-LD)
- ✅ Auto-generated sitemap
- ✅ Robots.txt
- ✅ Geo meta tags for local SEO
- ✅ Mobile-responsive design
- ✅ Fast page loads (static HTML)

## 📱 Responsive Design

Fully responsive across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v3.x
- **Fonts**: Google Fonts (Fredoka, DM Sans)
- **Icons**: Custom SVG icons

## 📄 License

© 2024 LaLa Cafe and Bar. All rights reserved.
