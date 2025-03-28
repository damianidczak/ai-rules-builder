// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: [/^d3.*$/, /^@nivo.*$/],
    },
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [react()],
  adapter: cloudflare(),
});