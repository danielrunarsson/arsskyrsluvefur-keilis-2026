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

## Regla: allar myndir fá lýsingu (alt)

Lýsingin er lesin upp í skjálesurum og birtist ef mynd hleðst ekki. Hún segir **hvað er á myndinni** (á gröfum: hvað gögnin sýna), ekki bara „mynd“.

| Hvar | Svið |
|---|---|
| Aðalmynd forsíðu | `forsida.myndAlt` |
| Greinar á forsíðu | `greinar[].alt` |
| Portrett síðu | `portrettAlt` (annars `hofundur`) |
| `mynd` blokk | `alt` (annars myndatextinn `texti`) |
| `myndir` blokk | `atridi: [{ src, alt }]` (strengur einn og sér virkar enn) |
| `grof` blokk | `atridi[].alt` (annars `heiti`) |

- Vanti lýsingu kemur gul viðvörun í build: `[myndalýsing] Vantar lýsingu (alt) á mynd: …`.
- Myndir sem eru eingöngu skraut (t.d. litla endurtekna portrettið) fá `skraut` í `Mynd`-íhlutnum og tómt alt.

## Regla: tölur telja upp

**Allar tölur utan meginmáls telja upp frá núlli þegar þær birtast á skjánum** – lykiltölur, `tolur`, gildi í `sulur`, tölur í `tafla` (og súlur vaxa frá vinstri).
Tölur inni í texta (`p`, `listi`, `inngangur`) hreyfast ekki.

- Útfært í `src/scripts/hreyfing.ts`. Merktu nýtt talnasvæði með `data-telja` (tala) eða `data-vaxa` (súlurit) – þá fylgir það reglunni sjálfkrafa.
- Íslenskt talnasnið helst í gegnum talninguna (2.192 · 569,3 · +21% · −4% · 337 → 774 · 14 klst.).
- Með „draga úr hreyfingu“ (prefers-reduced-motion) eða án JavaScript birtast lokagildin strax.

## Deiling (Facebook, LinkedIn, Slack o.fl.)

Hver síða fær Open Graph-, X/Twitter- og canonical-tögg og eigið deilikort (1200×630 JPEG) sem er teiknað við build:
`/deiling/forsida.jpg` og `/deiling/<slug>.jpg`.

- Kortið er búið til úr efninu: kaflamerki, fyrirsögn (gyllt skáletur ef `fyrirsognSkaletrun`), og til hægri
  portrett síðunnar (grátóna), fyrsta mynd hennar eða – ef engin mynd – fyrsta talan úr `tolur` blokk.
- Kóði: `src/deiling/kort.ts` (Satori + resvg, letur í `src/deiling/letur/`) og `src/pages/deiling/[slug].jpg.ts`.
- Slóðir í töggum nota aðallén Netlify (`URL`), svo þær verða sjálfkrafa `https://2026.keilir.is` þegar lénið er orðið aðallén.
- Prófa: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) og [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Leitarvélar: sitemap, robots.txt og canonical

- **Sitemap:** `/sitemap-index.xml` (búið til við hvert build með `@astrojs/sitemap`). Inniheldur allar birtar síður; `/innra/` er aldrei með. Forsíða fær forgang 1.0, aðrar 0.7.
- **robots.txt** (`src/pages/robots.txt.ts`): í production eru leitarvélar velkomnar og vísað á sitemap. Í forskoðunum og greinum (`SYNA_VANTAR=true`) er allt bannað, svo hálfkláraðar síður lendi ekki í leit.
- **Canonical:** hver síða vísar á eigin fulla slóð á aðalléninu.
- Eftir að 2026.keilir.is er orðið aðallén: skrá sitemap-slóðina í [Google Search Console](https://search.google.com/search-console).

## Töflur á farsíma

Fyrsti dálkur (heiti) er fastur, dálkar til hægri skrunast. Dofnun til hægri og „Strjúktu til hliðar →“ sýna að meira er til hliðar; vísbendingin hverfur eftir fyrsta skrun.

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
