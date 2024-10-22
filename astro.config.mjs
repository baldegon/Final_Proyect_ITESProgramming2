import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export const prerender = false;

// https://astro.build/config
export default defineConfig({
  output: hybrid,
  integrations: [tailwind()]
});