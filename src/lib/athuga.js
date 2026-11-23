// Efnisathugun: keyrð við hvert build (og með `npm run athuga`).
// Villur stöðva build með skýrum lista; viðvaranir birtast en build heldur áfram.
import { existsSync } from 'node:fs';
import path from 'node:path';

const LIKLEG = (o) => (o && typeof o === 'object' ? o : {});

// Leyfð svið hverrar blokkargerðar. `*` = skylda.
const BLOKKIR = {
  inngangur: ['*texti'],
  p: ['*texti'],
  h2: ['*texti'],
  h3: ['*texti'],
  listi: ['*atridi'],
  tolur: ['*atridi'],
  tilvitnun: ['*texti'],
  mynd: ['*src', 'alt', 'texti'],
  myndir: ['*atridi'],
  myndband: ['*src', 'texti', 'lodrett'],
  tafla: ['*dalkar', '*radir', 'titill'],
  sulur: ['*titill', '*atridi'],
  pdf: ['*titill', '*src', 'staerd'],
  folk: ['*titill', '*atridi'],
  nofn: ['*titill', '*atridi'],
  nefndir: ['*atridi'],
  grof: ['*atridi'],
  undirsidur: ['*atridi'],
  tenglar: ['*atridi'],
  undirskrift: ['*nafn', 'titill'],
};
const SIDA = ['*slug', '*kafli', '*heiti', 'fyrirsogn', 'fyrirsognSkaletrun', 'kicker', 'portrett', 'portrettAlt',
  'hofundur', 'lestur', 'heimild', 'stada', 'snid', '*blokkir'];

/** Levenshtein-fjarlægð – til að stinga upp á réttu nafni við innsláttarvillu. */
function fjarlaegd(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
const uppastunga = (ord, valkostir) => {
  const best = valkostir.map((v) => [v, fjarlaegd(ord, v)]).sort((x, y) => x[1] - y[1])[0];
  return best && best[1] <= 2 ? ` – áttirðu við „${best[0]}“?` : '';
};

export function athugaEfni(efni, { rot = process.cwd() } = {}) {
  const villur = [];
  const vidvaranir = [];
  const v = (stadur, s) => villur.push(`${stadur}: ${s}`);
  const w = (stadur, s) => vidvaranir.push(`${stadur}: ${s}`);

  const myndTil = (src) => !src.startsWith('myndir/') || existsSync(path.join(rot, 'src/assets', src));
  const athugaMynd = (stadur, src) => {
    if (typeof src !== 'string' || !src) return v(stadur, 'myndaslóð vantar');
    if (/^https?:\/\//.test(src)) return w(stadur, `ytri mynd (${src}) – betra að hýsa sjálf í src/assets/myndir/`);
    if (!myndTil(src)) v(stadur, `mynd fannst ekki: src/assets/${src}`);
  };
  const athugaTexta = (stadur, t) => {
    if (typeof t === 'string' && (t.split('**').length - 1) % 2 === 1)
      w(stadur, `ójafnt **feitletrunar**-merki í „${t.slice(0, 50)}…“`);
  };
  const ohnapp = (stadur, hlutur, leyfd) => {
    const nofn = leyfd.map((s) => s.replace('*', ''));
    for (const k of Object.keys(LIKLEG(hlutur))) {
      if (k === 't') continue;
      if (!nofn.includes(k)) w(stadur, `óþekkt svið „${k}“${uppastunga(k, nofn)}`);
    }
    for (const s of leyfd.filter((s) => s.startsWith('*'))) {
      const k = s.slice(1);
      const g = hlutur?.[k];
      if (g === undefined || g === null || g === '' || (Array.isArray(g) && g.length === 0 && k !== 'blokkir'))
        v(stadur, `„${k}“ vantar`);
    }
  };

  // ── Efnisskráin í heild
  for (const k of ['ar', 'heiti', 'kaflar', 'forsida', 'sidur']) if (!efni?.[k]) v('efnisskrá', `„${k}“ vantar`);
  if (villur.length) return { villur, vidvaranir };

  const kaflaIds = new Set();
  efni.kaflar.forEach((k, i) => {
    if (!k.id || !k.heiti) v(`kaflar[${i}]`, 'id og heiti verða að vera til');
    if (kaflaIds.has(k.id)) v(`kaflar[${i}]`, `tvítekið id „${k.id}“`);
    kaflaIds.add(k.id);
  });

  const slugs = new Map();
  efni.sidur.forEach((s, i) => {
    const st = `síða „${s?.slug ?? i}“`;
    if (s?.slug && !/^[a-z0-9-]+$/.test(s.slug)) v(st, 'slug má aðeins innihalda a–z, 0–9 og bandstrik');
    if (s?.slug && slugs.has(s.slug)) v(st, 'tvítekið slug');
    if (s?.slug === 'innra' || s?.slug === 'deiling') v(st, `slug „${s.slug}“ er frátekið`);
    slugs.set(s?.slug, s);
  });
  const til = (slug) => slugs.has(slug);

  // ── Forsíða
  const fs = efni.forsida;
  for (const k of ['fyrirsogn', 'inngangur']) if (!fs[k]) v('forsíða', `„${k}“ vantar`);
  if (fs.mynd) athugaMynd('forsíða.mynd', fs.mynd);
  (fs.lykiltolur ?? []).forEach((l, i) => { if (!l.tala || !l.texti) v(`forsíða.lykiltolur[${i}]`, 'tala og texti verða að vera til'); });
  (fs.greinar ?? []).forEach((g, i) => {
    const st = `forsíða.greinar[${i}]`;
    if (!g.titill) v(st, '„titill“ vantar');
    if (g.mynd) athugaMynd(st, g.mynd);
    if (g.slug && !til(g.slug)) v(st, `vísar á síðu sem er ekki til: „${g.slug}“${uppastunga(g.slug, [...slugs.keys()])}`);
  });

  // ── Síður og blokkir
  for (const s of efni.sidur) {
    const st = `síða „${s.slug}“`;
    ohnapp(st, s, SIDA);
    if (s.kafli && !kaflaIds.has(s.kafli)) v(st, `kafli „${s.kafli}“ er ekki til${uppastunga(s.kafli, [...kaflaIds])}`);
    if (s.portrett) athugaMynd(`${st}.portrett`, s.portrett);
    if (s.stada && s.stada !== 'vantar') v(st, `stada má aðeins vera „vantar“ (er „${s.stada}“)`);
    if (s.snid && s.snid !== 'langlestur') v(st, `snid má aðeins vera „langlestur“ (er „${s.snid}“)`);
    if (!Array.isArray(s.blokkir)) continue;

    s.blokkir.forEach((b, i) => {
      const bs = `${st} › blokk ${i + 1}${b?.t ? ` (${b.t})` : ''}`;
      if (!b?.t) return v(bs, 'blokkargerð („t“) vantar');
      const leyfd = BLOKKIR[b.t];
      if (!leyfd) return v(bs, `óþekkt blokkargerð „${b.t}“${uppastunga(b.t, Object.keys(BLOKKIR))}`);
      ohnapp(bs, b, leyfd);
      athugaTexta(bs, b.texti);
      const atr = Array.isArray(b.atridi) ? b.atridi : [];

      switch (b.t) {
        case 'listi':
          atr.forEach((a, j) => (typeof a !== 'string' ? v(bs, `atriði ${j + 1} á að vera texti`) : athugaTexta(bs, a)));
          break;
        case 'tolur':
          atr.forEach((a, j) => { if (!a?.tala || !a?.texti) v(bs, `atriði ${j + 1}: tala og texti verða að vera til`); });
          break;
        case 'mynd':
          athugaMynd(bs, b.src);
          break;
        case 'myndir':
          atr.forEach((a, j) => athugaMynd(`${bs} › mynd ${j + 1}`, typeof a === 'string' ? a : a?.src));
          break;
        case 'grof':
          atr.forEach((a, j) => { if (!a?.heiti) v(bs, `graf ${j + 1}: heiti vantar`); athugaMynd(`${bs} › graf ${j + 1}`, a?.src); });
          break;
        case 'myndband':
          if (/\.mov($|\?)/i.test(b.src ?? '')) w(bs, `.mov spilast ekki í Chrome/Firefox – umbreyta í .mp4 (H.264): ${b.src}`);
          break;
        case 'tafla': {
          const n = Array.isArray(b.dalkar) ? b.dalkar.length : 0;
          if (n && ![3, 4].includes(n)) w(bs, `tafla með ${n} dálkum – sniðmátið er hannað fyrir 3 eða 4`);
          (b.radir ?? []).forEach((r, j) => {
            const c = Array.isArray(r) ? r : r?.c;
            if (!Array.isArray(c)) return v(bs, `röð ${j + 1}: á að vera fylki eða { c: [...] }`);
            if (c.length !== n) v(bs, `röð ${j + 1} („${c[0]}“) hefur ${c.length} dálka en taflan ${n}`);
          });
          break;
        }
        case 'sulur':
          atr.forEach((a, j) => {
            if (!a?.heiti || a?.gildi === undefined) v(bs, `súla ${j + 1}: heiti og gildi verða að vera til`);
            if (typeof a?.pct !== 'number' || a.pct < 0 || a.pct > 100) v(bs, `súla ${j + 1} („${a?.heiti}“): pct á að vera tala 0–100 (er ${a?.pct})`);
          });
          break;
        case 'folk':
          atr.forEach((a, j) => { if (!a?.nafn) v(bs, `manneskja ${j + 1}: nafn vantar`); });
          break;
        case 'nefndir':
          atr.forEach((a, j) => { if (!a?.heiti || !a?.texti) v(bs, `nefnd ${j + 1}: heiti og texti verða að vera til`); });
          break;
        case 'undirsidur':
        case 'tenglar':
          atr.forEach((a, j) => {
            if (!a?.heiti) v(bs, `tengill ${j + 1}: heiti vantar`);
            if (!til(a?.slug)) v(bs, `tengill „${a?.heiti}“ vísar á síðu sem er ekki til: „${a?.slug}“${uppastunga(String(a?.slug), [...slugs.keys()])}`);
          });
          break;
        case 'pdf':
          if (b.src && !/\.pdf($|\?)/i.test(b.src)) w(bs, `slóðin endar ekki á .pdf: ${b.src}`);
          break;
      }
    });
  }
  return { villur, vidvaranir };
}

/** Prentar niðurstöðu og kastar villu ef eitthvað er að. */
export function athugaOgStodva(efni, opts) {
  const { villur, vidvaranir } = athugaEfni(efni, opts);
  const gult = (s) => `\x1b[33m${s}\x1b[0m`;
  const rautt = (s) => `\x1b[31m${s}\x1b[0m`;
  if (vidvaranir.length) {
    console.warn(gult(`[efnisathugun] ${vidvaranir.length} ${vidvaranir.length === 1 ? 'viðvörun' : 'viðvaranir'}:`));
    vidvaranir.forEach((x) => console.warn(gult('  ⚠ ') + x));
  }
  if (villur.length) {
    const texti = [`[efnisathugun] ${villur.length} villa/villur í efnisskránni – lagfærið og keyrið aftur:`, ...villur.map((x) => `  ✗ ${x}`)].join('\n');
    console.error(rautt(texti));
    throw new Error(`Efnisathugun: ${villur.length} villa/villur (sjá lista að ofan)`);
  }
  return { villur, vidvaranir };
}
