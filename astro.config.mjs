import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dragifyapp.com',
  // base: '/dragifyapp.com', // Removed base path for custom domain root
  output: 'static',
  build: {
    assets: 'assets'
  }
});
