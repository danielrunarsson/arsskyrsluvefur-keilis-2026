// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Full slóð vefsins (fyrir deilitögg, canonical og sitemap). Netlify gefur URL (aðallén vefsins)
// og DEPLOY_PRIME_URL (slóð forskoðunar). Þegar 2026.keilir.is verður aðallén í Netlify
// breytist URL sjálfkrafa.
const site =
  (process.env.CONTEXT === 'production'
    ? process.env.URL
    : (process.env.DEPLOY_PRIME_URL ?? process.env.URL)) || 'https://2026.keilir.is';

export default defineConfig({
  site,
  trailingSlash: 'always',
  // CSS beint inn í síðuna: engin aukabeiðni sem stöðvar fyrstu birtingu.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      // Innra veftréð er aldrei í sitemap.
      filter: (slod) => !new URL(slod).pathname.startsWith('/innra/'),
      // Forsíðan fremst; sitemap uppfærist við hvert build.
      serialize: (faersla) => ({
        ...faersla,
        lastmod: new Date().toISOString(),
        priority: new URL(faersla.url).pathname === '/' ? 1.0 : 0.7,
      }),
    }),
  ],
});
