# Handoff: Ársskýrsluvefur Golfklúbbsins Keilis

## Overview
Árlegur ársskýrsluvefur fyrir Golfklúbbinn Keili (áður 2024.keilir.is / 2025.keilir.is, WordPress). Markmið: eitt endurnýtanlegt sniðmát í ritstjórnarlegum „tímarits“-stíl þar sem **allt efni býr í einni efnisskrá á ári** (`efni-2025.js`, síðar `efni-2026.js`) og hönnunin helst óbreytt milli ára. Hýst sem undirlén, t.d. `2026.keilir.is`.

## About the Design Files
Skrárnar í þessum pakka eru **hönnunarviðmið gerð í HTML** – frumgerðir sem sýna útlit og hegðun, ekki framleiðslukóði til að afrita beint. Verkefnið er að **endurgera þessa hönnun** í viðeigandi umhverfi. Ekkert kóðaumhverfi er til fyrir þetta verkefni, svo mælt er með:

- **Astro** (static site, ekkert JS nema þar sem þarf) – fullkomið fyrir efnisvef sem er gefinn út einu sinni á ári. Annar kostur: Next.js með static export.
- Efni í `src/content/<ár>.ts` (eða JSON/MDX) með sömu uppbyggingu og `efni-2025.js`.
- Ein route á síðu: `/` (forsíða), `/[slug]` fyrir hverja undirsíðu.
- Hýsing á Vercel/Netlify/Cloudflare Pages; hvert ár = sér deploy á sínu undirléni (eða `ar` breyta í build).

`.dc.html` skrárnar opnast beint í vafra (þurfa `support.js` í sömu möppu og staðbundinn vefþjón, t.d. `npx serve .`, vegna `import()` á efnisskránni).

## Fidelity
**High-fidelity.** Litir, letur, stærðir og bil eru endanleg og á að endurgera nákvæmlega. Hönnunin er gerð í 1440px breidd; **farsímaútgáfa er ekki fullhönnuð** – sjá „Responsive“ hér að neðan.

## Content model (`efni-2025.js`)
```
{
  ar, heiti, adalfundur, kynningPdf,
  kaflar: [{ id, heiti }],              // 5 kaflar: stjorn, ithrottir, felagsstarf, fjarmal, serefni
  forsida: { fyrirsogn, fyrirsognSkaletrun, inngangur, mynd, myndatexti,
             lykiltolur[{tala,texti,breyting}], greinar[{kicker,titill,texti,mynd,slug}],
             studningsadilar[string] },
  sidur: [{ slug, kafli, heiti, fyrirsogn?, kicker?, portrett?, hofundur?, lestur?,
            heimild, stada?: "vantar", blokkir: Block[] }]
}
```
Röð `sidur` ræður röð í valmynd og „fyrri/næsta“ tenglum.

### Block types (`t`)
| t | Svið | Útlit |
|---|---|---|
| `inngangur` | texti | Newsreader 26/1.5, max 820px |
| `p` | texti (`**feitt**` stutt) | Newsreader 20/1.65, #1F1D19, max 760px; feitt = 600 #15130F |
| `h2` | texti | Newsreader 40/1.1, -0.015em, border-top 1px #15130F, padding-top 20, margin-top 40 |
| `h3` | texti | Helvetica 600 13px, uppercase, .12em, #8A7136 |
| `listi` | atridi[string] | grid 28px/1fr, „—“ í #AE9453, Newsreader 20/1.55 |
| `tolur` | atridi[{tala,texti}] | auto-fit minmax(200px,1fr); border-top 2px #15130F, border-bottom 1px #DEDAD0; tala Newsreader 52px #8A7136; texti Helvetica 500 14px #4A463F |
| `tilvitnun` | texti | Newsreader italic 300 44/1.15, línur ofan/neðan 1px #AE9453, padding 40 0, gæsalappir „…“ |
| `mynd` | src, texti? | 100% × 520px cover; myndatexti Newsreader italic 15 #5E5A52 |
| `myndir` | atridi[src] | 2 dálkar, gap 16, hæð 340 |
| `myndband` | src, texti, lodrett? | lárétt 16:9 / lóðrétt 360×640; bakgrunnur #15130F |
| `tafla` | dalkar[], radir[] | sjá „Töflur“ |
| `sulur` | titill, atridi[{heiti,gildi,pct,aherslu?,daufur?}] | lárétt súlurit: grid 240px/1fr/80px, súla 14px há; litur #15130F, áhersla #AE9453, dauf #D9CBA3 |
| `pdf` | titill, src, (staerd) | kort: forskoðun 300px (rendur #F5F0E3/#FBF8F1) + 280px hliðardálkur m. hnapp |
| `folk` | titill, atridi[{nafn,hlutverk}] | 2 dálkar; nafn Newsreader 22; hlutverk Helvetica 500 13 #8A7136 |
| `nofn` | titill, atridi[string] | 3 dálkar, Helvetica 16/1.45 |
| `nefndir` | atridi[{heiti,texti}] | 2 dálkar, kort #F5F0E3 padding 24 |
| `grof` | atridi[{heiti,src}] | 2 dálkar, mynd 280px contain á #FBF8F1 (ætti að verða alvöru gröf – sjá Open items) |
| `undirsidur` | atridi[{heiti,slug}] | 2 dálka kort, border 1px #15130F, min-h 140 |
| `tenglar` | atridi[{heiti,slug}] | pillu-tenglar m. ramma |
| `undirskrift` | nafn, titill | Newsreader italic 24 + Helvetica 14 #5E5A52 |

### Töflur
`radir` = fylki af strengjafylkjum eða hlutum `{ c:[...], feitt|milli|samtala:true }`.
- Grid: 4 dálkar `minmax(0,1fr) 150px 150px 64px`, 3 dálkar `minmax(0,1fr) 170px 170px`. Gap 16. `font-variant-numeric: tabular-nums`. Tölur hægrijafnaðar.
- Haus: 12px uppercase .1em #5E5A52, border-bottom 1px #15130F.
- Venjuleg röð: padding 12 0, border-bottom 1px #E6E2D9; fyrra árs dálkur #5E5A52.
- `feitt`: 700, border #DEDAD0. `milli`: millifyrirsögn 600 12px uppercase #8A7136. `samtala`: bakgrunnur #F5F0E3, border-bottom 2px #15130F, 700.

### `stada: "vantar"`
Síða er í veftré og valmynd en sýnir rendóttan „Efni vantar“ reit. Í production: sleppa síðunni úr build ef hún hefur engar blokkir.

## Screens / Views

### Sameiginlegt – haus undirsíðna
- Grid `1fr auto 1fr`, padding 24px 56px, border-bottom 1px #15130F.
- Vinstri: „{nr} — {kafli}“ Helvetica 500 13 uppercase .12em.
- Miðja: merki 56×56 (hringur) + „KEILIR“ Newsreader 600 26px, letter-spacing .28em, padding-top 5px (sjónræn miðjun við merki), gap 14.
- Hægri: „Ársskýrsla 2025“ + PDF hnappur (#AE9453, hvítur texti 700 14, padding 10/16).
- Kaflavalmynd undir: miðjuð, gap 40, Helvetica 500 15, padding 16 56, border-bottom #DEDAD0. Virkur kafli 700 + undirlína 2px #AE9453.

### Forsíða
1. Haus: kaflar vinstri/hægri, merki í miðju, gullhnappur „Sækja PDF ↓“.
2. Upplýsingalína: 3 hlutar, 13px uppercase .12em, border-bottom #DEDAD0.
3. Gullborði (#AE9453, texti #15130F 18px) – tengill á kynningu stjórnar.
4. Hetja: grid 1.4fr/1fr, gap 64, padding 72 56 48. Fyrirsögn Newsreader 400 168px/0.88, -0.035em; seinni hluti italic 300 #AE9453. Inngangur Newsreader 24/1.4.
5. Aðalmynd 100% × 620 + myndatexti italic 15 #5E5A52.
6. Lykiltölur: 5 dálkar, border-top 2px / bottom 1px #15130F; tala Newsreader 60 #8A7136; breyting 700 #8A7136.
7. Efnisyfirlit: grid 320/1fr; raðir 64/280/1fr/24, padding 22 0, border-top 1px #15130F; númer Newsreader 18 #8A7136, heiti Newsreader 30.
8. Þrjár greinar: 3 dálkar gap 40; mynd 340px; kicker 13 uppercase #8A7136; titill Newsreader 34/1.1.
9. Stuðningsaðilar: grid 320/1fr; nöfn flex-wrap gap 10/28, 16px #4A463F. (Í production: lógó í gráskala.)
10. Fótur: #15130F bakgrunnur, #E8E3D8 texti, 4 dálkar, padding 56.

### Undirsíða (allar)
- **Með portretti** (`portrett` til): grid 1fr/1.1fr gap 96; kicker 600 13 uppercase #8A7136; fyrirsögn Newsreader 300 80/0.98 -0.03em; höfundur + lestími 14 #5E5A52; mynd 560px hæð, grayscale(1) contrast(1.05), object-position top.
- **Án portretts:** fyrirsögn Newsreader 400 112/0.92 -0.035em, max 1100px.
- Meginmál: grid `240px minmax(0,1fr)`, gap 96, padding 72 56 0.
  - Vinstri: systursíður kaflans; virk = 700 + border-top #15130F + gull ●; aðrar 500 #4A463F, border-top #E6E2D9.
  - Hægri: blokkir í röð, gap 24.
- „← Fyrri / Næsta →“: border-top 1px #15130F, 600 15; næsta í #8A7136.
- Fótur: #15130F, padding 40 56.

### Ávarp formanns (sérútgáfa í `Keilir Ársskýrsla.dc.html`, kafli 2a)
Langlesningarútgáfa: fallstafur (Newsreader 104px #AE9453), efnisyfirlit 11 kafla vinstra megin (numeruð 01–11), lokakafli í #F5F0E3 kassa með undirskrift. Sniðmátið nær sama efni almennt; ef þið viljið númerað efnisyfirlit á löngum síðum má búa það til sjálfvirkt úr `h2` blokkum.

### Veftré (aðeins innra yfirlit)
Sýnir alla kafla/síður og stöðu efnis. Gagnlegt sem `/_veftre` dev-síða, ekki opinbert.

## Interactions & Behavior
- Tenglar: hover → #8A7136. Engar hreyfingar/animationir.
- Valmynd: virkur kafli/síða merkt eins og lýst er.
- Myndbönd: native `<video controls preload="metadata">`. **.mov skrár þarf að umbreyta í .mp4 (H.264)** – .mov spilar ekki í Chrome/Firefox.
- Myndir: `loading="lazy"`.
- PDF: opnast í nýjum flipa / niðurhal.

## Responsive (þarf að klára)
Hönnun í 1440px. Tillaga fyrir < 900px:
- Haus: merki + KEILIR til vinstri, valmynd í hamborgara/skúffu.
- Hetjufyrirsögn 168 → 64px; undirsíðufyrirsögn 112/80 → 48px.
- Meginmálsgrid → einn dálkur; systursíður verða láréttur skrunlisti efst.
- `tolur`, `folk`, `nefndir`, `grof`, `myndir` → 1 dálkur (tolur 2).
- Töflur: halda 3–4 dálkum, minnka letur í 13px, leyfa lárétt skrun.
- Padding 56 → 20.

## Design Tokens
**Litir**
- Blek / aðaltexti: `#15130F`
- Meginmál: `#1F1D19`
- Aukatexti: `#4A463F`, daufur: `#5E5A52`
- Gull (Keilir, úr merki): `#AE9453` – hnappar, áherslur, súlur
- Dökkt gull (texti, tölur – betri birtuskil): `#8A7136`
- Ljóst gull: `#F5F0E3` (kassar), `#FBF8F1` (rendur/bakgrunnur grafa), `#D9CBA3` (daufar súlur)
- Línur: `#15130F` (sterkar), `#DEDAD0`, `#E6E2D9` (fínar)
- Bakgrunnur síðu: `#FFFFFF`; fótur `#15130F` / texti `#E8E3D8`

**Letur**
- Fyrirsagnir og meginmál: **Newsreader** (Google Fonts, opsz 6..72, wght 300–700, italic).
- UI, merkingar, tölur í töflum: **Helvetica Neue** → Helvetica → Arial.
- Mono (aðeins innri merkingar): IBM Plex Mono.
- Skali: 168 / 112 / 84 / 80 / 60 / 52 / 48 / 44 / 40 / 36 / 34 / 30 / 28 / 26 / 24 / 22 / 21 / 20 / 18 / 16 / 15 / 14 / 13 / 12.

**Bil:** 4 · 8 · 10 · 12 · 16 · 20 · 24 · 28 · 40 · 56 · 64 · 72 · 88 · 96 · 120. Síðu-padding lárétt 56px.
**Radíus:** 0 alls staðar (nema merki/avatar = hringur). **Skuggar:** engir á síðunni sjálfri.

## Assets
- `assets/keilir-logo.png` – merki Keilis (frá klúbbnum). Birt sem hringur.
- Allar myndir, myndbönd og PDF eru hlekkir á `2025.keilir.is/wp-content/uploads/…` og `www.keilir.is/wp-content/uploads/…`. **Í production á að hala þeim niður og hýsa sjálf** (myndir í `public/<ár>/`), og gera myndir í WebP/AVIF.
- Ein mynd vantar: portrett íþróttastjóra (Birgir Björn) – slóðin á gamla vefnum virkar ekki.

## Open items
1. **12 síður án efnis** (`stada: "vantar"` í efni-2025.js): ársskýrsla íþróttastjóra, nefndir og ráð, íþróttafólk Hafnarfjarðar, árangur og þátttaka, meistaramót, mótahald, 65+, kvennastarf, samstarf, sjóðstreymi, rekstraráætlun, Íslandsmótið. Efni á `heimild` slóð hverrar síðu.
2. **Gröf í „Leiknir hringir“** eru PNG af gamla vefnum – ættu að vera teiknuð gröf (t.d. SVG / Observable Plot) í sömu litum ef hrágögn fást.
3. **Farsímaútgáfa** – sjá Responsive.
4. **.mov → .mp4** umbreyting.
5. **2026 efni** – afrita `efni-2025.js` → `efni-2026.js` og skipta út.

## Files
- `Keilir Sniðmát.dc.html` – **aðalviðmið**: veftré, forsíða og allar undirsíður keyrðar úr efnisskrá.
- `efni-2025.js` – allt efni 2025 (uppbygging = content model hér að ofan). Má nota beint sem upphafsgögn.
- `Keilir Ársskýrsla.dc.html` – fyrri hönnunarhringir: tvær stefnur (1a/2a, 2a varð fyrir valinu), ásamt langlesningarútgáfu ávarps formanns og farsímaskissum.
- `assets/keilir-logo.png`
- `support.js` – keyrsluumhverfi fyrir `.dc.html` skrárnar (aðeins til að skoða viðmiðin).

## Byrjað í Claude Code (tillaga)
```
mkdir keilir-arsskyrsla && cd keilir-arsskyrsla
# afritið þennan pakka í ./design_handoff
git init && gh repo create keilir/arsskyrsla --private --source=. --push
claude
> Lestu design_handoff/README.md og settu upp Astro verkefni sem endurgerir
> Keilir Sniðmát.dc.html. Notaðu efni-2025.js sem efnisskrá. Byrjaðu á
> forsíðu og undirsíðusniðmáti, svo responsive.
```
Bjóðið hinum tveimur sem collaborators á GitHub geymslunni; hvert ykkar keyrir Claude Code á sinni vél á sér grein (branch) og sameinar með pull requests.
