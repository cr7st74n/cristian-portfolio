# Cristian Gonzalez — Portfolio

Personal portfolio website built with **React.js**, converted from a WordPress/Hostinger template into a clean, custom-coded React app ready for GitHub Pages or any static host.

## ✨ Features

- **Single-page app** — smooth scroll navigation (Home, About, Projects, Contact)
- **Animated Hero** — particle canvas, gradient name, staggered animations
- **About section** — tabbed content, animated skill bars with IntersectionObserver
- **Projects grid** — filterable cards with hover overlays and a gallery strip
- **Testimonials** — auto-cycling carousel with manual dot navigation
- **Contact form** — client-side with a success state (wire up to EmailJS or Formspree)
- **Responsive** — mobile-first, works down to 320px
- **Dark theme** — deep navy/purple design system with CSS variables

## 🎨 Design

| Token | Value |
|-------|-------|
| Primary bg | `#0d0f14` |
| Accent | `#711c91` |
| Accent light | `#a14fb5` |
| Display font | Syne (Google Fonts) |
| Mono font | Space Mono (Google Fonts) |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Projects.jsx / .css
│   ├── Testimonials.jsx / .css
│   ├── Contact.jsx / .css
│   └── Footer.jsx / .css
├── App.js
├── index.js
└── index.css        ← design tokens & global styles
```

## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
#   "homepage": "https://<your-username>.github.io/<repo-name>",
#   "predeploy": "npm run build",
#   "deploy": "gh-pages -d build"

npm run deploy
```

## 📬 Contact Form

The form currently simulates a send. To make it real, integrate with:
- [EmailJS](https://www.emailjs.com/) — free tier, no backend needed
- [Formspree](https://formspree.io/) — just change the `action` URL
- Your own API endpoint

## 🔧 Customization

All personal content lives in the component files:
- **Name / tagline / stack tags** → `Hero.jsx`
- **Bio text / skills** → `About.jsx`
- **Projects list** → `Projects.jsx` (the `PROJECTS` array at the top)
- **Testimonials** → `Testimonials.jsx`
- **Email / location / social links** → `Contact.jsx`

---

Built with ❤️ and React.
