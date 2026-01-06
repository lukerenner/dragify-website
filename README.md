# Dragify Website

A static website for dragifyapp.com built with Astro and deployed to GitHub Pages.

## 🚀 Quick Start

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── images/          # Image assets
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page routes
│   ├── styles/          # Global CSS
│   └── config.ts        # Site configuration
├── .github/
│   └── workflows/       # GitHub Actions for deployment
└── package.json
```

## 🎨 Design

The site is a pixel-perfect recreation of the provided mock design featuring:

- **Brand Gradient**: #064AAD to #CA6BE5
- **Heading Font**: Shrikhand
- **Body Font**: Fuscia
- Interactive before/after slider
- Responsive mobile-first design
- Formspree contact form integration

## 🔧 Configuration

Update the following in `src/config.ts`:

- `appStoreUrl`: Replace `APP_STORE_URL_PLACEHOLDER` with actual App Store URL
- `formEndpoint`: Already configured with Formspree endpoint
- `supportEmail`: Update support email if needed

## 📄 Pages

- `/` - Main landing page
- `/terms` - Terms of Service (placeholder)
- `/privacy` - Privacy Policy (placeholder)
- `/open-source` - Open Source Licenses (placeholder)
- `/support` - Support page

## 🚢 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. Create a new GitHub repository
2. Push this code to the repository
3. Go to repository Settings → Pages
4. Set Source to "GitHub Actions"
5. The site will deploy automatically

### Custom Domain

To use a custom domain (dragifyapp.com):

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS settings with your domain provider
3. Update the `site` value in `astro.config.mjs`

## 📝 Adding Legal Content

To add the actual legal text to the placeholder pages:

1. Open the respective page file in `src/pages/` (e.g., `terms.astro`)
2. Replace the content inside the `<div class="placeholder-content">` section
3. Keep the same page structure and styling

## 🎯 Features

- ✅ Pixel-perfect design matching mock
- ✅ Responsive mobile optimization
- ✅ Interactive before/after slider
- ✅ Formspree contact form
- ✅ Lazy loading for images
- ✅ Accessibility features
- ✅ SEO optimized
- ✅ Fast performance

## 📦 Tech Stack

- [Astro](https://astro.build) - Static site framework
- Vanilla CSS - Styling
- TypeScript - Type safety
- GitHub Pages - Hosting
- Formspree - Contact form

## 🤝 Support

For questions or issues, use the contact form on the website or reach out to the development team.

---

Made with love by drag queens for drag queens 💖✨
