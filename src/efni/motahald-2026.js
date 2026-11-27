// Mótahald og skemmtanir 2026 – efni úr skjalinu „Mótamál 2026 og mótaskrá 2027“ (26. nóv. 2026),
// tölur um skráða keppendur úr mótakerfi Keilis (13 mót 2026).
// Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni; hún er flutt inn í síðulistann í efni-2025.js
// (í stað síðunnar „motahald“ í Félagsstarfi). Slóðin helst óbreytt.
// Heilsíða (snid: "heilsida") í böndum (`hluti`), sama uppbygging og 65+ starfið og kvennastarfið.

const M = "myndir/fjarmal-2026/"; // sömu myndir og í fjármálakaflanum
const I = "myndir/ithrottir-2026/";

const sida = {
  slug: "motahald", kafli: "felagsstarf", heiti: "Mótahald og skemmtanir", snid: "heilsida",
  fyrirsogn: "Færri mót, ", fyrirsognSkaletrun: "fleiri rástímar", kicker: "Ársskýrsla Keilis 2026 · Mótahald og skemmtanir",
  heimild: "https://2025.keilir.is/felagsstarf-motahald-skemmtanir/",
  blokkir: [
    // ───────── Haus ─────────
    { t: "hluti", snid: "hetja",
      vinstri: [
        { t: "p", texti: "Mótahald er stór hluti af starfi Keilis. Mótin skapa félagslíf, laða gesti á Hvaleyrarvöll og skila klúbbnum umtalsverðum tekjum. En hvert mót tekur líka rástíma frá félagsmönnum, og þeir tímar eru verðmætastir um helgar yfir hásumarið." },
        { t: "p", texti: "Árið 2026 léku **1.752 kylfingar** í þeim mótum mótaskrárinnar sem tölur liggja fyrir um, 122 fleiri en áætlað var." },
        { t: "p", texti: "Í mótaskrá ársins 2027 er stigið skref í átt að því að **forgangsraða félagsmönnum**: mótum fækkar úr 15 í 12 og nýjar reglur gilda um hvenær boðsmót fyrirtækja mega hefjast." }],
      haegri: [
        { t: "flogg", titill: "Mót á mótaskrá Keilis", eining: "mót", aukastafir: 0, atridi: [{ ar: "2026", gildi: "15" }, { ar: "2027", gildi: "12" }] }] },
    { t: "mynd", breidd: "full", stada: "center 45%", src: M + "ahorfendur-vid-sjoinn.jpg", alt: "Áhorfendur fylgja kylfingum eftir braut á sjávarbakkanum, séð úr lofti.", texti: "Mót á Hvaleyrarvelli" },

    // ───────── Lykiltölur ─────────
    { t: "hluti", blokkir: [
      { t: "tolukort", atridi: [
        { heiti: "Keppendur í mótum", tala: "1.752", texti: "í 13 mótum, áætlun 1.630" },
        { heiti: "Mót á mótaskrá", tala: "15", texti: "þar af átta um helgar" },
        { heiti: "Meistaramótið", tala: "324", texti: "stærsta mót ársins" },
        { heiti: "Mót á mótaskrá 2027", tala: "12", texti: "þrjú helgarmót falla niður" }] }] },

    // ───────── Mótahald 2026 ─────────
    { t: "hluti", snid: "kort",
      blokkir: [
        { t: "h2", texti: "Mótahald 2026" },
        { t: "p", texti: "Á árinu voru 15 mót á mótaskrá Keilis og áætlun gerði ráð fyrir 1.850 þátttakendum. Átta mótanna voru haldin um helgar, sex á laugardegi og tvö á sunnudegi. Í þeim þrettán mótum sem fjöldi liggur fyrir um léku 1.752 kylfingar, 122 fleiri en áætlað var." },
        { t: "p", texti: "Meistaramótið er sem fyrr hornsteinn mótahaldsins. Þátttaka þar hefur verið mjög stöðug, 324 til 374 keppendur á ári frá 2020. FH-mótið, Haukamótið og Jónsmessan fóru langt fram úr áætlun." }],
      vinstri: [
        { t: "topplisti", titill: "Helgarmót, skráðir keppendur", athugasemd: "Í Fyrirtækjakeppninni eru talin lið.", atridi: [
          { heiti: "Meistaramótið", gildi: "324", birta: "324 · áætlun 340" },
          { heiti: "Opna kvennamótið", gildi: "161", birta: "161 · áætlun 150" },
          { heiti: "Opna Icewear", gildi: "153", birta: "153 · áætlun 140" },
          { heiti: "Opna NOCCO", gildi: "152", birta: "152 · áætlun 140" },
          { heiti: "Opna Kristals", gildi: "124", birta: "124 · áætlun 140" },
          { heiti: "Minningarmót GFS & KP", gildi: "101", birta: "101 · áætlun 90" },
          { heiti: "Bændaglíman", gildi: "90", birta: "90 · áætlun 90" },
          { heiti: "Fyrirtækjakeppnin (lið)", gildi: "54", birta: "54 · áætlun 50" }] }],
      haegri: [
        { t: "topplisti", titill: "Önnur mót, skráðir keppendur", athugasemd: "Vinkvennamót GK & GO og Íslandsmót unglinga 15–18 ára (20.–22. ágúst, á vegum GSÍ) eru ekki í mótakerfinu og eru ekki talin með.", atridi: [
          { heiti: "FH-mótið", gildi: "143", birta: "143 · áætlun 100" },
          { heiti: "Haukamótið", gildi: "141", birta: "141 · áætlun 100" },
          { heiti: "Jónsmessan", gildi: "123", birta: "123 · áætlun 90" },
          { heiti: "Bikarkeppni Keilis", gildi: "94", birta: "94 · áætlun 90" },
          { heiti: "Hvaleyrarbikarinn", gildi: "92", birta: "92 · áætlun 110" }] }] },

    // ───────── Þróun þátttöku ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Þátttakan hefur haldist há" },
        { t: "p", texti: "Þátttaka í mótum Keilis jókst töluvert eftir 2020 og hefur síðan haldist há." },
        { t: "p", texti: "Á sama tíma hefur mótagjald hækkað verulega. Þátttökugjald í Opna 66° Norður og Opna kvennamótinu fór til dæmis úr 5.500 krónum árið 2021 í 11.000 krónur árið 2026. Tekjur af hverju móti hafa því aukist þótt keppendum hafi ekki fjölgað." },
        { t: "p", texti: "Fyrirtækjakeppnin sker sig úr: liðum fækkaði úr 86 árið 2020 í 42 árið 2024, en hærra verð á lið hefur að mestu vegið upp á móti." }],
      haegri: [
        { t: "h3", texti: "Þátttakendur í mótum Keilis" },
        { t: "arasulur", titill: "Heildarfjöldi þátttakenda í mótum Keilis 2020–2024 og 2026", eining: "þátttakendur", aukastafir: 0, skyring: false, atridi: [
          { ar: "2020", gildi: "1.706" }, { ar: "2021", gildi: "1.982" }, { ar: "2022", gildi: "1.940" },
          { ar: "2023", gildi: "2.137" }, { ar: "2024", gildi: "2.115" }, { ar: "2026", gildi: "1.752", aherslu: true }] },
        { t: "p", texti: "Tala ársins 2026 nær yfir 13 mót. Tölur fyrir 2025 eru ekki í heimildinni." }] },
    { t: "mynd", breidd: "full", stada: "center 25%", src: I + "klubbmeistarar.jpg", alt: "Guðrún Birna Snæþórsdóttir og Axel Bóasson brosa með gyllta bikara, verðlaunapeninga og blómvendi á Hvaleyrarvelli.", texti: "Klúbbmeistarar Keilis 2026 á Meistaramótinu, stærsta móti ársins. Mynd: kylfingur.is" },

    // ───────── Mótaraðir félagsmanna ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Mótaraðir félagsmanna" },
        { t: "p", texti: "Kvennamótaröð Keilis og Mótaröð 65+ eru haldnar til að virkja félagsmenn og efla félagsstarfið. Sbarro-mótaröðin er hluti af barna- og unglingastarfinu og fer fram á Sveinskotsvelli." },
        { t: "p", texti: "Mótaraðirnar eru ekki mót í hefðbundnum skilningi: engir rástímar eru teknir frá fyrir þær. Þátttakendur bóka sig sjálfir eftir sömu reglum og gilda alla daga, og því taka mótaraðirnar minni tíma frá öðrum kylfingum. Þær eru ekki taldar með í mótatölum ársins." }],
      haegri: [
        { t: "tafla", titill: "Mótaraðir félagsmanna 2026", dalkar: ["Mótaröð", "Umferðir", "Skráningar"], radir: [
          ["Kvennamótaröð, Hvaleyrarvöllur", "11", "294"],
          ["Kvennamótaröð, Sveinskotsvöllur", "11", "141"],
          ["Mótaröð 65+", "5", "105"],
          ["Sbarro-mótaröðin, Sveinskotsvöllur", "2", "94"]] }] },

    // ───────── Innanfélagsmót og skemmtanir ─────────
    { t: "hluti", snid: "kort",
      blokkir: [
        { t: "h2", texti: "Innanfélagsmót og aðrar skemmtanir" },
        { t: "p", texti: "Auk mótaskrárinnar stendur Keilir fyrir viðburðum sem fyrst og fremst eru ætlaðir félagsmönnum og snúast ekki síður um félagsskapinn en golfið." },
        { t: "skref", atridi: [
          { dags: "16. júní", tala: "123", texti: "keppendur á Jónsmessunni, „Hefnd vallarstjórans“" },
          { dags: "2. júlí", tala: "18", texti: "holur í golfreglukvissi í golfskálanum" },
          { dags: "10. október", tala: "90", texti: "keppendur í Bændaglímunni, síðasta móti ársins" }] }],
      vinstri: [
        { t: "listi", atridi: [
          "**Jónsmessan** fór fram þriðjudaginn 16. júní undir yfirskriftinni „Hefnd vallarstjórans“. Eftirspurnin var gríðarleg, uppselt varð á örskömmum tíma og myndaðist biðlisti.",
          "**Bikarkeppni Keilis** er haldin í samstarfi við Hjarta Hafnarfjarðar. Fyrst er leikin 18 holu punktakeppni og 16 efstu komast áfram í holukeppni með forgjöf. Leiknar eru fjórar umferðir yfir sumarið þar til einn stendur uppi sem Bikarmeistari Keilis.",
          "**Golfreglukviss** var haldið í golfskálanum fimmtudagskvöldið 2. júlí, rétt fyrir Meistaramótið. Það var sett upp sem 18 holu hringur með raundæmum og almennum golfreglum, og strákarnir í Steve Dagskrá stýrðu því."] }],
      haegri: [
        { t: "listi", atridi: [
          "**Bændaglíman** laugardaginn 10. október var síðasta mót mótaskrárinnar. Skráning var mjög góð og félagsmenn léku tveir og tveir saman og slógu botninn í sumarið.",
          "**Keilisferð til Spánar.** Fimmtudaginn 22. október hélt tæplega 50 manna hópur Keilisfélaga til Fairplay á Spáni í samstarfi við Golfsögu. Hópnum var skipt í tvö lið sem kepptu alla ferðina, meðal annars í Texas, Irish Rumble og betri bolta. Stefnt er að nýrri ferð haustið 2027.",
          "**Skötuveisla Keilis** á Þorláksmessu er orðin fastur liður í vetrarstarfinu. Síðast mættu 183 gestir í tveimur hollum, og allur ágóði rennur til barna- og unglingastarfs Keilis."] }] },

    // ───────── Mótaskrá 2027 ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Mótaskrá 2027: fleiri félagsmenn á völlinn um helgar" },
        { t: "p", texti: "Í mótaskrá 2027 eru þrjú mót felld niður: **Opna 66° Norður**, **Opið mót** og **Minningarmót GFS & KP**. Árið 2026 voru þau haldin sem Minningarmótið sunnudaginn 28. júní, Opna Icewear laugardaginn 1. ágúst og Opna NOCCO laugardaginn 19. september, og í þeim léku samtals 406 kylfingar." },
        { t: "listi", atridi: [
          "**Félagsmenn eiga að ganga fyrir um helgar.** Mótin þrjú eru öll haldin um helgar og taka stóran hluta rástíma dagsins. Hver helgardagur sem losnar er heill dagur sem félagsmenn geta bókað á eigin velli.",
          "**Helgartímar eru eftirsóttastir.** Eftirspurn félagsmanna er mest um helgar yfir sumarið. Átta mót voru haldin um helgar 2026 og þrjú þeirra hverfa af mótaskránni.",
          "**Opnu mótin þjóna fyrst og fremst gestum.** Þau eru mikilvæg tekjulind, en stór hluti keppenda kemur utan klúbbsins. Mót sem þjóna félagsmönnum, svo sem Meistaramótið, Bændaglíman og vinamót við nágrannaklúbba, haldast óbreytt.",
          "**Mótaskráin verður markvissari.** Mótin dreifast á tólf viðburði frá maí til október, með þungann í júní, júlí og september, og meira rými verður fyrir almennan leik á hásumri."] }],
      haegri: [
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "3", texti: "helgarmót falla niður 2027" },
          { tala: "406", texti: "kylfingar léku í mótunum þremur 2026" },
          { tala: "12", texti: "mót á mótaskrá 2027, frá maí til október" }] }] },

    // ───────── Fjárhagsleg áhrif ─────────
    { t: "hluti", snid: "kort", kort: true,
      vinstri: [
        { t: "h2", texti: "Fjárhagsleg áhrif" },
        { t: "p", texti: "Fækkun móta hefur áhrif á tekjur. Mótaáætlun 2027 er sett upp í þremur sviðsmyndum þar sem þátttaka er ýmist óbreytt frá 2026, 10% minni eða 10% meiri, með óbreyttu verði." },
        { t: "p", texti: "Í grunnspá lækka mótatekjur um tæpar 3,8 milljónir króna frá 2026, sem eru nákvæmlega tekjur mótanna þriggja. Miðað við rekstraráætlun 2026 er lækkunin um 2,1 milljón. Miðað við raunskráningar og verð 2026 námu tekjur af mótunum þremur um 4,1 milljón, svo lækkunin gæti orðið nokkru meiri." },
        { t: "p", texti: "Stjórn og starfsfólk líta á þetta sem fjárfestingu í þjónustu við félagsmenn. Árgjöldin eru undirstaða rekstrarins og aðgengi að vellinum á bestu tímum er það sem félagsmenn greiða fyrir. Verðlagning mótanna sem eftir standa og ný tekjutækifæri á virkum dögum verða skoðuð." }],
      haegri: [
        { t: "tafla", titill: "Mótaáætlun 2027 í þremur sviðsmyndum", dalkar: ["Sviðsmynd", "Svartsýn", "Grunnspá", "Bjartsýn"], radir: [
          ["Þátttakendur", "1.332", "**1.480**", "1.628"],
          ["Mótatekjur, m.kr.", "14,4", "**16,0**", "17,6"],
          ["Frávik frá mótatekjum 2026", "−27%", "**−19%**", "−11%"],
          ["Frávik frá rekstraráætlun 2026, m.kr.", "−3,7", "**−2,1**", "−0,5"]] }] },

    // ───────── Boðsmót fyrirtækja ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Nýjar reglur um boðsmót fyrirtækja" },
        { t: "p", texti: "Auk mótanna á mótaskrá eru haldin boðsmót fyrirtækja á Hvaleyrarvelli þar sem ræst er út á öllum teigum samtímis. Slík mót loka vellinum fyrir öllum öðrum á meðan þau standa yfir." },
        { t: "p", texti: "Stjórn Keilis hefur nú breytt samþykktum sínum: **boðsmót fyrirtækja sem ræst eru út á öllum teigum mega ekki hefjast eftir klukkan 10 að morgni á virkum dögum.** Þá lýkur mótunum fyrr og völlurinn opnast fyrir félagsmenn síðdegis og undir kvöld. Fyrirtæki geta áfram haldið mót hjá Keili, en á tímum sem rekast síður á við leik félagsmanna." }],
      haegri: [
        { t: "tafla", snid: "texti", titill: "Boðsmót fyrirtækja 2026 með 60 eða fleiri þátttakendum", dalkar: ["Mót", "Dagur", "Ræsing", "Þátttakendur"], radir: [
          ["Boðsmót COWI", "fim. 25. júní", "13:00", "96"],
          ["Góðgerðargolfmót Landsbankans", "fös. 7. ágúst", "13:00", "65"],
          ["Golfmót Icelandair Cargo", "mið. 26. ágúst", "13:00", "72"],
          ["Boðsmót Rönning", "fim. 3. sept.", "13:00", "77"],
          ["Boðsmót Ölgerðarinnar", "þri. 8. sept.", "11:00", "79"]] },
        { t: "p", texti: "Öll fimm mótin voru á virkum dögum og öll hófust eftir klukkan 10." }] },

    // ───────── Lokaorð ─────────
    { t: "hluti", snid: "dokkt", yfirmerking: "Framundan",
      blokkir: [
        { t: "h2", texti: "Völlurinn þegar félagsmenn vilja spila" },
        { t: "p", texti: "Mótahald verður áfram stór og lifandi þáttur í starfi Keilis. Með færri en markvissari mótum og skýrari reglum um boðsmót fyrirtækja er jafnvæginu hnikað í átt að því sem skiptir félagsmenn mestu máli: að komast á völlinn sinn þegar þeir vilja spila." }] },

    { t: "hluti", snid: "fotur", blokkir: [
      { t: "p", texti: "Heimildir: Mótamál 2026 og mótaskrá 2027 (26. nóvember 2026) og mótakerfi Keilis. Skráðir keppendur í 13 mótum; mótaraðir félagsmanna eru ekki taldar með." }] },
  ],
};

export default { ...sida, efnisar: "2026" };
