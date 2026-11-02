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

  // Drei Typen mit je 5 Szenarien, damit die Quelle kein sicherer Hinweis ist:
  //   quelle   = Aufmachung hilft: echt ist ein seriöser Artikel, Fake ein reißerischer Post
  //   inhalt   = Nur der Inhalt zählt: beide Versionen haben dieselbe Aufmachung
  //   taeuscht = Aufmachung täuscht: echt ist ein lockerer Post, Fake ein sachlicher Artikel
  typen: {
    quelle: "Aufmachung hilft",
    inhalt: "Nur der Inhalt zählt",
    taeuscht: "Aufmachung täuscht"
  },

  // format: "artikel" (Nachrichtenseite) oder "post" (Social Media).
  // Alle Absender sind erfunden. Dieselben Nachrichtenseiten tauchen mal echt, mal falsch auf.
  // Reihenfolge und Position (A/B) werden pro Person ausgelost.
  szenarien: [
    // ---------- Typ: Aufmachung hilft ----------
    {
      id: "s2", thema: "Deutschlandticket", typ: "quelle",
      echt: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Verkehr", datum: "01.05.2023",
        titel: "Deutschlandticket startet: Nahverkehr für 49 Euro im Monat",
        text: "Seit heute gilt das Deutschlandticket. Für 49 Euro im Monat können Busse und Bahnen im Nah- und Regionalverkehr in ganz Deutschland genutzt werden. Das Ticket ist ein monatlich kündbares Abo." },
      fake: { format: "post", absender: "newsdaily.de", datum: "01.05.2023", likes: "18.204", shares: "6.950",
        text: "Das Deutschlandticket startet heute – und für alle unter 25 ist es komplett kostenlos! 🎉 Einfach Ausweis zeigen, ein Abo braucht ihr nicht. Teilt das mit euren Freunden!" },
      aufloesung: "Das Deutschlandticket startete am 1. Mai 2023 für 49 € im Monat. Eine kostenlose Version für unter 25-Jährige gab es nie."
    },
    {
      id: "s5", thema: "Social Media in Australien", typ: "quelle",
      echt: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Digitales", datum: "10.12.2025",
        titel: "Australien: Social-Media-Konten erst ab 16 Jahren",
        text: "Ab heute dürfen Kinder und Jugendliche unter 16 Jahren in Australien keine eigenen Konten mehr auf Plattformen wie TikTok, Instagram und Snapchat haben. Die Anbieter müssen das Alter prüfen, sonst drohen hohe Strafen." },
      fake: { format: "post", absender: "wach.auf.leute", datum: "10.12.2025", likes: "14.392", shares: "6.051",
        text: "Australien sperrt ab heute TikTok und Instagram für ALLE, egal wie alt 🚫📱 Als Nächstes sind wir dran!" },
      aufloesung: "Das Verbot gilt nur für Konten von unter 16-Jährigen. Erwachsene können die Plattformen weiter nutzen."
    },
    {
      id: "s8", thema: "Wärmstes Jahr", typ: "quelle",
      echt: { format: "artikel", absender: "Tagesbote", rubrik: "Wissen", datum: "10.01.2025",
        titel: "2024 war das wärmste Jahr seit Beginn der Messungen",
        text: "Nach Daten des EU-Klimadienstes Copernicus lag die weltweite Durchschnittstemperatur 2024 rund 1,6 Grad über dem vorindustriellen Niveau. Es ist das erste Kalenderjahr, in dem die Marke von 1,5 Grad überschritten wurde." },
      fake: { format: "post", absender: "die.wahrheit.jetzt", datum: "10.01.2025", likes: "9.874", shares: "4.215",
        text: "2024 war das kälteste Jahr seit 100 Jahren ❄️ Steht so in den neuen Messdaten, aber kaum jemand berichtet darüber. Warum wohl?" },
      aufloesung: "Laut Copernicus war 2024 das wärmste Jahr seit Beginn der Aufzeichnungen."
    },
    {
      id: "s10", thema: "Physik-Nobelpreis", typ: "quelle",
      echt: { format: "artikel", absender: "Nordblick Online", rubrik: "Wissenschaft", datum: "08.10.2024",
        titel: "Physik-Nobelpreis für Grundlagen des maschinellen Lernens",
        text: "Der Nobelpreis für Physik geht in diesem Jahr an John Hopfield und Geoffrey Hinton. Sie werden für Entdeckungen ausgezeichnet, die maschinelles Lernen mit künstlichen neuronalen Netzen möglich gemacht haben." },
      fake: { format: "post", absender: "tech.krass", datum: "08.10.2024", likes: "21.660", shares: "7.120",
        text: "Zum ersten Mal geht ein Nobelpreis an eine KI 🤖🏆 ChatGPT wird für seine Beiträge zur Physik ausgezeichnet. Krass, oder?!" },
      aufloesung: "Ausgezeichnet wurden zwei Forscher, deren Arbeit die Grundlage für heutige KI legte, nicht eine KI selbst."
    },
    {
      id: "s13", thema: "Brückeneinsturz Dresden", typ: "quelle",
      echt: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Regional", datum: "11.09.2024",
        titel: "Dresden: Teil der Carolabrücke eingestürzt",
        text: "In der Nacht ist in Dresden ein Teil der Carolabrücke in die Elbe gestürzt. Verletzt wurde nach Angaben der Feuerwehr niemand. Kurz zuvor war noch eine Straßenbahn über die Brücke gefahren." },
      fake: { format: "post", absender: "insider.ost", datum: "11.09.2024", likes: "7.316", shares: "5.982",
        text: "Brücke in Dresden eingestürzt, während eine Straßenbahn drüberfuhr 😱 Es soll viele Verletzte geben, offiziell sagt mal wieder keiner was." },
      aufloesung: "Die Carolabrücke stürzte am 11. September 2024 teilweise ein. Es saß keine Bahn darauf und niemand wurde verletzt."
    },

    // ---------- Typ: Nur der Inhalt zählt ----------
    {
      id: "s1", thema: "USB-C-Pflicht", typ: "inhalt",
      echt: { format: "post", absender: "kurz.und.klar", datum: "28.12.2024", likes: "4.812", shares: "1.233",
        text: "Ab heute gilt in der EU: Neue Smartphones, Tablets und Kopfhörer müssen per USB-C geladen werden können 🔌 Bereits gekaufte Geräte und alte Kabel darf man weiter benutzen." },
      fake: { format: "post", absender: "infopunkt.de", datum: "28.12.2024", likes: "5.307", shares: "1.590",
        text: "Ab heute gilt in der EU: Smartphones dürfen nur noch per USB-C geladen werden 🔌 Wer weiter ein altes Lightning-Kabel benutzt, riskiert ein Bußgeld von bis zu 100 Euro." },
      aufloesung: "Die EU schreibt USB-C nur für neu verkaufte Geräte vor. Alte Kabel darf man weiter benutzen, ein Bußgeld gibt es nicht."
    },
    {
      id: "s3", thema: "Glücksstudie", typ: "inhalt",
      echt: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Gesellschaft", datum: "20.03.2024",
        titel: "Weltglücksbericht: Deutschland fällt auf Platz 24",
        text: "Finnland liegt im World Happiness Report zum siebten Mal in Folge auf Platz eins. Deutschland rutscht von Rang 16 auf Rang 24 und ist damit nicht mehr unter den besten 20 Ländern." },
      fake: { format: "artikel", absender: "Tagesbote", rubrik: "Gesellschaft", datum: "20.03.2024",
        titel: "Weltglücksbericht: Deutschland landet auf dem letzten Platz in Europa",
        text: "Finnland liegt im World Happiness Report zum siebten Mal in Folge auf Platz eins. Deutschland stürzt dagegen ab und landet hinter allen anderen europäischen Ländern auf dem letzten Platz." },
      aufloesung: "Deutschland fiel 2024 auf Platz 24 weltweit, lag aber noch vor vielen anderen europäischen Ländern."
    },
    {
      id: "s6", thema: "Pfand", typ: "inhalt",
      echt: { format: "post", absender: "nachrichten.kompakt", datum: "01.01.2022", likes: "3.940", shares: "870",
        text: "Neu ab heute ♻️ Auch auf Saftflaschen aus Plastik und auf alle Getränkedosen gibt es jetzt 25 Cent Pfand. Für Milchgetränke gilt eine Übergangsfrist bis 2024." },
      fake: { format: "post", absender: "kurz.und.klar", datum: "01.01.2022", likes: "4.118", shares: "1.025",
        text: "Neu ab heute ♻️ Auch auf Glasflaschen gibt es jetzt Einwegpfand, und zwar 50 Cent pro Flasche. Für Wein und Spirituosen gilt eine Übergangsfrist bis 2024." },
      aufloesung: "2022 wurde die Pfandpflicht auf Saftflaschen aus Plastik und alle Dosen ausgeweitet, mit 25 Cent. Ein neues 50-Cent-Pfand auf Glasflaschen gab es nicht."
    },
    {
      id: "s12", thema: "Sonnenfinsternis", typ: "inhalt",
      echt: { format: "post", absender: "himmels.blick", datum: "08.04.2024", likes: "2.981", shares: "730",
        text: "Heute gibt es eine totale Sonnenfinsternis 🌑 Zu sehen ist sie in Mexiko, den USA und Kanada. In Deutschland bekommt man davon leider nichts mit." },
      fake: { format: "post", absender: "nachrichten.kompakt", datum: "08.04.2024", likes: "3.402", shares: "811",
        text: "Heute gibt es eine totale Sonnenfinsternis 🌑 Zu sehen ist sie in ganz Europa. Auch in Deutschland wird es gegen 20 Uhr für ein paar Minuten dunkel." },
      aufloesung: "Die totale Sonnenfinsternis am 8. April 2024 war nur in Nordamerika zu sehen, nicht in Deutschland."
    },
    {
      id: "s15", thema: "Fußball-EM 2024", typ: "inhalt",
      echt: { format: "artikel", absender: "Tagesbote", rubrik: "Sport", datum: "14.07.2024",
        titel: "Spanien ist Europameister",
        text: "Spanien hat das EM-Finale in Berlin mit 2:1 gegen England gewonnen. Mit nun vier Titeln ist Spanien alleiniger Rekord-Europameister." },
      fake: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Sport", datum: "14.07.2024",
        titel: "England ist Europameister",
        text: "England hat das EM-Finale in Berlin mit 2:1 gegen Spanien gewonnen. Es ist der erste große Titel seit der Weltmeisterschaft 1966." },
      aufloesung: "Spanien gewann das Finale 2:1 gegen England. Der Fake vertauscht nur den Sieger, alles andere stimmt."
    },

    // ---------- Typ: Aufmachung täuscht ----------
    {
      id: "s4", thema: "Mondlandung Japan", typ: "taeuscht",
      echt: { format: "post", absender: "sternwarte.erklaert", datum: "25.01.2024", likes: "3.118", shares: "412",
        text: "Japans Mondsonde SLIM ist gelandet – aber kopfüber 🙃 JAXA hat heute das Foto gezeigt. Damit ist Japan das fünfte Land mit einer weichen Mondlandung!" },
      fake: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Wissenschaft", datum: "25.01.2024",
        titel: "Japanische Mondsonde bei Landung zerstört",
        text: "Die japanische Mondsonde SLIM ist bei ihrem Landeversuch umgekippt und zerbrochen. Das zeigt ein Foto, das die Raumfahrtbehörde JAXA heute veröffentlicht hat. Das Mondprogramm des Landes ist vorerst gestoppt." },
      aufloesung: "SLIM landete im Januar 2024 kopfüber, aber intakt, und funkte noch Daten. Hier war der lockere Post echt."
    },
    {
      id: "s7", thema: "Vogel des Jahrhunderts", typ: "taeuscht",
      echt: { format: "post", absender: "vogelwelt.news", datum: "15.11.2023", likes: "2.540", shares: "388",
        text: "Er hat's geschafft! 🐦 Der Puteketeke (Haubentaucher) ist Neuseelands „Vogel des Jahrhunderts“. Danke an John Oliver für die Mega-Kampagne 😄 Forest & Bird hat das Ergebnis bestätigt." },
      fake: { format: "artikel", absender: "Nordblick Online", rubrik: "Panorama", datum: "15.11.2023",
        titel: "Neuseeland annulliert Wahl zum „Vogel des Jahrhunderts“",
        text: "Der Puteketeke hatte die Wahl mit großem Vorsprung gewonnen. Viele Stimmen kamen aus dem Ausland, nachdem der US-Moderator John Oliver weltweit für den Vogel geworben hatte. Der Veranstalter Forest & Bird erklärte das Ergebnis deshalb für ungültig." },
      aufloesung: "Die Wahl wurde nicht annulliert, der Puteketeke ist offizieller Sieger. Der sachliche Artikel war hier der Fake."
    },
    {
      id: "s9", thema: "Mindestlohn", typ: "taeuscht",
      echt: { format: "post", absender: "geld.tipps.24", datum: "01.01.2025", likes: "6.050", shares: "2.731",
        text: "Mehr Geld ab heute 💶 Der Mindestlohn steigt von 12,41 € auf 12,82 € pro Stunde. Check mal, ob dein Arbeitgeber das auch umsetzt!" },
      fake: { format: "artikel", absender: "Tagesbote", rubrik: "Wirtschaft", datum: "01.01.2025",
        titel: "Mindestlohn steigt auf 15 Euro",
        text: "Seit dem 1. Januar liegt der gesetzliche Mindestlohn in Deutschland bei 15 Euro pro Stunde. Bisher waren es 12,41 Euro. Die Erhöhung hatte die Mindestlohnkommission empfohlen." },
      aufloesung: "Am 1. Januar 2025 stieg der Mindestlohn auf 12,82 €, nicht auf 15 €."
    },
    {
      id: "s11", thema: "Olympia in Paris", typ: "taeuscht",
      echt: { format: "post", absender: "sport.flash", datum: "26.07.2024", likes: "12.877", shares: "2.209",
        text: "Was für eine Eröffnung!! 🚤🇫🇷 Die Teams sind auf Booten über die Seine gefahren, und trotz Dauerregen standen Hunderttausende am Ufer." },
      fake: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Sport", datum: "26.07.2024",
        titel: "Olympia-Eröffnung wegen Unwetter ins Stadion verlegt",
        text: "Paris hat die Olympischen Sommerspiele eröffnet, allerdings nicht wie geplant auf der Seine. Wegen Dauerregens wurde die Bootsparade kurzfristig abgesagt und die Feier ins Stade de France verlegt." },
      aufloesung: "Die Feier fand trotz Regen wie geplant auf der Seine statt."
    },
    {
      id: "s14", thema: "Taylor-Swift-Konzerte", typ: "taeuscht",
      echt: { format: "post", absender: "swiftie.updates", datum: "07.08.2024", likes: "33.410", shares: "11.870",
        text: "Die drei Wien-Konzerte sind abgesagt 💔 Die Polizei hat mutmaßliche Anschlagspläne aufgedeckt. Die Tour geht in London weiter, passt auf euch auf!" },
      fake: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Kultur", datum: "07.08.2024",
        titel: "Taylor Swift bricht Europa-Tournee ab",
        text: "Nach mutmaßlichen Anschlagsplänen in Wien hat Taylor Swift alle restlichen Konzerte ihrer Europa-Tournee abgesagt, auch die geplanten Auftritte in London." },
      aufloesung: "Abgesagt wurden nur die drei Konzerte in Wien. Die Tour ging danach in London weiter."
    }
  ]
};
