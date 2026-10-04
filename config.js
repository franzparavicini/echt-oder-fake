// ============================================================
//  Konfiguration der Umfrage
// ============================================================
window.UMFRAGE_CONFIG = {
  // URL der Google-Apps-Script-Web-App (endet auf /exec). Siehe ANLEITUNG.md.
  // Leer = Testmodus, es wird nichts gespeichert.
  endpoint: "",

  // SHA-256 des Zugangscodes aus dem QR-Code. Der Code selbst steht nur in ZUGANG.txt.
  zugangHash: "3fcbe4757b70a20cb7db7ed8bd194fc870028be3ef2ea5e7f1c15e11586b4125",

  alter: ["unter 16", "16–19", "20–29", "30–44", "45–59", "60+"],
  screentime: ["unter 30 Min.", "30–60 Min.", "1–2 Std.", "2–4 Std.", "über 4 Std."],
  plattformen: ["TikTok", "Instagram", "YouTube", "Snapchat", "X / Twitter", "Facebook", "Keine davon"],
  quellen: [
    "Social Media",
    "Fernsehen / Radio",
    "Nachrichten-Websites / Apps",
    "Gedruckte Zeitung",
    "Freunde / Familie",
    "Ich verfolge kaum Nachrichten"
  ],
  merkmale: [
    "Absender / Quelle",
    "Ausrufezeichen und Großbuchstaben",
    "Emojis",
    "Wertende oder emotionale Wörter",
    "Zahlen und konkrete Fakten",
    "Aufmachung (Artikel oder Post)",
    "Bauchgefühl"
  ],

  // Jedes Szenario: dieselbe Nachricht zweimal. Eine Version stimmt, eine ist verfälscht.
  // format: "artikel" (Nachrichtenseite) oder "post" (Social Media).
  // Alle Absender sind erfunden. Die Position (A/B) wird pro Person zufällig gelost.
  szenarien: [
    {
      id: "s1", thema: "USB-C-Pflicht", schwierigkeit: "mittel",
      echt: {
        format: "artikel", absender: "Tagesbote", rubrik: "Verbraucher", datum: "28.12.2024",
        titel: "USB-C wird Standard: Neue EU-Regel für Ladeanschlüsse gilt ab heute",
        text: "Neu verkaufte Smartphones, Tablets, Kameras und Kopfhörer müssen in der EU ab sofort über einen USB-C-Anschluss geladen werden können. Geräte, die bereits gekauft wurden, sind davon nicht betroffen."
      },
      fake: {
        format: "post", absender: "handy.hacks.de", datum: "28.12.2024", likes: "8.412", shares: "2.903",
        text: "Ab heute sind iPhone-Ladekabel in der EU verboten. Wer sein altes Kabel weiter benutzt, muss mit einem Bußgeld rechnen 😳 Info teilen, viele wissen das noch nicht!",
        merkmale: ["Emoji", "Aufruf zum Teilen", "verdrehte Tatsache (Bußgeld)"]
      },
      aufloesung: "Die EU schreibt USB-C nur für neu verkaufte Geräte vor. Alte Kabel und Geräte darf man weiter benutzen, ein Bußgeld gibt es nicht."
    },
    {
      id: "s2", thema: "Deutschlandticket", schwierigkeit: "leicht",
      echt: {
        format: "artikel", absender: "Rundschau Kompakt", rubrik: "Verkehr", datum: "01.05.2023",
        titel: "Deutschlandticket startet: Bundesweit Nahverkehr für 49 Euro im Monat",
        text: "Seit heute gilt das Deutschlandticket. Für 49 Euro im Monat können Inhaberinnen und Inhaber Busse und Bahnen im Nah- und Regionalverkehr in ganz Deutschland nutzen. Das Ticket ist ein monatlich kündbares Abo."
      },
      fake: {
        format: "post", absender: "news.fuer.dich", datum: "01.05.2023", likes: "21.880", shares: "9.120",
        text: "KRASS!!! Das Deutschlandticket ist ab heute für alle unter 25 KOMPLETT KOSTENLOS 🎉🎉 Die Regierung hat das heimlich beschlossen – TEILEN bevor es gelöscht wird!!!",
        merkmale: ["Großbuchstaben", "viele Ausrufezeichen", "Emojis", "„heimlich beschlossen“", "„bevor es gelöscht wird“"]
      },
      aufloesung: "Das Deutschlandticket startete am 1. Mai 2023 für 49 € im Monat. Eine kostenlose Version für alle unter 25 gab es nie."
    },
    {
      id: "s3", thema: "Glücksstudie", schwierigkeit: "mittel",
      echt: {
        format: "artikel", absender: "Tagesbote", rubrik: "Gesellschaft", datum: "20.03.2024",
        titel: "World Happiness Report: Finnland erneut vorn, Deutschland fällt auf Platz 24",
        text: "Zum siebten Mal in Folge liegt Finnland im Weltglücksbericht der Vereinten Nationen auf dem ersten Platz. Deutschland rutscht von Rang 16 auf Rang 24 und ist damit nicht mehr unter den besten 20 Ländern."
      },
      fake: {
        format: "post", absender: "klartext.daily", datum: "20.03.2024", likes: "5.207", shares: "1.644",
        text: "Neue Studie: Deutschland ist jetzt offiziell das unglücklichste Land Europas. Kein Wunder bei DER Politik… 😔",
        merkmale: ["Emoji", "wertender Kommentar", "Übertreibung", "keine genaue Quelle"]
      },
      aufloesung: "Deutschland fiel 2024 auf Platz 24 weltweit, ist aber bei Weitem nicht das unglücklichste Land Europas."
    },
    {
      id: "s4", thema: "Mondlandung Japan", schwierigkeit: "schwer",
      echt: {
        format: "post", absender: "sternwarte.erklaert", datum: "25.01.2024", likes: "3.118", shares: "412",
        text: "Japans Mondsonde SLIM ist gelandet, allerdings auf dem Kopf. Die Raumfahrtbehörde JAXA hat heute ein Foto veröffentlicht. Weil die Solarzellen falsch ausgerichtet sind, bekommt die Sonde nur wenig Strom. Japan ist damit das fünfte Land, das eine Sonde weich auf dem Mond gelandet hat."
      },
      fake: {
        format: "artikel", absender: "Weltraum-Aktuell.net", rubrik: "Raumfahrt", datum: "25.01.2024",
        titel: "Japanische Mondmission gescheitert: Sonde SLIM beim Aufprall zerstört",
        text: "Die japanische Raumfahrtbehörde JAXA hat den Kontakt zu ihrer Mondsonde endgültig verloren. Nach Angaben der Behörde wurde SLIM beim Landeversuch vollständig zerstört. Die Kosten der Mission belaufen sich auf über eine Milliarde Euro.",
        merkmale: ["sachlicher Ton, aber falsche Behauptung", "unbekannte Website", "überhöhte Zahl"]
      },
      aufloesung: "SLIM landete im Januar 2024 kopfüber, aber intakt, und funkte noch Daten. Hier war die Fälschung sachlich geschrieben und die echte Meldung ein Post. Das macht es schwer."
    },
    {
      id: "s5", thema: "Social Media in Australien", schwierigkeit: "leicht",
      echt: {
        format: "artikel", absender: "Rundschau Kompakt", rubrik: "Digitales", datum: "10.12.2025",
        titel: "Australien: Social-Media-Konten erst ab 16 Jahren",
        text: "In Australien dürfen Kinder und Jugendliche unter 16 Jahren ab heute keine eigenen Konten mehr auf Plattformen wie TikTok, Instagram und Snapchat haben. Die Anbieter müssen das Alter prüfen. Bei Verstößen drohen ihnen Strafen von bis zu 49,5 Millionen australischen Dollar."
      },
      fake: {
        format: "post", absender: "wach.auf.leute", datum: "10.12.2025", likes: "14.392", shares: "6.051",
        text: "AUSTRALIEN SPERRT TIKTOK UND INSTA FÜR ALLE!!! 🚫📱 Als Nächstes sind WIR dran. Wacht endlich auf!!",
        merkmale: ["Großbuchstaben", "viele Ausrufezeichen", "Emojis", "Angstmache", "Übertreibung („für alle“)"]
      },
      aufloesung: "Das Verbot gilt nur für Konten von unter 16-Jährigen. Erwachsene können die Plattformen weiter nutzen."
    },
    {
      id: "s6", thema: "Pfand", schwierigkeit: "mittel",
      echt: {
        format: "artikel", absender: "Tagesbote", rubrik: "Verbraucher", datum: "01.01.2022",
        titel: "Pfandpflicht ausgeweitet: Auch Saftflaschen kosten jetzt 25 Cent Pfand",
        text: "Seit heute gilt die Pfandpflicht für alle Einweg-Plastikflaschen und Getränkedosen, also auch für Fruchtsäfte. Für Milchgetränke in Plastikflaschen gilt eine Übergangsfrist bis 2024. Das Pfand beträgt weiterhin 25 Cent."
      },
      fake: {
        format: "post", absender: "spar.fuchs.24", datum: "01.01.2022", likes: "6.730", shares: "3.388",
        text: "Ab heute kostet JEDE Flasche 1 € Pfand, auch Glasflaschen 🤬 Abzocke pur, und keiner sagt was!",
        merkmale: ["Großbuchstaben", "Emoji", "wertend („Abzocke“)", "falsche Zahl"]
      },
      aufloesung: "Die Pfandpflicht wurde 2022 auf Saftflaschen und alle Dosen ausgeweitet. Das Pfand blieb bei 25 Cent."
    },
    {
      id: "s7", thema: "Vogel des Jahrhunderts", schwierigkeit: "schwer",
      echt: {
        format: "post", absender: "vogelwelt.news", datum: "15.11.2023", likes: "2.540", shares: "388",
        text: "Der Puteketeke, ein Haubentaucher, ist Neuseelands „Vogel des Jahrhunderts“. Zuvor hatte der US-Moderator John Oliver weltweit für ihn geworben. Der Naturschutzverband Forest & Bird, der die Wahl veranstaltet, hat das Ergebnis bestätigt."
      },
      fake: {
        format: "artikel", absender: "Lupe – Nachrichtenportal", rubrik: "Panorama", datum: "15.11.2023",
        titel: "Neuseeland: Vogelwahl nach Manipulationsvorwürfen annulliert",
        text: "Nach einer Kampagne des US-Moderators John Oliver hat der Veranstalter das Ergebnis der Wahl zum „Vogel des Jahrhunderts“ für ungültig erklärt. Zahlreiche Stimmen seien aus dem Ausland gekommen. Die Wahl soll im kommenden Jahr wiederholt werden.",
        merkmale: ["sachlicher Ton, aber falsche Behauptung", "Mischung aus wahren und erfundenen Details"]
      },
      aufloesung: "Die Wahl wurde nicht annulliert, der Puteketeke ist offizieller Sieger. Die Fälschung mischt echte Details (John Oliver, Stimmen aus dem Ausland) mit einer erfundenen Folge."
    },
    {
      id: "s8", thema: "Wärmstes Jahr", schwierigkeit: "leicht",
      echt: {
        format: "artikel", absender: "Rundschau Kompakt", rubrik: "Wissen", datum: "10.01.2025",
        titel: "2024 war das wärmste Jahr seit Beginn der Messungen",
        text: "Nach Daten des EU-Klimadienstes Copernicus lag die weltweite Durchschnittstemperatur 2024 rund 1,6 Grad über dem vorindustriellen Niveau. Es ist das erste Kalenderjahr, in dem die Marke von 1,5 Grad überschritten wurde."
      },
      fake: {
        format: "post", absender: "die.wahrheit.jetzt", datum: "10.01.2025", likes: "9.874", shares: "4.215",
        text: "Die Medien LÜGEN!!! 2024 war in Wahrheit das KÄLTESTE Jahr seit 100 Jahren ❄️ Das sagt dir natürlich keiner…",
        merkmale: ["Großbuchstaben", "Ausrufezeichen", "Emoji", "„Die Medien lügen“", "„das sagt dir keiner“"]
      },
      aufloesung: "Laut Copernicus war 2024 das wärmste Jahr seit Beginn der Aufzeichnungen."
    }
  ]
};
