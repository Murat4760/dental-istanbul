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
    name: "All-on-4-Implantate",
    shortName: "All-on-4",
    heroTagline: "Ein vollständiger Zahnbogen auf nur vier Implantaten.",
    summary:
      "Eine feste Vollbogen-Versorgung auf vier Implantaten — eine stabile Alternative zu herausnehmbaren Prothesen, oft in kurzer Zeit.",
    whatItIs:
      "All-on-4 ersetzt einen vollständigen Bogen fehlender oder geschädigter Zähne durch eine feste Brücke, die auf vier strategisch platzierten Implantaten verankert ist. Da der vorhandene Knochen effizient genutzt wird, können viele Patienten auf einen umfangreichen Knochenaufbau verzichten und die Klinik noch am selben Tag mit einer festsitzenden provisorischen Brücke verlassen, gefolgt von einer definitiven Brücke nach der Einheilung.",
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
      title: "All-on-4-Implantate in Istanbul, Türkei",
      description:
        "Feste Vollbogen-Zähne mit All-on-4-Implantaten in Istanbul, bei einem registrierten Zahnarzt.",
      keywords: [
        "All-on-4 Türkei",
        "All-on-4 Istanbul",
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

  crowns: {
    name: "Zahnkronen",
    shortName: "Kronen",
    heroTagline: "Kraft und Form für geschädigte Zähne wiederherstellen.",
    summary:
      "Individuell angefertigte Kappen, die einen geschwächten, gerissenen oder stark gefüllten Zahn abdecken und schützen und dabei sein natürliches Aussehen wiederherstellen.",
    whatItIs:
      "Eine Krone ist eine individuell angefertigte Kappe, die einen beschädigten oder stark restaurierten Zahn bedeckt, um Form, Stabilität und Aussehen wiederherzustellen. Moderne Vollkeramik- und Zirkonkronen sind stabil und ähneln natürlichen Zähnen sehr, weshalb sie sich sowohl für Seiten- als auch Frontzähne eignen.",
    whoItsFor: [
      "Sie haben einen gerissenen, abgenutzten oder stark gefüllten Zahn",
      "Sie hatten eine Wurzelbehandlung und müssen den Zahn schützen",
      "Sie möchten Form oder Farbe eines einzelnen Zahns verbessern",
      "Sie benötigen eine Krone als Teil einer Brücke oder auf einem Implantat",
    ],
    processSteps: [
      {
        title: "Beurteilung",
        description:
          "Der Zahn wird untersucht, und eventuelle Karies wird behandelt, damit die Krone auf einer gesunden Grundlage sitzt.",
      },
      {
        title: "Vorbereitung & Scan",
        description:
          "Der Zahn wird beschliffen, und für das Labor wird ein präziser digitaler Abdruck genommen.",
      },
      {
        title: "Provisorische Krone",
        description: "Ein Provisorium schützt den Zahn, während Ihre definitive Krone angefertigt wird.",
      },
      {
        title: "Eingliederung",
        description:
          "Die endgültige Krone wird auf Passform, Farbe und Biss geprüft und dann fest zementiert.",
      },
    ],
    daysInIstanbul: "3–5 Tage",
    seo: {
      title: "Zahnkronen in Istanbul, Türkei",
      description:
        "Zirkon- und Keramikkronen in Istanbul. Natürlich aussehende Ergebnisse von einem registrierten Zahnarzt.",
      keywords: [
        "Zahnkronen Türkei",
        "Zahnkronen Istanbul",
        "Zirkonkronen Türkei",
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
};
