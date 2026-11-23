// Deilikort (1200×630) fyrir Facebook, LinkedIn, Slack o.fl. – teiknað við build.
// Satori raðar upp (með Newsreader og Inter), resvg teiknar í PNG.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const B = 1200;
const H = 630;
const rot = process.cwd();
const letur = (f: string) => readFile(path.join(rot, 'src/deiling/letur', f));

let leturCache: any[] | null = null;
async function leturSafn() {
  leturCache ??= [
    { name: 'Newsreader', data: await letur('newsreader-300.ttf'), weight: 300, style: 'normal' },
    { name: 'Newsreader', data: await letur('newsreader-300-italic.ttf'), weight: 300, style: 'italic' },
    { name: 'Newsreader', data: await letur('newsreader-400.ttf'), weight: 400, style: 'normal' },
    { name: 'Inter', data: await letur('inter-500.ttf'), weight: 500, style: 'normal' },
    { name: 'Inter', data: await letur('inter-600.ttf'), weight: 600, style: 'normal' },
  ];
  return leturCache;
}

const LITIR = { blek: '#15130F', gull: '#AE9453', gullDokkt: '#8A7136', gullLjost: '#F5F0E3', daufur: '#5E5A52', lina: '#DEDAD0' };

async function gognMyndar(skra: string, b: number, h: number, grar = false) {
  let s = sharp(path.join(rot, 'src/assets', skra)).resize(b * 2, h * 2, { fit: 'cover', position: grar ? 'top' : 'centre' });
  if (grar) s = s.grayscale().linear(1.05, -6);
  const buf = await s.jpeg({ quality: 82 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}

const el = (type: string, style: Record<string, any>, children?: any) => ({ type, props: { style, children } });

export type Kort = {
  yfirmerki: string; // t.d. „01 · Skýrsla stjórnar“
  titill: string;
  skaletrun?: string;
  mynd?: string; // slóð undir src/assets
  grar?: boolean;
  tala?: { tala: string; texti: string };
  ar: string; // „Ársskýrsla 2025“
};

export async function teikna(k: Kort): Promise<Buffer> {
  const logo = `data:image/png;base64,${(await readFile(path.join(rot, 'src/assets/keilir-logo.png'))).toString('base64')}`;
  const hlidB = k.mynd || k.tala ? 440 : 0;
  const lengd = (k.titill + (k.skaletrun ?? '')).length;
  let staerd = lengd <= 22 ? 104 : lengd <= 40 ? 84 : lengd <= 70 ? 64 : 54;
  // Langt eitt orð (t.d. „Efnahagsreikningur“) má ekki fara út fyrir dálkinn.
  const lengstaOrd = Math.max(...(k.titill + ' ' + (k.skaletrun ?? '')).split(/\s+/).map((o) => o.length));
  const textaB = B - hlidB - 112;
  staerd = Math.min(staerd, Math.floor(textaB / (lengstaOrd * 0.48)));

  const hlid = k.mynd
    ? el('img', { width: hlidB, height: H, objectFit: 'cover' }, undefined)
    : k.tala
      ? el(
          'div',
          { width: hlidB, height: H, flexShrink: 0, background: LITIR.gullLjost, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 56px', gap: 16 },
          [
            el('div', { fontFamily: 'Newsreader', fontWeight: 400, fontSize: k.tala.tala.length > 6 ? 80 : 104, lineHeight: 1, letterSpacing: '-0.02em', color: LITIR.gullDokkt }, k.tala.tala),
            el('div', { fontFamily: 'Inter', fontWeight: 500, fontSize: 24, lineHeight: 1.35, color: LITIR.blek }, k.tala.texti),
          ],
        )
      : null;
  if (k.mynd && hlid) Object.assign(hlid.props, { src: await gognMyndar(k.mynd, hlidB, H, k.grar), width: hlidB, height: H });

  const tre = el('div', { width: B, height: H, display: 'flex', background: '#FFFFFF', color: LITIR.blek }, [
    el('div', { flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', padding: '48px 56px 0', position: 'relative' }, [
      // Haus
      el('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 24, borderBottom: `2px solid ${LITIR.blek}` }, [
        el('div', { display: 'flex', alignItems: 'center', gap: 16 }, [
          { type: 'img', props: { src: logo, width: 56, height: 56, style: { borderRadius: 28 } } },
          el('div', { fontFamily: 'Newsreader', fontWeight: 400, fontSize: 30, letterSpacing: '0.28em', paddingTop: 4 }, 'KEILIR'),
        ]),
        el('div', { fontFamily: 'Inter', fontWeight: 500, fontSize: 18, letterSpacing: '0.12em', textTransform: 'uppercase' }, k.ar),
      ]),
      // Yfirmerki og fyrirsögn
      el('div', { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22, paddingBottom: 40 }, [
        el('div', { fontFamily: 'Inter', fontWeight: 600, fontSize: 20, letterSpacing: '0.14em', textTransform: 'uppercase', color: LITIR.gullDokkt }, k.yfirmerki),
        el('div', { display: 'flex', flexWrap: 'wrap', fontFamily: 'Newsreader', fontWeight: 300, fontSize: staerd, lineHeight: 1.0, letterSpacing: '-0.025em' }, [
          el('span', {}, k.titill),
          ...(k.skaletrun ? [el('span', { fontStyle: 'italic', color: LITIR.gull }, k.skaletrun)] : []),
        ]),
      ]),
      // Fótur
      el('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 30, fontFamily: 'Inter', fontWeight: 500, fontSize: 18, color: LITIR.daufur }, [
        el('div', {}, 'Golfklúbburinn Keilir · Hafnarfirði'),
      ]),
      el('div', { position: 'absolute', left: 0, right: 0, bottom: 0, height: 12, background: LITIR.gull }, undefined),
    ]),
    ...(hlid ? [hlid] : []),
  ]);

  const svg = await satori(tre as any, { width: B, height: H, fonts: (await leturSafn()) as any });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: B } }).render().asPng();
  return sharp(png).jpeg({ quality: 86, mozjpeg: true }).toBuffer();
}
