// `npm run athuga` – athugar efnisskrána án þess að byggja vefinn.
import efni from '../src/efni/index.js';
import { athugaOgStodva } from '../src/lib/athuga.js';

try {
  const { vidvaranir } = athugaOgStodva(efni);
  console.log(`\x1b[32m✓ Efnisskráin stenst athugun\x1b[0m${vidvaranir.length ? ` (${vidvaranir.length} viðvaranir)` : ''}`);
} catch {
  process.exit(1);
}
