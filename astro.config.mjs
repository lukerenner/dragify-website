import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lukerenner.github.io',
  base: '/dragify-website',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
