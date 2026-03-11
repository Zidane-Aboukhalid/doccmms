---
id: how-to-create-a-procedure-template
title: Comment créer un Modèle de Procédure
sidebar_label: Créer un Modèle de Procédure
sidebar_position: 2
---

# Comment créer un Modèle de Procédure

## Étape 1 : Accéder aux Modèles de Procédures
Depuis la barre latérale, développez **Maintenance** et sélectionnez **Modèles de Procédures**. Cliquez sur **+ Créer**.

## Étape 2 : Définir les paramètres généraux

| Champ | Instruction | Requis |
|---|---|---|
| **Nom** | Saisissez un identifiant clair (ex. : « Vérification quotidienne pré-démarrage compresseur »). | ✅ Oui |
| **Actif** | Liez cette procédure à un actif spécifique. Laissez vide pour un modèle global. | — |
| **Types** | Catégorisez le modèle (ex. : « Préventif »). | — |
| **Description** | Fournissez des instructions générales ou un contexte de sécurité pour le technicien. | — |

## Étape 3 : Utiliser la barre d'outils du constructeur
Maximum **20 champs par modèle**.

| Bouton | Fonction |
|---|---|
| **H (Ajouter un titre)** | Insère un séparateur visuel pour regrouper les tâches. |
| **! (Ajouter une note)** | Insère un bloc d'information non actionnable (ex. : avertissement de sécurité). |
| **+ (Ajouter une tâche)** | Insère une étape actionnable que le technicien doit compléter. |

## Étape 4 : Configurer les tâches
Pour chaque bloc **Tâche** : saisissez le nom et la description, activez **Requis** si nécessaire, puis sélectionnez le **Type de saisie**.

## Étape 5 : Logique conditionnelle *(Optionnel)*
1. Cliquez sur l'**icône Arbre de logique** sur n'importe quelle tâche.
2. Définissez votre règle : **Supérieur à**, **Inférieur à**, **Égal à**, **Différent de**, ou **Entre**.
3. Cliquez sur **+** dans le bloc logique pour créer des sous-tâches.

## Étape 6 : Aperçu et sauvegarde
Vérifiez en mode **APERÇU**, puis revenez en mode **ÉDITEUR** et cliquez sur **Soumettre**.
