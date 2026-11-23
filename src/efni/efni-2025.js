// Efni ársskýrslu Keilis 2025 — sótt af 2025.keilir.is.
// Fyrir 2026: afritið þessa skrá sem efni-2026.js, skiptið út efni og stillið „efni“ í sniðmátinu.
// Blokkagerðir (t): inngangur, p, h2, h3, listi, tolur, tilvitnun, mynd, myndir, myndband, tafla, sulur,
// pdf, folk, nofn, nefndir, grof, undirsidur, tenglar, undirskrift. **feitletrun** virkar í p og listi.
const U = "https://2025.keilir.is/wp-content/uploads/";
const K = "https://www.keilir.is/wp-content/uploads/";

export default {
  ar: "2025",
  heiti: "Ársskýrsla 2025",
  adalfundur: "Aðalfundur 9. desember 2025",
  kynningPdf: U + "2025/12/Keilir-Kynning-Adalfundur-09Des2025.pdf",
  kaflar: [
    { id: "stjorn", heiti: "Skýrsla stjórnar" },
    { id: "ithrottir", heiti: "Íþróttastarf" },
    { id: "felagsstarf", heiti: "Félagsstarf" },
    { id: "fjarmal", heiti: "Ársreikningur" },
    { id: "serefni", heiti: "Sérefni" }
  ],

  forsida: {
    fyrirsogn: "Ár Íslands",
    fyrirsognSkaletrun: "mótsins",
    inngangur: "Eitt metnaðarfyllsta ár í sögu klúbbsins: Íslandsmótið á Hvaleyrarvelli, sjö Íslandsmeistaratitlar og nærri 300 nýir félagar.",
    mynd: "myndir/w/2024/04/DJI_0173.jpg", myndAlt: "Loftmynd af braut í hrauninu á Hvaleyrarvelli; kylfingar á grænni brautinni varpa löngum skuggum í kvöldsól.",
    myndatexti: "Hvaleyrarvöllur úr lofti. Völlurinn var opinn í 165 daga, frá 10. maí til 21. október.",
    lykiltolur: [
      { tala: "569,3", texti: "mkr. í tekjur", breyting: "+21% milli ára" },
      { tala: "25,9", texti: "mkr. hagnaður ársins", breyting: "+149% milli ára" },
      { tala: "51.195", texti: "leiknir hringir", breyting: "á báðum völlum" },
      { tala: "2.192", texti: "félagar í árslok", breyting: "+294 á árinu" },
      { tala: "7", texti: "Íslandsmeistaratitlar", breyting: "flestir allra klúbba" }
    ],
    greinar: [
      { kicker: "Íþróttastarf", titill: "Íslandsmótið í golfi", texti: "Einn af hápunktum á síðasta ári var að sjálfsögðu Íslandsmótið í golfi, sem haldið var á Hvaleyrarvelli dagana 7–11 ágúst. Það var mikil eftirvænting í íslensku golfsamfélagi eftir mótinu en síðast var Íslandsmótið í golfi haldið 2017 á Hvaleyrarvelli.", mynd: "myndir/w/2024/04/13-hola-kvoldsol-1.jpg", alt: "Hvaleyrarvöllur í kvöldsól, séð eftir braut með glompum; hraun til vinstri og hafið í baksýn.", slug: "islandsmot" },
      { kicker: "Íþróttastarf", titill: "Keilir með flesta Íslandsmeistaratitla", texti: "Kylfingar Golfklúbbsins Keilis unnu sjö Íslandsmeistaratitla árið 2025 en klúbburinn var með fleiri Íslandsmeistaratitla en nokkur annar klúbbur í flokkum 15 ára og eldri. Þrír af þessum titlum voru í barna og unglingastarfinu, tveir í flokkum 50+ og tveir í meistaraflokkum.", mynd: "myndir/w/2024/04/17_flotin.jpeg", alt: "Flöt á sjávarbakkanum á Hvaleyrarvelli með tveimur glompum; sjórinn glitrar í baksýn.", slug: "ithrottastarf" },
      { kicker: "Vellirnir", titill: "Annasamt ár hjá vallarstarfsmönnum", texti: "Það er óhætt að segja að golfárið 2025 verði lengi í minni haft. Árið einkenndist af samheldni starfsfólks og frábærum árangri á öllum sviðum.", mynd: "myndir/w/2024/04/2_holan_flot.jpg", alt: "Loftmynd af hringlaga flöt umkringdri mosavöxnu hrauni og göngustígum á Hvaleyrarvelli.", slug: "vallarstjori" }
    ],
    studningsadilar: ["Aðallagnir", "ALTIS", "ARMAR", "B og L", "Bílaleiga Akureyrar", "COWI", "ERGO", "Fasteignasalan Ás", "Fjarðarkaup", "Fura", "Góa", "Gulli Bakari", "Hafnarfjarðarbær", "Héðinn vélsmiðja", "Hlaðbær Colas", "Hópbílar", "Hótel Örk", "Hraunhamar", "HS Orka", "Icelandair", "Icewear", "ISCO", "Íslandsbanki", "Jónar Transport", "KFC", "Klettur", "Landsbankinn", "Merking", "Myndform", "Nespresso", "NIKE", "NTC", "Olís", "Peroni", "Rio Tinto Alcan á Íslandi", "RJC", "Securitas", "Sjóvá", "Sólar", "Sport Company", "Steypustöðin", "VERSUS", "Þelamörk", "Ölgerðin Egill Skallagrímsson", "66° norður"]
  },

  sidur: [
    // ───────── SKÝRSLA STJÓRNAR ─────────
    {
      slug: "avarp", kafli: "stjorn", heiti: "Ávarp formanns",
      fyrirsogn: "„Keilir er meira en bara golfvöllur, ", fyrirsognSkaletrun: "við erum gefandi samfélag.", snid: "langlestur",
      kicker: "Ávarp formanns · Aðalfundur Golfklúbbsins Keilis 2025",
      portrett: "myndir/u/2025/12/gummi_stjorn_24-scaled.jpg", portrettAlt: "Guðmundur Örn Óskarsson, formaður Keilis, brosandi í dökkum jakka og hvítri skyrtu.", hofundur: "Guðmundur Örn Óskarsson, formaður", lestur: "8 mín.",
      heimild: "https://2025.keilir.is/skyrsla-stjornar-avarp-formanns/",
      blokkir: [
        { t: "p", texti: "Kæru Keilisfélagar, kæru vinir," },
        { t: "inngangur", texti: "Það er mér mikil ánægja að líta yfir árið 2025 – ár sem var ekki aðeins viðburðaríkt og krefjandi, heldur líka eitt það metnaðarfyllsta í sögu Golfklúbbsins Keilis. Þetta var ár þar sem félagið okkar sýndi styrk sinn, starfsmenn og sjálfboðaliðar stigu upp með ótrúlegri samstöðu og völlurinn sjálfur blómstraði í höndum frábærs vallarstarfsfólks." },
        { t: "h2", texti: "Félagafjölgun – Keilir stækkar og ásókn eykst" },
        { t: "p", texti: "Við höfum sjaldan séð jafn mikinn kraft í aðsókn og þetta árið. Í upphafi árs vorum við **1.898 félagar**, en í lok árs **2.192**, sem er fjölgun um **294 félaga** – og má rekja alfarið til mikillar ásóknar á Sveinskotsvöll. Þar eru nú **774 félagar skráðir** en árið 2023 voru aðeins 337 félagar skráðir á Sveinskotsvöll. Biðlistinn á Hvaleyrarvöll lengist stöðugt. Í byrjun starfsársins ákvað stjórn að setja upp punktakerfi sem gefur forgang á biðlista til þeirra sem eiga maka í golfi, búa í Hafnarfirði, eru með börn sem æfa golf og/eða eru meðlimir á Sveinskotsvelli." },
        { t: "tolur", atridi: [{ tala: "2.192", texti: "félagar í árslok" }, { tala: "+294", texti: "nýir félagar á árinu" }, { tala: "337 → 774", texti: "félagar á Sveinskotsvelli, 2023 → 2025" }] },
        { t: "p", texti: "Þessi vöxtur sýnir að Keilir er klúbbur sem fólk vill tilheyra – og það er okkar hlutverk að halda áfram að bjóða þessum fjölbreytta hópi upp á fyrsta flokks golfupplifun." },
        { t: "h2", texti: "Íþróttastarfið – kraftmikið, fjölbreytt og vaxandi" },
        { t: "p", texti: "Árið 2025 var stórt stökk fram á við í íþróttastarfinu okkar. Fjöldi iðkenda jókst í öllum aldurshópum, bæði í barna- og unglingastarfi, almennu starfi og afreksþjálfun. Golfleikjaskólinn var sá stærsti sem við höfum nokkru sinni haldið, og þátttaka í mótum og æfingum jókst verulega." },
        { t: "h3", texti: "Helstu atriði í íþróttastarfi 2025" },
        { t: "listi", atridi: ["**Yfir 200 börn (6–12 ára)** tóku þátt í golfleikjaskólanum – metárgangur.", "Unglingastarfið styrktist – fleiri iðkendur en áður á reglulegum æfingum.", "Fjöldi ungra keppenda tók þátt í mótum GSÍ og skilaði góðum árangri.", "**Kvennalið Keilis** keppti á **Evrópumóti golfklúbba 2025** og endaði í 12. sæti – frábær árangur á alþjóðavísu.", "Mótaröð Keilis hélt áfram að stækka og dafna – fjölbreytt flokkaskipting tryggði þátttökumöguleika fyrir alla kylfinga.", "Betri umgjörð og bætt skipulag íþróttastarfsins hefur gert starfið faglegra, markvissara og aðgengilegra.", "Samhliða mikilli fjölgun iðkenda var tryggt aðgengi að þéttari æfingatímum með breyttu skipulagi í Hraunkoti, sem hefur aukið afköst í æfingum."] },
        { t: "p", texti: "Íþróttastarfið er nú orðið einn af burðarásum Keilis – starf sem þjónar kylfingum á öllum getustigum, skapar góða kylfinga og styrkir Keili sem öflugt íþróttafélag." },
        { t: "p", texti: "Þjálfarateymið okkar á heiður skilið fyrir gott og öflugt starf." },
        { t: "h2", texti: "Starfið – byggt á öflugri liðsheild" },
        { t: "p", texti: "Við bættum við nýjum starfsmönnum, kvöddum einstaklinga sem hafa lagt ómetanlegt framlag í áratugi og styrktum stoðir klúbbsins:" },
        { t: "listi", atridi: ["**Guðbjartur Ísak** ákvað að ljúka sínum farsæla starfsferli hjá okkur í byrjun árs – við þökkum honum innilega fyrir framlag sitt.", "Nýr vélvirki, Sveinn Ingi Nilsen, hóf störf – kemur til okkar með 40 ára reynslu.", "Við endurheimtum Chris Elrick – einn reyndasta vallarstarfsmann landsins – sem mun halda áfram að gera ótrúlegustu hluti í komandi verkefnum á vellinum."] },
        { t: "p", texti: "Starfsmennirnir okkar hafa staðið vaktina allan veturinn og allt sumarið – og það sést á vellinum, í framkvæmdum, í þjónustunni og í upplifun félagsmanna." },
        { t: "h2", texti: "Vellirnir – Golfsumarið 2025 eitt það annasamasta" },
        { t: "p", texti: "Vallarstjórinn lýsir þessu ári einfaldlega sem einu stærsta og annasamasta sumri sem starfsmenn hafa upplifað – og þar var **Íslandsmótið 2025** hápunkturinn." },
        { t: "h3", texti: "Sumarið einkenndist af" },
        { t: "listi", atridi: ["Ótrúlegu maíveðri – **sögulegum hitatölum** sem hjálpuðu gróandanum að springa fram fyrr en oft áður.", "Árangursríkri endurheimt flatanna sem urðu fyrir sjógusu í apríl.", "Mikilli sáningu og sandi á brautir í hrauninu – verkefni sem er nú farið að skila frábærum árangri.", "Stöðugum umbótum á teigum og gönguleiðum – þar sem teknar voru í notkun nýjar hybrid mottur með glæsilegum árangri."] },
        { t: "p", texti: "Á Sveinskotsvelli hélt uppbyggingin áfram og þar er vinnan í fullum gangi við ný teigasett – markmiðið er skýrt: **Sveinskotsvöllur á að verða besti 9 holu völlur landsins**." },
        { t: "h2", texti: "Íslandsmótið í golfi 2025 – stórviðburður sem lyfti Keili upp á nýtt stig" },
        { t: "p", texti: "Það verður seint gleymt hvernig Hvaleyrarvöllur skartaði sínu fegursta í **beinni sjónvarpsútsendingu í 14 klukkustundir**, þar sem yfir **38.000 áhorfendur** fylgdust með Íslandi í beinni frá Hafnarfirði." },
        { t: "tolur", atridi: [{ tala: "14 klst.", texti: "í beinni sjónvarpsútsendingu" }, { tala: "38.000+", texti: "áhorfendur" }, { tala: "120+", texti: "sjálfboðaliðar" }] },
        { t: "h3", texti: "Lykilatriði" },
        { t: "listi", atridi: ["Rúmlega 120 sjálfboðaliðar unnu óeigingjarnt starf – sem gerði mótið mögulegt.", "Fanzone og risaskjár settu ný viðmið fyrir Íslandsmót.", "Mikið hrós frá kylfingum og gestum – og frá RÚV sem sýndi völlinn og mótið í hæsta gæðaflokki."] },
        { t: "p", texti: "Það má sannarlega segja að þessu verkefni loknu hafi klúbburinn **stækkað um nokkur númer.**" },
        { t: "h2", texti: "Félagsstarf – hjartað í Keili" },
        { t: "p", texti: "Þetta ár sýndi enn á ný að Keilir er ekki aðeins golfvöllur – heldur lifandi samfélag. Samfélag ýmissa spilahópa og einstaklinga sem koma saman reglulega, njóta samveru hvors annars og spila golf." },
        { t: "h3", texti: "Kvennastarfið" },
        { t: "listi", atridi: ["Yfir **120 konur** tóku þátt í miðvikudagsmótaröðinni og **160 keppendur** í Opna Icewear kvennamótinu.", "Haustferðin var fjölmennari en nokkru sinni fyrr – tæplega 100 konur."] },
        { t: "h3", texti: "65+ hópurinn" },
        { t: "listi", atridi: ["**85 kylfingar**, 234 hringir og mikil þátttaka í sjö mótum – raunverulegt blómaskeið hjá þessum hópi.", "Göfugt samstarf við GKG og skemmtilegar heimsóknir á báða velli."] },
        { t: "h3", texti: "Annað félagsstarf" },
        { t: "p", texti: "Hreinsunardagurinn, Bændaglíma, Meistaramót, Skötuveisla, Jólahlaðborð – og svo ótalmargt fleira. Þetta eru viðburðir sem binda okkur saman og skapa anda sem erfitt er að lýsa – en afskaplega gaman að vera hluti af." },
        { t: "h2", texti: "Hraunkot – tæknivæddasta æfingasvæði landsins" },
        { t: "p", texti: "Við getum verið þakklát fyrir þessa einstöku aðstöðu sem aðeins nokkrir klúbbar á landinu geta boðið félögum sínum. Þar er:" },
        { t: "listi", atridi: ["**Upphitað æfingaskýli** með Trackman í öllum básum þar sem hægt er að spila Hvaleyrarvöll og fleiri velli eins og í golfhermi.", "Innanhúss púttflöt, golfhermar, leikir og keppnir – og Hvaleyrarvöllur í hermi.", "Notkun í hæstu hæðum – sem sýnir hversu mikilvæg þessi fjárfesting er, en boltasala og notkun svæðisins hefur meira en tvöfaldast á síðustu tveimur árum."] },
        { t: "h2", texti: "Samfélagsmiðlar og samskipti við félagsfólk" },
        { t: "p", texti: "Það hefur sjaldan verið jafn lifandi umfjöllun um klúbbinn á netinu." },
        { t: "listi", atridi: ["**17 greinar birtar** samkvæmt birtingaráætlun stjórnar árið 2025.", "Ráðinn ungur samfélagsmiðlasérfræðingur yfir sumarið.", "Fylgjendum fjölgaði um **17%** – og eru nú yfir **5.000** á Instagram og Facebook."] },
        { t: "p", texti: "Þetta skiptir máli – sýnileiki styrkir ímynd, fagmennsku og tengsl við samfélagið." },
        { t: "h2", texti: "Framkvæmdir og mannvirki" },
        { t: "p", texti: "Árið 2025 markaði fyrsta fulla árið þar sem leikið var samkvæmt endanlegri hönnun sem lagt var af stað í árið 2017. Seinni hluti vallarins hefur tekið algerum breytingum og eru nú álitnar af félagsmönnum mun áhugaverðari en hraunið góða. Vissulega er fólk að ræða uppröðun brautanna en eitt er víst að við erum búin að fá alveg frábærar nýjar brautir inn á völlinn." },
        { t: "p", texti: "Þó stórframkvæmdum á vellinum sé lokið í bili var á árinu meðal annars:" },
        { t: "listi", atridi: ["Unnið í nýjum teigum og gönguleiðum.", "Bætt aðkoma milli 16. og 17. brautar.", "Byggð upp ný starfsmannaaðstaða.", "Byrjað á nýjum teigasettum á Sveinskoti.", "Áhaldahús endurskipulagt og gamalt rifið út á einum hreinsunardegi."] },
        { t: "p", texti: "Við höfum einnig skipað vinnuhóp um nýjan golfskála – verkefni sem mun skipta sköpum fyrir framtíð klúbbsins." },
        { t: "h2", texti: "Nýr golfvöllur í upplandi Hafnarfjarðar" },
        { t: "p", texti: "Nýlega skipaði Hafnarfjarðarbær framkvæmdahóp með fulltrúum Keilis og Setbergs með það markmið að finna og hefja uppbyggingu á nýju golfvallarsvæði í upplandi Hafnarfjarðar, nánar tiltekið suðaustan Stórhöfða í Snókalöndum og Óbrinnishólum. Þetta golfvallarsvæði er komið inn í vinnslutillögu Aðalskipulags 2026–2040." },
        { t: "p", texti: "Í samstarfi við Golfklúbbinn Setberg viljum við vinna með Hafnarfjarðarbæ að því að þarna verði skapað framtíðarsvæði fyrir tvo 18 holu velli, ásamt fyrirmyndar æfingaaðstöðu. Einnig viljum við í samstarfi við bæjarfélagið sækjast eftir að svæðið verði byggt upp með þeim metnaði að geta þjónað sem þjóðarleikvangur golfíþróttarinnar, þá í samstarfi einnig við GSÍ og ÍSÍ." },
        { t: "h2", texti: "Stjórnarstarfið – samstíga og öflugur hópur" },
        { t: "p", texti: "Á starfsárinu voru haldnir **12 formlegir stjórnarfundir**, auk ótal nefndafunda og vinnuhópa sem unnu linnulaust að því að þróa klúbbinn áfram." },
        { t: "p", texti: "Tinna Jóhannsdóttir fær kærar þakkir fyrir óeigingjarnt starf í stjórninni, en hún hefur undanfarin 2 ár leitt uppbyggingu og góðar breytingar í íþróttastarfinu okkar." },
        { t: "p", texti: "Einnig vil ég þakka öðrum stjórnarliðum og sjálfboðaliðum fyrir gott starf og hlakka ég til áframhaldandi samvinnu á næstu árum." },
        { t: "h2", texti: "Að lokum – þakklæti, stolt og framtíðarsýn" },
        { t: "p", texti: "Kæru Keilisfélagar," },
        { t: "p", texti: "Árið 2025 sýndi okkur hvað Keilir stendur fyrir: **sameiginlegan metnað, gott fólk og frábæra aðstöðu**. Við horfum inn í 2026 með bjartsýni, skýrri framtíðarsýn og öflugu starfi á öllum sviðum." },
        { t: "p", texti: "Ég vil þakka:" },
        { t: "listi", atridi: ["starfsfólki – fyrir ómetanlegt starf,", "sjálfboðaliðum – fyrir hjartað og kraftinn,", "nefndum og stjórn – fyrir ábyrgð og fagmennsku,", "og ykkur félagsmönnum – fyrir stuðning, þátttöku og trú á klúbbnum."] },
        { t: "tilvitnun", texti: "Keilir er meira en bara golfvöllur, við erum gefandi samfélag. Takk fyrir árið 2025 – og áfram Keilir!" },
        { t: "undirskrift", nafn: "Guðmundur Örn Óskarsson", titill: "Formaður Keilis" }
      ]
    },
    {
      slug: "folkid", kafli: "stjorn", heiti: "Fólkið",
      fyrirsogn: "Fólkið á Hvaleyri", kicker: "Skýrsla stjórnar",
      heimild: "https://2025.keilir.is/skyrsla-stjornar-folkid/",
      blokkir: [
        { t: "inngangur", texti: "Á aðalfundi Keilis sem haldinn var í Golfskála Keilis þriðjudaginn 3. desember 2024 var Guðmundur Örn Óskarsson kosinn formaður til eins árs. Kosið var til stjórnar um 3 sæti til tveggja ára og voru Bjarni Þór Gunnlaugsson, Sveinn Sigurbergsson og Guðríður Hjördís Baldursdóttir kjörin. Fyrir í stjórn voru Tinna Jóhannsdóttir, Ólafur Ingi Tómasson og Már Sveinbjörnsson." },
        { t: "folk", titill: "Stjórn Keilis á starfsárinu", atridi: [
          { nafn: "Guðmundur Örn Óskarsson", hlutverk: "Formaður" }, { nafn: "Guðríður Hjördís Baldursdóttir", hlutverk: "Varaformaður" }, { nafn: "Már Sveinbjörnsson", hlutverk: "Ritari" }, { nafn: "Bjarni Þór Gunnlaugsson", hlutverk: "Gjaldkeri" }, { nafn: "Tinna Jóhannsdóttir", hlutverk: "Meðstjórnandi" }, { nafn: "Ólafur Ingi Tómasson", hlutverk: "Meðstjórnandi" }, { nafn: "Sveinn Sigurbergsson", hlutverk: "Meðstjórnandi" }] },
        { t: "folk", titill: "Skoðunarmenn ársreiknings", atridi: [{ nafn: "Jón Hákon Hjaltalín", hlutverk: "Skoðunarmaður" }, { nafn: "Sigurður Tryggvi Sigurðsson", hlutverk: "Skoðunarmaður" }] },
        { t: "tolur", atridi: [{ tala: "12", texti: "formlegir stjórnarfundir" }, { tala: "1.898", texti: "félagar í upphafi árs" }, { tala: "2.192", texti: "félagar í lok árs" }, { tala: "774", texti: "skráðir á Sveinskotsvöll" }] },
        { t: "p", texti: "Í ár fjölgaði félögum um **294**, er sú fjölgun nánast alfarið á Sveinskotsvelli. Biðlisti er fyrir árið 2025." },
        { t: "folk", titill: "Heilsárstarfsmenn", atridi: [
          { nafn: "Ólafur Þór Ágústsson", hlutverk: "Framkvæmdastjóri" }, { nafn: "Hrefna Helgadóttir", hlutverk: "Veitingasala" }, { nafn: "Haukur Jónsson", hlutverk: "Yfirvallarstjóri" }, { nafn: "Rúnar Gunnarsson", hlutverk: "Aðstoðarvallarstjóri" }, { nafn: "Ingibergur Alex Rúnarsson", hlutverk: "Aðstoðarvallarstjóri" }, { nafn: "Chris Elrick", hlutverk: "Framkvæmdir" }, { nafn: "Davíð Kristján Hreiðarsson", hlutverk: "Innheimta / bókhald" }, { nafn: "Vikar Jónasson", hlutverk: "Þjónustustjóri" }, { nafn: "Birgir Björn Magnússon", hlutverk: "Íþróttastjóri" }, { nafn: "Axel Bóasson", hlutverk: "Afreksþjálfari" }, { nafn: "Sveinn Ingi Nilsen", hlutverk: "Verkstæði" }, { nafn: "Nökkvi Andrésson", hlutverk: "Hraunkot" }] },
        { t: "h2", texti: "Aðrir vallarstarfsmenn" },
        { t: "p", texti: "Guðbjartur Ísak hætti störfum í byrjun árs eftir að hafa helgað allan sinn starfsferil golfvellinum. Við þökkum honum kærlega fyrir frábært starf og ómetanlegt framlag í gegnum árin og óskum honum velfarnaðar í framtíðinni." },
        { t: "p", texti: "**Nýr vélvirki:** Sveinn Ingi Nilsen var ráðinn sem vélvirki. Sveinn hefur verið með smurolíu og glussa undir nöglunum í 40 ár og er afar reynslumikill á sviði vélaviðgerða." },
        { t: "p", texti: "Einnig endurheimtum við Christopher Elrick (Chris) aftur, en hann hefur síðustu ár unnið að uppbyggingu á nýju holunum í Brautarholti. Hann er virkilega fær gröfumaður sem mun nýtast okkur einstaklega vel í komandi framkvæmdum." },
        { t: "p", texti: "Auk fastamanna voru það svo þeir Bjarki Freyr Ragnarsson og Helgi Snær sem í vetur voru við uppbyggingu á nýrri starfsmannaaðstöðu. Alls voru **19 starfsmenn** á vellinum í sumar, þar af 14 með tímabundna ráðningu." },
        { t: "nofn", titill: "Starfsmenn með tímabundna ráðningu 2025", atridi: ["Arnór Egill Einarsson", "Bjarki Freyr Ragnarsson", "Hannes Ívar Ingólfsson", "Haraldur Breki Davíðsson", "Heiðar Bjarki Davíðsson", "Helgi Marinó Kristófersson", "Helgi Snær Björgvinsson", "Helgi Valur Ingólfsson", "Jón Örn Ingólfsson", "Kristján Ólafsson", "Magnús Ingi Halldórsson", "Markús Breki Steinsson", "Tristan Snær Daníelsson", "Þorsteinn Ómar Ágústsson"] },
        { t: "nofn", titill: "Eftirlitsmenn og ræsar", atridi: ["Erlingur Atli Atlason", "Birkir Óli Júlíusson", "Garðar Ingi Sindrason", "Brynjar Logi Bjarnþórsson", "Ágúst Húbertsson", "Hallgrímur Hallgrímsson", "Guðbjartur Þormóðsson"] },
        { t: "nofn", titill: "Starfsfólk í golfvöruverslun", atridi: ["Breki Víðisson", "Arna Diljá Guðmundsdóttir", "Birnir Hergilsson", "Karítas Ósk Tynes Jónsdóttir"] },
        { t: "folk", titill: "Annað", atridi: [{ nafn: "Ísak Traustason", hlutverk: "Samfélagsmiðlar" }, { nafn: "Sólar ehf.", hlutverk: "Þjónustusamningur · ræstingar" }] },
        { t: "h2", texti: "Nefndir (sbr. skilgreind svið)" },
        { t: "nefndir", atridi: [
          { heiti: "Íþróttanefnd (Forgjafarnefnd, Nýliðanefnd)", texti: "Birgir Björn Magnússon íþróttastjóri, Axel Bóasson afreksþjálfari, Ólafur Þór Ágústsson framkvæmdastjóri, Sveinn Sigurbergsson, Karolína Helga Símonardóttir og Tinna Jóhannsdóttir formaður." },
          { heiti: "Rekstrarnefnd (Kappleikjanefnd)", texti: "Guðmundur Óskarsson, Már Sveinbjörnsson, Bjarni Þór Gunnlaugsson og Ólafur Þór Ágústsson." },
          { heiti: "Mannvirkjanefnd (Vallarnefnd)", texti: "Ólafur Ingi Tómasson formaður, Sveinn Sigurbergsson, Ólafur Þór Ágústsson, Bjarni Þór Gunnlaugsson, Guðríður Hjördís Baldursdóttir, Haukur Jónsson, Ingibergur Elvarsson og Rúnar Geir Gunnarsson." },
          { heiti: "Markaðsnefnd (Skemmtinefnd)", texti: "Tinna Jóhannsdóttir formaður, Guðríður Hjördís Baldursdóttir, Vikar Jónasson og Ólafur Þór Ágústsson." },
          { heiti: "Öldunganefnd 65+", texti: "Már Sveinbjörnsson formaður, Lucinda Grímsdóttir, Björk Ingvarsdóttir, Erna Jónsdóttir, Gunnar Hjaltalín og Þórir Gíslason." },
          { heiti: "Kvennanefnd", texti: "Rósa Lyng Svavarsdóttir formaður, Kristín Geirsdóttir, Nína Edvardsdóttir, Rut Sigurvinsdóttir, Sigrún Einarsdóttir og Sigurlaug Jóhannsdóttir." },
          { heiti: "Foreldraráð", texti: "Ingibjörg Sveinsdóttir, Rannveig Aðalheiður Oddgeirsdóttir, Sandra Halldórsdóttir, Eydís Eyland, Gunnar Þór Sigurjónsson, Guðvarður Ólafsson, Karen Ósk Lárusdóttir, Karolína Helga Símonardóttir og Birgir Björn Magnússon íþróttastjóri." },
          { heiti: "Aganefnd", texti: "Hálfdan Þór Karlsson." },
          { heiti: "Orðunefnd", texti: "Ágúst Húbertsson." },
          { heiti: "Laganefnd", texti: "Karl Ó. Karlsson." }] }
      ]
    },
    {
      slug: "hringir", kafli: "stjorn", heiti: "Leiknir hringir",
      fyrirsogn: "Leiknir hringir", kicker: "Skýrsla stjórnar",
      heimild: "https://2025.keilir.is/skyrsla-stjornar-leiknir-hringir/",
      blokkir: [
        { t: "inngangur", texti: "Golfárið 2025 fer sannarlega í sögubækurnar sem eitt af þeim allra viðburðarríkustu hjá klúbbnum. Sumarið var óvenju gott, veðrið hagstætt og aðstæður á vellinum almennt til fyrirmyndar. Kylfingar nýttu frábæra tíð til fulls og það sást skýrt á fjölda leikinna hringja." },
        { t: "tolur", atridi: [{ tala: "35.575", texti: "hringir á Hvaleyrarvelli" }, { tala: "15.620", texti: "hringir á Sveinskotsvelli (12.279 árið áður)" }, { tala: "165", texti: "dagar opið, 10. maí – 21. október" }] },
        { t: "p", texti: "Hvaleyrarvöllur opnaði 10. maí og lokaði 21. október, sem gerir tímabilið alls 165 daga. Á þessu tímabili voru leiknir 35.575 hringir, sem er veruleg aukning frá fyrri árum og endurspeglar þann mikla kraft sem ríkir í golfstarfi félagsins." },
        { t: "p", texti: "Aðsóknin á Sveinskotsvöll heldur áfram að aukast. Þar voru leiknir 15.620 hringir, sem er aukning frá 12.279 hringjum árið áður. Kylfingar nýttu völlinn jafnt til æfinga sem og til skemmtilegra styttri golfhringa og skapaðist þar lífleg stemming allt sumarið." },
        { t: "h2", texti: "Hvernig er skiptingin?" },
        { t: "p", texti: "Hér fyrir neðan er hægt að sjá annars vegar hvernig leiknir hringir skiptast á milli karla og kvenna og hinsvegar félagsmanna Keilis og annarra. Einnig er hægt að sjá skiptingu á milli vallanna okkar, Sveinskotsvallar og Hvaleyrarvallar. Að lokum má sjá hvernig rástímabókanir skiptast á milli bókaðra tíma, móta og lokana." },
        { t: "grof", atridi: [
          { heiti: "Kynin", src: "myndir/u/2025/12/karlarkonur.png", alt: "Kökurit: karlar léku 65% hringja og konur 35%." }, { heiti: "Félagsmenn", src: "myndir/u/2025/12/felagsmenn.png", alt: "Kökurit: félagsmenn léku 91% hringja og gestir 9%." }, { heiti: "Vellir", src: "myndir/u/2025/12/vellir.png", alt: "Kökurit: 69% hringja voru leiknir á Hvaleyrarvelli og 31% á Sveinskotsvelli." }, { heiti: "Rástímabókanir", src: "myndir/u/2025/12/rastimabokanir.png", alt: "Kökurit yfir ráðstöfun rástíma: almennar rástímabókanir 72%, mót 12% og lokanir 16%." }, { heiti: "Meðalfjöldi hringja", src: "myndir/u/2024/12/medalfjoldihringja_aldur_kyn_24.png", alt: "Línurit yfir meðalfjölda leikinna hringja eftir aldri og kyni. Undir fertugu leika karlar mun fleiri hringi en konur; frá 45 ára aldri eru kynin svipuð, um 16–21 hringur á ári. Flestir hringir eru hjá körlum 80–84 ára, um 24." }, { heiti: "Fjöldi í mótum", src: "myndir/u/2025/12/motahald.png", alt: "Súlurit yfir fjölda keppenda í mótum sumarsins. Meistaramótið var stærst með 365 keppendur, þá Opna Nike með 204 og Opna Fótbolti.net með 168; fæstir voru í Fjarðarbikarnum, 39." }, { heiti: "Nýting yfir daginn", src: "myndir/u/2025/12/nyting.png", alt: "Súlurit yfir nýtingu rástíma yfir daginn. Nýtingin er 51% kl. 6:30, nær hámarki, 88,6%, um kl. 9 og helst yfir 80% fram undir kl. 17, en fellur síðan niður í 12% kl. 21:30." }] },
        { t: "sulur", titill: "Leiknir hringir eftir völlum", atridi: [{ heiti: "Hvaleyrarvöllur 2025", gildi: "35.575", pct: 100 }, { heiti: "Sveinskotsvöllur 2025", gildi: "15.620", pct: 44 }, { heiti: "Sveinskotsvöllur 2024", gildi: "12.279", pct: 34.5, daufur: true }] }
      ]
    },
    {
      slug: "samfelagsmidlar", kafli: "stjorn", heiti: "Samfélagsmiðlar",
      fyrirsogn: "Samfélagsmiðlar", kicker: "Skýrsla stjórnar",
      heimild: "https://2025.keilir.is/samfelagsmidlar/",
      blokkir: [
        { t: "myndband", src: U + "2025/12/final-5.mov", texti: "Samantekt ársins á samfélagsmiðlum" },
        { t: "inngangur", texti: "Undanfarin 2 ár hefur stjórnin aukið áherslu á upplýsingagjöf til félagsmanna. Stjórnin hefur sett saman birtingaráætlun þar sem skipulagt er hvenær stjórnarmenn og lykilstarfsmenn komi með stutt innlegg um málefni líðandi stundar eða sem liggur þeim á hjarta. Þetta hefur gengið vel en birtar voru á árinu 17 greinar með því markmiði að efla upplýsingagjöf til félagsmanna." },
        { t: "tolur", atridi: [{ tala: "17", texti: "greinar birtar á árinu" }, { tala: "+17%", texti: "fjölgun fylgjenda" }, { tala: "~5.000", texti: "fylgjendur á Instagram og Facebook" }] },
        { t: "p", texti: "Samfélagsmiðlar eru ekki aðeins kynningarverkfæri – þeir eru hluti af þjónustu og upplifun Keilis. Með öflugri nærveru á netinu tryggjum við að klúbburinn sé aðgengilegur, nútímalegur og lifandi. Samfélagsmiðlar eru öflugur vettvangur til að kynna klúbbinn fyrir gömlum og nýjum kylfingum og styrkja tengsl við samstarfsaðila. Sterk og fagleg nærvera eykur traust og sýnileika." },
        { t: "p", texti: "Myndir, myndbönd og sögur frá mótum og viðburðum skapa tilfinningu fyrir þátttöku og samstöðu. Þetta eykur ánægju og hvetur fleiri til að taka þátt í félagsstarfi Keilis og einnig veitir okkur tækifæri á að veita innsýn á bakvið tjöldin í starfseminni okkar." },
        { t: "p", texti: "Nú á síðasta ári þá var farin sú leið að reyna að styrkja samfélagsmiðla okkar enn meira. Ráðinn var í verkið yfir sumartímann ungur og lifandi samfélagsmiðlasnillingur að nafni Ísak Traustason. Virknin hjá okkur jókst til muna og fylgjendum fjölgaði mjög á árinu. Aukningin nam 17% og eru fylgjendur á Insta og FB nú um 5000 manns." },
        { t: "p", texti: "Það er von okkar að þessi tilraun hafi mælst vel fyrir og verður til þess að styrkja ásjónu Keilis á miðlum sínum. Stefnt er að halda áfram á þessari vegferð." },
        { t: "myndband", src: U + "2025/12/VERTICAL-copy.mov", texti: "Lóðrétt myndband fyrir samfélagsmiðla", lodrett: true }
      ]
    },
    {
      slug: "veitingasala", kafli: "stjorn", heiti: "Veitingasala",
      fyrirsogn: "Veitingasala Keilis", kicker: "Skýrsla stjórnar",
      heimild: "https://2025.keilir.is/veitingasala/",
      blokkir: [
        { t: "inngangur", texti: "Veitingasala er mikilvægur hluti af upplifun félagsmanna og gesta í Golfklúbbnum Keili. Hún er ekki aðeins þjónusta – hún er hluti af félagsstarfinu og styrkir rekstur klúbbsins." },
        { t: "p", texti: "Hrefna sem hefur borið hitann og þunga af þessum rekstri og hefur gert með eindæmum vel, á hún miklar þakkir skyldar fyrir hennar framlag. Einnig þá gegnir lykilhlutverki hún Barbara sem hefur borið hitann og þungann af matseldinni í nú alltof litlu eldhúsi sem á engan hátt annar þeirri umferð sem fer í gegnum þetta litla eldhús. Það má því segja að það séu unnin kraftaverk á hverjum degi við erfiðar aðstæður." },
        { t: "myndband", src: U + "2025/12/dronavideo_skali.mp4", texti: "Golfskáli Keilis úr lofti" },
        { t: "p", texti: "Það er ánægjulegt að sjá það í viðhorfskönnuninni að veitingasalan fái mjög góða einkunn og er vel yfir okkar lágmarksviðmiðunum sem settar eru í henni, þannig að almenn ánægja félagsmanna mælist af þessari starfsemi hjá okkur." },
        { t: "tilvitnun", texti: "Veitingasala okkar er meira en matur og drykkur – hún er hluti af heildarupplifuninni og styrkir bæði samfélagið okkar og rekstur klúbbsins." }
      ]
    },
    {
      slug: "tagmarshal", kafli: "stjorn", heiti: "TagMarshal",
      fyrirsogn: "TagMarshal", kicker: "Skýrsla stjórnar · Leikhraði",
      heimild: "https://2025.keilir.is/tagmarshal/",
      blokkir: [
        { t: "inngangur", texti: "Á síðasta sumri var tekin upp tæknilausnin Tagmarshal til að fylgjast með leikhraða á golfvellinum okkar. Áætlanir okkar gerðu ráð fyrir að afhending tækjanna yrði fyrir sumarið en tafir á afhendingu gerðu það að verkum að á miðju sumri kom hluti af græjunum til landsins. Það var ekki svo fyrr en eftir lokun golfvallanna að restin var afhent." },
        { t: "p", texti: "Þetta hafði þau áhrif að það gekk illa að stilla kerfið af og láta það virka eins og best verður á kosið, einnig var þjálfun starfsfólks ábótavant. Þrátt fyrir þessa byrjunarerfiðleika verður að viðurkennast að mikil reynsla og lærdómur fékkst af þessum tíma sem mun nýtast okkur betur á næsta ári." },
        { t: "myndband", src: U + "2025/12/HORIZONTAL-YODECK.mov", texti: "TagMarshal á Hvaleyrarvelli" },
        { t: "tolur", atridi: [{ tala: "4:30", texti: "hámarkstími á hring 2025" }, { tala: "4:15", texti: "markmið fyrir 2026" }] },
        { t: "p", texti: "Í grunnstillingunum þá var gefinn upp hámarkstími á golfhringinn hjá hverjum ráshóp, 4 klukkustundir og 30 mínútur, það er aftur á móti markmið okkar að stytta þennan tíma á næsta ári. Því með betur uppsettu kerfi þá mun það virka betur og verður auðveldara og réttara að grípa inn í þegar kerfið er ekki að gefa upp vitlausar tafir vegna vanstillinga á kerfinu. Það má því segja að þetta sumar hafi nýst í það að fínstilla kerfið til að fá rétta virkni á það." },
        { t: "p", texti: "Mikilvæg reynsla fékkst á árinu, við sjáum samt mun betur hvar og hvenær við erum að upplifa tafir á golfvellinum og vegna hvers. Í stuttu máli þá eru vandamálin bundin við komu gesta á völlinn okkar, og má bæta því við að þegar félagsmenn eru einungis að leika þá gengur golfið alla jafna mun betur og hraðar." },
        { t: "h3", texti: "Áherslan á næsta sumri" },
        { t: "listi", atridi: ["Þjálfun starfsfólks", "Stytting á hámarkstíma í 4:15", "Viðbragðsáætlun við hægum leik"] }
      ]
    },
    {
      slug: "vidhorfskannanir", kafli: "stjorn", heiti: "Viðhorfs- & þjónustukannanir",
      fyrirsogn: "Viðhorfskönnun Keilis", kicker: "Skýrsla stjórnar",
      heimild: "https://2025.keilir.is/skyrsla-stjornar-vidhorfskannanir/",
      blokkir: [
        { t: "inngangur", texti: "Á hverju ári er send út viðhorfskönnun á félaga í Golfklúbbnum Keili. Niðurstöður hennar eru nýttar til að bæta rekstur klúbbsins og starfið almennt. Helstu niðurstöður viðhorfskönnunar 2025 má nálgast hér fyrir neðan." },
        { t: "pdf", titill: "Viðhorfskönnun 2025", src: U + "2025/12/vidhorfskonnun_2025.pdf", staerd: "1,56 MB" }
      ]
    },
    {
      slug: "vallarstjori", kafli: "stjorn", heiti: "Skýrsla vallarstjóra",
      fyrirsogn: "Golfsumarið 2025", kicker: "Skýrsla vallarstjóra",
      portrett: "myndir/u/2025/12/haukur.jpg", portrettAlt: "Haukur Jónsson yfirvallarstjóri, brosandi í svartri starfsmannapeysu Keilis.", hofundur: "Haukur Jónsson, yfirvallarstjóri", lestur: "13 mín.",
      heimild: "https://2025.keilir.is/skyrsla-stjornar-golfvellirnir/",
      blokkir: [
        { t: "inngangur", texti: "Það er óhætt að segja að golfsumarið 2025 verði minnst sem eitt af stærri og annasömustu sumrum síðustu ára fyrir starfsmenn golfvallarins, þar sem Íslandsmótið var hápunktur fyrir okkur vallarstarfsmenn." },
        { t: "p", texti: "Opnun Hvaleyrarvallar var með breyttu sniði frá undanförnum árum. Hreinsunardagur var haldinn 4. maí, en opnunin sjálf fór ekki fram fyrr en 10. maí. Stóra verkefnið í ár var án efa að rífa niður kaffistofu starfsmanna í áhaldahúsinu. Það var ótrúlegt að sjá kraftinn hjá þeim sem mættu með kúbein og skrúfvélar; kaffistofan og allt rusl sem fylgdi henni hvarf á nokkrum klukkustundum. Ásamt því að vinna í áhaldahúsinu var týnt rusl á vellinum og í umhverfi hans og skáli þrifinn að innan sem utan. Það er ótrúlegt hvað mikið gerist á svona degi og við erum afar þakklát þeim sem mættu." },
        { t: "p", texti: "Vellirnir okkar komu heilt yfir nokkuð vel undan vetri, fyrir utan fyrstu þrjár brautirnar á Hvaleyrarvelli sem fengu ansi góða gusu af sjó og salti yfir sig í apríl, á tíma sem var frekar viðkvæmur fyrir grasið. Þetta varð til þess að við ákváðum að halda annarri flötinni lokaðri og spila á vetrarflöt til 14. júní. Þessi rúmlegi auka mánuður sem flötin fékk kom sér virkilega vel og við erum afar þakklát fyrir þolinmæðina sem kylfingar sýndu okkur." },
        { t: "tilvitnun", texti: "Sjaldan höfum við séð gras vaxa jafn hratt í maí á Íslandi." },
        { t: "p", texti: "Veðrið í maí var hreint ótrúlegt; við sáum hitatölur sem við höfum aldrei séð áður í maí. Þetta hjálpaði okkur mikið við að loka þeim sárum sem voru eftir veturinn. Einnig hjálpaði þessi hiti okkur við nýsáningu á 47 teignum og gönguleiðinni á 11. braut." },
        { t: "p", texti: "Eftir ótrúlegan maímánuð fór aðeins að halla undan fæti í veðrinu og hitatölur fóru að líkjast því sem við erum vön að sjá á Íslandi. Þrátt fyrir það var ágætis gróandi og flestar sáningar heppnuðust vel." },
        { t: "mynd", src: "myndir/u/2025/12/IMG-20251204-WA0014-600x450.jpg", alt: "Vallarstarfsmaður á flatarsláttuvél á Hvaleyrarvelli í morgunsól; sólin lágt á lofti yfir byggðinni.", texti: "" },
        { t: "p", texti: "Helstu verkefni júnímánaðar voru að sá og sanda flatirnar, auk þess sem við vorum dugleg að sanda brautirnar í Hrauninu. Söndun brauta í Hrauninu hefur verið verkefni síðustu þriggja ára og við höfum reynt að sanda þær tvisvar til þrisvar á ári. Það sýndi sig í sumar að þetta verkefni okkar er að skila mjög góðum árangri og verður þessu haldið áfram næstu ár." },
        { t: "p", texti: "Júlímánuður er uppáhaldstími vallarstarfsmanna ár hvert. Þetta er sá mánuður sem við erum virkilega farin að sjá árangur vinnunnar sem við leggjum inn í maí og júní. Sumarið í ár var engin undantekning. Það er kappsmál fyrir okkur að vera klárir með völlinn fyrir Meistaramót og tókst það ágætlega í ár. Þetta er vikan þar sem við mætum kl. 04:00 alla morgna, átta daga í röð, með bros á vör. Það er ótrúlegt hvað þessi vika þjappar saman starfsmennina; allir hafa sama markmið, að gera völlinn okkar sem flottastan yfir þessa viku." },
        { t: "mynd", src: "myndir/u/2025/12/WhatsApp-Image-2025-12-05-at-09.29.24_de6e31ce-600x450.jpg", alt: "Appelsínugul sláttuvél á braut Hvaleyrarvallar; fjallið Keilir og Reykjanesskagi í baksýn.", texti: "" },
        { t: "p", texti: "Eftir Meistaramótið tók við lokaundirbúningur fyrir Íslandsmótið. Það var í ansi mörg horn að líta og ég er afar þakklátur fyrir það góða starfsfólk sem vann á golfvellinum í sumar. Allir voru tilbúnir að vinna nótt sem dag til að gera þetta að flottasta Íslandsmóti fyrr og síðar." },
        { t: "p", texti: "Eitt af verkefnunum og í raun eina breytingin frá Meistaramóti var að safna karga/röffi. Eins og flestir kylfingar tóku eftir sást lítið í röffvélina okkar eftir Meistaramót og var það einfaldlega til þess að ramma völlinn okkar betur inn og koma í veg fyrir að bestu kylfingar gætu slegið út um allt. Þetta tókst vonum framar og við vorum afar ánægð með hvernig við náðum röffinu upp. Við vorum þó dálítið lengi að ná því aftur niður í eðlilega hæð, en það tókst á endanum án þess að skilja mikið gras eftir sig út um allan völl. Við stefnum að því næsta sumar að röffið okkar verði komið aftur í svipaða mynd og við erum vön að sjá hér á Keili." },
        { t: "p", texti: "Eftir Íslandsmótið tók við frekar rólegur tími hjá okkur. Flestir sumarstarfsmenn hættu í kringum 15. ágúst og fóru í skóla. Þá var ekkert annað í stöðunni hjá okkur fastráðnu starfsmönnum en að skella sér upp á sláttuvél og reyna að viðhalda vellinum út tímabilið. Það tókst með ágætum þrátt fyrir mikla umferð á vellinum." },
        { t: "myndir", atridi: [{ src: "myndir/u/2024/12/image00010-600x450.jpeg", alt: "Starfsmenn endurgera glompur: hrífa sand og leggja torf, með vinnutæki á brautinni." }, { src: "myndir/u/2025/12/WhatsApp-Image-2025-12-05-at-09.29.31_107d80ac-600x450.jpg", alt: "Tvær nýfrágengnar pottglompur á braut undir skýjuðum himni." }] },
        { t: "p", texti: "Í september og október hefur oft verið meira að gera í framkvæmdum. Þar sem árið í ár var frekar annasamt hjá okkur var alveg kærkomið að vera með framkvæmdir í lágmarki og byrja snemma að safna kröftum fyrir 2026 tímabilið. Við byrjuðum þó á nýju teigasetti á 9. braut á Sveinskotsvelli og nýrri akstursleið frá 16. braut uppá 17. teiga. Hvaleyrarvöllur lokaði formlega 21. október en Sveinskotsvöllur verður opinn eitthvað lengur út árið á meðan veður leyfir." },
        { t: "h2", texti: "Starfsmenn" },
        { t: "p", texti: "Guðbjartur Ísak Ásgeirsson hætti störfum í byrjun árs eftir að hafa helgað allan sinn starfsferil golfvellinum. Við þökkum honum kærlega fyrir frábært starf og ómetanlegt framlag í gegnum árin og óskum honum velfarnaðar í framtíðinni." },
        { t: "mynd", src: "myndir/u/2025/12/vallarstaff-600x450.jpg", alt: "Vallarstarfsfólk Keilis 2025 saman á grasbrekku, hundur fremst og risaskjár Íslandsmótsins í baksýn.", texti: "Vallarstarfsfólk Keilis 2025" },
        { t: "p", texti: "**Nýr vélvirki:** Sveinn Ingi Nilsen var ráðinn sem vélvirki. Sveinn hefur verið með smurolíu og glussa undir nöglunum í 40 ár og er afar reynslumikill á sviði vélaviðgerða." },
        { t: "p", texti: "Einnig endurheimtum við Christopher Elrick (Chris) aftur, en hann hefur síðustu ár unnið að uppbyggingu á nýju holunum í Brautarholti. Hann er virkilega fær gröfumaður sem mun nýtast okkur einstaklega vel í komandi framkvæmdum. Auk fastamanna voru það svo þeir Bjarki Freyr Ragnarsson og Helgi Snær Björgvinsson sem unnu með okkur í vetur við uppbyggingu á nýrri starfsmannaaðstöðu." },
        { t: "tolur", atridi: [{ tala: "19", texti: "starfsmenn á vellinum í sumar" }, { tala: "14", texti: "með tímabundna ráðningu" }, { tala: "5", texti: "fastráðnir" }] },
        { t: "nofn", titill: "Fastráðnir starfsmenn", atridi: ["Haukur Jónsson", "Rúnar Geir Gunnarsson", "Ingibergur Alex Elvarsson", "Sveinn Ingi Nilsen", "Christopher James Elrick"] },
        { t: "nofn", titill: "Starfsmenn með tímabundna ráðningu", atridi: ["Arnór Egill Einarsson", "Bjarki Freyr Ragnarsson", "Hannes Ívar Ingólfsson", "Haraldur Breki Davíðsson", "Heiðar Bjarki Davíðsson", "Helgi Marinó Kristófersson", "Helgi Snær Björgvinsson", "Helgi Valur Ingólfsson", "Jón Örn Ingólfsson", "Kristján Ólafsson", "Magnús Ingi Halldórsson", "Markús Breki Steinsson", "Tristan Snær Daníelsson", "Þorsteinn Ómar Ágústsson"] },
        { t: "h2", texti: "Útseld þjónusta" },
        { t: "p", texti: "Útseld þjónusta klúbbsins hefur verið svipuð síðustu ár. Helstu verkefni eru umsjón með knattspyrnuvöllum í Hafnarfirði. Einnig sjáum við um að sanda alla knattspyrnuvelli fyrir Íþrótta- og tómstundarsvið Reykjavíkur að vori og gata þá að hausti. Brýningarþjónustan okkar heldur áfram að blómstra og voru brýnd **300 sláttukefli** á síðasta ári fyrir aðra klúbba en Keili. Þetta verkefni heldur okkur vel við efnið yfir vetrartímann." },
        { t: "mynd", src: "myndir/u/2025/12/IMG-20251204-WA0011-600x450.jpg", alt: "Nýslegin, röndótt grasflöt knattspyrnuvallar í Hafnarfirði; knatthús í baksýn.", texti: "" },
        { t: "h2", texti: "Nýframkvæmdir" },
        { t: "p", texti: "Þrátt fyrir mjög annasamt ár var ekki slegið slöku við í framkvæmdum. Helstu framkvæmdir á Hvaleyrarvelli voru nýir teigar á 11. og 12. braut ásamt gönguleiðum. Við ákváðum að fara nýjar leiðir í gönguleiðunum og prófuðum að nota hybrid mottu sem grasið vex svo í gegnum. Þetta tókst vonum framar og verður þetta að öllum líkindum leiðin sem við munum fara í framtíðinni á vellinum. Þar sem veðrið hefur leikið við okkur í haust, fyrir utan smá snjó í október, fórum við í að laga akstursleiðina frá 16. braut og upp að 17. teigum. Þessi akstursleið reyndist kylfingum oft erfið í sumar þar sem mikill halli var á henni. Nú er búið að slétta hana og verður hún byggð upp eins og gönguleiðirnar á vellinum. Einnig var farið í ný teigasett á Sveinskoti eins og hefur komið fram hér að ofan." },
        { t: "myndir", atridi: [{ src: "myndir/u/2025/12/IMG-20251204-WA0050-600x450.jpg", alt: "Smágrafa við framkvæmdir á nýjum teig; vökvunarlagnir og verkfæri í opnum skurði og sjór í baksýn." }, { src: "myndir/u/2025/12/IMG-20251204-WA0054-600x450.jpg", alt: "Nærmynd af nýju grasi að spretta á nýjum teig; sjór og byggð í baksýn." }] },
        { t: "h2", texti: "Lokaorð" },
        { t: "p", texti: "Það er óhætt að segja að golfárið 2025 verði lengi í minni haft. Árið einkenndist af samheldni starfsfólks og frábærum árangri á öllum sviðum. Íslandsmótið var hápunktur sumarsins og sýndi vel þann kraft og metnað sem býr í starfsfólki vallarins. Þrátt fyrir áskoranir í veðri og mikla umferð á völlunum tókst okkur að halda þeim í toppstandi og framkvæma fjölmörg umbótaverkefni." },
        { t: "p", texti: "Ég vil sérstaklega þakka öllu starfsfólki, bæði þeim sem voru með okkur tímabundið og þeim sem eru fastir starfsmenn, fyrir ómetanlegt framlag og jákvætt viðhorf. Samvinna og dugnaður ykkar gerir okkur kleift að halda áfram að bæta völlinn og þjónustuna ár frá ári." },
        { t: "p", texti: "Við horfum björtum augum til framtíðar og stefnum að því að gera næsta ár enn betra, með áframhaldandi nýjungum og vandaðri umhirðu. Takk fyrir samstarfið á árinu sem er að líða og hlökkum til að takast á við ný verkefni saman á komandi ári." },
        { t: "undirskrift", nafn: "Haukur Jónsson", titill: "Yfirvallarstjóri Keilis, f.h. vallarstarfsmanna" }
      ]
    },

    // ───────── ÍÞRÓTTASTARF ─────────
    {
      slug: "ithrottastarf", kafli: "ithrottir", heiti: "Íþróttastarf Keilis",
      fyrirsogn: "Flottur stígandi", kicker: "Íþróttastarf Keilis",
      hofundur: "Birgir Björn Magnússon, íþróttastjóri Keilis",
      heimild: "https://2025.keilir.is/ithrottastarf/",
      blokkir: [
        { t: "inngangur", texti: "Í þessari skýrslu er hægt að sjá tölulegar upplýsingar um fjölda iðkenda á æfingum, íslandsmeistaratitla, sigra og verðlaunapalla í íþróttastarfinu og þátttöku í mótum fullorðinna, ungmenna og barna." },
        { t: "p", texti: "Hægt er að sjá stíganda í starfinu sem átt sér stað árið 2025 með fjölgun iðkenda og bættum árangri. Þessi stígandi kemur frá auknum áhuga og metnaði kylfinga okkar sem er bersýnilegur í æfingaaðstöðum klúbbsins þar sem iðkendur okkar æfa sig á degi hverjum." },
        { t: "p", texti: "Okkar helsta hlutverk sem íþróttastarf er að varðveita og rækta þennan áhuga og metnað iðkenda okkar á íþróttinni til þess að halda þessum stíganda til framtíðar með enn meiri fjölgun iðkenda, fleiri keppendum og bættum árangri." },
        { t: "undirsidur", atridi: [
          { heiti: "Ársskýrsla íþróttastjóra", slug: "ithrottastjori" }, { heiti: "Nefndir og ráð", slug: "nefndir-rad" }, { heiti: "Íþróttafólk Hafnarfjarðar", slug: "ithrottafolk" }, { heiti: "Árangur og þátttaka", slug: "arangur" }, { heiti: "Meistaramót 2025", slug: "meistaramot" }] }
      ]
    },
    { slug: "ithrottastjori", kafli: "ithrottir", heiti: "Ársskýrsla íþróttastjóra", stada: "vantar", heimild: "https://2025.keilir.is/arsskyrslaithrottastjora/", blokkir: [] },
    { slug: "nefndir-rad", kafli: "ithrottir", heiti: "Nefndir og ráð", stada: "vantar", heimild: "https://2025.keilir.is/arsskyrsla-ithrottastarf-nefndir-rad/", blokkir: [] },
    { slug: "ithrottafolk", kafli: "ithrottir", heiti: "Íþróttafólk Hafnarfjarðar", stada: "vantar", heimild: "https://2025.keilir.is/ithrottastarf-ithrottafolk-hafnarfjardar/", blokkir: [] },
    { slug: "arangur", kafli: "ithrottir", heiti: "Árangur og þátttaka", stada: "vantar", heimild: "https://2025.keilir.is/ithrottastarf-arangur/", blokkir: [] },
    { slug: "meistaramot", kafli: "ithrottir", heiti: "Meistaramót 2025", stada: "vantar", heimild: "https://2025.keilir.is/ithrottastarf-meistaramot/", blokkir: [] },

    // ───────── FÉLAGSSTARF ─────────
    {
      slug: "felagsstarf", kafli: "felagsstarf", heiti: "Félagsstarf Keilis",
      fyrirsogn: "Félagsstarf Keilis", kicker: "Félagsstarf",
      heimild: "https://2025.keilir.is/felagsstarf/",
      blokkir: [
        { t: "inngangur", texti: "Golf er í eðli sínu einstaklingsíþrótt, en styrkur Keilis felst í samfélaginu sem myndast í kringum klúbbinn. Í Keili hefur félagsstarf gegnt lykilhlutverki í að skapa umhverfi þar sem allir geta fundið sér stað – hvort sem þeir eru byrjendur, keppnismenn eða félagsmenn sem sækja í félagsskap og útivist." },
        { t: "p", texti: "Félagsstarf er brúin milli einstaklinga og klúbbsins. Með skipulögðum viðburðum, mótum og samverustundum eykst samkennd og tengsl milli félagsmanna. Þetta styrkir ekki aðeins félagslega hlið golfíþróttarinnar, heldur eykur ánægju og tryggð við klúbbinn." },
        { t: "h3", texti: "Dæmi um viðburði á árinu" },
        { t: "listi", atridi: ["**Hreinsunardagurinn** – stórviðburður vorsins", "Bikarkeppni Keilis", "Mótaröð Keiliskvenna", "Mótaröð 65+", "Íslandsmótið í golfi", "Jónsmessumót Keilis", "Meistaramót Keilis", "**Bændaglíma Keilis** – stórviðburður haustsins", "**Skötuveisla Keilis** – vetrarviðburður", "**Jólahlaðborð Keilis** – vetrarviðburður"] },
        { t: "p", texti: "Þetta eru allt mikilvægir viðburðir í að halda á lofti félagsstarfi innan Keilis og tökum við ávallt vel í allar ábendingar um það sem betur má fara eða bæta í því starfi." },
        { t: "undirsidur", atridi: [{ heiti: "Mótahald og skemmtanir", slug: "motahald" }, { heiti: "65+ starfið", slug: "eldri" }, { heiti: "Kvennastarfið", slug: "kvennastarf" }, { heiti: "Samstarf við aðra klúbba", slug: "samstarf" }] }
      ]
    },
    { slug: "motahald", kafli: "felagsstarf", heiti: "Mótahald og skemmtanir", stada: "vantar", heimild: "https://2025.keilir.is/felagsstarf-motahald-skemmtanir/", blokkir: [] },
    { slug: "eldri", kafli: "felagsstarf", heiti: "65+ starfið", stada: "vantar", heimild: "https://2025.keilir.is/felagsstarf-eldri-kylfingar", blokkir: [] },
    { slug: "kvennastarf", kafli: "felagsstarf", heiti: "Kvennastarfið", stada: "vantar", heimild: "https://2025.keilir.is/felagsstarf-kvennanefnd/", blokkir: [] },
    { slug: "samstarf", kafli: "felagsstarf", heiti: "Samstarf við aðra klúbba", stada: "vantar", heimild: "https://2025.keilir.is/felagsstarf-samstarf-vid-adra-klubba/", blokkir: [] },

    // ───────── ÁRSREIKNINGUR ─────────
    {
      slug: "yfirlit", kafli: "fjarmal", heiti: "Yfirlit",
      fyrirsogn: "Ársreikningur", kicker: "Ársreikningur · Yfirlit",
      heimild: "https://2025.keilir.is/arsreikningur-yfirlit/",
      blokkir: [
        { t: "inngangur", texti: "Rekstur Golfklúbbsins Keilis gekk vel á síðasta rekstrarári, afkoman var betri en áætlanir gerðu ráð fyrir. Mikil aukning í tekjum milli ára vegna lengra rekstrartímabils veitingasölunnar og bættrar afkomu æfingasvæðisins eins og á síðasta ári." },
        { t: "tolur", atridi: [{ tala: "569,3", texti: "mkr. tekjur (474,8 árið 2024)" }, { tala: "525,0", texti: "mkr. gjöld (445,9 árið 2024)" }, { tala: "44,3", texti: "mkr. EBITDA (28,9 árið 2024)" }] },
        { t: "p", texti: "Tekjur á árinu 2025 voru 569,3 mkr. samanborið við 474,8 mkr. árinu áður. Gjöld voru 525,0 mkr. samanborið við 445,9 mkr. á árinu 2024. Tekjur jukust þannig um 21% á móti kostnaði sem jókst um 18%. Hagnaður fyrir afskriftir og fjármagnsliði (EBITDA) var 44,3 mkr. á árinu 2025 samanborið við 28,9 mkr. árinu áður." },
        { t: "sulur", titill: "Tekjur, mkr.", atridi: [{ heiti: "Félagsgjöld", gildi: "228,0", pct: 100 }, { heiti: "Veitingasala", gildi: "102,8", pct: 45 }, { heiti: "Æfingasvæði", gildi: "55,2", pct: 24, aherslu: true }, { heiti: "Seld þjónusta", gildi: "42,9", pct: 19 }, { heiti: "Styrkir og framlög", gildi: "40,6", pct: 18 }, { heiti: "Flatargjöld", gildi: "31,9", pct: 14 }, { heiti: "Aðrar tekjur", gildi: "29,7", pct: 13 }, { heiti: "Mótatekjur", gildi: "23,0", pct: 10 }, { heiti: "Verslun / þjónustuver", gildi: "15,1", pct: 7 }] },
        { t: "sulur", titill: "Gjöld, mkr.", atridi: [{ heiti: "Viðhald og rekstur valla", gildi: "110,7", pct: 100 }, { heiti: "Rekstur veitingasölu", gildi: "101,1", pct: 91 }, { heiti: "Stjórnunarkostnaður", gildi: "60,3", pct: 54 }, { heiti: "Styrkir og þjálfun", gildi: "55,6", pct: 50 }, { heiti: "Útseld þjónusta", gildi: "40,9", pct: 37 }, { heiti: "Vélar", gildi: "36,2", pct: 33 }, { heiti: "Æfingasvæði", gildi: "34,3", pct: 31 }, { heiti: "Fasteignir", gildi: "24,3", pct: 22 }, { heiti: "Verslun / þjónustuver", gildi: "23,8", pct: 22 }, { heiti: "Annar kostnaður", gildi: "13,5", pct: 12 }, { heiti: "Félagaskattur GSÍ", gildi: "12,5", pct: 11 }, { heiti: "Mótagjöld", gildi: "11,8", pct: 11 }] },
        { t: "tenglar", atridi: [{ heiti: "Rekstrarreikningur", slug: "rekstur" }, { heiti: "Efnahagsreikningur", slug: "efnahagur" }, { heiti: "Sjóðstreymi", slug: "sjodstreymi" }, { heiti: "Rekstraráætlun", slug: "aaetlun" }] },
        { t: "pdf", titill: "Ársreikningur 2025 (undirritaður)", src: U + "2025/12/reikningar_undirritadir.pdf", staerd: "PDF" }
      ]
    },
    {
      slug: "rekstur", kafli: "fjarmal", heiti: "Rekstrarreikningur",
      fyrirsogn: "Rekstrarreikningur", kicker: "Ársreikningur",
      heimild: "https://2025.keilir.is/arsreikningur-rekstrarreikningur/",
      blokkir: [
        { t: "h2", texti: "Samantekinn rekstur" },
        { t: "tafla", dalkar: ["", "2025", "2024", "%"], radir: [
          ["Rekstrartekjur samtals", "569.304.451", "474.763.358", "21%"], ["Rekstrargjöld samtals", "525.042.850", "445.857.215", "18%"], { c: ["Hagnaður fyrir afskriftir og fjármagnsliði", "44.261.601", "28.906.143", "53%"], feitt: true }, ["Afskriftir", "11.702.371", "12.178.312", "−4%"], ["Hagnaður fyrir fjármagnsliði", "32.559.230", "16.727.831", "95%"], { c: ["Fjármagnsliðir samtals", "−6.637.695", "−6.333.896", "5%"], feitt: true }, { c: ["Hagnaður ársins", "25.921.535", "10.393.935", "149%"], samtala: true }] },
        { t: "h2", texti: "Rekstrartekjur" },
        { t: "tafla", dalkar: ["", "2025", "2024", "%"], radir: [
          ["Félagsgjöld", "227.977.987", "204.034.975", "12%"], ["Flatargjöld", "31.895.382", "24.878.979", "28%"], ["Mótatekjur", "23.030.300", "17.176.799", "34%"], ["Styrkir og framlög", "40.630.835", "34.610.277", "17%"], ["Tekjur æfingasvæðis", "55.207.391", "32.717.873", "69%"], ["Tekjur verslunar / þjónustuver", "15.137.483", "14.583.651", "4%"], ["Tekjur veitingasölu", "102.829.939", "86.666.857", "19%"], ["Seld þjónusta", "42.885.501", "36.449.495", "11%"], ["Unglingavinna", "0", "", "0%"], ["Aðrar tekjur", "29.709.633", "21.244.451", "40%"]] },
        { t: "h2", texti: "Rekstrargjöld" },
        { t: "tafla", dalkar: ["", "2025", "2024", "%"], radir: [
          ["Félagaskattur GSÍ", "12.474.000", "10.449.250", "19%"], ["Mótagjöld", "11.786.487", "7.296.083", "62%"], ["Styrkir og þjálfunarkostnaður", "55.630.018", "54.010.251", "3%"], ["Rekstur æfingasvæðis", "34.261.442", "21.829.181", "57%"], ["Viðhald og rekstur valla", "110.656.893", "99.798.753", "11%"], ["Viðhald og rekstur véla", "36.206.434", "28.942.058", "25%"], ["Rekstur fasteigna", "24.341.945", "19.446.980", "25%"], ["Stjórnunarkostnaður", "60.306.883", "51.383.751", "17%"], ["Rekstur verslunar / þjónustuvers", "23.832.179", "20.144.129", "18%"], ["Rekstur veitingasölu", "101.107.995", "84.390.740", "20%"], ["Rekstur útseldrar þjónustu", "40.904.630", "33.493.923", "22%"], ["Unglingavinna", "0", "0", "0%"], ["Annar kostnaður", "13.533.945", "12.272.116", "10%"]] }
      ]
    },
    {
      slug: "efnahagur", kafli: "fjarmal", heiti: "Efnahagsreikningur",
      fyrirsogn: "Efnahagsreikningur", kicker: "Ársreikningur",
      heimild: "https://2025.keilir.is/arsreikningur-efnahagsreikningur/",
      blokkir: [
        { t: "tolur", atridi: [{ tala: "894,0", texti: "mkr. eignir alls" }, { tala: "776,8", texti: "mkr. eigið fé" }, { tala: "87%", texti: "eiginfjárhlutfall" }] },
        { t: "h2", texti: "Eignir" },
        { t: "tafla", dalkar: ["", "2025", "2024"], radir: [
          { c: ["Fastafjármunir", "", ""], milli: true }, ["Fasteignir", "373.361.767", "327.065.785"], ["Vélar og bifreiðar", "66.313.433", "69.010.436"], ["Golfvöllur", "431.183.469", "420.847.347"], { c: ["Fastafjármunir samtals", "870.858.669", "816.923.568"], feitt: true },
          { c: ["Veltufjármunir", "", ""], milli: true }, ["Birgðir", "13.285.718", "11.682.036"], ["Viðskiptakröfur", "8.292.571", "9.410.988"], ["Handbært fé", "1.585.910", "1.410.929"], { c: ["Veltufjármunir samtals", "23.164.199", "22.503.953"], feitt: true },
          { c: ["Eignir alls", "894.022.868", "839.427.521"], samtala: true }] },
        { t: "h2", texti: "Skuldir og eigið fé" },
        { t: "tafla", dalkar: ["", "2025", "2024"], radir: [
          { c: ["Eigið fé", "", ""], milli: true }, ["Framlag Hafnarfjarðarbæjar", "424.695.254", "387.695.254"], ["Óráðstafað eigið fé í ársbyrjun", "326.198.246", "315.804.311"], ["Hagnaður skv. rekstrarreikningi", "25.921.535", "10.393.935"], { c: ["Eigið fé samtals", "776.815.035", "713.893.500"], feitt: true },
          { c: ["Langtímaskuldir", "", ""], milli: true }, ["Veðskuldir", "62.735.873", "67.992.173"], ["Næsta árs afborgun", "−7.100.250", "−6.950.250"], { c: ["Langtímaskuldir samtals", "55.635.623", "61.041.923"], feitt: true },
          { c: ["Skammtímaskuldir", "", ""], milli: true }, ["Viðskiptaskuldir", "16.025.110", "11.731.108"], ["Hlaupareikningslán", "18.178.515", "21.123.108"], ["Ógreitt vegna starfsfólks", "14.097.065", "18.383.090"], ["Ógreiddur virðisaukaskattur", "6.171.270", "6.304.174"], ["Næsta árs afborgun langtímalána", "7.100.250", "6.950.250"], { c: ["Skammtímaskuldir samtals", "61.572.210", "64.492.098"], feitt: true },
          { c: ["Skuldir og eigið fé alls", "894.022.868", "839.427.521"], samtala: true }] }
      ]
    },
    { slug: "sjodstreymi", kafli: "fjarmal", heiti: "Sjóðstreymi", stada: "vantar", heimild: "https://2025.keilir.is/arsreikningur-sjodstreymi/", blokkir: [] },
    { slug: "aaetlun", kafli: "fjarmal", heiti: "Rekstraráætlun 2026", stada: "vantar", heimild: "https://2025.keilir.is/arsreikningur-rekstraraaetlun/", blokkir: [] },

    // ───────── SÉREFNI ─────────
    { slug: "islandsmot", kafli: "serefni", heiti: "Íslandsmótið í golfi", stada: "vantar", heimild: "https://2025.keilir.is/islmot25/", blokkir: [] }
  ]
};
