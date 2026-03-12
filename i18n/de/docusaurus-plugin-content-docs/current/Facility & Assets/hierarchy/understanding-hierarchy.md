---
id: understanding-hierarchy
title: Hierarchie verstehen
---

Während die Module Anlagen und Vermögenswerte flache Listen Ihrer Datensätze bereitstellen, bietet das Modul **Hierarchie** einen zentralen, mehrstufigen Beziehungsbaum. Anstatt nur zu wissen, dass eine Maschine existiert, zeigt Ihnen die Hierarchie genau, wo sie sich befindet und womit sie verbunden ist.

### 1. Der Standort (Der Wurzelknoten)
Jede Hierarchie in UniCMMS beginnt mit einem einzigen, grundlegenden Wurzelknoten: dem **Standort (Site)**. Der Standort repräsentiert Ihre Gesamtorganisation, Ihren Campus oder Ihre primäre geografische Grenze. Jede Anlage und jeder Vermögenswert, den Sie im System erstellen, muss letztendlich unter dieser Wurzel verschachtelt sein.

### 2. Das Konzept des einheitlichen Baums
UniCMMS verwendet eine einheitliche Architektur. Dies bedeutet, dass physische Standorte (**Anlagen**) und physische Ausrüstungen (**Vermögenswerte**) zusammen in derselben Ansicht unter dem Standort existieren. Dies ermöglicht es Wartungsteams, ein Problem von einem riesigen Gebäude bis hin zu einem einzelnen Motor auf einen Blick zu verfolgen.

### 3. Strenge Verschachtelungsregeln
Um Ihre realen Abläufe genau abzubilden, erlaubt das System unendlich viele Verschachtelungsebenen unter der Standortwurzel. Sie können Beziehungen auf drei verschiedene Arten strukturieren:

*   **Geografisch (Anlage > Anlage)**: Platzieren einer kleineren Zone, eines Raums oder einer Etage innerhalb eines größeren Gebäudes.
*   **Standortbezogen (Anlage > Vermögenswert)**: Zuweisen eines eigenständigen Ausrüstungsgegenstands zu einem bestimmten Raum oder einer Zone.
*   **Mechanisch (Vermögenswert > Vermögenswert)**: Erstellen eines Eltern-/Kind-Ausrüstungsprofils, indem eine Unterkomponente in eine größere Maschine platziert wird.

### 4. Beispiel für eine reale Hierarchie
Um zu verstehen, wie Sie Ihren Baum Schritt für Schritt aufbauen, betrachten Sie dieses industrielle Standard-Setup:

*   🌐 **Weltweiter Campus** (Standort / Wurzelknoten)
    *   ↳ 🏢 **Hauptfertigungswerk** (Anlage auf oberster Ebene)
        *   ↳ 📍 **Produktionshalle A** (Untergeordnete Anlage)
            *   ↳ ⚙️ **Förderbandsystem 01** (Eltern-Asset)
                *   ↳ 🔧 **Hauptantriebsmotor** (Kind-Asset)
                *   ↳ 🔧 **Näherungssensor** (Kind-Asset)

Durch die Strukturierung Ihrer Daten auf diese Weise weiß das System automatisch, dass der Ausfall des „Hauptantriebsmotors“ das „Förderbandsystem 01“ in der „Produktionshalle A“ auf dem „Weltweiten Campus“ betrifft.
