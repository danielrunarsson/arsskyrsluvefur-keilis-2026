// Íþróttastarf Keilis 2026 – efni frá Birgi Birni Magnússyni íþróttastjóra (skjalið „Íþróttastarf Keilis 2026 –
// efni í ársskýrslu“, 25. nóvember 2026). Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni;
// hún er flutt inn í síðulistann í efni-2025.js og fer óbreytt í efni-2026.js þegar skipt verður um ár.
// `efnisar` merkir frá hvaða ári efni síðunnar er (sjá innra veftréð). Sömu blokkagerðir og í efnisskránni. Tafla með `snid: "texti"` = textatafla (nöfn og lýsingar).

const M = "myndir/ithrottir-2026/";
const B = "myndir/portrett/birgir-bjorn-magnusson.jpg";
const BALT = "Birgir Björn Magnússon íþróttastjóri, brosandi í hvítri pólóskyrtu Keilis.";
const BNAFN = "Birgir Björn Magnússon, íþróttastjóri Keilis";

const sidur = [
  // ───────── Forsíða kaflans ─────────
  {
    slug: "ithrottastarf", kafli: "ithrottir", heiti: "Íþróttastarf Keilis",
    fyrirsogn: "Sögulegt ", fyrirsognSkaletrun: "keppnisár", kicker: "Íþróttastarf Keilis 2026",
    portrett: B, portrettAlt: BALT, hofundur: BNAFN,
    blokkir: [
      { t: "inngangur", texti: "Árið 2026 var merkilegt keppnisár í sögu Keilis. Óliver Elí Björnsson varð fyrstur Íslendinga til að vinna Opna breska áhugamannamót pilta (R&A Boys' Amateur Championship). Kylfingar Keilis unnu sex Íslandsmeistaratitla í einstaklingskeppni, og Keilir vann báða flokka Íslandsmótsins í holukeppni í fyrsta sinn síðan 2008." },
      { t: "mynd", src: M + "oliver-eli-bikar.jpg", alt: "Óliver Elí Björnsson í rauðri pólóskyrtu krýpur á golfvelli við hlið stórs silfurbikars.", texti: "Óliver Elí Björnsson með bikarinn eftir sigurinn á R&A Boys' Amateur Championship á Gailes Links. Mynd: The R&A" },
      { t: "tolur", atridi: [
        { tala: "246", texti: "iðkendur (230 árið 2025)" },
        { tala: "86", texti: "keppendur á mótaröðum GSÍ" },
        { tala: "73", texti: "verðlaunasæti á skráðum mótum" },
        { tala: "6", texti: "Íslandsmeistaratitlar í einstaklingskeppni" }] },
      { t: "p", texti: "Í þessum hluta skýrslunnar fer íþróttastjóri fyrst yfir árið: fjölda iðkenda, samstarf við nágranna okkar, helstu viðburði, áskoranir og markmið. Þar á eftir er sagt frá Íslandsmeisturum, árangri og þátttöku á mótum, sveitakeppnum, eldri kylfingum, landsliðsfólki og Meistaramóti Keilis. Að lokum er fjallað um þjálfarateymið, forvarnir, nefndir og ráð, tilnefningar til Íþróttafólks Hafnarfjarðar og viðurkenningar Keilis. Við þökkum iðkendum, foreldrum, þjálfurum og sjálfboðaliðum fyrir frábært ár." },
      { t: "h3", texti: "Árið í tölum" },
      { t: "tafla", titill: "Árið í tölum 2026 og 2025", dalkar: ["", "2026", "2025"], radir: [
        ["Iðkendur", "246", "230"],
        ["þar af í barna- og unglingastarfi", "213", "194"],
        ["Börn í Golfleikjaskóla Keilis", "228", "210"],
        ["Keppendur á mótaröðum GSÍ", "86", "70"],
        ["Þátttökur í mótaröðum og sveitakeppnum GSÍ", "178", "138"],
        ["Verðlaunasæti (1.–3. sæti) á skráðum mótum", "73", "59"],
        ["Íslandsmeistaratitlar í einstaklingskeppni", "6", "7"],
        ["Kylfingar í landsliðshópum GSÍ", "5", "5"],
        ["Keppendur á Meistaramóti Keilis", "347", "365"],
        ["Keppendur í GSÍ-keppnum, hver talinn einu sinni", "107", "78"],
        ["Liðsmenn í sveitakeppnum GSÍ", "92", "68"],
        ["Verðlaunasæti á mótaröð þeirra bestu og unglingamótaröðinni", "23", "17"],
        ["Keiliskrakkar á innanfélagsmótaröð með Oddi", "54", "40"],
        ["Þátttökur Keilisfélaga á öldungamótaröð LEK", "105", "97"]] },
      { t: "undirsidur", atridi: [
        { heiti: "Ársskýrsla íþróttastjóra", slug: "ithrottastjori" },
        { heiti: "Íslandsmeistarar 2026", slug: "islandsmeistarar" },
        { heiti: "Árangur á mótum", slug: "arangur" },
        { heiti: "Þátttaka og meðalskor", slug: "thatttaka" },
        { heiti: "Sveitakeppnir", slug: "sveitakeppnir" },
        { heiti: "Landslið og háskólagolf", slug: "landslid" },
        { heiti: "Eldri kylfingar", slug: "eldri-kylfingar" },
        { heiti: "Meistaramót 2026", slug: "meistaramot" },
        { heiti: "Þjálfarar, nefndir og ráð", slug: "nefndir-rad" },
        { heiti: "Viðurkenningar og Íþróttafólk Hafnarfjarðar", slug: "ithrottafolk" }] }
    ]
  },

  // ───────── Ársskýrsla íþróttastjóra ─────────
  {
    slug: "ithrottastjori", kafli: "ithrottir", heiti: "Ársskýrsla íþróttastjóra",
    fyrirsogn: "Aldrei fleiri, ", fyrirsognSkaletrun: "sjaldan betri", snid: "langlestur",
    kicker: "Ársskýrsla íþróttastjóra 2026",
    portrett: B, portrettAlt: BALT, hofundur: BNAFN, lestur: "9 mín.",
    blokkir: [
      { t: "inngangur", texti: "Iðkendum fjölgaði úr 230 í 246 á milli ára, um 7%. Í barna- og unglingastarfi voru 213 iðkendur, samanborið við 194 árið 2025, og 33 iðkendur 18 ára og eldri æfðu með meistaraflokki og fyrsta flokki Keilis. Golfleikjaskóli Keilis var sóttur af 228 börnum á aldrinum 6–12 ára, en þau voru 210 árið 2025. Keppnishópur 50+ hélt áfram með vikulegum æfingum og voru 17 kylfingar í hópnum." },

      { t: "h2", texti: "Iðkendur – Iðkendum fjölgar ár frá ári" },
      { t: "sulur", titill: "Iðkendur Keilis 2021–2026", eining: "iðkendur", hlutfallAf: "iðkendum 2026", atridi: [
        { heiti: "2021", gildi: "159", pct: 64.6 },
        { heiti: "2022", gildi: "184", pct: 74.8 },
        { heiti: "2023", gildi: "199", pct: 80.9 },
        { heiti: "2024", gildi: "211", pct: 85.8 },
        { heiti: "2025", gildi: "230", pct: 93.5 },
        { heiti: "2026", gildi: "246", pct: 100, aherslu: true }] },
      { t: "p", texti: "Iðkendur með greidd æfingagjöld, án golfleikjaskóla. Heimild: Ársskýrsla 2025 (2021–2025) og Abler (2026)." },
      { t: "sulur", titill: "Börn í Golfleikjaskóla Keilis 2021–2026", eining: "börn", hlutfallAf: "börnum 2026", atridi: [
        { heiti: "2021 · 39% stúlkur", gildi: "175", pct: 76.8 },
        { heiti: "2022 · 30% stúlkur", gildi: "150", pct: 65.8 },
        { heiti: "2023 · 32% stúlkur", gildi: "170", pct: 74.6 },
        { heiti: "2024 · 28% stúlkur", gildi: "212", pct: 93 },
        { heiti: "2025 · 29% stúlkur", gildi: "213", pct: 93.4 },
        { heiti: "2026 · 29% stúlkur", gildi: "228", pct: 100, aherslu: true }] },
      { t: "p", texti: "Einstök börn eftir skráningarári samkvæmt Abler. Ársskýrsla 2025 taldi 210 börn það ár." },
      { t: "p", texti: "Stúlkur hafa verið 28–32% barna í Golfleikjaskólanum frá 2022. Í barna- og unglingastarfinu er hlutfallið lægra: 49 af 213 iðkendum voru stúlkur árið 2026 (23%), og í Abler hefur það verið á bilinu 23–28% frá 2022. Þess vegna er fjölgun stúlkna eitt af markmiðum næsta árs." },

      { t: "h2", texti: "Nágrannar – Í góðu sambandi við nágrannana" },
      { t: "p", texti: "Keilir er í góðu sambandi við nágranna sína. Bæði leikskólinn Vesturkot og Hvaleyrarskóli eru í næsta nágrenni við klúbbinn, og börn úr báðum skólum koma nú reglulega til okkar í golf." },
      { t: "p", texti: "**Leikskólagolf.** Leikskólagolf Keilis fór fram einu sinni í viku í Hraunkoti árið 2026. Það var fjörugt og skemmtilegt, og börnin lærðu að leika sér á golfvellinum. Tímabilið 2025–2026 voru iðkendur 17 í tveimur hópum. Nýr árgangur hófst í haust: 14 börn úr leikskólanum Vesturkoti koma á þriðjudagsmorgnum með tveimur kennurum og verða vikulega fram á sumar. Leikskólagolf er ekki talið með í iðkendafjöldanum hér að ofan." },
      { t: "p", texti: "**Golfklúbbur í Holtaseli.** Í haust hófst samstarfsverkefni Keilis og frístundaheimilisins Holtasels í Hvaleyrarskóla. Einu sinni í viku koma börn á aldrinum 6–10 ára úr frístundinni yfir í Keili með starfsmönnum Holtasels, og þar tekur þjálfari frá klúbbnum á móti þeim og kennir þeim golf í um klukkustund. Markmiðið er að auka fjölbreytni í frístundastarfinu og gefa börnum tækifæri til að prófa golf án endurgjalds, bæði þeim sem æfa aðrar íþróttir og þeim sem stunda engar tómstundir. Hugmyndin kviknaði á fundi um samstarf skóla og íþróttafélaga í hverfinu á Ásvöllum í janúar. Verkefnið hlaut 500.000 kr. styrk úr nýjum Menntasjóði Hafnarfjarðar, til kaupa á kylfum og búnaði og til þjálfunar, og nær yfir skólaárið 2026–2027. Í desember munu þjálfararnir heimsækja krakkana í Hvaleyrarskóla og halda með þeim pizzupartý til að gera upp fyrstu önnina." },

      { t: "h2", texti: "Þátttaka og árangur – Fleiri keppendur og fleiri verðlaun" },
      { t: "p", texti: "86 Keilisleikmenn kepptu á mótaröðum GSÍ árið 2026, samanborið við 70 árið 2025 og 63 árið 2024. Mest var fjölgunin á Golf 14, þar sem drengjum fjölgaði úr 14 árið 2025 í 29. Á unglingamótaröðinni voru 23 Keilisleikmenn (17 piltar og 6 stúlkur) og 27 á mótaröð þeirra bestu (20 karlar og 7 konur)." },
      { t: "p", texti: "Á unglingamótaröðinni var Keilir með flesta eða næstflesta keppendur á öllum sex mótum sumarsins: flesta allra klúbba á fyrsta mótinu í Þorlákshöfn og jafnmarga og GKG á öðru mótinu í Mosfellsbæ. Innanfélagsmótaröð barna og unglinga með Golfklúbbnum Oddi hélt áfram með fimm mótum, tveimur á Sveinskotsvelli og þremur á Ljúflingsvelli. Keppt var í flokkum 10, 12, 14 og 18 ára og yngri, og 18 ára flokkurinn var nýr í ár. Á hverju móti kepptu 36–48 krakkar, og alls tók 91 krakki þátt í mótaröðinni. Keiliskrakkarnir voru 54, samanborið við 40 árið 2025, og 37 komu úr Oddi. Auk þess hélt Keilir Golf 14 Sveinskotsmótið um miðjan júlí, og þar kepptu 40 krakkar úr átta klúbbum." },
      { t: "p", texti: "Kylfingar Keilis unnu sex Íslandsmeistaratitla í einstaklingskeppni: tvo í meistaraflokki kvenna, einn í meistaraflokki karla, einn í flokki 50+ og tvo í flokki 15–16 ára. Keilir vann báða flokka Íslandsmótsins í holukeppni í fyrsta sinn síðan 2008, og karlasveit 50+ vann 2. deild og færist upp í 1. deild aftur." },
      { t: "p", texti: "Stærsta afrek ársins var sigur Ólivers Elís Björnssonar á R&A Boys' Amateur Championship á Gailes Links. Hann varð fyrstur Íslendinga til að vinna mótið, sem hefur verið haldið frá 1921 og er eitt sterkasta unglingamót heims. Eftir 36 holu höggleik vann hann sex leiki í holukeppni, meðal annars gegn Evrópumeistara unglinga í undanúrslitum, og sneri úrslitaleiknum við eftir að hafa verið þremur holum undir með sex holur eftir. Sigurinn veitir honum þátttökurétt á The Amateur Championship og í lokaúrtökumóti fyrir The Open á næsta ári. Viku síðar var hann valinn í lið meginlands Evrópu í Jacques Léglise Trophy, aðeins annar Íslendingurinn sem keppir á mótinu, og skilaði 2,5 stigum af fjórum þegar Evrópa vann 14,5–10,5. Alls vann Keilisfólk 26 sigra á skráðum mótum og náði 73 verðlaunasætum (sjá Árangur á mótum); árið 2025 voru verðlaunasætin 59." },
      { t: "p", texti: "Á unglingamótaröðinni náði Keilisfólk 18 verðlaunasætum, þar af sex sigrum. Á fyrsta mótinu, í Þorlákshöfn, komust 14 Keilisleikmenn í gegnum niðurskurð, flestir allra klúbba, og Keilir fékk flest verðlaunasæti. Á öðru mótinu, í Mosfellsbæ, komust 17 Keilisleikmenn í gegnum niðurskurð, flestir allra klúbba. Á Icewear-bikarnum hjá GKG komust 14 Keilisleikmenn í gegnum niðurskurð og Keilisfólk náði þremur verðlaunasætum, þar á meðal sigri Elvu Maríu Jónsdóttur. Á Akureyri í júlí vann Kristín María Valsdóttir sinn fyrsta sigur á mótaröðinni. Hápunkturinn var Íslandsmót unglinga í höggleik á Hvaleyrarvelli í ágúst. Þar komust allir 18 keppendur Keilis í gegnum niðurskurð, flestir allra klúbba, og Keilisfólk náði fjórum verðlaunasætum og tveimur Íslandsmeistaratitlum, fleiri titlum en nokkur annar klúbbur. Á lokamótinu, N1-mótinu hjá GR í september, náði Keilisfólk aftur fjórum verðlaunasætum, þeim næstflestu á eftir GKG." },
      { t: "p", texti: "Guðrún Brá Björgvinsdóttir hafði þátttökurétt á LET Evrópumótaröðinni eftir að hafa endað í 3. sæti á lokaúrtökumótinu í Marokkó í desember 2025. Hún keppti á sjö LET-mótum og einu á LET Access árið 2026, meðal annars Investec SA Women's Open, Amundi German Masters og Lalla Meryem Cup, en komst ekki í gegnum niðurskurð á þeim. Í febrúar varð hún í 3. sæti á NTT Data Pro-Am í Suður-Afríku." },

      { t: "h2", texti: "Viðburðir – Viðburðir ársins hjá barna- og unglingastarfinu" },
      { t: "listi", atridi: [
        "Keppnisferð á Global Junior Golf í Portúgal (PGA Aroeira) í lok mars, þar sem Óliver Elí varð í 2. sæti á fyrra mótinu og 4. sæti á því seinna. Tólf iðkendur Keilis tóku þátt (13 árið 2025).",
        "Æfingaferðir til Spánar strax í kjölfarið: 39 iðkendur fóru til Costa Ballena ásamt 27 foreldrum og 16 iðkendur til Fairplay, alls 55 iðkendur (51 árið 2025).",
        "Landslið: Elva María, Halldór, Markús, Máni Freyr og Óliver Elí voru í landsliðshópi GSÍ. Þrír af fjórum keppendum Íslands á European Young Masters í Valencia komu úr Keili.",
        "Keilir hélt Hvaleyrarbikarinn (17.–19. júlí), Íslandsmót unglinga 15–18 ára í höggleik (20.–22. ágúst), fyrsta keppnisdag Íslandsmóts golfklúbba 12 ára og yngri á Sveinskoti og Golf 14 Sveinskotsmótið (14. júlí).",
        "Móttaka var haldin í golfskálanum fyrir Óliver Elí 18. ágúst og var húsið fullt.",
        "**Álfagaldur**, uppskeruhátíð barna- og unglingastarfsins, fór fram á Sveinskotsvelli 15. september. Tæplega 70 krakkar úr U8–U14 kepptu í tíu blönduðum liðum á tíu stöðvum með golfi og þrautum, til dæmis risadræver, ljósmyndastöð og púttpartýi, og 21 foreldri stóð vaktina í sjálfboðavinnu. Deginum lauk með grilli og verðlaunaafhendingu í Hraunkoti, þar sem verðlaun voru veitt fyrir flesta fugla, flottustu liðsmyndina og flottasta liðsnafnið. Golfklúbburinn Keilir, Arion banki og Par Golf lögðu til verðlaun.",
        "**Riddarinn** er keppni núverandi, verðandi og fyrrverandi meistaraflokkskylfinga Keilis, sem skiptast í yngra og eldra lið. Leikið er að hætti Ryder-bikarsins, með betri bolta og tvímenningi, og mótið var fyrst leikið árið 1987. Riddarinn var leikinn laugardaginn 26. september í einstaklega góðu veðri. Þrjátíu og sex kylfingar tóku þátt, 18 í hvoru liði. Henning Darri Þórðarson var fyrirliði eldra liðsins og Hjalti Jóhannsson liðsstjóri þess yngra. Gamlar stórstjörnur létu sjá sig í eldra liðinu, sem vann þriðja árið í röð."] },
      { t: "mynd", src: M + "aefingaferd-spann.jpg", alt: "Um fjörutíu iðkendur Keilis í dökkum fötum stilla sér upp á golfvelli á Spáni, með pálmatré og hótel í baksýn.", texti: "Iðkendur Keilis í æfingaferðinni á Spáni í vor. Mynd: keilir.is" },
      { t: "mynd", src: M + "mottaka-oliver-eli.jpg", alt: "Maður í jakkafötum afhendir Óliver Elí blómvönd í golfskálanum; á skjá í bakgrunni er mynd af golfvelli.", texti: "Móttaka fyrir Óliver Elí í golfskála Keilis 18. ágúst. Mynd: keilir.is" },
      { t: "mynd", src: M + "alfagaldur.jpg", alt: "Krakkar mynda mannlegan pýramída á grasi við Sveinskotsvöll; Hafnarfjörður í baksýn.", texti: "Krakkar á Álfagaldri, uppskeruhátíð barna- og unglingastarfsins, á Sveinskotsvelli. Mynd: sjálfboðaliði" },
      { t: "mynd", src: M + "riddarinn.jpg", alt: "Um fjörutíu kylfingar, sitjandi og standandi, í hópmynd á grasbrekku við golfvöllinn.", texti: "Keppendur og liðsstjórar í Riddaranum 2026. Eldra liðið vann þriðja árið í röð. Mynd: sjálfboðaliði" },

      { t: "h2", texti: "Áskoranir – Hreinskilin um áskoranirnar" },
      { t: "p", texti: "Áskoranirnar eru líka nokkrar og við viljum vera hreinskilin um þær:" },
      { t: "listi", atridi: [
        "**Fáar stúlkur.** Stúlkur eru 49 af 213 iðkendum í barna- og unglingastarfi, eða 23%, og konum á mótaröðum GSÍ fækkaði úr 21 í 20 milli ára. Við þurfum sérstakt átak til að fá fleiri stúlkur í golfið og halda þeim.",
        "**Brottfall unglinga.** Alls hættu 17,2% iðkenda á aldrinum 13–16 ára milli ára. Markmið okkar er að lækka það í 10%.",
        "**Vöxturinn reynir á aðstöðu og þjálfara.** Iðkendum hefur fjölgað um 55% frá 2021 og á almennum æfingum eru allt að 12 iðkendur á hvern þjálfara. Aðstaðan í Hraunkoti og þjálfarateymið þurfa að vaxa með.",
        "**Kostnaður fjölskyldna.** Keppnis- og landsliðsferðir erlendis eru dýrar fyrir fjölskyldur og kosta fjarvistir frá skóla."] },

      { t: "h2", texti: "Aðstaða – Aðstaða og framkvæmdir" },
      { t: "p", texti: "Fyrsta skóflustungan að stækkun golfskálans var tekin 30. september og samningur um framkvæmdir undirritaður. Keilir og Golfklúbburinn Setberg undirbúa einnig nýtt golfsvæði á Snókalöndum. Á árinu breyttum við fundarsalnum á efri hæð Hvalalaugarinnar í styrktarherbergi, svo iðkendur hafa nú aðstöðu til styrktaræfinga á staðnum." },
      { t: "mynd", src: M + "styrktarherbergi.jpg", alt: "Styrktarherbergi með viðargólfi: lyftingarekki, lóð og handlóð á standi og sjónvarpsskjár á vegg.", texti: "Nýja styrktarherbergið á efri hæð Hvalalaugarinnar. Mynd: Birgir Björn Magnússon" },
      { t: "mynd", src: M + "framkvaemdir-golfskali.jpg", alt: "Loftmynd af golfskála Keilis og bílastæði; grafa og jarðrask við skálann þar sem stækkunin hefst.", texti: "Framkvæmdir við stækkun golfskálans hafnar, 6. október. Mynd: keilir.is" },

      { t: "h2", texti: "Stefna og markmið – Markmiðin fyrir 2027" },
      { t: "p", texti: "Meginmarkmið íþróttastarfs Keilis er að gefa öllum jöfn tækifæri til að stunda golf, hvort sem stefnan er að hafa gaman með vinum eða að keppa á meðal þeirra bestu. Starfið byggir á þremur gildum: vellíðan, virðingu og framsækni. Vellíðan þýðir að iðkendum líði vel í golfinu og vilji halda áfram. Virðing sést í framkomu innan vallar sem utan, gagnvart félögum, þjálfurum, mótherjum og vellinum. Framsækni þýðir að við setjum okkur markmið, mælum hvort við náum þeim og lærum af því sem gengur ekki." },
      { t: "p", texti: "Vorið 2027 förum við í þrjár æfingaferðir: eina fyrir 14 ára og yngri, aðra fyrir 15–18 ára og þá þriðju fyrir meistaraflokk. Ferðir yngri iðkenda verða vikuna eftir páskafrí, að öllum líkindum á Costa Ballena og Novo Sancti Petri." },
      { t: "p", texti: "Árið 2027 kemur út ný handbók fyrir íþróttastarf Keilis, sem tekur við af núverandi handbók þegar hún rennur út í lok árs 2027. Nýja handbókin er skrifuð af nýju þjálfarateymi, og í henni verða áherslubreytingar síðustu ára festar í sessi fyrir tímabilið 2028–2032." },
      { t: "p", texti: "Fyrir árið 2027 setjum við okkur eftirfarandi markmið, út frá því sem tölur síðustu ára sýna okkur:" },
      { t: "listi", atridi: [
        "**Fleiri stúlkur.** Fjölga stúlkum um 30%: í barna- og unglingastarfi úr 49 í 64 og konum og stúlkum á mótaröðum GSÍ úr 20 í 26.",
        "**Minna brottfall.** Lækka brottfall 13–16 ára úr 17,2% í undir 15%, á leiðinni að 10%.",
        "**Þjálfun.** Allir í þjálfarateyminu ljúki að minnsta kosti Þjálfaranámskeiði ÍSÍ 1. stigi (tíu af tólf í ár).",
        "**Halda áfram á unglingamótaröðinni.** Unglingarnir náðu lægsta meðalskori og flestum verðlaunasætum síðustu sex ára. Markmiðið er að halda því stigi þegar stór hópur færist upp í flokk 17–18 ára."] },

      { t: "h2", texti: "Lokaorð – Áfram Keilir!" },
      { t: "p", texti: "Við höfum aldrei verið fleiri og árangurinn hefur sjaldan verið betri. Nú er verkefnið að tryggja að allir finni sér stað í starfinu og að við vöxum án þess að gefa eftir í gæðum." },
      { t: "undirskrift", nafn: "Birgir Björn Magnússon", titill: "Íþróttastjóri Keilis" }
    ]
  },

  // ───────── Íslandsmeistarar ─────────
  {
    slug: "islandsmeistarar", kafli: "ithrottir", heiti: "Íslandsmeistarar 2026",
    fyrirsogn: "Sex ", fyrirsognSkaletrun: "Íslandsmeistaratitlar", kicker: "Íslandsmeistarar Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "Keilir vann sex Íslandsmeistaratitla í einstaklingskeppni árið 2026. Guðrún Brá vann tvöfalt og varð Íslandsmeistari í höggleik í fimmta sinn. Árið 2025 voru titlarnir sjö." },
      { t: "mynd", src: M + "gudrun-bra-islandsmeistari.jpg", alt: "Guðrún Brá Björgvinsdóttir brosir og lyftir Íslandsmeistarabikarnum hátt á loft á golfvelli.", texti: "Guðrún Brá Björgvinsdóttir með Íslandsmeistarabikarinn 2026. Mynd: mbl.is" },
      { t: "tafla", snid: "texti", titill: "Íslandsmeistarar Keilis 2026", dalkar: ["Íslandsmeistari", "Mót", "Flokkur", "Athugasemd"], radir: [
        ["Guðrún Brá Björgvinsdóttir", "Íslandsmótið í holukeppni, 19.–21. júní", "Meistaraflokkur kvenna", "Efst eftir höggleikshlutann; vann Heiðu Rakel Rafnsdóttur (GM) í úrslitum; þriðji titillinn (2017, 2021, 2026)"],
        ["Birgir Björn Magnússon", "Íslandsmótið í holukeppni, 19.–21. júní", "Meistaraflokkur karla", "Úrslitaleikur á Hólmsvelli í Leiru, jafn eftir 18 holur; vann Guðmund Ágúst Kristjánsson (GR) með fugli á fyrstu holu bráðabana; fyrsti titill hans"],
        ["Þórdís Geirsdóttir", "Íslandsmót eldri kylfinga, Kiðjaberg, 16.–18. júlí", "Konur 50+", "Varði titilinn; 249 högg (81-86-82), vann með 3 höggum; Ragnheiður Sigurðardóttir (GK) önnur"],
        ["Guðrún Brá Björgvinsdóttir", "Íslandsmótið í golfi, Korpúlfsstaðir, 6.–9. ágúst", "Meistaraflokkur kvenna", "283 högg, 1 undir pari, vann með 5 höggum; fimmti titillinn í höggleik (2018, 2019, 2020, 2025, 2026); fór fram úr föður sínum, Björgvini Sigurbergssyni, og er næstsigursælasta konan í sögu mótsins"],
        ["Halldór Jóhannsson", "Íslandsmót unglinga í höggleik, Hvaleyrarvöllur, 20.–22. ágúst", "Piltar 15–16 ára", "Vann með einu höggi á 223 höggum; lék 67 högg á Íslandsmótinu í golfi, aðeins 15 ára"],
        ["Elva María Jónsdóttir", "Íslandsmót unglinga í höggleik, Hvaleyrarvöllur, 20.–22. ágúst", "Stúlkur 15–16 ára", "229 högg (76-75-78), vann með 18 höggum; einnig stigameistari ársins"]] },
      { t: "p", texti: "Auk þess vann Óliver Elí Björnsson R&A Boys' Amateur Championship á Gailes Links á 37. holu gegn Ludwig Libera frá Svíþjóð." },
      { t: "mynd", src: M + "gudrun-bra-holukeppni.jpg", alt: "Guðrún Brá Björgvinsdóttir í ljósblárri peysu heldur á bikar og blómvendi á golfvelli umkringdum skógi.", texti: "Guðrún Brá Björgvinsdóttir, Íslandsmeistari í holukeppni 2026. Mynd: keilir.is" },
      { t: "mynd", src: M + "birgir-bjorn-holukeppni.jpg", alt: "Birgir Björn Magnússon stendur á flöt með bikar og blómvönd; fánar mótsins og hafið í baksýn.", texti: "Birgir Björn Magnússon, Íslandsmeistari í holukeppni 2026. Mynd: keilir.is" },
      { t: "mynd", src: M + "islandsmot-eldri.jpg", alt: "Sjö verðlaunahafar með bikara og blómvendi standa í röð á golfvelli á Kiðjabergi.", texti: "Verðlaunahafar á Íslandsmóti eldri kylfinga á Kiðjabergi. Þórdís Geirsdóttir varði titilinn í flokki kvenna 50+. Mynd: golf.is" },
      { t: "mynd", src: M + "islandsmeistarar-unglinga.jpg", alt: "Fjórir ungir Íslandsmeistarar með bikara standa saman á Hvaleyrarvelli.", texti: "Íslandsmeistarar á Íslandsmóti unglinga í höggleik á Hvaleyrarvelli, þar á meðal Elva María Jónsdóttir og Halldór Jóhannsson (15–16 ára). Mynd: golf.is" }
    ]
  },

  // ───────── Árangur á mótum ─────────
  {
    slug: "arangur", kafli: "ithrottir", heiti: "Árangur á mótum",
    fyrirsogn: "73 ", fyrirsognSkaletrun: "verðlaunasæti", kicker: "Árangur tímabilsins 2026",
    blokkir: [
      { t: "inngangur", texti: "Keilisfólk náði 73 verðlaunasætum (1.–3. sæti) á skráðum mótum 2026, þar af 26 sigrum. Árið 2025 voru verðlaunasætin 59." },
      { t: "p", texti: "Sæti á GSÍ-mótaröðinni, unglingamótaröðinni, LEK-mótaröðinni og Íslandsmótum eru yfirfarin í GolfBox. Golf 14-mótin hjá GKG, GM, GA, Keili og Oddi eru líka yfirfarin í GolfBox. Sveitakeppnir, Golf 14 á Nesinu og mót erlendis eru úr fréttum. Þegar keppt er bæði í aldursflokki og sameinuðum flokki (t.d. 15–18 ára) er aðeins aldursflokkurinn talinn, og Meistaramót Keilis telst ekki með enda hefur það sinn eigin kafla." },
      { t: "sulur", titill: "Verðlaunasæti í höggleiksmótum GSÍ 2021–2026", eining: "verðlaunasæti", hlutfallAf: "sætum 2026", atridi: [
        { heiti: "2021 · unglinga 5, þeirra bestu 5", gildi: "10", pct: 43.5 },
        { heiti: "2022 · unglinga 2, þeirra bestu 7", gildi: "9", pct: 39.1 },
        { heiti: "2023 · unglinga 4, þeirra bestu 7", gildi: "11", pct: 47.8 },
        { heiti: "2024 · unglinga 7, þeirra bestu 2", gildi: "9", pct: 39.1 },
        { heiti: "2025 · unglinga 14, þeirra bestu 3", gildi: "17", pct: 73.9 },
        { heiti: "2026 · unglinga 18, þeirra bestu 5", gildi: "23", pct: 100, aherslu: true }] },
      { t: "p", texti: "Til að bera saman við fyrri ár eru hér aðeins talin höggleiksmót á mótaröð þeirra bestu og unglingamótaröðinni. Þar náði Keilisfólk 23 verðlaunasætum í ár, fleiri en nokkurt ár frá 2021, og 18 þeirra komu á unglingamótaröðinni. Heimild: GolfBox." },
      { t: "mynd", src: M + "lexus-bikarinn.jpg", alt: "Tveir verðlaunahafar með bikara, blómvendi og verðlaunaskjöl fyrir framan auglýsingaskilti Lexus-bikarsins.", texti: "Verðlaunahafar á Lexus-bikarnum hjá GKG. Daníel Ísak Steinarsson vann þar sinn fyrsta sigur á mótaröð þeirra bestu. Mynd: keilir.is" },
      { t: "mynd", src: M + "golf14-sveinskot.jpg", alt: "Fjögur börn með verðlaunapeninga um hálsinn standa saman innandyra.", texti: "Verðlaunahafar á Golf 14 Sveinskotsmótinu 14. júlí. Mynd: keilir.is" },
      { t: "h3", texti: "Öll verðlaunasæti Keilisfólks 2026" },
      { t: "tafla", snid: "texti", titill: "Verðlaunasæti Keilisfólks 2026", dalkar: ["Nafn", "Mót", "Keppnisstaður", "Flokkur", "Sæti"], radir: [
        ["Óliver Elí Björnsson", "Lok mars · Global Junior Golf, fyrra mót", "PGA Aroeira, Portúgal", "Piltar", "2"],
        ["Axel Bóasson", "15. maí · Reykjanesmót GS & GSG (GSÍ)", "Golfklúbbur Suðurnesja", "Karlar", "2"],
        ["Elva María Jónsdóttir", "23. maí · Unglingamótaröðin, mót 1", "Þorlákshöfn", "Stúlkur 15–16", "2"],
        ["Máni Freyr Vigfússon", "23. maí · Unglingamótaröðin, mót 1", "Þorlákshöfn", "Piltar 15–16", "T2"],
        ["Halldór Jóhannsson", "23. maí · Unglingamótaröðin, mót 1", "Þorlákshöfn", "Piltar 15–16", "T2"],
        ["Óliver Elí Björnsson", "23. maí · Unglingamótaröðin, mót 1", "Þorlákshöfn", "Piltar 17–18", "2"],
        ["Þórdís Geirsdóttir", "25. maí · LEK 1 – Opna Icewear", "Þorlákshöfn", "Besta skor, konur bláir teigar", "2"],
        ["Sigurður Aðalsteinsson", "25. maí · LEK 1 – Opna Icewear", "Þorlákshöfn", "Besta skor, karlar bláir teigar", "2"],
        ["Halldór Ásgrímur Ingólfsson", "25. maí · LEK 1 – Opna Icewear", "Þorlákshöfn", "Besta skor, gulir teigar", "2"],
        ["Sólveig Arnardóttir", "Lok maí · Golf 14, mót 1", "Nesvöllur", "Stúlkur 13–14", "3"],
        ["Elva María Jónsdóttir", "30. maí · Unglingamótaröðin, mót 2", "Mosfellsbær", "Stúlkur 15–16", "1"],
        ["Máni Freyr Vigfússon", "30. maí · Unglingamótaröðin, mót 2", "Mosfellsbær", "Piltar 15–16", "3"],
        ["Þórdís Geirsdóttir", "31. maí · LEK 2 – Blue Lagoon Open", "Húsatóftavöllur, Grindavík", "Besta skor, konur 50+", "1"],
        ["Ragnheiður Sigurðardóttir", "31. maí · LEK 2 – Blue Lagoon Open", "Húsatóftavöllur, Grindavík", "Besta skor, konur 50+", "2"],
        ["Kristján V. Kristjánsson", "31. maí · LEK 2 – Blue Lagoon Open", "Húsatóftavöllur, Grindavík", "Besta skor, karlar 65+", "T3"],
        ["Elva María Jónsdóttir", "4. júní · Unglingamótaröðin, mót 3 – Icewear bikarinn", "GKG", "Stúlkur 15–16", "1"],
        ["Halldór Jóhannsson", "4. júní · Unglingamótaröðin, mót 3 – Icewear bikarinn", "GKG", "Piltar 15–16", "3"],
        ["Óliver Elí Björnsson", "4. júní · Unglingamótaröðin, mót 3 – Icewear bikarinn", "GKG", "Piltar 17–18", "3"],
        ["Jón Ómar Sveinsson", "5. júní · Golf 14, mót 2 – Icewear, Leirdalur", "GKG", "Drengir 14 ára og yngri", "1"],
        ["Óttar Elí Friðbjörnsson", "5. júní · Golf 14, mót 2 – Icewear, Mýrin", "GKG", "Drengir 10 ára og yngri", "1"],
        ["Viktóría Mörk Theodórsdóttir", "5. júní · Golf 14, mót 2 – Icewear, Mýrin", "GKG", "Stúlkur 14 ára og yngri", "3"],
        ["Halldór Ásgrímur Ingólfsson", "7. júní · LEK 3 – Opna Kaffitár", "Kirkjubólsvöllur, Sandgerði", "Besta skor, karlar 55+", "T1"],
        ["Tryggvi Þór Tryggvason", "7. júní · LEK 3 – Opna Kaffitár", "Kirkjubólsvöllur, Sandgerði", "Besta skor, karlar 75+", "T2"],
        ["Þórdís Geirsdóttir", "7. júní · LEK 3 – Opna Kaffitár", "Kirkjubólsvöllur, Sandgerði", "Besta skor, konur 50+ bláir teigar", "T3"],
        ["Anna Snædís Sigmarsdóttir", "14. júní · LEK 4 – Opna Icewear", "Strandarvöllur, Hellu", "Besta skor, rauðir teigar", "1"],
        ["Anna Snædís Sigmarsdóttir", "14. júní · LEK 4 – Opna Icewear", "Strandarvöllur, Hellu", "Besta skor, konur 65+", "1"],
        ["Gráa liðið", "18.–20. júní · Íslandsmót golfklúbba 12 ára og yngri", "Sveinskot o.fl.", "Sveitakeppni, sín deild", "2"],
        ["Bláa liðið", "18.–20. júní · Íslandsmót golfklúbba 12 ára og yngri", "Sveinskot o.fl.", "Sveitakeppni, sín deild", "3"],
        ["Guðrún Brá Björgvinsdóttir", "19.–21. júní · Íslandsmótið í holukeppni", "Urriðavöllur", "Meistaraflokkur kvenna", "1"],
        ["Birgir Björn Magnússon", "19.–21. júní · Íslandsmótið í holukeppni", "Hólmsvöllur, Leiru", "Meistaraflokkur karla", "1"],
        ["Drengjasveit Keilis A", "24.–26. júní · Íslandsmót golfklúbba 16 ára og yngri", "Akranes", "Drengir 15–16", "3"],
        ["Stúlknasveit Keilis A", "24.–26. júní · Íslandsmót golfklúbba 18 ára og yngri", "Akranes", "Stúlkur 18 ára og yngri", "2"],
        ["Óttar Elí Friðbjörnsson", "14. júlí · Golf 14 – Sveinskotsmótið", "Sveinskotsvöllur", "Drengir 9–10 ára", "2"],
        ["Elísa Lind Egilsdóttir", "14. júlí · Golf 14 – Sveinskotsmótið", "Sveinskotsvöllur", "Stúlkur 9–10 ára", "3"],
        ["Þórdís Geirsdóttir", "16.–18. júlí · Íslandsmót 50 ára og eldri", "Kiðjaberg", "Konur 50+", "1"],
        ["Ragnheiður Sigurðardóttir", "16.–18. júlí · Íslandsmót 50 ára og eldri", "Kiðjaberg", "Konur 50+", "2"],
        ["Kristján V. Kristjánsson", "16.–18. júlí · Íslandsmót 50 ára og eldri", "Kiðjaberg", "Karlar 65+", "2"],
        ["Axel Bóasson", "17.–19. júlí · Hvaleyrarbikarinn (GSÍ)", "Hvaleyrarvöllur", "Karlaflokkur", "1"],
        ["Guðrún Brá Björgvinsdóttir", "17.–19. júlí · Hvaleyrarbikarinn (GSÍ)", "Hvaleyrarvöllur", "Kvennaflokkur", "1"],
        ["Kristín María Valsdóttir", "17. júlí · Unglingamótaröðin, mót 4", "Akureyri", "Stúlkur 15–16", "1"],
        ["Daníel Ísak Steinarsson", "23.–25. júlí · Lexus bikarinn (GSÍ)", "GKG", "Karlaflokkur", "1"],
        ["Guðrún Birna Snæþórsdóttir", "23.–25. júlí · Lexus bikarinn (GSÍ)", "GKG", "Kvennaflokkur", "T3"],
        ["Þórdís Geirsdóttir", "26. júlí · LEK 5 – Opna Ping", "Hlíðavöllur, Mosfellsbæ", "Besta skor, konur bláir teigar", "1"],
        ["Tryggvi Þór Tryggvason", "26. júlí · LEK 5 – Opna Ping", "Hlíðavöllur, Mosfellsbæ", "Besta skor, karlar 75+", "1"],
        ["Anna Snædís Sigmarsdóttir", "26. júlí · LEK 5 – Opna Ping", "Hlíðavöllur, Mosfellsbæ", "Besta skor, rauðir teigar", "2"],
        ["Tryggvi Þór Tryggvason", "26. júlí · LEK 5 – Opna Ping", "Hlíðavöllur, Mosfellsbæ", "Punktakeppni", "T2"],
        ["Anna Snædís Sigmarsdóttir", "26. júlí · LEK 5 – Opna Ping", "Hlíðavöllur, Mosfellsbæ", "Besta skor, konur 65+", "3"],
        ["Axel Þórir Alfreðsson", "4. ágúst · LEK 6 – Opna Domino's", "Kiðjaberg", "Besta skor, karlar bláir teigar", "1"],
        ["Tryggvi Þór Tryggvason", "4. ágúst · LEK 6 – Opna Domino's", "Kiðjaberg", "Besta skor, karlar 75+", "T1"],
        ["Þórdís Geirsdóttir", "4. ágúst · LEK 6 – Opna Domino's", "Kiðjaberg", "Besta skor, konur bláir teigar", "2"],
        ["Ragnheiður Sigurðardóttir", "4. ágúst · LEK 6 – Opna Domino's", "Kiðjaberg", "Besta skor, konur bláir teigar", "T3"],
        ["Guðrún Brá Björgvinsdóttir", "6.–9. ágúst · Íslandsmótið í golfi", "Korpúlfsstaðavöllur", "Konur", "1"],
        ["Kvennasveit Keilis", "10.–11. ágúst · Íslandsmót golfklúbba 65+", "Húsatóftavöllur, Grindavík", "Konur 65+", "2"],
        ["Karlasveit Keilis 65+", "10.–11. ágúst · Sveitakeppni LEK 65+", "Öndverðarnesvöllur", "Karlar 65+", "2"],
        ["Karlasveit Keilis 75+", "10.–11. ágúst · Sveitakeppni LEK 75+", "Þorláksvöllur, Þorlákshöfn", "Karlar 75+", "3"],
        ["Óliver Elí Björnsson", "Ágúst · R&A Boys' Amateur Championship", "Gailes Links, Skotlandi", "Piltar", "1"],
        ["Karlasveit Keilis", "13.–15. ágúst · Íslandsmót golfklúbba, 1. deild", "Strandarvöllur, Hellu", "Karlar", "3"],
        ["Karlasveit Keilis 50+", "20.–22. ágúst · Íslandsmót golfklúbba 50+, 2. deild", "Kirkjubólsvöllur, Sandgerði", "Karlar 50+", "1"],
        ["Kvennasveit Keilis 50+", "20.–22. ágúst · Íslandsmót golfklúbba 50+, 1. deild", "Hólmsvöllur, Leiru", "Konur 50+", "3"],
        ["Halldór Jóhannsson", "20.–22. ágúst · Íslandsmót unglinga í höggleik 15–18 ára", "Hvaleyrarvöllur", "Piltar 15–16", "1"],
        ["Máni Freyr Vigfússon", "20.–22. ágúst · Íslandsmót unglinga í höggleik 15–18 ára", "Hvaleyrarvöllur", "Piltar 15–16", "3"],
        ["Elva María Jónsdóttir", "20.–22. ágúst · Íslandsmót unglinga í höggleik 15–18 ára", "Hvaleyrarvöllur", "Stúlkur 15–16", "1"],
        ["Sigurást Júlía Arnarsdóttir", "20.–22. ágúst · Íslandsmót unglinga í höggleik 15–18 ára", "Hvaleyrarvöllur", "Stúlkur 17–18", "T2"],
        ["Jón Ómar Sveinsson", "20.–22. ágúst · Íslandsmót unglinga í höggleik 14 ára og yngri", "Þorláksvöllur", "Drengir 13–14", "2"],
        ["Elva María Jónsdóttir", "5. sept. · N1 Unglingamótið, mót 7", "GR", "Stúlkur 15–16", "1"],
        ["Kristín María Valsdóttir", "5. sept. · N1 Unglingamótið, mót 7", "GR", "Stúlkur 15–16", "3"],
        ["Halldór Jóhannsson", "5. sept. · N1 Unglingamótið, mót 7", "GR", "Piltar 15–16", "3"],
        ["Óliver Elí Björnsson", "5. sept. · N1 Unglingamótið, mót 7", "GR", "Piltar 17–18", "3"],
        ["Jón Ómar Sveinsson", "5.–6. sept. · Golf 14 – 66°Norður mótið, lokamót", "Urriðavöllur (GO)", "Drengir 14 ára og yngri", "2"],
        ["Þórunn Emma McGinley", "5.–6. sept. · Golf 14 – 66°Norður mótið, lokamót", "Ljúflingur (GO)", "Stúlkur 12 ára og yngri", "3"],
        ["Elva María Jónsdóttir", "Lok tímabils · Stigalisti unglingamótaraðar", "–", "Stúlkur 15–16", "1 (stigameistari)"],
        ["Halldór Jóhannsson", "Lok tímabils · Stigalisti unglingamótaraðar", "–", "Piltar 15–16", "2"],
        ["Guðrún Brá Björgvinsdóttir", "Lok tímabils · Stigalisti GSÍ-mótaraðarinnar", "–", "Konur", "2"]] },
      { t: "p", texti: "Golf 14-mótin á Bakkakoti og Akureyri skiluðu engu verðlaunasæti fyrir Keili. Á lokamóti Golf 14, 66°Norður-mótinu hjá Oddi, varð Jón Ómar Sveinsson annar í flokki 14 ára og yngri á Urriðavelli og Þórunn Emma McGinley þriðja í flokki 12 ára og yngri stúlkna á Ljúflingi. Alls tóku 20 Keiliskrakkar þátt í lokamótinu." },
      { t: "h3", texti: "Lokastaða Keilisfólks á stigalistum GSÍ 2026" },
      { t: "tafla", snid: "texti", titill: "Lokastaða Keilisfólks á stigalistum GSÍ 2026", dalkar: ["Stigalisti", "Á lista", "Keilisfólk (sæti)"], radir: [
        ["Mótaröð þeirra bestu, karlar", "152", "Axel Bóasson 4., Birgir Björn Magnússon 13., Daníel Ísak Steinarsson 16., Svanberg Addi Stefánsson 17."],
        ["Mótaröð þeirra bestu, konur", "55", "Guðrún Brá Björgvinsdóttir 2., Marianna Ulriksen 12., Guðrún Birna Snæþórsdóttir 14."],
        ["Unglingamótaröð, piltar 17–18 ára", "35", "Óliver Elí Björnsson 7., Víkingur Óli Eyjólfsson 12."],
        ["Unglingamótaröð, stúlkur 17–18 ára", "22", "Tinna Alexía Harðardóttir 7., Sigurást Júlía Arnarsdóttir 9."],
        ["Unglingamótaröð, piltar 15–16 ára", "67", "Halldór Jóhannsson 2., Máni Freyr Vigfússon 8., Flosi Freyr Ingvarsson 14."],
        ["Unglingamótaröð, stúlkur 15–16 ára", "15", "Elva María Jónsdóttir 1. (stigameistari), Kristín María Valsdóttir 4., Hrefna Líf Steinsdóttir 7., Ester Ýr Ásgeirsdóttir 8."]] },
      { t: "p", texti: "Elva María Jónsdóttir varð stigameistari í flokki stúlkna 15–16 ára og Guðrún Brá Björgvinsdóttir endaði í 2. sæti á stigalista kvenna á mótaröð þeirra bestu. Alls átti Keilir 18 kylfinga meðal 17 efstu á þessum sex stigalistum. Heimild: stigalistar GSÍ í GolfBox." }
    ]
  },

  // ───────── Þátttaka og meðalskor ─────────
  {
    slug: "thatttaka", kafli: "ithrottir", heiti: "Þátttaka og meðalskor",
    fyrirsogn: "Þátttaka og meðalskor ", fyrirsognSkaletrun: "á GSÍ-mótaröðunum", kicker: "Íþróttastarf Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "86 Keilisleikmenn kepptu á mótaröðum GSÍ árið 2026, 23 fleiri en árið 2024. Fjölgunin var nær öll hjá körlum, piltum og drengjum: á Golf 14 fjölgaði þeim úr 12 árið 2024 í 29 og á unglingamótaröðinni úr 14 í 17. Konum fækkaði úr 21 í 20 milli 2025 og 2026." },
      { t: "p", texti: "Við þetta bætast sveitakeppnirnar. Í Íslandsmóti golfklúbba 2026 voru Keilisþátttökurnar 92 (62 hjá körlum og drengjum og 30 hjá konum og stúlkum): 31 í U12, 12 í U14, 32 í U16/U18 og 17 í 1. deild karla og kvenna. Þátttökum í sveitakeppnum fjölgaði úr 61 árið 2024 og 68 árið 2025 í 92, mest í U12 (úr 14 í 31) og U16/U18 (úr 12 í 32). Heildarþátttökur Keilisfólks í mótaröðum og sveitakeppnum GSÍ voru því 178, samanborið við 138 árið 2025 og 124 árið 2024. Að baki þeim stóðu 107 keppendur, hver talinn einu sinni (80 karlar og drengir og 27 konur og stúlkur), samanborið við 78 árið 2025 og 69 árið 2024." },
      { t: "sulur", titill: "Þátttökur Keilisfólks í GSÍ-keppnum", eining: "þátttökur", hlutfallAf: "þátttökum 2026", ar: "2026", fyrraAr: "2025", atridi: [
        { heiti: "Sveitakeppnir", gildi: "92", pct: 100, fyrra: "68", aherslu: true },
        { heiti: "Golf 14", gildi: "36", pct: 39.1, fyrra: "21" },
        { heiti: "Mótaröð þeirra bestu", gildi: "27", pct: 29.3, fyrra: "31" },
        { heiti: "Unglingamótaröð", gildi: "23", pct: 25, fyrra: "18" }] },
      { t: "p", texti: "Karlar og konur saman. Mótaraðir eru reiknaðar úr GolfBox; sveitakeppnir (Íslandsmót golfklúbba U12, U14, U16/U18 og 1. deild) úr liðsskipan á golf.is og frá íþróttastjóra. Leikmaður er talinn í hverri keppni. Árið 2024 voru þátttökurnar 26 á mótaröð þeirra bestu, 16 á unglingamótaröðinni, 21 á Golf 14 og 61 í sveitakeppnum." },

      { t: "h3", texti: "Meðalskor þriggja bestu" },
      { t: "p", texti: "Högg yfir pari á 18 holur; lægra er betra." },
      { t: "tafla", snid: "texti", titill: "Meðalskor þriggja bestu 2024–2026", dalkar: ["Mótaröð", "2024", "2025", "2026", "Bestu þrjú 2026"], radir: [
        ["Mótaröð þeirra bestu, karlar", "0,00", "0,64", "0,88", "Axel Bóasson −0,41 · Markús Marelsson 1,25 · Daníel Ísak Steinarsson 1,80"],
        ["Mótaröð þeirra bestu, konur", "4,36", "3,97", "4,90", "Guðrún Brá Björgvinsdóttir 0,33 · Elva María Jónsdóttir 6,89 · Guðrún Birna Snæþórsdóttir 7,47"],
        ["Unglingamótaröð, piltar", "2,38", "1,16", "0,45", "Óliver Elí Björnsson −0,58 · Halldór Jóhannsson 0,67 · Máni Freyr Vigfússon 1,27"],
        ["Unglingamótaröð, stúlkur", "17,36", "8,75", "6,25", "Elva María Jónsdóttir 5,13 · Tinna Alexía Harðardóttir 5,61 · Sigurást Júlía Arnarsdóttir 8,00"]] },
      { t: "p", texti: "Unglingastarfið sýnir mestu framfarirnar. Meðalskor þriggja bestu pilta lækkaði úr 2,38 í 0,45 á tveimur árum og stúlkna úr 17,36 í 6,25. Á mótaröð þeirra bestu eru tveir höggleikshringir Íslandsmótsins í holukeppni taldir með." },

      { t: "h3", texti: "Meðalskor á hring hjá þremur bestu" },
      { t: "p", texti: "Vegið eftir fjölda hringja; högg yfir pari á 18 holur; lægra er betra." },
      { t: "tafla", snid: "texti", titill: "Meðalskor á hring hjá þremur bestu 2024–2026", dalkar: ["Mótaröð", "2024", "2025", "2026", "Hringir 2026", "Breyting 2024→2026"], radir: [
        ["Mótaröð þeirra bestu, karlar", "0,00", "0,72", "0,52", "31", "+0,52"],
        ["Mótaröð þeirra bestu, konur", "3,95", "4,36", "5,36", "33", "+1,42"],
        ["Unglingamótaröð, piltar", "3,60", "1,20", "0,53", "42", "−3,07"],
        ["Unglingamótaröð, stúlkur", "17,36", "8,38", "6,31", "51", "−11,05"]] },
      { t: "p", texti: "Mest var bætingin á unglingamótaröðinni, þar sem meðalskor þriggja bestu pilta fór úr 3,60 í 0,53 höggum yfir pari á hring frá 2024 og stúlkna úr 17,36 í 6,31." },

      { t: "h3", texti: "Þróun 2021–2026" },
      { t: "sulur", titill: "Keiliskeppendur á mótaröðum GSÍ 2021–2026", eining: "keppendur", hlutfallAf: "keppendum 2026", atridi: [
        { heiti: "2021 · Golf 14 / 14 ára og yngri: 11", gildi: "53", pct: 61.6 },
        { heiti: "2022 · Golf 14 / 14 ára og yngri: 19", gildi: "58", pct: 67.4 },
        { heiti: "2023 · Golf 14 / 14 ára og yngri: 19", gildi: "51", pct: 59.3 },
        { heiti: "2024 · Golf 14 / 14 ára og yngri: 21", gildi: "63", pct: 73.3 },
        { heiti: "2025 · Golf 14 / 14 ára og yngri: 21", gildi: "70", pct: 81.4 },
        { heiti: "2026 · Golf 14 / 14 ára og yngri: 36", gildi: "86", pct: 100, aherslu: true }] },
      { t: "p", texti: "Heimild: GolfBox, stigalistar og úrslit GSÍ 2021–2023, reiknað með sömu reglum og samanburður áranna 2024–2026." },
      { t: "tafla", snid: "texti", titill: "Meðalskor þriggja bestu á hring 2021–2026 (högg yfir pari)", dalkar: ["Mótaröð", "2021", "2022", "2023", "2024", "2025", "2026"], radir: [
        ["Þeirra bestu, karlar", "0,21", "−0,33", "−0,92", "0,00", "0,72", "0,52"],
        ["Þeirra bestu, konur", "8,56", "4,67", "3,20", "3,95", "4,36", "5,36"],
        ["Unglinga, piltar", "6,13", "2,62", "2,39", "3,60", "1,20", "0,53"],
        ["Unglinga, stúlkur", "23,58", "–", "17,25", "17,36", "8,38", "6,31"]] },
      { t: "p", texti: "Vegið eftir hringjum. Engin Keilisstúlka lék á unglingamótaröðinni 2022. Til 2023 voru 19–21 árs með. Heimild: GolfBox." },
      { t: "p", texti: "Þegar sömu reglur eru notaðar aftur til 2021 sést að keppendum Keilis á mótaröðum GSÍ hefur fjölgað úr 53 í 86, mest síðustu tvö ár. Mest munar um yngsta hópinn: 36 léku á Golf 14 í ár, en 11–21 í flokkum 14 ára og yngri árin á undan. Á unglingamótaröðinni hefur meðalskor þriggja bestu ekki verið lægra á þessum sex árum, hvorki hjá piltum né stúlkum. Á mótaröð þeirra bestu er þróunin önnur: þar léku þrír bestu karlarnir að meðaltali undir pari árin 2022 og 2023 en rétt yfir pari í ár." }
    ]
  },

  // ───────── Sveitakeppnir ─────────
  {
    slug: "sveitakeppnir", kafli: "ithrottir", heiti: "Sveitakeppnir",
    fyrirsogn: "Sveitakeppnir ", fyrirsognSkaletrun: "2026", kicker: "Íþróttastarf Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "Karlasveit 50+ vann 2. deild og leikur í 1. deild 2027. Stúlknasveit 18 ára og yngri tók silfur eftir náið tap gegn GA í úrslitum. Kvennasveit 1. deildar, sem var Íslandsmeistari 2025, endaði í 5. sæti. Í flokkum eldri kylfinga tóku kvenna- og karlasveitir 65+ silfur og karlasveit 75+ brons." },
      { t: "mynd", src: M + "karlasveit-50.jpg", alt: "Sex karlar í grænum jökkum með verðlaunapeninga og bikar standa saman í golfskála.", texti: "Karlasveit Keilis 50+ vann 2. deild á Kirkjubólsvelli í Sandgerði og leikur í 1. deild 2027. Mynd: golf.is" },
      { t: "tafla", snid: "texti", titill: "Sveitakeppnir Keilis 2026", dalkar: ["Keppni", "Sveit", "Árangur", "Leikmenn"], radir: [
        ["12 ára og yngri, 18.–20. júní", "Fimm sveitir, 31 keppandi", "Gráa liðið 2. og Bláa liðið 3. í sínum deildum", "Gula liðið: Ása Margrét, Elísabet Lea, Kamilla Líf, Manúela Ýr, María Aðalheiður, Snæfríður Ísold og Þórunn Emma. Hvíta liðið: Birkir Már, Guðmundur Jóel, Ísleifur Rafn, Óttar Elí, Sindri Freyr og Örvar Ingi. Rauða liðið: Aron Logi, Björgvin Rúnar, Kári Kjartan, Patrekur Valgeirsson, Sigurjón Kristinn og Örn Tryggvi. Bláa liðið: Alex Þór, Arnór Kári, Bjarni Freyr, Heimir Elí, Hrólfur Bragi og Kristófer Ásgeir. Gráa liðið: Björn Ari, Helgi Björn, Helgi Randver, Hlynur Steinsson, Kári Birgir og Mikael Elmar."],
        ["14 ára og yngri, Flúðir, 24.–26. júní", "Stúlknasveit / drengjasveitir A og B", "4. / 12. og 16. sæti", "Stúlknasveit: Margrét Lóa, Sólveig Arnardóttir, Viktoría Mörk og Þórunn Emma McGinley. Drengjasveit A: Grímur Elí, Hilmir Örn, Tómas Hjaltalín og Viggó Orri. Drengjasveit B: Birkir Már Andrason, Hilmar Linnet, Jón Björn og Sindri Freyr."],
        ["Drengir 15–16 ára, Akranes", "A-sveit / B-sveit", "3. / 6. sæti", "A: Arnar Freyr Jóhannsson, Flosi Freyr Ingvarsson, Halldór Jóhannsson, Hilmir Ingvi Heimisson, Lúðvík Kemp Friðgeirsson og Máni Freyr Vigfússon. B: Baldur Samir, Elmar Leví, Erik Valur Kjartansson, Gunnar Karl, Viktor Ægis og Ýmir Eðvarðs."],
        ["Piltar 17–18 ára", "A-sveit / B-sveit", "6. / 7. sæti", "A: Bjarki Hrafn Guðmundsson, Viktor Tumi Valdimarsson, Vilhjálmur Ernir Torfason og Víkingur Óli Eyjólfsson. B: Benedikt Björn Benediktsson, Birkir Snær Sólnes, Frímann Pálsson, Ísleifur Krummi Björnsson og Nikulás Dagur Jónsson."],
        ["Stúlkur 18 ára og yngri", "A-sveit / B-sveit", "2. / 5. sæti", "A: Elva María Jónsdóttir, Kristín María Valsdóttir, Sigurást Júlía Arnarsdóttir, Tinna Alexía Harðardóttir og Vigdís Helga Erlendsdóttir. B: Brynja Maren, Ester Ýr Ásgeirsdóttir, Fjóla Huld Daðadóttir, Guðrún Lilja Thorarensen, Hrefna Líf Steinsdóttir og Krista Sif Eyland."],
        ["1. deild karla, Strandarvöllur á Hellu, 13.–15. ágúst", "Karlasveit", "3. sæti; tapaði 4–1 fyrir GR í undanúrslitum og vann GM 3,5–1,5 um bronsið", "Gunnar Geir Gústafsson (liðsstjóri), Axel Bóasson, Birgir Björn Magnússon, Daníel Ísak Steinarsson, Halldór Jóhannsson, Henning Darri Þórðarson, Markús Marelsson, Máni Freyr Vigfússon, Svanberg Addi Stefánsson og Tómas Hugi Ásgeirsson."],
        ["1. deild kvenna, Hlíðavöllur í Mosfellsbæ, 13.–15. ágúst", "Kvennasveit", "5. sæti; vann alla þrjá leikina um 5.–8. sæti", "Karen Sævarsdóttir (liðsstjóri), Anna Sólveig Snorradóttir, Elva María Jónsdóttir, Guðrún Birna Snæþórsdóttir, Kristín María Valsdóttir, Marianna Ulriksen, Sigurást Júlía Arnarsdóttir, Tinna Alexía Harðardóttir og Þórdís Geirsdóttir."],
        ["Konur 65+, Húsatóftavöllur, 10.–11. ágúst", "Kvennasveit 65+", "2. sæti; tapaði fyrir GR í úrslitum", "Þorbjörg Albertsdóttir (fyrirliði), Erla Pétursdóttir, Helga Gunnarsdóttir, Kristjana Aradóttir, Margrét Berg Theodórsdóttir og Þorbjörg Jónína Harðardóttir."],
        ["Karlar 65+ (holukeppni LEK), Öndverðarnesvöllur, 10.–11. ágúst", "Karlasveit 65+", "2. sæti", "Tryggvi Þór Tryggvason (liðsstjóri), Jakob Már Böðvarsson, Kristinn Þórir Kristjánsson, Kristján V. Kristjánsson, Magnús Birgisson, Páll Ingólfsson, Sigurður Aðalsteinsson og Sturla Skagfjörð. Páll kom inn fyrir Guðlaug Georgsson, sem dró sig út vegna meiðsla."],
        ["Karlar 75+, Þorláksvöllur, 10.–11. ágúst", "Karlasveit 75+", "3. sæti af tíu; 2. í B-riðli á eftir GR, tapaði fyrir GS í undanúrslitum og vann GF um bronsið", "Guðmundur Ágúst Guðmundsson (liðsstjóri), Arnór K. Guðmundsson, Jóhannes Jón Gunnarsson, Jónas Ágústsson, Magnús Hjörleifsson og Sigurgeir Marteinsson."],
        ["2. deild karla 50+, Kirkjubólsvöllur í Sandgerði, 20.–22. ágúst", "Karlasveit 50+", "1. sæti af átta; vann Vestmannaeyjar 3–2 í úrslitum og fer upp í 1. deild", "Ásgeir Jón Guðbjartsson, Björgvin Sigurbergsson, Davíð Arnar Jónsson, Gunnar Þór Halldórsson, Hafþór Hafliðason, Halldór Ásgrímur Ingólfsson, Magnús Birgisson og Magnús Pálsson."],
        ["1. deild kvenna 50+, Hólmsvöllur í Leiru, 20.–22. ágúst", "Kvennasveit 50+", "3. sæti; titilhafar, unnu alla þrjá leiki í riðli (4–1 gegn GM, 3–2 gegn NK og 4,5–0,5 gegn GO), töpuðu fyrir GR í undanúrslitum og unnu GKG 4,5–0,5 um bronsið", "Anna Snædís Sigmarsdóttir, Helga Gunnarsdóttir, Hulda Soffía Hermannsdóttir, Karen Sævarsdóttir, Kristín Fjóla Gunnlaugsdóttir, Kristín Sigurbergsdóttir, Lilja Guðríður Karlsdóttir, Ragnheiður Sigurðardóttir og Þórdís Geirsdóttir."]] },
      { t: "mynd", src: M + "karlasveit-1-deild.jpg", alt: "Karlasveit Keilis, níu kylfingar í dökkum fötum með verðlaunapeninga, á golfvelli fyrir framan fána mótsins.", texti: "Karlasveit Keilis tók bronsið í 1. deild á Strandarvelli á Hellu. Mynd: golf.is" },
      { t: "mynd", src: M + "stulknasveit-18.jpg", alt: "Sex stúlkur með silfurpeninga og liðsstjóri standa fyrir framan auglýsingavegg GSÍ.", texti: "Stúlknasveit Keilis 18 ára og yngri tók silfur á Íslandsmóti golfklúbba. Mynd: keilir.is" },
      { t: "mynd", src: M + "kvennasveit-65.jpg", alt: "Sex konur í rauðum jökkum í og við golfbíl; íslenski fáninn blaktir fyrir ofan.", texti: "Kvennasveit Keilis 65+ tók silfur á Íslandsmóti golfklúbba á Húsatóftavelli í Grindavík. Mynd: keilir.is" },
      { t: "mynd", src: M + "graa-lidid.jpg", alt: "Fimm drengir með verðlaunapeninga halda á liðsfélaga láréttum og hlæja; þjálfari í blárri úlpu hjálpar til.", texti: "Gráa liðið varð í 2. sæti í sinni deild á Íslandsmóti golfklúbba 12 ára og yngri. Mynd: keilir.is" },
      { t: "mynd", src: M + "drengjasveit-15-16.jpg", alt: "Fimm piltar og liðsstjóri í grænum jökkum á golfvelli; einn veifar fána og fjöll eru í baksýn.", texti: "Drengjasveit Keilis 15–16 ára tók bronsið á Íslandsmóti golfklúbba á Akranesi. Mynd: keilir.is" }
    ]
  },

  // ───────── Landslið og háskólagolf ─────────
  {
    slug: "landslid", kafli: "ithrottir", heiti: "Landslið og háskólagolf",
    fyrirsogn: "Fimm í ", fyrirsognSkaletrun: "landsliðshópnum", kicker: "Landsliðsfólk Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "Fimm kylfingar úr Keili voru í 27 manna landsliðshópi GSÍ árið 2026: Elva María Jónsdóttir, Halldór Jóhannsson, Markús Marelsson, Máni Freyr Vigfússon og Óliver Elí Björnsson. Í nýjum landsliðshópi fyrir 2026–2027, sem valinn var í nóvember, eru sömu fimm kylfingar af 23, eða rúmlega fimmtungur hópsins. Landsliðshópurinn æfði meðal annars í Hraunkoti í mars." },
      { t: "h3", texti: "Keppnisferðir með landsliðum Íslands 2026" },
      { t: "tafla", snid: "texti", titill: "Keppnisferðir með landsliðum Íslands 2026", dalkar: ["Mót", "Staður og tími", "Keilisfólk og árangur"], radir: [
        ["Evrópumót pilta", "Spánn, 7.–11. júlí", "Óliver Elí Björnsson. Liðið varð í 10. sæti, einn besti árangur íslensks piltalandsliðs frá upphafi."],
        ["Evrópumót stúlkna", "Sviss, 7.–11. júlí", "Guðrún Brá Björgvinsdóttir var þjálfari liðsins."],
        ["European Young Masters", "Valencia, júlí", "Elva María (jafnt í 10. sæti), Halldór (41.) og Máni Freyr (54.). Þrír af fjórum keppendum Íslands komu úr Keili."],
        ["Evrópumót einstaklinga 50+", "Kýpur, 11.–13. júní", "Þórdís Geirsdóttir og Ragnheiður Sigurðardóttir."],
        ["Evrópumót kvennalandsliða 50+", "Búlgaría, september", "Þórdís Geirsdóttir og Ragnheiður Sigurðardóttir. Ísland varð í 16. sæti og Þórdís lék best í liðinu í höggleiknum."]] },
      { t: "p", texti: "Óliver Elí lék auk þess fyrir lið meginlands Evrópu í Jacques Léglise Trophy (sjá Viðurkenningar og Íþróttafólk Hafnarfjarðar)." },
      { t: "h3", texti: "Háskólagolf" },
      { t: "p", texti: "Enginn kylfingur Keilis lék háskólagolf í Bandaríkjunum árið 2026, en tveir eru á leiðinni þangað. Sigurást Júlía Arnarsdóttir skrifaði nýverið undir við Western Carolina University og Markús Marelsson við Eastern Michigan University, þar sem hann byrjar að keppa fyrir liðið haustið 2027." }
    ]
  },

  // ───────── Eldri kylfingar ─────────
  {
    slug: "eldri-kylfingar", kafli: "ithrottir", heiti: "Eldri kylfingar",
    fyrirsogn: "Áberandi á ", fyrirsognSkaletrun: "öldungamótaröðinni", kicker: "Eldri kylfingar Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "Eldri kylfingar Keilis voru áberandi á Icewear-öldungamótaröð LEK. Alls tóku 25 Keilisfélagar þátt í sjö mótum sumarsins, samtals 105 þátttökur, eða 12–20 Keilisfélagar á hverju móti af 107–168 keppendum. Árið 2025 voru þátttökurnar 97 hjá 27 kylfingum og árið 2024 voru þær 108 hjá 31 kylfingi." },
      { t: "tafla", titill: "Öldungamótaröð LEK 2026: keppendur og Keilisfélagar", dalkar: ["Mót 2026", "Keppendur", "Úr Keili"], radir: [
        ["1. mót, GÞ (25. maí)", "159", "20"],
        ["2. mót, GG (31. maí)", "168", "17"],
        ["3. mót, GSG (7. júní)", "155", "16"],
        ["4. mót, GHR (14. júní)", "165", "14"],
        ["5. mót, GM (26. júlí)", "129", "12"],
        ["6. mót, GKB (4. ágúst)", "107", "13"],
        ["7. mót, GR (30. ágúst)", "133", "13"]] },
      { t: "h3", texti: "Besti árangurinn á mótaröðinni" },
      { t: "p", texti: "Keilisfólk náði 20 verðlaunasætum á sex af sjö mótum mótaraðarinnar, þar af átta sigrum. Þórdís Geirsdóttir komst oftast á pall, fimm sinnum, og vann á Blue Lagoon Open í Grindavík og Opna Ping á Hlíðavelli. Tryggvi Þór Tryggvason var í fremstu röð í flokki 75 ára og eldri: hann átti besta skor á Opna Ping, deildi sigrinum á Opna Domino's í Kiðjabergi og varð auk þess annar í Sandgerði. Anna Snædís Sigmarsdóttir vann bæði af rauðum teigum og í flokki kvenna 65+ á Hellu og bætti við tveimur verðlaunasætum á Hlíðavelli. Halldór Ásgrímur Ingólfsson deildi sigrinum í flokki karla 55+ í Sandgerði og Axel Þórir Alfreðsson átti besta skor karla af bláum teigum í Kiðjabergi. Ragnheiður Sigurðardóttir, Sigurður Aðalsteinsson og Kristján V. Kristjánsson komust einnig á pall." },
      { t: "p", texti: "Karlasveit 50+ vann 2. deild í sveitakeppni GSÍ og leikur í 1. deild 2027 (sjá Sveitakeppnir), og æfingahópur 50+ hélt áfram með 17 þátttakendum." }
    ]
  },

  // ───────── Meistaramót ─────────
  {
    slug: "meistaramot", kafli: "ithrottir", heiti: "Meistaramót 2026",
    fyrirsogn: "Meistaramót Keilis ", fyrirsognSkaletrun: "2026", kicker: "Meistaramót Keilis · 5.–11. júlí",
    blokkir: [
      { t: "inngangur", texti: "Axel Bóasson og Guðrún Birna Snæþórsdóttir urðu klúbbmeistarar Keilis 2026. Viktor Tumi Valdimarsson fór holu í höggi á 17. braut." },
      { t: "mynd", src: M + "klubbmeistarar.jpg", alt: "Guðrún Birna Snæþórsdóttir og Axel Bóasson brosa með gyllta bikara, verðlaunapeninga og blómvendi á Hvaleyrarvelli.", texti: "Klúbbmeistarar Keilis 2026, Guðrún Birna Snæþórsdóttir og Axel Bóasson. Mynd: kylfingur.is" },
      { t: "tolur", atridi: [{ tala: "347", texti: "keppendur (365 árið 2025)" }, { tala: "26", texti: "flokkar" }, { tala: "287", texti: "högg hjá klúbbmeistara karla, 1 undir pari" }] },
      { t: "p", texti: "Meistaramótið fór fram 5.–11. júlí. Alls léku 347 keppendur í 26 flokkum: 322 í 20 flokkum á Hvaleyrarvelli, 7 á Meistaramóti Keilis á Sveinskotsvelli (9.–11. júlí) og 18 á Meistaramóti barna á Sveinskotsvelli (5.–7. júlí). Árið 2025 voru keppendur 365 í 27 flokkum. Leikinn var höggleikur án forgjafar, 72 holur í flestum flokkum og 54 holur í 4. flokki, 65–74 ára, 75 ára og eldri og 12 ára og yngri." },
      { t: "p", texti: "Axel Bóasson varð klúbbmeistari karla á 287 höggum, einu höggi undir pari, fjórum höggum á undan Birgi Birni Magnússyni. Hjá konum luku Guðrún Birna Snæþórsdóttir og Þórdís Geirsdóttir báðar leik á 315 höggum. Guðrún Birna hafði betur í þriggja holu umspili og vann sinn fyrsta klúbbmeistaratitil, en Þórdís var nálægt sínum átjánda. Axel vann titilinn í fimmta sinn. Nokkrir flokkar réðust í bráðabana um verðlaunasæti, og veðrið var af öllu tagi. Nýjungar ársins voru að hvergi var leikin punktakeppni heldur höggleikur í öllum flokkum, með hámarki á höggafjölda í fjórða flokki karla og kvenna og í öllum aldursflokkum. Þá var forgjafarflokkunum breytt til að jafna keppnina innan flokka." },
      { t: "h3", texti: "Hvaleyrarvöllur" },
      { t: "p", texti: "Heildarskor í höggum; þar sem skor var jafnt réðust sætin samkvæmt keppnisskilmálum, í umspili eða bráðabana." },
      { t: "tafla", snid: "texti", titill: "Meistaramót Keilis 2026 á Hvaleyrarvelli", dalkar: ["Flokkur", "Keppendur", "1. sæti", "2. sæti", "3. sæti"], radir: [
        ["Meistaraflokkur karla", "25", "Axel Bóasson 287", "Birgir Björn Magnússon 291", "Halldór Jóhannsson 293"],
        ["Meistaraflokkur kvenna", "9", "Guðrún Birna Snæþórsdóttir 315", "Þórdís Geirsdóttir 315", "Tinna Alexía Harðardóttir 318"],
        ["1. flokkur karla", "20", "Arnar Sigþórsson 315", "Haukur Ólafsson 319", "Haukur Jónsson 323"],
        ["1. flokkur kvenna", "7", "Anna Snædís Sigmarsdóttir 329", "Margrét Berg Theodórsdóttir 346", "Lilja Guðríður Karlsdóttir 354"],
        ["2. flokkur karla", "39", "Lárus Long 321", "Ármann Guðjón Valsson 327", "Hjalti Jóhannsson 334"],
        ["2. flokkur kvenna", "15", "Þorbjörg Albertsdóttir 361", "Eva Harpa Loftsdóttir 369", "Margrét Sigmundsdóttir 373"],
        ["3. flokkur karla", "32", "Aron Kristján Sigurjónsson 352", "Sigurgeir Hlíðar Sigurjónsson 353", "Guðmundur Ingi Karlsson 362"],
        ["3. flokkur kvenna", "34", "Berglind Guðmundsdóttir 390", "Elísa Vigfúsdóttir 394", "Sólveig Kristjánsdóttir 394"],
        ["4. flokkur karla", "28", "Logi Karlsson 282", "Rósant Már Torfason 283", "Gísli Vagn Jónsson 287"],
        ["4. flokkur kvenna", "19", "Emílía Borgþórsdóttir 332", "Helga Huld Bjarnadóttir 333", "Svanhildur Karlsdóttir 337"],
        ["50–64 ára karlar", "16", "Helgi Anton Eiríksson 308", "Halldór Ásgrímur Ingólfsson 315", "Björn Knútsson 316"],
        ["65–74 ára karlar", "30", "Guðlaugur Georgsson 240", "Kristján V. Kristjánsson 244", "Jakob Már Böðvarsson 251"],
        ["65–74 ára konur", "4", "Edda Jónasdóttir 319", "Edda Arnbjörnsdóttir 342", "Guðrún Bjarnadóttir 365"],
        ["75 ára og eldri karlar", "16", "Arnór K. Guðmundsson 245", "Jóhannes Jón Gunnarsson 246", "Guðmundur Ágúst Guðmundsson 257"],
        ["16–18 ára strákar", "3", "Viktor Tumi Valdimarsson 330", "Hákon Kemp 345", "–"],
        ["16–18 ára stelpur", "2", "Kristín María Valsdóttir 322", "Fjóla Huld Daðadóttir 346", "–"],
        ["13–15 ára strákar", "13", "Jón Ómar Sveinsson 314", "Arnar Freyr Jóhannsson 335", "Jakob Daði Gunnlaugsson 336"],
        ["13–15 ára stelpur", "4", "Ester Ýr Ásgeirsdóttir 356", "Sólveig Arnardóttir 374", "Hrefna Líf Steinsdóttir 378"],
        ["12 ára og yngri strákar", "5", "Sindri Freyr Eyþórsson 258", "Örvar Ingi Theodórsson 268", "Birkir Már Andrason 272"]] },
      { t: "h3", texti: "Sveinskotsvöllur" },
      { t: "tafla", snid: "texti", titill: "Meistaramót Keilis 2026 á Sveinskotsvelli", dalkar: ["Mót og flokkur", "Keppendur", "1. sæti", "2. sæti", "3. sæti"], radir: [
        ["Meistaramót barna – strákar 12 ára og yngri", "13", "Óttar Elí Friðbjörnsson 110", "Björn Ari Sigurðarson 116", "Hrólfur Bragi Sveinsson 116"],
        ["Meistaramót barna – stelpur 12 ára og yngri", "4", "Þórunn Emma McGinley 118", "Kamilla Líf Guðjónsdóttir 133", "Snæfríður Ísold Baldursdóttir 140"],
        ["Meistaramót barna – stelpur 13–15 ára", "1", "Viktóría Mörk Theodórsdóttir 128", "–", "–"],
        ["Karlar, forgjöf 0–25", "1", "Guðjón Frímann Þórunnarson 125", "–", "–"],
        ["Karlar, forgjöf 25,1–54", "3", "Sveinn Björnsson 129", "Hreiðar Gíslason 137", "Þorsteinn Ragnar Ingólfsson 156"],
        ["Konur, forgjöf 25,1–54", "3", "Klara Jónsdóttir 144", "Elísa Ösp Hjálmarsdóttir 144", "Vigdís Edda Jónsdóttir 162"]] },
      { t: "p", texti: "Enginn keppti í flokkum 50–64 ára kvenna og 75 ára og eldri kvenna. Eini keppandinn í flokki 12 ára og yngri stelpna á Hvaleyrarvelli hætti leik." }
    ]
  },

  // ───────── Þjálfarar, nefndir og ráð ─────────
  {
    slug: "nefndir-rad", kafli: "ithrottir", heiti: "Þjálfarar, nefndir og ráð",
    fyrirsogn: "Fólkið á bak við ", fyrirsognSkaletrun: "starfið", kicker: "Íþróttastarf Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "Tólf manna þjálfarateymi, íþróttanefnd og foreldraráð halda utan um íþróttastarf Keilis. Tíu af tólf í þjálfarateyminu eru með PGA- eða ÍSÍ-menntun." },
      { t: "h2", texti: "Þjálfarateymið" },
      { t: "tafla", snid: "texti", titill: "Þjálfarateymi Keilis 2026", dalkar: ["Nafn", "Hlutverk", "Menntun"], radir: [
        ["Birgir Björn Magnússon", "Íþróttastjóri", "Þjálfaranámskeið ÍSÍ 2. stig, meistarapróf í hagfræði"],
        ["Axel Bóasson", "Afreks- og yfirþjálfari", "PGA golfkennari"],
        ["Karen Sævarsdóttir", "Golfkennari", "LPGA golfkennari"],
        ["Gunnar Geir Gústafsson", "Golfkennari", "PGA golfkennari"],
        ["Ísak Jasonarson", "Golfkennari", "PGA golfkennari"],
        ["Helga Lind Þóreyjardóttir", "Leiðbeinandi", "PGA leiðbeinandi"],
        ["Hjalti Jóhannsson", "Aðstoðarþjálfari", "Þjálfaranámskeið ÍSÍ 2. stig"],
        ["Svanberg Addi Stefánsson", "Þjálfari", "Þjálfaranámskeið ÍSÍ 1. stig"],
        ["Víkingur Óli Eyjólfsson", "Aðstoðarþjálfari", "Þjálfaranámskeið ÍSÍ 1. stig"],
        ["Viktor Tumi Valdimarsson", "Aðstoðarþjálfari", "Þjálfaranámskeið ÍSÍ 1. stig"],
        ["Sigurást Júlía Arnarsdóttir", "Aðstoðarþjálfari", "Meistaraflokkskylfingur"],
        ["Kristín María Valsdóttir", "Leiðbeinandi", "Afrekskylfingur"]] },
      { t: "p", texti: "Tíu af tólf í þjálfarateyminu eru með PGA- eða ÍSÍ-menntun (83%). Markmiðið er að allir í teyminu ljúki að minnsta kosti Þjálfaranámskeiði ÍSÍ 1. stigi." },
      { t: "p", texti: "Allir iðkendur í barna- og unglingastarfi æfa tvisvar í viku á almennum æfingum í Hraunkoti, þar sem 6–12 iðkendur eru á hvern þjálfara. Iðkendur eldri en 10 ára geta bætt við sig tveimur æfingum í viku í afreksþjálfun og einni styrktaræfingu í viku." },

      { t: "h2", texti: "Forvarnir og öruggt umhverfi" },
      { t: "p", texti: "Keilir fylgir stefnu ÍSÍ í forvarnamálum og Viðbragðsáætlun íþrótta- og æskulýðsstarfs. Komi upp mál sem varða einelti, ofbeldi eða kynferðislega áreitni er unnið eftir þeim verkferlum og leitað til Samskiptaráðgjafa íþrótta- og æskulýðsstarfs, sem starfar samkvæmt lögum nr. 45/2019. Þjálfarar og iðkendur fylgja siðareglum og hegðunarviðmiðum ÍSÍ, sem GSÍ vísar einnig til í hegðunarreglum sínum á mótum, og starfið fylgir jafnréttisáætlun ÍSÍ." },
      { t: "p", texti: "Uppeldislegt markmið íþróttastarfsins er að iðkendur temji sér hollar lífsvenjur og að starfið dragi úr áhættuhegðun á borð við vímuefnaneyslu. Rannsóknir & greining hafa um árabil sýnt að þátttaka í skipulögðu íþrótta- og tómstundastarfi er einn sterkasti verndandi þátturinn gegn vímuefnaneyslu ungmenna. Því skiptir máli að halda sem flestum í starfinu sem lengst, sem er ein ástæða þess að minna brottfall er eitt af markmiðum næsta árs." },

      { t: "h2", texti: "Nefndir og ráð 2026" },
      { t: "p", texti: "Íþróttanefnd Keilis fundaði fjórum sinnum á árinu, í janúar, febrúar, mars og ágúst, og undir henni starfar foreldraráð Keilis. Á fundunum var meðal annars farið yfir æfingar og skráningar ársins, forgjafarviðmið iðkenda, val í sveitir og kostnað vegna sveitakeppna, æfingaferðir, samninga við afrekskylfinga, æfingagjöld 2027 og drög að nýrri handbók íþróttastarfsins fyrir 2028–2032. Snemma árs bættist fulltrúi foreldraráðs í nefndina." },
      { t: "p", texti: "Hlutverk íþróttanefndar samkvæmt drögum að handbók íþróttastarfsins:" },
      { t: "listi", atridi: [
        "Er fagnefnd stjórnar Keilis um íþróttir og golfþjálfun.",
        "Mótar stefnu íþróttastarfsins með aðalstjórn og fylgir henni eftir með framkvæmdastjóra.",
        "Fylgist, ásamt íþróttastjóra, með þátttöku og gengi iðkenda á mótaröðum GSÍ frá ári til árs.",
        "Fær kynningu á niðurstöðum þjálfarafunda, sem haldnir eru þrisvar á ári.",
        "Hefur foreldraráð undir sér: formaður foreldraráðs situr nefndarfundi, fundargerðir ráðsins berast nefndinni og þangað fer endurgjöf frá æfingahópum.",
        "Fjallar um tillögur um aukin útgjöld í íþróttastarfinu."] },
      { t: "tafla", snid: "texti", titill: "Íþróttanefnd Keilis 2026", dalkar: ["Nefndarmaður", "Hlutverk", "Situr 2026"], radir: [
        ["Lilja G. Karlsdóttir", "Stjórnarmaður, formaður nefndarinnar", "Já, formaður"],
        ["Birgir Björn Magnússon", "Íþróttastjóri Keilis", "Já"],
        ["Ólafur Þór Ágústsson", "Framkvæmdastjóri Keilis", "Já"],
        ["Sveinn Sigurbergsson", "Stjórnarmaður", "Já"],
        ["Karen Ósk Lárusdóttir", "Tengiliður foreldraráðs", "Já, fulltrúi foreldraráðs"],
        ["Svanberg Addi Stefánsson", "Forsvarsmaður iðkenda 19–25 ára", "Já, tengiliður meistaraflokks, 1. flokks og þjálfara"]] },
      { t: "h3", texti: "Foreldraráð" },
      { t: "p", texti: "Foreldraráð Keilis 2026: Birgir Björn Magnússon íþróttastjóri og ritari, Karen Ósk Lárusdóttir (formaður 2026–2027), Ingibjörg Sveinsdóttir, Guðvarður Björgvin Ólafsson, Guðmundur Valgeir Gunnarsson, Gunnar Þór Sigurjónsson, Elva Rut Sigmarsdóttir og Símon Örn Birgisson. Elva Rut og Símon Örn komu ný inn í ráðið í haust." },
      { t: "p", texti: "Fyrsti fundur nýs foreldraráðs var haldinn 10. nóvember í Sælakoti. Ráðið fundar sex sinnum yfir tímabilið, í Sælakoti eða á Teams, og stærstu verkefni vetrarins eru happdrætti í janúar, æfingaferðin til Spánar, hópefli í apríl og sveitakeppnirnar. Æfingahópar fengu tengiliði úr foreldraráðinu og foreldrar skiptu með sér fjáröflunum: happdrætti, kúlutínslu, tiltekt í Hraunkoti og sölu á Norðanfiski fyrir jól. Í mati á síðasta tímabili voru foreldrar ánægðir með mótaskrár, hópefli og fyrirkomulag keppnisferða, en óskuðu eftir skýrari viðmiðum um val í sveitakeppnir og bentu á að hópeflið hefði mátt vera fyrr á tímabilinu." }
    ]
  },

  // ───────── Viðurkenningar og Íþróttafólk Hafnarfjarðar ─────────
  {
    slug: "ithrottafolk", kafli: "ithrottir", heiti: "Viðurkenningar og Íþróttafólk Hafnarfjarðar",
    fyrirsogn: "Viðurkenningar ", fyrirsognSkaletrun: "ársins", kicker: "Íþróttastarf Keilis 2026",
    blokkir: [
      { t: "inngangur", texti: "Keilir tilnefnir Óliver Elí Björnsson sem afrekskarl og Guðrúnu Brá Björgvinsdóttur sem afrekskonu til Íþrótta- og viðurkenningarhátíðar Hafnarfjarðar 2026. Á aðalfundi veitir klúbburinn sínar eigin viðurkenningar fyrir árangur, framfarir, háttvísi og þrautseigju." },
      { t: "h2", texti: "Íþróttafólk Hafnarfjarðar 2026 – tilnefningar" },
      { t: "h3", texti: "Guðrún Brá Björgvinsdóttir" },
      { t: "mynd", src: M + "hvaleyrarbikarinn.jpg", alt: "Axel Bóasson og Guðrún Brá Björgvinsdóttir lyfta bikurum og halda á blómvöndum á Hvaleyrarvelli.", texti: "Axel Bóasson og Guðrún Brá Björgvinsdóttir unnu Hvaleyrarbikarinn á heimavelli. Mynd: keilir.is" },
      { t: "listi", atridi: [
        "Íslandsmeistari í höggleik (fimmti titillinn, 283 högg, 1 undir pari, fimm högga sigur) og í holukeppni. Fór fram úr föður sínum, Björgvini Sigurbergssyni, og er næstsigursælasta konan í sögu mótsins.",
        "Vann Hvaleyrarbikarinn á heimavelli með sex höggum.",
        "Lægsta meðalskor Keiliskvenna á mótaröð þeirra bestu, 0,33 högg yfir pari á 18 holur.",
        "Þriðja sæti á NTT Data Pro-Am í Suður-Afríku í febrúar (Sunshine Ladies mótaröðin).",
        "Með þátttökurétt á LET Evrópumótaröðinni eftir 3. sæti á lokaúrtökumótinu í Marokkó í desember 2025, þar sem hún lék besta hring mótsins. Einn átta kylfinga sem afrekssjóðurinn Forskot styður 2026."] },
      { t: "h3", texti: "Óliver Elí Björnsson" },
      { t: "mynd", src: M + "sigurlid-evropu.jpg", alt: "Sigurlið meginlands Evrópu, piltar og stúlkur í liðsjökkum, stilla sér upp með bikara á golfvelli í sandhólum.", texti: "Sigurlið meginlands Evrópu í Jacques Léglise Trophy (piltar) og Junior Vagliano Trophy (stúlkur) 2026. Óliver Elí var í piltaliðinu, sem vann 14,5–10,5. Mynd: The R&A" },
      { t: "listi", atridi: [
        "Fyrstur Íslendinga til að vinna R&A Boys' Amateur Championship. Vann úrslitaleikinn á 37. holu á Gailes Links.",
        "Vann sex leiki í holukeppni eftir 36 holu höggleik, meðal annars gegn Evrópumeistara unglinga, og sneri úrslitaleiknum við úr þriggja holu stöðu undir. Sigurinn veitir þátttökurétt á The Amateur Championship og í lokaúrtökumóti fyrir The Open 2027 og skilaði stóru stökki upp heimslista áhugamanna.",
        "Valinn í lið meginlands Evrópu í Jacques Léglise Trophy, aðeins annar Íslendingurinn á mótinu. Vann báða leiki sína fyrsta daginn og skilaði 2,5 stigum af fjórum; Evrópa vann 14,5–10,5.",
        "Lægsta meðalskor Keilispilta á unglingamótaröðinni, 0,58 undir pari, og lægsti hringur á þriðja móti mótaraðarinnar (67).",
        "2. sæti á Global Junior Golf í Portúgal.",
        "Fór úr 1.903. sæti á heimslista áhugamanna (WAGR) í byrjun árs í 1.088. sæti í nóvember. Stærsta stökkið kom með sigrinum á Boys' Amateur, úr 1.650. í 1.243. sæti, og hann er nú sjötti efsti íslenski karlinn á listanum."] },
      { t: "h3", texti: "Aðrar ábendingar klúbbsins til hátíðarinnar" },
      { t: "tafla", snid: "texti", titill: "Aðrar ábendingar Keilis til Íþrótta- og viðurkenningarhátíðar Hafnarfjarðar", dalkar: ["Flokkur", "Ábending"], radir: [
        ["Afrekslið", "Meistaraflokkur karla, 3. sæti í 1. deild á Íslandsmóti golfklúbba (Strandarvöllur, Hellu)"],
        ["Íslandsmeistarar", "Elva María Jónsdóttir og Halldór Jóhannsson (15–16 ára, höggleikur), Guðrún Brá Björgvinsdóttir (kvennaflokkur, höggleikur), Þórdís Geirsdóttir (konur 50+)"],
        ["Bikarmeistarar", "Guðrún Brá Björgvinsdóttir og Birgir Björn Magnússon (Íslandsmótið í holukeppni)"],
        ["Deildarmeistarar", "Karlasveit 50+, sigurvegari 2. deildar (Kirkjubólsvöllur, Sandgerði)"],
        ["Evrópu-, Norðurlanda- eða heimsmeistaratitill", "Óliver Elí Björnsson, R&A Boys' Amateur Championship"]] },

      { t: "h2", texti: "Viðurkenningar Keilis 2026" },
      { t: "p", texti: "Viðurkenningarnar eru veittar á aðalfundi klúbbsins fyrir árangur, framfarir, háttvísi og þrautseigju." },
      { t: "h3", texti: "Bjartasta vonin 2026: Elva María Jónsdóttir" },
      { t: "listi", atridi: [
        "Íslandsmeistari unglinga í höggleik í flokki 15–16 ára stúlkna á Hvaleyrarvelli. Hún lék á 229 höggum og sigraði með 18 högga mun.",
        "Stigameistari 15–16 ára stúlkna á unglingamótaröðinni. Hún vann fjögur mót, þar á meðal fyrsta sigurinn sinn á mótaröðinni í Mosfellsbæ með 25 högga mun, og varð önnur á fyrsta mótinu.",
        "Lægsta meðalskor Keilisstúlkna á unglingamótaröðinni (5,1 yfir pari) og næstlægsta Keiliskvenna á mótaröð þeirra bestu, á eftir Guðrúnu Brá.",
        "Í landsliðshópi GSÍ og jafnt í 10. sæti á European Young Masters.",
        "5. sæti á Global Junior Golf í Portúgal í mars.",
        "Í stúlknasveit Keilis sem fékk silfur á Íslandsmóti golfklúbba 18 ára og yngri og í kvennasveitinni í 1. deild."] },
      { t: "h3", texti: "Framfarabikar kvenna 2026: Tinna Alexía Harðardóttir" },
      { t: "listi", atridi: [
        "Meðalskor hennar á unglingamótaröðinni lækkaði úr 11,5 í 5,6 högg yfir pari á hring, næstum sex högg á hring. Aðeins Elva María var með lægra meðalskor af Keilisstúlkum.",
        "Endaði í efstu sjö sætunum á öllum mótum ársins á unglingamótaröðinni í flokki 17–18 ára, þar á meðal í 6. sæti á Íslandsmóti unglinga.",
        "3. sæti í meistaraflokki kvenna á Meistaramóti Keilis, þremur höggum frá umspilinu um titilinn.",
        "Í stúlknasveit Keilis sem fékk silfur á Íslandsmóti golfklúbba 18 ára og yngri og í kvennasveitinni í 1. deild."] },
      { t: "h3", texti: "Framfarabikar karla 2026: Hilmir Ingvi Heimisson" },
      { t: "listi", atridi: [
        "Fór af Golf 14 upp á unglingamótaröðina og lækkaði meðalskor sitt úr 17,4 í 11,4 högg yfir pari á hring, þótt hann léki nú af lengri teigum.",
        "Komst í gegnum niðurskurð á fjórum af fimm mótum sínum á unglingamótaröðinni og náði besta árangrinum á lokamótinu, T18 af 32 í flokki 15–16 ára á Korpúlfsstaðavelli.",
        "Komst í gegnum niðurskurð á Íslandsmóti unglinga í höggleik á Hvaleyrarvelli og varð 26. af 54 í flokki 15–16 ára.",
        "Í A-sveit drengja 15–16 ára sem fékk brons á Íslandsmóti golfklúbba á Akranesi."] },
      { t: "h3", texti: "Háttvísisbikarinn 2026: Bjarki Hrafn Guðmundsson" },
      { t: "listi", atridi: [
        "Hegðun hans á vellinum er til fyrirmyndar.",
        "Frábær liðsmaður.",
        "Fylgir leiðbeiningum og tilmælum samviskusamlega."] },
      // Þrautseigjuverðlaunin 2026: handhafi ekki kominn (bætt við þegar hann liggur fyrir).
      { t: "h3", texti: "Fyrri handhafar viðurkenninga" },
      { t: "tafla", snid: "texti", titill: "Handhafar viðurkenninga Keilis 2012–2026", dalkar: ["Ár", "Bjartasta vonin", "Framfarabikar karla", "Framfarabikar kvenna", "Háttvísisbikarinn", "Þrautseigjuverðlaunin"], radir: [
        ["2026", "Elva María Jónsdóttir", "Hilmir Ingvi Heimisson", "Tinna Alexía Harðardóttir", "Bjarki Hrafn Guðmundsson", "–"],
        ["2025", "Máni Freyr Vigfússon", "Viktor Tumi Valdimarsson", "Sigurást Júlía Arnarsdóttir", "Víkingur Óli Eyjólfsson", "Henning Á. Bjarnason"],
        ["2024", "Óliver Elí Björnsson", "Máni Freyr Vigfússon", "Elva María Jónsdóttir", "Skúli Gunnar Ágústsson", "Bjarni Jóhannsson"],
        ["2023", "Halldór Jóhannsson", "Óliver Elí Björnsson", "Guðrún Birna Snæþórsdóttir", "Jón Árni Kárason", "Þórdís Geirsdóttir"],
        ["2022", "Elva María Jónsdóttir", "Tómas Hugi Ásgeirsson", "Lára Dís Hjörleifsdóttir", "Máni Freyr Vigfússon", "Svanberg Addi Stefánsson"],
        ["2021", "Lilja Dís Hjörleifsdóttir", "Daníel Ísak Steinarsson", "Lára Dís Hjörleifsdóttir", "Hjalti Jóhannsson", "–"],
        ["2020", "Ekki veitt (Covid)", "Ekki veitt", "Ekki veitt", "Ekki veitt", "Ekki veitt"],
        ["2019", "Hjalti Jóhannsson", "Bjarki Snær Halldórsson", "Inga Lilja Hilmarsdóttir", "Elías Beck Sigurþórsson", "–"],
        ["2018", "Arnar Logi Andrason", "Birgir Björn Magnússon", "Helga Kristín Einarsdóttir", "Svanberg Addi Stefánsson", "Birgir Björn Magnússon"],
        ["2017", "Svanberg Addi Stefánsson", "–", "–", "–", "–"],
        ["2016", "Andri Páll Ásgeirsson", "–", "–", "–", "–"],
        ["2015", "Daníel Ísak Steinarsson", "–", "–", "–", "–"],
        ["2014", "Sigurlaug Rún Jónsdóttir", "Henning Darri Þórðarson", "Guðrún Brá Björgvinsdóttir", "Steingrímur Daði Kristjánsson", "Hildur Rún Guðjónsdóttir"],
        ["2013", "Henning Darri Þórðarson", "Gísli Sveinbergsson", "Hekla Sóley Arnarsdóttir", "Birgir Björn Magnússon", "Sigurlaug Rún Jónsdóttir"],
        ["2012", "Atli Már Grétarsson", "Henning Darri Þórðarson", "Anna Sólveig Snorradóttir", "Guðrún Brá Björgvinsdóttir", "Kristinn Kristinsson"]] },
      { t: "p", texti: "Til 2014 hétu framfarabikararnir Framfarabikar drengja og Framfarabikar stúlkna. Heimildir: fréttir af aðalfundum á keilir.is (2012–2014, 2018, 2022, 2025), kynningar aðalfunda 2024 og 2025, tilnefningar 2023 og áletrunarlisti bikaranna frá skrifstofu Keilis." }
    ]
  }
];

// Allar síður kaflans eru með efni ársins 2026 (sýnt í innra veftrénu).
export default sidur.map((s) => ({ ...s, efnisar: "2026" }));
