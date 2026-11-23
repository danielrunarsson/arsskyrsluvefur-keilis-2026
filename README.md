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
- **`public/myndbond/`** – myndbönd (`t: "myndband"`): H.264/AAC `.mp4` með `+faststart`, mest 1280 px á lengri hlið
  (~4–6 MB hvert), og `poster` (WebP-skjáskot, <100 KB) svo ekki birtist svartur kassi fyrir spilun. Umbreyting:
  `ffmpeg -i inn.mov -vf "scale=1280:-2" -c:v libx264 -preset slow -crf 24 -maxrate 4M -bufsize 8M -c:a aac -b:a 128k -movflags +faststart út.mp4`
  (lóðrétt: `scale=-2:1280`). Athugunin varar við `.mov` og myndböndum án `poster`, og stöðvar ef skrá vantar.
- Röð `sidur` í efnisskránni ræður röð í valmynd og „fyrri/næsta“.
- `forsida.timalina`: tímalína golfársins á forsíðu. Hver færsla `{ dags, titill, texti?, tala?, taliTexti?, mynd?, alt?, slug? }`;
  tölur telja upp, færslur renna inn við skrun, og `slug` tengir á síðu (sleppt sjálfkrafa ef síðan er ekki birt).
- `fyrirsognSkaletrun` (valkvætt á síðu): seinni hluti fyrirsagnar í gylltu skáletri, eins og á forsíðu.
- **Forsíðufyrirsögn** (`forsida.fyrirsogn` + `fyrirsognSkaletrun`): hlutarnir eru skeyttir saman; endi `fyrirsogn` ekki
  á bili myndast eitt samsett orð („Íslands“ + „mótsins“). `|` merkir línuskil og kemur í stað bils, t.d.
  `fyrirsogn: "Ár|Íslands"` → „Ár / Íslandsmótsins“. Án `|` jafnar vafrinn línurnar sjálfur. Leturstærðin lagar sig
  að dálkinum (64 px farsími, 168 px skjáborð að hámarki) svo lengsta lína/orð kemst alltaf fyrir – reiknað við build
  í `src/lib/fyrirsogn.js`. Fyrir mjög löng samsett orð má setja mjúkt bandstrik (`­`) þar sem skipta má, ef orðið
  kemst ekki fyrir í lágmarksstærð. `|` virkar aðeins á forsíðu; á deilikortinu verður það bil.
- `snid: "langlestur"` (valkvætt á síðu): langlestrarútgáfa, t.d. ávarp formanns. Búin til úr blokkunum:
  fallstafur á innganginum, hvert `h2` verður númeraður kafli („Heiti – Fyrirsögn“ → „01 · Heiti“ + fyrirsögn),
  efnisyfirlit (fast á skjáborði, fellanlegt á farsíma) og síðasti kaflinn með `undirskrift` verður lokakassi.
- **Lesframvinda** (`components/Lesframvinda.astro` + `scripts/lesframvinda.ts`): 3 px gyllt lína efst á skjánum
  sem fyllist frá upphafi `main` að lokum greinarinnar. Alltaf á langlestrarsíðum, sjálfkrafa á öðrum undirsíðum
  ef efnið er lengra en 2,5 skjáhæðir; aldrei á forsíðu. Á langlestri: teljari „04 / 11“ á farsíma og núverandi
  kafli fær `aria-current` í efnisyfirlitinu. Línan og teljarinn eru `aria-hidden` (engar tilkynningar við skrun);
  án JavaScript birtist ekkert.

## Letur og afköst

Lighthouse (farsími, hæg 4G): forsíða 94, aðrar síður 98–100. Helstu atriði:

- **Letur, 161 KB alls** (var 440 KB): Newsreader er klofið í textaútgáfu (opsz 16, 400–600) og fyrirsagnaútgáfu
  „Newsreader Display“ (opsz 72, 300–400); Inter er fest í opsz 14, 400–700. Aðeins latnesk + íslensk tákn.
  Fyrirsagnir, stórar tölur og tilvitnanir nota `--serif-display` (listi aftast í `global.css`).
- **Varaletur með sömu málum** (Georgia/Arial með `size-adjust`) svo texti hoppar ekki þegar vefletrið hleðst.
- **CSS beint í síðunni** (`inlineStylesheets: 'always'`) – engin beiðni sem stöðvar fyrstu birtingu.
- **Aðalmynd forsíðu** fær `forgangur` (fetchpriority=high); aðrar myndir lazy og í réttum stærðum fyrir farsíma.
- **Favicon** í réttum stærðum (32/192 px + apple-touch-icon) – áður var 715 KB merki notað sem favicon.

## Aðgengi (WCAG 2.2 AA)

Vefurinn stenst axe-prófun (WCAG 2.0–2.2 A/AA + best practices) á öllum síðum, bæði á farsíma og skjáborði.

- **Litir:** `#AE9453` (gull merkisins) er notað á fleti, súlur og línur – **ekki á texta**. Á texta:
  `--gull-dokkt` `#816932` (5,3:1 á hvítu, 4,6:1 á ljósgulli) og `--gull-texti` `#A68D4F` (3,2:1, aðeins stór texti).
  Hnappar eru `--gull-dokkt` með hvítum texta.
- **Lyklaborð:** „Fara beint í efni“ er fyrsti tengill á hverri síðu. Valmyndin („Efni“) og efnisyfirlit langlesturs
  opnast með Enter/Space og lokast með Escape. Allir gagnvirkir hlutir hafa sýnilegan fókusramma.
- **Skjálesarar:** tölur sem telja upp lesast alltaf með réttu lokagildi (talningin sjálf er falin skjálesurum).
  Fyrirsagnaröð er rétt sjálfkrafa, töflur fá nafn eftir kaflanum sínum, PDF-tenglar segja að þeir opnist í nýjum flipa.
- **Á hverju deployi** keyrir Lighthouse (`@netlify/plugin-lighthouse`, stillt í `netlify.toml`) á lykilsíðum.
  Deploy fellur ef aðgengi < 0,95 eða best practices < 0,9. Einkunnir sjást í deploy-yfirliti Netlify.

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
- **Canonical:** hver síða vísar á eigin fulla slóð á aðalléninu (nema `noindex`-síður, t.d. 404).
- Eftir að 2026.keilir.is er orðið aðallén: skrá sitemap-slóðina í [Google Search Console](https://search.google.com/search-console).

## Efnisathugun

Efnisskráin er athuguð við hvert build (`src/lib/athuga.js`), og líka sér með:

```sh
npm run athuga
```

**Villur stöðva build** (á Netlify: deploy fellur og lifandi vefur helst óbreyttur):
óþekkt blokkargerð, skyldusvið vantar, tengill eða grein vísar á síðu sem er ekki til, mynd finnst ekki í
`src/assets/myndir/`, PDF-skjal (`kynningPdf` eða `pdf` blokk) finnst ekki í `public/`, tvítekið eða ólöglegt slug, kafli sem er ekki til, töfluröð með rangan dálkafjölda,
súla með `pct` utan 0–100.

**Viðvaranir** (build heldur áfram): óþekkt svið (líkleg innsláttarvilla), ójöfn `**feitletrun**`,
`.mov` myndbönd (spilast ekki í Chrome/Firefox), ytri myndir og ytri PDF-skjöl.

Hver athugasemd segir nákvæmlega hvar (síða › blokk nr.) og stingur upp á réttu nafni við innsláttarvillur,
t.d. `óþekkt blokkargerð „tilvitnum“ – áttirðu við „tilvitnun“?`

## PDF-skjöl

PDF-skjölin eru hýst á vefnum sjálfum í `public/skjol/` og birt á `/skjol/<skráarheiti>`
(upprunaleg skráarheiti af 2025.keilir.is halda sér). Í efnisskránni: `kynningPdf: S + "skjal.pdf"` eða
`{ t: "pdf", titill, src: S + "skjal.pdf" }`, þar sem `S = "/skjol/"`.

- **Stærðin** á „Sækja“-hnappnum er reiknuð úr skránni við build (`src/lib/skjol.js`), t.d. „1,6 MB“ – `staerd`
  þarf ekki og er hunsuð fyrir staðbundin skjöl. Hún gildir aðeins fyrir ytri slóðir (annars stendur „PDF“).
- **Efnisathugun:** staðbundið skjal sem finnst ekki í `public/` stöðvar build.
- **Ný útgáfa af skjali:** skipta skránni út undir sama heiti. Netlify sendir `Cache-Control: max-age=86400, must-revalidate`
  á `/skjol/*`, svo ný útgáfa berst gestum í síðasta lagi sólarhring síðar.

## Gestatalning (GoatCounter)

Talið með [GoatCounter](https://www.goatcounter.com): engar vafrakökur, engar persónuupplýsingar, svo enginn vafrakökuborði þarf.

- Kveikt með því að setja kóða síðunnar í `netlify.toml` → `[context.production.environment]` → `GOATCOUNTER_KODI`
  (t.d. `"keilir"` fyrir `keilir.goatcounter.com`). Tómt = engin talning.
- Aðeins talið á lifandi vef (production); forskoðanir, greinar og staðbundin keyrsla eru aldrei talin.
- Kóðinn má aðeins innihalda a–z, 0–9 og bandstrik; annað er hunsað.
- Tölurnar sjást á `https://<kóði>.goatcounter.com`.

## Súlurit (`sulur`)

Gagnvirkt (`src/components/Sulurit.astro`): músin, snerting eða lyklaborð (Tab, ↑/↓, Home/End, Esc) dregur röð fram,
hinar dofna og kall sýnir fullt gildi og hlutfall af heild, t.d. „228,0 mkr. · 40% af tekjum“. Skjálesarar fá sama texta
í hverri röð. Hlutföll eru reiknuð við build; daufar raðir (`daufur: true`, t.d. fyrra ár) teljast ekki með í heildinni.

```js
{ t: "sulur", titill: "Tekjur, mkr.", eining: "mkr.", hlutfallAf: "tekjum",
  atridi: [{ heiti: "Félagsgjöld", gildi: "228,0", pct: 100, fyrra: "202,4" }, …] }
```

| Svið | Skylda | Lýsing |
|---|---|---|
| `titill`, `atridi` | já | Fyrirsögn og raðir |
| `eining` | nei | Eining í kalli og fyrir skjálesara („mkr.“, „hringir“) |
| `hlutfallAf` | nei | „40% af …“ (sjálfgefið „heild“) |
| `ar`, `fyrraAr` | nei | Merki í skýringu og kalli (sjálfgefið ár efnisskrár og árið á undan) |
| `atridi[].heiti`, `gildi`, `pct` | já | Heiti, gildi (íslenskt snið) og lengd súlu 0–100 |
| `atridi[].aherslu` / `daufur` | nei | Gyllt súla / dauf súla (samanburður, utan heildar) |
| `atridi[].fyrra` | nei | Gildi fyrra árs, t.d. `"202,4"`: mjó súla undir, skýring (2025/2024) og breyting í kalli („+12,6%“) |
| `atridi[].fyrraPct` | nei | Lengd mjóu súlunnar 0–100; reiknuð úr `pct × fyrra / gildi` ef henni er sleppt |

Án `fyrra` breytist ekkert í útliti. Efnisathugunin stöðvar build ef `fyrra` er ekki tala eða `fyrraPct` er utan 0–100.

## PDF-forskoðanir

Spjald `pdf`-blokkar sýnir mynd af fyrstu síðu skjalsins úr
`src/assets/pdf-forskodun/<skráarheiti án .pdf>.png` (fundin eftir skráarheiti, svo `src` má vera
ytri slóð eða staðbundin `/skjol/…`). Vanti mynd birtist röndótt staðgengilsmynd. Þegar PDF-skjal
bætist við eða breytist:

```sh
npm run pdf-forskodun          # teiknar forskoðanir sem vantar
npm run pdf-forskodun -- --allt # teiknar allar aftur
```

Myndirnar (600 px breiðar) eru vistaðar í git; skriftan keyrir ekki í byggingu.

## Töflur á farsíma

Fyrsti dálkur (heiti) er fastur, dálkar til hægri skrunast. Dofnun til hægri og „Strjúktu til hliðar →“ sýna að meira er til hliðar; vísbendingin hverfur eftir fyrsta skrun.

## Síða fannst ekki (404)

`src/pages/404.astro` verður `dist/404.html`, sem Netlify birtir sjálfkrafa (með stöðukóða 404) fyrir allar óþekktar slóðir,
t.d. gamla tengla á síður sem er sleppt í production. Í hönnun skýrslunnar: haus, stór fyrirsögn, hnappur á forsíðu og
efnisyfirlit úr `kaflar`. Fær `noindex`, enga canonical-slóð og er ekki í sitemap. Allar slóðir í henni eru frá rót (`/…`)
svo hún virkar á hvaða dýpt sem er. Staðbundið: `npm run build && npm run preview` og opna t.d. `/ekki-til/` (með skástriki).

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
public/fonts/      Inter og Newsreader, sjálfhýst WOFF2 (sjá „Letur og afköst“), OFL-leyfi
public/skjol/      PDF-skjöl (kynning stjórnar, ársreikningur, könnun), birt á /skjol/<heiti> (sjá „PDF-skjöl“)
scripts/letur.mjs  býr letrið til úr Google Fonts-skránum (npm i -D subset-font er þegar uppsett)
```

## Netlify

`netlify.toml` er tilbúið (build `npm run build`, publish `dist`, Node 24). Til að setja í loftið:

1. Ýta geymslunni á GitHub og tengja hana við nýja síðu í Netlify („Import from Git“). Hver push á `main` fer þá sjálfkrafa í loftið; aðrar greinar fá forskoðunarslóð.
2. Í Netlify: *Domain management → Add a domain* → `2026.keilir.is`.
3. Í DNS fyrir keilir.is: CNAME-færsla `2026` → `<síðuheiti>.netlify.app`. Netlify sér um HTTPS-skírteini.

## Opið

- Myndbönd (.mov) vísa enn á `2025.keilir.is/wp-content/uploads/…`; þarf að sækja, umbreyta .mov → .mp4 og hýsa sjálf.
- Gröfin í „Leiknir hringir“ eru PNG af gamla vefnum; verða gagnvirk gröf þegar hrágögn fást.
- Efni 2026 kemur úr Word-skjali ársskýrslunnar.
