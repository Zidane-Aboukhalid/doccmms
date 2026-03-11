---
id: how-to-change-work-order-status
title: Comment changer le statut d'un Ordre de Travail
sidebar_label: Changer le statut
sidebar_position: 6
---

# Comment changer le statut d'un Ordre de Travail

1. Naviguez vers **Maintenance > Ordres de Travail**. Localisez votre Ordre de Travail.
2. Cliquez sur **Plus (⋯)**, puis survolez **Marquer comme >**.
3. Le sous-menu affiche uniquement les **statuts autorisés**. Cliquez sur le statut approprié.

## Le déclencheur « Terminé » : Finances et inventaire

### Étape 1 : Confirmer la finalisation
Quand vous sélectionnez **Terminé**, le système affiche un modal **Confirmer la finalisation** :

| Champ | Instruction | Requis |
|---|---|---|
| **Durée** | Saisissez le temps total final passé sur la tâche. | ✅ Oui |
| **Date de fin** | Sélectionnez la date et l'heure exactes de fin du travail. | ✅ Oui |

### Étape 2 : Réviser les coûts de main-d'œuvre
Le bas du modal calcule automatiquement le coût financier exact de la main-d'œuvre (Heures × Taux horaire + Heures sup. = Coût total).

### Étape 3 : Soumettre
Cliquez sur **Soumettre**. À ce moment précis, le système **finalise les coûts de main-d'œuvre** et **déduit définitivement** tous les articles des « Pièces et Fournitures » de votre inventaire.
