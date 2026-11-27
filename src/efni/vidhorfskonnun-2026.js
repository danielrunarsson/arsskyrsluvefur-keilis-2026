// Viðhorfskönnun Keilis 2026 – efni úr skjalinu „Viðhorfskönnun Keilis 2026 – frétt fyrir ársskýrslu“
// (Viðhorfskönnun Keilis 2026 og Better Business, Mystery Golfers 2026).
// Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni; hún er flutt inn í síðulistann í efni-2025.js
// (í stað síðunnar „vidhorfskannanir“ í Skýrslu stjórnar). Slóðin helst óbreytt.
// Heilsíða (snid: "heilsida") í böndum (`hluti`), sama uppbygging og veitingasalan og ársreikningurinn.

const M = "myndir/fjarmal-2026/"; // sömu myndir og í fjármálakaflanum
const S = "/skjol/"; // PDF-skjöl í public/skjol/

const sida = {
  slug: "vidhorfskannanir", kafli: "stjorn", heiti: "Viðhorfskönnun", snid: "heilsida",
  fyrirsogn: "Hvaleyrarvöllur ", fyrirsognSkaletrun: "aldrei betri", kicker: "Ársskýrsla Keilis 2026 · Viðhorfskönnun",
  heimild: "https://2025.keilir.is/skyrsla-stjornar-vidhorfskannanir/",
  blokkir: [
    // ───────── Haus ─────────
    { t: "hluti", snid: "hetja",
      vinstri: [
        { t: "p", texti: "Hvaleyrarvöllur fékk sína **hæstu einkunn** í viðhorfskönnun Keilis 2026. Veitingasalan og golfverslunin tóku stórt stökk upp á við og hulduheimsóknir Better Business skiluðu besta árangri frá upphafi mælinga." },
        { t: "p", texti: "Leikhraðinn er hins vegar enn það sem félagsmenn vilja helst sjá batna." },
        { t: "p", texti: "Alls svöruðu 770 félagsmenn könnuninni, fleiri en árið áður. Konum í hópi svarenda heldur áfram að fjölga: þær eru nú 36%, en voru 31% árið 2022." }],
      haegri: [
        { t: "flogg", titill: "Fjöldi svarenda", eining: "svarendur", aukastafir: 0, atridi: [{ ar: "2025", gildi: "702" }, { ar: "2026", gildi: "770" }] }] },
    { t: "mynd", breidd: "full", stada: "center 50%", src: M + "hraunbrautir-ur-lofti.jpg", alt: "Loftmynd af brautum og flötum sem liðast um mosavaxið hraun meðfram ströndinni; Hafnarfjörður í baksýn.", texti: "Hraunið á Hvaleyrarvelli" },

    // ───────── Lykiltölur ─────────
    { t: "hluti", blokkir: [
      { t: "tolukort", atridi: [
        { heiti: "Hvaleyrarvöllur", tala: "4,3", texti: "hæsta meðaleinkunn frá 2022" },
        { heiti: "Flatirnar á Hvaleyri", tala: "4,7", texti: "70% gefa fullt hús" },
        { heiti: "Huldugestir, heildareinkunn", tala: "88,7%", texti: "sú besta frá 2018" },
        { heiti: "Leikhraði", tala: "3,5", breyting: "−0,2", texti: "frá 2022" }] },
      { t: "p", texti: "Einkunnir félagsmanna eru meðaltal á kvarðanum 1–5." }] },

    // ───────── Svarendur ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Hverjir svöruðu?" },
        { t: "p", texti: "Svarendahópurinn endurspeglar vöxt klúbbsins. Þriðjungur svarenda er með Sveinskotsaðild, 71% eru 51 árs eða eldri og 82% eru eingöngu í Keili." }],
      haegri: [
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "770", texti: "félagsmenn svöruðu, 702 árið áður" },
          { tala: "36%", texti: "svarenda eru konur, 31% árið 2022" },
          { tala: "82%", texti: "svarenda eru eingöngu í Keili" }] }] },

    // ───────── Vellirnir ─────────
    { t: "hluti", snid: "kort", kort: true,
      vinstri: [
        { t: "h2", texti: "Vellirnir" },
        { t: "p", texti: "Hvaleyrarvöllur fékk 4,3 í meðaleinkunn, þá hæstu frá því samanburður hófst 2022, og öll átta atriðin hækkuðu frá fyrra ári. Flatirnar fá 4,7 og 70% svarenda gefa þeim fullt hús. Svuntan hefur hækkað mest, úr 3,9 í 4,4 frá 2022." },
        { t: "p", texti: "Sveinskotsvöllur hækkar þriðja árið í röð og fær 3,5 í meðaleinkunn, upp úr 3,1 árið 2023. Merkingar teiga hafa batnað mest, úr 3,0 í 3,7. Teigarnir eru þó enn lægsta atriðið með 3,0, og þriðjungur svarenda gefur þeim 1 eða 2." }],
      haegri: [
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "4,7", texti: "flatirnar á Hvaleyrarvelli, hæsta einstaka einkunnin" },
          { tala: "4,4", texti: "svuntan á Hvaleyrarvelli, var 3,9 árið 2022" },
          { tala: "3,5", texti: "Sveinskotsvöllur, var 3,1 árið 2023" },
          { tala: "3,0", texti: "teigarnir á Sveinskotsvelli, lægsta atriðið" }] }] },

    // ───────── Hraunið eða Hvaleyrin ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Hraunið svaraði fyrir sig" },
        { t: "p", texti: "Svörin um hvor helmingur Hvaleyrarvallar sé skemmtilegri vekja alltaf athygli. Árið 2014 vann Hraunið með yfirburðum, 72% gegn 17%, og árið 2025 munaði aðeins einu prósentustigi." },
        { t: "p", texti: "Í ár svaraði Hraunið fyrir sig og vann 43% gegn 34% fyrir Hvaleyrina." }],
      haegri: [
        { t: "h3", texti: "Hvor helmingurinn er skemmtilegri?" },
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "43%", texti: "svarenda velja Hraunið, 72% árið 2014" },
          { tala: "34%", texti: "svarenda velja Hvaleyrina, 17% árið 2014" }] }] },

    // ───────── Þjónusta, veitingar og æfingaaðstaða ─────────
    { t: "hluti", snid: "kort",
      vinstri: [
        { t: "h2", texti: "Þjónusta, veitingar og æfingaaðstaða" },
        { t: "p", texti: "Umhverfi klúbbhússins (4,5) og þjónusta á skrifstofu (4,4) halda háum einkunnum sínum. Aðgengi að rástímum hefur batnað úr 3,0 í 3,4 á tveimur árum." },
        { t: "p", texti: "Veitingasalan og golfverslunin tóku stærsta stökkið í ár og hækka í öllum atriðum. Viðmót starfsfólks í veitingasölunni fær 4,7 og heildarupplifunin 4,4. Verðlagning í golfversluninni, sem lengi var lægsta einkunn könnunarinnar, fór úr 2,9 í 3,8." },
        { t: "p", texti: "Æfingaaðstaðan í Hraunkoti er mikið notuð, en 84% svarenda nýttu hana á árinu. TrackMan Range fær 4,3, GolfNext sjálfsafgreiðslukerfið 4,1 og golfhermarnir hafa hækkað úr 3,0 í 3,7 frá 2023." }],
      haegri: [
        { t: "topplisti", titill: "Einkunnir þjónustu 2026 (1–5)", athugasemd: "Í ár gátu svarendur merkt við að þeir hefðu ekki nýtt sér þjónustuna, og þau svör eru ekki talin með.", atridi: [
          { heiti: "Viðmót í veitingasölu", gildi: "4,7" },
          { heiti: "Umhverfi klúbbhússins", gildi: "4,5" },
          { heiti: "Þjónusta á skrifstofu", gildi: "4,4" },
          { heiti: "Veitingasalan í heild", gildi: "4,4" },
          { heiti: "TrackMan Range", gildi: "4,3" },
          { heiti: "GolfNext", gildi: "4,1" },
          { heiti: "Verð í golfverslun", gildi: "3,8" },
          { heiti: "Golfhermar", gildi: "3,7" },
          { heiti: "Aðgengi að rástímum", gildi: "3,4" }] }] },
    { t: "mynd", breidd: "full", stada: "center 45%", src: M + "golfskalinn.jpg", alt: "Golfskáli Keilis á Hvaleyri; áhorfendur og sjónvarpsmyndavél á palli við flötina fyrir framan skálann.", texti: "Golfskálinn á Hvaleyri" },

    // ───────── Hvað liggur félagsmönnum á hjarta ─────────
    { t: "hluti", afast: true, jafnt: true,
      blokkir: [
        { t: "h2", texti: "Hvað liggur félagsmönnum á hjarta" },
        { t: "p", texti: "Alls skrifuðu 252 félagsmenn athugasemdir eða ábendingar í opinn reit könnunarinnar. Algengast var hrós og þakkir, í um 50 svörum." }],
      vinstri: [
        { t: "tilvitnun", texti: "Keilir ber af í öllum atriðum, upplifun, gæðum valla og þjónustu" },
        { t: "p", texti: "Félagsmaður sem spilar tugi valla á hverju sumri með sínum hópi." },
        { t: "p", texti: "Algengasta ábendingin var leikhraði og vallareftirlit, í um 40 svörum, og þar tala tölurnar sínu máli: leikhraðinn fær 3,5 í einkunn, en fékk 3,7 árið 2022. Sveinskotsvöllur var nefndur í um 24 svörum og nokkrir Sveinskotsfélagar óska eftir rýmri bókunarreglum fyrir hringina þrjá á Hvaleyri sem fylgja aðildinni." }],
      haegri: [
        { t: "topplisti", titill: "Algengustu efnin í opnum svörum", athugasemd: "Fjöldi svara, gróflega áætlaður. Alls skrifuðu 252 félagsmenn í opna reitinn.", atridi: [
          { heiti: "Hrós og þakkir", gildi: "50", birta: "um 50" },
          { heiti: "Leikhraði og vallareftirlit", gildi: "40", birta: "um 40" },
          { heiti: "Sveinskotsvöllur", gildi: "24", birta: "um 24" }] }] },

    // ───────── Tekjuöflun og Keilisferð ─────────
    { t: "hluti", snid: "kort", kort: true,
      vinstri: [
        { t: "h2", texti: "Tekjuöflun og Keilisferð" },
        { t: "p", texti: "Félagsmenn voru einnig spurðir um tekjuöflun. Um tveir af hverjum þremur (67%) vilja að erlendir gestir greiði hærri vallargjöld en aðeins 10% styðja hækkun árgjalda." },
        { t: "p", texti: "Spurt var um áhuga á Keilisferð til heitari landa haustið 2027 og niðurstaðan var hnífjöfn: 52% sögðu já og 48% nei." }],
      haegri: [
        { t: "skipting", titill: "Áhugi á Keilisferð til heitari landa haustið 2027, % svarenda", eining: "%", aukastafir: 0, lina: false, atridi: [{ heiti: "Já", gildi: "52" }, { heiti: "Nei", gildi: "48" }] },
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "67%", texti: "vilja að erlendir gestir greiði hærri vallargjöld" },
          { tala: "10%", texti: "styðja hækkun árgjalda" }] }] },

    // ───────── Huldugestir ─────────
    { t: "hluti", snid: "kort",
      vinstri: [
        { t: "h2", texti: "Gestirnir sammála félagsmönnum" },
        { t: "p", texti: "Samhliða könnuninni fékk Keilir Better Business til að senda huldugolfara á svæðið, níunda árið í röð. Kylfingar utan klúbbsins komu 20 sinnum frá maí til september sem venjulegir gestir og mátu æfingasvæði, golfskála, verslun, völl og veitingar." },
        { t: "p", texti: "Heildareinkunnin var 88,7%, sú besta frá því mælingar hófust 2018 og 2,3 stigum yfir meðaltali höfuðborgarsvæðisins (86,4%). Golfskálinn fékk næstum fullt hús, 98%. Huldugestirnir bentu á sömu atriði og félagsmenn: vallareftirlitið fékk aðeins 73% og var lægsta einstaka atriðið á vellinum." },
        { t: "tilvitnun", texti: "Við vorum í skýjunum eftir daginn" },
        { t: "p", texti: "Úr umsögn huldugests 2026." }],
      haegri: [
        { t: "topplisti", titill: "Einkunnir huldugesta 2026", atridi: [
          { heiti: "Golfskálinn", gildi: "98", birta: "98%" },
          { heiti: "Keilir, heildareinkunn", gildi: "88,7", birta: "88,7%" },
          { heiti: "Meðaltal höfuðborgarsvæðisins", gildi: "86,4", birta: "86,4%" },
          { heiti: "Vallareftirlit", gildi: "73", birta: "73%" }] }] },

    // ───────── Framundan ─────────
    { t: "hluti", snid: "dokkt", yfirmerking: "Framundan",
      blokkir: [
        { t: "h2", texti: "Verkefnin framundan" },
        { t: "p", texti: "Niðurstöðurnar sýna að það sem unnið hefur verið að – völlurinn, veitingarnar, verslunin og Hraunkot – skilar sér beint í ánægju félagsmanna og gesta. Stærstu verkefnin framundan eru þessi:" },
        { t: "skref", atridi: [
          { tala: "3,5", texti: "leikhraðinn, og vallareftirlitið sem huldugestir gáfu 73%" },
          { tala: "3,0", texti: "teigarnir á Sveinskotsvelli, lægsta einkunn vallanna" },
          { tala: "24", texti: "svör um Sveinskotsvöll, m.a. um aðgengi Sveinskotsfélaga að Hvaleyrarvelli" }] },
        { t: "p", texti: "Keilir þakkar öllum sem gáfu sér tíma til að svara könnuninni. Svörin eru nýtt beint í stöðugum umbótum á starfi klúbbsins, og því fleiri sem svara, því betri mynd fæst af því hvað félagsmenn vilja." }] },

    // ───────── Öll könnunin ─────────
    { t: "hluti", blokkir: [
      { t: "h2", texti: "Skoðaðu alla könnunina" },
      { t: "p", texti: "Hér má skoða allar niðurstöður viðhorfskönnunar Keilis 2026, spurningu fyrir spurningu." },
      { t: "pdf", titill: "Viðhorfskönnun Keilis 2026", src: S + "vidhorfskonnun_2026.pdf" }] },
    { t: "mynd", breidd: "full", stada: "center 40%", src: M + "hvaleyri-sjovarnargardur.jpg", alt: "Hvaleyrarvöllur úr lofti: brautir og flatir á sjávarbakkanum, grjótgarður meðfram sjónum og áhorfendur á vellinum." },

    { t: "hluti", snid: "fotur", blokkir: [
      { t: "p", texti: "Heimildir: Viðhorfskönnun Keilis 2026 (770 svarendur) og Better Business, Mystery Golfers 2026. Einkunnir félagsmanna eru meðaltal á kvarðanum 1–5." }] },
  ],
};

export default { ...sida, efnisar: "2026" };
