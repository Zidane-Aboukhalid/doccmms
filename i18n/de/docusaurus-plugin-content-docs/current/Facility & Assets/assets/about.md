---
id: about
title: Über Vermögenswerte
sidebar_label: Über Vermögenswerte
---

In UniCMMS ist ein **Vermögenswert** (Asset) ein bestimmtes, physisches Ausrüstungsgegenstand, eine Maschine oder ein Fahrzeug, das Ihre Organisation verfolgt, wartet und repariert.

Während eine Anlage einen physischen Standort oder ein Gebäude darstellt (das „Wo“), repräsentiert ein Vermögenswert die eigentliche wartungsfähige Ausrüstung (das „Was“).

:::tip Beispiel
„Lagerhalle A“ ist eine Anlage. Der darin betriebene „Toyota Gabelstapler #04“ ist ein Vermögenswert.
:::

---

## 1. Asset-Typen & Kategorien
Vermögenswerten werden anpassbare Labels zugewiesen (z. B. HVAC, Förderband, Flotte), um ähnliche Geräte zu gruppieren. Dies ermöglicht es Administratoren, Dashboards schnell zu filtern, Massenberichte auszuführen und die Leistung sowie die Kosten identischer Maschinen im gesamten Unternehmen zu vergleichen.

## 2. Asset-Lebenszyklus & Status
Jeder Vermögenswert behält einen Live-Betriebsstatus bei, der seine aktuelle Verfügbarkeit vorgibt.

*   **Aktiv**: Das Gerät ist derzeit im Einsatz und voll funktionsfähig.
*   **Inaktiv**: Das Gerät ist vorübergehend außer Betrieb (z. B. in Langzeitlagerung).
*   **In Warteschleife**: Das Gerät ist vorübergehend gesperrt oder pausiert (z. B. defekt und wartet auf Ersatzteile).
*   **Ausgemustert**: Das Gerät hat das Ende seines nutzbaren Lebenszyklus erreicht und ist dauerhaft außer Betrieb genommen.

**Statusgründe (Ursachenverfolgung)**: Um eine präzise Ausfallzeitberichterstattung zu gewährleisten, fragt das System nach dem „Warum“. Benutzer müssen bei jeder Statusänderung einen entsprechenden Grund auswählen.

## 3. Asset-Hierarchien (Eltern / Kind)
Komplexe Maschinen fallen selten als gesamte Einheit aus; einzelne Komponenten versagen. Das System ermöglicht es Ihnen, mehrstufige Hierarchien aufzubauen:

*   **Eltern-Asset**: Das Hauptsystem oder die Haupteinheit (z. B. Industrielle HLK-Einheit).
*   **Kind-Asset (Unter-Asset)**: Eine wartungsfähige Komponente innerhalb der Haupteinheit (z. B. Kühlkompressor).

## 4. Das Asset-Profil-Hub
Das Öffnen eines Asset-Profils bietet direkten Zugriff auf:

*   **Insights (KPIs)**: Echtzeit-Analysen (Verfügbarkeit, Ausfallraten).
*   **Statushistorie**: Ein unveränderliches Audit-Log jeder Statusänderung.
*   **Abschreibung**: Finanzielle Verfolgung der Wertminderung.
*   **Garantien**: Mit der Maschine verknüpfte Herstellergarantien.
*   **Zähler**: Betriebsstunden, Temperaturanzeigen usw.
*   **Arbeitsaufträge**: Ein vollständiges Verzeichnis aller Wartungsaufgaben.
