# Ársskýrsluvefur Keilis 2026

Ársskýrsluvefur Golfklúbbsins Keilis, byggður með [Astro](https://astro.build) eftir hönnun í `design/keilir-arsskyrsla/` (sjá `README.md` og `LESTU-FYRST.md` þar). Kyrrstæður vefur, hýstur á Netlify á `2026.keilir.is`.

## Keyrsla

Þarf Node 22.23.4 eða nýrra (Netlify notar Node 24).

```sh
npm install
npm run dev       # http://localhost:4321 – sýnir líka síður án efnis og /innra/veftre/
npm run build     # production build í dist/
npm run preview   # skoða dist/ staðbundið
```

## Hvar efnið býr

- **`src/efni/efni-2025.js`** – allt efni ársins: forsíða, kaflar, síður og blokkir. Uppbyggingin er lýst í `design/keilir-arsskyrsla/README.md` („Content model“ og „Block types“).
- **`src/efni/index.js`** – velur virka efnisskrá. Nýtt ár: afrita `efni-2025.js` → `efni-2026.js` og breyta innflutningnum.
- **`src/assets/myndir/`** – myndir. Í efnisskránni er vísað á þær sem `myndir/...`; Astro býr til AVIF/WebP í nokkrum stærðum við build. Ytri slóðir (`https://…`) birtast óbreyttar.
- Röð `sidur` í efnisskránni ræður röð í valmynd og „fyrri/næsta“.
- `fyrirsognSkaletrun` (valkvætt á síðu): seinni hluti fyrirsagnar í gylltu skáletri, eins og á forsíðu.
- `snid: "langlestur"` (valkvætt á síðu): langlestrarútgáfa, t.d. ávarp formanns. Búin til úr blokkunum:
  fallstafur á innganginum, hvert `h2` verður númeraður kafli („Heiti – Fyrirsögn“ → „01 · Heiti“ + fyrirsögn),
  efnisyfirlit (fast á skjáborði, fellanlegt á farsíma) og síðasti kaflinn með `undirskrift` verður lokakassi.

## Síður án efnis (`stada: "vantar"`)

Síða með `stada: "vantar"` eða engar blokkir:

- **dev og prufu-deploy** (`SYNA_VANTAR=true`): birtist með rendóttum „Efni vantar“ reit, og `/innra/veftre/` sýnir stöðu allra síðna. Síðurnar fá `noindex`.
- **production** (`SYNA_VANTAR=false`, sett í `netlify.toml`): sleppt úr buildi, ásamt tenglum á hana. Kafli sem hefur engar síður hverfur úr valmynd.

## Uppbygging

```
src/
  efni/            efnisskrá ársins
  lib/skyrsla.js   breytir efnisskrá í kafla, slóðir, fyrri/næsta
  components/      Haus, Fotur, Blokk (allar blokkagerðir), Mynd, Texti
  layouts/         Grunnur (<head>, letur)
  pages/           index.astro (forsíða), [slug].astro (undirsíður), innra/[sida].astro (veftré)
  styles/global.css  mobile first; @media (min-width: 900px) = hönnun í 1440px
public/fonts/      Inter og Newsreader, sjálfhýst (breytileg WOFF2, latnesk og íslensk tákn, OFL-leyfi)
```

## Netlify

`netlify.toml` er tilbúið (build `npm run build`, publish `dist`, Node 24). Til að setja í loftið:

1. Ýta geymslunni á GitHub og tengja hana við nýja síðu í Netlify („Import from Git“). Hver push á `main` fer þá sjálfkrafa í loftið; aðrar greinar fá forskoðunarslóð.
2. Í Netlify: *Domain management → Add a domain* → `2026.keilir.is`.
3. Í DNS fyrir keilir.is: CNAME-færsla `2026` → `<síðuheiti>.netlify.app`. Netlify sér um HTTPS-skírteini.

## Opið

- Myndbönd (.mov) og PDF-skjöl vísa enn á `2025.keilir.is/wp-content/uploads/…`; þarf að sækja, umbreyta .mov → .mp4 og hýsa sjálf.
- Gröfin í „Leiknir hringir“ eru PNG af gamla vefnum; verða gagnvirk gröf þegar hrágögn fást.
- Efni 2026 kemur úr Word-skjali ársskýrslunnar.
