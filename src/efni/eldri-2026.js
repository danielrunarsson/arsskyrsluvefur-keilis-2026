// 65+ starfið 2026 – efni úr greinargerðinni „GK Kylfingar 65 plús – Mótaröð 2026“ (Már Sveinbjörnsson).
// Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni; hún er flutt inn í síðulistann í efni-2025.js
// (í stað síðunnar „eldri“ í Félagsstarfi). Slóðin helst óbreytt.
// Heilsíða (snid: "heilsida") í böndum (`hluti`), sama uppbygging og veitingasalan og viðhorfskönnunin.

const M = "myndir/fjarmal-2026/"; // sömu myndir og í fjármálakaflanum

const sida = {
  slug: "eldri", kafli: "felagsstarf", heiti: "65+ starfið", snid: "heilsida",
  fyrirsogn: "Sumarið sem ", fyrirsognSkaletrun: "veðrið réð ferðinni", kicker: "Ársskýrsla Keilis 2026 · 65+ starfið",
  heimild: "https://2025.keilir.is/felagsstarf-eldri-kylfingar",
  blokkir: [
    // ───────── Haus ─────────
    { t: "hluti", snid: "hetja",
      vinstri: [
        { t: "p", texti: "Golfsumarið 2026 var nokkuð skrautlegt hjá kylfingum Keilis 65 ára og eldri, sérstaklega vegna veðurs í júlí og byrjun ágúst. Af sjö mótum mótaraðarinnar tókst að halda fimm, og **aukamóti** var bætt við í ágúst til að vinna upp það sem tapaðist." },
        { t: "p", texti: "Í sumar var líka prófuð **ný leið til að mæla árangur**: í stað stiga fyrir hvert sæti voru lögð saman fjögur bestu punktaskor hvers kylfings." },
        { t: "p", texti: "Vinamótin við jafnaldra okkar í GKG voru á sínum stað, og sumrinu lauk með lokahófi og verðlaunaafhendingu í golfskálanum." }],
      haegri: [
        { t: "flogg", titill: "Hringir leiknir á mótaröðinni", eining: "hringir", aukastafir: 0, atridi: [{ ar: "2025", gildi: "234" }, { ar: "2026", gildi: "175" }] }] },
    { t: "mynd", breidd: "full", stada: "center 40%", src: M + "thoka-vid-strondina.jpg", alt: "Þokuslæða yfir grýttri strönd og grænum brautum Hvaleyrarvallar.", texti: "Veðrið lék aðalhlutverkið í sumar" },

    // ───────── Lykiltölur ─────────
    { t: "hluti", blokkir: [
      { t: "tolukort", atridi: [
        { heiti: "Kylfingar", tala: "68", texti: "voru 85 árið 2025" },
        { heiti: "Hringir leiknir", tala: "175", texti: "voru 234 árið 2025" },
        { heiti: "Kylfingar á hverju móti", tala: "29", texti: "að meðaltali, 39 árið 2025" },
        { heiti: "Mót haldin", tala: "6", texti: "fimm af sjö auk aukamóts" }] },
      { t: "p", texti: "Tvö mót féllu niður, 2. júlí og 6. ágúst, vegna of lítillar þátttöku. Mót fellur niður ef færri en átta skrá sig, og þar lék veðrið aðalhlutverkið." }] },

    // ───────── Mótaskráin ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Sjö leikdagar og eitt aukamót" },
        { t: "p", texti: "Mótaröð 65+ samanstendur af sjö mótum yfir sumarið. Tvö þeirra eru vinamót við jafnaldra okkar í Golfklúbbi Kópavogs og Garðabæjar (GKG), annað á Leirdalsvelli og hitt á Hvaleyri." },
        { t: "p", texti: "Til að vinna upp mótin tvö sem féllu niður var aukamóti bætt við þriðjudaginn 18. ágúst." }],
      haegri: [
        { t: "tafla", snid: "texti", titill: "Mótaröð 65+ sumarið 2026", dalkar: ["Dagur", "Völlur"], radir: [
          ["Fimmtudagur 11. júní", "Hvaleyri"],
          ["Miðvikudagur 24. júní", "Leirdalsvöllur, vinamót við GKG"],
          ["Fimmtudagur 2. júlí", "Hvaleyri, féll niður"],
          ["Fimmtudagur 23. júlí", "Hvaleyri, vinamót við GKG"],
          ["Fimmtudagur 6. ágúst", "Hvaleyri, féll niður"],
          ["Þriðjudagur 18. ágúst", "Hvaleyri, aukamót"],
          ["Fimmtudagur 27. ágúst", "Hvaleyri"],
          ["Fimmtudagur 10. september", "Hvaleyri"]] }] },

    // ───────── Vinamótin við GKG ─────────
    { t: "hluti", snid: "kort", kort: true,
      vinstri: [
        { t: "h2", texti: "Vinamótin við GKG" },
        { t: "p", texti: "Fyrra vinamótið fór fram á Leirdalsvelli 24. júní. Alls tóku 35 Keilisfélagar og 43 GKG-ingar þátt, og GKG vann með 844 punktum gegn 721. Flesta punkta karla skoraði Sturla Rafn Guðmundsson, 43 punkta, og flesta punkta kvenna Steinunn Ingibjörg Gunnlaugsdóttir úr GKG, 39 punkta." },
        { t: "p", texti: "Garðbæingar komu svo á Hvaleyri 23. júlí. Að tillögu Gunnars Árnasonar, forsvarsmanns GKG-inga, var þátttaka takmörkuð við 46 kylfinga frá hvorum klúbbi til að gæta jafnræðis. Skráning hjá Keili fór sjö kylfingum fram úr hámarkinu; þeir sem skráðu sig síðast voru varamenn í leiknum milli klúbbanna en kepptu áfram í mótaröð Keilis." },
        { t: "p", texti: "Á Hvaleyri vann Keilir með sjö punkta mun, 766 gegn 759. Samanlagt fékk GKG þó 1.603 punkta gegn 1.487 punktum Keilis og heldur bikarnum til næsta árs. Við óskum vinum okkar í GKG til hamingju með sigurinn." }],
      haegri: [
        { t: "skipting", titill: "Leirdalsvöllur 24. júní, punktar", eining: "punktar", aukastafir: 0, atridi: [{ heiti: "GKG", gildi: "844" }, { heiti: "Keilir", gildi: "721" }] },
        { t: "skipting", titill: "Hvaleyri 23. júlí, punktar", eining: "punktar", aukastafir: 0, atridi: [{ heiti: "GKG", gildi: "759" }, { heiti: "Keilir", gildi: "766" }] },
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "1.603", texti: "punktar GKG í báðum mótum samanlagt" },
          { tala: "1.487", texti: "punktar Keilis, 116 punktum minna" }] }] },
    { t: "mynd", breidd: "full", stada: "center 50%", src: M + "hvaleyrin-ur-lofti.jpg", alt: "Hvaleyrin úr lofti: völlurinn á nesinu umkringdur sjó og byggð Hafnarfjarðar fyrir ofan.", texti: "Hvaleyrarvöllur, heimavöllur mótaraðarinnar" },

    // ───────── Ný árangursmæling ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Punktar í stað stiga" },
        { t: "p", texti: "Eftir að tillaga barst ákvað starfshópur um mótaröðina að gera tilraun með nýja mælingu á árangri. Í stað þess að gefa stig fyrir hvert sæti voru lögð saman fjögur hæstu punktaskor hvers kylfings yfir sumarið." },
        { t: "p", texti: "Í gamla kerfinu fékk 1. sætið 100 stig, 2. sætið 80 stig og svo koll af kolli niður í 10 stig fyrir 9. og 10. sæti." },
        { t: "p", texti: "Eftir síðasta mótið var borið saman hvernig röðin hefði orðið í stigakerfinu. Hjá konunum breyttist ekkert í sex efstu sætunum; smávægilegar breytingar urðu á 7.–9. sæti en ekki neðar. Hjá körlunum hefði sá sem varð 8. í punktum orðið 4. í stigum, en annað hafði ekki áhrif á verðlaunasæti." },
        { t: "p", texti: "Um tilraun er að ræða. Starfshópurinn fer yfir niðurstöðuna og metur hvort punktar eða stig verði notuð framvegis." }],
      haegri: [
        { t: "h3", texti: "Hefði stigakerfið breytt úrslitunum?" },
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "6", texti: "efstu sætin hjá konunum hefðu orðið óbreytt" },
          { tala: "4.", texti: "sæti í stigum hjá karlinum sem varð 8. í punktum" }] }] },

    // ───────── Verðlaunahafar ─────────
    { t: "hluti", snid: "kort",
      blokkir: [
        { t: "h2", texti: "Verðlaunahafar sumarsins" },
        { t: "p", texti: "Eftirtaldir kylfingar hlutu verðlaun í mótaröð Keilis 65+ sumarið 2026. Tölurnar eru samanlagðir punktar úr fjórum bestu mótum hvers kylfings." }],
      vinstri: [
        { t: "topplisti", titill: "Konur, punktar", atridi: [
          { heiti: "Guðrún Halldórsdóttir", gildi: "152" },
          { heiti: "Guðrún Steinsdóttir", gildi: "141" },
          { heiti: "Bryndís Eysteinsdóttir", gildi: "135" },
          { heiti: "Þorbjörg Jónína Harðardóttir", gildi: "115" },
          { heiti: "Gyða Hauksdóttir", gildi: "111" }] }],
      haegri: [
        { t: "topplisti", titill: "Karlar, punktar", atridi: [
          { heiti: "Jón Halldór Oddsson", gildi: "151" },
          { heiti: "Guðmundur Ágúst Guðmundsson", gildi: "143" },
          { heiti: "Gísli Vagn Jónsson", gildi: "139" },
          { heiti: "Már Sveinbjörnsson", gildi: "137" },
          { heiti: "Sigurgeir Marteinsson", gildi: "134" }] }] },

    // ───────── Lokahóf ─────────
    { t: "hluti", snid: "dokkt", yfirmerking: "Lokahóf",
      blokkir: [
        { t: "h2", texti: "Lambalæri og súkkulaðikaka" },
        { t: "p", texti: "Hefðbundið lokahóf mótaraðarinnar var haldið í golfskálanum fimmtudaginn 17. september. Boðið var upp á hægeldað lambalæri með meðlæti og heita súkkulaðiköku með rjómaís í eftirrétt, og eftir matinn voru veitt verðlaun fyrir afrek sumarsins." },
        { t: "p", texti: "Tíu mættu, sem er minnsta mæting í lokahóf hingað til. Það kann að skýrast af því að hófið var haldið viku til tíu dögum seinna en fyrri ár. Eftir gott spjall sleit Már Sveinbjörnsson lokahófinu og óskaði viðstöddum góðrar heimferðar." }] },

    { t: "hluti", snid: "fotur", blokkir: [
      { t: "p", texti: "Takk fyrir sumarið, og sjáumst á Hvaleyrinni næsta sumar." },
      { t: "undirskrift", nafn: "Már Sveinbjörnsson", titill: "Fyrir hönd allra Keiliskylfinga 65 ára og eldri" }] },
  ],
};

export default { ...sida, efnisar: "2026" };
