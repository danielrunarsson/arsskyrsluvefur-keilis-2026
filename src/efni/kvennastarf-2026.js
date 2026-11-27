// Kvennastarfið 2026 – efni úr fréttunum „Stuð á uppskeruhófi Kvennamótaraðarinnar“ (keilir.is, 1. okt. 2026)
// og „Haustferð Keiliskvenna“ (keilir.is, 10. sept. 2026). Myndir úr sömu fréttum, í myndir/kvennastarf-2026/.
// Sér skrá svo kaflinn rekist ekki á aðrar breytingar í efnisskránni; hún er flutt inn í síðulistann í efni-2025.js
// (í stað síðunnar „kvennastarf“ í Félagsstarfi). Slóðin helst óbreytt.
// Heilsíða (snid: "heilsida") í böndum (`hluti`), sama uppbygging og 65+ starfið og veitingasalan.

const M = "myndir/kvennastarf-2026/";

const sida = {
  slug: "kvennastarf", kafli: "felagsstarf", heiti: "Kvennastarfið", snid: "heilsida",
  fyrirsogn: "Golf, keppni og ", fyrirsognSkaletrun: "góð samvera", kicker: "Ársskýrsla Keilis 2026 · Kvennastarfið",
  heimild: "https://2025.keilir.is/felagsstarf-kvennanefnd/",
  blokkir: [
    // ───────── Haus ─────────
    { t: "hluti", snid: "hetja",
      vinstri: [
        { t: "p", texti: "Kvennastarf Keilis var öflugt í sumar. Um **130 konur** tóku þátt í miðvikudagsmótaröðinni og sérstaklega ánægjulegt var að sjá Sveinskotskonum fjölga." },
        { t: "p", texti: "Í september fóru **95 Keiliskonur** í hina árlegu haustferð á Hótel Hamar í Borgarnesi, þar sem keppt var í nýjum liðslitum: vínrauðu og ólífugrænu." },
        { t: "p", texti: "Sumrinu lauk með uppskeruhófi í golfskálanum, og púttið tekur við í janúar." }],
      haegri: [
        { t: "flogg", titill: "Konur í mótaröðinni (u.þ.b.)", eining: "konur", aukastafir: 0, atridi: [{ ar: "2025", gildi: "120" }, { ar: "2026", gildi: "130" }] }] },
    { t: "mynd", breidd: "full", stada: "center 55%", src: M + "uppskeruhof-salurinn.jpg", alt: "Fullur salur af konum við hringborð í golfskála Keilis; út um gluggana sést yfir völlinn.", texti: "Uppskeruhóf miðvikudagsmótaraðarinnar 24. september" },

    // ───────── Lykiltölur ─────────
    { t: "hluti", blokkir: [
      { t: "tolukort", atridi: [
        { heiti: "Konur í mótaröðinni", tala: "130", texti: "um það bil, yfir 120 árið 2025" },
        { heiti: "Konur í haustferðinni", tala: "95", texti: "tæplega 100 árið 2025" },
        { heiti: "Verðlaunahafar mótaraðarinnar", tala: "11", texti: "í fjórum flokkum" },
        { heiti: "Nándarverðlaun", tala: "11", texti: "sex í sumar og fimm í haustferðinni" }] }] },

    // ───────── Miðvikudagsmótaröðin ─────────
    { t: "hluti", snid: "kort",
      blokkir: [
        { t: "h2", texti: "Miðvikudagsmótaröðin" },
        { t: "p", texti: "Um 130 konur tóku þátt í miðvikudagsmótaröð Keiliskvenna í sumar, og Sveinskotskonum fjölgaði frá fyrra ári. Keppt var í þremur forgjafarflokkum og í sérstökum flokki á Sveinskotsvelli. Sigurvegarar sumarsins voru krýndir á uppskeruhófinu." }],
      vinstri: [
        { t: "topplisti", titill: "Forgjafarflokkur 0–18, punktar", atridi: [
          { heiti: "Heiðrún Jóhannsdóttir", gildi: "35,75" },
          { heiti: "Rannveig Vigfúsdóttir", gildi: "33,5" },
          { heiti: "Dröfn Þórisdóttir", gildi: "33,25" }] },
        { t: "topplisti", titill: "Forgjafarflokkur 18–36, punktar", atridi: [
          { heiti: "Elna Christel Johansen", gildi: "38,5" },
          { heiti: "Svanhildur Karlsdóttir", gildi: "37,25" },
          { heiti: "Hafdís Hafberg", gildi: "37" }] }],
      haegri: [
        { t: "topplisti", titill: "Forgjafarflokkur 36–54, punktar", atridi: [
          { heiti: "Milla Björk Gunnarsdóttir", gildi: "38,25" },
          { heiti: "Elsa Sigríður Þorvaldsdóttir", gildi: "31,75" }] },
        { t: "topplisti", titill: "Sveinskotsvöllur, punktar", atridi: [
          { heiti: "Helga Kristjánsdóttir", gildi: "20,25" },
          { heiti: "Kristbjörg Bjarkadóttir", gildi: "20,25" },
          { heiti: "Jóhanna Guðrún Guðmundsdóttir", gildi: "20" }] }] },

    // ───────── Nándarverðlaun og uppskeruhóf ─────────
    { t: "hluti", afast: true, jafnt: true,
      vinstri: [
        { t: "h2", texti: "Indverskur matur og nándarverðlaun" },
        { t: "p", texti: "Uppskeruhóf mótaraðarinnar fór fram í golfskálanum fimmtudaginn 24. september. Hrefna og hennar fólk í veitingasölunni buðu upp á indverskan mat, og stemningin var góð." },
        { t: "p", texti: "Auk verðlauna í flokkunum voru veitt nándarverðlaun sumarsins á par 3 holum beggja valla. Næst holu komst Hafdís Hafberg á 12. holu Hvaleyrarvallar, aðeins 138 cm frá." },
        { t: "mynd", src: M + "uppskeruhof-matur.jpg", alt: "Hlaðborð með indverskum réttum í hitapottum og diskum á hvítdúkuðu borði.", texti: "Indverska hlaðborðið á uppskeruhófinu" }],
      haegri: [
        { t: "tafla", snid: "texti", titill: "Nándarverðlaun sumarsins", dalkar: ["Hola", "Kylfingur", "Frá holu"], radir: [
          ["Hvaleyri 4. hola, 27. maí", "Unnur Sæmundsdóttir", "2 m"],
          ["Hvaleyri 6. hola, 24. júní", "Rósa Lyng Svavarsdóttir", "6,69 m"],
          ["Hvaleyri 12. hola, 2. sept.", "Hafdís Hafberg", "**1,38 m**"],
          ["Hvaleyri 17. hola, 19. júlí", "Helga Huld Bjarnadóttir", "1 m"],
          ["Sveinskot 8. hola, 2. sept.", "Fjóla Rún Þorleifsdóttir", "4,06 m"],
          ["Sveinskot 9. hola, 24. júní", "Brimrún Björgúlfsdóttir", "6,2 m"]] }] },

    // ───────── Haustferðin ─────────
    { t: "hluti", snid: "kort",
      blokkir: [
        { t: "h2", texti: "Haustferðin: vínrautt gegn ólífugrænu" },
        { t: "p", texti: "Hin árlega haustferð Keiliskvenna var farin fyrstu helgina í september og eins og oft áður lá leiðin á Hótel Hamar í Borgarnesi. Alls mættu 95 konur til leiks. Ferðin hefur fest sig í sessi í dagskrá kvennanefndar og sameinar golf, keppni og góða samveru." },
        { t: "p", texti: "Í ár var keppt í nýjum liðslitum: **Team Burgundy** og **Team Olive**. Keppt var bæði í punktakeppni einstaklinga og í liðakeppni, þar sem samanlagt skor liðanna réð úrslitum. Eftir harða baráttu í öllum hollum stóð vínrauða liðið uppi sem sigurvegari." },
        { t: "myndir", atridi: [
          { src: M + "team-burgundy.jpg", alt: "Stór hópur kvenna í vínrauðum fatnaði stillir sér upp á grasflöt; trjálundur og fjöll í baksýn." },
          { src: M + "team-olive.jpg", alt: "Stór hópur kvenna í ólífugrænum fatnaði stillir sér upp á sömu grasflöt; trjálundur og fjöll í baksýn." }] }],
      vinstri: [
        { t: "topplisti", titill: "A-flokkur (forgjöf +8–23,9), punktar", athugasemd: "Rósa og Erna með betri seinni níu holur.", atridi: [
          { heiti: "Rósa Ólafsdóttir", gildi: "35" },
          { heiti: "Hildur Íris Helgadóttir", gildi: "35" },
          { heiti: "Erna Snævar Ómarsdóttir", gildi: "34" }] }],
      haegri: [
        { t: "topplisti", titill: "B-flokkur (forgjöf 24–36), punktar", athugasemd: "Sigurlaug með betri seinni níu, Fríða Rut með betri seinni sex.", atridi: [
          { heiti: "Guðrún Benediktsdóttir", gildi: "38" },
          { heiti: "Sigurlaug Jóhannsdóttir", gildi: "36" },
          { heiti: "Fríða Rut Baldursdóttir", gildi: "36" }] }],
      eftir: [
        { t: "p", texti: "**Keilisskvísan** í ár er Guðrún Benediktsdóttir, og lengsta teighöggið átti Heiðrún Jóhannsdóttir. Nándarverðlaun voru veitt á öllum fimm par 3 holum Hamarsvallar, og þar komst Karólína Helga Símonardóttir næst holu, aðeins 23 cm frá á 4. holu." },
        { t: "tafla", snid: "texti", titill: "Nándarverðlaun á Hamarsvelli", dalkar: ["Hola", "Kylfingur", "Frá holu"], radir: [
          ["1. hola", "Edda Jónasdóttir", "1,11 m"],
          ["2. hola", "Bergþóra Pálína Björnsdóttir", "5,94 m"],
          ["3. hola", "Svanhildur Karlsdóttir", "1,70 m"],
          ["4. hola", "Karólína Helga Símonardóttir", "**23 cm**"],
          ["5. hola", "Áslaug Hreiðarsdóttir", "2,19 m"]] }] },

    // ───────── Framundan ─────────
    { t: "hluti", snid: "dokkt", yfirmerking: "Framundan",
      blokkir: [
        { t: "h2", texti: "Sjáumst í púttinu" },
        { t: "p", texti: "Stjórn Keiliskvenna þakkar öllum konum sem tóku þátt í starfinu í sumar. Vetrarstarfið hefst með púttinu miðvikudaginn 20. janúar 2027 kl. 19." }] },

    { t: "hluti", snid: "fotur", blokkir: [
      { t: "p", texti: "Heimildir: fréttir á keilir.is, „Haustferð Keiliskvenna“ (10. september 2026) og „Stuð á uppskeruhófi Kvennamótaraðarinnar“ (1. október 2026). Myndir: keilir.is." }] },
  ],
};

export default { ...sida, efnisar: "2026" };
