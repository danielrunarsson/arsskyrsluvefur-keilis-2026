// Línuskipting og leturstærð forsíðufyrirsagnar.
// „|“ í `fyrirsogn` eða `fyrirsognSkaletrun` merkir línuskil (kemur í stað bils), t.d.
//   fyrirsogn: "Ár|Íslands", fyrirsognSkaletrun: "mótsins"  →  „Ár“ / „Íslands‑mótsins“
// Án „|“ jafnar vafrinn línurnar sjálfur (text-wrap: balance).
// Leturstærðin er reiknuð í CSS (container query) út frá breidd lengstu línu/orðs í em,
// svo fyrirsögnin fyllir dálkinn án þess að flæða út fyrir hann – engin JS í vafra, ekkert hopp.

// Breidd stafa í Newsreader Display (opsz 72) í 1/1000 em, mæld í vafra (canvas measureText).
// n = 400 upprétt, i = 300 skáletur. Stafir utan töflu teljast 0,6 em.
const STAFIR =
  '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~' +
  '¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ–—‘’‚“”„…';
const N = '254,340,600,600,802,755,184,275,275,391,575,235,328,233,393,600,600,600,600,600,600,600,600,600,600,267,276,575,575,575,480,901,727,657,709,774,671,612,767,825,350,399,758,618,1024,779,800,633,800,697,561,721,789,707,1015,729,695,650,292,392,292,575,410,500,509,582,472,595,493,356,508,589,277,253,569,270,881,596,569,595,580,400,419,362,577,566,790,560,555,472,292,227,292,575,238,600,600,475,600,227,574,500,861,451,455,575,543,500,375,575,352,325,500,625,602,250,500,276,471,480,742,783,731,472,727,727,727,727,727,727,1045,709,671,671,671,671,350,350,350,350,776,779,800,800,800,800,800,575,816,789,789,789,789,695,648,633,509,509,509,509,509,509,772,472,493,493,493,493,277,277,277,277,588,596,569,569,569,569,569,575,584,577,577,577,577,555,579,555,494,659,230,233,230,410,413,409,681';
const I = '245,280,600,600,746,690,160,255,255,381,575,184,282,201,403,600,600,600,600,600,600,600,650,600,600,237,243,575,575,575,478,887,688,597,690,729,623,551,745,758,304,342,678,571,945,740,759,581,761,636,515,649,742,675,940,676,661,614,270,374,270,575,390,500,488,459,383,488,398,271,395,496,276,244,454,244,766,542,448,510,458,379,330,300,520,467,669,474,481,408,276,229,276,575,221,600,600,464,600,229,501,500,876,428,416,575,552,500,376,575,322,297,500,537,568,228,500,251,405,450,691,730,672,470,688,688,688,688,688,688,995,690,623,623,623,623,304,304,304,304,730,740,759,759,759,759,759,575,771,742,742,742,742,661,593,514,488,488,488,488,488,488,692,383,398,398,398,398,276,276,276,276,449,542,448,448,448,448,448,575,463,520,520,520,520,481,459,481,457,614,200,200,181,341,341,322,598';
const tafla = (t, bil) => {
  const m = new Map([...STAFIR].map((s, k) => [s, +t.split(',')[k] / 1000]));
  m.set(' ', bil);
  return m;
};
const BREIDD = { n: tafla(N, 0.232), i: tafla(I, 0.238) };
const BIL_MILLI_STAFA = -0.03; // letter-spacing á farsíma (víðara en -0,035 á tölvu – öruggara)
const ORYGGI = 1.01; // lítið svigrúm fyrir slútandi skáletur og námundun (kerning þrengir yfirleitt)
const SHY = String.fromCharCode(0xad); // mjúkt bandstrik
const MEST_LINUR = 3; // án „|“: ekki fleiri en ~3 línur við hámarksstærð

/** Breidd texta í em. */
function breidd(texti, skaletrad) {
  const t = BREIDD[skaletrad ? 'i' : 'n'];
  let b = 0;
  for (const s of texti) b += (t.get(s) ?? 0.6) + BIL_MILLI_STAFA;
  return b;
}

/** Fjarlægir línuskilamerki – fyrir deilikort, lýsingar o.þ.h. */
export const anLinuskila = (t) => (t ?? '').replace(/\s*\|\s*/g, ' ');

/**
 * Skiptir fyrirsögn í línur. Hver lína er listi af bútum { texti, skaletrad }.
 * Ef engin bil eru á mótum hlutanna tveggja (eitt samsett orð) er sett mjúkt bandstrik á milli.
 * Skilar líka `breidd`: breidd (em) sem leturstærðin þarf að rúma í dálkinum.
 */
export function linurFyrirsagnar(fyrirsogn = '', skaletrun = '') {
  const hlutar = [
    { texti: fyrirsogn, skaletrad: false },
    { texti: skaletrun, skaletrad: true },
  ].filter((h) => h.texti);
  // Samsett orð („Íslands“ + „mótsins“): mjúkt bandstrik á mótum, ef orðið kemst ekki fyrir.
  // Annars er skáletraði hlutinn sér orðhópur sem helst saman á línu ef hann kemst (`samfellt`).
  const samsett = hlutar.length === 2 && !/[\s|]$/.test(fyrirsogn) && !/^[\s|]/.test(skaletrun);
  if (samsett) hlutar[0].texti += SHY;

  const handvirkt = hlutar.some((h) => h.texti.includes('|'));
  const linur = [[]];
  for (const h of hlutar) {
    h.texti.split(/\s*\|\s*/).forEach((butur, k) => {
      if (k > 0) linur.push([]);
      if (butur) linur.at(-1).push({ texti: butur, skaletrad: h.skaletrad, samfellt: h.skaletrad && !samsett });
    });
  }
  const hreinar = linur.filter((l) => l.length);

  const linuBreidd = (l) => l.reduce((b, h) => b + breidd(h.texti.replaceAll(SHY, ''), h.skaletrad), 0);
  // Lengsta orð (orð getur spannað mót upprétts og skáletraðs hluta, t.d. „Íslands|mótsins“).
  let lengstaOrd = 0;
  for (const l of hreinar) {
    let nuna = 0;
    for (const h of l)
      for (const s of h.texti.replaceAll(SHY, '')) {
        if (/\s/.test(s)) nuna = 0;
        else lengstaOrd = Math.max(lengstaOrd, (nuna += breidd(s, h.skaletrad)));
      }
  }
  const b = handvirkt
    ? Math.max(...hreinar.map(linuBreidd))
    : Math.max(lengstaOrd, (hreinar.map(linuBreidd).reduce((a, x) => a + x, 0) * 1.15) / MEST_LINUR);
  return { linur: hreinar, handvirkt, breidd: +(b * ORYGGI).toFixed(3) };
}
