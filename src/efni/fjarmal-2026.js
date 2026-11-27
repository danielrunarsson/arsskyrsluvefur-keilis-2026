// Ársreikningur Keilis 2026 – efni úr skjalinu „Fjármál Keilis 2026“ (byggt á ársreikningi fyrir rekstrarárið
// 1.11.2025–31.10.2026, staðfestum 25. nóvember 2026, og skjalinu „Uppgjör 2026 og áætlun 2027“).
// Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni; hún er flutt inn í síðulistann í efni-2025.js.
// Slóðirnar (yfirlit, rekstur, efnahagur, sjodstreymi, aaetlun) haldast óbreyttar milli ára.
// Allar síðurnar eru heilsíður (snid: "heilsida") í böndum (`hluti`), sama útlit og skjalið. Gröf og töflur sem
// birtast á fleiri en einni síðu eru skilgreind einu sinni hér að neðan svo tölurnar haldist eins.

const M = "myndir/fjarmal-2026/";
const HEIMILD = "Heimildir: Ársreikningur Golfklúbbsins Keilis fyrir rekstrarárið 1.11.2025–31.10.2026, staðfestur af stjórn og framkvæmdastjóra 25. nóvember 2026, og skjalið Uppgjör 2026 og áætlun 2027. Fjárhæðir í milljónum króna (m.kr.) eru námundaðar að næsta hundrað þúsundi.";
const TENGLAR = { t: "tenglar", atridi: [{ heiti: "Yfirlit", slug: "yfirlit" }, { heiti: "Rekstrarreikningur", slug: "rekstur" }, { heiti: "Efnahagsreikningur", slug: "efnahagur" }, { heiti: "Sjóðstreymi", slug: "sjodstreymi" }, { heiti: "Rekstraráætlun 2027", slug: "aaetlun" }] };
const FOTUR = { t: "hluti", snid: "fotur", blokkir: [TENGLAR, { t: "p", texti: HEIMILD }] };

// ───────── Sameiginleg gröf og töflur ─────────
const SKOR_TEKJUR = { t: "skorkort", titill: "Tekjur, m.kr.", lidur: "Tekjuliður", deila: 1000000, atridi: [
  { heiti: "Félagsgjöld", gildi: "256.464.241", fyrra: "227.977.987" },
  { heiti: "Veitingasala", gildi: "105.754.500", fyrra: "102.829.939" },
  { heiti: "Æfingasvæði (Hraunkot)", gildi: "70.178.324", fyrra: "55.207.391" },
  { heiti: "Seld þjónusta", gildi: "47.803.028", fyrra: "42.885.501" },
  { heiti: "Flatargjöld", gildi: "41.742.635", fyrra: "31.895.382" },
  { heiti: "Styrkir og framlög", gildi: "40.861.346", fyrra: "40.630.835" },
  { heiti: "Aðrar tekjur", gildi: "31.432.868", fyrra: "29.709.633" },
  { heiti: "Mótatekjur", gildi: "23.093.829", fyrra: "23.030.300" },
  { heiti: "Verslun", gildi: "15.115.537", fyrra: "15.137.483" }],
  samtals: { gildi: "632.446.308", fyrra: "569.304.451" } };

const SKOR_GJOLD = { t: "skorkort", titill: "Rekstrargjöld, m.kr.", lidur: "Gjaldaliður", deila: 1000000, atridi: [
  { heiti: "Viðhald og rekstur valla", gildi: "113.875.717", fyrra: "110.656.893" },
  { heiti: "Rekstur veitingasölu", gildi: "105.738.642", fyrra: "101.107.994" },
  { heiti: "Stjórnunarkostnaður", gildi: "64.055.808", fyrra: "60.306.883" },
  { heiti: "Styrkir og þjálfun", gildi: "56.741.033", fyrra: "55.630.018" },
  { heiti: "Útseld þjónusta", gildi: "46.063.291", fyrra: "40.904.630" },
  { heiti: "Æfingasvæði (Hraunkot)", gildi: "41.103.465", fyrra: "34.261.442" },
  { heiti: "Viðhald og rekstur véla", gildi: "35.556.679", fyrra: "36.206.434" },
  { heiti: "Verslun og þjónustuver", gildi: "23.925.917", fyrra: "23.832.179" },
  { heiti: "Rekstur fasteigna", gildi: "22.869.615", fyrra: "24.341.945" },
  { heiti: "Félagaskattur GSÍ", gildi: "14.665.500", fyrra: "12.474.000" },
  { heiti: "Annar kostnaður", gildi: "13.618.087", fyrra: "13.533.945" },
  { heiti: "Mótagjöld", gildi: "9.483.031", fyrra: "11.786.487" }],
  samtals: { gildi: "547.696.785", fyrra: "525.042.850" } };

const STADREYNDIR_GJOLD = { t: "tolur", snid: "stadreyndir", atridi: [
  { tala: "+8,2", texti: "m.kr. meiri framlegð af Hraunkoti en 2025 (29,1 á móti 20,9)" },
  { tala: "−2,3", texti: "m.kr. lægri mótakostnaður, á sama tíma og mótatekjur héldust" }] };

const FOSS = { t: "foss", titill: "Sjóðstreymi 2026: handbært fé fór úr 1,6 í 31,3 m.kr.", atridi: [
  { heiti: "Handbært fé 1. nóv. 2025", gildi: "1,59", heild: true },
  { heiti: "Frá rekstri", gildi: "74,94" },
  { heiti: "Nýtt langtímalán", gildi: "33,0" },
  { heiti: "Framlag Hafnarfjarðar", gildi: "33,0" },
  { heiti: "Vélar seldar", gildi: "7,29" },
  { heiti: "Vélar og tæki keypt", gildi: "−51,79" },
  { heiti: "Völlur og húsnæði", gildi: "−41,60" },
  { heiti: "Afborganir lána", gildi: "−6,98" },
  { heiti: "Yfirdráttur greiddur", gildi: "−18,18" },
  { heiti: "Handbært fé 31. okt. 2026", gildi: "31,26", heild: true }] };

const SKIPTING_EIGNIR = { t: "skipting", titill: "Eignir, m.kr.", atridi: [
  { heiti: "Golfvöllur", gildi: "438,6" }, { heiti: "Fasteignir", gildi: "407,6" }, { heiti: "Vélar og tæki", gildi: "94,2" }, { heiti: "Veltufjármunir", gildi: "52,1" }] };
const SKIPTING_FJARMOGNUN = { t: "skipting", titill: "Eigið fé og skuldir, m.kr.", atridi: [
  { heiti: "Eigið fé", gildi: "872,9" }, { heiti: "Langtímaskuldir", gildi: "74,1" }, { heiti: "Skammtímaskuldir", gildi: "45,4" }] };

const LAN = { t: "tafla", snid: "texti", titill: "Langtímalán 31. október 2026", dalkar: ["Lán", "Vextir", "Lokagjalddagi", "m.kr."], radir: [
  ["Landsbankinn, verðtryggt", "5,4%", "2031/2035", "23,6"],
  ["Landsbankinn, óverðtryggt", "9,95%", "2041", "31,7"],
  ["Landsbankinn, nýtt óverðtryggt", "10,35%", "2029", "31,4"],
  ["Ergo, óverðtryggt", "10,7%", "2027", "2,0"],
  { c: ["Samtals", "", "", "88,8"], samtala: true }] };

const AAETLUN_RAUN = { t: "tafla", titill: "Áætlun og niðurstaða 2026, m.kr.", dalkar: ["m.kr.", "Áætlun", "Raun", "Frávik"], radir: [
  ["Tekjur", "608,8", "632,4", "+23,6"],
  ["Rekstrargjöld", "552,1", "547,7", "−4,4"],
  ["EBITDA", "56,8", "84,7", "+28,0"],
  ["Afskriftir og fjármagnsliðir", "19,0", "21,6", "+2,6"],
  { c: ["Hagnaður ársins", "37,8", "63,1", "+25,3"], samtala: true }] };

const AAETLUN_2027 = { t: "tafla", titill: "Raun 2026 og áætlun 2027, m.kr.", dalkar: ["m.kr.", "Raun 2026", "Áætlun 2027", "Br."], radir: [
  ["Félagsgjöld", "256,5", "284,2", "+10,8%"],
  ["Veitingasala, tekjur", "105,8", "113,2", "+7,0%"],
  ["Æfingasvæði, tekjur", "70,2", "71,2", "+1,4%"],
  ["Mótatekjur", "23,1", "15,8", "−31,6%"],
  { c: ["Tekjur samtals", "632,4", "669,2", "+5,8%"], feitt: true },
  ["Viðhald og rekstur valla", "113,9", "131,5", "+15,5%"],
  ["Stjórnunarkostnaður", "64,1", "69,6", "+8,6%"],
  { c: ["Gjöld samtals", "547,7", "586,9", "+7,2%"], feitt: true },
  ["EBITDA", "84,7", "82,3", "−2,8%"],
  ["Vaxtagjöld", "9,5", "14,7", "+54,7%"],
  { c: ["Hagnaður ársins", "63,1", "55,6", "−11,9%"], samtala: true }] };

const ARASULUR = {
  vinstri: [
    { t: "h3", texti: "Tekjur, m.kr." },
    { t: "arasulur", titill: "Tekjur 2016–2026 og áætlun 2027, m.kr.", skyring: false, atridi: [
      { ar: "2016", gildi: "208,1" }, { ar: "2017", gildi: "217,8" }, { ar: "2018", gildi: "217,1" }, { ar: "2019", gildi: "247,0" },
      { ar: "2020", gildi: "264,7" }, { ar: "2021", gildi: "293,2" }, { ar: "2022", gildi: "324,6" }, { ar: "2023", gildi: "408,9" },
      { ar: "2024", gildi: "474,8" }, { ar: "2025", gildi: "569,3" }, { ar: "2026", gildi: "632,4", aherslu: true }, { ar: "2027", gildi: "669,2", aaetlun: true }] }],
  haegri: [
    { t: "h3", texti: "Hagnaður ársins, m.kr." },
    { t: "arasulur", titill: "Hagnaður 2016–2026 og áætlun 2027, m.kr.", skyring: false, atridi: [
      { ar: "2016", gildi: "4,3" }, { ar: "2017", gildi: "0,4" }, { ar: "2018", gildi: "−5,8" }, { ar: "2019", gildi: "2,3" },
      { ar: "2020", gildi: "12,1" }, { ar: "2021", gildi: "8,1" }, { ar: "2022", gildi: "17,5" }, { ar: "2023", gildi: "8,9" },
      { ar: "2024", gildi: "10,4" }, { ar: "2025", gildi: "25,9" }, { ar: "2026", gildi: "63,1", aherslu: true }, { ar: "2027", gildi: "55,6", aaetlun: true }] }],
  eftir: [{ t: "skyring", atridi: [{ heiti: "Fyrri ár", gerd: "fyrri" }, { heiti: "2026", gerd: "sula" }, { heiti: "Áætlun 2027", gerd: "aaetlun" }] }],
};

const GOLFSKALI = { t: "hluti", snid: "dokkt", jafnt: true, midja: true, yfirmerking: "Framundan",
  vinstri: [
    { t: "h2", texti: "Golfskálinn stækkar" },
    { t: "p", texti: "Á árinu var undirritaður samningur við Hafnarfjarðarbæ um stækkun golfskálans. Kostnaðaráætlun er 583,4 m.kr. Bærinn greiðir 80%, eða 466,8 m.kr., og hlutur Keilis er 116,6 m.kr. Til að fjármagna framkvæmdina hefur klúbburinn aðgang að allt að 400 m.kr. lánalínu hjá Landsbankanum, og fyrstu 20 m.kr. af hlut Keilis eru áætlaðar í nóvember 2026." },
    { t: "skipting", litir: "bjart", merkiFra: 50, aukastafir: 1, atridi: [{ heiti: "Hafnarfjarðarbær", gildi: "466,8" }, { heiti: "Keilir", gildi: "116,6" }] }],
  haegri: [
    { t: "mynd", src: M + "golfskalinn.jpg", alt: "Golfskáli Keilis á Hvaleyri; áhorfendur og sjónvarpsmyndavél á palli við flötina fyrir framan skálann.", texti: "Golfskálinn á Hvaleyri" }],
  eftir: [
    { t: "skref", atridi: [
      { dags: "Ágúst 2026", tala: "25,0", texti: "Fyrsta greiðsla, komin inn", lokid: true },
      { dags: "Febrúar 2027", tala: "150,0", texti: "Önnur greiðsla" },
      { dags: "Febrúar 2028", tala: "150,0", texti: "Þriðja greiðsla" },
      { dags: "2029", tala: "141,8", texti: "Lokagreiðsla" }] }] };

const sidur = [
  // ───────── Yfirlit – sama uppbygging og skjalið „Fjármál Keilis 2026“ ─────────
  {
    slug: "yfirlit", kafli: "fjarmal", heiti: "Yfirlit", snid: "heilsida",
    fyrirsogn: "Hagnaðurinn rúmlega ", fyrirsognSkaletrun: "tvöfaldaðist", kicker: "Ársskýrsla Keilis 2026 · Fjármál",
    blokkir: [
      { t: "hluti", snid: "hetja",
        vinstri: [
          { t: "p", texti: "Rekstrarárið 1. nóvember 2025 til 31. október 2026 skilaði Golfklúbburinn Keilir **63,1 milljónar króna hagnaði**, samanborið við 25,9 milljónir árið áður. Tekjur jukust um 11% en gjöldin aðeins um 4%, og þar liggur munurinn." },
          { t: "p", texti: "Á sama tíma fjárfesti klúbburinn fyrir 86 milljónir í vélum, velli og húsnæði, greiddi upp yfirdráttinn og lauk árinu með 31 milljón í handbæru fé." }],
        haegri: [
          { t: "flogg", titill: "Hagnaður ársins, m.kr.", atridi: [{ ar: "2025", gildi: "25,9" }, { ar: "2026", gildi: "63,1" }] }] },
      { t: "mynd", breidd: "full", stada: "center 60%", src: M + "hvaleyri-sjovarnargardur.jpg", alt: "Hvaleyrarvöllur úr lofti: brautir og flatir á sjávarbakkanum, grjótgarður meðfram sjónum og áhorfendur á vellinum.", texti: "Hvaleyrarvöllur" },

      { t: "hluti", blokkir: [
        { t: "tolukort", atridi: [
          { heiti: "Tekjur", tala: "632,4", breyting: "+11,1%", texti: "frá 2025" },
          { heiti: "Rekstrargjöld", tala: "547,7", breyting: "+4,3%", texti: "frá 2025" },
          { heiti: "EBITDA", tala: "84,7", breyting: "+91,5%", texti: "frá 2025" },
          { heiti: "Hagnaður ársins", tala: "63,1", breyting: "+143,4%", texti: "frá 2025" },
          { heiti: "Handbært fé í árslok", tala: "31,3", texti: "var 1,6 í fyrra" },
          { heiti: "Eiginfjárhlutfall", tala: "88,0%", texti: "var 86,9%" }] },
        { t: "p", texti: "Allar fjárhæðir í milljónum króna (m.kr.). Breyting miðast við rekstrarárið 2025. EBITDA = hagnaður fyrir fjármagnsliði og afskriftir." }] },

      { t: "hluti", afast: true,
        vinstri: [
          { t: "h2", texti: "Tekjurnar: Hraunkot og Hvaleyrarvöllur slógu í gegn" },
          { t: "p", texti: "Heildartekjur námu 632,4 m.kr. og hækkuðu um 63 milljónir. Félagsgjöld eru sem fyrr burðarásinn, um 41% teknanna, og hækkuðu um 12,5%. Í lok október voru félagar 2.367." },
          { t: "p", texti: "Mesta stökkið var á æfingasvæðinu: tekjur Hraunkots jukust um 27%, og boltaleigan ein um 29%, úr 43,9 í 56,6 m.kr. Flatargjöld gesta á völlum Keilis hækkuðu um 31%, úr 31,9 í 41,7 m.kr. Íslandsmótið í golfi 2025 reyndist góð auglýsing fyrir Hvaleyrarvöll og fleiri kylfingar vildu spila völlinn í sumar." },
          { t: "mynd", src: M + "islandsmot-ahorfendur.jpg", alt: "Fjöldi áhorfenda fylgist með kylfingi á flöt fyrir framan golfskálann á Íslandsmótinu 2025; sjórinn í baksýn.", texti: "Íslandsmótið í golfi 2025 dró fjölda áhorfenda á Hvaleyrarvöll" },
          { t: "p", texti: "Lestu töfluna eins og skorkort: hver tekjuliður er hola. Gyllta súlan sýnir 2026, lóðrétta strikið stöðuna 2025." }],
        haegri: [SKOR_TEKJUR] },

      { t: "hluti", afast: true,
        vinstri: [
          { t: "h2", texti: "Gjöldin: haldið fast um taumana" },
          { t: "p", texti: "Rekstrargjöld námu 547,7 m.kr. og hækkuðu um 4,3%, minna en verðlag. Stærsti liðurinn er viðhald og rekstur vallanna, 113,9 m.kr., og hækkaði hann aðeins um 3%." },
          { t: "p", texti: "Ársverk voru um 28 og heildarlaunagreiðslur um 240 milljónir, sem er um 38% af tekjum. Veitingasalan veltir 105,8 m.kr. og stóð nánast nákvæmlega á núlli." },
          STADREYNDIR_GJOLD],
        haegri: [SKOR_GJOLD] },

      { t: "mynd", breidd: "full", src: M + "hraunbrautir-ur-lofti.jpg", alt: "Loftmynd af brautum og flötum sem liðast um mosavaxið hraun meðfram ströndinni; Hafnarfjörður í baksýn." },

      { t: "hluti", snid: "kort", blokkir: [
        { t: "h2", texti: "Hvert fóru peningarnir?" },
        { t: "p", texti: "Reksturinn skilaði 74,9 m.kr. í handbæru fé. Klúbburinn fjárfesti nettó fyrir 86,1 m.kr.: 51,8 í vélum og tækjum (7,3 fengust fyrir seldar vélar) og 41,6 í endurbótum á velli og húsnæði. Mismuninn brúuðu nýtt 33 m.kr. lán og 33 m.kr. framlag Hafnarfjarðarbæjar, og yfirdrátturinn, 18,2 m.kr., var greiddur upp." },
        FOSS] },

      { t: "hluti", kort: true,
        vinstri: [
          { t: "h2", texti: "Efnahagurinn: nærri 90% eigið fé" },
          { t: "p", texti: "Eignir námu 992,5 m.kr. í árslok og eigið fé 872,9 m.kr. Eiginfjárhlutfallið hækkaði úr 86,9% í 88,0%. Golfvöllurinn sjálfur er bókfærður á 438,6 m.kr. og fasteignir á 407,6 m.kr." },
          { t: "p", texti: "Vaxtaberandi skuldir eru 88,8 m.kr. en að frádregnu handbæru fé lækkuðu nettóskuldir úr 79,3 í 57,5 m.kr. Eldri lánasamningar við Hafnarfjarðarbæ vegna vélageymslu og öryggismála í Hraunkoti voru greiddir upp að fullu." }],
        haegri: [
          { t: "h3", texti: "Eignir og fjármögnun 31. október 2026" },
          SKIPTING_EIGNIR, SKIPTING_FJARMOGNUN,
          { t: "h3", texti: "Langtímalán" },
          LAN] },

      { t: "hluti", afast: true, kort: true,
        vinstri: [
          { t: "h2", texti: "Betur en áætlað" },
          { t: "p", texti: "Fjárhagsáætlun ársins gerði ráð fyrir 37,8 m.kr. hagnaði. Niðurstaðan varð 25,3 milljónum betri. Tekjurnar urðu 23,6 m.kr. hærri en áætlað var, einkum félagsgjöld, flatargjöld og Hraunkot, en gjöldin 4,4 m.kr. lægri." },
          { t: "p", texti: "EBITDA-hlutfallið, sem sýnir hve stór hluti teknanna verður eftir þegar daglegur rekstur hefur verið greiddur, fór úr 7,8% í 13,4%." }],
        haegri: [AAETLUN_RAUN] },

      { t: "myndir", snid: "threnna", atridi: [
        { src: M + "glompuhogg.jpg", alt: "Kylfingur slær úr glompu svo sandurinn þyrlast upp." },
        { src: M + "ahorfendur-vid-sjoinn.jpg", alt: "Áhorfendur fylgja kylfingum eftir braut á sjávarbakkanum, séð úr lofti." },
        { src: M + "hvaleyrin-ur-lofti.jpg", alt: "Hvaleyrin úr lofti: völlurinn á nesinu umkringdur sjó og byggð Hafnarfjarðar fyrir ofan." }] },

      { t: "hluti", snid: "kort", jafnt: true,
        blokkir: [
          { t: "h2", texti: "Tíu ár í tölum" },
          { t: "p", texti: "Frá 2016 hafa tekjur Keilis þrefaldast, úr 208 í 632 m.kr., samhliða fjölgun félaga, veitingasölunnar sem kom inn í rekstur klúbbsins 2023 og vexti Hraunkots. EBITDA ársins, 84,7 m.kr., er sú hæsta í krónum talið í yfirliti klúbbsins sem nær aftur til 2004." }],
        ...ARASULUR },

      { t: "hluti", kort: true,
        vinstri: [
          { t: "h2", texti: "Áætlun 2027: varfærnari vöxtur" },
          { t: "p", texti: "Fjárhagsáætlun næsta árs gerir ráð fyrir 669,2 m.kr. tekjum, 5,8% aukningu, og að gjöldin hækki um 7,2% í 586,9 m.kr. Áætlaður hagnaður er 55,6 m.kr." },
          { t: "p", texti: "Félagsgjöld eiga að skila 284,2 m.kr. Á gjaldahliðinni vegur þyngst að viðhald og rekstur vallanna hækkar um 15,5% í 131,5 m.kr. Vaxtagjöld hækka úr 9,5 í 14,7 m.kr. vegna nýrra lána, og mótatekjur eru áætlaðar varlega, 15,8 m.kr." },
          { t: "p", texti: "Sjóðsstaðan verður þrengst í desember 2026, áður en 150 m.kr. greiðsla Hafnarfjarðarbæjar vegna golfskálans berst í febrúar 2027. Yfirdráttarheimildir duga til að brúa það bil. Fjárfestingaráætlun 2027 er enn í vinnslu." }],
        haegri: [AAETLUN_2027] },

      GOLFSKALI,
      { t: "mynd", breidd: "full", stada: "center 40%", src: M + "thoka-vid-strondina.jpg", alt: "Þokuslæða yfir grýttri strönd og grænum brautum Hvaleyrarvallar." },
      FOTUR
    ]
  },

  // ───────── Rekstrarreikningur ─────────
  {
    slug: "rekstur", kafli: "fjarmal", heiti: "Rekstrarreikningur", snid: "heilsida",
    fyrirsogn: "Tekjur jukust um 11%, ", fyrirsognSkaletrun: "gjöldin um 4%", kicker: "Ársreikningur 2026 · Rekstrarreikningur",
    blokkir: [
      { t: "hluti", snid: "hetja",
        vinstri: [
          { t: "p", texti: "Heildartekjur Keilis á rekstrarárinu námu **632,4 m.kr.** og rekstrargjöld **547,7 m.kr.** Hagnaður fyrir fjármagnsliði og afskriftir (EBITDA) nærri tvöfaldaðist, úr 44,3 í 84,7 m.kr." },
          { t: "p", texti: "Að frádregnum afskriftum og fjármagnsliðum, 21,6 m.kr., varð hagnaður ársins 63,1 m.kr., samanborið við 25,9 m.kr. árið áður." }],
        haegri: [
          { t: "flogg", titill: "EBITDA, m.kr.", atridi: [{ ar: "2025", gildi: "44,3" }, { ar: "2026", gildi: "84,7" }] }] },
      { t: "mynd", breidd: "full", stada: "center 45%", src: M + "ahorfendur-vid-sjoinn.jpg", alt: "Áhorfendur fylgja kylfingum eftir braut á sjávarbakkanum, séð úr lofti.", texti: "Hvaleyrarvöllur" },

      { t: "hluti", blokkir: [
        { t: "tolukort", atridi: [
          { heiti: "Rekstrartekjur", tala: "632,4", breyting: "+11,1%", texti: "frá 2025" },
          { heiti: "Rekstrargjöld", tala: "547,7", breyting: "+4,3%", texti: "frá 2025" },
          { heiti: "EBITDA", tala: "84,7", breyting: "+91,5%", texti: "frá 2025" },
          { heiti: "Afskriftir og fjármagnsliðir", tala: "21,6", texti: "var 18,3 í fyrra" },
          { heiti: "Hagnaður ársins", tala: "63,1", breyting: "+143,4%", texti: "frá 2025" },
          { heiti: "EBITDA-hlutfall", tala: "13,4%", texti: "var 7,8%" }] },
        { t: "p", texti: "Allar fjárhæðir í milljónum króna (m.kr.). Breyting miðast við rekstrarárið 2025." }] },

      { t: "hluti", afast: true,
        vinstri: [
          { t: "h2", texti: "Tekjurnar: Hraunkot og Hvaleyrarvöllur slógu í gegn" },
          { t: "p", texti: "Heildartekjur námu 632,4 m.kr. og hækkuðu um 63 milljónir. Félagsgjöld eru sem fyrr burðarásinn, um 41% teknanna, og hækkuðu um 12,5%. Í lok október voru félagar 2.367." },
          { t: "p", texti: "Mesta stökkið var á æfingasvæðinu: tekjur Hraunkots jukust um 27%, og boltaleigan ein um 29%, úr 43,9 í 56,6 m.kr. Flatargjöld gesta á völlum Keilis hækkuðu um 31%, úr 31,9 í 41,7 m.kr. Íslandsmótið í golfi 2025 reyndist góð auglýsing fyrir Hvaleyrarvöll og fleiri kylfingar vildu spila völlinn í sumar." },
          { t: "mynd", src: M + "islandsmot-ahorfendur.jpg", alt: "Fjöldi áhorfenda fylgist með kylfingi á flöt fyrir framan golfskálann á Íslandsmótinu 2025; sjórinn í baksýn.", texti: "Íslandsmótið í golfi 2025 dró fjölda áhorfenda á Hvaleyrarvöll" }],
        haegri: [SKOR_TEKJUR] },

      { t: "hluti", afast: true,
        vinstri: [
          { t: "h2", texti: "Gjöldin: haldið fast um taumana" },
          { t: "p", texti: "Rekstrargjöld námu 547,7 m.kr. og hækkuðu um 4,3%, minna en verðlag. Stærsti liðurinn er viðhald og rekstur vallanna, 113,9 m.kr., og hækkaði hann aðeins um 3%." },
          { t: "p", texti: "Ársverk voru um 28 og heildarlaunagreiðslur um 240 milljónir, sem er um 38% af tekjum. Veitingasalan veltir 105,8 m.kr. og stóð nánast nákvæmlega á núlli." },
          STADREYNDIR_GJOLD],
        haegri: [SKOR_GJOLD] },

      { t: "mynd", breidd: "full", src: M + "glompuhogg.jpg", stada: "center 40%", alt: "Kylfingur slær úr glompu svo sandurinn þyrlast upp." },

      { t: "hluti", snid: "kort", jafnt: true,
        blokkir: [
          { t: "h2", texti: "Rekstrarreikningur í krónum" },
          { t: "p", texti: "Rekstrarreikningurinn í heild, í krónum, með samanburði við rekstrarárið 2025 og breytingu í prósentum." },
          { t: "tafla", titill: "Samantekinn rekstur í krónum", dalkar: ["", "2026", "2025", "%"], radir: [
            ["Rekstrartekjur samtals", "632.446.308", "569.304.451", "11%"],
            ["Rekstrargjöld samtals", "547.696.785", "525.042.850", "4%"],
            { c: ["Hagnaður fyrir afskriftir og fjármagnsliði", "84.749.523", "44.261.601", "91%"], feitt: true },
            ["Afskriftir og fjármagnsliðir samtals", "−21.644.048", "−18.340.066", "18%"],
            { c: ["Hagnaður ársins", "63.105.475", "25.921.535", "143%"], samtala: true }] }],
        vinstri: [
          { t: "h3", texti: "Rekstrartekjur" },
          { t: "tafla", titill: "Rekstrartekjur í krónum", dalkar: ["", "2026", "2025", "%"], radir: [
            ["Félagsgjöld", "256.464.241", "227.977.987", "12%"],
            ["Flatargjöld", "41.742.635", "31.895.382", "31%"],
            ["Mótatekjur", "23.093.829", "23.030.300", "0%"],
            ["Styrkir og framlög", "40.861.346", "40.630.835", "1%"],
            ["Tekjur æfingasvæðis", "70.178.324", "55.207.391", "27%"],
            ["Tekjur verslunar / þjónustuver", "15.115.537", "15.137.483", "0%"],
            ["Tekjur veitingasölu", "105.754.500", "102.829.939", "3%"],
            ["Seld þjónusta", "47.803.028", "42.885.501", "11%"],
            ["Aðrar tekjur", "31.432.868", "29.709.633", "6%"],
            { c: ["Rekstrartekjur samtals", "632.446.308", "569.304.451", "11%"], samtala: true }] }],
        haegri: [
          { t: "h3", texti: "Rekstrargjöld" },
          { t: "tafla", titill: "Rekstrargjöld í krónum", dalkar: ["", "2026", "2025", "%"], radir: [
            ["Félagaskattur GSÍ", "14.665.500", "12.474.000", "18%"],
            ["Mótagjöld", "9.483.031", "11.786.487", "−20%"],
            ["Styrkir og þjálfunarkostnaður", "56.741.033", "55.630.018", "2%"],
            ["Rekstur æfingasvæðis", "41.103.465", "34.261.442", "20%"],
            ["Viðhald og rekstur valla", "113.875.717", "110.656.893", "3%"],
            ["Viðhald og rekstur véla", "35.556.679", "36.206.434", "−2%"],
            ["Rekstur fasteigna", "22.869.615", "24.341.945", "−6%"],
            ["Stjórnunarkostnaður", "64.055.808", "60.306.883", "6%"],
            ["Rekstur verslunar / þjónustuvers", "23.925.917", "23.832.179", "0%"],
            ["Rekstur veitingasölu", "105.738.642", "101.107.994", "5%"],
            ["Rekstur útseldrar þjónustu", "46.063.291", "40.904.630", "13%"],
            ["Annar kostnaður", "13.618.087", "13.533.945", "1%"],
            { c: ["Rekstrargjöld samtals", "547.696.785", "525.042.850", "4%"], samtala: true }] }] },

      { t: "hluti", kort: true,
        vinstri: [
          { t: "h2", texti: "Betur en áætlað" },
          { t: "p", texti: "Fjárhagsáætlun ársins gerði ráð fyrir 37,8 m.kr. hagnaði. Niðurstaðan varð 25,3 milljónum betri. Tekjurnar urðu 23,6 m.kr. hærri en áætlað var, einkum félagsgjöld, flatargjöld og Hraunkot, en gjöldin 4,4 m.kr. lægri." }],
        haegri: [AAETLUN_RAUN] },

      FOTUR
    ]
  },

  // ───────── Efnahagsreikningur ─────────
  {
    slug: "efnahagur", kafli: "fjarmal", heiti: "Efnahagsreikningur", snid: "heilsida",
    fyrirsogn: "Efnahagurinn: nærri ", fyrirsognSkaletrun: "90% eigið fé", kicker: "Ársreikningur 2026 · Efnahagsreikningur",
    blokkir: [
      { t: "hluti", snid: "hetja",
        vinstri: [
          { t: "inngangur", texti: "Eignir námu 992,5 m.kr. í árslok og eigið fé 872,9 m.kr. Eiginfjárhlutfallið hækkaði úr 86,9% í 88,0%. Golfvöllurinn sjálfur er bókfærður á 438,6 m.kr. og fasteignir á 407,6 m.kr." },
          { t: "p", texti: "Vaxtaberandi skuldir eru 88,8 m.kr., en að frádregnu handbæru fé lækkuðu nettóskuldir úr 79,3 í 57,5 m.kr." }],
        haegri: [
          { t: "flogg", titill: "Eigið fé, m.kr.", atridi: [{ ar: "2025", gildi: "776,8" }, { ar: "2026", gildi: "872,9" }] }] },
      { t: "mynd", breidd: "full", stada: "center 55%", src: M + "hvaleyrin-ur-lofti.jpg", alt: "Hvaleyrin úr lofti: völlurinn á nesinu umkringdur sjó og byggð Hafnarfjarðar fyrir ofan.", texti: "Golfvöllurinn er stærsta eign klúbbsins, bókfærður á 438,6 m.kr." },

      { t: "hluti", blokkir: [
        { t: "tolukort", atridi: [
          { heiti: "Eignir alls", tala: "992,5", breyting: "+11,0%", texti: "frá 2025" },
          { heiti: "Eigið fé", tala: "872,9", breyting: "+12,4%", texti: "frá 2025" },
          { heiti: "Eiginfjárhlutfall", tala: "88,0%", texti: "var 86,9%" },
          { heiti: "Vaxtaberandi skuldir", tala: "88,8", texti: "í fjórum lánum" },
          { heiti: "Nettóskuldir", tala: "57,5", texti: "var 79,3 í fyrra" },
          { heiti: "Handbært fé í árslok", tala: "31,3", texti: "var 1,6 í fyrra" }] },
        { t: "p", texti: "Allar fjárhæðir í milljónum króna (m.kr.) 31. október 2026. Nettóskuldir eru vaxtaberandi skuldir að frádregnu handbæru fé." }] },

      { t: "hluti", afast: true, kort: true,
        vinstri: [
          { t: "h2", texti: "Eignir og fjármögnun" },
          { t: "p", texti: "Golfvöllurinn og fasteignirnar eru 85% af eignum klúbbsins. Vélar og tæki hækkuðu úr 66,3 í 94,2 m.kr. eftir 51,8 m.kr. fjárfestingu í vélum á árinu, og veltufjármunir rúmlega tvöfölduðust með auknu handbæru fé." },
          { t: "p", texti: "Eigið fé fjármagnar nær níu krónur af hverjum tíu. Langtímaskuldir hækkuðu með nýju 33 m.kr. láni en skammtímaskuldir lækkuðu þegar yfirdrátturinn var greiddur upp." }],
        haegri: [
          { t: "h3", texti: "31. október 2026" },
          SKIPTING_EIGNIR, SKIPTING_FJARMOGNUN] },

      { t: "hluti", snid: "kort", jafnt: true,
        blokkir: [
          { t: "h2", texti: "Efnahagsreikningur 31. október 2026" },
          { t: "p", texti: "Samanburður við stöðuna í lok rekstrarársins 2025, í milljónum króna." }],
        vinstri: [
          { t: "h3", texti: "Eignir" },
          { t: "tafla", titill: "Eignir, m.kr.", dalkar: ["m.kr.", "2026", "2025"], radir: [
            ["Golfvöllur", "438,6", "431,2"],
            ["Fasteignir", "407,6", "373,4"],
            ["Vélar og tæki", "94,2", "66,3"],
            { c: ["Fastafjármunir samtals", "940,4", "870,9"], feitt: true },
            ["Veltufjármunir", "52,1", "23,2"],
            ["þar af handbært fé", "31,3", "1,6"],
            { c: ["Eignir alls", "992,5", "894,0"], samtala: true }] }],
        haegri: [
          { t: "h3", texti: "Eigið fé og skuldir" },
          { t: "tafla", titill: "Eigið fé og skuldir, m.kr.", dalkar: ["m.kr.", "2026", "2025"], radir: [
            ["Eigið fé", "872,9", "776,8"],
            ["Langtímaskuldir", "74,1", "55,6"],
            ["Skammtímaskuldir", "45,4", "61,6"],
            { c: ["Skuldir og eigið fé alls", "992,5", "894,0"], samtala: true }] }] },

      { t: "mynd", breidd: "full", stada: "center 50%", src: M + "hraunbrautir-ur-lofti.jpg", alt: "Loftmynd af brautum og flötum sem liðast um mosavaxið hraun meðfram ströndinni; Hafnarfjörður í baksýn." },

      { t: "hluti", kort: true,
        vinstri: [
          { t: "h2", texti: "Langtímalán" },
          { t: "p", texti: "Vaxtaberandi skuldir eru 88,8 m.kr. í fjórum lánum, þar af nýtt 33 m.kr. óverðtryggt lán hjá Landsbankanum sem tekið var á árinu." },
          { t: "p", texti: "Eldri lánasamningar við Hafnarfjarðarbæ vegna vélageymslu og öryggismála í Hraunkoti voru greiddir upp að fullu." }],
        haegri: [LAN] },

      FOTUR
    ]
  },

  // ───────── Sjóðstreymi ─────────
  {
    slug: "sjodstreymi", kafli: "fjarmal", heiti: "Sjóðstreymi", snid: "heilsida",
    fyrirsogn: "Hvert fóru ", fyrirsognSkaletrun: "peningarnir?", kicker: "Ársreikningur 2026 · Sjóðstreymi",
    blokkir: [
      { t: "hluti", snid: "hetja",
        vinstri: [
          { t: "p", texti: "Reksturinn skilaði **74,9 m.kr.** í handbæru fé. Klúbburinn fjárfesti nettó fyrir 86,1 m.kr. í vélum, velli og húsnæði, greiddi upp yfirdráttinn og lauk árinu með 31,3 m.kr. í handbæru fé." },
          { t: "p", texti: "Mismuninn brúuðu nýtt 33 m.kr. lán og 33 m.kr. framlag Hafnarfjarðarbæjar." }],
        haegri: [
          { t: "flogg", titill: "Handbært fé, m.kr.", atridi: [{ ar: "1. nóv. 2025", gildi: "1,6" }, { ar: "31. okt. 2026", gildi: "31,3" }] }] },
      { t: "mynd", breidd: "full", stada: "center 45%", src: M + "glompuhogg.jpg", alt: "Kylfingur slær úr glompu svo sandurinn þyrlast upp." },

      { t: "hluti", blokkir: [
        { t: "tolukort", atridi: [
          { heiti: "Frá rekstri", tala: "74,9", texti: "handbært fé frá rekstri" },
          { heiti: "Fjárfesting, nettó", tala: "86,1", texti: "vélar, völlur og húsnæði" },
          { heiti: "Ný fjármögnun", tala: "66,0", texti: "nýtt lán og framlag bæjarins" },
          { heiti: "Greitt af skuldum", tala: "25,2", texti: "afborganir og yfirdráttur" },
          { heiti: "Handbært fé í árslok", tala: "31,3", texti: "var 1,6 í upphafi árs" }] },
        { t: "p", texti: "Allar fjárhæðir í milljónum króna (m.kr.) fyrir rekstrarárið 1. nóvember 2025 til 31. október 2026." }] },

      { t: "hluti", snid: "kort", blokkir: [
        { t: "h2", texti: "Frá upphafi til loka ársins" },
        { t: "p", texti: "Fossritið sýnir hvernig handbært fé fór úr 1,6 m.kr. í upphafi árs í 31,3 m.kr. í árslok. Gylltar súlur eru peningar sem komu inn, dökkgráar súlur peningar sem fóru út." },
        FOSS] },

      { t: "hluti", kort: true,
        vinstri: [
          { t: "h2", texti: "Fjárfest í vélum, velli og húsnæði" },
          { t: "p", texti: "Klúbburinn keypti vélar og tæki fyrir 51,8 m.kr. og fékk 7,3 m.kr. fyrir seldar vélar. Í endurbætur á velli og húsnæði fóru 41,6 m.kr." },
          { t: "p", texti: "Yfirdrátturinn, 18,2 m.kr., var greiddur upp að fullu og afborganir langtímalána námu 7,0 m.kr." }],
        haegri: [
          { t: "tafla", snid: "texti", titill: "Handbært fé 2026, m.kr.", dalkar: ["", "m.kr."], radir: [
            ["Handbært fé 1. nóvember 2025", "1,6"],
            ["Frá rekstri", "+74,9"],
            ["Nýtt langtímalán", "+33,0"],
            ["Framlag Hafnarfjarðarbæjar", "+33,0"],
            ["Seldar vélar", "+7,3"],
            ["Vélar og tæki keypt", "−51,8"],
            ["Endurbætur á velli og húsnæði", "−41,6"],
            ["Afborganir lána", "−7,0"],
            ["Yfirdráttur greiddur upp", "−18,2"],
            { c: ["Handbært fé 31. október 2026", "31,3"], samtala: true }] }] },

      { t: "mynd", breidd: "full", stada: "center 40%", src: M + "thoka-vid-strondina.jpg", alt: "Þokuslæða yfir grýttri strönd og grænum brautum Hvaleyrarvallar." },
      FOTUR
    ]
  },

  // ───────── Rekstraráætlun 2027 ─────────
  {
    slug: "aaetlun", kafli: "fjarmal", heiti: "Rekstraráætlun 2027", snid: "heilsida",
    fyrirsogn: "Áætlun 2027: ", fyrirsognSkaletrun: "varfærnari vöxtur", kicker: "Ársreikningur 2026 · Rekstraráætlun 2027",
    blokkir: [
      { t: "hluti", snid: "hetja",
        vinstri: [
          { t: "p", texti: "Fjárhagsáætlun næsta árs gerir ráð fyrir **669,2 m.kr. tekjum**, 5,8% aukningu, og að gjöldin hækki um 7,2% í 586,9 m.kr." },
          { t: "p", texti: "Áætlaður hagnaður er 55,6 m.kr., nokkru minni en 63,1 m.kr. hagnaður ársins 2026, meðal annars vegna hærri vaxtagjalda og aukins viðhalds á völlunum." }],
        haegri: [
          { t: "flogg", titill: "Hagnaður, m.kr.", atridi: [{ ar: "Raun 2026", gildi: "63,1" }, { ar: "Áætlun 2027", gildi: "55,6" }] }] },
      { t: "mynd", breidd: "full", stada: "center 60%", src: M + "hvaleyri-sjovarnargardur.jpg", alt: "Hvaleyrarvöllur úr lofti: brautir og flatir á sjávarbakkanum, grjótgarður meðfram sjónum og áhorfendur á vellinum.", texti: "Hvaleyrarvöllur" },

      { t: "hluti", blokkir: [
        { t: "tolukort", atridi: [
          { heiti: "Tekjur", tala: "669,2", breyting: "+5,8%", texti: "frá 2026" },
          { heiti: "Gjöld", tala: "586,9", breyting: "+7,2%", texti: "frá 2026" },
          { heiti: "EBITDA", tala: "82,3", breyting: "−2,8%", texti: "frá 2026" },
          { heiti: "Hagnaður", tala: "55,6", breyting: "−11,9%", texti: "frá 2026" },
          { heiti: "Félagsgjöld", tala: "284,2", breyting: "+10,8%", texti: "frá 2026" },
          { heiti: "Vaxtagjöld", tala: "14,7", texti: "voru 9,5 árið 2026" }] },
        { t: "p", texti: "Allar fjárhæðir í milljónum króna (m.kr.). Breyting miðast við niðurstöðu rekstrarársins 2026." }] },

      { t: "hluti", afast: true, kort: true,
        vinstri: [
          { t: "h2", texti: "Tekjur og gjöld 2027" },
          { t: "p", texti: "Félagsgjöld eiga að skila 284,2 m.kr. Á gjaldahliðinni vegur þyngst að viðhald og rekstur vallanna hækkar um 15,5% í 131,5 m.kr. Vaxtagjöld hækka úr 9,5 í 14,7 m.kr. vegna nýrra lána, og mótatekjur eru áætlaðar varlega, 15,8 m.kr." },
          { t: "p", texti: "Sjóðsstaðan verður þrengst í desember 2026, áður en 150 m.kr. greiðsla Hafnarfjarðarbæjar vegna golfskálans berst í febrúar 2027. Yfirdráttarheimildir duga til að brúa það bil. Fjárfestingaráætlun 2027 er enn í vinnslu." }],
        haegri: [AAETLUN_2027] },

      { t: "hluti", snid: "kort", jafnt: true,
        blokkir: [
          { t: "h2", texti: "Áætlunin í samhengi" },
          { t: "p", texti: "Tekjur Keilis hafa þrefaldast frá 2016. Áætlun 2027 gerir ráð fyrir áframhaldandi vexti teknanna, en hagnaðurinn verður nokkru minni en metárið 2026." }],
        ...ARASULUR },

      GOLFSKALI,
      { t: "mynd", breidd: "full", stada: "center 40%", src: M + "thoka-vid-strondina.jpg", alt: "Þokuslæða yfir grýttri strönd og grænum brautum Hvaleyrarvallar." },
      FOTUR
    ]
  }
];

export default sidur.map((s) => ({ ...s, efnisar: "2026" }));
