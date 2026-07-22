import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dragifyapp.com',
  // base: '/dragifyapp.com', // Removed base path for custom domain root
  output: 'static',
  integrations: [sitemap()],
  build: {
    assets: 'assets'
  }
});
