// Dyravörður: lykilorðsvörn fyrir allan vefinn (Netlify Edge Function).
//
// Lykilorðið er ALDREI í kóðanum (geymslan er opinber). Það er sett í Netlify:
//   Site configuration → Environment variables → VEF_LYKILORD
// Ef breytan er ekki til eða tóm er vefurinn opinn öllum (vörnin slökkt).
// Til að taka vörnina af: eyða breytunni í Netlify og byggja vefinn aftur.
//
// Gestur sem slær inn rétt lykilorð fær vafraköku sem gildir í 30 daga. Kakan er undirrituð
// með lykilorðinu, svo ef lykilorðinu er breytt þurfa allir að skrá sig inn aftur.

const KAKA = 'keilir_adgangur';
const SLOD = '/__innskraning';
const GILDISTIMI = 60 * 60 * 24 * 30; // 30 dagar í sekúndum

async function undirskrift(lykilord) {
  const lykill = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(lykilord),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', lykill, new TextEncoder().encode('arsskyrsla-keilis'));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Samanburður sem tekur jafn langan tíma óháð því hvar strengirnir víkja frá hvor öðrum.
function jafnt(a, b) {
  if (a.length !== b.length) return false;
  let munur = 0;
  for (let i = 0; i < a.length; i++) munur |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return munur === 0;
}

function lesaKoku(request) {
  const haus = request.headers.get('cookie') ?? '';
  const m = haus.match(new RegExp(`(?:^|;\\s*)${KAKA}=([a-f0-9]+)`));
  return m ? m[1] : '';
}

// Örugg slóð til baka: aðeins slóð innan vefsins (byrjar á einu „/“).
function tilBaka(slod) {
  return typeof slod === 'string' && /^\/(?!\/)/.test(slod) ? slod : '/';
}

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);

function innskraningarsida(aftur, villa) {
  const html = `<!doctype html>
<html lang="is">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Innskráning · Ársskýrsla Keilis</title>
<link rel="icon" href="/favicon-32.png" sizes="32x32">
<style>
  :root { --grunnur: #f6f3ec; --spjald: #fff; --texti: #1d1d1b; --daufur: #55524b; --gull: #816932; --gull-hover: #6a5629; --villa: #a1261b; --rammi: #cfc8b8; }
  @media (prefers-color-scheme: dark) {
    :root { --grunnur: #161614; --spjald: #22221f; --texti: #f2efe8; --daufur: #c4bfb3; --gull: #d2bd85; --gull-hover: #e3d2a3; --villa: #ff8a7d; --rammi: #4a4740; }
  }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px;
    background: var(--grunnur); color: var(--texti); font: 17px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
  main { width: 100%; max-width: 380px; background: var(--spjald); border: 1px solid var(--rammi); border-radius: 12px; padding: 32px 24px; }
  h1 { margin: 0 0 4px; font-size: 1.5rem; line-height: 1.2; }
  p { margin: 0 0 24px; color: var(--daufur); }
  label { display: block; font-weight: 600; margin-bottom: 6px; }
  input { width: 100%; font: inherit; padding: 12px; border: 1px solid var(--daufur); border-radius: 8px; background: var(--spjald); color: var(--texti); }
  button { width: 100%; margin-top: 16px; font: inherit; font-weight: 600; padding: 12px; border: 0; border-radius: 8px;
    background: var(--gull); color: #fff; cursor: pointer; }
  @media (prefers-color-scheme: dark) { button { color: #161614; } }
  button:hover { background: var(--gull-hover); }
  input:focus-visible, button:focus-visible { outline: 3px solid var(--gull); outline-offset: 2px; }
  .villa { color: var(--villa); font-weight: 600; margin: 12px 0 0; }
</style>
</head>
<body>
<main>
  <h1>Ársskýrsla Keilis</h1>
  <p>Vefurinn er enn í vinnslu. Sláðu inn lykilorðið til að skoða hann.</p>
  <form method="post" action="${SLOD}">
    <input type="hidden" name="aftur" value="${esc(aftur)}">
    <label for="lykilord">Lykilorð</label>
    <input id="lykilord" name="lykilord" type="password" autocomplete="current-password" required autofocus${villa ? ' aria-invalid="true" aria-describedby="villa"' : ''}>
    ${villa ? '<p class="villa" id="villa" role="alert">Rangt lykilorð. Reyndu aftur.</p>' : ''}
    <button type="submit">Skrá inn</button>
  </form>
</main>
</body>
</html>`;
  return new Response(html, {
    status: 401,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export default async (request, context) => {
  const lykilord = Netlify.env.get('VEF_LYKILORD');
  if (!lykilord) return context.next(); // vörnin slökkt

  const rett = await undirskrift(lykilord);
  const url = new URL(request.url);

  // Innsending innskráningarforms
  if (url.pathname === SLOD && request.method === 'POST') {
    const gogn = await request.formData();
    const aftur = tilBaka(gogn.get('aftur'));
    const reynt = String(gogn.get('lykilord') ?? '');
    if (!jafnt(await undirskrift(reynt), rett)) return innskraningarsida(aftur, true);
    return new Response(null, {
      status: 303,
      headers: {
        location: aftur,
        'set-cookie': `${KAKA}=${rett}; Path=/; Max-Age=${GILDISTIMI}; HttpOnly; Secure; SameSite=Lax`,
        'cache-control': 'no-store',
      },
    });
  }

  // Edge-fallið keyrir á undan skyndiminni Netlify, svo læst síða berst aldrei til gests án köku.
  if (jafnt(lesaKoku(request), rett)) return context.next();

  return innskraningarsida(url.pathname === SLOD ? '/' : url.pathname + url.search, false);
};

export const config = {
  path: '/*',
  // Táknmynd vafraflipans má sjást á innskráningarsíðunni.
  excludedPath: ['/favicon-32.png'],
};
