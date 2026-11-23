// Deilikort fyrir hverja síðu: /deiling/forsida.jpg og /deiling/<slug>.jpg
import type { APIRoute } from 'astro';
import { teikna, type Kort } from '../../deiling/kort';
import { efni, sidur, kaflar } from '../../lib/skyrsla.js';

export function getStaticPaths() {
  return [{ params: { slug: 'forsida' } }, ...sidur.map((s) => ({ params: { slug: s.slug } }))];
}

const stadbundin = (src?: string) => (src && src.startsWith('myndir/') ? src : undefined);

function kortFyrir(slug: string): Kort {
  if (slug === 'forsida') {
    const fs = efni.forsida;
    return { yfirmerki: efni.adalfundur, titill: fs.fyrirsogn, skaletrun: fs.fyrirsognSkaletrun, mynd: stadbundin(fs.mynd), ar: efni.heiti };
  }
  const s: any = sidur.find((x) => x.slug === slug);
  const k = kaflar.find((x) => x.id === s.kafli)!;
  const blokkir: any[] = s.blokkir;
  const myndBlokk = blokkir.find((b) => b.t === 'mynd' || b.t === 'myndir');
  const mynd = stadbundin(s.portrett) ?? stadbundin(myndBlokk?.src ?? myndBlokk?.atridi?.[0]);
  const tolur = blokkir.find((b) => b.t === 'tolur');
  // Fyrirsögn í gæsalöppum lokast á eftir skáletraða hlutanum.
  const titill = (s.fyrirsogn || s.heiti) as string;
  const skaletrun = s.fyrirsognSkaletrun ? s.fyrirsognSkaletrun + (titill.startsWith('„') ? '“' : '') : undefined;
  return {
    yfirmerki: `${k.nr} · ${k.heiti}`,
    titill,
    skaletrun,
    mynd,
    grar: !!s.portrett,
    tala: mynd ? undefined : tolur?.atridi?.[0],
    ar: efni.heiti,
  };
}

export const GET: APIRoute = async ({ params }) => {
  const png = await teikna(kortFyrir(params.slug!));
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/jpeg' } });
};
