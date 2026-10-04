// ============================================================
//  Konfiguration der Umfrage
//  Forschungsfrage: Wie unterscheiden Alter und Mediennutzung
//  das Erkennen von Fake News im Internet?
// ============================================================
window.UMFRAGE_CONFIG = {
  // URL der Google-Apps-Script-Web-App (endet auf /exec). Leer = Testmodus.
  endpoint: "",

  // SHA-256 des Zugangscodes aus dem QR-Code. Der Code selbst steht nur in ZUGANG.txt.
  zugangHash: "3fcbe4757b70a20cb7db7ed8bd194fc870028be3ef2ea5e7f1c15e11586b4125",

  // Unabhängige Variablen
  alter: ["unter 16", "16–19", "20–29", "30–44", "45–59", "60+"],
  screentime: ["unter 30 Min.", "30–60 Min.", "1–2 Std.", "2–4 Std.", "über 4 Std."],

  // 15 Szenarien. Jedes Mal dieselbe Nachricht zweimal:
  //   echt = sachlicher Artikel einer seriös wirkenden Nachrichtenseite
  //   fake = Social-Media-Post mit verfälschtem Inhalt
  // schwierigkeit: wie deutlich die typischen Fake-Merkmale sind
  //   leicht = viele Merkmale (Großbuchstaben, !!!, Emojis, Verschwörung)
  //   mittel = einige Merkmale (wertend, einzelnes Emoji)
  //   schwer = kaum Merkmale, nur der Inhalt ist verdreht
  // Alle Absender sind erfunden. Ob die echte Meldung als A oder B erscheint, wird pro Person ausgelost.
  szenarien: [
    {
      id: "s1", thema: "USB-C-Pflicht", schwierigkeit: "mittel",
      echt: { absender: "Tagesbote", rubrik: "Verbraucher", datum: "28.12.2024",
        titel: "USB-C wird Standard: Neue EU-Regel für Ladeanschlüsse gilt ab heute",
        text: "Neu verkaufte Smartphones, Tablets, Kameras und Kopfhörer müssen in der EU ab sofort über einen USB-C-Anschluss geladen werden können. Geräte, die bereits gekauft wurden, sind davon nicht betroffen." },
      fake: { absender: "handy.hacks.de", datum: "28.12.2024", likes: "8.412", shares: "2.903",
        text: "Ab heute sind iPhone-Ladekabel in der EU verboten. Wer sein altes Kabel weiter benutzt, muss mit einem Bußgeld rechnen 😳 Info teilen, viele wissen das noch nicht!",
        merkmale: ["Emoji", "Aufruf zum Teilen", "verdrehte Tatsache"] },
      aufloesung: "Die EU schreibt USB-C nur für neu verkaufte Geräte vor. Alte Kabel darf man weiter benutzen, ein Bußgeld gibt es nicht."
    },
    {
      id: "s2", thema: "Deutschlandticket", schwierigkeit: "leicht",
      echt: { absender: "Rundschau Kompakt", rubrik: "Verkehr", datum: "01.05.2023",
        titel: "Deutschlandticket startet: Bundesweit Nahverkehr für 49 Euro im Monat",
        text: "Seit heute gilt das Deutschlandticket. Für 49 Euro im Monat können Busse und Bahnen im Nah- und Regionalverkehr in ganz Deutschland genutzt werden. Das Ticket ist ein monatlich kündbares Abo." },
      fake: { absender: "news.fuer.dich", datum: "01.05.2023", likes: "21.880", shares: "9.120",
        text: "KRASS!!! Das Deutschlandticket ist ab heute für alle unter 25 KOMPLETT KOSTENLOS 🎉🎉 Die Regierung hat das heimlich beschlossen – TEILEN bevor es gelöscht wird!!!",
        merkmale: ["Großbuchstaben", "viele Ausrufezeichen", "Emojis", "„heimlich beschlossen“", "„bevor es gelöscht wird“"] },
      aufloesung: "Das Deutschlandticket startete am 1. Mai 2023 für 49 € im Monat. Eine kostenlose Version für unter 25-Jährige gab es nie."
    },
    {
      id: "s3", thema: "Glücksstudie", schwierigkeit: "mittel",
      echt: { absender: "Tagesbote", rubrik: "Gesellschaft", datum: "20.03.2024",
        titel: "World Happiness Report: Finnland erneut vorn, Deutschland fällt auf Platz 24",
        text: "Zum siebten Mal in Folge liegt Finnland im Weltglücksbericht auf dem ersten Platz. Deutschland rutscht von Rang 16 auf Rang 24 und ist damit nicht mehr unter den besten 20 Ländern." },
      fake: { absender: "klartext.daily", datum: "20.03.2024", likes: "5.207", shares: "1.644",
        text: "Neue Studie: Deutschland ist jetzt offiziell das unglücklichste Land Europas. Kein Wunder bei DER Politik… 😔",
        merkmale: ["Emoji", "wertender Kommentar", "Übertreibung", "keine genaue Quelle"] },
      aufloesung: "Deutschland fiel 2024 auf Platz 24 weltweit, ist aber bei Weitem nicht das unglücklichste Land Europas."
    },
    {
      id: "s4", thema: "Mondlandung Japan", schwierigkeit: "schwer",
      echt: { absender: "Lupe Nachrichten", rubrik: "Wissenschaft", datum: "25.01.2024",
        titel: "Japanische Mondsonde gelandet, aber auf dem Kopf",
        text: "Die Raumfahrtbehörde JAXA hat ein Foto ihrer Mondsonde SLIM veröffentlicht: Sie ist präzise gelandet, liegt aber kopfüber. Weil die Solarzellen falsch ausgerichtet sind, bekommt sie nur wenig Strom. Japan ist das fünfte Land, dem eine weiche Mondlandung gelungen ist." },
      fake: { absender: "space.news.daily", datum: "25.01.2024", likes: "3.118", shares: "412",
        text: "Japans Mondmission SLIM ist gescheitert. Die Sonde ist bei der Landung zerschellt, der Kontakt ist endgültig abgebrochen. Über eine Milliarde Euro sind damit verloren.",
        merkmale: ["sachlicher Ton", "falsche Behauptung", "überhöhte Zahl"] },
      aufloesung: "SLIM landete im Januar 2024 kopfüber, aber intakt, und funkte noch Daten. Der Fake hatte kaum typische Merkmale."
    },
    {
      id: "s5", thema: "Social Media in Australien", schwierigkeit: "leicht",
      echt: { absender: "Rundschau Kompakt", rubrik: "Digitales", datum: "10.12.2025",
        titel: "Australien: Social-Media-Konten erst ab 16 Jahren",
        text: "In Australien dürfen Kinder und Jugendliche unter 16 Jahren ab heute keine eigenen Konten mehr auf Plattformen wie TikTok, Instagram und Snapchat haben. Die Anbieter müssen das Alter prüfen, sonst drohen Strafen von bis zu 49,5 Millionen australischen Dollar." },
      fake: { absender: "wach.auf.leute", datum: "10.12.2025", likes: "14.392", shares: "6.051",
        text: "AUSTRALIEN SPERRT TIKTOK UND INSTA FÜR ALLE!!! 🚫📱 Als Nächstes sind WIR dran. Wacht endlich auf!!",
        merkmale: ["Großbuchstaben", "viele Ausrufezeichen", "Emojis", "Angstmache", "Übertreibung"] },
      aufloesung: "Das Verbot gilt nur für Konten von unter 16-Jährigen. Erwachsene können die Plattformen weiter nutzen."
    },
    {
      id: "s6", thema: "Pfand", schwierigkeit: "mittel",
      echt: { absender: "Tagesbote", rubrik: "Verbraucher", datum: "01.01.2022",
        titel: "Pfandpflicht ausgeweitet: Auch Saftflaschen kosten jetzt 25 Cent Pfand",
        text: "Seit heute gilt die Pfandpflicht für alle Einweg-Plastikflaschen und Getränkedosen, also auch für Fruchtsäfte. Für Milchgetränke in Plastikflaschen gilt eine Übergangsfrist bis 2024. Das Pfand beträgt weiterhin 25 Cent." },
      fake: { absender: "spar.fuchs.24", datum: "01.01.2022", likes: "6.730", shares: "3.388",
        text: "Ab heute kostet JEDE Flasche 1 € Pfand, auch Glasflaschen 🤬 Abzocke pur, und keiner sagt was!",
        merkmale: ["Großbuchstaben", "Emoji", "wertend („Abzocke“)", "falsche Zahl"] },
      aufloesung: "Die Pfandpflicht wurde 2022 auf Saftflaschen und alle Dosen ausgeweitet. Das Pfand blieb bei 25 Cent."
    },
    {
      id: "s7", thema: "Vogel des Jahrhunderts", schwierigkeit: "schwer",
      echt: { absender: "Lupe Nachrichten", rubrik: "Panorama", datum: "15.11.2023",
        titel: "Haubentaucher ist Neuseelands „Vogel des Jahrhunderts“",
        text: "Der Puteketeke, ein Haubentaucher, hat die Wahl zum „Vogel des Jahrhunderts“ gewonnen. Zuvor hatte der US-Moderator John Oliver weltweit für ihn geworben. Der Naturschutzverband Forest & Bird, der die Wahl veranstaltet, hat das Ergebnis bestätigt." },
      fake: { absender: "welt.kurios", datum: "15.11.2023", likes: "2.540", shares: "388",
        text: "Neuseeland hat die Wahl zum „Vogel des Jahrhunderts“ annulliert. Grund: Der US-Moderator John Oliver hatte zu viele Stimmen aus dem Ausland gesammelt. Die Wahl soll 2024 wiederholt werden.",
        merkmale: ["sachlicher Ton", "Mischung aus wahren und erfundenen Details"] },
      aufloesung: "Die Wahl wurde nicht annulliert, der Puteketeke ist offizieller Sieger. Der Fake mischt echte Details mit einer erfundenen Folge."
    },
    {
      id: "s8", thema: "Wärmstes Jahr", schwierigkeit: "leicht",
      echt: { absender: "Rundschau Kompakt", rubrik: "Wissen", datum: "10.01.2025",
        titel: "2024 war das wärmste Jahr seit Beginn der Messungen",
        text: "Nach Daten des EU-Klimadienstes Copernicus lag die weltweite Durchschnittstemperatur 2024 rund 1,6 Grad über dem vorindustriellen Niveau. Es ist das erste Kalenderjahr, in dem die Marke von 1,5 Grad überschritten wurde." },
      fake: { absender: "die.wahrheit.jetzt", datum: "10.01.2025", likes: "9.874", shares: "4.215",
        text: "Die Medien LÜGEN!!! 2024 war in Wahrheit das KÄLTESTE Jahr seit 100 Jahren ❄️ Das sagt dir natürlich keiner…",
        merkmale: ["Großbuchstaben", "Ausrufezeichen", "Emoji", "„Die Medien lügen“"] },
      aufloesung: "Laut Copernicus war 2024 das wärmste Jahr seit Beginn der Aufzeichnungen."
    },
    {
      id: "s9", thema: "Mindestlohn", schwierigkeit: "mittel",
      echt: { absender: "Tagesbote", rubrik: "Wirtschaft", datum: "01.01.2025",
        titel: "Mindestlohn steigt auf 12,82 Euro pro Stunde",
        text: "Zum Jahreswechsel ist der gesetzliche Mindestlohn in Deutschland von 12,41 Euro auf 12,82 Euro pro Stunde gestiegen. Die Erhöhung hatte die Mindestlohnkommission empfohlen." },
      fake: { absender: "geld.news.24", datum: "01.01.2025", likes: "12.050", shares: "5.731",
        text: "Endlich! Ab heute gilt in Deutschland ein Mindestlohn von 20 Euro pro Stunde 💸 Check mal deine Lohnabrechnung!",
        merkmale: ["Emoji", "Ausrufezeichen", "falsche Zahl"] },
      aufloesung: "Der Mindestlohn stieg am 1. Januar 2025 auf 12,82 €, nicht auf 20 €."
    },
    {
      id: "s10", thema: "Physik-Nobelpreis", schwierigkeit: "leicht",
      echt: { absender: "Lupe Nachrichten", rubrik: "Wissenschaft", datum: "08.10.2024",
        titel: "Physik-Nobelpreis für Grundlagen des maschinellen Lernens",
        text: "Der Nobelpreis für Physik geht in diesem Jahr an John Hopfield und Geoffrey Hinton. Sie werden für Entdeckungen ausgezeichnet, die maschinelles Lernen mit künstlichen neuronalen Netzen möglich gemacht haben." },
      fake: { absender: "tech.krass", datum: "08.10.2024", likes: "18.204", shares: "7.660",
        text: "WAHNSINN!!! Der Nobelpreis geht zum ersten Mal an eine KI 🤖🏆 ChatGPT wurde ausgezeichnet. Die Maschinen übernehmen!!!",
        merkmale: ["Großbuchstaben", "viele Ausrufezeichen", "Emojis", "Übertreibung"] },
      aufloesung: "Ausgezeichnet wurden zwei Forscher, deren Arbeit die Grundlage für heutige KI legte, nicht eine KI selbst."
    },
    {
      id: "s11", thema: "Olympia in Paris", schwierigkeit: "schwer",
      echt: { absender: "Rundschau Kompakt", rubrik: "Sport", datum: "26.07.2024",
        titel: "Olympische Spiele eröffnet: Athletinnen und Athleten fahren auf Booten über die Seine",
        text: "Paris hat die Olympischen Sommerspiele mit einer Feier unter freiem Himmel eröffnet. Statt in einem Stadion zogen die Teams auf Booten über die Seine. Trotz Regen verfolgten Hunderttausende die Zeremonie an den Ufern." },
      fake: { absender: "sport.flash", datum: "26.07.2024", likes: "4.877", shares: "1.209",
        text: "Die Eröffnungsfeier der Olympischen Spiele auf der Seine wurde kurzfristig abgesagt. Grund ist die schlechte Wasserqualität des Flusses. Die Feier soll nun im Stade de France stattfinden.",
        merkmale: ["sachlicher Ton", "echtes Thema (Wasserqualität) mit erfundener Folge"] },
      aufloesung: "Die Feier fand wie geplant auf der Seine statt. Die Wasserqualität war zwar ein Thema, abgesagt wurde aber nichts."
    },
    {
      id: "s12", thema: "Sonnenfinsternis", schwierigkeit: "schwer",
      echt: { absender: "Tagesbote", rubrik: "Wissen", datum: "08.04.2024",
        titel: "Totale Sonnenfinsternis über Nordamerika",
        text: "Von Mexiko über die USA bis nach Kanada wird es heute für einige Minuten dunkel: Der Mond schiebt sich vollständig vor die Sonne. In Deutschland ist die Finsternis nicht zu sehen." },
      fake: { absender: "himmels.blick", datum: "08.04.2024", likes: "2.981", shares: "730",
        text: "Heute Abend gibt es eine totale Sonnenfinsternis, die auch in ganz Deutschland zu sehen ist. Gegen 20 Uhr wird es für rund vier Minuten komplett dunkel. Unbedingt eine Schutzbrille benutzen.",
        merkmale: ["sachlicher Ton", "hilfreich wirkender Tipp", "falscher Ort"] },
      aufloesung: "Die totale Sonnenfinsternis am 8. April 2024 war nur in Nordamerika zu sehen, nicht in Deutschland."
    },
    {
      id: "s13", thema: "Brückeneinsturz Dresden", schwierigkeit: "leicht",
      echt: { absender: "Lupe Nachrichten", rubrik: "Regional", datum: "11.09.2024",
        titel: "Dresden: Teil der Carolabrücke eingestürzt",
        text: "In der Nacht ist in Dresden ein Teil der Carolabrücke in die Elbe gestürzt. Verletzt wurde nach Angaben der Feuerwehr niemand. Kurz zuvor war noch eine Straßenbahn über die Brücke gefahren." },
      fake: { absender: "insider.ost", datum: "11.09.2024", likes: "7.316", shares: "5.982",
        text: "BRÜCKE IN DRESDEN EINGESTÜRZT – DUTZENDE TOTE!!! 😱😱 Die Behörden vertuschen das, die Medien schweigen. Teilt das, bevor es gelöscht wird!!",
        merkmale: ["Großbuchstaben", "viele Ausrufezeichen", "Emojis", "„Behörden vertuschen“", "Aufruf zum Teilen"] },
      aufloesung: "Die Carolabrücke stürzte am 11. September 2024 teilweise ein. Es gab keine Verletzten und keine Toten."
    },
    {
      id: "s14", thema: "Taylor-Swift-Konzerte", schwierigkeit: "mittel",
      echt: { absender: "Tagesbote", rubrik: "Kultur", datum: "07.08.2024",
        titel: "Taylor-Swift-Konzerte in Wien wegen Terrorgefahr abgesagt",
        text: "Die drei geplanten Konzerte von Taylor Swift in Wien finden nicht statt. Die Veranstalter sagten sie ab, nachdem die Polizei mutmaßliche Anschlagspläne aufgedeckt hatte. Die Tour wird in London fortgesetzt." },
      fake: { absender: "swiftie.updates", datum: "07.08.2024", likes: "33.410", shares: "11.870",
        text: "Taylor Swift sagt ihre komplette Europa-Tour ab 💔 Alle Konzerte bis Jahresende sind gestrichen, Tickets werden nicht erstattet. Ich kann es nicht glauben…",
        merkmale: ["Emoji", "emotional", "Übertreibung („komplette Tour“)"] },
      aufloesung: "Abgesagt wurden nur die drei Konzerte in Wien. Die Tour ging danach in London weiter."
    },
    {
      id: "s15", thema: "Fußball-EM 2024", schwierigkeit: "schwer",
      echt: { absender: "Rundschau Kompakt", rubrik: "Sport", datum: "14.07.2024",
        titel: "Spanien ist Europameister: 2:1 gegen England im Finale",
        text: "Spanien hat das Finale der Fußball-Europameisterschaft in Berlin mit 2:1 gegen England gewonnen. Für die Spanier ist es der vierte EM-Titel, so viele hat kein anderes Land." },
      fake: { absender: "fussball.ticker", datum: "14.07.2024", likes: "6.104", shares: "988",
        text: "England ist Europameister! Im Finale in Berlin setzte sich die Mannschaft mit 2:1 gegen Spanien durch. Es ist der erste große Titel seit der Weltmeisterschaft 1966.",
        merkmale: ["sachlicher Ton", "echte Details (Berlin, 2:1, 1966) mit vertauschtem Sieger"] },
      aufloesung: "Spanien gewann das Finale 2:1 gegen England. Der Fake vertauscht nur den Sieger, alles andere stimmt."
    }
  ]
};
