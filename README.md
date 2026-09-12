# Lumera House — Architectural Sanctuary & Suites

An intimate luxury boutique sanctuary web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Live Site: [https://samdreams777-lab.github.io/Lumera_House/](https://samdreams777-lab.github.io/Lumera_House/)

---

## 🏛️ Project Overview

**Lumera House** presents an architectural monograph experience featuring alpine stone suites, tropical garden villas, and contemporary urban lofts.

### Key Features
- **Monograph Visual Collections**: Interactive 3D particle blooms (Three.js), parallax smooth scrolling (Lenis), and editorial photo chapters.
- **Bilingual Interface**: Seamless internationalization (English & Vietnamese).
- **Responsive Architecture**: Curated UI components built with Tailwind CSS and Framer Motion.
- **Direct Booking Engine**: Modal booking workflow with dates, wing selection, and guest management.

---

## 🛠️ Tech Stack

- **Framework**: React 18, Vite 6
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4, PostCSS, Autoprefixer
- **Visuals & Motion**: Three.js, Framer Motion, Lenis Scroll, Lucide React
- **Hosting & CI/CD**: GitHub Pages, GitHub Actions

---

## 🚀 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samdreams777-lab/Lumera_House.git
   cd Lumera_House
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 📦 Production Build

To test the production build locally:

```bash
npm run build
```

This compiles TypeScript (`tsc`) and builds optimized static assets into the `dist/` folder with base path `/Lumera_House/`.

To preview the production build:
```bash
npm run preview
```

---

## 🔄 Automated Deployment (GitHub Actions)

Deployment to GitHub Pages is fully automated via GitHub Actions workflow (`.github/workflows/deploy.yml`).

- **Triggers**:
  - Automatically on any `push` to the `main` branch.
  - Manually via GitHub Actions `workflow_dispatch`.
- **Workflow Process**:
  1. Checks out the code.
  2. Sets up Node.js 20 environment with npm caching.
  3. Installs clean dependencies via `npm ci`.
  4. Executes `npm run build`.
  5. Uploads `dist/` directory as an official GitHub Pages artifact.
  6. Deploys artifact automatically to GitHub Pages.

---

## 🔒 Security & Environment

- No secrets, tokens, or API credentials are standardly checked into version control.
- All environment-specific variables are handled via standard GitHub Secrets or repository settings if required.
