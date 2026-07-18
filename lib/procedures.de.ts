import type { ProcedureOverride } from "./procedures";

/**
 * German translations of the procedure content in `procedures.ts`. Only the
 * human-readable fields need an entry per slug — anything omitted here (or
 * omitted entirely for a slug) falls back to the English base automatically.
 * Faithful translations of the existing English medical copy only — no new
 * claims, no prices, nothing not already said in English (see this site's
 * Sağlık Bakanlığı ad-compliance history in HANDOFF.md).
 */
export const proceduresDe: Record<string, ProcedureOverride> = {
  "dental-implants": {
    name: "Zahnimplantate",
    shortName: "Implantate",
    heroTagline: "Dauerhafter, natürlich aussehender Ersatz für fehlende Zähne.",
    summary:
      "Titanimplantate, die mit dem Kieferknochen verwachsen, um Kronen zu tragen, die wie natürliche Zähne aussehen, sich anfühlen und funktionieren.",
    whatItIs:
      "Ein Zahnimplantat ist ein kleiner Titanpfosten, der in den Kieferknochen eingesetzt wird, um die Wurzel eines fehlenden Zahns zu ersetzen. Sobald es mit dem Knochen verwachsen ist, wird eine individuell angefertigte Krone darauf befestigt. Implantate sind eine bewährte Option zum Ersatz eines, mehrerer oder aller Zähne, da sie den Knochen erhalten, benachbarte Zähne nicht beeinträchtigen und bei guter Pflege jahrzehntelang halten können.",
    whoItsFor: [
      "Ihnen fehlen ein oder mehrere Zähne, und Sie suchen eine dauerhafte Lösung",
      "Sie tragen eine Prothese oder Brücke und möchten eine stabilere Lösung",
      "Ihr Zahnfleisch ist gesund und Sie haben ausreichend Kieferknochen (bei Bedarf kann ein Knochenaufbau helfen)",
      "Sie möchten den Knochen erhalten und ein Verschieben benachbarter Zähne vermeiden",
    ],
    processSteps: [
      {
        title: "Online-Beratung",
        description:
          "Senden Sie Fotos und aktuelle Röntgenbilder. Unsere Zahnärzte prüfen Ihren Fall und schicken vor Ihrem ersten Termin einen vorläufigen Plan.",
      },
      {
        title: "Untersuchung & 3D-Scan",
        description:
          "Bei Ihrem ersten Termin bestätigen ein DVT-Scan und eine klinische Untersuchung den Plan und die Implantatpositionen.",
      },
      {
        title: "Implantation",
        description:
          "Das Implantat wird unter örtlicher Betäubung in einem einzigen Termin gesetzt. Die meisten Patienten fahren am selben Tag nach Hause.",
      },
      {
        title: "Einheilung & Osseointegration",
        description:
          "Das Implantat verwächst über 3–6 Monate mit dem Knochen. In dieser Zeit kann zur Ästhetik eine provisorische Krone eingesetzt werden.",
      },
      {
        title: "Definitive Krone",
        description:
          "Bei Ihrem zweiten Besuch wird die definitive Krone eingesetzt und Ihr Biss fein abgestimmt.",
      },
    ],
    daysInIstanbul: "3–5 Tage pro Besuch (in der Regel zwei Besuche)",
    seo: {
      title: "Zahnimplantate in Istanbul, Türkei",
      description:
        "Dauerhafte Zahnimplantate in Istanbul bei einem registrierten Zahnarzt. Online-Beratung vor Ihrem ersten Termin verfügbar.",
      keywords: [
        "Zahnimplantate Türkei",
        "Zahnimplantate Istanbul",
        "Zahnimplantation Istanbul",
      ],
    },
  },

  veneers: {
    name: "Keramik-Veneers",
    shortName: "Veneers",
    heroTagline: "Ein strahlenderes, ebenmäßigeres Lächeln — abgestimmt auf Ihr Gesicht.",
    summary:
      "Hauchdünne Keramikschalen, die auf die Vorderseite Ihrer Zähne geklebt werden, um Farbe, Ausrichtung und Proportionen neu zu gestalten.",
    whatItIs:
      "Veneers sind dünne, individuell angefertigte Keramikverblendungen, die auf die Vorderfläche der Zähne geklebt werden. Sie korrigieren Verfärbungen, Absplitterungen, Lücken und leichte Fehlstellungen und schaffen ein natürliches, ebenmäßiges Lächeln. Moderne Keramik ist sehr widerstandsfähig und reflektiert Licht wie natürlicher Zahnschmelz, sodass das Ergebnis überzeugend und nicht „künstlich“ wirkt.",
    whoItsFor: [
      "Sie möchten Farbe, Form oder Zwischenräume Ihres Lächelns verbessern",
      "Ihre Frontzähne sind angeschlagen, abgenutzt oder leicht schief",
      "Aufhellung allein hat nicht das gewünschte Ergebnis gebracht",
      "Ihre Zähne und Ihr Zahnfleisch sind gesund und Sie haben ausreichend Zahnschmelz",
    ],
    processSteps: [
      {
        title: "Smile-Design-Beratung",
        description:
          "Wir besprechen Ihre Ziele und gestalten mithilfe einer digitalen Vorschau ein zu Ihrem Gesicht passendes Lächeln, damit Sie vorab wissen, was Sie erwartet.",
      },
      {
        title: "Vorbereitung & Scan",
        description:
          "Eine minimale Menge Zahnschmelz wird abgetragen und ein präziser digitaler Abdruck genommen.",
      },
      {
        title: "Provisorien",
        description:
          "Provisorische Veneers ermöglichen es Ihnen, Form und Farbton zu testen, während die endgültigen in unserem Labor gefertigt werden.",
      },
      {
        title: "Befestigung der endgültigen Veneers",
        description:
          "Ihre Keramik-Veneers werden befestigt, poliert und für einen komfortablen, natürlichen Biss angepasst.",
      },
    ],
    daysInIstanbul: "5–7 Tage",
    seo: {
      title: "Keramik-Veneers in Istanbul, Türkei",
      description:
        "Natürlich aussehende Keramik-Veneers in Istanbul. Digitales Smile-Design bei einem registrierten Zahnarzt.",
      keywords: [
        "Veneers Türkei",
        "Veneers Istanbul",
        "Keramik-Veneers Türkei",
        "Hollywood-Lächeln Istanbul",
      ],
    },
  },

  "all-on-4": {
    name: "Zirkon-Implantate",
    shortName: "Zirkon",
    heroTagline: "Ein vollständiger Zahnbogen auf nur vier Implantaten.",
    summary:
      "Eine feste Vollbogen-Versorgung auf vier Implantaten — eine stabile Alternative zu herausnehmbaren Prothesen, oft in kurzer Zeit.",
    whatItIs:
      "Diese Behandlung ersetzt einen vollständigen Bogen fehlender oder geschädigter Zähne durch eine feste Zirkonbrücke, die auf vier strategisch platzierten Implantaten verankert ist. Da der vorhandene Knochen effizient genutzt wird, können viele Patienten auf einen umfangreichen Knochenaufbau verzichten und die Klinik noch am selben Tag mit einer festsitzenden provisorischen Brücke verlassen, gefolgt von einer definitiven Brücke nach der Einheilung.",
    whoItsFor: [
      "Ihnen fehlen die meisten oder alle Zähne eines Kiefers, oder diese sind stark geschädigt",
      "Sie tragen eine Vollprothese und möchten eine feste, stabile Lösung",
      "Sie möchten eine Gaumenbedeckung und Bewegung der Prothese vermeiden",
      "Sie suchen ein Vollbogen-Ergebnis mit weniger Implantaten",
    ],
    processSteps: [
      {
        title: "Beratung & Planung",
        description:
          "Ein DVT-Scan und eine Untersuchung bestätigen das Knochenvolumen und die idealen Implantatpositionen für Ihren Kieferbogen.",
      },
      {
        title: "Implantation",
        description:
          "Vier Implantate werden gesetzt, und in den meisten Fällen wird noch am selben Tag eine festsitzende provisorische Brücke eingesetzt.",
      },
      {
        title: "Einheilung",
        description:
          "Die Implantate verwachsen über einige Monate mit dem Knochen, während Sie die festsitzende provisorische Brücke tragen.",
      },
      {
        title: "Definitive Brücke",
        description:
          "Bei Ihrem Folgebesuch wird die endgültige, individuell angefertigte Brücke für langfristige Funktion und Ästhetik eingesetzt.",
      },
    ],
    daysInIstanbul: "5–7 Tage pro Besuch (in der Regel zwei Besuche)",
    seo: {
      title: "Zirkon-Implantate in Istanbul, Türkei",
      description:
        "Feste Vollbogen-Zähne mit Zirkon-Implantaten in Istanbul, bei einem registrierten Zahnarzt.",
      keywords: [
        "All-on-4 Türkei",
        "All-on-4 Istanbul",
        "Zirkon All-on-4 Türkei",
        "Vollmund-Implantate Türkei",
        "festsitzender Zahnersatz Istanbul",
      ],
    },
  },

  "teeth-whitening": {
    name: "Zahnaufhellung",
    shortName: "Aufhellung",
    heroTagline: "Ein spürbar strahlenderes Lächeln in nur einem Termin.",
    summary:
      "Professionelle Aufhellung in der Klinik, die Verfärbungen sicher und gleichmäßig unter zahnärztlicher Aufsicht entfernt.",
    whatItIs:
      "Bei der professionellen Zahnaufhellung wird unter zahnärztlicher Aufsicht ein kontrolliertes Gel verwendet, um Verfärbungen zu entfernen und den natürlichen Farbton Ihrer Zähne aufzuhellen. Da die Behandlung unter fachlicher Aufsicht mit Zahnfleischschutz erfolgt, sind die Ergebnisse bereits nach einem Termin sichtbar.",
    whoItsFor: [
      "Ihre Zähne sind im Laufe der Zeit vergilbt oder verfärbt",
      "Sie möchten ein strahlenderes Lächeln, ohne die Zahnsubstanz zu verändern",
      "Ihre Zähne und Ihr Zahnfleisch sind gesund und frei von aktiver Karies",
      "Sie möchten eine schnelle Auffrischung, eventuell zusammen mit einer Reinigung",
    ],
    processSteps: [
      {
        title: "Kontrolle",
        description:
          "Eine kurze Untersuchung bestätigt, dass Ihre Zähne und Ihr Zahnfleisch gesund und für eine Aufhellung geeignet sind.",
      },
      {
        title: "Reinigung (optional)",
        description:
          "Eine vorherige professionelle Zahnreinigung sorgt dafür, dass die Aufhellung auf sauberem Zahnschmelz gleichmäßig wirkt.",
      },
      {
        title: "Aufhellung in der Klinik",
        description:
          "Das Zahnfleisch wird geschützt, und das Aufhellungsgel wird in kontrollierten Zyklen aufgetragen und aktiviert.",
      },
      {
        title: "Nachsorge",
        description:
          "Wir geben Ihnen einfache Empfehlungen, damit Ihr Ergebnis möglichst lange strahlend bleibt.",
      },
    ],
    daysInIstanbul: "1–2 Tage",
    seo: {
      title: "Zahnaufhellung in Istanbul, Türkei",
      description:
        "Professionelle Zahnaufhellung in der Klinik in Istanbul. Sichere, zahnärztlich überwachte Aufhellung mit Ergebnis am selben Tag.",
      keywords: [
        "Zahnaufhellung Türkei",
        "Zahnaufhellung Istanbul",
        "Laser-Zahnaufhellung Istanbul",
      ],
    },
  },

  orthodontics: {
    name: "Kieferorthopädie",
    shortName: "Kieferorthopädie",
    heroTagline: "Geradere Zähne mit Brackets oder Alignern.",
    summary:
      "Traditionelle Brackets oder durchsichtige Aligner, die Zähne im Rahmen eines begleiteten Behandlungsplans schrittweise in eine geradere, gleichmäßigere Position bewegen.",
    whatItIs:
      "Die kieferorthopädische Behandlung nutzt feste Brackets oder eine Serie durchsichtiger Aligner, um mit sanftem, kontrolliertem Druck die Zähne im Laufe der Zeit in eine geradere Position zu bewegen. Anders als die meisten anderen hier beschriebenen Behandlungen ist dies keine Behandlung in nur einem Termin — sie erstreckt sich über mehrere Monate: Der Plan wird in Istanbul erstellt, und der Fortschritt wird in Abständen kontrolliert, persönlich oder aus der Ferne, bis das Endergebnis erreicht ist.",
    whoItsFor: [
      "Ihre Zähne stehen eng, mit Lücken oder ungleichmäßig",
      "Sie haben eine Bissfehlstellung (Überbiss, Unterbiss oder Kreuzbiss)",
      "Sie haben Aufhellung oder Veneers ausprobiert, aber das eigentliche Problem ist die Zahnstellung",
      "Sie möchten eine langfristige, nicht-chirurgische Methode, um Ihr Lächeln zu begradigen",
    ],
    processSteps: [
      {
        title: "Beratung & Scan",
        description:
          "Fotos, Röntgenbilder und eine klinische Untersuchung klären, ob Brackets oder Aligner für Ihren Fall geeignet sind, mit einem vorläufigen Behandlungsplan.",
      },
      {
        title: "Behandlungsplan",
        description:
          "Ihr Zahnarzt legt den gesamten Bewegungsverlauf und den erwarteten Zeitrahmen fest, bevor eine Apparatur eingesetzt wird.",
      },
      {
        title: "Eingliederung",
        description:
          "Brackets werden bei Ihrem Eingliederungstermin auf Ihre Zähne geklebt, oder Ihr erstes Set durchsichtiger Aligner wird ausgegeben.",
      },
      {
        title: "Laufende Anpassung",
        description:
          "Der Fortschritt wird in den folgenden Monaten in Abständen kontrolliert — persönlich bei Rückbesuchen oder in der Zwischenzeit aus der Ferne — mit Anpassungen oder neuen Alignersets nach Bedarf.",
      },
      {
        title: "Retention",
        description:
          "Nach Abschluss der Behandlung hält ein Retainer Ihre Zähne langfristig in der neuen Position.",
      },
    ],
    daysInIstanbul: "Plan wird in Istanbul erstellt; Fortschritt wird in den folgenden Monaten überwacht",
    seo: {
      title: "Kieferorthopädie in Istanbul, Türkei",
      description:
        "Brackets und durchsichtige Aligner in Istanbul, mit einem in Istanbul erstellten Behandlungsplan und persönlicher oder ferner Überwachung.",
      keywords: [
        "Kieferorthopädie Türkei",
        "Zahnspange Istanbul",
        "durchsichtige Aligner Türkei",
        "Invisalign Istanbul",
      ],
    },
  },

  "root-canal": {
    name: "Wurzelkanalbehandlung",
    shortName: "Wurzelkanalbehandlung",
    heroTagline: "Retten Sie einen geschädigten oder infizierten Zahn, statt ihn zu verlieren.",
    summary:
      "Ein Verfahren, das infiziertes oder geschädigtes Gewebe aus dem Inneren eines Zahns entfernt und den Raum anschließend reinigt, formt und versiegelt, um den natürlichen Zahn zu erhalten.",
    whatItIs:
      "Die Wurzelkanalbehandlung entfernt infiziertes oder entzündetes Pulpagewebe — das weiche Gewebe im Zahninneren, das Nerven und Blutgefäße enthält —, meist verursacht durch tiefe Karies, einen Riss oder wiederholte zahnärztliche Eingriffe am selben Zahn. Der Raum wird gereinigt, geformt und mit einem Füllmaterial versiegelt; anschließend wird häufig eine Krone gesetzt, um den Zahn zu schützen und zu stärken. Es ist eine bewährte Methode, einen Zahn zu retten, der sonst gezogen werden müsste.",
    whoItsFor: [
      "Sie haben anhaltende Zahnschmerzen, besonders bei heißen oder kalten Speisen",
      "Ein Zahn ist gerissen, tief kariös oder wurde bereits mehrfach behandelt",
      "Sie bemerken Schwellungen oder Druckempfindlichkeit am Zahnfleisch nahe einem bestimmten Zahn",
      "Ihr Zahnarzt hat auf einem Röntgenbild infiziertes oder geschädigtes Pulpagewebe festgestellt",
    ],
    processSteps: [
      {
        title: "Untersuchung & Röntgen",
        description:
          "Ihr Zahnarzt untersucht den Zahn und macht ein Röntgenbild, um das Ausmaß der Schädigung oder Infektion zu bestätigen.",
      },
      {
        title: "Lokalanästhesie",
        description:
          "Der Bereich wird betäubt, damit die Behandlung durchgehend angenehm verläuft.",
      },
      {
        title: "Reinigung des Kanals",
        description:
          "Das infizierte oder geschädigte Pulpagewebe wird entfernt, das Zahninnere gereinigt und geformt.",
      },
      {
        title: "Füllung & Versiegelung",
        description:
          "Der gereinigte Raum wird gefüllt und versiegelt, um eine erneute Infektion zu verhindern.",
      },
      {
        title: "Krone (falls nötig)",
        description:
          "Anschließend wird oft eine Krone gesetzt, um den Zahn langfristig zu schützen und zu stärken.",
      },
    ],
    daysInIstanbul: "1-2 Termine (bei komplexen Fällen ggf. mehr)",
    seo: {
      title: "Wurzelkanalbehandlung in Istanbul, Türkei",
      description:
        "Wurzelkanalbehandlung in Istanbul bei einem registrierten Zahnarzt — retten Sie Ihren geschädigten oder infizierten Zahn.",
      keywords: [
        "Wurzelkanalbehandlung Türkei",
        "Wurzelkanalbehandlung Istanbul",
        "Endodontie Türkei",
        "Wurzelbehandlung Istanbul",
      ],
    },
  },

  "gum-treatment": {
    name: "Zahnfleischbehandlung",
    shortName: "Zahnfleischbehandlung",
    heroTagline: "Gesünderes Zahnfleisch, behandelt bevor Probleme fortschreiten.",
    summary:
      "Professionelle Tiefenreinigung und Pflege, die Plaque und Zahnstein unterhalb des Zahnfleischrands entfernt und hilft, das Fortschreiten von Zahnfleischerkrankungen zu verhindern.",
    whatItIs:
      "Die Zahnfleisch- (parodontale) Behandlung behandelt Entzündungen, Zahnfleischbluten oder frühe Zahnfleischerkrankungen durch Entfernung von Plaque und Zahnstein, der sich ober- und unterhalb des Zahnfleischrands ansammelt. Die zentrale Behandlung ist das Scaling und die Wurzelglättung — eine gründliche Reinigung der Zahnwurzeloberflächen —, die dem Zahnfleisch hilft, sich wieder anzulegen und zu heilen. Unbehandelt kann eine Zahnfleischerkrankung fortschreiten und den Knochen beeinträchtigen, der Ihre Zähne stützt, weshalb eine frühzeitige Behandlung wichtig ist.",
    whoItsFor: [
      "Ihr Zahnfleisch blutet beim Zähneputzen oder bei der Verwendung von Zahnseide",
      "Sie bemerken Schwellungen, Rötungen oder Druckempfindlichkeit am Zahnfleisch",
      "Sie haben anhaltenden Mundgeruch oder einen schlechten Geschmack, der nicht verschwindet",
      "Ihr Zahnarzt hat tiefere als normale Zahnfleischtaschen gemessen",
    ],
    processSteps: [
      {
        title: "Untersuchung",
        description:
          "Ihr Zahnarzt kontrolliert Ihr Zahnfleisch, misst die Taschentiefe um jeden Zahn und macht gegebenenfalls Röntgenbilder, um den stützenden Knochen zu überprüfen.",
      },
      {
        title: "Scaling & Wurzelglättung",
        description:
          "Plaque und Zahnstein werden sorgfältig ober- und unterhalb des Zahnfleischrands entfernt, die Wurzeloberflächen geglättet.",
      },
      {
        title: "Heilung",
        description:
          "Dem Zahnfleisch wird Zeit gegeben, zu heilen und sich wieder an die gereinigten Zahnoberflächen anzulegen.",
      },
      {
        title: "Kontrolle & Erhaltung",
        description:
          "Eine Nachkontrolle bestätigt, dass das Zahnfleisch gut verheilt, mit Hinweisen zur weiteren Pflege.",
      },
    ],
    daysInIstanbul: "1-2 Termine, im Abstand von etwa einer Woche",
    seo: {
      title: "Zahnfleischbehandlung in Istanbul, Türkei",
      description:
        "Professionelle Zahnfleisch- (parodontale) Behandlung in Istanbul bei einem registrierten Zahnarzt.",
      keywords: [
        "Zahnfleischbehandlung Türkei",
        "Zahnfleischbehandlung Istanbul",
        "Parodontalbehandlung Türkei",
        "Zahnfleischerkrankung Behandlung Istanbul",
      ],
    },
  },
};
