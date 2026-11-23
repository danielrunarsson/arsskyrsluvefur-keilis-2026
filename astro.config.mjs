// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://2026.keilir.is',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
