// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielechlin.xyz',
  integrations: [react(), tailwind({
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