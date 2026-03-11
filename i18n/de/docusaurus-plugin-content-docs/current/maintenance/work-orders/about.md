---
id: about
title: Über Arbeitsaufträge
sidebar_label: Über Arbeitsaufträge
sidebar_position: 1
---

# Arbeitsaufträge

Der **Arbeitsauftrag** ist der zentrale Motor Ihrer Wartungsoperationen. Es handelt sich um einen formalen, nachvollziehbaren digitalen Datensatz, der eine bestimmte Wartungsaufgabe von Anfang bis Ende autorisiert, detailliert und überwacht.

## Lebenszyklus und Statusverwaltung

### Statusgruppen

| Zustand | Status | Beschreibung |
|---|---|---|
| **In Bearbeitung (Aktiv)** | Entwurf, Offen, In Bearbeitung, In Warteschleife, In Überprüfung | Der Arbeitsauftrag ist „lebendig". Techniker können Details bearbeiten, Teile aufzeichnen und Zeitpläne anpassen. |
| **Terminal (Geschlossen)** | Abgeschlossen, Storniert | Der Arbeitsauftrag ist „beendet". Er wird zu einem **gesperrten historischen und finanziellen Datensatz**. |

### Statusübergangsmatrix

| Aktueller Status | Erlaubter(e) Folgestatus |
|---|---|
| **Entwurf** | Offen |
| **Offen** | In Bearbeitung |
| **In Bearbeitung** | In Warteschleife, In Überprüfung, Abgeschlossen oder Storniert |
| **In Warteschleife** | In Bearbeitung, In Überprüfung, Abgeschlossen oder Storniert |
| **In Überprüfung** | In Bearbeitung, Abgeschlossen oder Storniert |
| **Abgeschlossen** | *(Gesperrt)* — Schließt Arbeitskosten ab und zieht Inventar dauerhaft ab. |
| **Storniert** | *(Gesperrt)* — Nur Lesezugriff. Keine Bearbeitungen möglich. |

### Systemschutzmaßnahmen

**Regel A:** Das System erlaubt **nicht** den Abschluss eines Arbeitsauftrags, wenn Teile verwendet werden, die nicht auf Lager sind.

**Regel B:** Sobald ein Arbeitsauftrag als **Abgeschlossen** oder **Storniert** markiert wird, wird das gesamte Profil streng **schreibgeschützt**.

**Regel C:** Systemadministratoren können eine Außerkraftsetzung konfigurieren, die autorisierten Benutzern ermöglicht, geschlossene Arbeitsaufträge über **Admin-Portal > Mandanteneinstellungen > Betriebsberechtigungen** erneut zu öffnen.
