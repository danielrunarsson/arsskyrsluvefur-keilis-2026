# Ársskýrsluvefur Keilis – reglur fyrir Claude Code

Ársskýrsluvefur Golfklúbbsins Keilis: Astro 7, kyrrstæður vefur, hýstur á Netlify á https://2026.keilir.is.
Allt efni býr í einni efnisskrá (`src/efni/efni-2025.js`, síðar `efni-2026.js`); hönnunin helst óbreytt milli ára.
`README.md` lýsir uppbyggingu, efnislíkani og öllum reglum í smáatriðum – lestu viðeigandi kafla áður en þú breytir.

Tveir vinna í verkefninu samtímis (Daníel og Vikar), hvor með sína Claude Code. Fylgdu vinnulaginu hér að neðan.

## Ef þú vinnur með Vikari

Vikar hefur **enga forritunarreynslu**. Hann lýsir á venjulegri íslensku hvað hann vill; þú sérð um allt tæknilegt.

- Talaðu einfalda íslensku, án tæknimáls. Ef tæknihugtak er óhjákvæmilegt, útskýrðu það í einni setningu.
- Sjáðu sjálf/ur um git: sækja nýjasta `main`, búa til grein, commit, push og PR. Ekki biðja hann að keyra skipanir
  nema það sé óhjákvæmilegt (t.d. innskráning), og þá skref fyrir skref.
- Sýndu honum útkomuna í vafra (sími og tölva) áður en þú segir að verkið sé búið.
- Hann má setja í loftið sjálfur. Þegar hann segir „settu í loftið“: keyrðu `npm run athuga` og `npm run build`,
  opnaðu PR, bíddu eftir að Netlify-forskoðun og Lighthouse standist, segðu honum í einni setningu hvað fer í loftið,
  og sameinaðu svo PR-ið (`gh pr merge --squash`). Staðfestu að breytingin sjáist á 2026.keilir.is og segðu honum það.
  Ef eitthvað fellur: ekki sameina – útskýrðu vandann á einföldu máli og lagaðu hann.
- Ef árekstur verður við `main` eða eitthvað bilar: leystu það sjálf/ur ef það er einfalt, annars segðu honum á einföldu
  máli að hafa samband við Daníel. Ekki nota eyðileggjandi git-skipanir (`reset --hard`, `push --force`).
- Í byrjun verks: minntu hann á að láta Daníel vita hvaða kafla hann er að vinna í.

## Vinnulag (mikilvægt)

- **Aldrei ýta beint á `main`.** Hver push á `main` fer strax í loftið á 2026.keilir.is.
- Byrjaðu alltaf á `git pull` á `main`, búðu svo til grein: `git switch -c <stutt-lysing>`.
- Litlar, afmarkaðar breytingar; ein færsla (commit) á hvert atriði. Commit-skilaboð á ensku.
- Opnaðu pull request (`gh pr create`) þegar verkinu er lokið. Netlify byggir forskoðun (deploy preview) fyrir hvern PR
  og Lighthouse keyrir á henni; deploy fellur ef aðgengi < 0,95 eða best practices < 0,9.
- Hvor um sig má sameina (merge) eigin PR þegar athugun, build, forskoðun og Lighthouse standast.
- **Efnisskráin er ein stór skrá** – ef báðir breyta henni í einu verða árekstrar. Samræmið hver vinnur í hvaða kafla.
- Ef `main` hefur breyst á meðan: `git pull --rebase origin main` á greininni og leystu árekstra áður en þú ýtir.

## Keyrsla og prófanir

```sh
npm install
npm run dev        # http://localhost:4321 (sýnir líka síður án efnis og /innra/veftre/)
npm run athuga     # efnisathugun – verður að standast
npm run build      # astro build + pagefind leitarvísir; verður að ganga villulaust
npm run preview    # byggður vefur (leitin virkar aðeins hér, ekki á dev-þjóni)
```

Áður en verki er lokið: `npm run athuga` og `npm run build` án villna, og skoðaðu breytinguna í vafra
**bæði í 375px (sími) og 1440px (tölvuskjár)** – engin lárétt skrun í síma.

## Reglur sem gilda alls staðar

- **Íslenska** í kóðaheitum, athugasemdum, efni og README. Commit-skilaboð á ensku.
- **Efni fer bara í efnisskrána**, aldrei harðkóðað í síður. Nýjar blokkagerðir/svið: uppfæra `src/lib/athuga.js` og README.
- **Myndir**: í `src/assets/myndir/`, vísað á þær sem `myndir/...`. Hver mynd fær `alt`-lýsingu sem segir hvað er á henni
  (á gröfum: hvað gögnin sýna). Build varar við myndum án lýsingar.
- **Tölur utan meginmáls telja upp** (`data-telja`), súlur vaxa (`data-vaxa`) – sjá README „Regla: tölur telja upp“.
- **Aðgengi (WCAG 2.2 AA)**: gull merkisins `#AE9453` aldrei á texta; texti notar `--gull-dokkt` / `--gull-texti`.
  Lyklaborð, fókusrammar og skjálesarar verða að virka. Virða `prefers-reduced-motion`.
- **Afköst**: Lighthouse farsími 94–100. Ekkert þungt JavaScript; engar ytri skriftur nema GoatCounter.
- **Mobile first**: grunnstílar fyrir síma, `@media (min-width: 900px)` fyrir tölvuskjá. `global.css` notar CRLF-línuendingar.
- Ekki breyta Netlify-, DNS- eða GitHub-stillingum án þess að spyrja.
