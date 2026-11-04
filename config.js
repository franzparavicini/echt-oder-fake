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

  // Woran man den Fake erkennen kann. Jeder Fake ist sachlich geschrieben und hat genau einen
  // Fehler, den man direkt im Text sieht – ohne Vorwissen und ohne etwas nachzuprüfen.
  // Echte Meldungen enthalten bewusst auch mal Emojis, Ausrufezeichen oder „teilen“,
  // damit der Stil allein kein Hinweis ist.
  merkmale: {
    rechnung: "Rechen- oder Denkfehler",
    ueberschrift: "Überschrift passt nicht zum Text",
    widerspruch: "Widerspruch im Text",
    manipulation: "Versteckte Manipulation"
  },

  // KI-Siegel: Bei zwei Szenarien trägt eine Version ein „Mit KI erstellt“-Siegel.
  //   ki: "fake" = Siegel am Fake (s4), ki: "echt" = Siegel an der echten Meldung (Falle, s5)

  // Erfundene Medien: Tagesbote, Rundschau Kompakt, Lupe Nachrichten, Nordblick Online.
  // Jedes taucht gleich oft bei echten und bei falschen Meldungen auf.
  szenarien: [
    // ---------- Aufmachung hilft: echt = Artikel, Fake = Post ----------
    {
      id: "s1", thema: "Handyverbot an Schulen", typ: "quelle", merkmal: "rechnung",
      echt: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Bildung", datum: "Heute, 07:45",
        titel: "Bergstedter Gymnasium behält handyfreie Pausen bei",
        text: "Seit einem halben Jahr bleiben die Smartphones am Lessing-Gymnasium in den Pausen in der Tasche. In einer Umfrage der Schülervertretung fanden 41 Prozent die Regel gut, 38 Prozent lehnten sie ab, der Rest war unentschieden. Die Schulkonferenz hat beschlossen, das Verbot vorerst beizubehalten." },
      fake: { format: "post", absender: "schul.news.nord", datum: "vor 2 Std.", likes: "2.412", shares: "390",
        text: "Handyverbot am Lessing-Gymnasium bleibt 📵 In einer Umfrage der Schülervertretung waren 41 % dafür und 38 % dagegen. Damit ist eine klare Mehrheit der Schülerinnen und Schüler für das Verbot." },
      aufloesung: "41 Prozent sind keine Mehrheit, schon gar keine klare. Mehr als die Hälfte war nicht dafür."
    },
    {
      id: "s2", thema: "Energydrinks", typ: "quelle", merkmal: "manipulation",
      echt: { format: "artikel", absender: "Tagesbote", rubrik: "Gesundheit", datum: "Heute, 10:12",
        titel: "Umfrage: Fast jeder fünfte Jugendliche trinkt regelmäßig Energydrinks",
        text: "In einer Befragung des Instituts für Jugendgesundheit Halden gaben 19 Prozent der 1.200 befragten 14- bis 17-Jährigen an, mehrmals pro Woche Energydrinks zu trinken. Das Institut empfiehlt, den Verkauf an unter 16-Jährige zu beschränken." },
      fake: { format: "post", absender: "eltern.wissen.mehr", datum: "vor 4 Std.", likes: "2.877", shares: "1.104",
        text: "Neue Umfrage aus Halden: 19 % der Jugendlichen trinken mehrmals pro Woche Energydrinks. Die Hersteller versuchen gerade, die Studie verbieten zu lassen. Schickt das an alle Eltern in eurer Klassengruppe, solange es noch geht." },
      aufloesung: "Die Zahl stimmt, aber der Rest ist Manipulation: Eine Studie kann man nicht „verbieten lassen“, und „solange es noch geht“ soll Druck machen, damit man ungeprüft weiterleitet."
    },
    {
      id: "s3", thema: "Bahn-Verlosung", typ: "quelle", merkmal: "manipulation",
      echt: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Verkehr", datum: "Heute, 09:03",
        titel: "Regionalbahn Halden–Bergstedt fährt ab Dezember stündlich",
        text: "Ab dem Fahrplanwechsel im Dezember fährt die Regionalbahn zwischen Halden und Bergstedt jede Stunde statt alle zwei Stunden. Der Verkehrsverbund Nordland setzt dafür zwei zusätzliche Züge ein. Die Ticketpreise bleiben gleich." },
      fake: { format: "post", absender: "verkehrsverbund.nordland", datum: "vor 1 Std.", likes: "3.020", shares: "1.488",
        text: "Zum Fahrplanwechsel verlosen wir 500 Jahreskarten für die Strecke Halden–Bergstedt 🎉 Zur Teilnahme teile diesen Beitrag und schick uns per Direktnachricht deinen Namen und deine IBAN, damit wir 1 € Bearbeitungsgebühr abbuchen können." },
      aufloesung: "Der Account klingt offiziell, aber bei einer Verlosung muss man nie Bankdaten per Direktnachricht schicken oder eine Gebühr zahlen. Das ist ein typischer Betrugsversuch."
    },
    {
      id: "s4", thema: "Wolf gesichtet", typ: "quelle", merkmal: "widerspruch", ki: "fake",
      echt: { format: "artikel", absender: "Nordblick Online", rubrik: "Region", datum: "Heute, 11:30",
        titel: "Wolf bei Wallhausen fotografiert",
        text: "Ein Spaziergänger hat am Sonntag am Waldrand bei Wallhausen einen Wolf fotografiert. Das Landesamt für Umwelt hat das Foto geprüft und geht von einem einzelnen jungen Tier auf der Durchreise aus. Hunde sollten im Wald vorerst an der Leine bleiben." },
      fake: { format: "post", absender: "wallhausen.heute", datum: "vor 3 Std.", ki: true, likes: "2.115", shares: "877",
        text: "Wolf bei Wallhausen gesichtet 🐺 Das Landesamt hat bestätigt, dass es ein einzelnes Tier auf der Durchreise ist. Das Rudel hat sich inzwischen fest im Wald angesiedelt, Kinder sollten dort nicht mehr allein spielen." },
      aufloesung: "Erst ist es ein einzelnes Tier auf der Durchreise, im nächsten Satz ein Rudel, das sich fest angesiedelt hat. Beides kann nicht stimmen. Das KI-Siegel passte hier zum Fake, war aber nicht der eigentliche Beweis."
    },
    {
      id: "s5", thema: "Butterpreis", typ: "quelle", merkmal: "rechnung", ki: "echt",
      echt: { format: "artikel", absender: "Tagesbote", rubrik: "Verbraucher", datum: "Heute, 08:20", ki: true,
        titel: "Butter wird etwas günstiger",
        text: "Ein Päckchen Markenbutter kostet in vielen Supermärkten seit Montag 2,19 Euro statt 2,39 Euro. Grund seien gesunkene Großhandelspreise für Milch, teilte der Handelsverband Nordland mit. Ob die Preise weiter sinken, sei noch offen." },
      fake: { format: "post", absender: "preis.radar", datum: "vor 5 Std.", likes: "1.903", shares: "430",
        text: "Butter wird billiger 🧈 Statt 2,39 € kostet das Päckchen jetzt nur noch 2,19 €. Das ist fast die Hälfte weniger. Es lohnt sich also, mehrere Päckchen zu kaufen und einzufrieren." },
      aufloesung: "20 Cent weniger sind keine „fast die Hälfte“. Die Hälfte von 2,39 € wären rund 1,20 €. Die Falle: Die echte Meldung war mit KI erstellt. Ein KI-Siegel heißt nicht, dass der Inhalt falsch ist."
    },

    // ---------- Gleiche Aufmachung ----------
    {
      id: "s6", thema: "Freibad", typ: "inhalt", merkmal: "widerspruch",
      echt: { format: "post", absender: "stadt.halden.info", datum: "vor 2 Std.", likes: "1.284", shares: "211",
        text: "Das Freibad Halden öffnet dieses Jahr erst am 15. Mai, zwei Wochen später als sonst ☀️ Normalerweise beginnt die Saison Anfang Mai. Grund sind Reparaturen am Becken. Der Eintritt steigt leicht von 4 auf 4,50 €." },
      fake: { format: "post", absender: "halden.aktuell", datum: "vor 2 Std.", likes: "1.402", shares: "248",
        text: "Das Freibad Halden öffnet dieses Jahr schon am 15. Mai, zwei Wochen früher als sonst ☀️ Normalerweise beginnt die Saison Anfang Mai. Grund ist das gute Wetter. Der Eintritt steigt leicht von 4 auf 4,50 €." },
      aufloesung: "Wenn die Saison sonst Anfang Mai beginnt, ist der 15. Mai später, nicht früher. Der Fake widerspricht sich in zwei Sätzen."
    },
    {
      id: "s7", thema: "Handy und Schlaf", typ: "inhalt", merkmal: "ueberschrift",
      echt: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Wissen", datum: "Heute, 06:50",
        titel: "Studie: Wer abends lange am Handy ist, schläft etwas kürzer",
        text: "Forschende der Universität Halden haben 2.000 Erwachsene zu ihren Schlafgewohnheiten befragt. Wer abends mehr als zwei Stunden am Smartphone war, schlief im Schnitt 20 Minuten kürzer. Ob das Handy die Ursache ist, lasse sich aus der Befragung nicht ableiten, sagt Studienleiterin Sarah Yilmaz." },
      fake: { format: "artikel", absender: "Tagesbote", rubrik: "Wissen", datum: "Heute, 06:50",
        titel: "Studie zeigt: Das Handy am Abend ist schuld an Schlafmangel",
        text: "Forschende der Universität Halden haben 2.000 Erwachsene zu ihren Schlafgewohnheiten befragt. Wer abends mehr als zwei Stunden am Smartphone war, schlief im Schnitt 20 Minuten kürzer. Ob das Handy die Ursache ist, lasse sich aus der Befragung allerdings nicht ableiten, sagt Studienleiterin Sarah Yilmaz." },
      aufloesung: "Der Text sagt ausdrücklich, dass man nicht weiß, ob das Handy die Ursache ist. Die Überschrift behauptet genau das Gegenteil."
    },
    {
      id: "s8", thema: "Rückruf Speiseeis", typ: "inhalt", merkmal: "widerspruch",
      echt: { format: "post", absender: "verbraucher.check", datum: "vor 6 Std.", likes: "2.735", shares: "1.906",
        text: "Rückruf ⚠️ Eiswerk Nord ruft sein Vanilleeis (500 ml, haltbar bis 12.08.) zurück, weil Plastikteile enthalten sein könnten. Betroffen sind nur Märkte in Nordland. Bitte nicht essen und gern teilen, damit es alle mitbekommen!" },
      fake: { format: "post", absender: "verbraucher.warnung", datum: "vor 6 Std.", likes: "2.918", shares: "2.040",
        text: "Rückruf ⚠️ Eiswerk Nord ruft sein Vanilleeis (500 ml, haltbar bis 12.08.) zurück, weil Plastikteile enthalten sein könnten. Betroffen sind damit alle Eissorten des Herstellers, nur das Schokoeis ist sicher. Bitte nicht essen und weitersagen!" },
      aufloesung: "Zurückgerufen wird nur das Vanilleeis. Daraus folgt nicht, dass „alle Sorten“ betroffen sind, und „alle außer Schoko“ widerspricht sich selbst. Das „gern teilen“ in der echten Meldung ist dagegen bei einer Warnung normal."
    },
    {
      id: "s9", thema: "Lkw-Unfall", typ: "inhalt", merkmal: "ueberschrift",
      echt: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Region", datum: "Heute, 12:05",
        titel: "B27: Umgekippter Lkw sorgt für langen Stau",
        text: "Auf der B27 zwischen Halden und Bergstedt ist am Morgen ein Lkw umgekippt. Der Fahrer wurde leicht verletzt, sagte ein Polizeisprecher. Wegen auslaufenden Diesels war die Straße bis 11 Uhr in beide Richtungen gesperrt." },
      fake: { format: "artikel", absender: "Nordblick Online", rubrik: "Region", datum: "Heute, 12:05",
        titel: "B27: Lkw-Unfall mit mehreren Verletzten",
        text: "Auf der B27 zwischen Halden und Bergstedt ist am Morgen ein Lkw umgekippt. Außer dem Lkw war kein Fahrzeug beteiligt, der Fahrer blieb unverletzt, sagte ein Polizeisprecher. Die Straße war bis 11 Uhr gesperrt." },
      aufloesung: "Die Überschrift spricht von mehreren Verletzten, im Text gibt es keinen einzigen: Nur der Lkw war beteiligt, und der Fahrer blieb unverletzt."
    },
    {
      id: "s10", thema: "Abnehmen mit Linsen", typ: "inhalt", merkmal: "rechnung",
      echt: { format: "post", absender: "gesundheit.kompakt", datum: "vor 3 Std.", likes: "2.204", shares: "517",
        text: "Krasser Fakt 🤯 Die meisten Erwachsenen essen nur etwa halb so viele Ballaststoffe wie empfohlen. Fachleute raten zu rund 30 Gramm am Tag, zum Beispiel aus Vollkorn, Gemüse und Hülsenfrüchten wie Linsen." },
      fake: { format: "post", absender: "gesundheit.heute", datum: "vor 3 Std.", likes: "2.511", shares: "602",
        text: "Gut zu wissen 🥦 In einer Studie haben Teilnehmende, die täglich eine Schüssel Linsen aßen, im Schnitt 2 Kilo pro Woche abgenommen. Nach drei Monaten waren es so insgesamt rund 8 Kilo. Linsen sind also ein echter Geheimtipp." },
      aufloesung: "Drei Monate sind etwa 13 Wochen. Bei 2 Kilo pro Woche wären das rund 26 Kilo, nicht 8. Die Zahlen passen nicht zusammen. Das „Krasser Fakt 🤯“ in der echten Meldung ist nur Stil."
    },

    // ---------- Aufmachung täuscht: echt = Post, Fake = Artikel ----------
    {
      id: "s11", thema: "Stadtfest abgesagt", typ: "taeuscht", merkmal: "ueberschrift",
      echt: { format: "post", absender: "bergstedt.erleben", datum: "vor 1 Std.", likes: "988", shares: "403",
        text: "Bitter!! 😩 Das Stadtfest am Samstag fällt aus. Der Wetterdienst hat eine Unwetterwarnung rausgegeben, die Stadt will das Fest im September nachholen." },
      fake: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Region", datum: "Heute, 14:10",
        titel: "Stadtfest Bergstedt abgesagt, weil die Stadt pleite ist",
        text: "Das Stadtfest am Samstag findet nicht statt. Als Grund nennt die Stadt eine Unwetterwarnung für das Wochenende. Das Fest soll im September nachgeholt werden." },
      aufloesung: "Die Überschrift behauptet Geldnot, im Text ist der Grund eine Unwetterwarnung, und das Fest wird nachgeholt. Die Ausrufezeichen in der echten Meldung sind nur Stil."
    },
    {
      id: "s12", thema: "KI bei Hausaufgaben", typ: "taeuscht", merkmal: "rechnung",
      echt: { format: "post", absender: "schule.digital", datum: "vor 5 Std.", likes: "3.530", shares: "960",
        text: "Krass, oder? 🤖 In einer Umfrage des Lehrerverbands Nordland unter 800 Lehrkräften sagen 6 von 10, dass sie schon mal eine Hausaufgabe bekommen haben, die vermutlich mit KI geschrieben war. Der Verband fordert jetzt klare Regeln." },
      fake: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Bildung", datum: "Heute, 09:40",
        titel: "Umfrage: Die meisten Hausaufgaben werden inzwischen mit KI geschrieben",
        text: "In einer Umfrage des Lehrerverbands Nordland unter 800 Lehrkräften sagen 6 von 10, dass sie schon mal eine Hausaufgabe bekommen haben, die vermutlich mit KI geschrieben war. Der Verband fordert klare Regeln." },
      aufloesung: "„6 von 10 Lehrkräften haben es schon mal erlebt“ heißt nicht, dass die meisten Hausaufgaben mit KI geschrieben werden. Schon eine einzige Hausaufgabe reicht für ein „schon mal“."
    },
    {
      id: "s13", thema: "Busfahrpreise", typ: "taeuscht", merkmal: "rechnung",
      echt: { format: "post", absender: "halden.unterwegs", datum: "vor 4 Std.", likes: "1.730", shares: "288",
        text: "Ab 1. März wird's teurer!! 🚌💸 Das Einzelticket in Halden kostet dann 3,20 € statt 3,00 €. Das Monatsticket bleibt beim alten Preis." },
      fake: { format: "artikel", absender: "Rundschau Kompakt", rubrik: "Region", datum: "Heute, 10:25",
        titel: "Busfahren in Halden wird um ein Drittel teurer",
        text: "Ab dem 1. März kostet das Einzelticket in Halden 3,20 Euro statt bisher 3,00 Euro. Das hat der Stadtrat beschlossen. Das Monatsticket bleibt beim alten Preis." },
      aufloesung: "Von 3,00 € auf 3,20 € sind knapp 7 Prozent. Ein Drittel wäre 1 € mehr. Die Überschrift rechnet falsch."
    },
    {
      id: "s14", thema: "Rapper sagt Tour ab", typ: "taeuscht", merkmal: "ueberschrift",
      echt: { format: "post", absender: "musik.news.de", datum: "vor 2 Std.", likes: "9.410", shares: "1.870",
        text: "Oh nein 😭 Leno K. muss seine Tour wegen einer Stimmband-OP absagen. Die gute Nachricht: Alle Konzerte werden im Herbst nachgeholt, eure Tickets bleiben gültig!" },
      fake: { format: "artikel", absender: "Tagesbote", rubrik: "Kultur", datum: "Heute, 13:15",
        titel: "Rapper Leno K. sagt alle Konzerte ersatzlos ab",
        text: "Rapper Leno K. hat seine Tour wegen einer Stimmband-OP abgesagt. Die Konzerte sollen im Herbst nachgeholt werden, gekaufte Tickets bleiben gültig." },
      aufloesung: "„Ersatzlos“ heißt: ohne Ersatz. Im Text steht aber, dass die Konzerte nachgeholt werden. Überschrift und Text widersprechen sich."
    },
    {
      id: "s15", thema: "Mietpreise", typ: "taeuscht", merkmal: "rechnung",
      echt: { format: "post", absender: "wohnen.kompakt", datum: "vor 6 Std.", likes: "2.087", shares: "655",
        text: "Wohnen wird wieder teurer 🏠😬 Laut neuem Mietspiegel sind die Kaltmieten in Halden im letzten Jahr von 9,40 € auf 9,80 € pro Quadratmeter gestiegen, also um gut 4 %." },
      fake: { format: "artikel", absender: "Lupe Nachrichten", rubrik: "Wohnen", datum: "Heute, 07:30",
        titel: "Mieten in Halden steigen um mehr als zehn Prozent",
        text: "Laut dem neuen Mietspiegel sind die Kaltmieten in Halden im vergangenen Jahr im Schnitt von 9,40 Euro auf 9,80 Euro pro Quadratmeter gestiegen." },
      aufloesung: "40 Cent mehr bei 9,40 € sind gut 4 Prozent. Zehn Prozent wären etwa 94 Cent mehr."
    }
  ]
};
