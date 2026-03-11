---
id: how-to-duplicate-a-meter
title: Wie man einen Zähler dupliziert
sidebar_label: Zähler duplizieren
sidebar_position: 3
---

## Wie man einen Zähler dupliziert

> **Erforderliche Berechtigung:** Zähler hinzufügen

Das Duplizieren eines Zählers ermöglicht Ihnen, schnell einen neuen Zähler zu erstellen, indem Sie die **Konfiguration** eines vorhandenen kopieren.

:::note
Historische Ablesungen und aktive Auslöserzustände werden **nicht** auf den neuen Zähler kopiert.
:::

### Schritt 1: Quellzähler lokalisieren
Navigieren Sie zu **Wartung > Zähler**. Verwenden Sie die Suchleiste oder Filter, um den zu kopierenden Zähler zu finden.

### Schritt 2: Duplizierung einleiten
Wählen Sie den Zähler aus der Liste. Klicken Sie auf die Schaltfläche **Duplizieren** in der Aktionsspalte oder oben rechts in der Detailansicht.

### Schritt 3: Kopierte Parameter ändern

| Feld | Anweisung | Pflichtfeld |
|---|---|---|
| **Name** | Aktualisieren Sie die Kennung. Das System hängt normalerweise „ - Kopie" an den Originalnamen an. Sie müssen einen eindeutigen Namen angeben. | ✅ Ja |
| **Asset** | Weisen Sie den Zähler gegebenenfalls der richtigen Ausrüstung zu. | — |
| **Maßeinheit** | Vom Quellzähler geerbt. Nur bei Bedarf ändern. | ✅ Ja |
| **Ablesewert** | Geben Sie einen anfänglichen Ablesewert für diesen neuen Zähler ein. Historische Ablesungen werden **nicht** kopiert. | ✅ Ja |
| **Beschreibung** | Vom Quellzähler geerbt. Aktualisieren Sie, um den Kontext des neuen Zählers widerzuspiegeln. | — |

### Schritt 4: Konfiguration abschließen
Klicken Sie auf **Einreichen**, um den duplizierten Zähler zu speichern.
