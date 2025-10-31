# Facto Website

A modern, responsive business website for Facto, showcasing our productivity application and other projects.

## Features

- 🎨 Modern, clean design with responsive layout
- ⚡ Built with React and Vite for optimal performance
- 🧭 Client-side routing with React Router
- 📱 Mobile-friendly and accessible
- 🔒 Privacy Policy and Terms & Conditions pages for App Store compliance
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS custom properties

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Business-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project and deploy.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Add New Project"

4. Import your Git repository

5. Vercel will automatically detect the Vite configuration

6. Click "Deploy"

### Custom Domain Setup

1. In your Vercel project dashboard, go to "Settings" → "Domains"

2. Add your custom domain: `fact-app.com`

3. Follow Vercel's instructions to configure your DNS settings:
   - Add an A record pointing to Vercel's IP: `76.76.21.21`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`

4. Add `www.fact-app.com` as well (optional)

5. Vercel will automatically provision SSL certificates

## Project Structure

```
Business-Website/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Facto.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsAndConditions.jsx
│   ├── App.jsx         # Main app component
│   ├── App.css         # App-specific styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── vercel.json         # Vercel configuration
```

## Pages

- **Home** (`/`) - Landing page showcasing projects
- **Facto** (`/facto`) - Detailed information about the Facto app
- **Privacy Policy** (`/privacy-policy`) - Privacy policy for App Store compliance
- **Terms & Conditions** (`/terms-and-conditions`) - Terms of service

## Customization

### Colors

Edit the CSS custom properties in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... */
}
```

### Content

- Update page content in `src/pages/`
- Modify navigation in `src/components/Navigation.jsx`
- Update footer in `src/components/Footer.jsx`

## License

© 2025 Facto. All rights reserved.

## Support

For questions or support, contact:
- Email: support@fact-app.com
- Website: https://fact-app.com

