---
id: about
title: À propos des Actifs
sidebar_label: À propos des Actifs
---

Dans UniCMMS, un **Actif** est une pièce d'équipement, une machine ou un véhicule spécifique que votre organisation suit, entretient et répare.

Alors qu'une Installation représente un lieu physique ou un bâtiment (le "Où"), un Actif représente l'équipement réel à entretenir (le "Quoi").

:::tip Exemple
Le "Hangar A" est une Installation. Le "Chariot Élévateur Toyota #04" qui y opère est un Actif.
:::

---

## 1. Types et Catégories d'Actifs
Les actifs reçoivent des étiquettes personnalisables (ex: CVC, Convoyeur, Flotte) pour regrouper les équipements similaires. Cela permet aux administrateurs de filtrer rapidement les tableaux de bord, de générer des rapports groupés et de comparer les performances d'équipements identiques sur l'ensemble du site.

## 2. Cycle de Vie et Statut
Chaque actif maintient un statut opérationnel en direct qui indique sa disponibilité actuelle.

*   **Actif**: L'équipement est en cours d'utilisation et pleinement opérationnel.
*   **Inactif**: L'équipement est temporairement hors service (ex: stockage longue durée).
*   **En Attente**: L'équipement est verrouillé ou en pause (ex: panne en attente de pièces).
*   **Retiré**: L'équipement a atteint la fin de sa vie utile et est définitivement déclassé.

**Raisons du Statut (Suivi de Cause)** : Pour assurer un rapport précis sur les temps d'arrêt, le système demande pourquoi le statut change. Les utilisateurs doivent sélectionner une raison correspondante.

## 3. Hiérarchies d'Actifs (Parent / Enfant)
Les machines complexes tombent rarement en panne en un seul bloc ; ce sont les composants individuels qui lâchent. Le système permet de construire des hiérarchies à plusieurs niveaux :

*   **Actif Parent**: Le système ou l'unité principale (ex: Unité CVC Industrielle).
*   **Actif Enfant (Sous-actif)**: Un composant à entretenir à l'intérieur de l'unité principale (ex: Compresseur de refroidissement).

## 4. Le Hub du Profil d'Actif
L'ouverture d'un profil d'actif donne accès à :

*   **Insights (KPIs)**: Analyses en temps réel (taux de disponibilité, taux de panne).
*   **Historique des Statuts**: Journal d'audit inaltérable de chaque changement.
*   **Amortissement**: Suivi financier de la réduction de valeur.
*   **Garanties**: Garanties fournisseurs liées à la machine.
*   **Compteurs**: Heures de fonctionnement, jauges de température, etc.
*   **Ordres de Travail**: Grand livre complet de toutes les tâches de maintenance.
