// @ts-check
import { defineConfig } from 'astro/config';

// Full slóð vefsins (fyrir deilitögg og canonical). Netlify gefur URL (aðallén vefsins)
// og DEPLOY_PRIME_URL (slóð forskoðunar). Þegar 2026.keilir.is verður aðallén í Netlify
// breytist URL sjálfkrafa.
const site =
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : (process.env.DEPLOY_PRIME_URL ?? process.env.URL ?? 'https://2026.keilir.is');

export default defineConfig({
  site,
  trailingSlash: 'always',
  build: { format: 'directory' },
});
