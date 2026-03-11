---
id: about
title: Über Auslöser
sidebar_label: Über Auslöser
sidebar_position: 1
description: Erfahren Sie, was Auslöser in UniCMMS sind und wie Zähler- und Zeitauslöser Ihre Wartungsabläufe automatisieren.
---

# Auslöser

## Über Auslöser

In UniCMMS ist das **Auslöser**-Modul das zentrale Hub Ihrer Automatisierungsregeln. Es ermöglicht Ihnen, genau zu definieren, **wann** kritische Systemereignisse automatisch auftreten sollen.

Durch die Verwaltung von Auslösern als eigenständiges Modul bietet UniCMMS vollständige Flexibilität. Anstatt Automatisierungsregeln für jeden Datensatz neu zu erstellen, können Sie eine **standardisierte Auslöserbibliothek** aufbauen und diese mit verschiedenen Modulen in Ihrem System verknüpfen.

Zur Unterstützung verschiedener Betriebsstrategien können Sie zwei Arten von Automatisierungsregeln erstellen:

### 1. Zeitauslöser (Planer)
Zeitauslöser automatisieren Aktionen basierend auf **strengen Kalender- oder Zeitintervallen**. Diese Auslöser sorgen dafür, dass Systemereignisse zu genauen, wiederkehrenden Zeitpunkten auftreten, unabhängig von der Asset-Nutzung.

> **Beispiel:** Sie erstellen einen Zeitauslöser für „Jeden Montag um 08:00 Uhr". Sie können diesen einzelnen Auslöser mit mehreren verschiedenen automatisierten Workflows verknüpfen.

### 2. Zählerauslöser
Zählerauslöser automatisieren Aktionen basierend auf der **physischen Realität Ihrer Ausrüstung**. Diese Auslöser überwachen aktiv die numerischen Daten, die im Zähler-Modul erfasst werden. Sie definieren einen bestimmten Schwellenwert (die Bedingung), und sobald ein Techniker eine Ablesung erfasst, die diesen Schwellenwert erreicht, gibt der Auslöser sofort sein Signal aus.

> **Beispiel:** Sie erstellen einen Zählerauslöser mit der Regel: „Ablesung überschreitet 15.000 kWh". Sobald dieser Energieschwellenwert erreicht wird, führt das System die zugehörige Aktion aus.

---

## Logik der Zählerauslöser-Bedingungen

| Bedingung | Systemlogik | Zurücksetzen erforderlich |
|---|---|---|
| **ist größer als** | Wird ausgeführt, wenn die Ablesung **größer** als der definierte Schwellenwert ist. | ✅ Ja: Ablesung muss unter den Schwellenwert fallen, bevor erneut ausgelöst wird. |
| **ist kleiner als** | Wird ausgeführt, wenn die Ablesung **kleiner** als der definierte Schwellenwert ist. | ✅ Ja: Ablesung muss über den Schwellenwert steigen, bevor erneut ausgelöst wird. |
| **ist gleich** | Wird jedes Mal ausgeführt, wenn die Ablesung **genau gleich** dem Schwellenwert ist. | ❌ Nein: Wird bei jeder genauen Übereinstimmung ausgelöst. |
| **steigt um** | Wird jedes Mal ausgeführt, wenn der Gesamtwert um den Schwellenwert steigt. | ❌ Nein: Kontinuierliches Intervall ab dem letzten Auslösepunkt. |
| **sinkt um** | Wird jedes Mal ausgeführt, wenn der Gesamtwert um den Schwellenwert sinkt. | ❌ Nein: Kontinuierliches Intervall ab dem letzten Auslösepunkt. |
| **steigt um** *(Spike-Modell)* | Wird ausgeführt, wenn die Differenz zwischen den letzten beiden Ablesungen um den Schwellenwert **steigt**. | ❌ Nein: Wertet jede neue Ablesung gegenüber der vorherigen aus. |
| **sinkt um** *(Spike-Modell)* | Wird ausgeführt, wenn die Differenz zwischen den letzten beiden Ablesungen um den Schwellenwert **sinkt**. | ❌ Nein: Wertet jede neue Ablesung gegenüber der vorherigen aus. |
