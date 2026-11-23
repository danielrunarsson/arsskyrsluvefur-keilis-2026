// Framleiðir letur vefsins (sjá README „Letur“). Keyrt einu sinni; skrárnar eru í public/fonts/.
import subsetFont from 'subset-font';
import { readFile, writeFile } from 'node:fs/promises';
const [Z, UT] = process.argv.slice(2);
let stafir = ''; const r = (a, b) => { for (let c = a; c <= b; c++) stafir += String.fromCodePoint(c); };
r(0x20, 0x7e); r(0xa0, 0xff); // Latin + Latin-1 (öll íslensk tákn)
stafir += '\u2013\u2014\u2018\u2019\u201a\u201c\u201d\u201e\u2022\u2026\u20ac\u2190\u2192\u2193\u2197\u2212\u25b6\u25cf\u00ad';
const N = await readFile(`${Z}/Newsreader/Newsreader-VariableFont_opsz,wght.ttf`);
const NI = await readFile(`${Z}/Newsreader/Newsreader-Italic-VariableFont_opsz,wght.ttf`);
const I = await readFile(`${Z}/Inter/Inter-VariableFont_opsz,wght.ttf`);
const skrar = [
  ['newsreader-texti.woff2', N, { opsz: 16, wght: { min: 400, max: 600 } }],
  ['newsreader-texti-skaletur.woff2', NI, { opsz: 16, wght: 400 }],
  ['newsreader-fyrirsagnir.woff2', N, { opsz: 72, wght: { min: 300, max: 400 } }],
  ['newsreader-fyrirsagnir-skaletur.woff2', NI, { opsz: 72, wght: 300 }],
  ['inter.woff2', I, { opsz: 14, wght: { min: 400, max: 700 } }],
];
for (const [nafn, buf, ax] of skrar) {
  const ut = await subsetFont(buf, stafir, { targetFormat: 'woff2', variationAxes: ax });
  await writeFile(`${UT}/${nafn}`, ut);
  console.log(nafn.padEnd(38), (ut.length / 1024).toFixed(0) + 'KB');
}
