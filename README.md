# Muhammad Abubakar - Personal Portfolio

A modern, interactive personal portfolio website showcasing my projects, skills, and experience as a Full-Stack Developer and Computer Science student. Built with Next.js 14, React 18, TypeScript, Three.js, and Framer Motion.

## 🚀 Features

- **Single Page Application**: Smooth scroll navigation between sections
- **3D Hero Scene**: Interactive geometric shapes with Three.js and React Three Fiber
- **Advanced Animations**: Framer Motion for UI animations and scroll effects
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Dark Theme**: Custom Tailwind CSS theme with cyan accent colors
- **Interactive Components**: Hover effects, scroll animations, and contact form

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Global layout with metadata
│   │   ├── page.tsx          # Main page with all sections
│   │   └── globals.css       # Global styles & animations
│   │
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation with smooth scroll
│   │   ├── Hero.tsx         # Hero section with 3D scene
│   │   ├── Intro.tsx        # About me introduction
│   │   ├── Solutions.tsx    # Skills & expertise cards
│   │   ├── CaseStudies.tsx  # Featured projects
│   │   ├── WhyChooseUs.tsx  # Professional strengths
│   │   ├── About.tsx        # Experience & education
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer with social links
│   │   └── 3D/
│   │       └── HeroScene.tsx # Three.js 3D scene
│   │
│   └── lib/
│       ├── assets.ts        # CDN URLs for tech icons
│       └── utils.ts         # Helper functions
│
├── .env.local              # Environment variables
├── tailwind.config.js      # Tailwind theme config
└── package.json            # Dependencies
```

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **React 18** with TypeScript (strict mode)
- **Three.js** + **React Three Fiber** + **@react-three/drei** (3D graphics)
- **Framer Motion** (UI animations)
- **Tailwind CSS 3.x** (styling)
- **React Icons** (UI icons)
- **React Intersection Observer** (scroll animations)

## 🎨 Design Tokens

Custom dark theme with the following color palette:

```javascript
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
```

## 📱 Sections

1. **Hero**: 3D scene with animated headlines and CTAs
2. **About**: Personal introduction and background
3. **Skills**: Technical expertise categorized by domain
4. **Projects**: Featured projects with descriptions and tech stack
5. **Strengths**: Professional capabilities and core strengths
6. **Experience**: Work experience and education
7. **Contact**: Contact form and social links
8. **Footer**: Navigation and social media links

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment variables:
   ```bash
   cp .env.local.example .env.local
   ```

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

All tech icons and images are loaded from external CDNs:

- **Tech Icons**: Skillicons.dev, SimpleSVG
- **Project Images**: Picsum.photos (placeholder images)
- **UI Icons**: React Icons package

## 🎯 Key Features Implemented

- ✅ Smooth scroll navigation between sections
- ✅ Responsive navigation with mobile hamburger menu
- ✅ Animated headlines with typewriter effect
- ✅ 3D graphics in hero section
- ✅ Staggered animations on scroll
- ✅ Contact form with mailto integration
- ✅ Accessibility features (ARIA labels, semantic HTML)
- ✅ SEO metadata and OpenGraph tags
- ✅ Performance optimized with lazy loading

## 📝 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_NAME="Muhammad Abubakar"
NEXT_PUBLIC_EMAIL="itsabubakar103@gmail.com"
NEXT_PUBLIC_LINKEDIN_URL="https://www.linkedin.com/in/abubakarvibe/"
NEXT_PUBLIC_GITHUB_URL="https://github.com/MuhammadMuhammadalif"
```

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

## 👨‍💻 About Me

I'm Muhammad Abubakar, a BS Computer Science student at the University of Engineering and Technology (UET), Lahore. I'm passionate about building scalable software solutions and AI-powered applications.

**Connect with me:**
- 📧 Email: itsabubakar103@gmail.com
- 💼 LinkedIn: [linkedin.com/in/abubakarvibe](https://www.linkedin.com/in/abubakarvibe/)
- 🐙 GitHub: [github.com/MuhammadMuhammadalif](https://github.com/MuhammadMuhammadalif)

## 📄 License

This project is for personal portfolio purposes. Feel free to use as inspiration for your own projects.

---

**Built with ❤️ using Next.js, React, Three.js, and Tailwind CSS**