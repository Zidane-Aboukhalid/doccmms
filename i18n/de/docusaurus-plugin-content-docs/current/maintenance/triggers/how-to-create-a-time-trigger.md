---
id: how-to-create-a-time-trigger
title: Wie man einen Zeitauslöser erstellt
sidebar_label: Zeitauslöser erstellen
sidebar_position: 6
---

# Wie man einen Zeitauslöser erstellt

## Schritt 1: Zu Zeitauslösern navigieren
Erweitern Sie **Wartung** in der Seitenleiste und wählen Sie **Zeitauslöser**.

## Schritt 2: Erstellungsformular öffnen
Klicken Sie auf **+ Erstellen** oben rechts.

## Schritt 3: Parameter definieren

| Feld | Anweisung | Pflichtfeld |
|---|---|---|
| **Name** | Geben Sie eine beschreibende Kennung für diesen Zeitplan ein. | ✅ Ja |
| **Wiederholung** | Wählen Sie das Planungsmuster (**Wöchentlich** oder **Monatlich**). | ✅ Ja |
| **Startdatum** | Wählen Sie das Datum, an dem der Zeitplan aktiv wird. | — |
| **Enddatum** | Wählen Sie das Datum, an dem der Zeitplan abläuft. | — |
| **Beschreibung** | Geben Sie Kontext über den Zweck dieses Auslösers an. | — |

## Schritt 4: Wiederholungslogik konfigurieren

**Wöchentlich:**
- **Jeden**: Wählen Sie einen oder mehrere Wochentage.
- **Um**: Legen Sie die genaue Ausführungszeit fest.

**Monatlich (Bestimmte Tage):**
- **Jeden**: Wählen Sie die zutreffenden Monate.
- **Am**: Wählen Sie bestimmte Kalenderdaten (z. B. 1., 15., 31.).
- **Um**: Legen Sie die genaue Ausführungszeit fest.

**Monatlich (Letzte Tage):**
- **Jeden**: Wählen Sie die zutreffenden Monate.
- **Ausführen am**: Wählen Sie ein relatives Monatsende-Datum.
- **Um**: Legen Sie die genaue Ausführungszeit fest.

## Schritt 5: Abschließen und speichern
Klicken Sie auf **Einreichen**. Das System berechnet automatisch den nächsten Ausführungszeitpunkt und zeigt ihn in der Spalte **Nächste Ausführung** an.
