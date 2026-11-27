// Veitingasalan 2026 – efni úr skjalinu „Veitingasalan 2026“ (kassakerfi veitingasölunnar nóv. 2025 – okt. 2026,
// Viðhorfskönnun Keilis 2026 og Better Business, Mystery Golfers 2026).
// Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni; hún er flutt inn í síðulistann í efni-2025.js
// (í stað síðunnar „veitingasala“ í Skýrslu stjórnar). Slóðin helst óbreytt.
// Heilsíða (snid: "heilsida") í böndum (`hluti`), sama uppbygging og skjalið, með litum og letri vefsins.
// Kvittunin og topplistarnir eru í src/components/Veitingagraf.astro.

const M = "myndir/fjarmal-2026/"; // sömu myndir og í skjalinu (golfskálinn og Hvaleyrin)

const sida = {
  slug: "veitingasala", kafli: "stjorn", heiti: "Veitingasala", snid: "heilsida",
  fyrirsogn: "Fólkið á 19. holunni", kicker: "Ársskýrsla Keilis 2026 · Veitingasalan",
  heimild: "https://2025.keilir.is/veitingasala/",
  blokkir: [
    // ───────── Haus: þakkir og kvittun ársins ─────────
    { t: "hluti", snid: "hetja",
      vinstri: [
        { t: "p", texti: "Veitingasalan í golfskálanum var fjórða árið í rekstri Keilis. **Hrefna Helgadóttir, Das kokkur og þeirra fólk** báru hitann og þungann af rekstrinum, frá fyrsta kaffibollanum á vorin til síðustu veislunnar á haustin. Fyrir það er klúbburinn þakklátur." },
        { t: "p", texti: "Félagsmenn tóku eftir. Í viðhorfskönnun ársins hækkuðu allar einkunnir veitingasölunnar, og viðmót starfsfólks fékk 4,7 af 5. Huldugestir gáfu veitingunum 89%." },
        { t: "p", texti: "Hér er árið gert upp eins og kvittun úr kassanum: hvað seldist mest og hvað félagsmönnum og gestum fannst." }],
      haegri: [
        { t: "kvittun", titill: "19. HOLAN", undirtitill: "Golfskáli Keilis · Hvaleyri|nóv. 2025 – okt. 2026",
          lysing: "Kvittun ársins: 8.795 kaffibollar, 5.472 rúnstykki, 4.550 Powerade, 4.400 lítrar af kranabjór, 4.140 hamborgarar og 1.349 áfengislausir bjórar. Vinsælastir voru borgari með osti og Egils Light.",
          atridi: [
            { heiti: "Kaffibollar", gildi: "8.795" },
            { heiti: "Rúnstykki", gildi: "5.472" },
            { heiti: "Powerade", gildi: "4.550" },
            { heiti: "Kranabjór, lítrar", gildi: "4.400" },
            { heiti: "Hamborgarar", gildi: "4.140" },
            { heiti: "Áfengislaus bjór", gildi: "1.349" }],
          vinsaelast: [
            { heiti: "Vinsælasti borgarinn", gildi: "Með osti" },
            { heiti: "Vinsælasti bjórinn", gildi: "Egils Light" }],
          athugasemd: "Algengasta breytingin:|„mínus tómatar“ – 24 sinnum",
          kvedja: "Takk fyrir komuna!" }] },
    { t: "mynd", breidd: "full", stada: "center 55%", src: M + "golfskalinn.jpg", alt: "Golfskáli Keilis á Hvaleyri; áhorfendur og sjónvarpsmyndavél á palli við flötina fyrir framan skálann.", texti: "Golfskálinn á Hvaleyri, heimili veitingasölunnar" },

    // ───────── Lykiltölur ─────────
    { t: "hluti", blokkir: [
      { t: "tolukort", atridi: [
        { heiti: "Einkunn huldugesta fyrir veitingar", tala: "89%", texti: "veitingar vega mest í heildareinkunn" },
        { heiti: "Hamborgarar seldir", tala: "4.140", texti: "mest seldur: borgari með osti" },
        { heiti: "Heildarupplifun félagsmanna", tala: "4,4", breyting: "var 4,0", texti: "árið 2025" },
        { heiti: "Viðmót starfsfólks", tala: "4,7", breyting: "var 4,4", texti: "árið 2025" }] },
      { t: "p", texti: "Tímabilið 1. nóvember 2025 – 31. október 2026. Einkunnir félagsmanna eru á kvarðanum 1–5." }] },

    // ───────── Borgarar og bjór ─────────
    { t: "hluti", afast: true, jafnt: true,
      blokkir: [
        { t: "h2", texti: "Borgarakeppnin og bjórslagurinn" },
        { t: "p", texti: "Á árinu seldust 4.140 hamborgarar. Klassíski borgarinn með osti hélt toppsætinu, en Lúxusborgarinn og Keilisborgarinn háðu harða baráttu um annað sætið og munaði aðeins 20 borgurum. Í bjórnum tók Egils Light fram úr Peroni, sem hafði verið vinsælasti bjórinn tvö ár í röð." }],
      vinstri: [
        { t: "topplisti", titill: "Hamborgarar, seldir", athugasemd: "Veganborgarinn seldist fjórum sinnum.", atridi: [
          { heiti: "Með osti", gildi: "1.195" },
          { heiti: "Lúxusborgari", gildi: "958" },
          { heiti: "Keilisborgari", gildi: "938" },
          { heiti: "Hauka meistara", gildi: "581" },
          { heiti: "Kjúklingaborgari", gildi: "393" }] }],
      haegri: [
        { t: "topplisti", titill: "Bjór, seld glös og dósir", athugasemd: "Áfengislaus bjór seldist 1.349 sinnum.", atridi: [
          { heiti: "Egils Light", gildi: "4.097" },
          { heiti: "Peroni", gildi: "3.789" },
          { heiti: "Boli", gildi: "3.115" },
          { heiti: "Dósabjór 0,3 l", gildi: "2.515" },
          { heiti: "Guinness", gildi: "1.657" }] }] },

    // ───────── Hvað seldist? ─────────
    { t: "hluti", snid: "kort",
      vinstri: [
        { t: "h2", texti: "Hvað seldist?" },
        { t: "p", texti: "Bjórinn er stærsti söluflokkurinn, um fimmtungur sölunnar. Þar á eftir koma réttir dagsins, hamborgarar og hópar og veislur." },
        { t: "p", texti: "Salan jókst lítillega frá fyrra ári, eftir mikið stökk árið 2025. Vöxturinn kom úr hópum og veislum, þar sem salan tvöfaldaðist milli ára og er nú um 12% af allri sölu." },
        { t: "p", texti: "Powerade hefur sótt hratt á: 4.550 flöskur seldust, 55% fleiri en fyrir tveimur árum. Kaffið stendur alltaf fyrir sínu." }],
      haegri: [
        { t: "topplisti", snid: "hlutfall", athugasemd: "Tíu stærstu vöruflokkarnir sem hlutfall af allri sölu í kassakerfinu.", atridi: [
          { heiti: "Bjór", gildi: "22,3", birta: "22%" },
          { heiti: "Réttir dagsins og aðalréttir", gildi: "13,2", birta: "13%" },
          { heiti: "Hamborgarar", gildi: "12,0", birta: "12%" },
          { heiti: "Hópar og veislur", gildi: "11,6", birta: "12%" },
          { heiti: "Samlokur, vefjur og smáréttir", gildi: "10,9", birta: "11%" },
          { heiti: "Bakkelsi", gildi: "7,0", birta: "7%" },
          { heiti: "Gos og orkudrykkir", gildi: "6,8", birta: "7%" },
          { heiti: "Kaffi og heitir drykkir", gildi: "3,9", birta: "4%" },
          { heiti: "Vín og sterkt", gildi: "3,5", birta: "3%" },
          { heiti: "Salöt", gildi: "3,2", birta: "3%" }] }] },

    // ───────── Þrjú ár í tölum ─────────
    { t: "hluti", kort: true,
      vinstri: [
        { t: "h2", texti: "Þrjú ár í tölum" },
        { t: "p", texti: "Kaffibollunum fjölgar ár frá ári og hamborgarasalan er enn langt yfir því sem var 2024. Kranabjórinn náði hámarki 2025." },
        { t: "p", texti: "Beiðnum um „mínus tómata“ hefur fækkað úr 115 í 24. Hvort það er vegna betri tómata eða færri tómata á diskunum skal ósagt látið." }],
      haegri: [
        { t: "tafla", titill: "Þrjú ár í tölum: sala 2024–2026", dalkar: ["", "2024", "2025", "2026"], radir: [
          ["Kaffibollar", "7.680", "8.729", "**8.795**"],
          ["Kranabjór, lítrar", "4.479", "**5.222**", "4.400"],
          ["Hamborgarar", "3.800", "**4.936**", "4.140"],
          ["Powerade-flöskur", "2.943", "4.318", "**4.550**"],
          ["Egils Light, glös", "3.191", "**4.444**", "4.097"],
          ["Peroni, glös", "**5.103**", "5.035", "3.789"],
          ["„Mínus tómatar“", "**115**", "98", "24"]] },
        { t: "p", texti: "Feitletrað: hæsta gildið á tímabilinu." }] },

    // ───────── Viðhorfskönnun og huldugestir ─────────
    { t: "hluti", snid: "kort", kort: true,
      vinstri: [
        { t: "h2", texti: "Stærsta stökk ársins í viðhorfskönnuninni" },
        { t: "p", texti: "Í viðhorfskönnun Keilis 2026 svöruðu 758 félagsmenn. Allar sex einkunnir veitingasölunnar hækkuðu og heildarupplifunin fór úr 4,0 í 4,4. Afgreiðsluhraði og verðlagning hækkuðu um 0,3–0,4 stig hvort." },
        { t: "p", texti: "Hulduheimsóknir Better Business segja sömu sögu. Veitingarnar vega mest í heildareinkunn Keilis, um 32%, og fengu 89%. Heildareinkunnin, 88,7%, er sú hæsta frá því mælingar hófust 2018." },
        { t: "tilvitnun", texti: "Gestur á líklega eftir að segja öllum frá þessum veitingastað" },
        { t: "p", texti: "Úr umsögn huldugests 2026." }],
      haegri: [
        { t: "tafla", titill: "Einkunnir veitingasölunnar í viðhorfskönnun 2023–2026", dalkar: ["Veitingasalan", "2023", "2024", "2025", "2026", "Br."], radir: [
          ["Viðmót starfsfólks", "4,1", "4,4", "4,4", "**4,7**", "+0,3"],
          ["Snyrtilegur skáli", "4,2", "4,3", "4,3", "**4,5**", "+0,2"],
          ["Heildarupplifun", "3,8", "4,0", "4,0", "**4,4**", "+0,4"],
          ["Verðlagning", "3,8", "3,9", "3,9", "**4,2**", "+0,3"],
          ["Afgreiðsluhraði", "3,4", "3,8", "3,8", "**4,2**", "+0,4"],
          ["Matseðill", "3,5", "3,7", "3,6", "**4,0**", "+0,4"]] },
        { t: "p", texti: "Meðaleinkunn 1–5. Árið 2026 gátu svarendur merkt við „hef ekki nýtt mér þessa þjónustu“ og þau svör eru ekki í meðaltalinu, svo samanburður við fyrri ár er ekki alveg sambærilegur." },
        { t: "tolur", snid: "stadreyndir", atridi: [
          { tala: "88,7%", texti: "heildareinkunn Keilis hjá huldugestum, sú hæsta frá 2018" },
          { tala: "2", texti: "félagsmenn bentu á glútenlaus hamborgarabrauð, og sama birgja" }] }] },

    // ───────── Framundan ─────────
    { t: "hluti", snid: "dokkt", yfirmerking: "Framundan",
      blokkir: [
        { t: "h2", texti: "Golfskálinn fyrir hópa og veislur" },
        { t: "p", texti: "Hópar og veislur voru sá hluti sölunnar sem óx mest á árinu. Golfskálinn hentar vel fyrir afmæli, fundi, hópferðir og aðrar samkomur, líka yfir veturinn þegar völlurinn er í hvíld." },
        { t: "skref", atridi: [
          { tala: "4,7", texti: "einkunn félagsmanna fyrir viðmót starfsfólks, var 4,4 í fyrra" },
          { tala: "98%", texti: "einkunn huldugesta fyrir golfskálann, hæsta einkunnin í mælingunni" },
          { tala: "2×", texti: "sala í hópum og veislum tvöfaldaðist milli ára" }] },
        { t: "p", texti: "Félagsmenn sem vilja halda viðburð í golfskálanum eru hvattir til að hafa samband við veitingasöluna. Ábendingar eru líka alltaf vel þegnar, til dæmis um glútenlaust hamborgarabrauð." }] },
    { t: "mynd", breidd: "full", stada: "center 40%", src: M + "hvaleyri-sjovarnargardur.jpg", alt: "Hvaleyrarvöllur úr lofti: brautir og flatir á sjávarbakkanum, grjótgarður meðfram sjónum og áhorfendur á vellinum." },

    { t: "hluti", snid: "fotur", blokkir: [
      { t: "p", texti: "Heimildir: Kassakerfi veitingasölunnar nóv. 2025 – okt. 2026; Viðhorfskönnun Keilis 2026 og Better Business, Mystery Golfers 2026. Vöruflokkar eru flokkaðir eftir heiti vöru." }] },
  ],
};

export default { ...sida, efnisar: "2026" };
