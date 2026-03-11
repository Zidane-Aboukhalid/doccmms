---
id: how-to-create-a-time-trigger
title: Comment créer un Déclencheur Temporel
sidebar_label: Créer un Déclencheur Temporel
sidebar_position: 6
---

# Comment créer un Déclencheur Temporel

## Étape 1 : Accéder aux Déclencheurs Temporels
Depuis la barre latérale, développez **Maintenance** et sélectionnez **Déclencheur Temporel**.

## Étape 2 : Ouvrir le formulaire de création
Cliquez sur le bouton **+ Créer** en haut à droite.

## Étape 3 : Définir les paramètres

| Champ | Instruction | Requis |
|---|---|---|
| **Nom** | Saisissez un identifiant descriptif pour cette planification. | ✅ Oui |
| **Récurrence** | Sélectionnez le modèle de planification (**Hebdomadaire** ou **Mensuel**). | ✅ Oui |
| **Date de début** | Sélectionnez la date à laquelle la planification devient active. | — |
| **Date de fin** | Sélectionnez la date à laquelle la planification expire. | — |
| **Description** | Fournissez un contexte sur l'objectif de ce déclencheur. | — |

## Étape 4 : Configurer la logique de récurrence

**Hebdomadaire :**
- **Chaque** : Sélectionnez un ou plusieurs jours de la semaine.
- **À** : Définissez l'heure d'exécution exacte.

**Mensuel (Jours spécifiques) :**
- **Chaque** : Sélectionnez les mois applicables.
- **Le** : Sélectionnez des dates calendaires spécifiques (ex. : 1er, 15, 31).
- **À** : Définissez l'heure d'exécution exacte.

**Mensuel (Derniers jours) :**
- **Chaque** : Sélectionnez les mois applicables.
- **Exécuter le** : Choisissez une date relative de fin de mois.
- **À** : Définissez l'heure d'exécution exacte.

## Étape 5 : Finaliser et sauvegarder
Cliquez sur **Soumettre**. Le système calcule automatiquement la prochaine heure d'exécution et l'affiche dans la colonne **Prochaine exécution**.
