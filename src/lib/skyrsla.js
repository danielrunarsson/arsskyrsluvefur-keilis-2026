// Breytir efnisskránni í líkanið sem síðurnar nota: númeraðir kaflar,
// síður sem fara í build, slóðir og fyrri/næsta tenglar.
import efni from '../efni/index.js';
import { athugaOgStodva } from './athuga.js';

// Efnisathugun við hvert build: villur stöðva build, viðvaranir birtast (sjá README „Efnisathugun“).
athugaOgStodva(efni);

const vantar = (s) => s.stada === 'vantar' || !s.blokkir?.length;

// Síður án efnis birtast í dev og í prufu-deployum (SYNA_VANTAR=true),
// en er sleppt í production.
const synaVantar =
  process.env.SYNA_VANTAR != null ? process.env.SYNA_VANTAR === 'true' : import.meta.env.DEV;

const pad = (i) => String(i + 1).padStart(2, '0');

export const sidur = efni.sidur
  .filter((s) => synaVantar || !vantar(s))
  .map((s) => ({ ...s, vantar: vantar(s) }));

const iBuild = new Set(sidur.map((s) => s.slug));

/** Slóð á síðu, eða null ef síðan er ekki í þessu buildi. */
export const slod = (slug) => (iBuild.has(slug) ? `/${slug}/` : null);

export const kaflar = efni.kaflar
  .map((k, i) => {
    const kSidur = sidur.filter((s) => s.kafli === k.id);
    return {
      ...k,
      nr: pad(i),
      sidur: kSidur,
      sidurTexti: kSidur.map((s) => s.heiti).join(' · '),
      href: kSidur[0] ? slod(kSidur[0].slug) : null,
    };
  })
  .filter((k) => k.sidur.length);

/** Allt sem undirsíða þarf: kafli, systursíður, fyrri/næsta. */
export function sidaMeta(slug) {
  const i = sidur.findIndex((s) => s.slug === slug);
  const s = sidur[i];
  const k = kaflar.find((k) => k.id === s.kafli);
  const forsida = { heiti: 'Forsíða', href: '/' };
  const ut = (x) => (x ? { heiti: x.heiti, href: slod(x.slug) } : forsida);
  return {
    sida: s,
    kafli: k,
    fyrirsogn: s.fyrirsogn || s.heiti,
    kicker: s.kicker || k.heiti,
    fyrri: ut(sidur[i - 1]),
    naesta: ut(sidur[i + 1]),
  };
}

// Eldri ársskýrslur sem eru til á eigin undirléni.
const ELDRI = { 2024: 'https://2024.keilir.is/', 2025: 'https://2025.keilir.is/' };
export const eldriSkyrslur = Object.entries(ELDRI)
  .filter(([ar]) => Number(ar) < Number(efni.ar))
  .sort(([a], [b]) => b - a)
  .map(([ar, href]) => ({ ar, href }));

/** Klýfur „**feitt**“ texta í búta. */
export const butar = (t) =>
  String(t || '')
    .split('**')
    .map((texti, i) => ({ texti, feitt: i % 2 === 1 }))
    .filter((b) => b.texti);

export const fjoldi = {
  sidur: efni.sidur.length + 1,
  vantar: efni.sidur.filter(vantar).length,
};

export { efni, synaVantar };
