// robots.txt eftir umhverfi:
//  - production: leitarvélar velkomnar, vísað á sitemap
//  - forskoðanir og greinar (SYNA_VANTAR=true): ekkert skráð, svo hálfkláraðar síður lendi ekki í leit
import type { APIRoute } from 'astro';
import { synaVantar } from '../lib/skyrsla.js';

export const GET: APIRoute = ({ site }) => {
  const texti = synaVantar
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : ['User-agent: *', 'Allow: /', 'Disallow: /innra/', '', `Sitemap: ${new URL('/sitemap-index.xml', site).href}`, ''].join('\n');
  return new Response(texti, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
