// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielechlin.xyz',
  integrations: [react(), mdx(), tailwind({
    applyBaseStyles: false
  })],
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});