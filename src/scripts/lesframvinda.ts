// Lesframvinda (sjá components/Lesframvinda.astro).
// Mælingar (getBoundingClientRect) fara aðeins fram við ræsingu og stærðarbreytingar;
// skrunhlustari er óvirkur (passive) og uppfærir í mesta lagi einu sinni í ramma
// (requestAnimationFrame) með því einu að lesa scrollY og skrifa transform/flokk.

const LANGT = 2.5; // sjálfvirk lína ef greinin er lengri en 2,5 skjáhæðir
const LESLINA = 0.35; // hluti telst „núverandi“ þegar haus hans fer upp fyrir 35% skjáhæðar

export function hefjaLesframvindu() {
  const rot = document.querySelector<HTMLElement>('[data-lesframvinda]');
  const main = document.querySelector<HTMLElement>('main');
  if (!rot || !main) return;
  const grein = main.querySelector<HTMLElement>('.langlestur__texti, .blokkir') ?? main;
  const langlestur = rot.dataset.lesframvinda === 'langlestur';

  const hlutar = langlestur ? [...grein.querySelectorAll<HTMLElement>('.langlestur__hluti[id^="hluti-"]')] : [];
  const tenglar = hlutar.map((h) => [...document.querySelectorAll<HTMLAnchorElement>(`.langlestur a[href="#${h.id}"]`)]);
  const nuEl = rot.querySelector<HTMLElement>('.lesframvinda__nu');
  const allsEl = rot.querySelector<HTMLElement>('.lesframvinda__alls');
  if (allsEl) allsEl.textContent = String(hlutar.length).padStart(2, '0');

  let byrjun = 0;
  let endir = 1;
  let topar: number[] = [];
  let virk = false;
  let nuverandi = -2;
  let bidur = false;

  const maela = () => {
    const y = window.scrollY;
    byrjun = main.getBoundingClientRect().top + y;
    const botn = grein.getBoundingClientRect().bottom + y;
    endir = Math.max(byrjun + 1, botn - window.innerHeight);
    topar = hlutar.map((h) => h.getBoundingClientRect().top + y);
    virk = langlestur || botn - byrjun > LANGT * window.innerHeight;
    rot.hidden = !virk;
  };

  const setjaHluta = (i: number) => {
    if (i === nuverandi) return;
    tenglar[nuverandi]?.forEach((a) => a.removeAttribute('aria-current'));
    tenglar[i]?.forEach((a) => a.setAttribute('aria-current', 'true'));
    nuverandi = i;
    rot.classList.toggle('lesframvinda--hluti', i >= 0);
    if (nuEl && i >= 0) nuEl.textContent = String(i + 1).padStart(2, '0');
  };

  const uppfaera = () => {
    bidur = false;
    if (!virk) return;
    const y = window.scrollY;
    const hlutfall = Math.min(1, Math.max(0, (y - byrjun) / (endir - byrjun)));
    rot.style.setProperty('--framvinda', hlutfall.toFixed(4));
    // Golfkúlan fellur í holuna þegar lestri er lokið (og kemur upp aftur við skrun til baka).
    rot.classList.toggle('lesframvinda--holu', hlutfall >= 0.995);
    if (hlutar.length) {
      const lina = y + window.innerHeight * LESLINA;
      let i = -1;
      while (i + 1 < topar.length && topar[i + 1] <= lina) i++;
      setjaHluta(i);
    }
  };

  const panta = () => {
    if (!bidur) {
      bidur = true;
      requestAnimationFrame(uppfaera);
    }
  };
  const endurmaela = () => {
    maela();
    panta();
  };

  maela();
  uppfaera();
  window.addEventListener('scroll', panta, { passive: true });
  window.addEventListener('resize', endurmaela, { passive: true });
  // Myndir og letur geta breytt hæð greinarinnar eftir ræsingu.
  if ('ResizeObserver' in window) new ResizeObserver(endurmaela).observe(grein);
  else window.addEventListener('load', endurmaela);
}
