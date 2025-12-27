# Facto — Marketing Website

A clean, premium landing page for the Facto iOS app.

## About Facto

Facto is a premium iOS app that helps users discover interesting, high-quality facts in seconds. Users explore facts through a calm, swipe-based interface, with 20+ curated categories covering Science, History, Technology, Psychology, Art, and more.

## Features

- **Modern Design**: Clean, minimal aesthetic with premium feel
- **Dark Mode**: Automatic light/dark mode based on system preference
- **Mobile-First**: Fully responsive across all devices
- **Fast Loading**: Built with Vite for optimal performance
- **SEO-Ready**: Proper meta tags and semantic HTML

## Tech Stack

- React 18
- React Router
- Vite
- CSS Variables for theming

## Getting Started

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

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Navigation.css
│   ├── Footer.jsx
│   └── Footer.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── PrivacyPolicy.jsx
│   └── TermsAndConditions.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Customization

### Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --bg-primary: #FAFAFA;
  --text-primary: #1A1A1A;
  --accent: #2D2D2D;
  /* ... */
}
```

### Fonts

The site uses:
- **Instrument Serif** for headings
- **Manrope** for body text

These are loaded from Google Fonts.

## Deployment

The site is configured for Vercel deployment. Simply connect your repository to Vercel for automatic deployments.

## License

All rights reserved.
