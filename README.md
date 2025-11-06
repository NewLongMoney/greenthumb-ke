# 🌿 GreenThumb KE - Transforming Landscapes, Inspiring Lives

A modern, world-class website for GreenThumb KE, Kenya's premier landscape and hydroponics service provider.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-ff69b4)

## ✨ Features

- **🎬 Dynamic Hero Section**: Stunning video background with compelling CTAs
- **🎨 Interactive Service Grid**: Beautiful 2x2 grid with hover effects showcasing all services
- **💡 Why Choose Us**: Three pillars highlighting sustainability, expertise, and people-first design
- **👁️ Before/After Slider**: Interactive transformation showcase with real testimonials
- **📱 Fully Responsive**: Optimized for all devices - mobile, tablet, and desktop
- **⚡ Performance Optimized**: Built with Next.js 14 for lightning-fast load times
- **🎭 Smooth Animations**: Framer Motion powered interactions for a premium feel
- **♿ Accessible**: Semantic HTML and ARIA labels for screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding Your Own Images & Videos

Replace the placeholder content in the `public` directory:

```
public/
├── videos/
│   └── hero-video.mp4        # Hero section background video
├── images/
│   ├── hero-poster.jpg       # Video poster image
│   ├── services/             # Service grid images
│   ├── before-after/         # Transformation images
│   └── testimonials/         # Customer photos
```

### Updating Colors

Edit `tailwind.config.ts` to customize your brand colors:

```typescript
colors: {
  primary: {
    // Your green palette
  },
  accent: {
    lime: '#84cc16',  // Your accent color
  }
}
```

### Updating Contact Information

All contact details are in the components:
- **Phone Numbers**: `components/Hero.tsx`, `components/FinalCTA.tsx`, `components/Footer.tsx`
- **Email**: `components/FinalCTA.tsx`, `components/Footer.tsx`

## 🏗️ Project Structure

```
greenthumb-ke/
├── app/
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Hero.tsx             # Hero section with video
│   ├── ServiceGrid.tsx      # Interactive service showcase
│   ├── WhyUs.tsx            # Three pillars section
│   ├── BeforeAfter.tsx      # Image slider & testimonials
│   ├── FinalCTA.tsx         # Contact section
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets (add your images/videos here)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎯 Key Components

### Hero Section
- Full-screen video background (with gradient fallback)
- Animated headline and CTAs
- Contact information display
- Smooth scroll indicator

### Service Grid
- 2x2 responsive layout
- Hover effects with image zoom
- Service descriptions reveal on hover
- Mobile-optimized tap interactions

### Before/After Slider
- Interactive drag slider
- Touch-enabled for mobile
- Customer testimonials
- Trust badges

### Final CTA
- Multiple contact methods (Phone, Email, WhatsApp)
- High-contrast design for conversion
- Animated background patterns

## 📱 Services Offered

1. **Lawn Care Services** - Professional maintenance for pristine lawns
2. **Irrigation Systems** - Smart, water-efficient solutions
3. **Garden Services** - Complete design and maintenance
4. **Hydroponics** - Revolutionary soilless food production

## 📞 Contact

- **Phone**: 0702 005 560 | 0704 096 417
- **Email**: 254greenthumb@gmail.com
- **WhatsApp**: [Chat with us](https://wa.me/254702005560)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repo on [Vercel](https://vercel.com)
3. Deploy with one click!

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any Node.js hosting

## 📄 License

© 2024 GreenThumb KE. All rights reserved.

---

**Built with 💚 for a greener Kenya**

