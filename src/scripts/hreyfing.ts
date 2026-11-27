// Hreyfing á vefnum:
//  1. [data-telja] – tölur telja upp frá núlli þegar þær birtast á skjánum.
//     Íslenskt talnasnið helst: þúsundapunktar (2.192), aukastafir með kommu (569,3),
//     formerki (+294, −4%) og texti í kring (14 klst., 87%, 337 → 774).
//  2. [data-vaxa] – súlur vaxa frá vinstri þegar súluritið birtist.
//  3. Töflur á farsíma – skuggi á föstum fyrsta dálki, dofnun til hægri og
//     „Strjúktu til hliðar“ vísbending þar til lesandi hefur skrunað.
// Án JavaScript, eða með „prefers-reduced-motion“, birtast lokagildin strax.

const TIMI = 1400; // ms
const TALA = /([−+-]?)(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?/g;

type Tala = { formerki: string; gildi: number; aukastafir: number; punktar: boolean };
type Bútur = string | Tala;

function greina(texti: string): Bútur[] {
  const butar: Bútur[] = [];
  let sidast = 0;
  for (const m of texti.matchAll(TALA)) {
    if (m.index! > sidast) butar.push(texti.slice(sidast, m.index));
    const [, formerki, heil, auka = ''] = m;
    butar.push({
      formerki,
      gildi: Number(heil.replace(/\./g, '') + (auka ? '.' + auka : '')),
      aukastafir: auka.length,
      punktar: heil.includes('.'),
    });
    sidast = m.index! + m[0].length;
  }
  if (sidast < texti.length) butar.push(texti.slice(sidast));
  return butar;
}

function snida(t: Tala, gildi: number): string {
  let [heil, auka] = gildi.toFixed(t.aukastafir).split('.');
  if (t.punktar) heil = heil.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return t.formerki + heil + (auka ? ',' + auka : '');
}

// Talningin fer fram í sýnilegum bút sem skjálesarar sleppa (aria-hidden);
// rétta lokagildið er alltaf til staðar í földum texta fyrir skjálesara.
const synilegt = (el: HTMLElement) => (el as any).__syn as HTMLElement;
const setja = (el: HTMLElement, butar: Bútur[], hlutfall: number) => {
  synilegt(el).textContent = butar.map((b) => (typeof b === 'string' ? b : snida(b, b.gildi * hlutfall))).join('');
};

const mykja = (x: number) => 1 - Math.pow(1 - x, 3);

function telja(el: HTMLElement) {
  const butar = (el as any).__butar as Bútur[];
  const lok = el.dataset.lokagildi!;
  const byrjun = performance.now();
  const skref = (nu: number) => {
    const x = Math.min(1, (nu - byrjun) / TIMI);
    if (x < 1) {
      setja(el, butar, mykja(x));
      requestAnimationFrame(skref);
    } else {
      synilegt(el).textContent = lok;
    }
  };
  requestAnimationFrame(skref);
}

function hefja() {
  const rolegt = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const html = document.documentElement;
  (window as any).__hreyfing = true;

  if (!rolegt && 'IntersectionObserver' in window) {
    const tolur = [...document.querySelectorAll<HTMLElement>('[data-telja]')];
    const vaxa = [...document.querySelectorAll<HTMLElement>('[data-vaxa]')];
    for (const el of tolur) {
      const texti = el.textContent ?? '';
      const butar = greina(texti);
      if (!butar.some((b) => typeof b !== 'string')) continue;
      (el as any).__butar = butar;
      el.dataset.lokagildi = texti;
      el.style.fontVariantNumeric = 'tabular-nums';
      const syn = document.createElement('span');
      syn.setAttribute('aria-hidden', 'true');
      const falid = document.createElement('span');
      falid.className = 'sr-only';
      falid.textContent = texti;
      el.replaceChildren(syn, falid);
      (el as any).__syn = syn;
      setja(el, butar, 0);
    }
    const sja = new IntersectionObserver(
      (faerslur) => {
        for (const f of faerslur) {
          if (!f.isIntersecting) continue;
          const el = f.target as HTMLElement;
          sja.unobserve(el);
          const vaxandi: HTMLElement[] | undefined = (el as any).__vaxa;
          if (vaxandi) vaxandi.forEach((v) => v.classList.add('synilegt'));
          else if (el.hasAttribute('data-vaxa')) el.classList.add('synilegt');
          else if ((el as any).__butar) telja(el);
        }
      },
      { threshold: 0.4 },
    );
    tolur.filter((el) => (el as any).__butar).forEach((el) => sja.observe(el));
    // Súla sem er falin með clip-path (t.d. skipting) sést ekki hjá IntersectionObserver í Chrome:
    // þá er fylgst með foreldrinu í staðinn.
    vaxa.forEach((el) => {
      const markmid = getComputedStyle(el).clipPath !== 'none' && el.parentElement ? el.parentElement : el;
      if (markmid !== el) ((markmid as any).__vaxa ??= []).push(el);
      sja.observe(markmid);
    });
  }
  html.classList.add('hreyfing-tilbuin');

  // Valmyndarskúffur (<details>): Escape lokar og skilar fókus á hnappinn.
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    for (const d of document.querySelectorAll<HTMLDetailsElement>('details.skuffa[open], details.langlestur__yfirlit-farsimi[open]')) {
      d.open = false;
      d.querySelector<HTMLElement>('summary')?.focus();
    }
  });

  // Síðulisti kaflans í farsíma: virka síðan skrunast í sýn, og dofnun/ör sýnir hvar meira er.
  for (const ytri of document.querySelectorAll<HTMLElement>('.systur-ytri')) {
    const listi = ytri.querySelector<HTMLElement>('.systur--farsimi');
    if (!listi) continue;
    const virk = listi.querySelector<HTMLElement>('[aria-current="page"]');
    if (virk && listi.scrollWidth > listi.clientWidth) {
      // Virka síðan nálægt miðju (ekki undir dofnuninni), án hreyfingar.
      const mark = virk.offsetLeft - (listi.clientWidth - virk.offsetWidth) / 2;
      listi.scrollLeft = Math.max(0, Math.min(mark, listi.scrollWidth - listi.clientWidth));
    }
    const uppfaera = () => {
      const eftir = listi.scrollWidth - listi.clientWidth - listi.scrollLeft;
      ytri.classList.toggle('meira-vinstri', listi.scrollLeft > 4);
      ytri.classList.toggle('meira-haegri', eftir > 4);
    };
    listi.addEventListener('scroll', uppfaera, { passive: true });
    new ResizeObserver(uppfaera).observe(listi);
    uppfaera();
  }

  // Töflur: skuggar og vísbending eftir skrunstöðu.
  for (const ytri of document.querySelectorAll<HTMLElement>('.b-tafla-ytri')) {
    const skrun = ytri.querySelector<HTMLElement>('.b-tafla')!;
    const uppfaera = () => {
      const yfir = skrun.scrollWidth - skrun.clientWidth > 2;
      ytri.classList.toggle('er-yfirflaedi', yfir);
      ytri.classList.toggle('skrunad', skrun.scrollLeft > 2);
      ytri.classList.toggle('meira', yfir && skrun.scrollLeft < skrun.scrollWidth - skrun.clientWidth - 2);
    };
    skrun.addEventListener('scroll', () => {
      if (skrun.scrollLeft > 8) ytri.classList.add('hefur-skrunad');
      uppfaera();
    }, { passive: true });
    new ResizeObserver(uppfaera).observe(skrun);
    uppfaera();
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', hefja);
else hefja();
