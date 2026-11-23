// `npm run pdf-forskodun` – teiknar fyrstu síðu hvers PDF-skjals í `pdf`-blokkum
// efnisskrárinnar og vistar sem src/assets/pdf-forskodun/<skráarheiti án .pdf>.png.
// Keyrt handvirkt þegar PDF-skjal bætist við eða breytist (ekki hluti af byggingu).
// Skjöl eru sótt (eða lesin úr public/ ef slóðin er staðbundin) í tímabundna möppu
// sem er eytt í lokin – PDF-skjölin sjálf eru ekki vistuð í src/assets.
//   --allt   teiknar aftur forskoðanir sem eru þegar til
import { mkdir, mkdtemp, readFile, rm, writeFile, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getDocument } from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from '@napi-rs/canvas';
import sharp from 'sharp';
import efni from '../src/efni/index.js';

const rot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const uttak = path.join(rot, 'src/assets/pdf-forskodun');
const BREIDD = 600;
const allt = process.argv.includes('--allt');

/** Finnur allar `pdf`-blokkir hvar sem er í efnisskránni. */
function finnaPdf(hlutur, safn = new Map()) {
  if (Array.isArray(hlutur)) hlutur.forEach((h) => finnaPdf(h, safn));
  else if (hlutur && typeof hlutur === 'object') {
    if (hlutur.t === 'pdf' && typeof hlutur.src === 'string') {
      safn.set(path.posix.basename(hlutur.src.split(/[?#]/)[0]), hlutur.src);
    }
    Object.values(hlutur).forEach((h) => finnaPdf(h, safn));
  }
  return safn;
}

async function saekja(src) {
  if (/^https?:\/\//.test(src)) {
    const svar = await fetch(src);
    if (!svar.ok) throw new Error(`${svar.status} ${svar.statusText}`);
    return new Uint8Array(await svar.arrayBuffer());
  }
  return new Uint8Array(await readFile(path.join(rot, 'public', src.replace(/^\//, ''))));
}

const skjol = finnaPdf(efni);
await mkdir(uttak, { recursive: true });
const bradabirgda = await mkdtemp(path.join(tmpdir(), 'pdf-forskodun-'));
let villur = 0;

try {
  for (const [skraarheiti, src] of skjol) {
    const nafn = skraarheiti.replace(/\.pdf$/i, '');
    const skra = path.join(uttak, `${nafn}.png`);
    if (!allt && (await access(skra).then(() => true, () => false))) {
      console.log(`· ${nafn}.png er til (notaðu --allt til að teikna aftur)`);
      continue;
    }
    try {
      const gogn = await saekja(src);
      await writeFile(path.join(bradabirgda, skraarheiti), gogn);
      const hledsla = getDocument({ data: gogn, verbosity: 0 });
      const skjal = await hledsla.promise;
      const sida = await skjal.getPage(1);
      const grunnur = sida.getViewport({ scale: 1 });
      // Teiknað í tvöfaldri breidd og minnkað með sharp – skarpari texti.
      const synd = sida.getViewport({ scale: (BREIDD * 2) / grunnur.width });
      const strigi = createCanvas(Math.round(synd.width), Math.round(synd.height));
      const ctx = strigi.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, strigi.width, strigi.height);
      await sida.render({ canvas: strigi, canvasContext: ctx, viewport: synd }).promise;
      await sharp(await strigi.encode('png'))
        .resize({ width: BREIDD })
        .png({ palette: true, quality: 90, compressionLevel: 9 })
        .toFile(skra);
      await hledsla.destroy();
      console.log(`\x1b[32m✓\x1b[0m ${nafn}.png`);
    } catch (villa) {
      villur++;
      console.error(`\x1b[31m✗\x1b[0m ${skraarheiti}: ${villa.message}`);
    }
  }
} finally {
  await rm(bradabirgda, { recursive: true, force: true });
}
if (villur) process.exit(1);
