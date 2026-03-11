---
id: how-to-create-a-procedure-template
title: Wie man eine Verfahrensvorlage erstellt
sidebar_label: Verfahrensvorlage erstellen
sidebar_position: 2
---

# Wie man eine Verfahrensvorlage erstellt

## Schritt 1: Zu Verfahrensvorlagen navigieren
Erweitern Sie **Wartung** in der Seitenleiste und wählen Sie **Verfahrensvorlagen**. Klicken Sie auf **+ Erstellen**.

## Schritt 2: Allgemeine Parameter definieren

| Feld | Anweisung | Pflichtfeld |
|---|---|---|
| **Name** | Geben Sie eine klare Kennung ein (z. B. „Tägliche Vorstart-Prüfung Kompressor»). | ✅ Ja |
| **Asset** | Verknüpfen Sie dieses Verfahren mit einem bestimmten Asset. Leer lassen für eine allgemeine Vorlage. | — |
| **Typen** | Kategorisieren Sie die Vorlage (z. B. „Präventiv"). | — |
| **Beschreibung** | Geben Sie allgemeine Anweisungen oder Sicherheitskontext für den Techniker an. | — |

## Schritt 3: Builder-Symbolleiste verwenden
Maximal **20 Felder pro Vorlage**.

| Schaltfläche | Funktion |
|---|---|
| **H (Titel hinzufügen)** | Fügt einen visuellen Trenner ein, um Aufgaben in verschiedene Abschnitte zu gruppieren. |
| **! (Hinweis hinzufügen)** | Fügt einen nicht-aktionablen Informationsblock ein (z. B. Sicherheitswarnung). |
| **+ (Aufgabe hinzufügen)** | Fügt einen aktionablen Schritt ein, den der Techniker abschließen muss. |

## Schritt 4: Aufgaben und Eingaben konfigurieren
Für jeden **Aufgaben**-Block: Name und Beschreibung eingeben, **Erforderlich** aktivieren falls nötig, dann **Eingabetyp** auswählen.

## Schritt 5: Bedingte Logik *(Optional)*
1. Klicken Sie auf das **Logikbaum-Symbol** bei einer Aufgabe.
2. Definieren Sie die Regel: **Größer als**, **Kleiner als**, **Gleich**, **Ungleich** oder **Zwischen**.
3. Klicken Sie auf **+** im Logikblock, um Unteraufgaben zu erstellen.

## Schritt 6: Vorschau und speichern
Überprüfen Sie im **VORSCHAU**-Modus, dann kehren Sie zum **EDITOR**-Modus zurück und klicken Sie auf **Einreichen**.
