---
id: understanding-hierarchy
title: Comprendre la Hiérarchie
---

Alors que les modules Installations et Actifs fournissent des listes à plat de vos enregistrements, le module **Hiérarchie** fournit un arbre relationnel centralisé à plusieurs niveaux. Au lieu de simplement savoir qu'une machine existe, la Hiérarchie vous montre exactement où elle se trouve et à quoi elle est connectée.

### 1. Le Site (Le Nœud Racine)
Chaque hiérarchie dans UniCMMS commence par un nœud racine unique et fondamental : le **Site**. Le Site représente votre organisation globale, votre campus ou votre limite géographique principale. Chaque installation et chaque actif que vous créez dans le système doit finalement être imbriqué sous cette racine.

### 2. Le Concept de l'Arbre Unifié
UniCMMS utilise une architecture unifiée. Cela signifie que les lieux physiques (**Installations**) et les équipements physiques (**Actifs**) vivent ensemble dans la même vue sous le Site. Cela permet aux équipes de maintenance de retracer un problème d'un immense bâtiment jusqu'à un seul moteur en un coup d'œil.

### 3. Règles d'Imbrication Strictes
Pour refléter précisément vos opérations réelles, le système permet des niveaux infinis d'imbrication sous la racine du Site. Vous pouvez structurer les relations de trois manières distinctes :

*   **Géographique (Installation > Installation)** : Placer une zone, une pièce ou un étage plus petit à l'intérieur d'un bâtiment plus grand.
*   **Locatif (Installation > Actif)** : Affecter un équipement autonome à une pièce ou une zone spécifique.
*   **Mécanique (Actif > Actif)** : Créer un profil d'équipement Parent/Enfant en plaçant un sous-composant à l'intérieur d'une machine plus grande.

### 4. Exemple de Hiérarchie Réelle
Pour comprendre comment construire votre arbre étape par étape, regardez cette configuration industrielle standard :

*   🌐 **Campus des Opérations Mondiales** (Le Site / Nœud Racine)
    *   ↳ 🏢 **Usine de Fabrication Principale** (Installation de niveau supérieur)
        *   ↳ 📍 **Zone de Production A** (Installation enfant)
            *   ↳ ⚙️ **Système de Convoyeur 01** (Actif parent)
                *   ↳ 🔧 **Moteur d'Entraînement Primaire** (Actif enfant)
                *   ↳ 🔧 **Capteur de Proximité** (Actif enfant)

En structurant vos données de cette manière, si le "Moteur d'Entraînement Primaire" tombe en panne, le système sait automatiquement qu'il affecte le "Système de Convoyeur 01" situé dans la "Zone de Production A" sur le "Campus des Opérations Mondiales".
