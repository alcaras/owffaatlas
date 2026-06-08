import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alcaras.github.io',
  base: '/owffaatlas/',
  build: { format: 'directory' },
  trailingSlash: 'ignore',
});
