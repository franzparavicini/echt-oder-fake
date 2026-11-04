// ============================================================
//  Konfiguration der Umfrage
//  Forschungsfrage: Wie unterscheiden Alter und Mediennutzung
//  das Erkennen von Fake News im Internet?
//
//  Alle Meldungen sind für die Umfrage ausgedacht (erfundene Orte,
//  Personen und Medien). So hilft Vorwissen nicht – man muss die
//  Falschmeldung an ihren Merkmalen erkennen.
// ============================================================
window.UMFRAGE_CONFIG = {
  // URL der Google-Apps-Script-Web-App (endet auf /exec). Leer = Testmodus.
  endpoint: "",

  // SHA-256 des Zugangscodes aus dem QR-Code. Der Code selbst steht nur in ZUGANG.txt.
  zugangHash: "3fcbe4757b70a20cb7db7ed8bd194fc870028be3ef2ea5e7f1c15e11586b4125",

  // Unabhängige Variablen
  alter: ["unter 16", "16–19", "20–29", "30–44", "45–59", "60+"],
  screentime: ["unter 30 Min.", "30–60 Min.", "1–2 Std.", "2–4 Std.", "über 4 Std."],

  // Wie die Aufmachung zur Lösung steht (je 5 Szenarien)
  typen: {
    quelle: "Aufmachung hilft",       // echt = seriöser Artikel, Fake = Post
    inhalt: "Gleiche Aufmachung",     // beide gleich aufgemacht, nur der Inhalt verrät den Fake
    taeuscht: "Aufmachung täuscht"    // echt = lockerer Post, Fake = seriös wirkender Artikel
  },

  // Woran man den Fake erkennen kann (ohne Vorwissen)
  merkmale: {
    stil: "Reißerischer Stil",
    angst: "Angstmache und Verschwörung",
    zuschoen: "Zu schön, um wahr zu sein",
    vage: "Vage Quelle, fehlende Details",
    widerspruch: "Widerspruch im Text"
  },

  // Erfundene Medien: Tagesbote, Rundschau Kompakt, Lupe Nachrichten, Nordblick Online.
  // Jedes taucht gleich oft bei echten und bei falschen Meldungen auf.
  szenarien: [
    // ---------- Aufmachung hilft ----------
    {
      id: "s1", thema: "Handyverbot an Schulen", typ: "quelle", merkmal: "stil",
      echt: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Bildung", datum: "Heute, 07:45",
        titel: "Gymnasium in Bergstedt testet handyfreie Pausen",
        text: "Am Lessing-Gymnasium in Bergstedt bleiben Smartphones ab Montag in den Pausen in der Tasche. Der Versuch läuft zunächst bis zu den Sommerferien, sagte Schulleiterin Anja Krämer. Danach entscheiden Schülervertretung und Eltern gemeinsam, ob die Regel bleibt." },
      fake: { format: "post", absender: "schulnews.krass", datum: "vor 2 Std.", likes: "6.412", shares: "2.390",
        text: "ALLE Schulen verbieten ab Montag Handys!!! 📵😡 Wer erwischt wird, fliegt sofort von der Schule. Teilt das, bevor es gelöscht wird!!" },
      aufloesung: "Großbuchstaben, viele Ausrufezeichen, Emojis und „Teilt das, bevor es gelöscht wird“ sind typische Merkmale von Falschmeldungen. Die seriöse Meldung nennt eine konkrete Schule und eine Ansprechpartnerin."
    },
    {
      id: "s2", thema: "Energydrinks", typ: "quelle", merkmal: "angst",
      echt: { format: "artikel", absender: "Tagesbote", rubrik: "Gesundheit", datum: "Heute, 10:12",
        titel: "Umfrage: Fast jeder fünfte Jugendliche trinkt regelmäßig Energydrinks",
        text: "In einer Befragung des Instituts für Jugendgesundheit Halden gaben 18 Prozent der 1.200 befragten 14- bis 17-Jährigen an, mehrmals pro Woche Energydrinks zu trinken. Die Forschenden empfehlen, den Verkauf an Minderjährige stärker zu kontrollieren." },
      fake: { format: "post", absender: "gesund.leben.wahrheit", datum: "vor 4 Std.", likes: "5.877", shares: "3.104",
        text: "Ärzte schlagen Alarm 🚨 Schon EIN Energydrink kann dein Herz für immer schädigen! Die Getränkeindustrie will nicht, dass du das weißt. Teilen!" },
      aufloesung: "„Ärzte“ ohne Namen, Angst („für immer schädigen“) und „die Industrie will nicht, dass du das weißt“ sind Warnsignale. Die seriöse Meldung nennt Institut, Zahl der Befragten und das genaue Ergebnis."
    },
    {
      id: "s3", thema: "Bahn-Gewinnspiel", typ: "quelle", merkmal: "zuschoen",
      echt: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Verkehr", datum: "Heute, 09:03",
        titel: "Regionalbahn zwischen Halden und Bergstedt fährt bald stündlich",
        text: "Ab dem Fahrplanwechsel im Dezember fährt die Regionalbahn zwischen Halden und Bergstedt im Stundentakt statt alle zwei Stunden. Das teilte der Verkehrsverbund Nordland mit. Die Fahrzeit bleibt bei rund 40 Minuten." },
      fake: { format: "post", absender: "bahn.deals.gratis", datum: "vor 1 Std.", likes: "7.020", shares: "4.488",
        text: "🎁 Zum Fahrplanwechsel verschenkt die Bahn 10.000 Jahrestickets! Einfach diesen Beitrag teilen und deine Kontodaten per DM schicken. Nur noch heute! ⏰" },
      aufloesung: "Geschenke, Zeitdruck („nur noch heute“) und die Bitte um Kontodaten sind klassische Merkmale von Betrug. Kein Unternehmen fragt Kontodaten über Direktnachrichten ab."
    },
    {
      id: "s4", thema: "Wolf gesichtet", typ: "quelle", merkmal: "stil",
      echt: { format: "artikel", absender: "Nordblick Online", rubrik: "Region", datum: "Heute, 11:30",
        titel: "Wolf bei Wallhausen gesichtet",
        text: "Ein Spaziergänger hat am Sonntag am Waldrand bei Wallhausen einen Wolf fotografiert. Das Landesamt für Umwelt hat das Foto geprüft und bestätigt. Eine Gefahr für Menschen bestehe nach bisherigen Erkenntnissen nicht, sagte ein Sprecher. Hunde sollten im Wald an der Leine bleiben." },
      fake: { format: "post", absender: "heimat.alarm", datum: "vor 3 Std.", likes: "6.115", shares: "3.877",
        text: "WOLFSRUDEL greift Kinder in Wallhausen an!!! 🐺😱 Lasst eure Kinder NICHT mehr raus, die Behörden tun mal wieder NICHTS!!" },
      aufloesung: "Großbuchstaben, Ausrufezeichen und Panikmache ohne Quelle. Die seriöse Meldung sagt, wer das Foto geprüft hat, und gibt eine sachliche Einschätzung."
    },
    {
      id: "s5", thema: "Butterpreis", typ: "quelle", merkmal: "vage",
      echt: { format: "artikel", absender: "Tagesbote", rubrik: "Verbraucher", datum: "Heute, 08:20",
        titel: "Butter wird etwas günstiger",
        text: "Ein Päckchen Butter kostet in vielen Supermärkten seit dieser Woche 20 Cent weniger als im Vormonat. Grund seien gesunkene Großhandelspreise für Milch, teilte der Handelsverband Nordland mit." },
      fake: { format: "post", absender: "spar.fuchs.24", datum: "vor 5 Std.", likes: "4.903", shares: "2.230",
        text: "Butter bald für 10 Euro?! 🧈💸 Ab nächster Woche wird alles viel teurer, sagen Insider. Deckt euch JETZT ein, bevor es zu spät ist!" },
      aufloesung: "„Insider“ ist keine überprüfbare Quelle. Dazu kommen eine Schockzahl und Zeitdruck. Die seriöse Meldung nennt den genauen Betrag und wer ihn mitgeteilt hat."
    },

    // ---------- Gleiche Aufmachung ----------
    {
      id: "s6", thema: "Freibad", typ: "inhalt", merkmal: "vage",
      echt: { format: "post", absender: "stadt.halden.info", datum: "vor 2 Std.", likes: "1.284", shares: "211",
        text: "Das Freibad Halden öffnet in diesem Jahr am 15. Mai, zwei Wochen später als sonst ☀️ Grund sind Reparaturen am Becken, teilen die Stadtwerke mit. Der Eintritt bleibt bei 4 Euro." },
      fake: { format: "post", absender: "halden.aktuell", datum: "vor 2 Std.", likes: "1.502", shares: "348",
        text: "Das Freibad Halden öffnet in diesem Jahr am 15. Mai ☀️ Wie ein Mitarbeiter verraten hat, steigt der Eintritt dann von 4 auf 25 Euro. Die Stadt will das wohl erst kurz vorher bekannt geben." },
      aufloesung: "„Ein Mitarbeiter hat verraten“ und „wohl“ sind keine Belege, die Erhöhung auf das Sechsfache ist unrealistisch. Die echte Meldung nennt die Stadtwerke als Quelle."
    },
    {
      id: "s7", thema: "Handy und Schlaf", typ: "inhalt", merkmal: "widerspruch",
      echt: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Wissen", datum: "Heute, 06:50",
        titel: "Studie: Wer abends lange am Handy ist, schläft etwas kürzer",
        text: "Forschende der Universität Halden haben 2.000 Erwachsene zu ihren Schlafgewohnheiten befragt. Wer abends mehr als zwei Stunden am Smartphone war, schlief im Schnitt 20 Minuten kürzer. Ob das Handy die Ursache ist, lasse sich aus der Befragung nicht ableiten, sagt Studienleiterin Sarah Yilmaz." },
      fake: { format: "artikel", absender: "Tagesbote", rubrik: "Wissen", datum: "Heute, 06:50",
        titel: "Studie beweist: Handy am Abend halbiert den Schlaf",
        text: "Forschende haben 2.000 Erwachsene zu ihren Schlafgewohnheiten befragt. Wer abends mehr als zwei Stunden am Smartphone war, schlief im Schnitt 20 Minuten kürzer. Damit ist bewiesen, dass das Handy den Schlaf halbiert." },
      aufloesung: "Die Überschrift passt nicht zum Text: 20 Minuten weniger sind keine Halbierung. Außerdem „beweist“ eine Befragung keine Ursache. Die echte Meldung sagt genau das."
    },
    {
      id: "s8", thema: "Rückruf Speiseeis", typ: "inhalt", merkmal: "vage",
      echt: { format: "post", absender: "verbraucher.check", datum: "vor 6 Std.", likes: "2.735", shares: "1.906",
        text: "Rückruf ⚠️ Eiswerk Nord ruft sein Vanilleeis in der 500-ml-Packung mit Haltbarkeitsdatum 12.08. zurück. Es könnten Plastikteile enthalten sein. Betroffen sind nur Märkte in Nordland. Das Geld gibt es im Laden zurück." },
      fake: { format: "post", absender: "verbraucher.warnung", datum: "vor 6 Std.", likes: "3.118", shares: "2.640",
        text: "Rückruf ⚠️ Alle Eissorten in deutschen Supermärkten sind betroffen! Es könnten Plastikteile enthalten sein. Welche Hersteller, wird noch nicht gesagt. Werft sicherheitshalber alles weg und teilt das!" },
      aufloesung: "Ein echter Rückruf nennt Hersteller, Produkt und Haltbarkeitsdatum. „Alle Sorten, Hersteller unbekannt“ ist unglaubwürdig, dazu der Aufruf zum Teilen."
    },
    {
      id: "s9", thema: "Lkw-Unfall", typ: "inhalt", merkmal: "angst",
      echt: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Region", datum: "Heute, 12:05",
        titel: "B27: Umgekippter Lkw sorgt für langen Stau",
        text: "Auf der B27 zwischen Halden und Bergstedt ist am Morgen ein Lkw umgekippt. Der Fahrer wurde leicht verletzt, sagte ein Polizeisprecher. Die Straße war bis 11 Uhr in beide Richtungen gesperrt." },
      fake: { format: "artikel", absender: "Nordblick Online", rubrik: "Region", datum: "Heute, 12:05",
        titel: "B27: Polizei verschweigt Zahl der Opfer nach Lkw-Unfall",
        text: "Auf der B27 zwischen Halden und Bergstedt ist am Morgen ein Lkw umgekippt. Augenzeugen berichten von vielen Verletzten, die Polizei schweigt dazu. Offenbar soll die Zahl der Opfer nicht bekannt werden." },
      aufloesung: "Unbenannte „Augenzeugen“ statt Polizei, Vermutungen („offenbar“) und der Vorwurf des Verschweigens ohne Beleg. Die echte Meldung zitiert die Polizei."
    },
    {
      id: "s10", thema: "Abnehm-Trick", typ: "inhalt", merkmal: "zuschoen",
      echt: { format: "post", absender: "gesundheit.kompakt", datum: "vor 3 Std.", likes: "2.204", shares: "517",
        text: "Gut zu wissen 🥦 Ernährungsfachleute raten Erwachsenen zu etwa 30 Gramm Ballaststoffen am Tag. Die meisten erreichen das nicht, vor allem weil sie wenig Vollkorn, Gemüse und Hülsenfrüchte essen." },
      fake: { format: "post", absender: "gesundheit.heute", datum: "vor 3 Std.", likes: "2.611", shares: "702",
        text: "Gut zu wissen 🥦 Mit diesem einen Gemüse nimmst du in 7 Tagen 10 Kilo ab, ganz ohne Sport! Welches es ist, verraten wir im Link in der Bio 👇" },
      aufloesung: "10 Kilo in einer Woche ohne Sport ist unrealistisch. Dass die Antwort nur über einen Link verraten wird, ist ein typischer Klick-Köder."
    },

    // ---------- Aufmachung täuscht ----------
    {
      id: "s11", thema: "Stadtfest abgesagt", typ: "taeuscht", merkmal: "vage",
      echt: { format: "post", absender: "bergstedt.erleben", datum: "vor 1 Std.", likes: "988", shares: "403",
        text: "Schade 😕 Das Stadtfest am Samstag fällt aus, weil der Wetterdienst eine Unwetterwarnung herausgegeben hat. Die Stadt sucht einen Ersatztermin im September, alle Infos auf der Website der Stadt." },
      fake: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Region", datum: "Heute, 14:10",
        titel: "Stadtfest Bergstedt abgesagt: Stadt offenbar pleite",
        text: "Das Stadtfest am Samstag findet nicht statt. Wie aus gut informierten Kreisen verlautet, ist die Stadt Bergstedt praktisch pleite und kann sich die Veranstaltung nicht mehr leisten. Eine offizielle Bestätigung gibt es bisher nicht." },
      aufloesung: "„Gut informierte Kreise“ und „keine offizielle Bestätigung“ heißt: Die Behauptung ist nicht belegt, auch wenn der Artikel seriös aussieht. Der lockere Post nennt einen nachprüfbaren Grund."
    },
    {
      id: "s12", thema: "KI bei Hausaufgaben", typ: "taeuscht", merkmal: "widerspruch",
      echt: { format: "post", absender: "schule.digital", datum: "vor 5 Std.", likes: "3.530", shares: "960",
        text: "Krass, oder? 🤖 In einer Umfrage des Lehrerverbands Nordland unter 800 Lehrkräften sagen 6 von 10, dass sie schon mal eine Hausaufgabe bekommen haben, die vermutlich mit KI geschrieben war. Der Verband fordert jetzt klare Regeln." },
      fake: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Bildung", datum: "Heute, 09:40",
        titel: "Umfrage: Fast alle Hausaufgaben werden inzwischen von KI geschrieben",
        text: "In einer Umfrage unter Lehrkräften sagen 6 von 10, dass sie schon mal eine Hausaufgabe bekommen haben, die vermutlich mit KI geschrieben war. Damit steht fest, dass fast alle Hausaufgaben inzwischen von KI stammen." },
      aufloesung: "Aus „6 von 10 Lehrkräften haben es schon mal erlebt“ folgt nicht „fast alle Hausaufgaben“. Die Schlussfolgerung ist falsch, egal wie seriös die Seite aussieht."
    },
    {
      id: "s13", thema: "Busfahrpreise", typ: "taeuscht", merkmal: "widerspruch",
      echt: { format: "post", absender: "halden.unterwegs", datum: "vor 4 Std.", likes: "1.730", shares: "288",
        text: "Ab 1. März wird's teurer 🚌 Das Einzelticket in Halden kostet dann 3,20 € statt 3,00 €. Das hat der Stadtrat gestern beschlossen. Das Monatsticket bleibt beim alten Preis." },
      fake: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Region", datum: "Heute, 10:25",
        titel: "Halden verdreifacht die Busfahrpreise",
        text: "Ab dem 1. März kostet das Einzelticket in Halden 3,20 Euro statt bisher 3,00 Euro. Das hat der Stadtrat beschlossen. Für viele Familien wird Busfahren damit unbezahlbar." },
      aufloesung: "Von 3,00 € auf 3,20 € sind knapp 7 Prozent, keine Verdreifachung. Die Überschrift widerspricht dem eigenen Text."
    },
    {
      id: "s14", thema: "Rapper sagt Tour ab", typ: "taeuscht", merkmal: "vage",
      echt: { format: "post", absender: "musik.news.de", datum: "vor 2 Std.", likes: "9.410", shares: "1.870",
        text: "Uff 😮 Rapper Leno K. sagt seine Tour wegen einer Stimmband-OP ab. Das hat er selbst auf seinem offiziellen Account bekannt gegeben. Die Konzerte werden im Herbst nachgeholt, Tickets bleiben gültig." },
      fake: { format: "artikel", absender: "Tagesbote", rubrik: "Kultur", datum: "Heute, 13:15",
        titel: "Rapper Leno K. beendet seine Karriere",
        text: "Rapper Leno K. hat seine Tour abgesagt. Nach Informationen aus seinem Umfeld will der Musiker nie wieder auftreten. Er selbst hat sich dazu bisher nicht geäußert." },
      aufloesung: "„Aus seinem Umfeld“ ist eine anonyme Quelle, und der Betroffene selbst hat nichts gesagt. Der Post beruft sich auf die eigene Mitteilung des Rappers."
    },
    {
      id: "s15", thema: "Mietpreise", typ: "taeuscht", merkmal: "widerspruch",
      echt: { format: "post", absender: "wohnen.kompakt", datum: "vor 6 Std.", likes: "2.087", shares: "655",
        text: "Mieten steigen weiter 🏠 Laut dem neuen Mietspiegel der Stadt Halden sind die Kaltmieten im letzten Jahr im Schnitt um 4 % gestiegen, auf 9,80 € pro Quadratmeter." },
      fake: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Wohnen", datum: "Heute, 07:30",
        titel: "Mieten in Halden steigen um 40 Prozent",
        text: "Laut dem neuen Mietspiegel sind die Kaltmieten in Halden im vergangenen Jahr im Schnitt von 9,40 Euro auf 9,80 Euro pro Quadratmeter gestiegen. Das ist ein Plus von rund 40 Prozent." },
      aufloesung: "Von 9,40 € auf 9,80 € sind gut 4 Prozent, nicht 40. Der Rechenfehler steckt im Artikel selbst."
    }
  ]
};
