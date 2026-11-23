# Lestu fyrst – breytingar frá README

- **Myndir eru komnar í pakkann.** Allar 24 myndirnar eru í `myndir/u/` (frá 2025.keilir.is) og `myndir/w/` (frá www.keilir.is). `efni-2025.js` og `.dc.html` skrárnar vísa nú á þær með afstæðum slóðum. Í Astro: færið `myndir/` í `public/2025/myndir/` (eða sambærilegt) og breytið WebP/AVIF í build.
- **Myndbönd (.mov/.mp4) og PDF** vísa enn á `2025.keilir.is/wp-content/uploads/…` – þarf að sækja og hýsa sjálf.
- **Hýsing:** Netlify, static. Lén: `2026.keilir.is` (CNAME í DNS keilir.is → `<síðuheiti>.netlify.app`).
- **Mobile first** – farsímaútgáfan á að vera jafngild skjáborðsútgáfunni, ekki eftiráhugsun (sjá „Responsive“ í README).
