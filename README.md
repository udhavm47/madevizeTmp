# Madevize Landing Page

A modern, responsive landing page for Madevize — digitizing India's manufacturing ecosystem. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-Based Architecture**: Organized and maintainable code structure
- **Modern UI**: Dark theme with emerald accents
- **Fast Performance**: Built with Vite for rapid development and optimized builds
- **Sections Included**:
  - Hero Section with factory profile showcase
  - Pain points & solutions
  - Features overview
  - How it works (4-step process)
  - Capability showcase
  - Testimonials
  - Why now section
  - Pricing & early access
  - Contact form
  - Footer

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd tmpLandingPage
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another available port).

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📂 Project Structure

```
src/
├── App.jsx                          # Main app component
├── index.css                        # Tailwind CSS imports
├── components/
│   ├── layout/
│   │   ├── Header.jsx              # Navigation header
│   │   └── Footer.jsx              # Footer component
│   ├── sections/
│   │   ├── HeroSection.jsx         # Hero with factory profile preview
│   │   ├── PainSection.jsx         # Problem statement
│   │   ├── SolutionSection.jsx     # Features overview
│   │   ├── HowItWorksSection.jsx   # 4-step process
│   │   ├── CapabilitySection.jsx   # Gallery showcase
│   │   ├── TestimonialsSection.jsx # User testimonials
│   │   ├── WhyNowSection.jsx       # Market opportunity
│   │   ├── PricingSection.jsx      # Early access offer
│   │   ├── CTASection.jsx          # Call to action
│   │   └── ContactSection.jsx      # Contact form
│   └── cards/
│       ├── FeatureCard.jsx         # Feature display card
│       ├── StepCard.jsx            # Process step card
│       └── TestimonialCard.jsx     # Testimonial card
```

## 🛠 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint (if configured) |

## 🎨 Customization

### Colors & Theme
The project uses Tailwind CSS. To customize colors, edit your `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Add custom colors here
    },
  },
}
```

### Content
- **Hero Section**: Edit `src/components/sections/HeroSection.jsx`
- **Features**: Update array in `src/components/sections/SolutionSection.jsx`
- **Testimonials**: Modify array in `src/components/sections/TestimonialsSection.jsx`
- **Contact Info**: Update `src/components/sections/ContactSection.jsx`

### Forms
The contact form in `ContactSection.jsx` is a placeholder. To make it functional, integrate with your backend or use services like:
- Formspree
- EmailJS
- Your custom API

## 📱 Responsive Breakpoints

The design uses Tailwind's breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔗 Navigation Links

The landing page includes smooth navigation to sections:
- `#top` - Top of page
- `#how` - How it works
- `#why` - Why now
- `#pricing` - Pricing section
- `#contact` - Contact form
- `#cta` - Call to action

---

**Built with ❤️ for India's manufacturing ecosystem**
