// Skjöl (PDF) hýst á vefnum sjálfum: liggja í public/skjol/ og eru birt á /skjol/<skráarheiti>.
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

/** Staðbundin slóð (byrjar á /, ekki //) → skrá í public/. Annars null (ytri slóð). */
export function skjalSkra(src, rot = process.cwd()) {
  if (typeof src !== 'string' || !src.startsWith('/') || src.startsWith('//')) return null;
  return path.join(rot, 'public', decodeURIComponent(src.split(/[?#]/)[0]));
}

export const skjalTil = (src, rot) => {
  const skra = skjalSkra(src, rot);
  return skra !== null && existsSync(skra);
};

/** Stærð á íslensku sniði, t.d. „1,6 MB“ eða „850 kB“. */
export function staerdTexti(baeti) {
  const mb = baeti / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1).replace('.', ',')} MB`;
  return `${Math.max(1, Math.round(baeti / 1024))} kB`;
}

/** Stærð staðbundins skjals reiknuð úr skránni við build; annars `vara` (t.d. b.staerd) eða „PDF“. */
export function skjalStaerd(src, vara) {
  const skra = skjalSkra(src);
  if (skra && existsSync(skra)) return staerdTexti(statSync(skra).size);
  return vara || 'PDF';
}
