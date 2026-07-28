# Premium Software House Portfolio Website

A stunning, enterprise-grade single-page portfolio website showcasing software development, automation, AI & security expertise. Built with Next.js 14 (App Router), React 18, TypeScript, Three.js, and Framer Motion.

## 🚀 Features

- **Single Page Application**: All navigation via smooth scroll, no external pages
- **3D Hero Scene**: Rotating geometric shapes with Three.js and React Three Fiber
- **Advanced Animations**: Framer Motion for UI animations and GSAP for timelines
- **CDN-Based Assets**: All icons/images loaded from external CDNs
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Dark Theme**: Custom Tailwind CSS theme with enterprise-grade colors
- **Interactive Components**: Hover effects, scroll animations, and interactive forms

## 📁 Project Structure

```
zentro-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout with Navbar
│   │   ├── page.tsx          # Main page with all sections
│   │   └── globals.css       # Global styles & animations
│   │
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky navigation with smooth scroll
│   │   ├── Hero.tsx         # Hero section with 3D scene
│   │   ├── Intro.tsx        # Company introduction
│   │   ├── Solutions.tsx    # 4 solution cards with tech badges
│   │   ├── CaseStudies.tsx  # 5 project case studies
│   │   ├── WhyChooseUs.tsx  # 6 benefit cards
│   │   ├── About.tsx        # Company about section
│   │   ├── Testimonials.tsx # Client testimonials carousel
│   │   ├── Contact.tsx      # Contact form with validation
│   │   ├── Footer.tsx        # Footer with navigation
│   │   └── 3D/
│   │       └── HeroScene.tsx # Three.js 3D scene
│   │
│   └── lib/
│       ├── assets.ts        # CDN URLs for tech icons & images
│       └── utils.ts         # Helper functions
│
├── public/                  # Static assets
├── .env.local              # Environment variables
├── tailwind.config.js      # Tailwind theme config
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript (strict mode)
- **Three.js** + **React Three Fiber** + **@react-three/drei** (3D graphics)
- **Framer Motion** (UI animations)
- **GSAP** (advanced animations)
- **Tailwind CSS 3.x** (styling)
- **React Icons** (UI icons)
- **React Intersection Observer** (scroll animations)

## 🎨 Design Tokens

The project uses a custom dark theme with the following color palette:

```javascript
// Defined in tailwind.config.js
dark: {
  bg: '#0a0e27',      // Main background
  card: '#141829',    // Card background
  border: '#1e2139',  // Border color
},
accent: {
  primary: '#00d4ff',  // Cyan/Blue
  secondary: '#ff006e', // Pink/Magenta
  success: '#00d084',  // Green
},
text: {
  primary: '#ffffff',   // White text
  secondary: '#a0a0a0', // Gray text
}
```

## 📱 Sections

1. **Hero**: 3D scene with typewriter animation and CTAs
2. **Intro**: Company description with fade-in animation
3. **Solutions**: 4 solution cards with tech stack badges
4. **Case Studies**: 5 project examples with outcomes
5. **Why Choose Us**: 6 benefit cards
6. **About**: Company info and philosophy
7. **Testimonials**: Client feedback carousel
8. **Contact**: Form with validation and direct contact options
9. **Footer**: Navigation links and copyright

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd zentro-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` with your company details.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   npm start
   ```

## 🌐 CDN Assets

All assets are loaded from external CDNs:

- **Tech Icons**: Skillicons.dev, SimpleSVG, Placeholder.co
- **Project Images**: Picsum.photos (random images)
- **Avatars**: DiceBear API (generated based on names)
- **UI Icons**: React Icons package

## 🎯 Key Features Implemented

- ✅ Smooth scroll navigation between sections
- ✅ Responsive navigation with mobile hamburger menu
- ✅ Typewriter effect in hero section
- ✅ 3D tilt effects on solution cards
- ✅ Staggered animations on scroll
- ✅ Form validation with error handling
- ✅ Testimonial carousel with auto-rotation
- ✅ Accessibility features (ARIA labels, semantic HTML)
- ✅ SEO metadata and OpenGraph tags
- ✅ Performance optimized with lazy loading

## 📝 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_COMPANY_NAME=Your Company Name
NEXT_PUBLIC_COMPANY_EMAIL=hello@example.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

## 🚀 Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **Digital Ocean App Platform**

## 📄 License

This project is for portfolio and demonstration purposes. Feel free to use as inspiration for your own projects.

---

**Built with ❤️ using Next.js, React, and Three.js**