---
id: about
title: À propos des Déclencheurs
sidebar_label: À propos des Déclencheurs
sidebar_position: 1
description: Découvrez ce que sont les Déclencheurs dans UniCMMS et comment les Déclencheurs de Compteur et Temporels automatisent vos flux de maintenance.
---

# Déclencheurs

## À propos des Déclencheurs

Dans UniCMMS, le module **Déclencheurs** est le hub central de vos règles d'automatisation. Il vous permet de définir exactement **quand** des événements système critiques doivent se produire automatiquement.

En gérant les Déclencheurs comme un module indépendant, UniCMMS vous donne une flexibilité totale. Au lieu de reconstruire des règles d'automatisation depuis zéro pour chaque enregistrement, vous pouvez construire une **bibliothèque standardisée de déclencheurs** et les lier à différents modules dans votre système.

Pour soutenir différentes stratégies opérationnelles, vous pouvez créer deux types de règles d'automatisation :

### 1. Déclencheurs Temporels (Planificateur)
Les Déclencheurs Temporels automatisent les actions selon des **intervalles calendaires ou horaires stricts**. Ces déclencheurs garantissent que les événements système se produisent à des moments précis et récurrents, indépendamment de l'utilisation des actifs.

> **Exemple :** Vous créez un Déclencheur Temporel pour « Chaque lundi à 08h00 ». Vous pouvez lier ce seul déclencheur à plusieurs flux automatisés différents, garantissant que tout s'exécute exactement au même moment.

### 2. Déclencheurs de Compteur
Les Déclencheurs de Compteur automatisent les actions basées sur la **réalité physique de votre équipement**. Ces déclencheurs surveillent activement les données numériques enregistrées dans le module Compteurs. Vous définissez un seuil spécifique (la condition), et dès qu'un technicien enregistre un relevé atteignant ce seuil, le Déclencheur émet instantanément son signal.

> **Exemple :** Vous créez un Déclencheur de Compteur avec la règle : « Relevé dépasse 15 000 kWh ». Une fois lié à un module actif, le système exécutera l'action associée dès que ce seuil énergétique sera atteint.

---

## Logique des conditions du Déclencheur de Compteur

| Condition | Logique du système | Réinitialisation requise |
|---|---|---|
| **est supérieur à** | S'exécute quand le relevé est **supérieur** au seuil défini. | ✅ Oui : le relevé doit passer sous le seuil avant de se déclencher à nouveau. |
| **est inférieur à** | S'exécute quand le relevé est **inférieur** au seuil défini. | ✅ Oui : le relevé doit passer au-dessus du seuil avant de se déclencher à nouveau. |
| **est égal à** | S'exécute chaque fois que le relevé est **exactement égal** au seuil. | ❌ Non : se déclenche à chaque correspondance exacte. |
| **augmente de** | S'exécute chaque fois que le relevé total augmente de la valeur seuil. | ❌ Non : intervalle continu depuis le dernier point de déclenchement. |
| **diminue de** | S'exécute chaque fois que le relevé total diminue de la valeur seuil. | ❌ Non : intervalle continu depuis le dernier point de déclenchement. |
| **augmente de** *(Modèle Pic)* | S'exécute quand la différence entre les deux derniers relevés **augmente** de la valeur seuil. | ❌ Non : évalue chaque nouveau relevé par rapport au précédent. |
| **diminue de** *(Modèle Pic)* | S'exécute quand la différence entre les deux derniers relevés **diminue** de la valeur seuil. | ❌ Non : évalue chaque nouveau relevé par rapport au précédent. |
