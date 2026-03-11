---
id: how-to-change-work-order-status
title: Wie man den Status eines Arbeitsauftrags ändert
sidebar_label: Status ändern
sidebar_position: 6
---

# Wie man den Status eines Arbeitsauftrags ändert

1. Navigieren Sie zu **Wartung > Arbeitsaufträge**. Lokalisieren Sie Ihren Arbeitsauftrag.
2. Klicken Sie auf **Mehr (⋯)**, dann fahren Sie mit der Maus über **Markieren als >**.
3. Das Untermenü zeigt nur die **erlaubten Status**. Klicken Sie auf den entsprechenden Status.

## Der „Abgeschlossen"-Auslöser: Finanzen und Inventar

### Schritt 1: Abschluss bestätigen
Bei Auswahl von **Abgeschlossen** zeigt das System ein Modal **Abschluss bestätigen**:

| Feld | Anweisung | Pflichtfeld |
|---|---|---|
| **Dauer** | Geben Sie die gesamte endgültige Zeit ein, die für die Aufgabe aufgewendet wurde. | ✅ Ja |
| **Enddatum** | Wählen Sie das genaue Datum und die Uhrzeit, zu der die Arbeit abgeschlossen wurde. | ✅ Ja |

### Schritt 2: Arbeitskosten überprüfen
Der untere Teil des Modals berechnet automatisch die genauen Arbeitskosten (Stunden × Stundensatz + Überstunden = Gesamtkosten).

### Schritt 3: Einreichen
Klicken Sie auf **Einreichen**. In diesem genauen Moment **schließt** das System die Arbeitskosten ab und **zieht dauerhaft** alle Artikel aus „Teile und Zubehör" von Ihrem Live-Inventar ab.
